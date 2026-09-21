# AGENTS.md

## Project overview
This repository is a small Astro site for a personal CV/resume. The home page is driven by a structured data object and a set of reusable Astro components.

## Important files
- `src/pages/index.astro` — page composition and section ordering.
- `src/data/cv_esp.ts` — primary content source for personal info, experience, education, and skills.
- `src/components/` — reusable UI sections like Hero, About, Experience, Education, and Skill.
- `src/layouts/Base.astro` — shared page shell and metadata.
- `src/styles/global.css` — global styling and Tailwind setup details.
- `astro.config.mjs` — project config; Tailwind is enabled here through `@tailwindcss/vite`.

## Commands
Run from the repository root:
- `npm install` — install dependencies
- `npm run dev` — start the local dev server
- `npm run build` — run type checks and production build
- `npm run preview` — preview the built site locally

## Conventions
- Prefer editing the data in `src/data/cv_esp.ts` when changing CV content instead of hard-coding strings into components.
- Keep the structure in `src/pages/index.astro` as the reference for which data sections are rendered.
- Preserve the existing Spanish content and professional tone unless explicitly asked to change it.
- Favor small, targeted changes. This project is intentionally simple and data-driven.
- Keep styling in Tailwind classes and avoid adding unrelated framework or build complexity.

## Validation
Before concluding a meaningful change, run:
- `npm run build`

This ensures both Astro and TypeScript checks remain green.
