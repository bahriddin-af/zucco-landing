/**
 * Saytdagi barcha kontakt va tashqi manzillar shu yerda.
 * Komponentlar raqam yoki havolani o'zi yozmaydi — faqat SITE dan oladi (RULES §2).
 */
export const SITE = {
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
  copyrightYear: 2026,
} as const

/** Konsultatsiya arizasi yuboriladigan manzil (.env: PUBLIC_LEAD_ENDPOINT). Bo'sh bo'lsa forma o'chiq. */
export const LEAD_ENDPOINT: string = import.meta.env.PUBLIC_LEAD_ENDPOINT ?? ''

/** Telefon raqami tekshiruvi: +998XXXXXXXXX yoki 9 xonali mahalliy raqam. */
export const PHONE_RULES = {
  countryCode: '998',
  fullLength: 12,
  localLength: 9,
} as const
