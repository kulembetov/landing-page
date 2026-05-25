# presentsimple Landing

Next.js 16 landing page (App Router). All pages are statically pre-rendered at build time (SSG) and served via a Node.js standalone server.

## Stack

- Next.js 16 (App Router, SSG pages, `output: "standalone"` packaging)
- React 19
- TypeScript
- Tailwind CSS v4 — utility classes + per-component CSS files in `app/styles/`
- `motion` for animations (`lib/anim.ts` holds shared easing constants)
- `lucide-react` and `simple-icons` for icons

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## Quality Gates

Install `pre-commit` then run `npm install` — hooks are registered automatically via `postinstall`:

```bash
pipx install pre-commit
npm install
```

Or install hooks manually:

```bash
npm run hooks:install
```

**Pre-commit checks:**

- `prettier` — format check
- `gitleaks` — secrets scan
- `commitlint` — Conventional Commits (`commit-msg` hook)

**Pre-push checks** (block push on failure):

- `npm run validate:push` (`format:check` + `build`)
- `gitleaks`
- `semgrep` (SAST)
- `trivy` (filesystem + misconfiguration scan)

Useful commands:

```bash
pre-commit run --all-files
pre-commit run --hook-stage pre-push --all-files
npm run format
npm run format:check
```

To enforce these checks server-side on GitLab:

1. Protect the `main` branch.
2. Require pipelines to succeed before merging.
3. Disallow direct pushes to the protected branch.

## Docker

Build and run the production image locally:

```bash
docker build -t presentsimple-landing:prod .
docker run --rm -p 3000:3000 presentsimple-landing:prod
```

Multi-stage build; runs under a non-root `nextjs` user.

## GitLab CI

`.gitlab-ci.yml` runs three stages on every push and MR:

1. **validate** — `npm ci`, `format:check`, `build`
2. **security** — `gitleaks`, `semgrep`, `trivy`
3. **package** — builds and pushes the Docker image to GitLab Container Registry (default branch and tags only); tags the image with the commit SHA, `latest` (default branch), and the tag name (on tag pushes)

## Project Structure

```
app/
  layout.tsx          — root layout, metadata, fonts
  page.tsx            — landing page assembled from section components
  manifest.ts         — Web App Manifest
  robots.ts           — robots.txt
  sitemap.ts          — XML sitemap
  icon.png            — app icon
  styles/             — per-component CSS files (tokens.css, theme.css, nav.css, …)
  privacy/page.tsx    — Privacy Policy
  terms/page.tsx      — Terms of Service
  refunds/page.tsx    — Refund Policy
  marketing-consent/  — Marketing Consent page
  payment-details/    — Payment Details page

components/
  sections/           — landing sections (hero, nav, pricing, faq, footer, …)
  ui/                 — shared primitives (cta-button, fade-up, feature-card,
                         icons, lossless-picture, section-header, section-link,
                         segmented-control)

lib/
  landing-content.ts  — all section copy and data
  seo-config.ts       — SEO/OG metadata configuration
  json-ld.ts          — JSON-LD structured data helpers
  legal-metadata.ts   — metadata for legal pages
  anim.ts             — shared motion easing + duration constants

public/
  slides*/            — slide images (long-lived browser + CDN cache via next.config.mjs)
  llms.txt            — LLM-readable site summary
```

## Maintenance

| Task                     | Where                                           |
| ------------------------ | ----------------------------------------------- |
| Section copy / data      | `lib/landing-content.ts`                        |
| Section markup           | `components/sections/*`                         |
| Shared UI primitives     | `components/ui/*`                               |
| Visual tokens & theming  | `app/styles/tokens.css`, `app/styles/theme.css` |
| Section-specific styles  | `app/styles/<section>.css`                      |
| Animation constants      | `lib/anim.ts`                                   |
| SEO / OG metadata        | `lib/seo-config.ts`                             |
| Structured data          | `lib/json-ld.ts`                                |
| Legal page metadata      | `lib/legal-metadata.ts`                         |
| Cache headers for slides | `next.config.mjs` `headers()`                   |
