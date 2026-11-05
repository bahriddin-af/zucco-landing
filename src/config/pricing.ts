import type { Locale } from '@/i18n/locales'

/**
 * Tarif narxlari (so'm/oy). Hozircha NAMUNA — sotuv bo'limi tasdiqlagach shu yerda almashtiriladi.
 * `yearly` — yillik to'lovda bir oyga to'g'ri keladigan narx (12 oy uchun 10 oy narxi).
 */
export const PLAN_PRICES = {
  start: { monthly: 290_000, yearly: 241_000 },
  business: { monthly: 590_000, yearly: 491_000 },
} as const

const THOUSANDS_SEPARATOR: Record<Locale, string> = {
  uz: ' ',
  'uz-cyrl': ' ',
  ru: ' ',
  en: ',',
}

/** 290000 → "290 000" (en: "290,000"). Intl'dagi tor bo'shliq o'rniga oddiy bo'shliq — barcha shriftlarda bir xil ko'rinadi. */
export const formatPrice = (value: number, locale: Locale): string =>
  String(value).replace(/\B(?=(\d{3})+(?!\d))/g, THOUSANDS_SEPARATOR[locale])
