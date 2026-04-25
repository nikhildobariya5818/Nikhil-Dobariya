import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  Package, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  FlaskConical,
  ChefHat,
  Droplets,
  Sprout,
  Leaf,
  Container
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    id: 'dehydrated-vegetables',
    title: 'Dehydrated Vegetables',
    desc: 'Premium quality onions, garlic, ginger and more processed using advanced dehydration technology.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsMuBZ5yEFarX6J3JF1pQgco_Or3e6kuAM87dtYsbGJFpeeA-1fKYy4KdWTYG_K8tgAUdiG7CUyovEEstYKo9KjpJEa9OlZGpV41cdLMhXDxYweExTmstX4i-KOU8VerGIbDuYJDiqhCvnGqNGtQX-pbjKNaRRIqacmbQNYdhV7a8lftUN-xXLufBfsRDRfFJaWKXLbvn2ZSQbj3Wctr-JlVN7ELFGHB12P9KdEk5JCp238zufhf7V7-2W-ow0ufaA2wn5zTQ8XYI',
    count: 24
  },
  {
    id: 'fried-products',
    title: 'Fried Products',
    desc: 'Crispy fried onions and garlic, perfectly browned and moisture-controlled for long shelf life.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZVXLlY4O3v_TYGdBSnTqQpSYEZjxG_6iI0HL1000Wa_z0ejrhWKUUuax3EnRsqGLMpVEOcZt67rDGlC4l_W7YNcqnOoApkh0jTYRof-0aBcXqEH7GCC3scmKAM1deI6xl56v__dlMrtOwGfvJuwKVJpEZyjVorfZvXsI8TDqO3w91338yUqMhJImfxyu6J8fOka_dWj3z3JjwL9jbECtxaz-gy3VC940YOlA2EFxAY9yG8sx-W9ETJY6zjkMw74FbEDg5sXgStN4',
    count: 12
  },
  {
    id: 'exotic-fruits',
    title: 'Exotic Fruits',
    desc: 'Natural fruit essence preserved without additives. Perfect for snacks, cereals, and baking.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjlFRMJJmA7M82i0MY6L1sgTVW_YZgugwfPkV96_n8Oei_yZ0i38-H17YhmigafhL9KhjRO9c-X4n8hcb3mL-t955NotzTAfBxsmxpgY75eMpUxjKJ8fTJA53ySMMjB81BemleMlGayVj1mJdHL-01K3rYqdTm0bYZznfYZFREFZdpstONPsR7tocyL_WcpnKUNMYMgFaXFxP_z-iLTUG9x0zmE44CmmrvpV5rZ_nTW6tnmW3CT5iFTJ3XVX4J0p8DQ4jDHFvJOTs',
    count: 18
  },
  {
    id: 'leaves-powders',
    title: 'Leaves & Powders',
    desc: 'Finely milled herbal and vegetable powders, maintaining maximum aroma and nutrient profile.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUovLbgDxEQEsGmhHaHzS4ZLHrrsQ0DPu4g1DGY9uq-_8qqJPDS3txfk2TOf7A91WEIDX92JhsWmH225dAPtxIMB2Y8XQ47q5mGrxc4HN2Ri8Jnx8wgULk5U5y6yDBystf0fhVaSh7eEVq_bQ0mvrbsq9oH7r0KwtPZnv9YtUptq0XJDeRgcuGDZz7_1Hjk5evttpghD-Rzt8H1E2T37jNICgsfEQIJVwXkG_a-XVYfYgsGfRyXzeDrlJ-q8y4bKK9EunPwrl4oVo',
    count: 32
  },
  {
    id: 'pure-spices',
    title: 'Spices & Whole Spices',
    desc: 'The finest Indian spices, steam-treated and graded for the highest international food safety standards.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBE4YR3zO6F3ZPpXa8yQtTW4v4MiiloDMGC7X1pUyJFNDw78JUd6UtQBoL1XuuMZLsfioDdMcpC5x-7_svdtdVxW9Efx8Q07qrij5FlfAlBTu33TPwig3WfkITtUnxSXdUNqLsYFxPkvEpJ_fxEpxQ-euxdfDoXjWpYVJTcD1KQWL9m0BkTKRxQY15tQarOM23mUvGzhONbtz4eHiKl_iGyAihM3iLTSuYN9Bm2VJqXCw16UbVbokHnM7BHQIKa0UHZe9eU1sm70WI',
    count: 45
  },
  {
    id: 'oil-seeds',
    title: 'Oil Seeds & Cereals',
    desc: 'Selected premium seeds and cereals, thoroughly cleaned and sorted for global distribution.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6A7ouAPU4EYjw_LFpWE34CaDNpsECqoqC6fxkJ3vjht3iSzxVi48iWzd6MitCwZPO03QR_GMkt8UOc6AiuJCAFACBR7IYTGfKd6d3Gn-fFu7tai_tdxER5oVdZBw2YokzDaJSOruxr8vRAJ0gJV2d8gv0XaEAtKhJwikQVDsijpyeMaMdDbNuYI285BjwZ6bxu6TTUQS5ymdPX283ZxCV2yjsFsc2OhCjMWpwG312k2dd2nfeUDtQwjLVQ0YELyhfdiX0K4nK4bM',
    count: 15
  }
];

const filters = [
  { name: 'Dehydrated Vegetables', icon: Leaf },
  { name: 'Fried Products', icon: ChefHat },
  { name: 'Dehydrated Fruits', icon: Droplets },
  { name: 'Leaves & Powders', icon: Sprout },
  { name: 'Spices & Whole Spices', icon: Container },
  { name: 'Oil Seeds & Cereals', icon: Container }
];

const forms = ['Minced', 'Powder', 'Chopped', 'Granules', 'Whole'];

export default function ProductsList() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      <header className="py-16 max-w-7xl mx-auto px-6 md:px-8 border-b border-slate-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Global Export Excellence</span>
            <h1 className="text-4xl md:text-6xl font-bold text-on-surface tracking-tight max-w-3xl leading-tight">
              Premium Dehydrated Ingredients
            </h1>
          </motion.div>
          <div className="w-full md:w-96 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5 group-hover:text-primary transition-colors" />
            <input 
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-6 focus:ring-2 focus:ring-primary focus:border-transparent text-sm font-medium transition-all shadow-sm"
              placeholder="Search products..." 
              type="text" 
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 flex flex-col lg:flex-row gap-16">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 space-y-12 shrink-0">
          <section>
            <h3 className="text-xl font-bold mb-8 flex items-center justify-between">
              Categories
              <Filter className="text-slate-400 w-5 h-5" />
            </h3>
            <div className="space-y-4">
              {filters.map((filter) => (
                <label key={filter.name} className="flex items-center gap-4 group cursor-pointer">
                  <input 
                    className="rounded border-slate-200 text-primary focus:ring-primary w-5 h-5 transition-all" 
                    type="checkbox" 
                  />
                  <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">
                    {filter.name}
                  </span>
                </label>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-8">Product Form</h3>
            <div className="flex flex-wrap gap-2">
              {forms.map(form => (
                <button 
                  key={form}
                  className="px-5 py-2 rounded-full border border-slate-200 bg-white text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-all shadow-sm"
                >
                  {form}
                </button>
              ))}
            </div>
          </section>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-3xl bg-primary/5 border border-primary/10"
          >
            <Package className="text-primary w-8 h-8 mb-6" />
            <h4 className="text-base font-bold text-primary mb-3">Custom Packaging</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed font-medium">
              Tailored bulk packaging solutions for international shipping requirements. Customizable for your brand.
            </p>
          </motion.div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {categories.map((cat, idx) => (
              <Link 
                key={cat.id} 
                href={`/category/${cat.id}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
              >
                <div className="h-60 relative overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    alt={cat.title} 
                    src={cat.image}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black text-primary flex items-center gap-2 shadow-lg">
                    <Package className="w-3 h-3" /> {cat.count} PRODUCTS
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors tracking-tight uppercase">
                    {cat.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-8 leading-relaxed font-medium">
                    {cat.desc}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <span className="text-[10px] font-black tracking-[0.2em] text-secondary flex items-center gap-2 uppercase">
                      <CheckCircle2 className="w-4 h-4" /> Export Ready
                    </span>
                    <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Export Highlights Card */}
          <div className="mt-24 p-12 md:p-16 rounded-[3rem] bg-on-surface text-white flex flex-col md:flex-row items-center gap-16 overflow-hidden relative shadow-2xl">
            <div className="relative z-10 md:w-3/5">
              <span className="bg-secondary text-white px-5 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-8 inline-block shadow-lg shadow-secondary/20">
                The Global Standard
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">Built for International Supply Chains</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Globe className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-2">Global Logistics</h4>
                    <p className="text-xs text-white/60 leading-relaxed font-medium uppercase tracking-wider">Door-to-door delivery across 40+ countries.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <FlaskConical className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-2">Purity Tested</h4>
                    <p className="text-xs text-white/60 leading-relaxed font-medium uppercase tracking-wider">SGS & FSSAI certified processing plants.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img 
                className="relative z-10 rounded-[2.5rem] shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-1000 aspect-[4/5] object-cover border-8 border-white/5" 
                alt="Logistics warehouse" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Ac7xnDr9pNAP0uNOdAsqpPNy_5zuZTSIr8xUn7WKFIK9TH7R3haK9L4mFyuvGalNtuclM4gcV48BkkLnc77ZA4nZ3nGCxrAZtqwgrHyfbL-iHLHMbNCAIcPmF1kM-B28NqbyKko5tIos8mIdxGjgyfVpiDAIgJ9IOqFkk0PByqebr8aZaeFnZNcwAoL_i2oUw1n2xryK4fovi8BoHrJHFPbOr4axpbEAl-2UXGqTlxTUegxA1u5WDqmFUyb-MiMrL7yHHCBoSb8"
              />
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
