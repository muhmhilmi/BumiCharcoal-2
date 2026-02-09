import { 
  Ship, 
  Globe, 
  Wind, 
  Anchor, 
  TrendingUp, 
  ArrowRight, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  FileCheck,
  Leaf
} from 'lucide-react';
import { useEffect, useState } from 'react';

// --- DATA CONFIGURATION ---

const shippingCapabilities = [
  { 
    icon: Globe, 
    title: 'Export Ready', 
    description: 'Fully licensed and compliant with international trade regulations for smooth customs clearance.',
    color: 'from-blue-500/20',
    border: 'group-hover:border-blue-500/50'
  },
  { 
    icon: Ship, 
    title: 'Freight Solutions', 
    description: 'Partnering with trusted freight forwarders to ensure your cargo arrives safely and on schedule.',
    color: 'from-cyan-500/20',
    border: 'group-hover:border-cyan-500/50'
  },
  { 
    icon: Leaf, 
    title: 'Eco Packaging', 
    description: 'Secure and sustainable packaging standards to maintain briquette quality during transit.',
    color: 'from-teal-500/20',
    border: 'group-hover:border-teal-500/50'
  },
  { 
    icon: Anchor, 
    title: 'Port Access', 
    description: 'Strategically located near major Indonesian ports for efficient container loading.',
    color: 'from-green-500/20',
    border: 'group-hover:border-green-500/50'
  }
];

const coreValues = [
  { 
    label: 'Legal Compliance', 
    value: '100%', 
    icon: FileCheck,
    desc: 'Export Documents'
  },
  { 
    label: 'Product Quality', 
    value: 'Premium', 
    icon: ShieldCheck,
    desc: 'Quality Control'
  },
  { 
    label: 'Sourcing', 
    value: 'Sustainable', 
    icon: Leaf,
    desc: 'Eco-Friendly'
  },
  { 
    label: 'Support', 
    value: '24/7', 
    icon: Clock,
    desc: 'Responsive Team'
  },
];

// DATA UPDATE: Deskripsi dibuat fleksibel (Tergantung Request Buyer)
const targetRegions = [
  { 
    region: 'Middle East', 
    coordinate: 'Target Market',
    countries: [
      { name: 'UAE', code: 'ae' },
      { name: 'Saudi Arabia', code: 'sa' },
      { name: 'Qatar', code: 'qa' },
      { name: 'Kuwait', code: 'kw' }
    ],
    // Dibuat umum: Siap supply berbagai grade sesuai spek pembeli
    description: 'Ready to supply various charcoal grades tailored to your specific market requirements.',
    color: 'from-orange-500/20',
    accent: 'text-orange-400'
  },
  { 
    region: 'Southeast Asia', 
    coordinate: 'Regional Hub',
    countries: [
      { name: 'Singapore', code: 'sg' },
      { name: 'Malaysia', code: 'my' },
      { name: 'Thailand', code: 'th' },
      { name: 'Vietnam', code: 'vn' }
    ],
    // Dibuat umum: Fokus ke kemudahan distribusi
    description: 'Fast distribution network supporting both commercial and industrial orders.',
    color: 'from-blue-500/20',
    accent: 'text-blue-400'
  },
  { 
    region: 'East Asia', 
    coordinate: 'High Potential',
    countries: [
      { name: 'China', code: 'cn' },
      { name: 'Japan', code: 'jp' },
      { name: 'South Korea', code: 'kr' }
    ],
    // Dibuat umum: Fokus ke standar kualitas, bukan jenis arang tertentu
    description: 'Meeting strict quality standards for diverse applications and product types.',
    color: 'from-purple-500/20',
    accent: 'text-purple-400'
  },
  { 
    region: 'South Asia', 
    coordinate: 'Emerging Market',
    countries: [
      { name: 'India', code: 'in' },
      { name: 'Pakistan', code: 'pk' },
      { name: 'Bangladesh', code: 'bd' }
    ],
    // Dibuat umum: Bisa supply skala besar untuk apa saja
    description: 'Scalable supply solutions for bulk orders across all charcoal categories.',
    color: 'from-pink-500/20',
    accent: 'text-pink-400'
  }
];

export default function ShippingPartners() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="shipping" 
      className="py-32 bg-[#050505] relative overflow-hidden"
    >
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#D4A34A]/10 to-transparent rounded-full blur-[100px] opacity-20 animate-blob" 
        />
        <div 
          className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-gradient-to-tr from-[#D4A34A]/5 to-transparent rounded-full blur-[120px] opacity-10 animate-blob" 
          style={{ animationDelay: '3s' }} 
        />
      </div>

      <div 
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"
      ></div>
      
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
      ></div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            <div className="inline-flex items-center gap-3 bg-[#D4A34A]/5 border border-[#D4A34A]/20 rounded-full px-5 py-2 mb-8 backdrop-blur-md hover:bg-[#D4A34A]/10 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A34A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4A34A]"></span>
              </span>
              <span className="text-[#D4A34A] font-bold text-xs uppercase tracking-[0.2em]">Open For Partnership</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              Ready to <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-gradient-to-r from-[#D4A34A] via-[#F3D382] to-[#D4A34A] bg-clip-text bg-[length:200%_auto] animate-shine">
                  Ship Globally
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#D4A34A]/20 blur-sm"></div>
              </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              We are committed to delivering premium Indonesian charcoal to your destination. 
              Safe handling, transparent pricing, and trusted logistics partners.
            </p>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 border-y border-white/5 py-8 bg-white/[0.02] backdrop-blur-sm transform transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {coreValues.map((stat, idx) => (
            <div key={idx} className="text-center group hover:bg-white/5 p-4 rounded-xl transition-colors cursor-default">
              <div className="flex justify-center mb-3">
                <stat.icon className="w-6 h-6 text-[#D4A34A] opacity-80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-[#D4A34A] font-bold uppercase mb-1">{stat.label}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* CAPABILITIES GRID */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {shippingCapabilities.map((capability, idx) => {
            const Icon = capability.icon;
            return (
              <div
                key={idx}
                className="transform transition-all duration-700 hover:-translate-y-2"
                style={{ transitionDelay: `${idx * 100}ms` }}
                onMouseEnter={() => setHoveredCapability(idx)}
                onMouseLeave={() => setHoveredCapability(null)}
              >
                <div className={`group relative h-full bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 transition-all duration-500 overflow-hidden ${
                  hoveredCapability === idx ? 'border-[#D4A34A]/50 shadow-2xl shadow-[#D4A34A]/10' : ''
                }`}>
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b ${capability.color} to-transparent pointer-events-none`} />
                  
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center group-hover:bg-[#D4A34A] group-hover:border-[#D4A34A] transition-all duration-300">
                      <Icon className={`w-6 h-6 transition-colors duration-300 ${hoveredCapability === idx ? 'text-black' : 'text-[#D4A34A]'}`} />
                    </div>
                  </div>
                  
                  <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-[#D4A34A] transition-colors">
                    {capability.title}
                  </h3>
                  <p className="relative text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4 mt-4">
                    {capability.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* TARGET MARKETS */}
        <div className={`relative transform transition-all duration-1000 delay-300 mb-24 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                Target <span className="text-[#D4A34A]">Markets</span>
              </h3>
              <p className="text-gray-400 max-w-md">
                Our team is ready to facilitate shipments to these key regions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetRegions.map((region, idx) => (
              <div 
                key={idx}
                className="group relative bg-[#080808] border border-white/10 rounded-[2rem] p-8 overflow-hidden hover:border-[#D4A34A]/40 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 p-6 opacity-30">
                  <Globe className={`w-12 h-12 ${region.accent} opacity-20 group-hover:rotate-12 transition-transform duration-700`} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <div className="text-[10px] font-mono text-gray-500 mb-2 flex items-center gap-2 uppercase tracking-wider">
                        <MapPin className="w-3 h-3" />
                        {region.coordinate}
                      </div>
                      <h4 className={`text-2xl font-black text-white group-hover:${region.accent} transition-colors duration-300`}>
                        {region.region}
                      </h4>
                    </div>
                  </div>

                  {/* Countries Grid - Updated with Real Flag Images from FlagCDN */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {region.countries.map((country, cidx) => (
                      <div 
                        key={cidx}
                        className="flex items-center gap-3 px-4 py-3 bg-white/[0.03] border border-white/[0.05] rounded-xl hover:bg-[#D4A34A]/10 hover:border-[#D4A34A]/30 transition-all duration-300 group/country"
                      >
                        {/* Container Bendera */}
                        <div className="relative w-8 h-6 rounded overflow-hidden shadow-sm group-hover/country:scale-110 transition-transform flex-shrink-0">
                           <img 
                              src={`https://flagcdn.com/${country.code}.svg`} 
                              alt={`${country.name} flag`}
                              className="w-full h-full object-cover"
                           />
                        </div>
                        <span className="text-gray-300 font-bold text-xs tracking-wide group-hover/country:text-[#D4A34A] transition-colors">
                          {country.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                      {region.description}
                    </p>
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${region.color} to-transparent opacity-50 group-hover:opacity-100 transition-opacity`} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className={`transform transition-all duration-1000 delay-500 text-center pb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-block relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4A34A] to-[#f3d382] rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
            
            <a 
              href="#contact" 
              className="relative flex items-center gap-4 px-12 py-6 bg-[#0F0F0F] border border-[#D4A34A]/30 text-white rounded-2xl font-bold uppercase tracking-widest transition-all hover:bg-[#151515] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4A34A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <TrendingUp className="w-5 h-5 text-[#D4A34A]" />
              <span>Contact Our Team</span>
              <ArrowRight className="w-5 h-5 text-[#D4A34A] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <p className="mt-8 text-gray-600 text-sm">
            Discuss your requirements and get a transparent quote.
          </p>
        </div>

      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-blob {
          animation: blob 10s infinite alternate;
        }
        .animate-shine {
          animation: shine 4s linear infinite;
        }
      `}</style>
    </section>
  );
}