import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.vichnist-kalush.com.ua/sitemap.xml', // Впиши реальный домен
  }
}