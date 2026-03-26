# Services & Join Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a services hub page, 6 individual service pages, a join page, and update navigation/footer/homepage accordingly.

**Architecture:** Static `.astro` pages with scoped `<style>` blocks. No new dependencies. Content generated inline following CLAUDE.md voice guidelines. Related insights fetched from blog collection at build time.

**Tech Stack:** Astro 4.16, CSS custom properties, vanilla JS (mobile nav toggle only).

**Spec:** `docs/superpowers/specs/2026-03-26-services-and-join-pages-design.md`

**Verification:** No test framework. Run `npm run build` after each task to verify. Check for zero errors.

**Key files to read before starting:**
- `src/layouts/Base.astro` — navigation, footer, contact form, global scripts
- `src/pages/index.astro` — homepage with service cards, accordion JS
- `src/pages/about.astro` — reference for hero/section styling patterns
- `src/styles/global.css` — design tokens, nav CSS, shared classes
- `src/content/config.ts` — blog schema (for related insights queries)
- `CLAUDE.md` — writing voice, design system, all conventions

---

### Task 1: Update navigation and footer in Base.astro

**Files:**
- Modify: `src/layouts/Base.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Update desktop nav links**

In `src/layouts/Base.astro`, replace the current `.nav-links` block (lines 40-44) with the new structure. Remove "Method" link, add "Services" with dropdown wrapper, add "Join" link. Change CTA text.

```astro
<div class="nav-links">
  <div class="nav-dropdown-wrap">
    <a class={`nav-link${currentPath.startsWith('/services')?' active':''}`} href="/services">Services</a>
    <div class="nav-dropdown">
      <a class="nav-dropdown-link" href="/services/marketing-audit">Marketing Audit</a>
      <a class="nav-dropdown-link" href="/services/brand-strategy">Brand Strategy</a>
      <a class="nav-dropdown-link" href="/services/go-to-market">Go-To-Market Strategy</a>
      <a class="nav-dropdown-link" href="/services/marketing-plan">Marketing Plan</a>
      <a class="nav-dropdown-link" href="/services/ai-strategy">AI & Hybrid Strategy</a>
      <a class="nav-dropdown-link" href="/services/fractional-cmo">Fractional CMO</a>
      <a class="nav-dropdown-link nav-dropdown-all" href="/services">View all services →</a>
    </div>
  </div>
  <a class={`nav-link${currentPath.startsWith('/insights')?' active':''}`} href="/insights">Insights</a>
  <a class={`nav-link${currentPath==='/about'?' active':''}`} href="/about">About</a>
  <a class={`nav-link${currentPath==='/join'?' active':''}`} href="/join">Join</a>
</div>
<a class="nav-cta" href="/#contact">Let's talk →</a>
```

- [ ] **Step 2: Update mobile nav**

Replace the mobile nav block (lines 51-57) with expandable services section:

```astro
<div class="nav-mobile" id="nav-mobile">
  <div class="nav-mobile-services">
    <button class="nav-mobile-link nav-mobile-toggle" id="nav-services-toggle">Services <span class="nav-mobile-chevron">›</span></button>
    <div class="nav-mobile-sub" id="nav-services-sub">
      <a class="nav-mobile-sublink" href="/services/marketing-audit">Marketing Audit</a>
      <a class="nav-mobile-sublink" href="/services/brand-strategy">Brand Strategy</a>
      <a class="nav-mobile-sublink" href="/services/go-to-market">Go-To-Market Strategy</a>
      <a class="nav-mobile-sublink" href="/services/marketing-plan">Marketing Plan</a>
      <a class="nav-mobile-sublink" href="/services/ai-strategy">AI & Hybrid Strategy</a>
      <a class="nav-mobile-sublink" href="/services/fractional-cmo">Fractional CMO</a>
      <a class="nav-mobile-sublink" href="/services">View all services</a>
    </div>
  </div>
  <a class="nav-mobile-link" href="/insights">Insights</a>
  <a class="nav-mobile-link" href="/about">About</a>
  <a class="nav-mobile-link" href="/join">Join the team</a>
  <a class="nav-mobile-cta" href="/#contact">Let's talk →</a>
</div>
```

- [ ] **Step 3: Add mobile services toggle JS**

In the `<script>` section of Base.astro, after the burger toggle code (line 153), add:

```js
/* ── Mobile services sub-menu ── */
document.getElementById('nav-services-toggle')?.addEventListener('click', function() {
  this.classList.toggle('open');
  document.getElementById('nav-services-sub')?.classList.toggle('open');
});
```

- [ ] **Step 4: Update footer**

Replace the footer services column (lines 118-124) and add "Join the team" to the company column:

```astro
<div class="footer-col">
  <span class="footer-col-label">Services</span>
  <a class="footer-link" href="/services/marketing-audit">Marketing Audit</a>
  <a class="footer-link" href="/services/brand-strategy">Brand Strategy</a>
  <a class="footer-link" href="/services/go-to-market">Go-To-Market</a>
  <a class="footer-link" href="/services/marketing-plan">Marketing Plan</a>
  <a class="footer-link" href="/services/ai-strategy">AI Strategy</a>
  <a class="footer-link" href="/services/fractional-cmo">Fractional CMO</a>
</div>
<div class="footer-col">
  <span class="footer-col-label">Company</span>
  <a class="footer-link" href="/about">About</a>
  <a class="footer-link" href="/insights">Insights</a>
  <a class="footer-link" href="/join">Join the team</a>
  <a class="footer-link" href="/#contact">Contact</a>
</div>
```

- [ ] **Step 5: Add dropdown and mobile sub-menu CSS to global.css**

Append to `src/styles/global.css` after the existing nav styles (after line 39):

```css
/* NAV DROPDOWN */
.nav-dropdown-wrap{position:relative}
.nav-dropdown{display:none;position:absolute;top:100%;left:50%;transform:translateX(-50%);background:var(--forest);border:1px solid rgba(212,232,74,.12);padding:12px 0;min-width:220px;z-index:210;box-shadow:0 12px 40px rgba(0,0,0,.25)}
.nav-dropdown-wrap:hover .nav-dropdown{display:flex;flex-direction:column}
.nav-dropdown-link{font-size:12px;color:rgba(245,240,232,.7);text-decoration:none;padding:8px 20px;transition:background .12s,color .12s}
.nav-dropdown-link:hover{background:rgba(212,232,74,.1);color:var(--cream)}
.nav-dropdown-all{border-top:1px solid rgba(245,240,232,.08);margin-top:8px;padding-top:12px;font-weight:700;font-size:11px;letter-spacing:.04em;color:var(--lime)}
.nav-dropdown-all:hover{color:var(--cream)}

/* MOBILE NAV SUB-MENU */
.nav-mobile-toggle{background:none;border:none;font-family:inherit;cursor:pointer;width:100%;text-align:left;display:flex;justify-content:space-between;align-items:center}
.nav-mobile-chevron{transition:transform .2s;display:inline-block;font-size:18px}
.nav-mobile-toggle.open .nav-mobile-chevron{transform:rotate(90deg)}
.nav-mobile-sub{display:none;flex-direction:column;padding:0 0 8px}
.nav-mobile-sub.open{display:flex}
.nav-mobile-sublink{font-size:14px;color:rgba(245,240,232,.5);text-decoration:none;padding:10px 0 10px 20px;border-bottom:1px solid rgba(255,255,255,.04)}
.nav-mobile-sublink:hover{color:var(--cream)}
```

- [ ] **Step 6: Run build to verify**

Run: `npm run build`
Expected: Build succeeds with 0 errors. Existing pages still render. New nav dropdown visible in HTML output.

- [ ] **Step 7: Commit**

```bash
git add src/layouts/Base.astro src/styles/global.css
git commit -m "feat: update navigation with services dropdown, join link, and footer service links"
```

---

### Task 2: Update homepage service cards

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Replace service cards with linked cards**

In `src/pages/index.astro`, replace the entire `.services-grid` div (lines 66-133) with linked cards. Each card becomes an `<a>` tag. Remove the `service-expand` divs and the accordion JS. Add "Learn more →" text.

Example for the first card (repeat pattern for all 6):

```astro
<a class="service-card" href="/services/marketing-audit">
  <span class="service-num">01</span>
  <div class="service-title">Marketing Audit</div>
  <div class="service-body">Honest assessment of where you are: positioning, team, budget, and alignment with business goals.</div>
  <span class="service-more">Learn more →</span>
</a>
```

Cards and their URLs:
- 01 Marketing Audit → `/services/marketing-audit`
- 02 Brand Strategy & Positioning → `/services/brand-strategy`
- 03 Go-To-Market Strategy → `/services/go-to-market`
- 04 Marketing Plan & Business Alignment → `/services/marketing-plan`
- 05 AI & Hybrid Marketing Strategy → `/services/ai-strategy`
- 06 Fractional CMO → `/services/fractional-cmo`

- [ ] **Step 2: Update service card CSS**

In the `<style>` block of `index.astro`, remove all `.service-expand` and `.service-cta` CSS rules. Add `.service-more` style and update `.service-card` to be a link (add `text-decoration:none;display:block`). The "Learn more →" replaces the arrow:

```css
.service-card{background:var(--mid);padding:clamp(24px,3vw,36px) clamp(20px,2.5vw,32px);position:relative;transition:background .2s;text-decoration:none;display:block}
.service-more{font-size:11px;font-weight:700;letter-spacing:.04em;color:var(--lime);opacity:.6;position:absolute;bottom:20px;left:clamp(20px,2.5vw,32px);transition:color .2s,opacity .2s}
.service-card:hover .service-more{color:var(--forest);opacity:1}
```

- [ ] **Step 3: Remove accordion JS**

Remove the service accordion script block from the `<script>` section (lines 361-369 — the `DOMContentLoaded` listener that toggles `.open` on `.service-card`).

- [ ] **Step 4: Run build to verify**

Run: `npm run build`
Expected: Build succeeds. Homepage renders with 6 linked service cards, no accordion.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: convert homepage service cards to links pointing to individual service pages"
```

---

### Task 3: Create services hub page

**Files:**
- Create: `src/pages/services/index.astro`

- [ ] **Step 1: Create the services hub page**

Create `src/pages/services/index.astro` with:
- Hero section (forest background, eyebrow "What we do", H1, subtitle)
- 6-card grid linking to individual service pages (3x2 desktop, 2x3 tablet, 1x6 mobile)
- CTA banner at the bottom

The page uses `Base` layout. Cards reuse the visual pattern from the homepage (number, title, excerpt, "Learn more →") but in a dedicated grid.

Content for the hero:
- H1: "Six ways we connect marketing to the business. And make it stick."
- Subtitle: "We help B2B tech and industrial companies build marketing that works. Not just marketing that exists."

Each card data:

| # | Title | Excerpt | URL |
|---|---|---|---|
| 01 | Marketing Audit | Honest assessment of where you are: positioning, team, budget, and alignment with business goals. | /services/marketing-audit |
| 02 | Brand Strategy & Positioning | Define what you stand for, who you're for, and why someone should choose you. The foundation. | /services/brand-strategy |
| 03 | Go-To-Market Strategy | A clear GTM motion that connects your positioning to pipeline. Channels, messages, timing. Aligned. | /services/go-to-market |
| 04 | Marketing Plan & Business Alignment | A marketing plan that reflects real business objectives. One your team will actually follow. | /services/marketing-plan |
| 05 | AI & Hybrid Marketing Strategy | The future marketing team is not fully human, nor fully automated. We help you define the hybrid model. | /services/ai-strategy |
| 06 | Fractional CMO | Senior marketing leadership without the full-time cost. We lead your team and maintain direction. | /services/fractional-cmo |

CTA section: "Not sure which service fits? Let's figure it out together." + "Let's talk →" button linking to `/#contact`.

Scoped `<style>` block follows existing patterns (Bricolage headings, Inter body, design tokens).

- [ ] **Step 2: Run build to verify**

Run: `npm run build`
Expected: Build succeeds. `/services/` page renders with 11 total pages.

- [ ] **Step 3: Commit**

```bash
git add src/pages/services/index.astro
git commit -m "feat: add services hub page with grid linking to individual service pages"
```

---

### Task 4: Create brand-strategy service page (template)

**Files:**
- Create: `src/pages/services/brand-strategy.astro`

This is the template page. Once approved, the pattern is replicated for the other 5.

- [ ] **Step 1: Create brand-strategy.astro**

Create `src/pages/services/brand-strategy.astro` with all 6 sections from the spec:

**SEO:**
- Title: "B2B Brand Strategy & Positioning | The B2B Tinkerers"
- Description: "Most B2B brands are built by accident. We build them on purpose. Positioning, messaging, and brand strategy for mid-market B2B companies."

**Section 1 — Hero** (`--forest` background):
- Eyebrow: "Service 02"
- H1: "Brand Strategy & Positioning"
- Subtitle: 3-4 lines positioning the problem.

**Section 2 — The problem** (`--cream` background):
- 2-3 editorial paragraphs. The pain: most B2B brands are built by accident. A founder's instinct that became the tagline. A value prop nobody loves but nobody hates enough to change. The cost is invisible until you start losing deals to competitors who simply sound sharper.

**Section 3 — What we do** (`--linen` background):
- Title + intro paragraph.
- 4 expanded deliverables (from the homepage card bullets):
  1. Market & competitor positioning map
  2. ICP definition and buyer journey
  3. Core messaging architecture
  4. Brand voice and tone guidelines
- Each with a bold label and 2-3 sentence description.

**Section 4 — Stats** (`--forest` background):
- 3 stat cards with real industry data relevant to brand/positioning in B2B. Example stats:
  - "77% of B2B buyers say the buying experience is too complex" (Gartner 2023)
  - "Brands with strong positioning see 33% higher win rates" (Forrester 2024)
  - "Only 29% of B2B brands have a documented messaging framework" (Content Marketing Institute 2024)

**Section 5 — Related insights** (`--cream` background):
- Fetch blog posts with tags matching (case-insensitive): "strategy", "B2B marketing strategy"
- Show up to 3 most recent. If none, section does not render.
- Uses `getCollection('blog')` from Astro.

**Section 6 — CTA** (`--forest` background):
- "Ready to build a brand your market actually remembers?"
- Button: "Let's talk →" → `/#contact`

All sections use scoped `<style>` following existing patterns.

- [ ] **Step 2: Run build to verify**

Run: `npm run build`
Expected: Build succeeds. `/services/brand-strategy/` renders.

- [ ] **Step 3: Commit**

```bash
git add src/pages/services/brand-strategy.astro
git commit -m "feat: add brand strategy service page with full content and related insights"
```

- [ ] **Step 4: Review with user**

Pause here. The user should review the brand-strategy page locally (`npm run dev`) to validate the template before replicating to the other 5 services. This is a checkpoint.

---

### Task 5: Create remaining 5 service pages

**Files:**
- Create: `src/pages/services/marketing-audit.astro`
- Create: `src/pages/services/go-to-market.astro`
- Create: `src/pages/services/marketing-plan.astro`
- Create: `src/pages/services/ai-strategy.astro`
- Create: `src/pages/services/fractional-cmo.astro`

These 5 pages follow the exact same section structure as `brand-strategy.astro` but with unique content per service. Each page needs:
- Unique SEO title and meta description
- Unique hero subtitle (3-4 lines)
- Unique "The problem" editorial section (2-3 paragraphs)
- Unique "What we do" expanded deliverables
- Unique stats (2-3 per page, sourced from industry reports)
- Correct tag mapping for related insights
- Unique CTA copy

**These 5 pages can be built in parallel by subagents** since they are completely independent.

- [ ] **Step 1: Create marketing-audit.astro**

SEO title: "B2B Marketing Audit | The B2B Tinkerers"
Eyebrow: "Service 01"
Tag mapping: "strategy", "B2B marketing strategy"

- [ ] **Step 2: Create go-to-market.astro**

SEO title: "Go-To-Market Strategy for B2B | The B2B Tinkerers"
Eyebrow: "Service 03"
Tag mapping: "strategy", "B2B marketing strategy"

- [ ] **Step 3: Create marketing-plan.astro**

SEO title: "Marketing Plan & Business Alignment | The B2B Tinkerers"
Eyebrow: "Service 04"
Tag mapping: "strategy", "B2B marketing strategy"

- [ ] **Step 4: Create ai-strategy.astro**

SEO title: "AI & Hybrid Marketing Strategy | The B2B Tinkerers"
Eyebrow: "Service 05"
Tag mapping: "AI", "AI & Marketing"

- [ ] **Step 5: Create fractional-cmo.astro**

SEO title: "Fractional CMO for B2B Companies | The B2B Tinkerers"
Eyebrow: "Service 06"
Tag mapping: "Fractional CMO", "strategy", "B2B marketing strategy"

- [ ] **Step 6: Run build to verify all pages**

Run: `npm run build`
Expected: Build succeeds with 17 total pages. All 6 service pages render.

- [ ] **Step 7: Commit**

```bash
git add src/pages/services/
git commit -m "feat: add remaining 5 service pages with unique content and related insights"
```

---

### Task 6: Create join page

**Files:**
- Create: `src/pages/join.astro`

- [ ] **Step 1: Create join.astro**

Create `src/pages/join.astro` with 4 sections:

**SEO:**
- Title: "Join the Team | The B2B Tinkerers"
- Description: "We're a small, curated group of senior B2B marketing strategists. No open positions. No application form. If you're exceptional, let's talk."

**Section 1 — Hero** (`--forest` background):
- Eyebrow: "Join the team"
- H1: "We're small on purpose. Every person here is someone we'd want in the room when it matters."
- Subtitle: 2 lines about the curated global network.

**Section 2 — Manifesto** (`--cream` background):
- 3-4 editorial paragraphs. Inside perspective on what The B2B Tinkerers is: a deliberately small group, senior people, B2B trenches experience. Remote, project-based, flexible. What unites us is the obsession with work that moves the needle.

**Section 3 — What we value** (`--linen` background):
- Grid of 4 value cards (same visual pattern as `/about` "How we think" section):
  1. "You've done this before" — Senior experience, not learning on the job.
  2. "You challenge, not comply" — Critical thinking over status quo.
  3. "You ship, not just strategize" — Bias toward execution.
  4. "You think in business outcomes" — Not vanity metrics.

**Section 4 — CTA** (`--forest` background):
- "No open positions. No application form. If what you've read here resonates, reach out. The best conversations start without a job description."
- Button: "Let's talk →" → `/#contact`

- [ ] **Step 2: Run build to verify**

Run: `npm run build`
Expected: Build succeeds with 18 total pages. `/join/` renders.

- [ ] **Step 3: Commit**

```bash
git add src/pages/join.astro
git commit -m "feat: add join the team page with manifesto and values"
```

---

### Task 7: Final verification and cleanup

- [ ] **Step 1: Run full build**

Run: `npm run build`
Expected: 18 pages built, 0 errors.

- [ ] **Step 2: Test locally**

Run: `npm run preview`
Manually verify:
- Homepage service cards link to correct subpages
- Nav dropdown works on desktop (hover shows 6 services + "View all")
- Nav mobile expand works (tap Services, see 6 links)
- `/services` hub page renders with 6 cards
- Each `/services/*` page renders all 6 sections
- Related insights appear where matching tags exist
- `/join` renders all 4 sections
- Footer shows 6 service links + "Join the team"
- CTA button says "Let's talk →" everywhere
- Active states work in nav for `/services`, `/services/*`, `/join`

- [ ] **Step 3: Commit any final adjustments**

- [ ] **Step 4: Add .superpowers to .gitignore if not present**

```bash
echo ".superpowers/" >> .gitignore
```
