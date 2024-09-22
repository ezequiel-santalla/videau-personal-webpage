import { defineCollection, z } from "astro:content";

const recipes = defineCollection({
  schema: z.object({
    category: z.string(),
    title: z.string(),
    price: z.number(),
    img: z.string()
  })
})

export const collections = { recipes };