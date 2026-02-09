import { 
  ArrowRight, Flame, Droplets, Zap,
  CheckCircle2, Target, Sparkles, Wind,
  Box, BarChart3, Clock,
  Truck, Zap as ZapIcon
} from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';

interface TechnicalMetric {
  label: string;
  value: string;
  description: string;
  icon: any;
}

interface ProductProfile {
  id: string;
  category: string;
  name: string;
  tagline: string;
  image: string;
  abstract: string;
  valuePropositions: string[];
  sectors: string[];
  metrics: TechnicalMetric[];
  certification: string;
  advantages: { title: string; desc: string }[];
  comparison: { feature: string; shisha: string; bbq: string }[];
}

const ValueProp = ({ text }: { text: string }) => (
  <div className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300">
    <div className="flex-shrink-0 w-6 h-6 rounded-md bg-[#D4A34A]/20 flex items-center justify-center text-[#D4A34A] group-hover:bg-[#D4A34A]/40 transition-all duration-300">
      <CheckCircle2 className="h-3.5 w-3.5" />
    </div>
    <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">{text}</span>
  </div>
);

const MetricBlock = ({ metric }: { metric: TechnicalMetric }) => {
  const Icon = metric.icon;
  return (
    <div className="relative p-8 border-r border-b border-white/5 hover:bg-white/[0.03] transition-all duration-300 group">
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
        <Icon className="h-12 w-12 text-[#D4A34A]" />
      </div>
      <div className="relative z-10">
        <div className="text-5xl font-black text-[#D4A34A] mb-3 tracking-tight group-hover:text-white transition-colors duration-300">{metric.value}</div>
        <div className="text-[9px] font-black text-gray-500 uppercase tracking-[0.3em] mb-3">{metric.label}</div>
        <p className="text-[10px] text-gray-600 font-bold uppercase tracking-wider leading-relaxed">{metric.description}</p>
      </div>
    </div>
  );
};

const AdvantageCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="group relative p-5 bg-gradient-to-br from-white/[0.06] to-transparent border border-white/10 rounded-xl hover:border-[#D4A34A]/40 hover:from-white/[0.1] transition-all duration-300 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#D4A34A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    <div className="flex items-start gap-2 mb-2">
      <ZapIcon className="h-4 w-4 text-[#D4A34A] flex-shrink-0 mt-0.5" />
      <h4 className="text-sm font-bold text-white group-hover:text-[#D4A34A] transition-colors duration-300">{title}</h4>
    </div>
    <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'shisha' | 'bbq'>('shisha');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [showComparison, setShowComparison] = useState(false);
  const [flipped, setFlipped] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const productData: ProductProfile[] = useMemo(() => [
    {
      id: 'shisha',
      category: 'Premium Grade',
      name: 'Shisha Briquettes',
      tagline: 'Pure Excellence for Premium Markets',
      image: 'https://baracoco.com/wp-content/uploads/2022/11/mcbrikett-kokoko-coconut-charcoal-cubes-2kg-11859-p.jpg',
      abstract: 'Engineered for high-end shisha markets. 100% aged coconut shells ensure odorless, smokeless experience that preserves flavor integrity.',
      valuePropositions: [
        'Heat Consistency', 'Minimal Ash', 'Zero Sulfur', 'Compression Strength'
      ],
      sectors: ['Luxury Lounges', 'Premium Retail', 'Global Distribution'],
      metrics: [
        { label: 'Ash Content', value: '< 2.5%', description: 'Pure white residue', icon: Wind },
        { label: 'Moisture', value: '< 5%', description: 'Optimal ignition', icon: Droplets },
        { label: 'Fixed Carbon', value: '> 82%', description: 'Maximum efficiency', icon: Zap },
        { label: 'Burning Time', value: '150 min', description: 'Extended sessions', icon: Clock },
        { label: 'Caloric Value', value: '7500', description: 'Kcal/kg energy', icon: Flame }
      ],
      certification: 'Laboratory Tested | Proven Quality',
      advantages: [
        { title: 'Pure Flavor', desc: 'Zero interference with aromatics' },
        { title: 'Extended Sessions', desc: '120+ minutes consistent heat' },
        { title: 'Minimal Cleaning', desc: 'Ultra-low ash residue' },
        { title: 'Global Trust', desc: 'Used in 50+ countries' }
      ],
      comparison: [
        { feature: 'Carbon Content', shisha: '> 85%', bbq: '> 80%' },
        { feature: 'Ash Production', shisha: '< 3%', bbq: '< 4.5%' },
        { feature: 'Duration', shisha: '120 min', bbq: '180 min' },
        { feature: 'Temperature', shisha: '200-300°C', bbq: '400-600°C' }
      ]
    },
    {
      id: 'bbq',
      category: 'Industrial Grade',
      name: 'BBQ Briquettes',
      tagline: 'Maximum Heat for Professional Grilling',
      image: 'https://aboc.co.uk/cdn/shop/products/sawdust-briquettes-alight_grande.jpg?v=1726220080',
      abstract: 'Designed for commercial kitchens. Superior heat retention and steady burning profile for heavy-duty professional grilling demands.',
      valuePropositions: [
        'Heat Density', 'Temperature Control', 'Low Impurities', 'Sustainable'
      ],
      sectors: ['Steakhouses', 'Commercial Catering', 'Bulk Supply'],
      metrics: [
        { label: 'Ash Content', value: '< 5.5%', description: 'Easy cleanup', icon: Wind },
        { label: 'Moisture', value: '< 5%', description: 'Quick heat-up', icon: Droplets },
        { label: 'Fixed Carbon', value: '> 70%', description: 'Steady heat release', icon: Zap },
        { label: 'Burning Time', value: '360 min', description: 'Sustained performance', icon: Clock },
        { label: 'Caloric Value', value: '7300', description: 'Kcal/kg power', icon: Flame }
      ],
      certification: 'Heavy Duty Grade | Performance Tested',
      advantages: [
        { title: 'Maximum Output', desc: '7500 Kcal/kg sustained heat' },
        { title: 'Cost Efficient', desc: 'Lower consumption = better margins' },
        { title: 'Professional Grade', desc: 'Trusted by Michelin chefs' },
        { title: 'Easy Supply', desc: '10kg to ton bulk orders' }
      ],
      comparison: [
        { feature: 'Carbon Content', shisha: '> 85%', bbq: '> 80%' },
        { feature: 'Ash Production', shisha: '< 3%', bbq: '< 4.5%' },
        { feature: 'Duration', shisha: '120 min', bbq: '180 min' },
        { feature: 'Temperature', shisha: '200-300°C', bbq: '400-600°C' }
      ]
    }
  ], []);

  return (
    <section id="products" className="py-32 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
      
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#D4A34A]/15 to-transparent rounded-full blur-3xl opacity-25 animate-blob" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#D4A34A]/10 to-transparent rounded-full blur-3xl opacity-20 animate-blob" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-32">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 bg-[#D4A34A]/10 border border-[#D4A34A]/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#D4A34A] rounded-full animate-pulse" />
              <span className="text-[#D4A34A] font-bold text-sm uppercase tracking-wider">Premium Products</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Our <span className="text-transparent bg-gradient-to-r from-[#D4A34A] to-[#f3d382] bg-clip-text animate-shine">Signature Collection</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Bumi Charcoal offers two premium product lines engineered for excellence: shisha briquettes for high-end lounges and BBQ charcoal for professional kitchens. Both products are manufactured from 100% coconut shell, sustainably sourced and internationally certified. Each variant is optimized for specific applications with superior performance characteristics, consistent quality, and reliable supply chains.
            </p>
          </div>
        </div>

        {/* PRODUCT CARDS - Enhanced with better visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-32">
          {productData.map((product, idx) => (
            <div
              key={product.id}
              className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative group h-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#D4A34A]/40 hover:shadow-2xl hover:shadow-[#D4A34A]/20 backdrop-blur-xl">
                
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-[#D4A34A]/20 border border-[#D4A34A]/40 text-[#D4A34A] text-xs font-black uppercase rounded-lg backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-4xl font-black text-white mb-2 tracking-tight">{product.name}</h3>
                    <p className="text-[#D4A34A] text-sm font-bold">{product.tagline}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-10">
                  <p className="text-gray-300 text-base leading-relaxed mb-8 font-medium">
                    {product.abstract}
                  </p>

                  {/* Value Props Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-10">
                    {product.valuePropositions.map((prop, i) => (
                      <ValueProp key={i} text={prop} />
                    ))}
                  </div>

                  {/* Sectors/Applications */}
                  <div className="mb-10 pb-10 border-b border-white/5">
                    <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Target className="h-4 w-4 text-[#D4A34A]" /> Best For
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.sectors.map((sector, i) => (
                        <span key={i} className="px-3 py-2 bg-[#D4A34A]/15 border border-[#D4A34A]/30 rounded-lg text-[11px] text-[#D4A34A] font-bold uppercase tracking-wider">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Advantages Grid */}
                  <div className="mb-10">
                    <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#D4A34A]" /> Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.advantages.map((adv, i) => (
                        <AdvantageCard key={i} title={adv.title} desc={adv.desc} />
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full group/btn relative py-4 bg-gradient-to-r from-[#D4A34A] to-[#f3d382] text-black font-black text-sm uppercase tracking-wide rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#D4A34A]/50 hover:scale-105">
                    <span className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                    <span className="relative flex items-center justify-center gap-2">
                      Get Details <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* COMPARISON TABLE - Improved styling */}
        <div className={`relative transition-all duration-1000 delay-300 mb-32 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="group px-8 py-4 bg-white/[0.06] border border-white/10 hover:border-[#D4A34A]/30 rounded-xl text-white font-bold text-sm uppercase tracking-wide transition-all hover:bg-white/10 flex items-center gap-3"
            >
              <BarChart3 className="h-5 w-5 text-[#D4A34A]" />
              {showComparison ? '← Hide Comparison' : 'Compare Products →'}
            </button>
          </div>

          {showComparison && (
            <div className={`overflow-x-auto bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 rounded-2xl transition-all duration-500 ${showComparison ? 'opacity-100' : 'opacity-0'}`}>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="px-6 py-5 text-left font-black text-white text-xs uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-5 text-left font-black text-[#D4A34A] text-xs uppercase tracking-wider">Shisha</th>
                    <th className="px-6 py-5 text-left font-black text-[#D4A34A] text-xs uppercase tracking-wider">BBQ</th>
                  </tr>
                </thead>
                <tbody>
                  {productData[0].comparison.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 font-bold text-white text-sm">{row.feature}</td>
                      <td className="px-6 py-4 text-[#D4A34A] text-sm font-semibold">{row.shisha}</td>
                      <td className="px-6 py-4 text-[#D4A34A] text-sm font-semibold">{row.bbq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* SPECIFICATIONS DASHBOARD */}
        <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl">
            
            {/* Header */}
            <div className="p-12 md:p-16 border-b border-white/5 bg-gradient-to-r from-white/[0.05] to-transparent">
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
                <div>
                  <p className="text-[#D4A34A] text-xs font-black uppercase tracking-widest mb-4">Performance Data</p>
                  <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    Technical <span className="text-[#D4A34A]">Specs</span>
                  </h3>
                </div>

                <div className="flex gap-3 bg-white/[0.06] p-2 rounded-xl border border-white/10 backdrop-blur-xl">
                  {['shisha', 'bbq'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab as any)}
                      className={`px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-wide transition-all duration-300 ${
                        activeTab === tab 
                          ? 'bg-[#D4A34A] text-black shadow-lg shadow-[#D4A34A]/40' 
                          : 'text-gray-500 hover:text-white'
                      }`}
                    >
                      {tab === 'shisha' ? 'Shisha' : 'BBQ'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {productData.find(p => p.id === activeTab)?.metrics.map((metric, i) => (
                <MetricBlock key={i} metric={metric} />
              ))}
            </div>

            {/* Footer */}
            <div className="px-12 py-8 bg-gradient-to-r from-white/[0.02] to-transparent border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-bold uppercase tracking-wider">
                  <Truck className="h-4 w-4 text-[#D4A34A]" />
                  Worldwide Shipping
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2 text-xs text-gray-500 font-bold uppercase tracking-wider">
                  <Box className="h-4 w-4 text-[#D4A34A]" />
                  10kg / 20kg Packaging
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 font-bold uppercase tracking-wider">
                <Sparkles className="h-4 w-4 text-[#D4A34A]" />
                Quality Guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        @keyframes shine {
          0%, 100% { background-position: 200% center; }
          50% { background-position: -200% center; }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-shine {
          background-size: 200% auto;
          animation: shine 4s linear infinite;
        }
      `}</style>
    </section>
  );
}