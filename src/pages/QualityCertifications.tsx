import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Award, 
  Search, 
  Microscope, 
  Pipette, 
  ClipboardCheck, 
  CheckCircle2, 
  Sprout, 
  Waves, 
  Zap, 
  QrCode,
  ArrowRight
} from 'lucide-react';

const stats = [
  { label: 'Foreign Matter Tolerance', value: '0%' },
  { label: 'Average Moisture Level', value: '< 5%' },
  { label: 'Traceable Batches', value: '100%' },
  { label: 'Laboratory Monitoring', value: '24/7' },
];

const certifications = [
  {
    title: 'ISO 22000:2018',
    desc: 'Food Safety Management System (FSMS) focusing on the entire supply chain from farm to fork.',
    valid: 'VALID 2025',
    color: 'border-primary'
  },
  {
    title: 'BRCGS Food Safety',
    desc: 'Recognized globally by retailers and food service organizations as the gold standard for hygiene.',
    valid: 'GRADE A+',
    color: 'border-secondary'
  },
  {
    title: 'FSSAI License',
    desc: 'Authorized Central License for high-volume export and manufacturing of dehydrated vegetables.',
    valid: 'EXPORT READY',
    color: 'border-tertiary'
  }
];

export default function QualityCertifications() {
  return (
    <div className="pt-20 bg-background min-h-screen font-body-md">
      <main>
        {/* Hero Section */}
        <header className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-surface-container-highest">
          <img 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA63vQ4ErD07jZQil2dIhtYGHqgWZ2nQeYJlKcqcy-jjmvUTJHAH6eUFLEPhbvCZnUNh-P00gFU_ymHsnBFKLI28CS6Uno_n2JMx852Up4zYbL2TfneeVOHfhIAfrOnn_AuYNHoA4HPsexbsuxBEBr0KzpyTbbIkpgDVGwMtwgFoTQG99lsI7ArnefGAKrb0nknugp2kxyp5ULmnRkqEngx_ZbpPP6YjhgB2R7wLoYkdPQ1px2DBFPyqQbEFqGXfJYluh_mm-gwXz0" 
            alt="Industrial dehydration facility"
          />
          <div className="relative z-10 max-w-4xl px-8 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-secondary"
            >
              Uncompromising Standards
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-on-surface mb-6 tracking-tighter uppercase font-display-lg"
            >
              Purity Defined by <br /> <span className="text-primary italic">Science & Transparency</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-medium leading-relaxed font-body-lg"
            >
              From seed selection to global logistics, our quality assurance protocols ensure that every gram of dehydrated produce exceeds international safety benchmarks.
            </motion.p>
          </div>
        </header>

        {/* Trust Badges Strip */}
        <section className="bg-surface-container-low py-16 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 cursor-default">
              {['ISO 22000', 'BRCGS Grade A', 'FSSAI Certified', 'HACCP Approved'].map(badge => (
                <div key={badge} className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                  <span className="font-bold text-xl tracking-tight uppercase">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <section className="py-32 max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-4 tracking-tighter uppercase font-headline-lg">The Journey to Perfection</h2>
            <p className="text-lg text-on-surface-variant font-medium font-body-md">Traceability is woven into our process. Every batch is tracked from farm gate to container load.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Sourcing */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition-all group"
            >
              <div>
                <motion.div whileHover={{ rotate: 15 }} className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                  <Sprout className="w-8 h-8" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-6 text-on-surface uppercase tracking-tight">Ethical Sourcing</h3>
                <p className="text-base text-on-surface-variant mb-10 font-medium leading-relaxed">
                  We partner directly with farmers in Gujarat’s richest belts, ensuring seasonal peak harvesting. Our team conducts on-field pesticide residue testing before a single bulb is picked.
                </p>
              </div>
              <div className="h-64 rounded-3xl overflow-hidden border-4 border-slate-50 shadow-inner">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKg12A1A1R-peSjRlA9nHJkFlxaYGF8JhSRzdiT07TbenkoMgvowQpktobuRodIJVQU_HlwmvUYdfg70IEPU0o_sX3CabLBcC94sgz0m4N3kUBI7wOjuMAj3agr_acJjCkX-5PQPgJbHRgoB3x3ZQsb6stRmxXdnEq4Nt_GJhVSir_aPEr5hxp4QB8rd8pm8IXgYdjsrY1noTP3eUCYPt5GRQKXd4AlvAwD8v3MUIPHVhjnj4Al0Evom6iSZ3owtCKvA1RaEGl24k" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
            </motion.div>

            {/* Cleaning */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-5 bg-surface-container-low p-10 rounded-[2.5rem] flex flex-col justify-between border border-slate-200/50"
            >
              <div className="space-y-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                  <Waves className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-on-surface uppercase tracking-tight">3-Stage Cleaning</h3>
                <ul className="space-y-4 font-bold text-sm text-on-surface-variant uppercase tracking-wider">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary" /> Automated Air Aspiration</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary" /> Triple-Stage UV Treatment</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary" /> De-stoning & Metal Detection</li>
                </ul>
              </div>
              <div className="mt-12 p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
                <div className="text-[10px] font-black text-primary mb-3 uppercase tracking-[0.2em]">HYGIENE SCORE</div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-2xl font-black text-on-surface tracking-tighter">98.4%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '98.4%' }}
                    viewport={{ once: true }}
                    className="bg-primary h-full rounded-full" 
                  />
                </div>
              </div>
            </motion.div>

            {/* Sorting */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5 bg-secondary/5 p-12 rounded-[2.5rem] flex flex-col items-center text-center justify-center border border-secondary/10"
            >
              <Zap className="w-12 h-12 text-secondary mb-8" />
              <h3 className="text-3xl font-bold text-on-surface uppercase tracking-tight mb-4">Optical Laser Sorting</h3>
              <p className="text-base text-on-surface-variant font-medium leading-relaxed">
                Using Swiss-engineered color sorters, we remove defects invisible to the human eye, ensuring 99.9% color consistency across flakes and powders.
              </p>
            </motion.div>

            {/* Dehydration */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-7 bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 grid md:grid-cols-2 gap-10 items-center overflow-hidden group"
            >
              <div>
                <h3 className="text-3xl font-bold text-on-surface uppercase tracking-tight mb-6">Low-Temp Dehydration</h3>
                <p className="text-base text-on-surface-variant mb-8 font-medium leading-relaxed">
                  Our proprietary continuous conveyor system preserves the essential oils, sulfur compounds, and nutritional profile of the produce.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-slate-100 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-primary">MOISTURE &lt; 5%</div>
                  <div className="bg-slate-100 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-primary">ZERO ADDITIVES</div>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden aspect-square border-4 border-slate-50 shadow-inner">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKqxYose-MpBUViK9_NqqTQdcWKXK285-ksk2UAayahcO3YjLJYS0Dg4ItKuEREtIzwVkP9CithTfoizMZhowenMNiKxRhSNlGAC8kjKIRG-jahIoRdnWuHeumKqsfcR-pgJB7gsOW4KgJGW0WK0EZhTxluvP6XNrQ6xRujDTbkn5ze-SDL2CR-3CFcUKOdJwh-a6RgqVomL4HJZEqaUP2NvvLW3qHpm_boUS4lAMaoHV6CbPbUQCo1Aj1txQRt5i8dEWqDDeT-us" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Rigorous Lab Validation */}
        <section className="bg-on-surface py-32 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-6 block font-label-sm">Quality Control Lab</span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight leading-tight uppercase font-display-lg">Rigorous Lab Validation</h2>
                </motion.div>
                
                <div className="space-y-10">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-8 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <Microscope className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 uppercase tracking-tight font-headline-md">Microbiological Analysis</h4>
                      <p className="text-slate-400 font-medium leading-relaxed font-body-md">Every batch undergoes rigorous testing for Salmonella, E. Coli, Yeast, and Mold in our NABL accredited lab.</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <Pipette className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 uppercase tracking-tight font-headline-md">Physical-Chemical Checks</h4>
                      <p className="text-slate-400 font-medium leading-relaxed font-body-md">Monitoring of TPC, moisture content, ash levels, and granulations size to meet specific buyer recipes.</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-8 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <ClipboardCheck className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 uppercase tracking-tight font-headline-md">Certificate of Analysis (COA)</h4>
                      <p className="text-slate-400 font-medium leading-relaxed font-body-md">We provide comprehensive COA documents for every single shipment, guaranteeing transparency.</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-white/5 backdrop-blur-3xl p-12 rounded-[3rem] border border-white/10 shadow-2xl"
              >
                <div className="flex justify-between items-center mb-12">
                  <h3 className="text-2xl font-bold uppercase tracking-tight">Lab Performance</h3>
                  <Search className="w-6 h-6 text-secondary" />
                </div>
                <div className="space-y-10">
                  <div>
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Batch Consistency</span>
                      <span className="text-2xl font-black text-secondary tracking-tighter">99.2%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '99.2%' }}
                        viewport={{ once: true }}
                        className="bg-secondary h-full rounded-full shadow-[0_0_20px_rgba(0,110,28,0.5)]" 
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Purity Threshold</span>
                      <span className="text-2xl font-black text-secondary tracking-tighter">99.9%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '99.9%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-secondary h-full rounded-full shadow-[0_0_20px_rgba(0,110,28,0.5)]" 
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-16 rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA28Ol8f5YD8CckEG_EsyGWX4Hu35YhoG6_Mf3Xt3CESh7LP0kcnNltsBZUYKO0apdqqQSf9yFZXk2iXSHuvB2D32ePJeFBp1EOhGOUMpFZBvP8tZW0PTspOyp5SKVRhx7w_JIXewxRMPFloyAB5O36SS5isJpsSMN1kFYu5NqroqdRGLhmEBWINwnQR3W0SAbwDRaUipKix9tqf1gApAz6UcinxTBcUQGi1D-kbuAx4i0vieBMxotcIKNtwhWNE5qAGV357DAz26o" 
                    className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                    alt="Lab"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certification Gallery */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight font-display-lg">Global Compliance Gallery</h2>
              <p className="text-lg text-on-surface-variant max-w-xl mx-auto font-medium font-body-md">Export-ready certifications for North American, European, and Middle Eastern markets.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white p-10 rounded-[2.5rem] shadow-xl border-t-8 ${cert.color} hover:-translate-y-4 transition-all duration-500`}
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded-2xl">
                      <Award className="w-8 h-8 text-on-surface" />
                    </div>
                    <span className="text-[10px] font-black bg-slate-50 text-slate-400 px-3 py-1.5 rounded-full tracking-widest">{cert.valid}</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-on-surface uppercase tracking-tight font-headline-md">{cert.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-10 font-medium font-body-md">{cert.desc}</p>
                  <button className="text-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-3 group">
                    View Certificate <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Traceability Feature */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[3.5rem] p-12 md:p-24 text-white flex flex-col lg:flex-row gap-16 items-center shadow-[0_40px_80px_-20px_rgba(0,101,101,0.3)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/5 opacity-20 pointer-events-none" />
            <div className="lg:w-3/5 space-y-10 relative z-10 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight uppercase font-display-lg">Trace Your Batch</h2>
              <p className="text-xl md:text-2xl font-medium opacity-80 leading-relaxed font-body-lg">Each of our export shipments comes with a digital trace-code. Enter your batch number to see exactly where your produce was harvested and its lab results.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto lg:mx-0">
                <input 
                  className="flex-grow rounded-2xl border-none bg-white/10 backdrop-blur-xl text-white py-5 px-8 focus:ring-4 ring-white/20 placeholder:text-white/40 font-bold" 
                  placeholder="Batch # (e.g. DH-ON-2024)" 
                  type="text" 
                />
                <button className="bg-white text-primary px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-xl">Trace Now</button>
              </div>
            </div>
            <div className="lg:w-2/5 flex justify-center relative z-10">
              <motion.div 
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="w-72 h-72 bg-white/5 backdrop-blur-3xl p-6 rounded-[2.5rem] border border-white/20 shadow-2xl flex items-center justify-center group cursor-pointer"
              >
                <div className="w-full h-full border-4 border-dashed border-white/30 rounded-[2rem] flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-all">
                  <QrCode className="text-white w-24 h-24 opacity-60" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Global Stats Footer */}
        <section className="bg-surface py-24 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl font-black text-primary mb-4 tracking-tighter font-display-lg">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant font-label-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
