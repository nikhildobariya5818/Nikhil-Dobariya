import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'hi', 'es'];
  const baseUrl = 'https://yourdomain.com';

  const staticPages = ['', 'products', 'about', 'contact'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add static pages for each locale
  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page ? '/' + page : ''}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1 : 0.8,
      });
    });
  });

  // Add product pages (example with 5 products)
  locales.forEach((locale) => {
    for (let i = 1; i <= 5; i++) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/products/${i}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  });

  return sitemapEntries;
}
