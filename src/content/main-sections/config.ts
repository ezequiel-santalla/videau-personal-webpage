import { defineCollection, z } from "astro:content";

const mainArticles = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string()
  })
})

export const collections = { mainArticles };