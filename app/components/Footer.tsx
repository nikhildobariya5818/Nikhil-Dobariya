'use client';

import { Instagram, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <Link href="/" className="text-2xl font-black text-primary mb-8 tracking-tighter uppercase inline-block">De&apos;Hydra</Link>
          <p className="text-on-surface-variant max-w-sm text-base leading-relaxed mb-10">
            World-class dehydrated ingredients sourced from sustainable farms and processed with advanced mechanical precision.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
              <MessageSquare className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:exports@dehydrafoods.com" className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-primary text-xs uppercase tracking-[0.2em] mb-8">Products</h4>
          <ul className="space-y-4">
            {[
              { label: 'Dehydrated Onion', path: '/category/premium-onion' },
              { label: 'Dehydrated Garlic', path: '/category/garlic-powders' },
              { label: 'All Products', path: '/products' }
            ].map(item => (
              <li key={item.label}>
                <Link href={item.path} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-primary text-xs uppercase tracking-[0.2em] mb-8">Company</h4>
          <ul className="space-y-4">
            {[
              { label: 'About Us', path: '/about-us' },
              { label: 'Job Work', path: '/job-work' },
              { label: 'Infrastructure', path: '/infrastructure' },
              { label: 'Export Solutions', path: '/export-solutions' },
              { label: 'Request a Quote', path: '/request-quote' },
              { label: 'Quality Standards', path: '/quality' },
              { label: 'Contact Us', path: '/contact' }
            ].map(item => (
              <li key={item.label}>
                <Link href={item.path} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-10 border-t border-slate-200 text-center">
        <p className="text-on-surface-variant text-[11px] font-bold uppercase tracking-[0.1em]">
          © 2024 DE&apos;HYDRA DEHYDRATED FOODS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
