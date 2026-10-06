import { defineCollection, z } from 'astro:content';

const ratgeberCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  'ratgeber': ratgeberCollection,
};