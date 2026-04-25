import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Grid2X2, 
  Package, 
  Calendar, 
  Globe, 
  Mail, 
  Download, 
  Utensils, 
  ChefHat,
  Zap,
  FlaskConical,
  ArrowRight,
  Star
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const productData = {
  'premium-white-onion-flakes': {
    title: 'Premium White Onion Flakes',
    tags: ['Export Quality Premium', 'A-Grade'],
    desc: 'Ethically sourced and surgically processed using advanced low-heat dehydration technology to preserve the natural pungent aroma and flavor profile of fresh Indian White Onions.',
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRBhJNddfGkLhF1c_CDNLNV-ba3SbrYw6TrxvGMIxrvxW6fNekbQDbapRI_PRZOi-fJdT-fqlMu_9mZU8VvkkPG_m4dI3h8GGQl2SMCfRgvMxcr5ISbFqC1gpuCBTNJ12hHrh55oebHcFbdImS6cuxFzVnR1ku1ZruDRMQU2ufkTyF8fFGBt4Iy5iNCI6fTPBywGCb11t2V3wI9XE-HjWhqbvlBT6eYH4sUfAZ62pBzI6h4mEdFqRD7rarcBN4NiVC3ATNiuKhaYs',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvAWBd-0hnJBrANosnTeieexifB2FNX5n_q4UreP9We6lNJZFw_oGQPEUsYGEShbHyyfkeIg9TOsb7ETAkyeWlZgaDSk4dPq2h7Iagp3ySXqt5MQp89fuo6qpJCDH98nN1AHjIj-i-qW5LNHz62EqlEMP_U80DfYMXRv69JfWM35nEaaKEoJlR0GHOMb_KDsTTJe2tJnbYpAMm-zps2qMt5nGRxkaszRmhpP4Or0TNc6dhVoyLITpFG--Mbp77HzPYKGNfbp_VP-0',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3j6nrEPn3ln1xjY7aZHBnq9dYWflmVHo3K-VpAI4r5KD7DP9ecHgL48VfszLytNHNoH7klC5XacgGwHU2cLHVUr21rhORoFiWns4lekEFVcK1Z3SbNd09quMeBjpmxgPIjKzL41xS9xXHFlSmbJhOz4dEhDX2TvwJ6njWmSX2e0_PrAZMjjwCge5hTv9lTb_Q5nlFa1nJX2srC3U8bkQQQpQq3NmuRhaKBAvcwXNaQ_s25wofeqzdeh7TgSRRFqMR9ep-X39JCd0',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgjiPcOOKZTuJQWAr4VofeDBPdCrsQNmVI7H2qeQquTxOxdjP_-He_SJWP_BTGMa21Q_iWwkqDlvIIYWLrDhl-uC8hae2ldhUc3f9K-vjHO9OHvc5CzzgXBJxuAIapE4XedfFZS-_GUg3J2pnTAhpqsJPSijFCXhTJC45D0iUvw_rMj6x8CGuUwNU84fZz0H9xC7KCLtjnEUfhiWFYRumALap0q2ZeDZqRpHp0EWFuJsuPOEbwLtO6F9f1tEdHhRDDft5CqJFlP3c'
    ],
    specs: [
      { label: 'Form & Cut', value: '10-15mm Kibbled / Flakes', icon: Grid2X2 },
      { label: 'Packaging', value: '25kg PP Bag with Poly Liner', icon: Package },
      { label: 'Shelf Life', value: '12 Months (Optimal Storage)', icon: Calendar },
      { label: 'Export Ready', value: 'Global Shipments (EU/NA/AS)', icon: Globe }
    ],
    longDesc: [
      'Our Dehydrated White Onion Flakes are produced from the finest quality white onions grown in the rich agricultural belts of Gujarat. We employ a multi-stage cleaning and sorting process, utilizing state-of-the-art optical sorters to ensure zero impurities.',
      'The dehydration process is strictly monitored to keep moisture levels below 4.5%, ensuring a crisp texture and long-lasting freshness without the need for artificial preservatives.'
    ],
    applications: [
      { title: 'Canned Foods', desc: 'Ideal for soups, sauces, and ready-to-eat meals due to high rehydration capacity.', icon: Utensils },
      { title: 'Seasoning Blends', desc: 'Perfect base for spice mixes, seasoning salts, and snack coating powders.', icon: Zap },
      { title: 'QSR & Catering', desc: 'Convenient storage and rapid preparation for high-volume commercial kitchens.', icon: ChefHat },
      { title: 'Food Processing', desc: 'Used in processed meat products and vegetable mixes for texture and flavor.', icon: FlaskConical }
    ]
  }
};

const relatedProducts = [
  { 
    id: 'dehydrated-garlic-powder', 
    title: 'Dehydrated Garlic Powder', 
    grade: 'Fine Mesh | Premium Grade',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1cfsIK4mKSrjDk2r2l5d6WRhNo01EV-bZgu8leuNpHP9GIRTERHDhFjSVCwF2aGyAx_t07GQFmDKan0EL2hzfqV_6HSIifaDWOrX5K0VPHwd1gsvUuaVuCwbgPqXw5da41whb4YtBvf7Z1OwUKPo8I5QT7cZ6YLLR_6aWxQt2FvyQvE3DVJjcUWHtLA0cvx5Pi_7HR5jLxjkKkhGbBKwCcf4Tj1K6HR04Y78h6G8iJbbrKYQd5igSLig-wDUuKzwaqBhzoG64yMk'
  },
  { 
    id: 'crispy-fried-onions', 
    title: 'Crispy Fried Onions', 
    grade: 'Sulphur Free | Snack Grade',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIid8lv7JO2PFA336R_ebIIsYZj1snf1xCBr8fwYYcdNxDKA5rhx9crmJsmBt_Zh9IyGXhKPNb1iLkCXQfJ9h5qh-hgtbIFMqcAd1t6_JqKG7qeFqV4Jza4NQ4KuBdegrtbo3as4tje3lpResqMYeEUyhC74rXsxpd4DIVF9P_Xc0mwiwH9cgxx-g4_eqQsDYOj5oOWVqZXI8HMVCtZ2YNol8VaOxrkWWlsVhLOvZFYL1kJVXDdmtsfN8xETqHVqUGhilj8LG5Ao8'
  },
  { 
    id: 'red-onion-kibbled', 
    title: 'Red Onion Kibbled', 
    grade: 'High Pungency | Grade A',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXjP5xpsl6TV_UGaBvdUIMhXeyla1NxfI3qJcY6Hnp1kyRCRZYUab772T5rJk9LAQ3TlSSNu7HnjYbipWnQtP9wnI7ZUkdKS0UCfN1UyfnRrBWvZQKwwiY8QmneUt1QP78kCILLsPGhtbZX1mjghqc5s8zOBvilAkFygMo8vnC2q9bXYEiodcwQVIyqyzNR3yepoZe1V343VaCFWXThjPg0pGO5e-s5kdrBZvQboLZAvExKr83UCehNoS6o-EzQrbjn3tkPNLser0'
  },
  { 
    id: 'dehydrated-garlic-minced', 
    title: 'Dehydrated Garlic Minced', 
    grade: '1-3mm | Export Grade',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlOWKV0PHCmP8yntCvvX-8stF0-8wZ7pe3F6lDVKeUXjvLh7XynYJG23aabWPISXlwoL-Xeiw_6mrsnOaAy7ZiUeEQIfq40H0qlFcG3EqLHV-_9fyWthAALMHNVAOCE4sT92FMMsVeVrMMmCt_5rFSQBFA4sQkqlCL3xutNKxxuLwBPUia2WNSyW9bw7BpZAlvyfLjYjW1g2zxIfBzdOHEjeR67dAvUv90SKCo5_ENij_qdk0r2M9OIQEoS3__NJfIHoKZAinHcLk'
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData[id as keyof typeof productData] || productData['premium-white-onion-flakes'];

  return (
    <div className="pt-20 bg-background">
      <main className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-12 text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Product Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-100 p-2"
            >
              <img 
                alt={product.title} 
                className="w-full h-full object-cover rounded-2xl" 
                src={product.mainImage}
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary cursor-pointer shadow-lg">
                <img alt="Thumbnail" className="w-full h-full object-cover" src={product.mainImage} />
              </div>
              {product.thumbnails.map((thumb, idx) => (
                <div key={idx} className="aspect-square rounded-2xl overflow-hidden hover:opacity-80 transition-opacity cursor-pointer border border-slate-200 bg-white">
                  <img alt="Thumbnail" className="w-full h-full object-cover" src={thumb} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map(tag => (
                  <span key={tag} className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold tracking-[0.05em] uppercase border border-secondary/20">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight leading-tight uppercase">
                {product.title}
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-medium">
                {product.desc}
              </p>
            </motion.div>

            {/* Bento Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.specs.map((spec, idx) => (
                <motion.div 
                  key={spec.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-center gap-4 mb-3 text-primary">
                    <spec.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-black">{spec.label}</span>
                  </div>
                  <p className="text-base font-bold text-on-surface uppercase">{spec.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link to="/request-quote" className="flex-1">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary text-white py-5 px-8 rounded-2xl font-bold text-base hover:bg-teal-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
                >
                  <Mail className="w-5 h-5" />
                  Request Export Quote
                </motion.button>
              </Link>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 px-8 py-5 border-2 border-primary text-primary rounded-2xl font-bold text-base hover:bg-primary/5 transition-all"
              >
                <Download className="w-5 h-5" />
                Spec Sheet
              </motion.button>
            </div>
          </div>
        </div>

        {/* Detailed Description Section */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-2 space-y-20">
            <section>
              <h2 className="text-3xl font-bold text-primary mb-10 tracking-tight uppercase border-b-2 border-primary/10 pb-4 inline-block">Product Description</h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-medium">
                {product.longDesc.map((p, idx) => <p key={idx}>{p}</p>)}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-10 tracking-tight uppercase border-b-2 border-primary/10 pb-4 inline-block">Key Applications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {product.applications.map((app) => (
                  <div key={app.title} className="flex gap-6 group">
                    <div className="shrink-0 w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                      <app.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-3 text-on-surface">{app.title}</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed font-medium">{app.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Inquiry Sidebar */}
          <aside className="lg:sticky lg:top-32 h-fit">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-primary mb-8 tracking-tight uppercase underline underline-offset-8 decoration-2 decoration-secondary/30">Bulk Export Inquiry</h3>
              <form className="space-y-6 text-left">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 px-1">Full Name</label>
                  <input className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary text-sm font-medium transition-all" type="text" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 px-1">Company Email</label>
                  <input className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary text-sm font-medium transition-all" type="email" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 px-1">Quantity (Tons)</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary text-sm font-medium transition-all appearance-none">
                    <option>1 - 5 Tons</option>
                    <option>5 - 20 Tons</option>
                    <option>Full Container Load (FCL)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 px-1">Message</label>
                  <textarea className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary text-sm font-medium transition-all" placeholder="Specific requirements..." rows={4}></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all shadow-xl shadow-primary/20" 
                  type="submit"
                >
                  Send Inquiry
                </motion.button>
              </form>
              <p className="text-[10px] font-bold text-center text-slate-400 mt-8 uppercase tracking-widest opacity-60">
                Responds within 24 business hours
              </p>
            </motion.div>
          </aside>
        </div>

        {/* Related Products Section */}
        <section className="mt-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight uppercase">Related Products</h2>
              <p className="text-on-surface-variant font-medium">Explore more premium dehydrated essentials from our facility.</p>
            </div>
            <Link 
              to="/products"
              className="text-primary font-bold flex items-center gap-2 hover:underline uppercase text-xs tracking-widest"
            >
              View Catalog 
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {relatedProducts.map((rel) => (
              <motion.div 
                key={rel.id}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img alt={rel.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src={rel.img} />
                </div>
                <div className="p-8">
                  <h4 className="font-bold text-xl text-primary mb-2 tracking-tight group-hover:text-secondary transition-colors uppercase">{rel.title}</h4>
                  <p className="text-[10px] font-black text-slate-400 mb-8 uppercase tracking-widest">{rel.grade}</p>
                  <Link 
                    to={`/product/${rel.id}`}
                    className="w-full py-4 border border-slate-100 bg-slate-50 rounded-2xl text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center gap-2"
                  >
                    Details
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
