import { motion } from 'motion/react';

const stats = [
  { label: 'COUNTRIES SERVED', value: '45+' },
  { label: 'TONS ANNUALLY', value: '15k' },
  { label: 'YEARS EXPERIENCE', value: '25+' },
  { label: 'QUALITY RETAINED', value: '100%' },
];

export default function Stats() {
  return (
    <section className="bg-surface-container py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-8 rounded-2xl bg-white shadow-sm border border-slate-100"
            >
              <div className="text-4xl font-black text-primary mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="font-display text-[11px] md:text-xs text-on-surface-variant font-bold uppercase tracking-[0.1em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
