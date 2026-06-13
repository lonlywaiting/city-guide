// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://lonlywaiting.github.io',
  base: '/city-guide',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  },
  server: {
    port: 4321
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  build: {
    assets: '_astro'
  }
});