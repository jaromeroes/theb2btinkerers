import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tag: z.string(),
    excerpt: z.string(),
    author: z.string().default('The B2B Tinkerers'),
    readTime: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
