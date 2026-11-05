# Zucco landing — qoidalar

## 1. Git
- `main` ga to'g'ridan-to'g'ri commit qilinmaydi. Branch nomi: `bahriddin/<action>/<name>` (masalan `bahriddin/feat/landing`, `bahriddin/fix/footer-links`).
- Har bir PR'dan oldin `pnpm build` xatosiz o'tishi shart (type-check shu ichida).

## 2. Kontent va sozlamalar
- Sahifadagi har bir matn `src/i18n/messages/*.ts` da, 4 tilda. Komponentda matn qo'lda yozilmaydi (brend nomlari — ZUCCO, Google Play, App Store — bundan mustasno).
- Yangi kalit avval `uz.ts` ga qo'shiladi, keyin qolgan 3 tilga.
- Telefon, Telegram, tashqi havolalar faqat `src/config/site.ts` da; narxlar faqat `src/config/pricing.ts` da.
- Tasdiqlanmagan narx yoki raqam sahifada "namuna" deb belgilanadi.

## 3. Dizayn
- Ranglar faqat `src/styles/global.css` dagi `:root` tokenlarida; komponentlarda hex rang yozilmaydi.
- Brend ranglari CRM bilan bir xil (`crm-zucco-frontend/src/index.css`): yashil primary, logo ranglari `--logo-1..3`. Ularni o'zgartirish faqat CRM bilan birga.
- Sayt doim kunduzgi rejimda.
- Har bir o'zgarish 1440px va 390px kenglikda tekshiriladi; gorizontal scroll bo'lmasligi kerak.

## 4. Kirish imkoniyati va SEO
- Faqat bezak uchun bo'lgan SVG'larda `aria-hidden="true"`; inputlarda `label` bor.
- Har bir til o'z manzilida (`/`, `/uz-cyrl/`, `/ru/`, `/en/`); `title` va `description` har bir tilda alohida.

## 5. Xavfsizlik
- `.env` commit qilinmaydi. Brauzerga chiqadigan o'zgaruvchilar faqat `PUBLIC_` prefiksi bilan va ularda maxfiy kalit bo'lmaydi.
- Formadagi ma'lumot faqat `PUBLIC_LEAD_ENDPOINT` ga yuboriladi; URL query'ga shaxsiy ma'lumot qo'yilmaydi.
