// Cloudflare Worker fronting the static site.
//
// Routes:
//   POST /api/contact  →  validate body, send email via Resend, return JSON.
//   everything else    →  pass through to the [assets] binding (static files
//                         produced by `pnpm build` with output: "export").
//
// No Node, no Resend SDK — we POST to Resend's HTTPS API with built-in fetch().

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  RESEND_API_KEY: string;
  EMAIL_FROM?: string;
  EMAIL_TO?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function json(body: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...(init.headers || {}),
    },
  });
}

function escape(s: string) {
  return s.replace(/[<>]/g, (c) => (c === "<" ? "&lt;" : "&gt;"));
}

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

function buildEmail(payload: ContactPayload) {
  const name = escape(payload.name);
  const email = escape(payload.email);
  const subjectLine = payload.subject ? escape(payload.subject) : null;
  const message = escape(payload.message).replace(/\n/g, "<br/>");

  const subject = `New message from the site — ${name}`;

  const rows: [string, string][] = [
    ["Name", name],
    [
      "Email",
      `<a href="mailto:${email}" style="color: #b4530a; text-decoration: none;">${email}</a>`,
    ],
  ];
  if (subjectLine) rows.push(["Subject", subjectLine]);

  const rowsHtml = rows
    .map(
      ([label, value], i) => `<tr${i === 0 ? "" : ' style="border-top: 1px solid #efe6db;"'}>
      <td style="padding: 12px 16px; font-size: 13px; color: #666; width: 140px; vertical-align: top;">${label}</td>
      <td style="padding: 12px 16px; font-size: 14px; color: #1b1714; font-weight: 600;">${value}</td>
    </tr>`,
    )
    .join("\n");

  const html = `<div style="font-family: 'Inter', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 20px;">
  <h2 style="color: #1b1714; margin: 0 0 16px;">New message</h2>
  <p style="color: #444; font-size: 14px; margin: 0 0 24px;">Someone got in touch through the site.</p>
  <table style="width: 100%; border-collapse: collapse; background: #fdf8f3; border-radius: 8px; overflow: hidden;">
    ${rowsHtml}
  </table>
  <div style="margin-top: 20px; padding: 16px 20px; background: #fff; border-left: 4px solid #d4700f; border-radius: 6px;">
    <div style="font-size: 13px; color: #666; margin-bottom: 8px;">Message</div>
    <div style="font-size: 14px; color: #1b1714; line-height: 1.6;">${message}</div>
  </div>
  <p style="color: #999; font-size: 12px; margin: 24px 0 0;">
    Reply to <a href="mailto:${email}" style="color: #b4530a;">${email}</a> to continue the conversation.
  </p>
</div>`;

  const lines = [
    "New message from the site",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
  ];
  if (payload.subject) lines.push(`Subject: ${payload.subject}`);
  lines.push("", "Message:", payload.message, "", `Reply to ${payload.email} to continue.`);

  return { subject, html, text: lines.join("\n") };
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405, headers: { Allow: "POST" } });
  }

  let body: {
    name?: unknown;
    email?: unknown;
    subject?: unknown;
    message?: unknown;
    // Honeypot: a field hidden from humans via CSS. Bots fill everything, so a
    // non-empty value here means "spam" — we accept it and drop it silently so
    // the bot doesn't learn to retry with the field blank.
    website?: unknown;
  };
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length > 100) {
    return json({ error: "Name is required (max 100 characters)" }, { status: 400 });
  }
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return json({ error: "Please enter a valid email address" }, { status: 400 });
  }
  if (subject.length > 150) {
    return json({ error: "Subject is too long (max 150 characters)" }, { status: 400 });
  }
  if (!message || message.length > 4000) {
    return json({ error: "Message is required (max 4000 characters)" }, { status: 400 });
  }

  if (!env.RESEND_API_KEY) {
    // Fail closed so a missing secret never silently swallows an inquiry.
    // Local dev without .dev.vars hits this branch too.
    return json({ error: "Email service is not configured" }, { status: 500 });
  }

  const { subject: emailSubject, html, text } = buildEmail({
    name,
    email,
    subject: subject || undefined,
    message,
  });

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.EMAIL_FROM || "Mufa <hello@example.com>",
      to: env.EMAIL_TO || "hello@example.com",
      subject: emailSubject,
      html,
      text,
      // Reply-To is the sender's address, so hitting Reply in your inbox lands
      // back at them rather than at your own address.
      reply_to: email,
    }),
  });

  if (!resendRes.ok) {
    const detail = await resendRes.text();
    console.error("Resend send failed", resendRes.status, detail);
    return json(
      { error: "We couldn't send your message. Please try again in a few minutes." },
      { status: 502 },
    );
  }

  return json({ ok: true });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact") {
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
