import { ReactNode } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

interface AdminLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function AdminLayout({
  children,
  params,
}: AdminLayoutProps) {
  const { locale } = await params;

  return (
    <div className="flex h-screen bg-secondary">
      <AdminSidebar locale={locale} />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
