import type { Config, Context } from '@netlify/edge-functions';

/**
 * Sends first-time visitors from Spain and Latin America to the Spanish site.
 *
 * Runs only on the site root. Every other URL is left alone, so a shared deep
 * link always lands where it points and never bounces to another language.
 *
 * A plain `[[redirects]]` rule in netlify.toml cannot do this job:
 *   - `force = false` would never fire, because `/` resolves to a real
 *     dist/index.html and static files win over non-forced redirects;
 *   - `force = true` would fire unconditionally, which traps Spanish visitors.
 *     The language switcher on /es/ points at `/`, so choosing English would
 *     bounce them straight back to /es/ with no way out.
 * Redirect conditions cannot read an arbitrary cookie or the user agent, so
 * both opt-outs below have to happen here.
 */

const SPANISH_SPEAKING = new Set([
  'ES', // Spain
  'MX', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC', 'GT', 'CU', 'BO',
  'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'PR',
]);

// Search and social crawlers always get the English root, whatever country
// they happen to crawl from. Google's guidance is that automatic redirection
// can stop crawlers seeing other versions; hreflang is what advertises the
// Spanish pages, so geography must never decide what gets indexed.
const CRAWLER = /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora link preview|showyoubot|outbrain|pinterest|vkshare|w3c_validator|whatsapp|telegram|linkedinbot|twitterbot|discordbot|applebot|duckduckbot|yandex|baiduspider|ia_archiver|lighthouse|chrome-lighthouse|gptbot|claudebot|perplexity/i;

export default async (request: Request, context: Context) => {
  const ua = request.headers.get('user-agent') ?? '';
  if (CRAWLER.test(ua)) return;

  // An explicit choice always wins over geography. The cookie is set by the
  // language switcher in Base.astro, so anyone who has picked a language once
  // is never redirected again.
  const cookie = request.headers.get('cookie') ?? '';
  if (/(?:^|;\s*)lang-pref=/.test(cookie)) return;

  const country = context.geo?.country?.code;
  if (!country || !SPANISH_SPEAKING.has(country)) return;

  // 302, never 301: a permanent redirect would be cached by the browser and
  // would keep sending the visitor to /es/ even after they opt out.
  //
  // The response must never be cached by anything. This site sits behind
  // Cloudflare, so a cached redirect would be replayed to visitors from other
  // countries and to people who have already opted out. Cloudflare currently
  // reports cf-cache-status: DYNAMIC for it, but that depends on cache config
  // rather than on anything this code guarantees, so say so explicitly.
  return new Response(null, {
    status: 302,
    headers: {
      location: new URL('/es/', new URL(request.url).origin).toString(),
      'cache-control': 'no-store, no-cache, must-revalidate, private',
      // The decision varies per visitor on all three of these inputs.
      vary: 'Cookie, User-Agent, X-Nf-Geo',
    },
  });
};

export const config: Config = {
  path: '/',
};
