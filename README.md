# Zucco landing (zucco.uz)

Zucco CRM'ning ommaviy sayti. [Astro](https://astro.build) bilan yozilgan statik sayt: build natijasi oddiy HTML/CSS fayllar, server yoki baza kerak emas.

## Ishga tushirish

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # astro check (type-check) + dist/ ga yig'ish
pnpm preview    # dist/ ni lokal ko'rish
```

> `.npmrc` dagi `node-linker=hoisted` OneDrive papkasida symlink xatosining oldini oladi (crm-zucco-frontend bilan bir xil).

## Tillar va manzillar

| Til | Manzil |
| --- | --- |
| O'zbek (lotin) — standart | `/` |
| Ўзбек (кирилл) | `/uz-cyrl/` |
| Русский | `/ru/` |
| English | `/en/` |

Matnlar `src/i18n/messages/*.ts` da. `uz.ts` asosiy fayl: boshqa tillar uning turiga bo'ysunadi, kalit qolib ketsa `pnpm build` xato beradi.
`hreflang`, `canonical` va `sitemap-index.xml` avtomatik yaratiladi.

## Qayerda nima o'zgartiriladi

| Nima | Fayl |
| --- | --- |
| Telefon, Telegram, ijtimoiy tarmoq va do'kon havolalari | `src/config/site.ts` |
| Tarif narxlari | `src/config/pricing.ts` |
| Ranglar va uslublar | `src/styles/global.css` |
| Bo'limlar | `src/components/*.astro` |
| Favicon PNG, apple-touch-icon, og:image | `node scripts/generate-images.mjs` (logotip `public/favicon.svg`, ranglar `global.css` dan) |
| Yuridik sahifalar (privacy, offer) | `src/config/pages.ts`, matnlar `src/i18n/messages/*.ts` → `legal` |

Havolasi `null` bo'lgan ijtimoiy tarmoq yoki ilova do'koni sahifada "tez orada" bo'lib chiqadi.

## Konsultatsiya formasi

Forma arizani `PUBLIC_LEAD_ENDPOINT` manziliga `POST` qiladi:

```json
{ "name": "Ali", "phone": "+998901234567", "language": "uz", "source": "landing", "website": "" }
```

`website` — ko'rinmas honeypot maydon: odam uni to'ldirmaydi, bot to'ldirsa backend arizani saqlamaydi.
Backend manzili — `POST /api/public/leads`; `zucco.uz` backend CORS ro'yxatida (`ALLOWED_ORIGINS`) bo'lishi kerak.

Javoblar: `2xx` — muvaffaqiyat; `400` — ma'lumot noto'g'ri; `429` — juda ko'p urinish; `503` — qabul o'chiq;
tarmoq xatosi alohida. Har biri uchun 4 tilda alohida xabar va sotuv bo'limi raqami ko'rsatiladi.

`.env.example` dan `.env` yarating. O'zgaruvchi bo'sh bo'lsa, forma ariza yubormaydi va mijozga sotuv bo'limi raqamini ko'rsatadi.
Forma ostidagi rozilik matni maxfiylik siyosati sahifasiga (`/privacy/`) olib boradi.

## Deploy

`pnpm build` dan keyin `dist/` papkasini istalgan statik hostingga (nginx, Cloudflare Pages, Vercel) joylash kifoya.
