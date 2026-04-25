'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dehydra</h3>
            <p className="text-gray-300">Premium dehydrated products for your health and wellness.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('nav.products')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href={`/${locale}/products`} className="hover:text-white transition-colors">
                  {t('products.title')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('nav.about')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href={`/${locale}/about`} className="hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('nav.contact')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-300">
            &copy; 2024 Dehydra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
