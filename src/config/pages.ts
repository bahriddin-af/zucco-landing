/**
 * Qo'shimcha sahifalar ro'yxati. Alohida faylda, chunki `astro.config.mjs` ham import qiladi
 * (bu yerda `import.meta.env` ishlatilmaydi).
 */

/** Yuridik sahifalar (slug = manzil): `/privacy/`, `/ru/offer/` va h.k. */
export const LEGAL_PAGES = ['privacy', 'offer'] as const
export type LegalPage = (typeof LEGAL_PAGES)[number]

/**
 * Rasmiy matni hali tasdiqlanmagan yuridik sahifalar: `noindex` bilan chiqadi va sitemap'ga kirmaydi.
 * Matn qo'yilgach, slug shu ro'yxatdan olib tashlanadi.
 */
export const PENDING_LEGAL_PAGES: readonly LegalPage[] = LEGAL_PAGES
