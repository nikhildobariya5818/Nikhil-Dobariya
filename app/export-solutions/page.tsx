'use client';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ScrollToTop from '@/app/components/ScrollToTop';
import WhatsAppButton from '@/app/components/WhatsAppButton';

import { motion } from 'motion/react';
import { 
  Globe, 
  Ship, 
  Package, 
  FileText, 
  BarChart3, 
  Anchor, 
  ChevronRight,
  CheckCircle2,
  MapPin,
  Mail,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const exportStats = [
  { label: 'Tons Exported Annually', value: '5,000+', icon: Ship },
  { label: 'Active Export Destinations', value: '45+', icon: Globe },
];

const onboardingSteps = [
  {
    number: '01',
    title: 'Requirement Analysis',
    desc: 'Submit your specifications, moisture levels, and grade requirements via our export portal.'
  },
  {
    number: '02',
    title: 'Sampling & Validation',
    desc: 'Express delivery of batch samples for lab testing and sensory evaluation at your end.'
  },
  {
    number: '03',
    title: 'Compliance Check',
    desc: 'Finalization of documentation, custom labels, and regional phytosanitary alignment.'
  },
  {
    number: '04',
    title: 'Lifecycle Supply',
    desc: 'Scheduled bulk shipments with automated logistics reporting and re-order triggers.'

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
];

export default function ExportSolutions() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
  return (
    <div className="pt-20 bg-background min-h-screen font-body-md overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary/5 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative z-10"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-secondary">
                <Globe className="w-3 h-3 mr-2" /> GLOBAL EXPORT OPERATIONS
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tighter leading-tight uppercase font-display-lg">
                Seamless Global Supply <br /><span className="italic text-secondary">of Premium Ingredients.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-12 font-medium leading-relaxed font-body-lg">
                Bridging the gap between Indian farms and global manufacturers with surgical precision in logistics, documentation, and quality assurance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-teal-700 transition-all"
                  >
                    Partner With Us
                  </motion.button>
                </Link>
                <button className="border-2 border-primary px-8 py-4 rounded-2xl text-primary font-black text-sm uppercase tracking-widest hover:bg-primary/5 transition-all">
                  View Logistics Manual
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/50">
                <img 
                  alt="Logistics warehouse" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUYLdyNa2TERrhmmHWcCaCx1jg4urQDf-vgLX3wR9yp79Q1NBCD0TKg69_UQ85MHvVelpTi3-2u8fEpv2oSaiknaGsHqP0GU6FLnMTO5-fc0FtSMXZcyDHOSAfXg6kZjlxMgCjS6gAj6ncug59W0d2sIOBp4TRx_v89b7UzxI0T3JcLRSZIsIczXsktz5v5j1XLGSXBnMS2Wm8m7UnZuaVCZwJLVr4Eno9RhoEDI32vWL4gHatXYHGuInSODqLxwbcwEPAEcICZlM" 
                />
              </div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-[320px]"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center">
                    <CheckCircle2 className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-on-surface uppercase tracking-tight">100% Export Ready</div>
                    <div className="text-[10px] font-black uppercase text-on-surface-variant/60 tracking-widest">Global Standards</div>
                  </div>
                </div>
                <p className="text-[13px] text-on-surface-variant italic font-medium leading-relaxed font-body-md">
                  "Delivering premium onion and garlic flakes to 40+ countries with zero compliance friction."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Reach & Capability Bento Grid */}
        <section className="py-32 px-6 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-tight font-headline-lg">Global Reach & Capability</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-medium font-body-lg">
              Strategically positioned to serve primary industrial hubs across the globe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-8 h-auto lg:h-[700px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 bg-surface-container-low rounded-[3rem] p-12 flex flex-col justify-between overflow-hidden relative group border border-slate-100 shadow-xl"
            >
              <div className="z-10 relative">
                <h3 className="text-3xl font-bold text-primary mb-6 uppercase tracking-tight font-headline-md">European & <br />North American Hubs</h3>
                <p className="text-base text-on-surface-variant max-w-xs font-medium leading-relaxed font-body-md">Dedicated documentation support for EU-Food Safety and FDA compliance protocols.</p>
              </div>
              <div className="z-10 relative">
                <div className="bg-white/80 backdrop-blur-xl inline-flex px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
                  <span className="text-secondary font-black mr-2">40%</span> <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Growth in 2023</span>
                </div>
              </div>
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-1000">
                <img 
                  alt="World Map" 
                  className="w-full h-full object-cover grayscale" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMP_xhBE1ONsv4IQWWWxDcHleWOsHmworCt094UdB8MgCQXVHYrVgvnHKNc9fBmybkeDrVFkxeuay9ttAwiJI6TA5l-IqAzOgiehz1hZaDGKR2N0Oz3HHt_VAbsgU14_skX9EQPcA5zosLYvvw-bntXcVdSnO9nMVwCpVlIZWpU6KvU5-6z5obzzEho6tLpbFZXudHfTK92T9E6N98WMUCvIfzzWopfLpdmr--BEpc6hmvnvSQx3Z-7aB-Se9w0bVqmJCptoFcWhc" 
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary text-on-primary rounded-[3rem] p-10 flex flex-col justify-center shadow-xl shadow-primary/20"
            >
              <Ship className="w-12 h-12 mb-6 opacity-40" />
              <div className="text-5xl font-black mb-2 font-display-lg tracking-tighter">5,000+</div>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Tons Exported Annually</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-tertiary text-on-tertiary rounded-[3rem] p-10 flex flex-col justify-center shadow-xl shadow-tertiary/20"
            >
              <Globe className="w-12 h-12 mb-6 opacity-40" />
              <div className="text-5xl font-black mb-2 font-display-lg tracking-tighter">45+</div>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Active Export Destinations</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-white rounded-[3rem] p-10 flex items-center justify-between border border-slate-100 shadow-xl group"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary uppercase tracking-tight font-headline-md">Middle East & APAC</h3>
                <p className="text-base text-on-surface-variant font-medium font-body-md">Halal certified and optimized shipping routes for rapid delivery.</p>
              </div>
              <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center text-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                <BarChart3 className="w-10 h-10" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Packaging Section */}
        <section className="bg-surface-container-low py-32 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 uppercase tracking-tight font-headline-lg">Bulk Export Packaging & Logistics</h2>
                  <p className="text-lg md:text-xl text-on-surface-variant max-w-xl font-medium leading-relaxed font-body-lg">
                    Our industrial-grade packaging ensures zero moisture ingress and maintains organic integrity during long-sea transit.
                  </p>
                </div>
                <div className="space-y-10">
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-white shadow-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Package className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 uppercase tracking-tight font-headline-md">Moisture-Proof Barrier</h4>
                      <p className="text-on-surface-variant font-medium leading-relaxed font-body-md">Multi-layer poly-lined corrugated boxes and HDPE bags designed for maritime humidity.</p>
                    </div>
                  </div>
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-white shadow-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <FileText className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 uppercase tracking-tight font-headline-md">Full Documentation Support</h4>
                      <p className="text-on-surface-variant font-medium leading-relaxed font-body-md">Automated handling of Bill of Lading, COO, Phytosanitary certificates, and Laboratory test reports.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="grid grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8 pt-12"
                >
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-80 border-4 border-white">
                    <img alt="Packaging" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLJojR-j6YrHfWC0sr4aPfxdUNX8uiL8xFDE1TssosFkUoEXy9k5BkucD_nq8fLhyfU0xSq_hu8T7Ny2rxrcC1P88C4Bi8w5ytcO4m2LMK7fpdL3wBU4QLp_9o3Si0I-etNqjqNYz9RwYptuQ3X_wkSA5iwIxZmZ6tlWwYxoqT3rXr81HVJBeO4_tzhgAczVXPJgeAwj-dRfjK2Rw8JjpjOZtPwWHKqiMevbwtWN8_jbDsfcjojWNAfyCToxMvzKZ4jRfa7sDq8D8" />
                  </div>
                  <div className="bg-secondary rounded-[2.5rem] p-10 shadow-2xl shadow-secondary/20 text-white">
                    <BarChart3 className="w-10 h-10 mb-6 opacity-40" />
                    <div className="font-black text-xs uppercase tracking-widest leading-relaxed">100% Recyclable Packaging Options</div>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="bg-primary rounded-[2.5rem] p-10 shadow-2xl shadow-primary/20 text-white">
                    <Anchor className="w-10 h-10 mb-6 opacity-40" />
                    <div className="font-black text-xs uppercase tracking-widest leading-relaxed">Proximity to Mundra Port</div>
                  </div>
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-80 border-4 border-white">
                    <img alt="Port" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVubTFqEVbwvb0-wHQF8GWuTYanPkjjeRcselXxXszzEE8D4cOW0hQ84kVyQ2Rme8DVXv2XxmtahSmXhS_Vg1Okz2JER44IGW7-w3OGJBGmx8TrUPOS6W8Ui0JNTkFN_oS3jAOGVGHHmJEZMayzzxW1kB3xiGmuVELbVaCZh2H6LP1maWv7YV_GibsNpjARn1HsB_lrdBgQa2sUSLsNTqNu22Dwz15lum8PknaUbb6M6CG4NHJCZy1L71JGxFOyIXdfLmBFHMejUQ" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Onboarding Flow */}
        <section className="py-32 px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-tight font-headline-lg">Export Partner Onboarding</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-medium font-body-lg">
                Our four-step process designed for procurement efficiency and regulatory compliance.
              </p>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Desktop Progress Line */}
              <div className="hidden lg:block absolute top-[52px] left-0 w-full h-0.5 bg-slate-100 -z-0" />
              
              {onboardingSteps.map((step, idx) => (
                <motion.div 
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group flex flex-col items-center text-center p-10 bg-white rounded-[2.5rem] border border-slate-50 shadow-xl hover:-translate-y-4 transition-all duration-500"
                >
                  <div className="w-20 h-20 rounded-full bg-slate-50 border-4 border-white shadow-xl flex items-center justify-center text-2xl font-black text-on-surface-variant mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-tight font-headline-md group-hover:text-primary transition-colors">{step.title}</h4>
                  <p className="text-sm text-on-surface-variant font-medium leading-relaxed font-body-md">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,101,101,0.3)]"
          >
            <div className="absolute inset-0 bg-white/5 opacity-20 pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tighter leading-tight font-display-lg">Secure Your Global Supply Chain</h2>
              <p className="text-xl md:text-2xl font-medium opacity-80 mb-12 leading-relaxed font-body-lg">
                Join a network of global manufacturers who trust De&#39;Hydra for consistency, quality, and ethical sourcing.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/request-quote">
                  <button className="w-full sm:w-auto bg-white text-primary px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-[0.2em] shadow-2xl hover:scale-105 transition-all">Request Export Quote</button>
                </Link>
                <Link href="/contact">
                  <button className="w-full sm:w-auto bg-white/10 backdrop-blur-xl text-white border-2 border-white/20 px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:bg-white/20 transition-all">Contact Export Desk</button>
                </Link>
              </div>
            </div>

            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          </motion.div>
        </section>
      </main>
    </div>
  );
}
