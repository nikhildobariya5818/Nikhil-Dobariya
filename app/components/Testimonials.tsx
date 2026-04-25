'use client';

import { Star, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-l-4 border-primary">
            <div className="flex gap-1 text-yellow-500 mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xl italic mb-8 leading-relaxed text-on-surface">
              &quot;De&apos;Hydra has been our primary onion supply partner for over 5 years. Their consistency in particle size and moisture levels is unmatched in the Indian market.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                <img 
                  alt="Procurement Director" 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Markus" 
                />
              </div>
              <div>
                <div className="font-bold text-on-surface">Markus Schmidt</div>
                <div className="text-[10px] md:text-xs text-on-surface-variant uppercase tracking-[0.15em] font-bold">
                  Procurement Director, EuroFood GmbH
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl text-center shadow-sm border border-slate-100">
              <div className="text-2xl font-bold text-primary mb-1">USA & Europe</div>
              <div className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Top Export Lanes</div>
            </div>
            <div className="p-6 bg-white rounded-2xl text-center shadow-sm border border-slate-100">
              <div className="text-2xl font-bold text-primary mb-1">Middle East</div>
              <div className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Bulk Supply Hub</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-primary/5 rounded-[2.5rem] overflow-hidden p-6 md:p-8">
            <div className="w-full aspect-video bg-slate-200 rounded-3xl relative overflow-hidden flex items-center justify-center border border-slate-300">
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(circle, #006565 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
              />
              <div className="relative text-center p-8 z-10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="mb-6 inline-block"
                >
                  <Globe2 className="w-16 h-16 text-primary opacity-80" />
                </motion.div>
                <div className="text-2xl font-bold text-on-surface mb-2">Global Logistics Network</div>
                <p className="text-on-surface-variant text-sm max-w-xs mx-auto">
                  Real-time tracking available for all ocean freight and multi-modal shipments.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
