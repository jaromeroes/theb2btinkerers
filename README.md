# The B2B Tinkerers

B2B Marketing Strategy Consultancy website built with Astro.

## Stack
- **Astro** — static site generator
- **Netlify** — hosting & CI/CD
- **GitHub** — source control & content management

## Adding a blog post

Create a new file in `src/content/blog/` with this format:

```markdown
---
title: "Your article title"
date: 2025-02-01
tag: "Strategy"
excerpt: "A one-sentence summary of the article."
author: "The B2B Tinkerers"
readTime: "7 min"
featured: false
---

Your article content in Markdown here...
```

Commit and push — Netlify publishes automatically in ~60 seconds.

## Available tags
- Strategy
- GTM
- AI & Marketing
- Brand
- Fractional CMO

## Local development
```bash
npm install
npm run dev
```
