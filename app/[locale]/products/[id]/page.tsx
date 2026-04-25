'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  stock: number;
  specifications?: Record<string, string>;
  image?: string;
}

interface ProductDetailPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const t = useTranslations();
  const [locale, setLocale] = useState('');
  const [id, setId] = useState('');
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getParams = async () => {
      const { locale: paramLocale, id: paramId } = await params;
      setLocale(paramLocale);
      setId(paramId);

      // Fetch product from Express API
      try {
        const response = await fetch(`http://localhost:5000/api/products/${paramId}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          // Mock data
          const mockProduct: Product = {
            id: parseInt(paramId),
            name: 'Premium Dried Mangoes',
            category: 'fruits',
            price: 12.99,
            description: 'Sweet and chewy dried mangoes sourced from premium farms',
            stock: 50,
            specifications: {
              weight: '200g',
              origin: 'India',
              'shelf-life': '6 months',
              storage: 'Cool and dry place',
            },
          };
          setProduct(mockProduct);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        const mockProduct: Product = {
          id: parseInt(paramId),
          name: 'Premium Dried Mangoes',
          category: 'fruits',
          price: 12.99,
          description: 'Sweet and chewy dried mangoes sourced from premium farms',
          stock: 50,
          specifications: {
            weight: '200g',
            origin: 'India',
            'shelf-life': '6 months',
            storage: 'Cool and dry place',
          },
        };
        setProduct(mockProduct);
      } finally {
        setLoading(false);
      }
    };

    getParams();
  }, [params]);

  if (loading) {
    return (
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>{t('common.error')}</p>
          <Link href={`/${locale}/products`} className="text-primary hover:underline mt-4">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Link */}
        <Link
          href={`/${locale}/products`}
          className="flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft size={20} />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="bg-secondary rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-400">Product Image</span>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-6">{product.description}</p>

            <div className="bg-secondary rounded-lg p-6 mb-6">
              <div className="mb-4">
                <span className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                {product.stock > 0
                  ? `${t('products.stock')}: ${product.stock}`
                  : t('productDetail.outOfStock')}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <label className="font-bold">{t('productDetail.quantity')}:</label>
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-300 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    disabled={quantity >= product.stock}
                    className="px-4 py-2 hover:bg-gray-300 transition-colors disabled:opacity-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                disabled={product.stock === 0}
                className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {product.stock > 0
                  ? t('productDetail.addToCart')
                  : t('productDetail.outOfStock')}
              </button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        {product.specifications && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t('productDetail.specifications')}</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key} className="border-b last:border-b-0">
                      <td className="px-6 py-4 font-bold text-gray-700 capitalize">
                        {key.replace('-', ' ')}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">{t('productDetail.relatedProducts')}</h2>
          <p className="text-gray-600">Related products coming soon...</p>
        </div>
      </div>
    </div>
  );
}
