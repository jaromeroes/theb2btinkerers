#!/usr/bin/env node
/**
 * Umami traffic report for theb2btinkerers.com.
 *
 * Deliberately dependency-free and written against Umami's documented Cloud API
 * (https://docs.umami.is/docs/api) rather than an MCP server: the only published
 * Umami MCP package has ~50 downloads a month and a single individual
 * maintainer, which is not something to hand an analytics API key to. Every line
 * here is auditable.
 *
 * Setup:
 *   Umami dashboard -> profile -> Settings -> API keys -> Create key
 *   export UMAMI_API_KEY=...
 *
 * Usage:
 *   node scripts/umami-report.mjs                 # last 30 days vs previous 30
 *   node scripts/umami-report.mjs --days 7
 *   node scripts/umami-report.mjs --days 90 --json
 */

const API = process.env.UMAMI_API_URL ?? 'https://api.umami.is/v1';
const KEY = process.env.UMAMI_API_KEY;
// Website ID lives in CLAUDE.md; override with UMAMI_WEBSITE_ID if it changes.
const SITE = process.env.UMAMI_WEBSITE_ID ?? '4b7eeb1c-03ad-4347-ab65-9bcbc445e068';

const argv = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = argv.indexOf(name);
  return i === -1 ? fallback : argv[i + 1];
};
const DAYS = Number(flag('--days', 30));
const AS_JSON = argv.includes('--json');

if (!KEY) {
  console.error('UMAMI_API_KEY is not set.\n' +
    'Get one from the Umami dashboard: profile -> Settings -> API keys -> Create key.\n' +
    'Then: export UMAMI_API_KEY=...');
  process.exit(1);
}
if (!Number.isFinite(DAYS) || DAYS <= 0) {
  console.error(`--days must be a positive number, got "${flag('--days')}"`);
  process.exit(1);
}

const DAY_MS = 86_400_000;
const now = Date.now();
const period = { startAt: now - DAYS * DAY_MS, endAt: now };
const previous = { startAt: now - 2 * DAYS * DAY_MS, endAt: now - DAYS * DAY_MS };

async function get(path, params = {}) {
  const url = new URL(`${API}/websites/${SITE}${path}`);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, String(v));

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${KEY}`, Accept: 'application/json' },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    if (res.status === 401 || res.status === 403) {
      throw new Error(`Umami rejected the API key (HTTP ${res.status}). ` +
        `Check UMAMI_API_KEY, and that the key's account can see website ${SITE}.`);
    }
    if (res.status === 404) {
      throw new Error(`Not found (HTTP 404) for ${url.pathname}. ` +
        `Either the website ID is wrong or this plan does not expose the API.`);
    }
    throw new Error(`HTTP ${res.status} for ${url.pathname}${body ? ` — ${body.slice(0, 200)}` : ''}`);
  }
  return res.json();
}

/** Umami returns { value, prev } objects for stats fields; take the current value. */
const val = (x) => (x && typeof x === 'object' && 'value' in x ? x.value : (x ?? 0));

function delta(current, prior) {
  if (!prior) return current ? '   new' : '     —';
  const pct = ((current - prior) / prior) * 100;
  const sign = pct >= 0 ? '+' : '';
  return `${sign}${pct.toFixed(0)}%`.padStart(6);
}

const fmt = (n) => Number(n).toLocaleString('en-US');
const secs = (n) => `${Math.floor(n / 60)}m ${Math.round(n % 60)}s`;

async function main() {
  const [stats, prevStats, pages, referrers, countries] = await Promise.all([
    get('/stats', period),
    get('/stats', previous),
    get('/metrics', { ...period, type: 'url', limit: 200 }),
    get('/metrics', { ...period, type: 'referrer', limit: 15 }),
    get('/metrics', { ...period, type: 'country', limit: 10 }),
  ]);

  // Language split: everything under /es/ is Spanish, the rest is English.
  const byLang = { en: 0, es: 0 };
  for (const row of pages ?? []) {
    const path = row.x ?? '';
    byLang[path.startsWith('/es/') || path === '/es' ? 'es' : 'en'] += Number(row.y ?? 0);
  }
  const totalViews = byLang.en + byLang.es;

  const report = {
    site: SITE,
    windowDays: DAYS,
    from: new Date(period.startAt).toISOString().slice(0, 10),
    to: new Date(period.endAt).toISOString().slice(0, 10),
    current: {
      visitors: val(stats.visitors), visits: val(stats.visits),
      pageviews: val(stats.pageviews), bounces: val(stats.bounces),
      totaltime: val(stats.totaltime),
    },
    previous: {
      visitors: val(prevStats.visitors), visits: val(prevStats.visits),
      pageviews: val(prevStats.pageviews), bounces: val(prevStats.bounces),
      totaltime: val(prevStats.totaltime),
    },
    byLang,
    topPages: (pages ?? []).slice(0, 15).map(r => ({ path: r.x, views: r.y })),
    topReferrers: (referrers ?? []).map(r => ({ source: r.x || '(direct)', visits: r.y })),
    topCountries: (countries ?? []).map(r => ({ country: r.x, visits: r.y })),
  };

  if (AS_JSON) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }

  const c = report.current, p = report.previous;
  const bounceRate = c.visits ? (c.bounces / c.visits) * 100 : 0;
  const prevBounce = p.visits ? (p.bounces / p.visits) * 100 : 0;
  const avgTime = c.visits ? c.totaltime / c.visits : 0;

  console.log(`\n  theb2btinkerers.com — last ${DAYS} days (${report.from} to ${report.to})`);
  console.log(`  ${'─'.repeat(58)}`);
  console.log(`  ${'Visitors'.padEnd(18)} ${fmt(c.visitors).padStart(10)}   ${delta(c.visitors, p.visitors)} vs prev ${DAYS}d`);
  console.log(`  ${'Visits'.padEnd(18)} ${fmt(c.visits).padStart(10)}   ${delta(c.visits, p.visits)}`);
  console.log(`  ${'Pageviews'.padEnd(18)} ${fmt(c.pageviews).padStart(10)}   ${delta(c.pageviews, p.pageviews)}`);
  console.log(`  ${'Bounce rate'.padEnd(18)} ${(bounceRate.toFixed(1) + '%').padStart(10)}   ${delta(bounceRate, prevBounce)}`);
  console.log(`  ${'Avg. visit'.padEnd(18)} ${secs(avgTime).padStart(10)}`);

  if (totalViews) {
    const pctEs = ((byLang.es / totalViews) * 100).toFixed(1);
    const pctEn = ((byLang.en / totalViews) * 100).toFixed(1);
    console.log(`\n  Language split`);
    console.log(`    EN  ${fmt(byLang.en).padStart(8)}  ${pctEn.padStart(5)}%`);
    console.log(`    ES  ${fmt(byLang.es).padStart(8)}  ${pctEs.padStart(5)}%`);
  }

  const table = (title, rows, keyName) => {
    if (!rows?.length) return;
    console.log(`\n  ${title}`);
    for (const r of rows) {
      const label = String(r[keyName] ?? '').slice(0, 46);
      console.log(`    ${label.padEnd(48)} ${fmt(r.views ?? r.visits).padStart(7)}`);
    }
  };
  table('Top pages', report.topPages, 'path');
  table('Top referrers', report.topReferrers, 'source');
  table('Top countries', report.topCountries, 'country');
  console.log('');
}

main().catch((err) => {
  console.error(`\n  Umami report failed: ${err.message}\n`);
  process.exit(1);
});
