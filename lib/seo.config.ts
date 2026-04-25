import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  titleTemplate: '%s | Dehydra',
  defaultTitle: 'Dehydra - Premium Dehydrated Products',
  description: 'Premium quality dehydrated fruits, vegetables, and herbs with multi-language support.',
  canonical: 'https://yourdomain.com',
  mobileAlternate: {
    media: 'only screen and (max-width: 640px)',
    href: 'https://yourdomain.com',
  },
  languageAlternates: [
    {
      hrefLang: 'en-US',
      href: 'https://yourdomain.com/en',
    },
    {
      hrefLang: 'hi-IN',
      href: 'https://yourdomain.com/hi',
    },
    {
      hrefLang: 'es-ES',
      href: 'https://yourdomain.com/es',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Dehydra',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dehydra - Premium Dehydrated Products',
      },
    ],
  },
  twitter: {
    handle: '@dehydra',
    site: '@dehydra',
    cardType: 'summary_large_image',
  },
};

export default config;
