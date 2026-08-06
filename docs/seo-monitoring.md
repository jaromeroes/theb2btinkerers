# SEO & analytics monitoring

Three sources, deliberately set up in different ways. What follows is why, and how to get each one running.

| Source | What it answers | How it's wired | Cost |
| --- | --- | --- | --- |
| Google Search Console | How Google actually sees the site: impressions, clicks, CTR, position, indexing | `mcp-server-gsc` (community MCP) | free |
| Umami | What visitors do once they arrive | `scripts/umami-report.mjs` (own script) | free |
| DataForSEO | What GSC can't see: competitors, search volumes, backlinks | not set up yet | paid, per request |

## Why Umami is a script and not an MCP server

An MCP server is third-party code holding a live API key. `dataforseo-mcp-server` is published by DataForSEO themselves and `mcp-server-gsc` has a public repo with a few hundred stars, so both have had some scrutiny. The only published Umami MCP package had roughly 50 downloads a month and one individual maintainer. Umami's REST API is documented and simple, so a ~150-line script gets the same visibility with nothing to trust. If a well-maintained Umami MCP appears later, revisit this.

## Google Search Console

The site must already be a verified property in Search Console. Everything below is one-time.

1. **Google Cloud Console** → create or pick a project.
2. **APIs & Services → Library** → enable **Search Console API**.
3. **APIs & Services → Credentials** → *Create credentials* → *Service account*. Fill in a name; no roles are needed at the project level.
4. Open the new service account → **Keys** → *Add key* → *Create new key* → **JSON**. It downloads automatically.
5. Move it somewhere outside this repo, e.g. `~/.config/gsc/service-account.json`, and `chmod 600` it. **Never commit it.**
6. **Search Console** → *Settings* → *Users and permissions* → *Add user*. Paste the service account email (`something@project-id.iam.gserviceaccount.com`) and give it **Full** access. This step is what people forget; without it every call returns 403 even though the credentials are valid.

Then register the server:

```bash
claude mcp add gsc \
  --env GOOGLE_APPLICATION_CREDENTIALS=$HOME/.config/gsc/service-account.json \
  -- npx -y mcp-server-gsc
```

`claude mcp list` will report `gsc: ✔ Connected` — but that only proves the process started. The server does not validate credentials at startup (verified: it prints "running on stdio" even when pointed at a nonexistent credentials file), so connected is not the same as working. Confirm by actually asking it for data; a 403 there means step 6 was missed.

## Umami

1. Umami dashboard → profile → **Settings → API keys → Create key**.
2. Export it (add to your shell profile to persist):

```bash
export UMAMI_API_KEY=...
```

The website ID is hard-coded to the one in `CLAUDE.md`; override with `UMAMI_WEBSITE_ID` if it ever changes, and `UMAMI_API_URL` if the account moves off Umami Cloud.

```bash
node scripts/umami-report.mjs              # last 30 days, vs the previous 30
node scripts/umami-report.mjs --days 7
node scripts/umami-report.mjs --days 90 --json
```

Reports visitors, visits, pageviews, bounce rate and average visit length with period-over-period deltas, plus top pages, referrers, countries, and an EN/ES split derived from the `/es/` path prefix.

**Unconfirmed:** whether API keys are available on the free Hobby tier. Umami's docs don't say and the pricing page is client-rendered. If *Settings → API keys* isn't there, the script can't work and this needs a paid plan.

## DataForSEO

Not set up. It is the only paid one of the three, and it answers questions GSC structurally cannot: what competitors rank for, absolute search volumes, backlink profiles. Search Console is the source of truth for your own performance, so start there and add this when there's a concrete question worth paying per request to answer.

The official server is `dataforseo-mcp-server`, published by DataForSEO from their own repo under Apache-2.0. It needs `DATAFORSEO_USERNAME` and `DATAFORSEO_PASSWORD` — the API credentials from the dashboard, not the web login.
