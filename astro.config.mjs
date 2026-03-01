import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://theb2btinkerers.com',
  integrations: [sitemap()],
});
