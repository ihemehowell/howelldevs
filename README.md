# Howelldevs — Portfolio

Personal portfolio of Iheme Uchenna Howell, built with Vite, React 19, TypeScript, Tailwind CSS v4 and Motion.

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Editing content

All copy, projects, packages, services and links live in [`src/data.ts`](src/data.ts).
Project screenshots are in `public/projects/` (WebP, 1400px wide).

## Brand

Logo files are in `public/brand/`:

- `logo-mark.svg` — the H monogram (also used as the favicon)
- `logo-full-dark.svg` / `logo-full-light.svg` — mark + "howelldevs." wordmark for dark / light backgrounds

Brand accent: `#FF5A1F` · Ink: `#0B0B0C` · Paper: `#F4F3EF` · Type: Geist, Instrument Serif (italic accents), Geist Mono.

## Deploy

Static site — deploy `dist/` to Vercel, Netlify or any static host (Vercel auto-detects Vite).
