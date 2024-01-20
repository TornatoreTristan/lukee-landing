import { defineCollection } from "astro:content";
const changeLogCollection = defineCollection({});
const authorsCollection = defineCollection({});

export const collections = {
  changelog: changeLogCollection,
  authors: authorsCollection,
};
