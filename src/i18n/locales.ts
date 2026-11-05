import { en } from './messages/en'
import { ru } from './messages/ru'
import { uz } from './messages/uz'
import { uzCyrl } from './messages/uz-cyrl'
import type { Messages } from './messages/uz'

export const LOCALES = ['uz', 'uz-cyrl', 'ru', 'en'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'uz'

/** Prefiksli (standart bo'lmagan) tillar — `src/pages/[lang]` shu ro'yxatdan sahifa yasaydi. */
export const PREFIXED_LOCALES = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE)

export const LOCALE_META: Record<Locale, { short: string; htmlLang: string; ogLocale: string }> = {
  uz: { short: 'UZ', htmlLang: 'uz-Latn', ogLocale: 'uz_UZ' },
  'uz-cyrl': { short: 'ЎЗ', htmlLang: 'uz-Cyrl', ogLocale: 'uz_UZ' },
  ru: { short: 'RU', htmlLang: 'ru', ogLocale: 'ru_RU' },
  en: { short: 'EN', htmlLang: 'en', ogLocale: 'en_US' },
}

const MESSAGES: Record<Locale, Messages> = { uz, 'uz-cyrl': uzCyrl, ru, en }

export const getMessages = (locale: Locale): Messages => MESSAGES[locale]

export const localePath = (locale: Locale): string => (locale === DEFAULT_LOCALE ? '/' : `/${locale}/`)

export const isLocale = (value: string | undefined): value is Locale =>
  value !== undefined && (LOCALES as readonly string[]).includes(value)
