import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vichnist-kalush.com.ua' // Впиши реальный домен

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Если будут другие страницы (контакты, цены), добавляй их сюда
  ]
}