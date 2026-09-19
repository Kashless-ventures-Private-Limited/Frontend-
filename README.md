# Kashless Ventures Website — Content Update

Updated from `Kashless_Ventures_Website_Changes_and_Final_Copy(1).xlsx`.

## Content changes
- Repositioned the public site around **Technology Solutions + Business Consultation + Strategic Partnerships**.
- Replaced the homepage hero, positioning, three-pillar services and CTAs.
- Added **Business Consultation** and **Strategic Partnerships** pages.
- Added an **Insights** placeholder page.
- Updated About Us, Technology Solutions, Contact, footer and metadata.
- Added Digital Transformation as a technology capability.
- Updated technology delivery framework to **Understand → Plan → Build → Secure → Deploy → Support → Scale**.
- Removed investment-focused pages from the public navigation and redirected the legacy capital/partnership URLs.
- Simplified the enquiry form to business-focused fields.

## Express API
The uploaded archive contained the Next.js `src/` tree but did not contain an existing Express project. A minimal Express API has therefore been added under `server/` to support the updated enquiry form.

```bash
cd server
npm install
npm run dev
```

Set `NEXT_PUBLIC_API_BASE_URL=http://localhost:4000` in the Next.js environment.

The Express API currently stores enquiries in memory for development. Connect `/api/enquiries` to the existing production database/authentication/email stack before deployment.

## Important
The original upload did not include the Next.js root `package.json`, lockfile, `public/` directory or an existing Express backend, so those were not reconstructed or guessed.
