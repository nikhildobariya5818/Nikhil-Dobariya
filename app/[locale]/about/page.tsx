import { useTranslations } from 'next-intl';

function AboutPage() {
  return <AboutPageClient />;
}

function AboutPageClient() {
  const t = useTranslations();

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Dehydra</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At Dehydra, we are committed to providing the highest quality dehydrated products
              that support your health and wellness journey. Our products are carefully sourced,
              processed, and packaged to maintain nutritional value and freshness.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Quality Assurance</h2>
            <p className="text-gray-700 mb-4">
              Every product undergoes strict quality control measures to ensure it meets our
              high standards. We use traditional dehydration methods combined with modern
              technology to preserve the natural flavor and nutrients of our products.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Sustainability</h2>
            <p className="text-gray-700">
              We believe in sustainable practices that benefit both our customers and the
              environment. Our packaging is eco-friendly and our sourcing practices support
              local farmers and communities.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
