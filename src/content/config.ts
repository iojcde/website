import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    status: z.enum(["draft", "published"]),
    description: z.string(),
    // Transform string to Date object
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const craft = defineCollection({
  type: "data",
  schema: z.object({
    src: z.string(),
    width: z.number(),
    height: z.number(),
    type: z.string(),
    name: z.string(),
    url: z.string().optional(),
    date: z.string(),
    dark: z.boolean().optional(),
  }),
});

export const collections = { blog, craft };
