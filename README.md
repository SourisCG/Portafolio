# SourisCG — Portfolio

Personal portfolio for Sebastian Garcia (SourisCG), a software engineering student who builds Java/JavaFX desktop tools, developer utilities and small experiments with a retro web soul.

## Stack

- [Astro](https://astro.build) (static site, no JS framework runtime)
- TypeScript
- Hand-written CSS with a retro/pixel aesthetic
- Bilingual: `/en` and `/es` (root `/` redirects to `/en/`)

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in ./dist
npm run preview    # preview the production build
```

Per the project's `AGENTS.md`, prefer running the dev server in background mode if your tooling supports it:

```bash
astro dev --background
astro dev status
astro dev logs
```

## Project structure

```
src/
  i18n/         translations + locale utilities
  data/         project metadata (projects.ts)
  components/   Header, Footer, ProjectCard
  layouts/      Base.astro
  pages/        routes
    index.astro             /  (redirects to /en/)
    [locale]/               /en, /es
      index.astro           home
      about.astro
      projects.astro
      now.astro
      links.astro
      projects/[slug].astro
public/         static assets (favicon)
```

## Adding or editing a project

1. Edit `src/data/projects.ts` and add a `Project` entry with bilingual text.
2. The new project page will be generated automatically at `/en/projects/<slug>/` and `/es/projects/<slug>/`.

## Deployment

This is a fully static site — drop the `dist/` folder on any static host:

- **Vercel** (recommended for the first deploy, free)
- **Netlify**
- **GitHub Pages**

When the `is-a.dev` subdomain is ready, point the host to `souris.is-a.dev`.

## License

© Sebastian Garcia. Content is personal. Code is MIT unless stated otherwise.
