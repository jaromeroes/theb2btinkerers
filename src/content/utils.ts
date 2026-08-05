import type { CollectionEntry } from 'astro:content';

/**
 * The URL slug for a post.
 *
 * Under the legacy collections API a `slug` in frontmatter silently replaced the
 * generated slug, which is how the ES posts got translated URLs. The Content
 * Layer dropped that magic: `entry.id` is always derived from the filename, so
 * `foo.es.md` would yield `foo.es`. Reading the frontmatter field explicitly
 * keeps every published URL byte-identical to the pre-Astro-5 build.
 */
export function postSlug(post: CollectionEntry<'blog'>): string {
  return post.data.slug ?? post.id;
}

/**
 * A post is "published" once its `date` is on or before the current build time.
 *
 * Future-dated posts stay hidden — no page is generated, so they don't appear in
 * listings or the sitemap — until a rebuild runs on or after their date. A daily
 * GitHub Actions cron pings the Netlify build hook to trigger that rebuild, so
 * scheduled posts go live on their own date without any manual commit.
 * See `.github/workflows/scheduled-publish.yml`.
 */
export function isPublished(post: CollectionEntry<'blog'>, now: Date = new Date()): boolean {
  // In `npm run dev` show every post (including future-dated ones) so drafts can
  // be previewed locally. The date-gate only applies to production builds.
  if (import.meta.env.DEV) return true;
  return post.data.date.valueOf() <= now.valueOf();
}
