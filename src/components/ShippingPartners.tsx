import { Ship, Globe, Zap, TrendingUp, ArrowRight, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

const partners = [
  { name: 'PIL', region: 'Asia-Pacific' },
  { name: 'MSC', region: 'Global' },
  { name: 'CMA CGM', region: 'Global' },
  { name: 'ESL', region: 'Middle East' },
  { name: 'ASYAD', region: 'Middle East' },
  { name: 'ONE', region: 'Asia-Pacific' },
  { name: 'SITC', region: 'Asia-Europe' }
];

// 1. Update data dengan ISO Code untuk memanggil SVG Flag yang lebih tajam
const countries = [
  { name: 'UAE', code: 'ae', region: 'Middle East' },
  { name: 'Saudi Arabia', code: 'sa', region: 'Middle East' },
  { name: 'Qatar', code: 'qa', region: 'Middle East' },
  { name: 'Egypt', code: 'eg', region: 'North Africa' },
  { name: 'Turkey', code: 'tr', region: 'Eurasia' },
  { name: 'India', code: 'in', region: 'South Asia' },
  { name: 'Singapore', code: 'sg', region: 'Southeast Asia' },
  { name: 'Malaysia', code: 'my', region: 'Southeast Asia' },
  { name: 'China', code: 'cn', region: 'East Asia' },
  { name: 'Japan', code: 'jp', region: 'East Asia' },
  { name: 'South Korea', code: 'kr', region: 'East Asia' }
];

// 2. Component Grid yang lebih "Tinggi" & Premium
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
  {countries.map((country, idx) => (
    <div
      key={idx}
      className="group relative flex flex-col items-center justify-between p-8 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-amber-500/50 hover:bg-zinc-800/40 transition-all duration-500 cursor-default overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-amber-500/5 blur-[50px] group-hover:bg-amber-500/10 transition-all duration-500" />

      {/* Flag Container - Ditinggikan dengan aspek rasio yang pas */}
      <div className="mb-6 relative">
        <div className="w-16 h-12 overflow-hidden rounded shadow-lg border border-zinc-700/50 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500">
          <img 
            src={`https://flagcdn.com/${country.code}.svg`} 
            alt={country.name}
            className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all"
          />
        </div>
        {/* Status Indicator */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-zinc-900 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
      </div>

      {/* Text Info */}
      <div className="text-center">
        <h4 className="text-white font-bold text-sm tracking-[0.1em] uppercase mb-1 group-hover:text-amber-500 transition-colors">
          {country.name}
        </h4>
        <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">
          {country.region}
        </p>
      </div>

      {/* Hover Line Decoration */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent group-hover:w-full transition-all duration-700" />
    </div>
  ))}
</div>
export default function ShippingPartners() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="shipping" className="py-32 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#D4A34A]/15 to-transparent rounded-full blur-3xl opacity-20 animate-blob" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-[#D4A34A]/10 to-transparent rounded-full blur-3xl opacity-15 animate-blob" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 bg-[#D4A34A]/10 border border-[#D4A34A]/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#D4A34A] rounded-full animate-pulse" />
              <span className="text-[#D4A34A] font-bold text-sm uppercase tracking-wider">Global Network</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Shipping <span className="text-transparent bg-gradient-to-r from-[#D4A34A] to-[#f3d382] bg-clip-text animate-shine">Partners</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Partnering with world-class logistics providers to deliver excellence across the globe
            </p>
          </div>
        </div>

        {/* Partners Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 mb-24 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
              onMouseEnter={() => setHoveredPartner(index)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              <div className="relative group h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-[#D4A34A]/40 hover:shadow-2xl hover:shadow-[#D4A34A]/20 hover:scale-110 overflow-hidden backdrop-blur-xl">
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4A34A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                  <div className="mb-4 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                    <Ship className="h-8 w-8 md:h-10 md:w-10 text-[#D4A34A] mx-auto group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-white font-black text-sm md:text-base mb-2 group-hover:text-[#D4A34A] transition-colors duration-300">
                    {partner.name}
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 font-bold uppercase tracking-wider">
                    {partner.region}
                  </p>
                </div>

                {/* Border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, rgba(212, 163, 74, 0.1) 50%, transparent 100%)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Main Stats Card */}
        <div className={`transform transition-all duration-1000 delay-300 mb-24 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative group bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#D4A34A]/40 hover:shadow-2xl hover:shadow-[#D4A34A]/20 backdrop-blur-xl p-12 md:p-16">
            
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4A34A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4 group-hover:text-[#D4A34A] transition-colors duration-300">
                  Global Reach <span className="text-[#D4A34A] group-hover:text-white transition-colors duration-300">20+ Countries</span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                  From Asia to Europe, Middle East to Africa, our world-class logistics network ensures your orders arrive fresh, on time, and in perfect condition.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 py-12 border-y border-white/10">
                {[
                  { icon: Globe, label: 'Worldwide Export Ready', value: '20+' },
                  { icon: Ship, label: 'Integrated Production Hub', value: '7' },
                  { icon: TrendingUp, label: 'Monthly Production Capacity', value: '1000+' }
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="text-center group/stat">
                      <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 rounded-xl bg-[#D4A34A]/20 flex items-center justify-center group-hover/stat:bg-[#D4A34A]/40 group-hover/stat:scale-125 transition-all duration-300">
                          <Icon className="h-7 w-7 text-[#D4A34A]" />
                        </div>
                      </div>
                      <p className="text-3xl font-black text-white mb-2 group-hover/stat:text-[#D4A34A] transition-colors duration-300">{stat.value}</p>
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Countries Grid */}
              <div>
                <p className="text-xs text-gray-400 font-black uppercase tracking-wider mb-6">Primary Destination Focus</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                  {countries.map((country, idx) => (
                    <div
                      key={idx}
                      className={`group/country transform transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${400 + idx * 30}ms` }}
                    >
                      <div className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-xl p-4 text-center hover:border-[#D4A34A]/40 hover:bg-white/[0.1] transition-all duration-300 hover:scale-110 overflow-hidden cursor-pointer">
                        <p className="text-2xl mb-2 group-hover/country:scale-125 transition-transform duration-300">{country.code.toUpperCase()}</p>
                          <p className="text-xs font-bold text-gray-400 group-hover/country:text-[#D4A34A] transition-colors duration-300 uppercase tracking-wider">
                          {country.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`transform transition-all duration-1000 delay-500 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to expand your reach to international markets? Our logistics expertise is here to support your growth.
          </p>
          <a href="#contact" className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#D4A34A] to-[#f3d382] text-black rounded-xl font-bold uppercase tracking-wider transition-all hover:shadow-2xl hover:shadow-[#D4A34A]/50 hover:scale-110">
            Start Shipping Today
            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </a>
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
