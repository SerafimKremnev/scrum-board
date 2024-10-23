import type { Metadata } from 'next';

/**
 * Генерирует фавиконки
 *
 * Используем этот инстумент https://realfavicongenerator.net/
 * Он генерирует иконки для разных платформ
 *
 * разархивируем иконки и кидаем в папку favicons
 *
 * @returns {Metadata}
 */

export const generateIcons = (): Metadata => {
  return {
    icons: {
      icon: {
        type: 'icon',
        sizes: '48x48',
        url: '/favicons/favicon.ico',
      },
      apple: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          url: '/favicons/apple-touch-icon.png',
        },
      ],
      other: [
        {
          rel: 'icon',
          url: '/favicons/favicon.svg',
          type: 'image/svg+xml',
        },
        {
          rel: 'icon',
          sizes: '48x48',
          url: '/favicons/favicon-48x48.png',
        },
        {
          rel: 'icon',
          sizes: '192x192',
          url: '/favicons/web-app-manifest-192x192.png',
          type: 'image/png',
        },
        {
          rel: 'icon',
          sizes: '512x512',
          url: '/favicons/web-app-manifest-512x512.png',
          type: 'image/png',
        },
      ],
    },
    manifest: '/favicons/site.webmanifest',
  };
};
