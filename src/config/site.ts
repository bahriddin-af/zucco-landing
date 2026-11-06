/**
 * Saytdagi barcha kontakt va tashqi manzillar shu yerda.
 * Komponentlar raqam yoki havolani o'zi yozmaydi — faqat SITE dan oladi (RULES §2).
 */
export const SITE = {
  name: 'Zucco CRM',
  /** Brauzer tab'ida ko'rinadigan nom (favicon yonida). Uzun sarlavha og:title va description'da. */
  tabTitle: 'ZUCCO',
  url: 'https://zucco.uz',
  appUrl: 'https://app.zucco.uz',
  phone: {
    href: 'tel:+998944396669',
    display: '+998 94 439 66 69',
  },
  telegram: {
    href: 'https://t.me/Bahriddin_Abdusalomov',
    handle: '@Bahriddin_Abdusalomov',
  },
  /** Hali havolasi yo'q tarmoqlar `null` — sahifada "tez orada" bo'lib chiqadi. */
  socials: {
    youtube: null as string | null,
    instagram: null as string | null,
  },
  stores: {
    googlePlay: null as string | null,
    appStore: null as string | null,
  },
  /** Build vaqtidagi yil — har yili qo'lda yangilash shart emas. */
  copyrightYear: new Date().getFullYear(),
} as const

/**
 * Bo'lim anchorlari (`id`). Barcha tillarda bir xil; Header, Footer va bo'lim komponentlari
 * faqat shu yerdan oladi.
 */
export const SECTIONS = {
  top: 'top',
  features: 'features',
  support: 'support',
  pricing: 'pricing',
  faq: 'faq',
  demo: 'demo',
} as const

import type { LegalPage } from './pages'

export { LEGAL_PAGES, PENDING_LEGAL_PAGES, type LegalPage } from './pages'

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS]

/** Saytda ko'rinadigan domen (zucco.uz) — SITE.url dan olinadi. */
export const SITE_HOST = new URL(SITE.url).host

/**
 * Mobil brauzer paneli rangi (`<meta name="theme-color">`).
 * Meta tegda CSS o'zgaruvchisi ishlamaydi, shuning uchun qiymat shu yerda —
 * `global.css` dagi `--canvas` bilan bir xil bo'lishi shart.
 */
export const THEME_COLOR = '#F1F6FB'

/** Google Fonts: shrift va preconnect manzillari. */
export const FONTS = {
  preconnect: [
    { href: 'https://fonts.googleapis.com', crossorigin: false },
    { href: 'https://fonts.gstatic.com', crossorigin: true },
  ],
  stylesheet: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
} as const

/** Konsultatsiya formasi: maydon uzunliklari, ariza manbasi va himoya sozlamalari. */
export const LEAD_FORM = {
  nameMaxLength: 100,
  phoneMaxLength: 20,
  phonePlaceholder: '+998 90 123 45 67',
  source: 'landing',
  /** Botlar uchun yashirin maydon nomi — backend shu maydon to'ldirilgan arizani saqlamaydi. */
  honeypotField: 'website',
  /** Rozilik matnidagi havola ochadigan sahifa. */
  consentPage: 'privacy' satisfies LegalPage,
} as const

/** Ariza endpointi qaytaradigan, alohida xabar ko'rsatiladigan HTTP holatlari. */
export const LEAD_HTTP_STATUS = {
  badRequest: 400,
  tooManyRequests: 429,
  unavailable: 503,
} as const

/** Konsultatsiya arizasi yuboriladigan manzil (.env: PUBLIC_LEAD_ENDPOINT). Bo'sh bo'lsa forma o'chiq. */
export const LEAD_ENDPOINT: string = import.meta.env.PUBLIC_LEAD_ENDPOINT ?? ''

/** Telefon raqami tekshiruvi: +998XXXXXXXXX yoki 9 xonali mahalliy raqam. */
export const PHONE_RULES = {
  countryCode: '998',
  fullLength: 12,
  localLength: 9,
} as const
