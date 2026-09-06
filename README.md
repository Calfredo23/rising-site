# rising-site — "On the Rise"

A weekly verdict publication on rising dev tools. Built with Astro. Deploy target: Cloudflare Pages (free subdomain).

## Before you deploy — ONE REQUIRED CHECK

The site URL is set to `https://on-the-rise.pages.dev`. If your Cloudflare Pages project ends up
with a **different name**, update these two places and re-push:

1. `astro.config.mjs` → `site:`
2. `src/consts.ts` → `SITE_URL`
(also `public/robots.txt` sitemap line + the two absolute URLs inside `src/pages/posts/[...slug].astro` breadcrumb)

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy (Cloudflare Pages)

1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick this repo.
3. Framework preset: **Astro** · Build command: `npm run build` · Output: `dist`
4. Save → first deploy → your URL is `https://<project-name>.pages.dev`
5. Then: GSC → add property → submit `sitemap-index.xml` → URL Inspection → request indexing
   on `/`, `/posts/`, and each post. (Full checklist in `../project-rising/docs/`.)

## Structure

```
src/
├── consts.ts            # site name/tagline/URL
├── content.config.ts    # posts collection schema
├── content/posts/       # the verdict posts (markdown)
├── layouts/Base.astro   # head: canonical, OG, Twitter, JSON-LD
├── components/PostCard.astro
└── pages/               # index, posts archive, post route, method, about, contact, 404, rss
```
