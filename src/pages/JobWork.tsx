import { motion } from 'motion/react';
import { 
  Settings, 
  ShieldCheck, 
  Activity, 
  Microscope, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  TrendingUp,
  Award,
  Factory,
  Package2,
  FlaskConical,
  CheckCircle2,
  MoveRight,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    title: 'Industrial Hot Air Drying',
    desc: 'Large-scale belt dryers for high-volume onion, garlic, and vegetable processing. Precision temperature control preserves natural color and pungency.',
    icon: Factory,
    features: ['Capacity: 50+ Tons Daily', 'Particle Size: Kibbled to Micron-Fine'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY_WLUvv9fxRWI97_wKuY2_gkaHTpv8UTUFWibMetMGNmVeIaMVsOHihH46t3xnIcWK8hskNMsOrWILCJ5Tv1esbve0S4wPJqzT466smuTLRCMZHC_gUSJZZZjwDAQdyAVffBbLtd5jhg7txX53KLKSULW56kNhZVJZdjfR91oSFZIuft2cdvF_aDSSq5128Prj2CRonBei5GXuwDEMycr8UziPHTqsjfF3RmM0XYxrsuutSCEMPQAfYJWSog-pvF7oxirxoG6o9s',
    large: true,
    color: 'bg-white'
  },
  {
    title: 'Advanced Custom Blending',
    desc: 'Custom spice mixes, seasoning blends, and premixes for snacks and ready-to-eat products.',
    icon: Zap,
    color: 'bg-tertiary text-white',
    link: '#',
    accent: 'text-white'
  },
  {
    title: 'Private Label Support',
    desc: 'Retail-ready packaging solutions including standing pouches, cans, and bulk bags with your brand identity.',
    icon: Package2,
    color: 'bg-white'
  },
  {
    title: 'Laboratory Testing',
    desc: 'In-house moisture analysis, microbiological testing, and shelf-life studies for every custom batch.',
    icon: FlaskConical,
    color: 'bg-white'
  },
  {
    title: 'Inventory Management',
    desc: 'Just-in-time delivery and strategic warehousing at our Mahuva and Rajkot facilities.',
    icon: Activity,
    color: 'bg-white'
  }
];

const workflowSteps = [
  {
    title: 'Sourcing & Intake',
    desc: 'We source raw produce from audited farms or process your provided materials under strict intake protocols.'
  },
  {
    title: 'Automated Washing & Peeling',
    desc: 'Multi-stage hygienic cleaning using ozonated water systems to ensure 100% bacterial safety.'
  },
  {
    title: 'Precision Dehydration',
    desc: 'Custom dehydration cycles (Cold/Hot air) adjusted based on material texture and desired moisture levels.'
  },
  {
    title: 'Sorting & X-Ray Scanning',
    desc: 'Optical sorters and metal detectors remove all foreign materials before final packaging.'
  }
];

const stats = [
  { label: 'Foreign Matter Tolerance', value: '0%' },
  { label: 'Average Moisture Level', value: '< 5%' },
  { label: 'Traceable Batches', value: '100%' },
  { label: 'Laboratory Monitoring', value: '24/7' },
];

export default function JobWork() {
  return (
    <div className="pt-20 bg-background min-h-screen font-body-md">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-16 items-center z-10 py-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center bg-secondary-container/30 text-on-secondary-container px-4 py-2 rounded-full border border-secondary-container/50">
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">INDUSTRIAL JOB WORK & PROCESSING</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter leading-tight uppercase font-display-lg">
                Precision Custom <br />Dehydration & <br />Manufacturing
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-lg font-medium leading-relaxed font-body-lg">
                De'Hydra provides end-to-end contract manufacturing solutions for global food brands. From raw material sourcing to high-precision processing and private label packaging.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/request-quote">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all flex items-center gap-2"
                  >
                    Discuss Your Project <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary/5 transition-all uppercase text-sm tracking-widest">
                  View Facility Specs
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] border-8 border-white/50">
                <img 
                  alt="Industrial processing facility" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHS9-abhbOcoAqRKflkphrDBz0Ya0s6KS8-t1AHcD8ObA4GV9YvSo2vg1nKj-sSOoZ0WesSgxx37NUVpGIhBN0buw475lO6Oo8B2OGRihRDSnZIEGOUNwRNkvlNp-57qIXCuCYcgAAKQgqQLrbVbBkzcteiYM16wPJ6PdocYgRq-ItnJ0ofjBnnTBswlssRaMdzUkR-zVg_iemqOeSsVJ7iyoAtQB93L96qwJS1A47nO5bzXVwxInjW-1nZOCLDBIrUMHicJj_UEE" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-[260px]"
              >
                <div className="flex items-center gap-4 mb-2">
                  <Award className="text-tertiary w-6 h-6 shrink-0" />
                  <span className="font-black text-lg text-primary tracking-widest uppercase">ISO 22000</span>
                </div>
                <p className="text-[10px] uppercase font-bold text-on-surface-variant/70 leading-relaxed tracking-wider">
                  Certified hygiene and quality management systems for global exports.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Custom Capabilities Bento Grid */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight uppercase font-headline-lg">Dehydration Capabilities</h2>
              <p className="text-lg text-on-surface-variant font-medium font-body-lg">
                We offer a range of specialized dehydration technologies tailored to your specific product requirements and final application.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {capabilities.map((cap, idx) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`${cap.large ? 'md:col-span-8' : 'md:col-span-4'} ${cap.color} rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 group`}
                >
                  <div className={`p-10 flex flex-col justify-between h-full ${cap.large ? 'lg:flex-row gap-10' : ''}`}>
                    <div className="space-y-6">
                      <div className={`w-14 h-14 ${cap.large ? 'bg-primary/10 text-primary' : 'bg-primary/5 text-primary'} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                        <cap.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight uppercase font-headline-md">{cap.title}</h3>
                      <p className={`${cap.accent || 'text-on-surface-variant'} text-sm font-medium leading-relaxed font-body-md`}>
                        {cap.desc}
                      </p>
                      {cap.features && (
                        <ul className="space-y-3 pt-4">
                          {cap.features.map(f => (
                            <li key={f} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-secondary">
                              <CheckCircle2 className="w-4 h-4" /> {f}
                            </li>
                          ))}
                        </ul>
                      )}
                      {cap.link && (
                        <div className="pt-6">
                          <button className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest hover:gap-4 transition-all text-white">
                            BLENDING SPECS <MoveRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                    {cap.large && cap.image && (
                      <div className="lg:w-1/2 aspect-square rounded-[2rem] overflow-hidden">
                        <img src={cap.image} alt={cap.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Processing Workflow */}
        <section className="py-32 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-24">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 relative"
              >
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px]" />
                <img 
                  alt="Workflow" 
                  className="rounded-[3rem] shadow-2xl w-full border-8 border-slate-50" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBguz1hte0Ir5njy9sx4hI-GE4ZUGAf4ZPR8zcuMe6jJfnRYwPzoTNYHjAUdBtVMAAt0nZh6SHk0sYGQxHxO8cGL-CAejPSpfZxmXHiR2ETmFo58UtkgGqWks5kNBtGkDRRo4n_UFuLEk0mH9JvlFYOiXx_sj8VKI6uUxUqCt0-eRkZKKOdR6Htr9ZMwqQbv5UbKI8GWbJEXMxNyiHwUNm4h_YQ57bwh2QAMK-7x70WF6Qrvt5CPzNtelMN4QdbSqETtT-qC4Utn-4" 
                />
              </motion.div>
              <div className="lg:w-1/2 space-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 uppercase tracking-tight font-headline-lg">The Bulk Processing Workflow</h2>
                  <p className="text-lg text-on-surface-variant font-medium font-body-lg">
                    Our systematic approach ensures every kilogram of product meets the rigorous export standards our clients expect.
                  </p>
                </motion.div>
                <div className="space-y-10 group">
                  {workflowSteps.map((step, idx) => (
                    <motion.div 
                      key={step.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-8 group/item"
                    >
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center font-black text-xl shadow-lg shadow-primary/20 group-hover/item:scale-110 transition-transform">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 uppercase tracking-tight group-hover/item:text-primary transition-colors font-headline-md">{step.title}</h4>
                        <p className="text-sm text-on-surface-variant font-medium leading-relaxed font-body-md">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Stats */}
        <section className="py-24 bg-primary text-on-primary">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-black mb-3 tracking-tighter font-display-lg">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 leading-relaxed font-label-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Inquiry Form Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100"
            >
              <div className="lg:w-2/5 bg-on-surface p-12 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 opacity-30 pointer-events-none" />
                <div className="space-y-10 relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight uppercase tracking-tight font-headline-lg">Request a Custom Job Work Quote</h2>
                  <p className="text-slate-400 text-lg font-medium leading-relaxed font-body-lg">Provide your project specifications and our export technical team will contact you with a comprehensive feasibility report.</p>
                  
                  <div className="space-y-8 pt-8">
                    {[
                      { icon: Mail, label: 'exports@dehydra.com' },
                      { icon: Phone, label: '+91 98250 12345' },
                      { icon: MapPin, label: 'Mahuva GIDC, Gujarat, India' }
                    ].map(item => (
                      <div key={item.label} className="flex items-center gap-6 group cursor-pointer">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-bold opacity-80 group-hover:opacity-100 transition-opacity uppercase tracking-tight font-body-md">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-16 relative z-10">
                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10 shadow-inner">
                    <p className="text-sm italic text-white/60 mb-6 leading-relaxed font-body-md">
                      "De'Hydra has been our primary processing partner for over 5 years. Their consistency in dehydration quality for our European retail range is unmatched."
                    </p>
                    <p className="font-black text-[10px] uppercase tracking-widest text-primary">— Supply Chain Director, Global Food Co.</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-3/5 p-12 md:p-16 bg-white">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant px-1 font-label-sm">Full Name</label>
                    <input className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary font-semibold text-sm transition-all" placeholder="John Doe" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant px-1 font-label-sm">Company Email</label>
                    <input className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary font-semibold text-sm transition-all" placeholder="john@company.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant px-1 font-label-sm">Raw Material Type</label>
                    <select className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary font-semibold text-sm appearance-none transition-all cursor-pointer">
                      <option>Onion</option>
                      <option>Garlic</option>
                      <option>Ginger</option>
                      <option>Custom Mix</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant px-1 font-label-sm">Monthly Volume (Tons)</label>
                    <input className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary font-semibold text-sm transition-all" placeholder="e.g. 50" type="number" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant px-1 font-label-sm">Processing Requirements</label>
                    <textarea 
                      className="w-full bg-slate-50 border-none rounded-3xl p-6 h-40 focus:ring-2 focus:ring-primary font-semibold text-sm transition-all resize-none shadow-inner" 
                      placeholder="Describe your dehydration specs, particle size, and packaging needs..." 
                    />
                  </div>
                  <div className="md:col-span-2 pt-6">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary text-on-primary p-6 rounded-2xl font-black text-lg shadow-2xl shadow-primary/20 hover:bg-secondary hover:shadow-secondary/20 transition-all uppercase tracking-tighter" 
                      type="submit"
                    >
                      Submit Technical Inquiry
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
