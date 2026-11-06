import type { APIRoute } from 'astro'
import { ICONS, SITE, THEME_COLOR } from '@/config/site'
import { getMessages, DEFAULT_LOCALE } from '@/i18n/locales'

/** Web manifest — nom, rang va ikonkalar site.ts dan olinadi (build vaqtida statik fayl bo'ladi). */
export const GET: APIRoute = () => {
  const t = getMessages(DEFAULT_LOCALE)
  const manifest = {
    name: SITE.name,
    short_name: SITE.tabTitle,
    description: t.meta.description,
    start_url: '/',
    display: 'browser',
    background_color: THEME_COLOR,
    theme_color: THEME_COLOR,
    icons: ICONS.manifestIcons.map((icon) => ({ src: icon.src, sizes: `${icon.size}x${icon.size}`, type: 'image/png' })),
  }
  return new Response(JSON.stringify(manifest), { headers: { 'Content-Type': 'application/manifest+json' } })
}
