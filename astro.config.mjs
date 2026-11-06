// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import { PENDING_LEGAL_PAGES } from './src/config/pages'

/**
 * Matni tasdiqlanmagan (noindex) sahifalar sitemap'ga kirmaydi.
 * @param {string} url
 */
const isPendingPage = (url) => PENDING_LEGAL_PAGES.some((slug) => new URL(url).pathname.endsWith(`/${slug}/`))

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
      filter: (page) => !isPendingPage(page),
      i18n: {
        defaultLocale: 'uz',
        locales: { uz: 'uz-Latn', 'uz-cyrl': 'uz-Cyrl', ru: 'ru', en: 'en' },
      },
    }),
  ],
})
