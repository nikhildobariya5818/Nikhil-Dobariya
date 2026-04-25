'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Package, BarChart3, ShoppingCart, Settings } from 'lucide-react';

interface AdminSidebarProps {
  locale: string;
}

export default function AdminSidebar({ locale }: AdminSidebarProps) {
  const t = useTranslations();
  const pathname = usePathname();

  const adminLinks = [
    { href: `/${locale}/admin`, label: t('admin.products'), icon: Package },
    { href: `/${locale}/admin/categories`, label: t('admin.categories'), icon: BarChart3 },
    { href: `/${locale}/admin/orders`, label: t('admin.orders'), icon: ShoppingCart },
    { href: `/${locale}/admin/pricing`, label: t('admin.pricing'), icon: Settings },
  ];

  return (
    <div className="w-64 bg-foreground text-white h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">{t('admin.title')}</h1>

        <nav className="space-y-2">
          {adminLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Icon size={20} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="absolute bottom-6 left-6 right-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
        >
          ← Back to Store
        </Link>
      </div>
    </div>
  );
}
