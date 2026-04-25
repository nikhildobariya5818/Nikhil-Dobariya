import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary-container rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center shadow-2xl shadow-primary/20"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-on-primary-container mb-8 leading-[1.1] tracking-tight">
            Ready to Secure Your Supply Chain?
          </h2>
          <p className="text-on-primary-container/90 text-lg md:text-xl mb-12 leading-relaxed">
            Join 500+ global brands that rely on De'Hydra for consistent, high-quality industrial ingredients.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Start Your Quote
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all"
            >
              Download Catalog
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
