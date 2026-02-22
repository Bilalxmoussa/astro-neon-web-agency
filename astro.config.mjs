import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://neoncraft.me',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/web-design-ottawa/': '/services/web-design/',
    '/web-design-ottawa/restaurants/': '/industries/restaurants/',
    '/web-design-ottawa/dental/': '/industries/dental/',
    '/web-design-ottawa/lawyers/': '/industries/lawyers/',
    '/web-design-ottawa/ecommerce/': '/industries/ecommerce/',
    '/web-design-ottawa/contractors/': '/industries/contractors/',
    '/web-design-ottawa/real-estate/': '/industries/real-estate/',
    '/seo-ottawa/': '/services/seo/',
    '/website-development-ottawa/': '/services/responsive-development/',
    '/web-design-kanata/': '/areas/kanata/',
    '/web-design-barrhaven/': '/areas/barrhaven/',
    '/web-design-orleans/': '/areas/orleans/',
    '/web-design-nepean/': '/areas/nepean/',
    '/web-design-gloucester/': '/areas/gloucester/',
    '/web-design-gatineau/': '/areas/gatineau/',
  },
});
