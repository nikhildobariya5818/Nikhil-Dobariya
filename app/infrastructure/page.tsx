import { motion } from 'motion/react';
import { 
  Building2, 
  Warehouse, 
  Gauge, 
  Thermometer, 
  Truck, 
  Navigation,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Mail,
  Share2,
  Globe
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Sq. Ft. Storage Capacity', value: '55,000+', icon: Warehouse },
  { label: 'Fulfillment TAT', value: '48h', icon: Gauge },
  { label: 'Fulfillment Reliability', value: '100%', icon: ShieldCheck },
  { label: 'Transit Moisture Variation', value: '0.02%', icon: TrendingUp },
];

const facilities = [
  {
    id: 'mahuva',
    name: 'Mahuva Hub',
    tag: 'Primary Hub',
    tagColor: 'bg-secondary-container text-on-secondary-container',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzAamhCMdYQhtwEJDd1b1IKcQoYCuC7UV8RoQ2J5e-ElOHTEbf5x8QuIXLxO_oD11SxIuF_YPYwqeJ8RnQke5PniaA0RO8BmTsRiSWUEvbQA8W7wDiJVbHsvWsCulNNUBBEAieyrGxY9C5dhp0lHJn-NoYvsLKZISlSD5wxOgsWSmIq3GGvS7wy-B9u7iHyycIbHyOuEDfe-pzgtV9vu9soTC2x3I7usOkZnB23PQoTBNGysuv93UI_N5TpGxHALJ1ZbL448-IoYU',
    capacity: '22,000 MT',
    specialty: 'White & Red Onion'
  },
  {
    id: 'rajkot',
    name: 'Rajkot Facility',
    tag: 'Export Node',
    tagColor: 'bg-surface-container-highest text-on-surface-variant',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbPBvpjIpqqj4dCWzeM2lLUY8C-GfHLDlqC8XdQUVwkh0z8Q4yRbCXGjNsCyG_JgNe1x2ow-GRugzvTM0JE8XrJTQI4TO-8VnkxekOc9FxoCMFh_eb9eGJ0pcraLq3b5kxv__QZ86868-SmkWpmT2-9lK0Zlq6DmHuWTHee4_15lPgXViHAmmRp1Cnk7q7o4HdH2Wf2TtpUKzWNj_Nly96wkmL25Y_rMlzBigAWeKnHj9mZuGbAB4FRst22fh-xH1zfc2TSTVlFvo',
    capacity: '15,000 MT',
    specialty: 'Garlic & Ginger Powder'
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    tag: 'Smart Storage',
    tagColor: 'bg-surface-container-highest text-on-surface-variant',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaUQYxvz2t_kTAEi_Ixu0OW-seLcLhJajgRNgD5DNt9biX7BS3Nln_knmJl7f9FeieqAqUZJh1-eXmhEgSLTWu5ICm0UBDw_nyvyf7qR7x3rBjlgRiOqZiHTH-QP4I2WXrtGoXCIE_0CgTnrhmaIIF4nYi5B1hWIDsFAGyUACJS_ErlkY5xhKXQ7fa1V_ndgNQpnnpZH8pn_QMgk6_vvFCVgWZVJkw66mpQGmylMNUoeWBMRMme2kUnNdXxggF8CPaVK8J6XjM8-k',
    capacity: '8,000 MT',
    specialty: 'Finished Packaging'
  }
];

const transitFacilities = [
  {
    name: 'Mahesana Transit',
    desc: 'Specialized collection point for North Gujarat harvests.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBUIU7Otq4E2VMJCRC4xbl8dI5VINDYrZbOoBjsH8T-Y1HwoF2yfwVZQNHMwgLX-2dyNt1vxrmHrM409wIlCaIv_3v-tzyKjXUBjU4WMemIn1iSRG1THzDRT_1rV7vQaWbBfQRzg5lpz833rtkrVmZOo5vT4mhfY3wP1ApSOGFFqmwx6wE_8qU7fudJJzKJTNWcgQUAlgeb6NZFYq7nLHC2RCNDtoEISMdpGIGWaFURYAkrJz_o4vJ62wI9R2NTQwBtAd2XTbEP7Q',
    capacity: '5,000 MT',
    label: 'Transit to Hub',
    time: '6h'
  },
  {
    name: 'Surat Port-Link',
    desc: 'Final quality check and custom documentation center.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFTgln1jy9aGSKjmTz_MizjTuTCjbZzonMQMmrplhe-MexmRkr2hjNDAt9LrYhnDehqo4tvA9buySquN76KMXn1h0mQeVVAlO_onJSGAqaMzdbtNZHFWoex9tCUdZ5UNfAvNFZn8KJYE0Ki31jctCZvUBnrJxjgIkurd78J1csk0SLgP-CyKJPEmz0BS_MpyhXk70cNYZpPTd2fE6QlyV-_TjC5YkMFy8ywP-1xFBgNkx6Sa2pHEWlVPqYHmgiqJq6k7BKywutEUk',
    capacity: '5,000 MT',
    label: 'Dispatch to Port',
    time: '4h'
  }
];

const timeline = [
  { icon: Building2, label: 'Procurement', time: '0-12h', desc: 'Direct farm-gate pickup from certified Gujarat growers.' },
  { icon: Gauge, label: 'Processing & QA', time: '12-36h', desc: 'Surgical dehydration and 15-point quality verification.' },
  { icon: Warehouse, label: 'Strategic Hub Storage', time: '36-48h', desc: 'Climate-stabilized storage at Mahuva or Rajkot hubs.' },
  { icon: Navigation, label: 'Global Dispatch', time: '48-72h', desc: 'Container loading and port arrival for global shipping.', highlight: true },
];

export default function Infrastructure() {
  return (
    <div className="pt-20 bg-background min-h-screen font-body-md overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-secondary">
                Network Infrastructure
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-primary leading-tight tracking-tighter uppercase font-display-lg">
                Precision Storage, <br /><span className="italic text-secondary">Global Distribution.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-12 font-medium leading-relaxed font-body-lg">
                Our multi-hub warehousing ecosystem across Gujarat ensures surgical fulfillment speed and climate-controlled integrity for every dehydrated export.
              </p>
              <div className="flex gap-16">
                <div>
                  <div className="text-4xl font-bold text-primary tracking-tighter">55,000+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-60">Sq. Ft. Storage Capacity</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary tracking-tighter">48h</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-60">Fulfillment TAT</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -rotate-2 scale-105" />
              <img 
                alt="Aerial view of logistics center" 
                className="relative rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-[1.02] border-8 border-white/50" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRiE1baUINujr17NqEzDx3lLPLLSdiNUpbchR1ZMys2NC_IgW9UtJdl_ltNfUdj-IC3JVHfKAVV4SxmM4raLVSnPkg2GVFpHfcMBVjhww2l-NgTJkYN-WWBIEZihu6veotNR693VsJH1gJ0WtrUvxv0LCYZmkUy2VvhYN9AOuLmFKdGfEFeM544tlETHs2gcDhkYm9jKLCfed66XtiekvivSuiHjVTbRI1xARMsce0lOvWJPxEpNiK9bx-I3dwb5M37NFF7h3guAI"
              />
            </motion.div>
          </div>
        </section>

        {/* Interactive Logistics Map Section */}
        <section className="py-32 bg-surface-container-low px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight uppercase font-headline-lg">Strategic Gujarat Hubs</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-medium font-body-lg">
                Positioned at the heart of the world&#39;s most fertile onion and garlic belts to minimize farm-to-dehydration transit time.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* Map Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-8 bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden min-h-[550px] relative group"
              >
                <img 
                  alt="Regional distribution map" 
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzNVa8cXYqZnxxxg8YZHfScW8vj4YgOdMknXwZdPFrtYPw4laiz-rM42mA2SNvkBpuMPc8HwEFZ6SvOY34lh0A4XbPUHZCEQDzyUjcqq5yW0Nt6utMjxE1YT0TpBNQXy0BU93N02U5PUBy1QY0-4zYO-R0YxeK4V9nR41Emx3a1o29PcXykX7E0E7yf6_g5JNevMd3g8ZI_m0FouF1wpdZx7KNRBcsgWiqFDaRJEt9fjeoaXz_bwk6bMp1vArHDTcvpzcduNTkUS0" 
                />
                <div className="absolute top-1/4 left-1/3 bg-white/90 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-2xl border border-white/50 flex items-center gap-3 animate-bounce">
                  <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_rgba(0,110,28,0.5)]" />
                  <span className="font-black text-xs uppercase tracking-widest text-primary">Mahuva Primary Hub</span>
                </div>
              </motion.div>
              {/* Facility Stats Bento Grid */}
              <div className="lg:col-span-4 flex flex-col gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-primary text-on-primary p-10 rounded-[2.5rem] shadow-2xl shadow-primary/20 flex flex-col justify-between flex-1"
                >
                  <Gauge className="w-12 h-12 mb-6 opacity-40" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight font-headline-md">Fast-Track Logistics</h3>
                    <p className="text-sm font-medium opacity-80 leading-relaxed">Our Rajkot facility serves as a central bypass for 24-hour dispatch to Mundra Port.</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col justify-between flex-1"
                >
                  <Thermometer className="w-12 h-12 text-primary mb-6 opacity-40" />
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3 uppercase tracking-tight font-headline-md">Climate Control</h3>
                    <p className="text-sm font-medium text-on-surface-variant leading-relaxed">Consistent &lt;12% humidity levels maintained across all Surat and Ahmedabad warehouses.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Warehouse Directory */}
        <section className="py-32 px-6 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tighter uppercase font-headline-lg">Warehouse Directory</h2>
              <p className="text-lg text-on-surface-variant font-medium">Operational excellence across five specialized zones.</p>
            </div>
            <div className="flex gap-4">
              <button className="w-14 h-14 rounded-full border-2 border-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="w-14 h-14 rounded-full border-2 border-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {facilities.map((fac, idx) => (
              <motion.div
                key={fac.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[2.5rem] border border-slate-100 p-8 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                <div className="h-56 overflow-hidden rounded-3xl mb-8 border-4 border-slate-50">
                  <img alt={fac.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={fac.image} />
                </div>
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl font-bold text-primary uppercase tracking-tight">{fac.name}</h4>
                  <span className={`px-3 py-1 rounded-full ${fac.tagColor} text-[9px] font-black uppercase tracking-widest`}>{fac.tag}</span>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-4 text-xs font-bold text-on-surface-variant uppercase tracking-wide">
                    <Building2 className="w-5 h-5 text-primary opacity-40" />
                    Capacity: {fac.capacity}
                  </li>
                  <li className="flex items-center gap-4 text-xs font-bold text-on-surface-variant uppercase tracking-wide">
                    <Warehouse className="w-5 h-5 text-primary opacity-40" />
                    Specialty: {fac.specialty}
                  </li>
                </ul>
                <button className="w-full py-4 rounded-2xl border-2 border-primary text-primary font-black text-[10px] uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all">Explore Site Details</button>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {transitFacilities.map((fac, idx) => (
              <motion.div 
                key={fac.name}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col sm:flex-row bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="sm:w-1/3 h-56 sm:h-auto overflow-hidden">
                  <img alt={fac.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src={fac.image} />
                </div>
                <div className="p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-bold text-primary mb-3 uppercase tracking-tight">{fac.name}</h4>
                    <p className="text-sm font-medium text-on-surface-variant leading-relaxed">{fac.desc}</p>
                  </div>
                  <div className="flex items-center gap-10 mt-8 border-t border-slate-50 pt-8">
                    <div className="text-primary font-black">{fac.capacity} <span className="block text-[9px] font-bold text-on-surface-variant opacity-60 uppercase tracking-widest mt-1">Capacity</span></div>
                    <div className="text-secondary font-black">{fac.time} <span className="block text-[9px] font-bold text-on-surface-variant opacity-60 uppercase tracking-widest mt-1">{fac.label}</span></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Distribution Timeline Section */}
        <section className="py-32 px-6 md:px-8 bg-on-surface relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-[20deg] translate-x-1/2 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tighter leading-tight uppercase font-display-lg"
                >
                  From Field to Port <br /><span className="text-secondary italic">in 72 Hours.</span>
                </motion.h2>
                <p className="text-slate-400 font-medium text-lg md:text-xl mb-16 leading-relaxed font-body-lg">
                  Our proprietary &#34;Pulse-Logistics&#34; system tracks moisture levels and environmental data in real-time, ensuring zero degradation during the distribution phase.
                </p>
                <div className="space-y-12 relative before:absolute before:left-6 before:top-6 before:bottom-6 before:w-0.5 before:bg-white/10">
                  {timeline.map((step, idx) => (
                    <motion.div 
                      key={step.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative pl-16 group"
                    >
                      <div className={`absolute left-0 top-1 w-12 h-12 rounded-2xl ${step.highlight ? 'bg-secondary text-white shadow-[0_0_20px_rgba(0,110,28,0.5)]' : 'bg-white/5 text-white/50'} flex items-center justify-center border border-white/10 z-10 transition-transform group-hover:scale-110`}>
                        <step.icon className="w-5 h-5" />
                      </div>
                      <h5 className={`${step.highlight ? 'text-secondary' : 'text-white'} font-bold text-lg mb-2 uppercase tracking-tight`}>{step.label} ({step.time})</h5>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="pt-20">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <div className="rounded-[2.5rem] overflow-hidden h-[350px] shadow-2xl border-4 border-white/5 transition-transform hover:scale-105 duration-700">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwb69SG3ndTNQa8VZZeAljjPxEg6PWq42NOE057ml-bddVfbrtkupUzOwtNIY3RZT7jsktPJAJ4vkycKJtRxZwsCzlZTQV_YKup4QG21RFkdkMK1hK6VB5mkjE_T6RtY272iio-tKFnv3E7DCZpIv-uyx_PQAJBg0G4dD0z6xiEbIpXNPzq3w5CJOGqPqCT8z7t33mhvLkKob5MrsRFdLcrUxze2o1MH5WdzpCFa0Cu-373Ei6eeujxp_to3M34-Il1xdKHmNgw1M" alt="Truck" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-secondary p-10 rounded-[2.5rem] shadow-2xl shadow-secondary/20">
                      <div className="text-5xl font-black text-white tracking-tighter">100%</div>
                      <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mt-3 leading-tight font-label-sm">Fulfillment Reliability</p>
                    </div>
                  </motion.div>
                </div>
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-primary p-10 rounded-[2.5rem] shadow-2xl shadow-primary/20"
                  >
                    <div className="text-5xl font-black text-white tracking-tighter">0.02%</div>
                    <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mt-3 leading-tight font-label-sm">Transit Moisture Variation</p>
                  </motion.div>
                  <div className="rounded-[2.5rem] overflow-hidden h-[400px] shadow-2xl border-4 border-white/5 transition-transform hover:scale-105 duration-700">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdgUmbKF_VHZ0Nv8zYF_SP11IE8pUkFm-8DARYmzajJTBI9knAUYbQkPFbF3TIfHBreOT6ukys1IkZmXB5yfrvlwUG6-Skb3lZ532ik8MKgxo8MA5s-IfNbTIqYbzYAC9s87Vfm4QkyEcnVh1CEs1i7UktIHhBuUxZvtRQQJj2IWmowOaUvh6dVwJAY0tKloacLSeVFYJDNdwB2yGUHebVvhnbIEBcxD2Un83D9L8uBvagvS6R3lwH8tQmylNzWBJ8F3Z603hMlKI" alt="Logistics Tech" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 px-6 md:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center bg-white p-14 md:p-24 rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tighter uppercase font-headline-lg">Ready to secure your global supply?</h2>
              <p className="text-lg md:text-xl text-on-surface-variant font-medium mb-12 max-w-2xl mx-auto font-body-lg">
                Join 200+ global food manufacturers who rely on De&#39;Hydra&#39;s industrial-grade infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/request-quote">
                  <button className="w-full sm:w-auto bg-primary text-white px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:scale-105 transition-all shadow-xl shadow-primary/20">Request Site Visit</button>
                </Link>
                <button className="w-full sm:w-auto bg-white text-primary border-2 border-primary px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:bg-slate-50 transition-colors">Download Specs</button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
