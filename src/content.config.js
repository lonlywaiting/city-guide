import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const citiesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cities' }),
  schema: z.object({
    name: z.string(),
    nameEn: z.string(),
    country: z.string(),
    countryEn: z.string(),
    continent: z.string(),
    description: z.string(),
    population: z.string(),
    populationEn: z.string(),
    language: z.string(),
    languageEn: z.string(),
    currency: z.string(),
    currencyEn: z.string(),
    timezone: z.string(),
    bestSeason: z.string(),
    bestSeasonEn: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  cities: citiesCollection,
};
