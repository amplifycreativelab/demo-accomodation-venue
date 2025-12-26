// @ts-check
// Force restart: 1
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://amplifycreativelab.github.io',
  base: '/demo-accomodation-venue/',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
