# My Web Hub — Project Context

## Overview

A YAML-driven personal web hub that renders a card grid of bookmarked sites. Deployed as a static site on GitHub Pages via GitHub Actions.

**Live URL:** `https://jedsada-jed.github.io/my-web-hub/`

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Bundler | Vite 5 |
| YAML parser | js-yaml |
| Deployment | GitHub Pages via Actions |

## Project Structure

```
my-web-hub/
├── public/
│   ├── sites.yaml        # Default card data (title, cards[])
│   └── .nojekyll         # Disables Jekyll on GitHub Pages
├── src/
│   ├── App.tsx           # Root: fetches YAML, renders header + card grid
│   ├── types.ts          # SiteCard and SitesConfig interfaces
│   └── components/
│       ├── Card.tsx      # Single card (emoji/image + title, opens in new tab)
│       └── Card.css
├── vite.config.ts        # base: '/my-web-hub/' (must match repo name)
└── .github/workflows/
    └── deploy.yml        # push to main → build → deploy to GitHub Pages
```

## YAML Schema (`sites.yaml`)

```yaml
title: "My Hub Title"   # optional — defaults to "My Web Hub"
cards:
  - title: "Site Name"
    url: "https://example.com"
    emoji: "🔗"          # optional icon (fallback: 🔗)
    image: "https://…"  # optional image URL (takes priority over emoji)
```

## Key Behaviours

### `source` Query Parameter

Append `?source=<url>` to load any publicly accessible YAML file instead of the bundled `sites.yaml`:

```
https://jedsada-jed.github.io/my-web-hub/?source=https://raw.githubusercontent.com/jedsada-jed/my-web-hub/refs/heads/main/public/sites.yaml
```

- The source URL must return valid YAML matching the schema above.
- The remote host must allow cross-origin requests (CORS). `raw.githubusercontent.com` works out of the box.
- Falls back to local `sites.yaml` when no `source` param is present.

## Deployment

CI/CD is fully automated:
- Push to `main` → GitHub Actions builds (`npm run build`) → deploys `dist/` to GitHub Pages.
- `vite.config.ts` `base` must always equal `'/my-web-hub/'` (repo name) for asset paths to resolve correctly.
- `public/.nojekyll` prevents GitHub Pages from ignoring files starting with `_`.

## Local Development

```bash
npm install
npm run dev      # http://localhost:5173/my-web-hub/
npm run build    # production build → dist/
npm run preview  # serve dist/ locally
```
