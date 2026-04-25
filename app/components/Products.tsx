'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const products = [
  {
    title: 'Dehydrated Vegetables',
    desc: 'Onion, Garlic, Ginger, and customized vegetable blends for industrial use.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYatG3Tx_bVY9xQKDEGulqfe2qURfBdmVcZWeArstlZiCK_fw5vLR7Hkgey61AT3FV7Hh3gVmYtdDxbJwsZlzVCcrSy1CHc3VEqc0LTfIllYVie5c6REZxw1m8KaFwZxS1EQ6A8j_BE_QSjWvHwzpeYjVfcOnrLg-t42azCcAdfCtosxOT-c9PT6h7fHqlv7g6gdX2MCE1TXgjcpI-FEG5Ym4WKvkHW_7Zr-VWdW0u3pAATMlfsIGwN4gFjaUKgP_xBgLR_Tayue8',
    large: true,
    slug: 'dehydrated-vegetables'
  },
  {
    title: 'Fried Products',
    desc: 'Premium fried onions and snacks.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHWinOigMuANs4CJavkBX3qXUerqauR88aWNRQ1bar8Kkk2cMqnotkOZukd-Kt4kwmKNygGC72vsMjCehGWmHqZiFZCqcQTfWCi7ph3VW0n2U8vS8rGGNl1KEF_aLlkdlBxZGU6GTYTBnzgtju7t6FTMNJ6fnK1EJCaDpc__6JvZt03gKh7QPnvTJAsLC7OM9U5kBykQCzOanTj9BZ451NodDwren2zwisKH2my5QTBY_uBKlxTRZvJBr1Y4wfLZ_M-W-layOWock',
    large: false,
    slug: 'fried-products'
  },
  {
    title: 'Pure Spices',
    desc: 'Authentic flavors, global standards.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrZ8JiYdBGhrNSND0BIIm5uP9WRFsXrfS3G852MWdUADLQVf6xmhpl-xCDkA3kwOU4a4rpDPoLUhzum_WN6c1dINJQ9NT1JjnD6EamkbbHE-sg7DHcecUhIaAfRlh2azyZ3fBYriQk_AvDnsdD4QF9ZVTy7Qghdb2FNT4q0L6-KK8KvCXwYGSRhdtvpFGYNc0WrA5IRhwpL6XGWbuS5hlH91M2cYDQHM6l-71RzbHmusyBmFwhcq356q8TTt3bB192TkKznE5My6U',
    large: false,
    slug: 'pure-spices'
  },
  {
    title: 'Exotic Fruits',
    desc: 'Naturally preserved seasonal fruits for bakery and confectionery industries.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZZNxdRssA142Gik2f5gI-VPtI9qx7VV9YNpjOdwOPrkp6aZbXRlwAsrdctg7YwaGs689OCd27AOaRS2eoXtZ0MrzsEqtVGgv9slG9ec8W57XZUP5LaIjV9ZTW73VM-nguSFbBuCBkYvGoo0hvxBecnyxxcEK5FPTB3yjD8RK8fAXiqz0oE-wnqXz6uWtotrPF2qsP_VfYNmyDe8-WfCJf52S0Be5xBH0fyS-Mr4IrzTmSvl3Mezil4Qm4x1GxCgbz9DrXegqUmx8',
    large: true,
    slug: 'exotic-fruits'
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 max-w-7xl mx-auto px-6 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Our Product Portfolio</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Sustainably sourced ingredients processed with surgical precision to ensure maximum nutrient and flavor retention.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <Link 
            key={product.title} 
            href={`/category/${product.slug}`}
            className={`${product.large ? 'md:col-span-2' : ''}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl h-96 shadow-lg"
            >
              <img 
                alt={product.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src={product.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/20 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white pr-8">
                <h3 className={product.large ? "text-3xl font-bold mb-2 uppercase tracking-tight" : "text-2xl font-bold mb-2 uppercase tracking-tight"}>
                  {product.title}
                </h3>
                <p className="opacity-90 text-sm max-w-md">
                  {product.desc}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
