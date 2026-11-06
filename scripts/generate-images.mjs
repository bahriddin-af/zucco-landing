/**
 * public/ dagi PNG ikonka va og:image fayllarini yaratadi:
 *   node scripts/generate-images.mjs
 *
 * Ranglar src/styles/global.css dagi :root tokenlaridan o'qiladi (RULES §3 — rang bir joyda),
 * logotip public/favicon.svg dan olinadi. sharp — Astro bilan birga o'rnatilgan.
 * Natija repoga commit qilinadi; logotip yoki brend rangi o'zgarsa, skript qayta ishga tushiriladi.
 */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = fileURLToPath(new URL('..', import.meta.url))
const css = readFileSync(`${root}src/styles/global.css`, 'utf8')
const token = (name) => {
  const match = css.match(new RegExp(`--${name}:\\s*([^;]+);`))
  if (!match) throw new Error(`global.css da --${name} tokeni topilmadi`)
  return match[1].trim()
}

const favicon = readFileSync(`${root}public/favicon.svg`, 'utf8')
/** favicon.svg ichki qismi (viewBox 0 0 96 96) — og:image ichiga joylash uchun. */
const logoInner = favicon.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '')

const OG = { width: 1200, height: 630 }
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${OG.width}" height="${OG.height}" viewBox="0 0 ${OG.width} ${OG.height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${token('primary-2')}"/>
      <stop offset="1" stop-color="${token('primary')}"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect x="72" y="72" width="1056" height="486" rx="36" fill="${token('surface')}"/>
  <svg x="140" y="203" width="224" height="224" viewBox="0 0 96 96">${logoInner}</svg>
  <text x="420" y="330" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="132" font-weight="800" letter-spacing="-3" fill="${token('heading')}">ZUCCO</text>
  <text x="426" y="400" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="40" font-weight="600" fill="${token('primary')}">CRM · zucco.uz</text>
</svg>`

const icon = (size) => sharp(Buffer.from(favicon), { density: (72 * size) / 96 * 2 }).resize(size, size)
/** Apple ikonkasi shaffof fonni qora qiladi — oq fon ustiga joylanadi. */
const appleIcon = async (size) =>
  sharp({ create: { width: size, height: size, channels: 4, background: token('surface') } }).composite([
    { input: await icon(Math.round(size * 0.8)).png().toBuffer(), gravity: 'center' },
  ])

await sharp(Buffer.from(ogSvg)).png().toFile(`${root}public/og-image.png`)
await icon(32).png().toFile(`${root}public/favicon-32.png`)
await icon(192).png().toFile(`${root}public/icon-192.png`)
await icon(512).png().toFile(`${root}public/icon-512.png`)
await (await appleIcon(180)).png().toFile(`${root}public/apple-touch-icon.png`)
console.log('public/ ga og-image.png, favicon-32.png, icon-192.png, icon-512.png, apple-touch-icon.png yozildi')
