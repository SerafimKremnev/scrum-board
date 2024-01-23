import { MetadataRoute } from 'next';

const VERCEL_ENV = process.env.VERCEL_ENV;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: VERCEL_ENV
      ? {
          userAgent: '*',
          disallow: '/',
        }
      : {
          userAgent: '*',
          allow: '/',
          disallow: '/api/',
        },
    // sitemap: 'https://acme.com/sitemap.xml',
  };
}
