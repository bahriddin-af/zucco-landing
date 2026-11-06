import { en } from './messages/en'
import { ru } from './messages/ru'
import { uz } from './messages/uz'
import { uzCyrl } from './messages/uz-cyrl'
import type { Messages } from './messages/uz'
import type { SectionId } from '@/config/site'

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

/**
 * Til bo'yicha sahifa manzili: `localePath('ru')` → `/ru/`, `localePath('ru', 'privacy')` → `/ru/privacy/`.
 * Standart til prefikssiz: `localePath('uz', 'privacy')` → `/privacy/`.
 */
export const localePath = (locale: Locale, page = ''): string => {
  const prefix = locale === DEFAULT_LOCALE ? '/' : `/${locale}/`
  return page ? `${prefix}${page}/` : prefix
}

/** Bosh sahifadagi bo'limga havola — boshqa sahifalardan ham ishlaydi (`/ru/#pricing`). */
export const sectionHref = (locale: Locale, section: SectionId): string => `${localePath(locale)}#${section}`

export const isLocale = (value: string | undefined): value is Locale =>
  value !== undefined && (LOCALES as readonly string[]).includes(value)
