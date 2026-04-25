'use client';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ScrollToTop from '@/app/components/ScrollToTop';
import WhatsAppButton from '@/app/components/WhatsAppButton';

import { motion } from 'motion/react';
import { Rocket, Eye, ShieldCheck, Leaf, Target, CheckCircle2 } from 'lucide-react';
import CTA from '../components/CTA';

export default function About() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container text-[12px] font-bold uppercase tracking-widest border border-secondary/20">
              Since 2016
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight">
              Cultivating Global <br /> Excellence in <br /> <span className="text-secondary italic">Dehydration</span>.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              A proud venture of the Sryshaya Group, De'Hydra bridges the gap between fertile Indian farmlands and the global culinary industry through surgical precision and advanced food technology.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-fixed/20 rounded-full blur-3xl -z-10"></div>
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                className="w-full h-full object-cover" 
                alt="Modern food dehydration facility" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-A6HMKI4N9BqaDRtYU-abwLKj3YQAtT4N5HxM6WRxVfL5xPa7q0Y0RepZkRV4eznSkpo2RmtQl28yXOqs4DmLzg-tM021T1BuiHTMS1xs6v1iqm-qHAD1N3Pf1cCyWAkWaVZcJ-GCAS-vpUa6EjNCTn1rnvMGiLjynvyIu42eeZMFpuhewF0QHT6SaMnczSPh2U2WA4ZEo481Jw1dwL9yaezDLPpyagE3_gkwyRsXKZWcQLqKzTUO3ukiYXfIoqD192HgNI3sNTQ"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Story & Group */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Industrial warehouse" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHdpeya0vpb9bSdT3GwXaQbF0370xhHF_lOJayHFM7Dahtv0J3-nsesvGjwQ1cSw_UB0fCn4xiUPycMk_fHQ3uNMmxU2-IDWTZeuhYcE0J_ciRlG2UivnAKemsSMq8piMvl8-u2cx6ecC6lma-khGiPTeaSS00TqD0-L3XQMFtKmqpQiww8AWuWZh2d9IoZ6ushD9rUkwBBzl3CZuS3F1qsECCTTP31v4cIzql1R-2TxAI42Zv3-8leoPT2pjVHxhJqTxXbWTxSa8"
                />
              </div>
            </motion.div>
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight">The Sryshaya Legacy</h2>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                Founded in 2016 under the visionary umbrella of the Sryshaya Group, De'Hydra was born from a commitment to eliminate food waste and enhance nutritional accessibility. We specialize in premium dehydrated onions, garlic, and specialty vegetables, serving over 40 countries with consistent industrial-grade quality.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-4 border-primary pl-6">
                  <p className="text-3xl font-bold text-primary">2016</p>
                  <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mt-1">Established</p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <p className="text-3xl font-bold text-secondary">40+</p>
                  <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mt-1">Export Nations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Core Principles</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col justify-between"
          >
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <Rocket className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                To redefine dehydrated food standards by integrating state-of-the-art moisture-lock technology with sustainable agricultural practices, ensuring every export shipment delivers peak freshness and flavor.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-primary p-12 rounded-[2.5rem] shadow-xl text-white flex flex-col justify-between"
          >
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-base opacity-90 leading-relaxed">
                To become the undisputed global benchmark for premium dehydrated ingredients, trusted by the world's leading culinary giants.
              </p>
            </div>
          </motion.div>

          {/* Values Row */}
          <motion.div whileHover={{ y: -5 }} className="bg-surface-container-highest p-10 rounded-3xl border border-outline-variant group hover:bg-secondary/5 transition-all">
            <ShieldCheck className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-4">Integrity</h3>
            <p className="text-sm text-on-surface-variant italic leading-relaxed">"We honor every promise, from harvest to harbor."</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-surface-container-highest p-10 rounded-3xl border border-outline-variant group hover:bg-secondary/5 transition-all">
            <Leaf className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-4">Sustainability</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">Minimizing footprint through high-efficiency heat recovery systems.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-surface-container-highest p-10 rounded-3xl border border-outline-variant group hover:bg-secondary/5 transition-all">
            <Target className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-4">Precision</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">Surgical accuracy in moisture control and microbial reduction.</p>
          </motion.div>
        </div>
      </section>

      {/* Engineering section */}
      <section className="bg-on-surface py-32 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary-fixed font-bold tracking-[0.2em] text-xs uppercase block mb-6">Uncompromising Standards</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight leading-tight">The Engineering of Reliability</h2>
            <div className="space-y-8">
              {[
                { title: 'ISO 22000 Certified', desc: 'Rigorous food safety management systems across all facilities.' },
                { title: 'Grade A Quality Grading', desc: 'Every batch undergoes triple-stage moisture and purity testing.' },
                { title: 'Global Supply Logistics', desc: 'Seamless export documentation and multi-port clearance expertise.' }
              ].map((item, idx) => (
                <div key={item.title} className="flex gap-6">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <img 
                className="w-full h-full object-cover" 
                alt="Dehydrated Onion Flakes" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_rixd05K8iFWTJJLO2KtK-i0ivprZUBGCj9P3pA-rRzupbpAkgn2xI__8p7lDyU3T8IjBgmIZCzKvHUIGvtoYhvQhclZWqFi3CDNbySOtvDH05t9XVKucxA5GOou4I6GtD3i0dQjiZBbtDHCjHIBmHfwfT_otuOQRolSpG39uozcSyGK2hIufkmDOTebBzafnKkGqZFqU3-mq6wj723iQOoWPQ4G9SKP9dvPpwq27abDzKT6KCYphdr_jzbi252B5FfgWccz_vCw"
              />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden translate-y-12 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <img 
                className="w-full h-full object-cover" 
                alt="Dehydrated Garlic Powder" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj1GxbIukUGNnfnbHDcxAVN5JLIZlYGv3oqM7197U8AYEpnWZ0LEAeasjv3TgxX2VjBd99X5D-hcYzVh9Z3HCRFRnNigK9c0-2aMQmhgGNt-r43Nm97Sw3cl_tdsRxQR2Tg8ExcExunqDab1KeC4zkZxrc_aQGfMdklw5-Elh6JROE6A62-dEScp8Q9XuLGi5CehAuxCIOCGHCJITWtg7NU4eS37swCZk6NHPgr_M8I7OFZQYvvUiw3hs6FiP8WklzRtpSAtdOTxU"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Footprint Map */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Strategic Logistics Footprint</h2>
              <p className="text-on-surface-variant text-lg">Our presence in the heart of India's agricultural hubs ensures rapid processing from field to facility.</p>
            </div>
            <div className="flex gap-4 mb-2 shrink-0">
              <span className="flex items-center gap-2 text-xs font-bold bg-primary text-white px-4 py-2 rounded-full">
                <div className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" /> Hubs
              </span>
              <span className="flex items-center gap-2 text-xs font-bold bg-surface-container-highest text-on-surface px-4 py-2 rounded-full border border-slate-200">
                <div className="w-2 h-2 rounded-full bg-slate-400" /> Exports
              </span>
            </div>
          </div>
          
          <div className="relative w-full aspect-[21/9] bg-slate-100 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl group">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-1000">
              <img 
                className="w-full h-full object-cover" 
                alt="Gujarat Logistics Map" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBoaW16Z0XY_e36YAGFRUslbl4zrPQ-sjsp6rkaeK1rjrPlRMWCpRp1DH7kzUr96966BibtBK03gH_Zn04BBk6hnBRclal6LbCnKi6_VYGhTR_u8OyCsX_r1UGyrMPX0Zk_cqd7HHU_NZjNQ9WtnRjxjtx0MR5JKcTQ0UrKzPfNSc2d_Crds3j9LYZ3g42x87j4EBFgzWPTXbgXpXj8fnOxKlU5ItgvbwZdz2xWSQGVi_LkvNNlmgldAGMtWLzfSsrG9mM3Y76-Q8"
              />
            </div>
            {/* Simple dot markers */}
            <div className="absolute inset-0">
               <div className="absolute top-[60%] left-[25%] flex flex-col items-center group/marker">
                  <div className="w-3 h-3 bg-primary rounded-full ring-4 ring-primary/20 shadow-lg" />
                  <div className="absolute -top-10 bg-white px-3 py-1.5 rounded-lg shadow-xl text-[10px] font-bold opacity-0 group-hover/marker:opacity-100 transition-opacity pointer-events-none border border-slate-100">MAHUVA</div>
               </div>
               <div className="absolute top-[40%] left-[20%] flex flex-col items-center group/marker">
                  <div className="w-3 h-3 bg-primary rounded-full ring-4 ring-primary/20 shadow-lg" />
                  <div className="absolute -top-10 bg-white px-3 py-1.5 rounded-lg shadow-xl text-[10px] font-bold opacity-0 group-hover/marker:opacity-100 transition-opacity pointer-events-none border border-slate-100">RAJKOT</div>
               </div>
               <div className="absolute top-[20%] left-[40%] flex flex-col items-center group/marker">
                  <div className="w-3 h-3 bg-primary rounded-full ring-4 ring-primary/20 shadow-lg" />
                  <div className="absolute -top-10 bg-white px-3 py-1.5 rounded-lg shadow-xl text-[10px] font-bold opacity-0 group-hover/marker:opacity-100 transition-opacity pointer-events-none border border-slate-100">MAHESANA</div>
               </div>
               <div className="absolute top-[35%] left-[45%] flex flex-col items-center group/marker">
                  <div className="w-3 h-3 bg-primary rounded-full ring-4 ring-primary/20 shadow-lg" />
                  <div className="absolute -top-10 bg-white px-3 py-1.5 rounded-lg shadow-xl text-[10px] font-bold opacity-0 group-hover/marker:opacity-100 transition-opacity pointer-events-none border border-slate-100">AHMEDABAD</div>
               </div>
               <div className="absolute top-[65%] left-[55%] flex flex-col items-center group/marker">
                  <div className="w-3 h-3 bg-primary rounded-full ring-4 ring-primary/20 shadow-lg" />
                  <div className="absolute -top-10 bg-white px-3 py-1.5 rounded-lg shadow-xl text-[10px] font-bold opacity-0 group-hover/marker:opacity-100 transition-opacity pointer-events-none border border-slate-100">SURAT</div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
            {[
              { loc: 'MAHUVA', detail: 'Onion Capital Hub' },
              { loc: 'RAJKOT', detail: 'Industrial Processing' },
              { loc: 'MAHESANA', detail: 'Garlic Storage' },
              { loc: 'AHMEDABAD', detail: 'Corporate Admin' },
              { loc: 'SURAT', detail: 'Port Logistics' }
            ].map((node) => (
              <div key={node.loc} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:border-primary/30 transition-colors">
                <span className="text-[10px] font-bold text-primary uppercase block mb-1 tracking-widest">{node.loc}</span>
                <span className="text-on-surface-variant text-xs font-medium">{node.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-24">
        <CTA />
      </div>
    </div>
  );

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}