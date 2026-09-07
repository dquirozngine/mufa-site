# Mufa Site

Static landing page — books plus a contact form. Next.js App Router + TypeScript
+ Tailwind, exported to static HTML and served from a Cloudflare Worker.

Same architecture as `ad-ngine-landing`: `output: "export"` produces `./out`,
and a small Worker sits in front to handle the one dynamic route.

## Run locally

```bash
pnpm install
pnpm dev            # http://localhost:3000 — pages only, /api/contact 404s
```

To exercise the contact form you need the Worker, which serves the built
output rather than the dev server:

```bash
pnpm preview        # builds, then runs wrangler dev on the real Worker
```

Without a Resend key the form returns `500 Email service is not configured` —
that's the intended fail-closed behaviour. To send for real locally, create
`.dev.vars` (gitignored):

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

## Edit content

All copy — book titles, links, descriptions, about text, form labels — lives in
one file:

```
lib/site-content.ts
```

Sections are composed in `app/page.tsx`. Adding a book is one entry in
`siteContent.books.items`; set `cover` to a path under `/public/covers/` or
leave it `null` for the typographic fallback card.

## Deploy

One-time setup:

```bash
wrangler login
wrangler secret put RESEND_API_KEY
```

Then, for every deploy:

```bash
pnpm deploy         # builds and pushes to Cloudflare
```

Non-secret config (`EMAIL_FROM`, `EMAIL_TO`) is in `wrangler.toml` under
`[vars]`. The `EMAIL_FROM` domain must be verified in Resend before sends
succeed.

## Layout

```
app/               layout, page, global CSS
components/        one file per section
lib/site-content.ts   all copy
worker/index.ts    POST /api/contact → Resend; everything else → static assets
wrangler.toml      Worker + [assets] binding
```
