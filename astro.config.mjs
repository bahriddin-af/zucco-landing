// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// Til ro'yxati src/i18n/locales.ts bilan bir xil bo'lishi kerak.
export default defineConfig({
  site: 'https://zucco.uz',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'uz',
    locales: ['uz', 'uz-cyrl', 'ru', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'uz',
        locales: { uz: 'uz-Latn', 'uz-cyrl': 'uz-Cyrl', ru: 'ru', en: 'en' },
      },
    }),
  ],
})
