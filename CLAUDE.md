# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project

Static B2B marketing consultancy website (theb2btinkerers.com) built with **Astro 4.16**, deployed on **Netlify**, Node 20. The site belongs to The B2B Tinkerers, a B2B marketing strategy consultancy ("the anti-agency") targeting B2B companies in tech/SaaS, industrial, and financial services sectors across Europe and North America.

The site is **bilingual (EN/ES)** via Astro's native i18n. English (US) is the default locale served on the existing URLs (`/`, `/about`, `/services/*`, `/insights/*`, `/join`) to preserve SEO. Spanish (Spain) lives under the `/es/` prefix. See **Internationalization (i18n)** below.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build (output: `dist/`)
- `npm run preview` — preview production build locally

No test framework is configured. Verify changes by running `npm run build` before committing.

## Architecture

**Astro static site** with no frontend framework (no React/Vue). Only 3 dependencies: Astro, @astrojs/sitemap (pinned to 3.2.1), and variable fonts (Inter + Bricolage Grotesque).

### Routing

Page routes (`src/pages/*`) are **thin wrappers**: each renders a shared, language-aware page component from `src/components/pages/` and passes a `lang` prop. English routes live at the root; Spanish routes mirror them under `src/pages/es/`.

- `/` and `/es/` — `Home.astro`
- `/about` and `/es/about` — `About.astro`
- `/join` and `/es/join` — `Join.astro`
- `/services` and `/es/services` — `ServicesIndex.astro`
- `/services/[slug]` and `/es/services/[slug]` — `ServicePage.astro` (one data-driven template for all six services; slugs are identical across languages)
- `/insights` and `/es/insights` — `InsightsIndex.astro` (blog listing, filtered by `lang`)
- `/insights/[slug]` and `/es/insights/[slug]` — `BlogArticle.astro` (dynamic blog posts; **ES slugs are translated**, EN posts keep their existing slugs)

### Layout & Components

- `src/layouts/Base.astro` — wraps all pages: `lang` prop drives `<html lang>`, translated nav/footer/contact-form, canonical, hreflang (en/es/x-default), and the EN/ES language switcher. Also head metadata, contact form (Formspree, async with inline confirmation), Umami analytics.
- `src/components/pages/*.astro` — one component per page type, all `lang`-aware. They render `<Base>` internally and pull copy from `src/i18n/`.
- `src/components/BlogImage.astro` — optimized image wrapper (WebP, quality:85, lazy loading)
- `src/components/service-icons.ts` — shared SVG icons for the six services (home grid + services grid)

## Internationalization (i18n)

Native Astro i18n. Config in `astro.config.mjs`: `defaultLocale: 'en'`, `locales: ['en','es']`, `prefixDefaultLocale: false` (EN at root, ES under `/es/`). Sitemap emits both locales with hreflang.

**Translation strings live in `src/i18n/`:**

- `config.ts` — locale list, `htmlLang` (BCP-47), switcher labels.
- `utils.ts` — `getLangFromUrl`, `localizePath` (EN path → localized path), `mirrorAlternates` (builds the `{ en, es }` hreflang map for simple mirrored pages).
- `ui.ts` — chrome strings (nav, footer, contact, form, SEO defaults), keyed `ui[lang]`.
- `services-nav.ts` — service slugs + translated nav/footer labels.
- `pages/*.ts` — structured page copy per page, shape `{ en: {...}, es: {...} }`. Service detail content lives in `pages/services.ts`.

**Adding a language:** add the locale to `config.ts` + `astro.config.mjs`, extend every `Record<Lang, ...>` in `src/i18n/`, and add the mirrored routes under `src/pages/<locale>/`.

**hreflang for blog posts:** EN and ES versions of an article are paired by a shared `translationKey` in frontmatter. `BlogArticle.astro` looks up the counterpart and emits the correct cross-language alternate even though the slugs differ.

**Voice:** Spanish is **Spain Spanish**, natural, same challenger/direct brand voice — not a literal translation. Keep product and technical terms in their usual form (pipeline, GTM, ICP, MQL, motion, workflow, etc.).

## Content System

Blog posts live in `src/content/blog/` as Markdown files. Schema defined in `src/content/config.ts`. English posts are `<slug>.md`; their Spanish counterpart is `<slug>.es.md` with `lang: "es"`, a translated `slug`, and a matching `translationKey`.

### Frontmatter
```yaml
title: "Article Title"
excerpt: "One-sentence summary for meta and listing cards"
date: 2026-01-15
tag: "B2B Strategy"                        # tag is in the post's own language
readTime: "6 min read"                     # optional ("6 min de lectura" in ES)
image: "../../assets/blog/filename.webp"   # optional, relative path
lang: "en"                                 # "en" (default) | "es"
translationKey: "article-key"              # pairs EN + ES versions (hreflang, language switch)
slug: "traduccion-del-slug"                # ES only: translated URL slug
```

Images are shared across languages (they're abstract/duotone, language-neutral); only the alt text is translated in the `.es.md` file.

### Writing Voice

- Tone: direct, insider perspective, honest even when uncomfortable. Challenger brand.
- Bold in the headline, humble in the detail. Conversational (75%), moderately provocative (60%).
- Never use: agency jargon, empty buzzwords, generic corporate language, transactional lead-gen CTAs.
- Avoid overuse of em-dashes as sentence separators. Use periods and shorter sentences instead. Em-dashes are flagged as AI-generated writing.
- Content is **bilingual (EN/ES)**. English is US English (default locale). Spanish is Spain Spanish — natural, same challenger voice, not a literal translation. Keep product/technical terms in their usual form (pipeline, GTM, ICP, MQL, motion, workflow…).
- **Monetary figures show both currencies, order and formatting by language:**
  - English (US): dollar first, euro in parentheses → `$220,000 (€200,000)`.
  - Spanish (Spain): euro first, dollar in parentheses, ES number format (period as thousands separator, symbol after the amount) → `200.000 € (220.000 $)`.
  - Large round figures follow the same rule, e.g. EN `$2.2M (€2M)` / ES `2 M€ (2,2 M$)`. Rhetorical "trillion" industry stats use Spain's long scale: `$1 trillion` → `1 billón de dólares`.

### Anti-slop rules (the humanizer layer)

The prose problem is **not** vocabulary. It's uniformity of rhythm: the same rhetorical machine running in every piece. These rules are budgets, not bans, because each device is good once and mechanical four times.

- **Fragment budget: max ~5% of sentences under 5 words, and never three in a row.** Staccato runs ("Confident. Rehearsed. Living on slide six.") are the loudest AI tell in modern prose. Fix by folding into one sentence with real subordination.
- **Antithesis budget: max 1–2 per article, and only where the contrast is the actual point.** The `X isn't Y. It's Z.` / `Not because A, but because B.` construction is the house engine. In a headline it's craft; repeated four times in body copy it's a machine.
- **No two pieces open the same way.** Rotate the opening move deliberately: second-person imperative ("Open your homepage…"), scene-setter ("There's a stat that…"), direct claim, anecdote, a number, a quoted objection. Check the last five pieces before writing the sixth.
- **Don't end every section on a punchline.** Some sections should just stop when the point is made. A zinger at every section break reads as generated.
- **Vary sentence length across pieces, not just within them.** If every article has the same rhythm signature, that itself is the tell.
- **Break perfect parallelism.** Triads where all three items have identical grammatical shape, and "not A, not B, not C" runs, should be uneven or cut to two.
- **No crystallized phrases reused across pages.** Phrases like "keep score the way the business does" or "sat in the rooms where…" must not appear on more than one page. Grep before shipping.
- **Prefer a specific admission to a general aphorism.** "We've lost work that way and would do it again" beats "Trust compounds faster than billings."
- Avoid em-dashes as sentence separators (see above). Also avoid: "move the needle", "no fluff, no filler", "at the end of the day", "game-changer". In ES avoid calques: "mover la aguja", "comezón", "a la hora de" as filler.

Brand claims are exempt: the taglines under **Good examples of tone** and the "30 minutes. No pitch." refrain are assets and stay as written.

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