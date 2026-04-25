import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-16 items-center py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container text-[12px] font-bold tracking-[0.05em] rounded-full mb-6 uppercase">
            Global Export Excellence
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-on-surface mb-6 tracking-tight">
            Precision Dehydrated Food Supply for <span className="text-primary italic">Global Markets.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-lg leading-relaxed">
            Elevating industrial food supply through advanced dehydration technology. Custom bulk solutions for manufacturers, distributors, and global retail chains.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/request-quote">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-4 rounded-xl font-display text-base font-bold hover:shadow-2xl hover:shadow-primary/20 transition-all"
              >
                Request a Quote
              </motion.button>
            </Link>
            <Link to="/products">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-display text-base font-bold hover:bg-primary/5 transition-all"
              >
                View Products
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
            <img 
              alt="Dehydrated vegetables" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWIPRfYN29lscc8gzP2K4ANoM10VkXvX6h6QEVJ-5E2Qz6sroLC5d4mvnIAwd3DfIcjCjf_BK1-7hqZkKvLADOUCBMaguBJMGw3YwxZNfqhVGjZpHDIGHnGF0NPmgguOsqq_vGNxYHX1FSNWh_AaizpjLYYAnRaPfSyqYJU4tPH5wP-YRXzuoUzYWKj1lJjfvx-Wsd4d6g8venzR5MPYrTPyc6yeNmjZWVUYncLnJxcdGpgm3douXUL5TVzfxmtI4K5XFN_CtSA6M"
            />
          </div>
          
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-8 -left-4 md:-left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex gap-4 items-center z-20"
          >
            <div className="bg-primary/10 p-3 rounded-full">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="font-bold text-sm">FSSC 22000 Certified</div>
              <div className="text-xs text-on-surface-variant">Global Safety Standards</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
