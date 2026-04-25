import { Microscope, FileCheck, Leaf, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const standards = [
  {
    icon: Microscope,
    title: 'Lab-Tested',
    desc: 'In-house microbiology lab testing for moisture levels, ash content, and microbial load on every batch.',
  },
  {
    icon: FileCheck,
    title: 'Batch Traceability',
    desc: 'Full digital traceability from the farm gate to the customer warehouse via our ERP system.',
  },
  {
    icon: Leaf,
    title: 'Pure Processing',
    desc: 'Zero additives, zero preservatives. Only the raw essence of the ingredient is captured.',
  },
];

export default function Quality() {
  return (
    <section id="quality" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16 px-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Unyielding Quality Standards</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              We don't just supply food; we provide peace of mind. Every gram of produce undergoes rigorous 3-tier testing protocols.
            </p>
            <Link to="/quality">
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest"
              >
                Learn about our processes <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
          <div className="flex gap-6 items-center shrink-0">
            <img 
              alt="Food Safety Certification" 
              className="h-10 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbddaIFnuH4RwQDedxLVh-QnsJBHj-O4ktkS8lYxCUzSDJKXUeuY6Pb7ztS_va9iYyanF4KVk0puuvTsgqf7rFCNHismNy68SAVeWy7XHmRLGiWpP7o_IHQwcEd5oC4DTUV3MJ_O_PE8Wnj6bLsHHapbTazoVXRQOsLLvYSNXQmKZXM06tBZGYc7vk9GeDjHDJMwQ9EBqaGO7VqoGwDii36pTwfzmRbyjayst7cUR15S6tQwiUqNluLI0IPznXS3rq9Toz46vhpcQ" 
            />
            <img 
              alt="Quality Management Standard" 
              className="h-10 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXyxpc-ZLqQfz65Om2ob24UPQurnEFfVejmrRDunTnoaS9XlOgPYkWQnmt4dy4GjwmVZSweILwv5XwxfsnadR8HRO2iXN5fADP3T0wHxMlJgzo4N6ahdRETIe0x13qguIqem89FTgwwrYTsTRIZkWcuJP_XbZuJ_tSHVRfifHzeeZaRElsuTDQThlWsvxZQAlJt1HphJ06JyTwyagVkbuQIO3CZ8L-bUC2pUVYbgC-Up6AWiaaStrIVEtFFt36pbs66i7RdQuqXQE" 
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {standards.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-4 p-4 rounded-2xl hover:bg-white transition-colors duration-500 group"
            >
              <div className="w-16 h-16 bg-primary/5 flex items-center justify-center rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <item.icon className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
