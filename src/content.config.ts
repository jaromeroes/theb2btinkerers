import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    tag: z.string(),
    readTime: z.string().optional(),
    image: image().optional(),
    // i18n
    lang: z.enum(['en', 'es']).default('en'),
    // Pairs the EN and ES versions of the same article (for hreflang + language switch).
    translationKey: z.string().optional(),
    // URL slug. Under the legacy collections API a frontmatter `slug` silently
    // overrode the generated one; the Content Layer does not do that, so it is
    // now an explicit schema field read through postSlug() in ./content/utils.
    // Every ES post sets it (translated slugs); EN posts fall back to the
    // filename, which is what the legacy behaviour produced anyway.
    slug: z.string().optional(),
    description: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const collections = { blog };
