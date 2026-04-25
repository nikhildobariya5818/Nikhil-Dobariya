import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Beaker, 
  LayoutGrid, 
  Filter, 
  ArrowUpRight, 
  ChevronRight, 
  Utensils, 
  Package, 
  Truck, 
  Phone, 
  Mail 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const subProducts = [
  {
    id: 'premium-white-onion-flakes',
    title: 'Dehydrated White Onion',
    desc: 'Available in Flakes, Kibbled, Minced, and Powder formats. 100% Pungent & Fresh.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC72944RS9AGFIub0WLYQQDKOjNdURS45MlnDaz5P1O2c9YVMc2k2Lu8z1ZT3hTFkkyGykr4jlEopvzat3zjgC7OIg2sxJRS4U1UTBj2Xp2OMFvfdItHbD-N0_o0uqsjhrG3n1ii9PHM2gikt_hWLR3XXV7OUAs7pdWKYsqChoq3F73EqrzWA2zDOy2Z_RkwNztYpoMKUM3Oad9c-bPVIu1lHPWnzMbBBZqzTBWEw04FQmEN7GoJD2NW4AbKJMvZS7dTQ8zszKNJIM',
    tags: ['Bulk Export', 'A-Grade'],
    certs: ['BRC', 'ISO', 'KOS'],
    large: true
  },
  {
    id: 'dehydrated-garlic',
    title: 'Dehydrated Garlic',
    desc: 'Strong aroma profile. Perfect for spice blends and sauces.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7lagDVRj0HE031td-HVfNc3FL1qViaTUj-T3no8hAFDgjYT3yZw-fBBVZdsmHfzlRcH49bXEQFWHOfSe9mA-LDzk4ajgkxagaLBJcMu2M-ODXgytWtJBx-vgnk97lg6zUYSkEVRiHra9AqMWKoNC4o0fp4iFQDu5Qyn9lnowABzRIW6jBlHs7mUDlBVa_4-o-GDSPWm8tzGh41HHqVBq3ISGkr66ysTmvJ-eqjBqnPuC129TxDTaioVhyFlMs7yCreTbCKPaJLTA',
    large: false
  },
  {
    id: 'dehydrated-ginger',
    title: 'Dehydrated Ginger',
    desc: 'Finely processed ginger powder and bits for pharmaceutical and culinary use.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBneUxPnv3oJxyKh2H0aw-k_pnlOZMyrtbQG9QaDpI39YQK8ni0PE3P11KxU8eh1WeKeJYX7zjP5s_cdcBqJRu19D6Lzo4KwIDu_ZMKj843GbJLIhzlDm9KOhUI5bNoTRIv0Z729xCswHhQgD-1aXEv9nwJvJpUXaHn8IpzJmxIBRyNvxmMeHPZJ3SDjMpXO5GVgqtqYWIACzZLYnribUOVtWPrxjD39EIBq1onFxaSMc4N5qPCHXZ2G0kegdpwFezE8D5CwXKSa_k',
    large: false
  }
];

export default function CategoryDetail() {
  return (
    <div className="pt-20">
      {/* Category Hero */}
      <section className="relative w-full h-[60vh] md:h-[600px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover brightness-[0.4]" 
            alt="Dehydrated vegetables hero" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTzJmJiAIarBWXBTtTcxNUwjAKgDYt2fP_9wepDjwI0QHHT_tSsXkneuejYLi2-BM8ZlHFgWUBMlEXJ6ITdSw8M9ZlHJ6RfHpPjTkO8GwmSoGFHuRs-qCfKnsmckdnorCIvHP_i6jGg-LqMYe4Kgqtj6geRMNyR0AdrIbrGBGxY7piqApkNQXQEM6F7_5aIMGhNyuf9uIoGh9tOlGnvqSHKLp2VfWxUNo8W-VoPzW5utdSJPaSz-MF6MkwiNdYdpJDgXzfqidtGcY"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
              Premium Export Grade
            </span>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Dehydrated Vegetables
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10">
              Precision-engineered dehydration technology preserving 98% of natural nutritional profiles and flavor integrity for global food manufacturing.
            </p>
            <div className="flex gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center hover:bg-secondary transition-all shadow-xl"
              >
                Request Export Pricing
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Intro & Benefits */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 tracking-tight">
                Industrial Excellence in Preservation
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg">
                <p>Our dehydration facility in Mahuva utilizes advanced Air-Drying technology that maintains the cell structure of premium vegetables. This ensures rapid rehydration and superior organoleptic properties in your final product.</p>
                <p>From infrastructure to logistics, every step of our process is audited to meet BRCGS and ISO standards, ensuring seamless integration into your supply chain.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="text-secondary w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="font-bold text-base mb-1 uppercase tracking-wider">Non-GMO Certified</h4>
                    <p className="text-xs text-on-surface-variant/70 uppercase font-bold">Strict procurement from audited farms.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Beaker className="text-secondary w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="font-bold text-base mb-1 uppercase tracking-wider">Moisture &lt; 5%</h4>
                    <p className="text-xs text-on-surface-variant/70 uppercase font-bold">Consistent laboratory testing for quality.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Industrial quality testing" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDItF13vzweTggK-4IsNossqpNckyNDtiFx2IH_BsPR70C19gVTVc-gsCxq-Ml5aIBDsdhy7NjTHJ-yutFXqysExZ5efZ8Q9hSWJZdSiFjWvRbDpZsV3B5C3FoIaYBfDNeWUmu1mwZ7pWynSSQirVuqMGXSfTXf1Fhl5NIKHWRdWWeWaoGVOs8_zBFFJt8ijm_U4toRkjg0oA2D6wM2Ynq7ukbCBFMZism9r0xiv__yGtJ_s2NYo9N5GXIFnaTHwydAUjzYRhF5dGg"
                />
              </div>
              <div className="absolute -bottom-10 -left-6 md:-left-10 bg-surface-container-highest p-8 rounded-2xl shadow-2xl max-w-[280px] border border-primary/10">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest leading-relaxed">
                  Traceability from farm-gate to container shipment for every batch.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em] block mb-4">Product Catalog</span>
              <h2 className="text-3xl md:text-5xl font-bold text-on-surface tracking-tight">Available Sub-Types</h2>
            </div>
            <div className="flex gap-3">
              <button className="p-3 rounded-full border border-slate-200 bg-white hover:bg-primary hover:text-white transition-all shadow-sm">
                <Filter className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-full border border-slate-200 bg-white hover:bg-primary hover:text-white transition-all shadow-sm">
                <LayoutGrid className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {subProducts.map((product, idx) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${product.large ? 'md:col-span-8' : 'md:col-span-4'} bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group`}
              >
                <div className={`flex flex-col ${product.large ? 'lg:flex-row' : ''} h-full`}>
                  <div className={`p-10 flex flex-col justify-between ${product.large ? 'lg:w-1/2' : 'w-full'}`}>
                    <div>
                      {product.tags && (
                        <div className="flex gap-2 mb-6">
                          {product.tags.map(tag => (
                            <span key={tag} className="bg-primary/5 text-primary px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-4 tracking-tight">
                        {product.title}
                      </h3>
                      <p className="text-on-surface-variant text-sm md:text-base mb-8 leading-relaxed">
                        {product.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      {product.certs && (
                        <div className="flex -space-x-2">
                          {product.certs.map(cert => (
                            <div key={cert} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[9px] font-black tracking-tighter">
                              {cert}
                            </div>
                          ))}
                        </div>
                      )}
                      <Link 
                        to={`/product/${product.id}`}
                        className="text-primary font-bold text-sm flex items-center group-hover:gap-2 transition-all"
                      >
                        {product.large ? 'View Specs' : 'Get Samples'} 
                        {product.large ? <ArrowUpRight className="ml-1 w-4 h-4" /> : <ChevronRight className="ml-1 w-4 h-4" />}
                      </Link>
                    </div>
                  </div>
                  <div className={`${product.large ? 'lg:w-1/2 h-64 lg:h-full' : 'h-64'} overflow-hidden`}>
                    <img 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                      alt={product.title} 
                      src={product.image}
                    />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Custom formulation card */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
              className="md:col-span-8 bg-primary rounded-[2.5rem] overflow-hidden shadow-2xl relative group min-h-[400px]"
            >
              <div className="absolute inset-0 bg-teal-900/40 z-10" />
              <img 
                className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-overlay opacity-30 group-hover:scale-105 transition-transform duration-1000" 
                alt="Custom blends" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFX43tGn3OMotgXScPQ6CjKfygLdYRlwWLnsa0x11wYpjH5t5GMuAFWO3d4E_DoqUKsHbtt01tY384cAFtpXDc18YVaGkjKuBdYV0EdA7OP4B_htXqdyRnnVzj7G_zvcEoIyOLA9WwrTqaueExZgHDNbeGnuGHpT3wJ2-hHR3RuRDbD7F_iR3jCBz_sDSAwXPl5YHzEthEJhitnawrW5T_kM_G84ddnpPl0WzaU-tTuXk32BaUPnh1ILFVQd-wvOapSjNVXDvW_Xs"
              />
              <div className="relative z-20 p-12 h-full flex flex-col justify-center items-center text-center">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Custom Vegetable Blends</h3>
                <p className="text-white/80 text-lg max-w-xl mb-10 leading-relaxed">
                  We offer custom mixing and granulation based on your specific recipe requirements. Partner with our R&D for bespoke ingredient solutions.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:shadow-2xl transition-all"
                >
                  Start Custom Formulation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications, Packaging & MOQ */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                <Utensils className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Key Applications</h3>
              <ul className="space-y-4">
                {['Instant Noodle & Soup Mixes', 'Snack & Savory Seasonings', 'Meat & Poultry Processing', 'Canned & Frozen Prepared Meals'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-on-surface-variant font-medium border-b border-slate-100 pb-4 last:border-0 hover:text-primary transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div className="w-16 h-16 bg-tertiary/10 rounded-2xl flex items-center justify-center text-tertiary">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Packaging Options</h3>
              <div className="space-y-4">
                {[
                  { title: 'Standard Export Box', detail: '20-25kg Double Poly Bag in 5-Ply Carton' },
                  { title: 'Foil Pouch Packaging', detail: '500g to 5kg vacuum-sealed moisture barrier' },
                  { title: 'Custom Palletization', detail: 'ISPM-15 heat-treated pallets with shrink wrap' }
                ].map((pkg) => (
                  <div key={pkg.title} className="p-5 bg-surface-container-low rounded-2xl border border-slate-100 hover:border-primary/20 transition-all shadow-sm">
                    <div className="font-bold text-primary mb-1 uppercase tracking-wider text-xs">{pkg.title}</div>
                    <div className="text-xs text-on-surface-variant font-bold opacity-60 uppercase">{pkg.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">MOQ & Logistics</h3>
              <div className="space-y-8">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Minimum Order</div>
                  <div className="text-5xl font-bold text-primary">500 KG</div>
                  <div className="text-[11px] font-bold text-on-surface-variant opacity-60 mt-2 uppercase">Trial orders available for new clients.</div>
                </div>
                <div className="pt-8 border-t border-slate-100">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Loading Capacity</div>
                  <div className="flex gap-6">
                    <div>
                      <div className="font-bold text-sm tracking-tight">20ft Container</div>
                      <div className="text-[10px] uppercase font-bold text-on-surface-variant opacity-50">12-14 Metric Tons</div>
                    </div>
                    <div>
                      <div className="font-bold text-sm tracking-tight">40ft HC</div>
                      <div className="text-[10px] uppercase font-bold text-on-surface-variant opacity-50">25-28 Metric Tons</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-32 bg-on-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Ready to Export?</h2>
              <p className="text-white/70 text-lg mb-12 leading-relaxed max-w-lg">
                Connect with our export sales team to receive a detailed quote, technical specifications, and shipping timelines within 24 business hours.
              </p>
              <div className="space-y-10">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-primary transition-all">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-white/50 tracking-widest mb-1">International Sales</div>
                    <div className="text-xl md:text-2xl font-bold text-white">+91 (2844) 222 456</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-primary transition-all">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-white/50 tracking-widest mb-1">General Export Inquiry</div>
                    <div className="text-xl md:text-2xl font-bold text-white">exports@dehydrafoods.com</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-1">Full Name</label>
                    <input className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary text-sm font-medium" placeholder="Enter name" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-1">Company Name</label>
                    <input className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary text-sm font-medium" placeholder="Corporate Entity" type="text" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-1">Work Email</label>
                  <input className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary text-sm font-medium" placeholder="name@company.com" type="email" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-1">Product Category</label>
                    <select className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary text-sm font-medium appearance-none">
                      <option>Dehydrated Vegetables</option>
                      <option>Dehydrated Fruits</option>
                      <option>Powdered Spices</option>
                      <option>Other / Custom Mix</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-1">Quantity (MT)</label>
                    <input className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary text-sm font-medium" placeholder="e.g. 25" type="number" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-1">Message / Requirements</label>
                  <textarea className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary text-sm font-medium" placeholder="Destination port and specs..." rows={4}></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white font-bold py-5 rounded-xl hover:shadow-xl transition-all shadow-lg text-lg" 
                  type="submit"
                >
                  Send Export Inquiry
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Complementary Categories */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold text-on-surface mb-12 tracking-tight">Complementary Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Dehydrated Fruits', 
                desc: 'Sulphur-free processing for the snacks industry.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoqpwCC8w4UEMO5ftAmU2tFOcJZeTR-8E6oymN8vtKWjBTQdQCdGvaScrIEfZf6PlyWVDDH2vOdtsa_AgPDuyJ8vJ4ybwA8EkUTEN5xKnC_rdt0lmza75knxw7RyBFI2HLstmYBU730IhJGZY5KboMrO6U8AxZSMO7FO5wUm3XoQewNjBul84xcokAEGhECUW4lD6Py1RcX7uSyyhjAypKWMUkVVsDzotRI_-VRcq4T4emgbXhLgigUgtmhOK-EMUZVDk4Swru-10'
              },
              { 
                title: 'Spice Concentrates', 
                desc: 'Cold-milled for essential oil preservation.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE9N28koaw1yHRzcMw16rBwFCS35fkqWfC1GX-CJ15Y5KVJoWokHxjQLYYokXE7Xn4EmtJYd4bo1XM9MjYpC4_8YH-ITxkX1AYpVMluCw07dB2h4nrFkaq6tZXbs1A286NuH74W9rq3sge_svrXlXlc0ws4BFa57x07ada0rrFnyt2vpq6o0Fu5z4Nm4_JpJORZTxVB13npjmreMp6smofHQFXsPo9XqVi0U997T4S2PR4xa9RNy9404mUJLEJenBmYhkIhO_DdAY'
              },
              { 
                title: 'Processing Tech', 
                desc: 'Our proprietary air-drying infrastructure.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_slevj8QcG0TGh5I-Sush4-cFzt0VtU_e3tFTdQc3bl9KmWHeYGV7y-EuMgq4yL7PlZFTw5dlq2xYY3DpuNeLPiJKM2zaPWGkPlc6PiFLZBPnKqbj7ULxto03kZ1I8anK0m-p4uxAlyNN31NtdEC_vC4YjTkQ_ffoHPuw4lWhYy8xqFyDqDvXukjrlqUlEcoiDOLvxHdN3ita_szZeA8KZujNF_viBTTJrB_7W3ydFrRIoX_EikCf94-KECTtf8WDyrvLlFBvEGo'
              }
            ].map(cat => (
              <Link key={cat.title} to="#" className="group block relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg">
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={cat.title} src={cat.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                  <h4 className="text-white text-2xl font-bold mb-2 tracking-tight">{cat.title}</h4>
                  <p className="text-white/70 text-sm font-medium">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
