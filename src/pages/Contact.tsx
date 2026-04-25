import { motion } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Plus, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Twitter,
  Globe,
  Award
} from 'lucide-react';

const faq = [
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'For international export, our standard MOQ starts from 1 FCL (Full Container Load) which is approximately 12-14 Metric Tons depending on the product grade.'
  },
  {
    q: 'Do you offer customized packaging for private labels?',
    a: 'Yes, we provide wholesale private label packaging ranging from 10kg bags to retail-ready 100g pouches with your branding.'
  },
  {
    q: 'What are your typical lead times for North America?',
    a: 'Bulk orders typically have a processing lead time of 10-15 days, with shipping transit taking approximately 35-45 days to major US/Canada ports.'
  },
  {
    q: 'Can we request samples before placing a bulk order?',
    a: 'Certainly. We provide complimentary grade-samples for evaluation. Shipping charges may apply for international courier dispatch.'
  }
];

export default function Contact() {
  return (
    <div className="pt-20 bg-background min-h-screen font-body-md overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-6 md:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="z-10"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-black uppercase tracking-widest mb-6 border border-secondary">
                Connect Globally
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-on-surface mb-6 uppercase tracking-tighter font-display-lg leading-tight">
                Let's build a <span className="text-primary italic">fresher</span> <br />supply chain.
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-12 font-medium leading-relaxed font-body-lg">
                Whether you are looking for premium onion flakes for export or need industrial dehydration job work, our team is ready to scale your logistics.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-white shadow-xl shadow-primary/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Global Sales</p>
                    <p className="font-bold text-lg text-on-surface tracking-tight">+91 98250 12345</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-white shadow-xl shadow-secondary/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">WhatsApp Export</p>
                    <p className="font-bold text-lg text-on-surface tracking-tight">+91 91234 56789</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/50">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOaeYZtPgA42J4nyNJsNGK9TdCXzdY9d3lPBiEJK1KaDs4q1HWJN-FaPzV8E7qyI270k4U0OExqzCMbqRxr3zJnnycqfWgC3FNVvXldBt2DZiB03zeVPVZBRrwN834bjSBN0BpOjwFVwDorOg323AppuSBh92s-Ih91SwtrGcsGl87PnAV5_qAGd2XATFG-zeh25oazRt5wWnDCdWTQTua1u2MViAdMTmaylxCVi_s4zY_cV5Py8YoKKvwPu6BPlcwSYUqRsy-pHk" 
                  alt="Premium dehydrated produce"
                />
              </div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-8 -left-8 bg-on-surface p-8 rounded-3xl shadow-2xl max-w-[280px] text-white overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-3xl rounded-full" />
                <p className="text-xl font-bold mb-2 relative z-10 uppercase tracking-tight">24/7 Support</p>
                <p className="text-sm text-white/60 relative z-10 leading-relaxed font-body-md">Dedicated export managers for every global time zone.</p>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 -z-10" />
        </section>

        {/* Inquiry Form Section */}
        <section className="py-32 px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Form Side */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-10 uppercase tracking-tighter font-headline-lg">Send an Inquiry</h2>
                  <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant px-1">Full Name</label>
                        <input className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary font-semibold text-sm transition-all" placeholder="John Doe" type="text" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant px-1">Email Address</label>
                        <input className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary font-semibold text-sm transition-all" placeholder="john@globalexport.com" type="email" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant px-1">Inquiry Type</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {['Export Order', 'Job Work', 'General'].map(type => (
                          <label key={type} className="relative flex items-center justify-center p-5 border-2 border-slate-50 rounded-2xl cursor-pointer hover:border-primary/20 transition-all group">
                            <input className="sr-only peer" name="type" type="radio" />
                            <span className="text-sm font-bold text-on-surface-variant peer-checked:text-primary group-hover:text-primary transition-colors uppercase tracking-tight">{type}</span>
                            <div className="absolute inset-0 border-2 border-primary rounded-2xl scale-95 opacity-0 peer-checked:scale-100 peer-checked:opacity-100 transition-all" />
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant px-1">Message</label>
                      <textarea className="w-full px-6 py-4 rounded-3xl bg-slate-50 border-none focus:ring-2 focus:ring-primary font-semibold text-sm transition-all h-40 resize-none" placeholder="Tell us about your requirements (Quantity, Destination, Grade)..." />
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg uppercase tracking-tight shadow-xl shadow-primary/20 hover:bg-secondary hover:shadow-secondary/20 transition-all"
                    >
                      Submit Inquiry
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Info Side */}
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight text-primary font-headline-md">Corporate Office</h3>
                  <div className="space-y-8">
                    <div className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <p className="text-base text-on-surface-variant font-medium leading-relaxed font-body-md">
                        102 De'Hydra Plaza, Industrial Hub,<br />Rajkot, Gujarat, India - 360001
                      </p>
                    </div>
                    <div className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                        <Mail className="w-5 h-5" />
                      </div>
                      <p className="text-base text-on-surface-variant font-medium leading-relaxed font-body-md">
                        export@dehydrafoods.com<br />info@dehydrafoods.com
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight text-primary font-headline-md">Follow Our Journey</h3>
                  <div className="flex gap-4">
                    {[Linkedin, Instagram, Facebook, Twitter].map((Icon, idx) => (
                      <motion.a 
                        key={idx}
                        whileHover={{ y: -5, scale: 1.1 }}
                        href="#" 
                        className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all shadow-sm"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-8 bg-secondary/5 border-2 border-secondary/10 rounded-[2rem] relative overflow-hidden"
                >
                  <Award className="text-secondary w-10 h-10 mb-6" />
                  <p className="text-xl font-bold text-secondary mb-3 uppercase tracking-tight font-headline-md">Quality Certified</p>
                  <p className="text-sm text-on-surface-variant font-medium leading-relaxed font-body-md">ISO 22000:2018 & HACCP Certified Facilities for Global Export standards.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Bento Grid */}
        <section className="py-32 px-6 md:px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase font-display-lg">Our Facilities</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-medium font-body-lg">
                Strategic locations in the heart of Gujarat's onion and garlic belt ensuring minimal transit time and maximum freshness.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
              {[
                {
                  title: 'Mahuva Warehouse',
                  type: 'Supply Hub',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDnsCi7gB5ZR7a9XMVbKNf0CBTWVciPNCcQsrz5ttWP-bngQa7NKY_Bv8Oy2bY-Cn4xAbDT5g43fNyp676N6n5vPPfCaSPPZUjVxMFC-d0HcR_0Ak9-kYgq5eqLqTDBWaOcOK7rHthqoCe1v3KjOM-RUGERBFMZT2G5zarLU01blw2yzvk-713R7xEiK9TQb7-6nQF9lZkflkx6ugTWxMW2t0uX7MEZ2eTKp2TQ5neRbUofAY3bfMn7wfYqrJsnsOGqLm2qir27IU',
                  stats: ['5,000 MT Capacity', 'Port Connectivity']
                },
                {
                  title: 'Rajkot Tech Plant',
                  type: 'Core Processing',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGVG0w2n7JfgB5SK_AwmLBTZj6JnEtUHTVkdhbzLoZRda5opTAqb9ai5P5M75AOmCRN8bNQSfuLp9dtGei_LWTXWLoP8JC3QmIGer1j63HJ5Cs3pQJYM5Wbt6rYQOSwi5AtE97mHF2s2y9uEiqA0S3c8-YPXulxND0qZ-Y5s_ScR29ZvzTCHLMHR0t84rsMc9zumhq8Kt8CAcuRftYSyTwLWnAICremhMxTESPKLQvz-iEh2RJMomwb54hgxXVMKPOEvrg3o7kdME',
                  stats: ['Automated Sorting', 'Grade A Processing']
                }
              ].map((fac, idx) => (
                <motion.div 
                  key={fac.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden group"
                >
                  <div className="h-64 relative overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src={fac.img} alt={fac.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-8 left-8 text-white">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-2">{fac.type}</p>
                      <h3 className="text-3xl font-bold uppercase tracking-tight leading-none">{fac.title}</h3>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col sm:flex-row justify-between items-center gap-8">
                    <p className="text-sm font-medium text-on-surface-variant leading-relaxed max-w-xs">Specialized climate-controlled processing and storage optimized for global export standards.</p>
                    <div className="space-y-3 shrink-0">
                      {fac.stats.map(s => (
                        <div key={s} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary">
                          <CheckCircle2 className="w-4 h-4 text-secondary" /> {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-6 md:px-8 bg-surface">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center uppercase tracking-tighter font-display-lg"
            >
              Buyer FAQ
            </motion.h2>
            <div className="space-y-6">
              {faq.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-start justify-between gap-6">
                    <h4 className="text-lg font-bold text-on-surface uppercase tracking-tight pr-4">{item.q}</h4>
                    <Plus className="w-6 h-6 text-primary shrink-0 group-hover:rotate-90 transition-transform" />
                  </div>
                  <p className="mt-4 text-sm font-medium text-on-surface-variant leading-relaxed font-body-md italic">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
