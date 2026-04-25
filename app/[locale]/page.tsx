import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Metadata } from 'next';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    en: 'Home - Dehydra Premium Products',
    hi: 'होम - डिहाइड्रा प्रीमियम उत्पाद',
    es: 'Inicio - Productos Premium Dehydra',
  };
  const descriptions = {
    en: 'Welcome to Dehydra - Premium dehydrated products for your health and wellness',
    hi: 'डिहाइड्रा में स्वागत है - आपके स्वास्थ्य के लिए प्रीमियम निर्जलीकृत उत्पाद',
    es: 'Bienvenido a Dehydra - Productos deshidratados premium para su salud',
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      url: `https://yourdomain.com/${locale}`,
      type: 'website',
    },
  };
}

function HomePage() {
  return <HomePageClient />;
}

function HomePageClient() {
  const t = useTranslations();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {t('home.subtitle')}
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {t('home.cta')}
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t('home.featured')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-secondary h-48 flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Product 1</h3>
                <p className="text-gray-600 mb-4">Premium quality dehydrated fruits</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">$19.99</span>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    {t('products.addToCart')}
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-secondary h-48 flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Product 2</h3>
                <p className="text-gray-600 mb-4">Premium quality dehydrated vegetables</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">$24.99</span>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    {t('products.addToCart')}
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-secondary h-48 flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Product 3</h3>
                <p className="text-gray-600 mb-4">Premium quality dehydrated herbs</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">$14.99</span>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    {t('products.addToCart')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
