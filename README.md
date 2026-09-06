# AliothDigital — Next.js site

This is the Next.js (App Router + TypeScript) migration of the original static
HTML/CSS/JS AliothDigital website. The UI, copy, styling and behaviour are
unchanged — this is a like-for-like rebuild on Next.js, not a redesign.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Build & run in production

```bash
npm run build
npm run start
```

## Project structure

- `app/` — one folder per route (App Router). Each `page.tsx` holds that
  page's unique content and its `metadata` export (title, description,
  canonical URL, robots). `app/layout.tsx` renders the shared header, footer,
  cookie banner and meeting panel around every page.
- `components/Header.tsx`, `Footer.tsx`, `CookieBanner.tsx`, `MeetingPanel.tsx`
  — the chrome that was identical across every page of the original site.
- `components/SiteScripts.tsx` — a client component that ports the original
  `assets/js/main.js` (mobile menu, mega-menu, scroll-reveal animations,
  cookie banner, meeting panel, tender-file validation, form validation,
  `?route=` pre-selection on the contact form). It re-initialises on every
  client-side navigation so behaviour matches a full page load.
- `app/globals.css` — the original `assets/css/style.css`, copied over as-is
  (one stray extra `}` from the original file was removed — it was a no-op in
  browsers but rejected by Next's stricter CSS parser).
- `public/images`, `public/icons` — the original image/icon assets.
- `next.config.ts` — 301 redirects from every old `/page.html` URL to its new
  clean route (e.g. `/about.html` → `/about`), the `bid-tender.html` →
  `/proposal-development` redirect from the original `_redirects` file, and
  the same security headers that were in the original `.htaccess`/`_headers`.

## Routes

| Old URL                        | New route                  |
|---------------------------------|-----------------------------|
| `/index.html`                   | `/`                          |
| `/about.html`                   | `/about`                     |
| `/contact.html`                 | `/contact`                   |
| `/services.html`                | `/services`                  |
| `/work.html`                    | `/work`                      |
| `/insights.html`                | `/insights`                  |
| `/proposal-development.html`    | `/proposal-development`      |
| `/upload-tender.html`           | `/upload-tender`             |
| `/recruitment.html`             | `/recruitment`                |
| `/digital-marketing.html`       | `/digital-marketing`          |
| `/web-development.html`         | `/web-development`            |
| `/web-maintenance.html`         | `/web-maintenance`            |
| `/software-it-services.html`    | `/software-it-services`       |
| `/ai-solutions.html`            | `/ai-solutions`               |
| `/graphic-design.html`          | `/graphic-design`             |
| `/video-editing.html`           | `/video-editing`              |
| `/wordpress-plugins.html`       | `/wordpress-plugins`          |
| `/privacy.html`                 | `/privacy`                    |
| `/terms.html`                   | `/terms`                      |
| `/accessibility.html`           | `/accessibility`              |
| `/thank-you.html`               | `/thank-you`                  |
| `/bid-tender.html`              | `/proposal-development`       |
| `/404.html`                     | handled by `app/not-found.tsx`|

All old `.html` URLs 301-redirect to the new routes automatically (see
`next.config.ts`), so existing bookmarks/backlinks/search rankings keep
working.

## Forms

Both forms (contact enquiry + tender upload) still post directly to
`https://formsubmit.co/hello@aliothdigital.com` exactly as before — no
backend or API route was introduced, so no server-side changes are needed to
keep receiving submissions.

## Fonts

Cormorant Garamond and Manrope are still loaded via the same Google Fonts
`<link>` tags as the original (rather than `next/font`), to guarantee
zero visual difference.

## Notes for deployment

This app has no server-only logic (no API routes, no `use server` actions),
so it deploys cleanly to Vercel, Netlify, or any Node host. If you want a
fully static export instead (no Node server at runtime), you can add
`output: "export"` to `next.config.ts` — note that this disables the
`redirects()`/`headers()` config, so you'd need to configure those at your
host/CDN level instead (as the original `_redirects`/`_headers` files did).
