'use client';

import { Globe } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Products', path: '/products' },
    { name: 'Job Work', path: '/job-work' },
    { name: 'Quality', path: '/quality' },
    { name: 'Global Supply', path: '/infrastructure' },
    { name: 'Export Solutions', path: '/export-solutions' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <Link href="/">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black text-primary tracking-tighter uppercase cursor-pointer"
          >
            De&apos;Hydra
          </motion.div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-display text-sm font-medium tracking-wide">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.name} 
                href={item.path}
                className={`transition-colors duration-300 ${isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden lg:flex items-center gap-2 text-on-surface-variant font-display text-sm hover:text-primary transition-all">
            <Globe className="w-4 h-4" />
            Language
          </button>
          <Link href="/request-quote">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2.5 rounded-lg font-display text-sm font-bold shadow-lg shadow-primary/10"
            >
              Request a Quote
            </motion.button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
