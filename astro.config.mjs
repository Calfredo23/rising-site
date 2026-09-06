import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: if the Cloudflare Pages project name is not "on-the-rise", update BOTH
// this `site` value and SITE_URL in src/consts.ts, then re-deploy.
export default defineConfig({
  site: 'https://on-the-rise.pages.dev',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
