// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  site: 'https://meingesundheitsrechner.de',
  integrations: [tailwind()],
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});