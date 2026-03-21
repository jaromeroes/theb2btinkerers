# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project

Static B2B marketing consultancy website (theb2btinkerers.com) built with **Astro 4.16**, deployed on **Netlify**, Node 20. The site belongs to The B2B Tinkerers, a B2B marketing strategy consultancy ("the anti-agency") targeting mid-market European B2B companies (100–500 employees, €20M–€200M revenue) in tech/SaaS and industrial sectors.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build (output: `dist/`)
- `npm run preview` — preview production build locally

No test framework is configured. Verify changes by running `npm run build` before committing.

## Architecture

**Astro static site** with no frontend framework (no React/Vue). Only 3 dependencies: Astro, @astrojs/sitemap (pinned to 3.2.1), and variable fonts (Inter + Bricolage Grotesque).

### Routing

- `/` — `src/pages/index.astro` (homepage)
- `/about` — `src/pages/about.astro`
- `/insights` — `src/pages/insights/index.astro` (blog listing)
- `/insights/[slug]` — `src/pages/insights/[slug].astro` (dynamic blog posts with related posts by tag)

### Layout & Components

- `src/layouts/Base.astro` — wraps all pages: head metadata, navigation, contact form (Formspree, async with inline confirmation), Umami analytics
- `src/components/BlogImage.astro` — optimized image wrapper (WebP, quality:85, lazy loading)

## Content System

Blog posts live in `src/content/blog/` as Markdown files. Schema defined in `src/content/config.ts`.

### Frontmatter
```yaml
title: "Article Title"
excerpt: "One-sentence summary for meta and listing cards"
date: 2026-01-15
tag: "B2B Strategy"
readTime: "6 min read"        # optional
image: "../../assets/blog/filename.webp"  # optional, relative path
author: "The B2B Tinkerers"   # optional
```

### Writing Voice

- Tone: direct, insider perspective, honest even when uncomfortable. Challenger brand.
- Bold in the headline, humble in the detail. Conversational (75%), moderately provocative (60%).
- Never use: agency jargon, empty buzzwords, generic corporate language, transactional lead-gen CTAs.
- Avoid overuse of em-dashes as sentence separators. Use periods and shorter sentences instead. Em-dashes are flagged as AI-generated writing.
- All content is written in English.

### Good examples of tone

- "Your marketing budget isn't the problem. How you use it is."
- "We don't arrive with answers. We arrive with the right questions."
- "30 minutes. No pitch. Just an honest conversation."

## Design System

### Colors (CSS custom properties in `src/styles/global.css`)

- `--forest: #1C4A3A` — primary brand color
- `--forest-dark: #142E24` — dark variant
- `--mid: #2A6B54` — mid green
- `--lime: #D4E84A` — accent, CTAs, highlights
- `--cream: #F5F0E8` — background
- `--linen: #E8E3D8` — secondary background
- `--ink: #1A1A1A` — body text
- `--pad: clamp(20px, 5vw, 72px)` — responsive padding

### Typography

- **Bricolage Grotesque** — display headings (variable, weight 600-800, tight letter-spacing)
- **Inter** — body text (variable, weight 300-700)
- **DM Mono** — labels, monospace elements, metadata

### Visual Aesthetic

Editorial risograph style. Clean, structured, professional. Not agency-like or over-designed.

## Images

### Specifications

- **Cover images (blog):** 1200x514px, WebP, under 120KB. Compressed with Squoosh at quality 80.
- **Inline images (blog):** 1200x675px, WebP, under 80KB. Same compression.
- Blog images go in `src/assets/blog/` (WebP format). Astro's `<Image>` component handles optimization.
- Generated with Higgsfield AI (Seedream model). Prompts are provided separately, never embedded in `.md` files.

### Higgsfield Prompt Rules

- Never use hex color codes in prompts (causes visible text artifacts). Use descriptive color names instead.
- Charts in images should be described as "unlabeled" or "abstract."
- Hands are a selective creative motif, not a default element.
- Vertical positioning instructions are unreliable. Avoid depending on them for critical compositional elements.

## Deployment

Netlify auto-deploys from `main` branch. Config in `netlify.toml`. Sitemap auto-generated at build time.

### Git Conventions

- Every commit is a checkpoint. Netlify + GitHub provide a double safety net.
- Reverting a commit triggers automatic redeploy of the prior version.
- Commit messages should be descriptive and in English.

## Analytics & Integrations

- **Umami Cloud** (Hobby tier) — website ID: `4b7eeb1c-03ad-4347-ab65-9bcbc445e068`
- **Formspree** — contact form backend (async submission with inline confirmation)
- **Session tracking** — sessionStorage-based journey tracking with UTM capture in hidden form fields
- `robots.txt` is open for crawlers. `@astrojs/sitemap` integration is active.

## Workflow Notes

- Strategic decisions (brand, positioning, content direction, tone) are made in Claude.ai. Claude Code executes.
- Backlog is managed in Notion (workstream prefixes: WEB-xx, CNT-xx, BRD-xx, MOT-xx).
- When in doubt about brand direction or tone, check with the project owner before implementing.