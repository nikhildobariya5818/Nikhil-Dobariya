import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Globe, 
  Send, 
  CloudUpload, 
  CheckCircle2,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RequestQuote() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      <main className="relative">
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
          <img 
            alt="Preserve background" 
            className="w-full h-full object-cover opacity-10 mix-blend-multiply" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPI01Gc6eYsrvTTrsMfTdu4J7YipycixweQ_T1zMUfl1h7_kGypLOauOp0rOi7GguNXNL8qk8RQVBLYdxdaQ2N_wxD8_5qH8WRwbpwjogiaOSlgxv0YWvlLEJdWjlk0WJL6nNJZ_5HC0Tlo3QxLc92SR7kukwTchgAAXCab1Y2db2qQml3ardfGGjSJWnTRbiA1h90fAqcbyCgAUO6R12QeqJWsc08wgwq7XdOYcgL3MV9d8oGzVziGgrJMQBHBSLSiC0hSYoeszI"
          />
        </div>

        <section className="max-w-7xl mx-auto px-6 md:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Content Sidebar */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Export Partnership</span>
                <h1 className="text-4xl md:text-6xl font-bold text-on-surface mb-8 tracking-tight leading-tight">
                  Secure Your Global <span className="text-primary italic">Supply Chain</span>
                </h1>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-12 max-w-xl font-medium">
                  De'Hydra provides premium dehydrated onions, garlic, and specialty vegetables to global distributors. Fill out the form to receive a tailored export quotation within 24 hours.
                </p>

                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                      <ShieldCheck className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-on-surface mb-2">ISO Certified Quality</h3>
                      <p className="text-sm text-on-surface-variant font-medium">Every batch undergoes rigorous moisture and microbial testing at our Rajkot facility.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Globe className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-on-surface mb-2">Global Logistics</h3>
                      <p className="text-sm text-on-surface-variant font-medium">Seamless shipping to 40+ countries with full documentation and customs support.</p>
                    </div>
                  </div>
                </div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="mt-20 p-10 rounded-3xl bg-white border border-slate-100 shadow-xl"
                >
                  <p className="italic text-on-surface-variant text-base mb-8 leading-relaxed font-medium">
                    "De'Hydra's consistent moisture levels and packaging standards have made them our most reliable partner for EU exports."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200" />
                    <div>
                      <p className="font-black text-sm uppercase tracking-tight">Marcus Thorne</p>
                      <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest opacity-60">Logistics Director, EuroFoods AG</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-[3rem] p-8 md:p-14 shadow-2xl border border-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-[100%] -mr-16 -mt-16" />
                
                <form className="space-y-12 relative z-10">
                  {/* Section: Business Info */}
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold flex items-center gap-4 uppercase tracking-tight">
                      <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                      Business Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-on-surface-variant px-1">Company Name</label>
                        <input className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary text-sm font-semibold transition-all" placeholder="Global Traders Ltd." type="text" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-on-surface-variant px-1">Country / Region</label>
                        <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary text-sm font-semibold transition-all appearance-none cursor-pointer">
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Germany</option>
                          <option>United Arab Emirates</option>
                          <option>Australia</option>
                          <option>Japan</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section: Requirements */}
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold flex items-center gap-4 uppercase tracking-tight">
                      <span className="w-1.5 h-8 bg-secondary rounded-full"></span>
                      Requirement Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-on-surface-variant px-1">Product Category</label>
                        <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary text-sm font-semibold transition-all appearance-none cursor-pointer">
                          <option>Dehydrated White Onion (Kibbled)</option>
                          <option>Dehydrated Red Onion (Minced)</option>
                          <option>Dehydrated Garlic (Powder)</option>
                          <option>Dehydrated Ginger (Flakes)</option>
                          <option>Custom Blend</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-on-surface-variant px-1">Quantity (Metric Tons)</label>
                        <input className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary text-sm font-semibold transition-all" placeholder="Min. 5 MT" type="number" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[11px] font-black uppercase tracking-widest text-on-surface-variant px-1 block mb-4">Packaging Preference</label>
                      <div className="flex flex-wrap gap-3">
                        {['Bulk Sacks', '25kg Corrugated Box', 'Custom Branding'].map(pkg => (
                          <label key={pkg} className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-full cursor-pointer border border-transparent hover:border-primary/20 transition-all group">
                            <input className="text-primary focus:ring-primary w-4 h-4" name="packaging" type="radio" />
                            <span className="text-xs font-bold uppercase tracking-wider">{pkg}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Section: Support Docs & Notes */}
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-on-surface-variant px-1">Technical Specifications (PDF/DOCX)</label>
                      <div className="border-2 border-dashed border-slate-200 rounded-3xl p-10 text-center hover:bg-primary/5 hover:border-primary transition-all group cursor-pointer">
                        <CloudUpload className="mx-auto w-10 h-10 text-slate-300 group-hover:text-primary transition-colors mb-4" />
                        <p className="text-sm font-bold text-on-surface-variant mb-1 group-hover:text-on-surface">Drag specifications here or <span className="text-primary underline">browse files</span></p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Max file size: 10MB</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-on-surface-variant px-1">Additional Message</label>
                      <textarea 
                        className="w-full bg-slate-50 border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-primary text-sm font-semibold transition-all" 
                        placeholder="Moisture levels, certifications (KOSHER/HALAL), or logistics preferences..." 
                        rows={5}
                      />
                    </div>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-white font-black text-xl py-6 rounded-2xl shadow-2xl shadow-primary/20 hover:bg-secondary hover:shadow-secondary/20 transition-all flex items-center justify-center gap-4 uppercase tracking-tighter" 
                    type="submit"
                  >
                    Generate Quotation Request
                    <Send className="w-6 h-6" />
                  </motion.button>
                  
                  <p className="text-center text-[11px] font-bold text-on-surface-variant opacity-60 uppercase tracking-widest">
                    Response typically delivered within <span className="text-primary italic">24 business hours</span>.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Standards Badges */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 pb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 cursor-default">
            {['APEDA', 'FSSAI', 'BRCGS', 'US FDA'].map(badge => (
              <div key={badge} className="flex items-center justify-center p-8 bg-white/50 rounded-3xl border border-slate-100 shadow-sm">
                <span className="font-black text-3xl tracking-widest text-slate-500 uppercase">{badge}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Trust Footer CTA */}
      <section className="bg-primary py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">Prefer to talk directly?</h2>
            <p className="text-white/70 text-lg md:text-xl font-medium max-w-xl underline decoration-white/20 underline-offset-8">
              Our export specialists are available for immediate consultation regarding private labeling and annual contracts.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="tel:+912844222456" className="flex items-center gap-4 bg-white text-primary px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform shadow-xl">
              <Phone className="w-5 h-5" /> +91 (2844) 222 456
            </a>
            <a href="mailto:exports@dehydrafoods.com" className="flex items-center gap-4 bg-white/10 text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-white/20 transition-all shadow-xl">
              <Mail className="w-5 h-5" /> Send Email
            </a>
          </div>
        </div>
        {/* Abstract background shape */}
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      </section>
    </div>
  );
}
