export const generateProductSchema = (product: {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  offers: {
    '@type': 'Offer',
    url: `https://yourdomain.com/products/${product.id}`,
    priceCurrency: 'USD',
    price: product.price.toString(),
    availability: product.stock > 0 ? 'InStock' : 'OutOfStock',
  },
});

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dehydra',
  url: 'https://yourdomain.com',
  logo: 'https://yourdomain.com/logo.png',
  sameAs: [
    'https://www.facebook.com/dehydra',
    'https://www.twitter.com/dehydra',
    'https://www.instagram.com/dehydra',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    email: 'support@dehydra.com',
    telephone: '+1-555-123-4567',
  },
});

export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Dehydra',
  image: 'https://yourdomain.com/logo.png',
  description: 'Premium dehydrated products',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Dehydra Street',
    addressLocality: 'Fresh City',
    addressRegion: 'FC',
    postalCode: '12345',
  },
  telephone: '+1-555-123-4567',
  url: 'https://yourdomain.com',
  sameAs: [
    'https://www.facebook.com/dehydra',
    'https://www.twitter.com/dehydra',
  ],
});
