# Design Spec: Service Pages, Services Hub, and Join Page

**Date:** 2026-03-26
**Status:** Draft
**Scope:** New pages (`/services`, `/services/*`, `/join`), navigation updates, homepage modifications, footer updates.

---

## 1. Overview

Add dedicated pages for each of the 6 services, a services hub page, and a "Join the team" page. Update navigation (desktop dropdown, mobile expandable), homepage service cards (link to subpages instead of accordion), and footer (link to individual service pages + add Join link).

**Approach:** Static `.astro` pages (no content collections). Each service page is hand-crafted for maximum SEO and copy control.

---

## 2. File Structure

### New files

```
src/pages/
  services/
    index.astro                   → /services
    marketing-audit.astro         → /services/marketing-audit
    brand-strategy.astro          → /services/brand-strategy
    go-to-market.astro            → /services/go-to-market
    marketing-plan.astro          → /services/marketing-plan
    ai-strategy.astro             → /services/ai-strategy
    fractional-cmo.astro          → /services/fractional-cmo
  join.astro                      → /join
```

### Modified files

```
src/layouts/Base.astro            → Navigation + footer changes
src/pages/index.astro             → Homepage services section update
```

---

## 3. Navigation Changes (Base.astro)

### Desktop nav

Current: `Services | Method | Insights | About` + CTA "Book a call →"

New: `Services (dropdown) | Insights | About | Join` + CTA "Let's talk →"

- **Services** link points to `/services`. On hover, shows a dropdown listing all 6 services with links to their individual pages.
- **Method** removed from nav (still accessible on homepage via scroll).
- **Join** added as a regular nav link pointing to `/join`.
- **CTA button** text changes from "Book a call →" to "Let's talk →". Still points to `/#contact`.

### Dropdown behavior

- Desktop: appears on hover, disappears on mouse leave. Simple CSS dropdown, no JS required.
- Dropdown lists 6 service links + a "View all services →" link at the bottom pointing to `/services`.
- Styling: `--forest` background, `--cream` text, `--lime` hover. Consistent with existing design language.

### Mobile nav

- "Services" becomes an expandable section in the mobile menu. Tap to expand/collapse (requires minimal JS toggle, similar pattern to the existing burger menu), revealing the 6 service links indented below.
- "Join" added as a regular mobile link.
- Mobile CTA text changes to "Let's talk →".

### Footer

**Services column** updated from 4 generic links to 6 specific links:

```
Services
  Marketing Audit           → /services/marketing-audit
  Brand Strategy            → /services/brand-strategy
  Go-To-Market              → /services/go-to-market
  Marketing Plan            → /services/marketing-plan
  AI Strategy               → /services/ai-strategy
  Fractional CMO            → /services/fractional-cmo
```

**Company column** adds "Join the team" → `/join`.

---

## 4. Homepage Changes (index.astro)

### Services section

The 6 service cards remain but change behavior:

- **Remove** the accordion expand/collapse functionality.
- **Remove** the `service-expand` content (detailed text, bullets, CTA) from each card.
- **Keep** the card with: number, title, short body text.
- **Add** a "Learn more →" link at the bottom of each card.
- **Each card becomes a link** (`<a>` wrapping the card) to the corresponding service subpage.
- Hover behavior stays the same (transition to `--lime` background).

The JS accordion script for `.service-card` is removed.

---

## 5. Services Hub Page (`/services/index.astro`)

### SEO

- `<title>`: "B2B Marketing Services | The B2B Tinkerers"
- `<meta description>`: Custom description targeting B2B marketing services for mid-market European companies.

### Sections

**5.1 Hero**
- Background: `--forest`
- Eyebrow: "What we do"
- H1: Punchy headline (e.g., "Six ways we turn marketing into a growth engine.")
- Subtitle: 1-2 lines reinforcing the value proposition.
- Style: Same pattern as `/about` hero (padding, typography, radial gradient accent).

**5.2 Services grid**
- 6 cards in a 3x2 grid (2x3 tablet, 1x6 mobile).
- Each card contains: number (decorative), title, 2-line excerpt, "Learn more →" link.
- Entire card is clickable, links to individual service page.
- Hover: `--lime` background with `--forest` text (matching homepage cards).

**5.3 CTA banner**
- Background: `--forest`
- Copy: "Not sure which service fits? Let's figure it out together."
- Button: "Let's talk →" linking to `/#contact`.

---

## 6. Individual Service Pages (`/services/[service].astro`)

All 6 pages follow the same section structure with unique content per service.

### SEO (per page)

Each page has a unique `<title>` and `<meta description>` optimized for the specific service. Example:

- `/services/brand-strategy` → "B2B Brand Strategy & Positioning | The B2B Tinkerers"
- `/services/fractional-cmo` → "Fractional CMO for B2B Companies | The B2B Tinkerers"

### Sections

**6.1 Hero**
- Background: `--forest`
- Eyebrow: Service number (e.g., "Service 01")
- H1: Service title
- Subtitle: 3-4 lines. Expanded version of the short excerpt. Positions the problem the service solves. Written with punch and SEO intent.

**6.2 The problem**
- Background: `--cream`
- 2-3 editorial paragraphs describing the pain point this service addresses. Direct tone, real-world language. This is the section that carries long-tail SEO and emotional resonance.

**6.3 What we do**
- Background: `--linen`
- Title + introductory paragraph.
- Expanded bullet points from the current homepage cards. Each bullet becomes a mini-section: bold label + 2-3 sentence description of what it actually includes.
- This section provides the substantive detail that justifies the service.

**6.4 Stats / sector data**
- Background: `--forest`
- 2-3 hard data points relevant to the specific service (sourced from industry reports).
- Layout: Similar to homepage "The numbers" section but with 2-3 cards instead of 4.
- Each stat card: big number + label + source attribution.

**6.5 Related insights**
- Background: `--cream`
- Automatically filtered: 2-3 most recent blog posts whose `tag` relates to the service.
- If no relevant posts exist, this section does not render.
- Card layout: Compact blog card with title, date, tag. Links to the blog post.

**6.6 CTA**
- Background: `--forest`
- Service-specific copy (e.g., "Ready to sharpen your positioning?" for Brand Strategy).
- Button: "Let's talk →" linking to `/#contact`.

### Service-to-tag mapping for related insights

Based on actual existing blog tags (`"strategy"`, `"Strategy"`, `"B2B marketing strategy"`, `"Fractional CMO"`, `"AI & Marketing"`, `"AI"`):

| Service | Related blog tags (case-insensitive match) |
|---|---|
| Marketing Audit | "strategy", "B2B marketing strategy" |
| Brand Strategy | "strategy", "B2B marketing strategy" |
| Go-To-Market | "strategy", "B2B marketing strategy" |
| Marketing Plan | "strategy", "B2B marketing strategy" |
| AI Strategy | "AI", "AI & Marketing" |
| Fractional CMO | "Fractional CMO", "strategy", "B2B marketing strategy" |

Tag matching should be case-insensitive. At launch, some service pages may have no related insights (the section simply does not render). As more blog content is published, sections will populate automatically.

---

## 7. Join Page (`/join.astro`)

### SEO

- `<title>`: "Join the Team | The B2B Tinkerers"
- `<meta description>`: Oriented toward attracting senior B2B marketing talent, not recruiting.

### Sections

**7.1 Hero**
- Background: `--forest`
- Eyebrow: "Join the team"
- H1: Something like "We're small on purpose. Every person here is someone we'd want in the room when it matters."
- Subtitle: 2 lines reinforcing the curated global network concept.

**7.2 Manifesto**
- Background: `--cream`
- 3-4 editorial paragraphs. Explains what The B2B Tinkerers is from the inside: not an agency that scales with juniors, a deliberately small group of senior people who've been in the B2B trenches. Remote, project-based, flexible. United by the obsession with work that actually moves the needle.

**7.3 What we value in a teammate**
- Background: `--linen`
- Grid of 3-4 value cards (similar to "How we think" section on `/about`).
- Each card: number + title + 2-3 line body.
- Values:
  1. "You've done this before" — senior experience, not juniors learning on the job.
  2. "You challenge, not comply" — critical thinking, questioning the status quo.
  3. "You ship, not just strategize" — bias toward execution and results.
  4. "You think in business outcomes" — not vanity metrics, not agency KPIs.

**7.4 CTA**
- Background: `--forest`
- Copy: "No open positions. No application form. If what you've read here resonates, reach out. The best conversations start without a job description."
- Button: "Let's talk →" linking to `/#contact`.

---

## 8. Navigation active state

The `currentPath` logic in `Base.astro` needs updating to handle the new routes:
- `/services` and `/services/*` paths should mark "Services" as active in the nav.
- `/join` should mark "Join" as active.

## 9. Implementation approach

Build one service page first (e.g., `brand-strategy.astro`) as the template. Once approved, replicate the pattern for the remaining 5. All page copy (headlines, problem sections, what-we-do details, stats, manifesto) is generated during implementation following the writing voice in CLAUDE.md. Stats are selected by the implementer from recognized industry reports.

## 10. Styling approach

No new CSS files. All styles use `<style>` scoped blocks within each `.astro` page, consistent with the existing codebase pattern. Design tokens (`--forest`, `--lime`, `--cream`, `--linen`, `--ink`, `--pad`) are reused throughout.

New CSS is needed for:
- Nav dropdown (desktop hover, mobile expand)
- Service hub grid cards
- Individual service page sections (problem, what-we-do, stats, related insights, CTA)
- Join page sections

Typography, spacing, and color patterns follow existing pages exactly. Bricolage Grotesque for headings, Inter for body, DM Mono for labels.

---

## 11. Content generation

All page copy (hero text, problem sections, what-we-do details, stats, manifesto, values) will be generated following the project's writing voice guidelines:

- Direct, insider perspective, honest even when uncomfortable.
- Bold in the headline, humble in the detail.
- Conversational (75%), moderately provocative (60%).
- No agency jargon, empty buzzwords, generic corporate language, or transactional CTAs.
- No em-dashes as sentence separators.
- All content in English.

Stats will be sourced from recognized industry reports (Forrester, Gartner, HubSpot, LinkedIn, etc.) with proper attribution.

---

## 12. Out of scope

- No new images required for these pages (text-driven layout, consistent with `/about`).
- No new dependencies or packages.
- No changes to the blog system or content collections.
- No changes to the contact form functionality.
