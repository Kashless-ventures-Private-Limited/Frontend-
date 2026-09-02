# Kashless MVP Website

A Next.js (App Router) implementation of the Kashless MVP site per
`Kashless_MVP_Requirements_UIUX.docx`: Home, Services Overview, 3 service detail
pages (Cloud & Infrastructure, Web Development, Cybersecurity), Contact / Request
a Consultation, legal pages, and a lightweight admin enquiries dashboard.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Notes on this demo build

- **Contact form**: validates client-side, generates a mock reference ID (e.g.
  `KL-482913`), and saves the enquiry to `localStorage`
  (key `kashless_enquiries`) instead of a real database/email service. Wire
  this up to a real API route + Postgres/MySQL + an email provider (e.g.
  Resend, SendGrid) for production.
- **Admin dashboard** (`/admin/login`, `/admin`): demo-only auth — any
  non-empty email/password signs in (flag stored in `localStorage`). Enquiries
  are seeded with 4 sample records plus anything submitted via the live
  Contact form. Replace with real authentication (e.g. NextAuth) and a
  database-backed API before go-live.
- **Fonts**: uses the system sans-serif stack instead of fetching Google
  Fonts (this sandbox has no internet access to fonts.googleapis.com). To use
  Inter as specified in the design system, swap in `next/font/google` in
  `src/app/layout.js` — it works fine once deployed with normal internet
  access.
- **SEO**: per-page `metadata` exports are wired up (title/description); add
  a `sitemap.js` / `robots.js` under `src/app` and connect GA4 before launch,
  per section 10 of the requirements doc.

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · lucide-react icons

## Project structure

```
src/
  app/
    page.js                     Home
    services/page.js            Services overview
    services/[slug]/page.js     Cloud / Web Dev / Cybersecurity detail template
    contact/page.js              Contact / consultation request
    privacy-policy, terms, cookie-policy/page.js
    admin/login/page.js, admin/page.js
  components/                   Header, Footer, ContactForm, ServiceCard, etc.
  lib/data.js                   All site copy and service content in one place
```
