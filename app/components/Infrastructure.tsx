'use client';

import { Warehouse, Factory, Network } from 'lucide-react';
import { motion } from 'motion/react';

const facilities = [
  {
    icon: Warehouse,
    title: 'Mahuva Warehouse',
    desc: 'Primary processing hub for Onion and Garlic dehydration with climate-controlled storage.',
  },
  {
    icon: Factory,
    title: 'Rajkot Facility',
    desc: 'Specialized sorting and packaging center equipped with laser sorters and metal detectors.',
  },
  {
    icon: Network,
    title: 'Ahmedabad & Surat Units',
    desc: 'Corporate logistics hubs ensuring 24/7 connectivity to major ports like Mundra and Kandla.',
  },
];

export default function InfrastructureComponent() {
  return (
    <section id="global-supply" className="bg-on-surface py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary-container font-bold tracking-[0.2em] text-[11px] uppercase block mb-4">
              Advanced Infrastructure
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight">Strategic Distribution Network</h2>
            
            <div className="space-y-6">
              {facilities.map((item, idx) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <item.icon className="w-8 h-8 text-secondary-container shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img 
              alt="Modern Warehouse" 
              className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 aspect-[4/5] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDDxx_EE8MIxa246fhWn-XK7iZHQnywQxDyNa5ce4pb2oSFJ9-NWd0BDf8FIJnrs9H4BXBjUSPzXs2FXcyGKGk3jZYLvgWnRsKHtJnRY59U3024FD9fU6xJxMyLckOxuBfUo1FXA6aul59SPdYud_JktjoWU_HVe1GQlVH7SOZyIcvi7QX-Z2fdEkZ-wBy7FUDXlsADNc9Hze-SC8vzDj5Cp1hXTNLlO1BoQCy1uqq2l-fGC9MVkwgVZ_j9ff2CkmG_ufZxz5N37I"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
