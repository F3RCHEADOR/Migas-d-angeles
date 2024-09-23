import { defineCollection, z } from "astro:content";

const categories = defineCollection({
    schema: z.object({
        title: z.string(),
        img: z.string(),
        desciption: z.string(),
    })
})


export const collection = { categories }