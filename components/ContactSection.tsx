"use client";

import { useState } from "react";
import { siteContent } from "@/lib/site-content";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactSection() {
  const { contact } = siteContent;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        // Surface the server's own message when it gave one — those are the
        // actionable validation errors ("Please enter a valid email address").
        setError(body.error || contact.error);
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setError(contact.error);
      setStatus("error");
    }
  }

  // Underline-only inputs. A boxed field would fight the row rules that run
  // through the rest of the page; a baseline rule belongs to the same system.
  const fieldClass =
    "w-full border-0 border-b-2 border-graphite bg-transparent px-0 py-3 text-base text-ink placeholder:text-graphite/40 focus:border-accent focus:outline-none";
  const labelClass = "mb-1 block text-xs uppercase tracking-wide";

  return (
    <section
      id="contact"
      className="scroll-mt-16 border-b border-graphite px-5 py-16 lg:px-8 lg:py-24"
    >
      <div className="grid gap-8 sm:grid-cols-[6rem_1fr] lg:gap-16">
        <h2 className="text-xs uppercase tracking-wide">{contact.label}</h2>

        <div>
          <p className="font-display text-3xl font-bold uppercase leading-none tracking-display sm:text-5xl">
            {contact.title}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed">
            {contact.description}
          </p>

          <form onSubmit={handleSubmit} className="relative mt-12">
            {/* Honeypot. Hidden from humans, irresistible to bots — the Worker
                silently accepts and drops any submission that fills it in. */}
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  {contact.fields.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  autoComplete="name"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  {contact.fields.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mt-8">
              <label htmlFor="subject" className={labelClass}>
                {contact.fields.subject}
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                maxLength={150}
                className={fieldClass}
              />
            </div>

            <div className="mt-8">
              <label htmlFor="message" className={labelClass}>
                {contact.fields.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                maxLength={4000}
                className={`${fieldClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="invert-hover mt-10 w-full px-8 py-4 text-xs uppercase tracking-wide disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-w-[14rem]"
            >
              {status === "sending" ? contact.sending : contact.submit}
            </button>

            {/* aria-live so screen readers announce the outcome, which is
                otherwise a purely visual change below the submit button. */}
            <div aria-live="polite" className="min-h-[1.5rem]">
              {status === "sent" ? (
                <p className="mt-6 border-l-2 border-graphite pl-4 text-sm">
                  {contact.success}
                </p>
              ) : null}
              {status === "error" && error ? (
                <p className="mt-6 border-l-2 border-accent pl-4 text-sm text-accent">
                  {error}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
