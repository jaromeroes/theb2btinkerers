import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    tag: z.string(),
    readTime: z.string().optional(),
  }),
});

export const collections = { blog };
