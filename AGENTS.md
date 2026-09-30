# Kashless Ventures website — agent guide

## Purpose and scope

This repository is the public marketing website for **Kashless Ventures Pvt. Ltd.** It positions the company around three pillars: **Technology Solutions, Business Consultation, and Strategic Partnerships**. It is a single Next.js application; there is no checked-in Express server or production database in the current tree, despite an older README reference to one.

Use this file as the project map. Read only the relevant route/component and `src/lib/data.js` before making a focused change. `src/AGENTS.md` also applies to all source work: it contains a Next.js 16 rule requiring the applicable local Next documentation to be checked before changing Next-specific code.

## Stack and commands

- Next.js `16.3.2`, React `19.2.8`, JavaScript/JSX (no TypeScript), App Router.
- Tailwind CSS v4 via `@tailwindcss/postcss`; global custom CSS lives in `src/app/globals.css`.
- Icons: `lucide-react`. Module alias: `@/*` maps to `src/*` (`jsconfig.json`).
- Package manager/lockfile: npm.

```bash
npm run dev     # development server
npm run lint    # ESLint / Next core web vitals config
npm run build   # production build
npm start       # serve a completed production build
```

There is no automated test suite. For UI work, run lint and build where practical, then manually inspect affected desktop and mobile layouts.

## Project layout

```text
src/
  app/                 App Router pages, metadata, redirects, sitemap, robots, global styles
  components/          Shared layout, form, animation, button, CTA, and legal-page components
  lib/data.js          Canonical site copy, navigation, service lists, contact data, and SEO map
public/                Logo assets and the splash video asset
next.config.mjs        Legacy `/services/*` redirects
```

`src/app/layout.js` is the global shell: it imports global CSS, renders `IntroSplash`, `Header`, `<main>`, and `Footer`, and owns default metadata plus Organization/WebSite JSON-LD. Therefore every route, including `/admin`, receives the public header/footer and splash overlay.

## Routes

### Public pages

- `/` — homepage: three pillars and the seven-step delivery framework.
- `/about` — company positioning and values.
- `/technology-solutions` — technology capability index.
- `/technology-solutions/software-digital-products`
- `/technology-solutions/cloud-infrastructure`
- `/technology-solutions/cybersecurity`
- `/technology-solutions/hardware-workplace`
- `/technology-solutions/licensing-managed-services`
- `/technology-solutions/digital-transformation`
- `/business-consultation`, `/strategic-partnerships`, `/insights`, `/contact`, `/careers`.
- Legal: `/privacy-policy`, `/terms`, `/disclaimer`, `/cookie-policy`.

The technology detail pages are intentionally separate page files with similar layouts; update the targeted page(s) directly unless a requested change clearly warrants extracting a shared component.

### Admin and legacy URLs

- `/admin/login` and `/admin` are **demo-only client-side UI**; they are not secure authentication or a data backend. See “Enquiries and admin” below.
- `/services` and `/services/[slug]` redirect to current technology URLs. `next.config.mjs` has permanent redirects for the common old service URLs.
- `/about-us` redirects to `/about`; `/partnerships` and `/capital-strategic-investments` redirect to `/strategic-partnerships`.
- `/personal-loan`, `/home-loan`, `/instant-loan`, and `/instant-personal-loan` are legacy route handlers returning redirects. They and legacy investment pages are excluded by `robots.js`.

When adding, renaming, or removing an indexable public route, update all applicable places: the page metadata via `createSeoMetadata`, `src/app/sitemap.js`, `src/app/robots.js` if indexing policy changes, navigation/footer if appropriate, and redirects for replaced URLs. Canonical site URL is `https://www.kashless.in`.

## Content, SEO, and navigation

`src/lib/data.js` is the canonical source for:

- company identity/contact data (`siteConfig`), primary navigation, six technology capabilities, delivery steps, consultation/partnership/career copy, and contact-form choices;
- `seoMetadataMap` and `createSeoMetadata(key, canonicalPath)`, used by public pages for titles, descriptions, canonical URLs, Open Graph, and Twitter metadata.

Prefer updating this module over duplicating shared business facts or lists in page files. New metadata needs a matching key in `seoMetadataMap`. Preserve the company’s current wording and positioning unless the request explicitly changes content.

## UI conventions

- The visual system uses navy `#0B1E3D`, teal `#0F6E62`, pale surface `#F2F5F8`, and `Inter`/system sans. CSS variables and shared utility classes are in `globals.css`.
- Use Tailwind utility classes for page-specific layout. Reuse `.btn-primary`, `.btn-secondary`, `.btn-teal`, `.btn-white`, `.btn-outline-white`, `.card-hover`, `.link-underline`, and `Reveal` where they fit.
- Use `next/link` for internal navigation and Lucide icons. Existing logos use plain `<img>` from `/public`; retain the established pattern unless an image-handling change is explicitly needed.
- Maintain the responsive conventions already used: centered `max-w-7xl` wrappers and `px-4 sm:px-6 lg:px-8`; header desktop navigation begins at `xl`.
- `Header`, `Footer`, and `IntroSplash` are client components. `IntroSplash` locks scrolling and auto-dismisses after about 2.8 seconds; account for this in interaction/UI verification.

## Enquiries and admin caveats

`ContactForm` validates browser-side then POSTs JSON to `${NEXT_PUBLIC_API_BASE_URL || ""}/api/enquiries`. This repository has **no** `/api/enquiries` route. If the request fails, it stores the enquiry in browser `localStorage` under `kashless_enquiries` and still reports success. `NEXT_PUBLIC_API_BASE_URL` is the only environment variable currently referenced.

`/admin/login` accepts any non-empty credentials and sets `kashless_admin_auth=1` in `localStorage`. `/admin` merges local enquiries with hard-coded demo enquiries; status/notes updates are state-only, not persisted. Do not describe or deploy this as real authentication, authorization, CRM, or durable enquiry storage. A production implementation needs a server endpoint, validation/rate limiting, durable storage, and real auth/session protection.

The careers form is also presentation-only: it simulates a successful submission and does not send or save applications.

## Important maintenance notes

- `README.md` is partly historical and claims a `server/` directory that is absent. Trust the repository tree and this guide over that setup instruction.
- `ServiceCard`, `ProcessTimeline`, `CTABand`, `Buttons`, and `TechIllustration` are currently not imported by application routes. `ServiceCard` also expects an older service object shape and routes to legacy `/services`; check and modernize it before reusing it.
- Avoid committing generated/dependency directories: `.next/`, `node_modules/`, `out/`, and `Feature_Changes/` are ignored. Keep unrelated working-tree edits intact.
- Existing source contains some mojibake characters in rendered strings (for example, the copyright symbol). Do not make broad encoding rewrites unless specifically requested; use UTF-8 for new content.
