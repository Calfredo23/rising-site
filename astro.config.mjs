import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: if the Cloudflare project URL changes, update BOTH this `site` value
// and SITE_URL in src/consts.ts, then re-deploy.
export default defineConfig({
  site: 'https://rising-site.catimbangcedrickalfredo.workers.dev',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
