import { Leaf, Flame, Shield, Wind, Droplet, Award, Clock, TrendingUp, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const features = [
  {
    icon: Flame,
    title: 'Low Ash Content',
    description: 'Minimal residue ensures cleaner burning and easier cleanup',
    color: 'from-orange-500/20'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainably sourced materials from renewable resources',
    color: 'from-green-500/20'
  },
  {
    icon: Clock,
    title: 'Long-Lasting Burn',
    description: 'Extended burning time for maximum efficiency and value',
    color: 'from-blue-500/20'
  },
  {
    icon: Wind,
    title: 'Odorless Operation',
    description: 'Clean combustion with minimal smoke and no unpleasant odors',
    color: 'from-cyan-500/20'
  },
  {
    icon: Shield,
    title: 'No Chemicals',
    description: '100% natural product with zero chemical additives',
    color: 'from-red-500/20'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Rigorous quality control and international certifications',
    color: 'from-yellow-500/20'
  },
  {
    icon: Droplet,
    title: 'Low Moisture',
    description: 'Optimal moisture content for efficient and consistent burning',
    color: 'from-purple-500/20'
  },
  {
    icon: TrendingUp,
    title: 'Consistent Heat',
    description: 'Reliable and stable heat output throughout the burn',
    color: 'from-pink-500/20'
  }
];

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0a0a0a] relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-gradient-to-r from-[#D4A34A]/15 to-transparent rounded-full blur-3xl opacity-25 animate-blob" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-l from-[#D4A34A]/10 to-transparent rounded-full blur-3xl opacity-20 animate-blob" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-[#D4A34A]/10 border border-[#D4A34A]/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#D4A34A] rounded-full animate-pulse" />
              <span className="text-[#D4A34A] font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              Why <span className="text-transparent bg-gradient-to-r from-[#D4A34A] to-[#f3d382] bg-clip-text animate-shine">Bumi Charcoal</span> Stands Out
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Eight compelling reasons why industry leaders trust us for premium charcoal solutions
            </p>
          </div>
        </div>

        {/* Features Grid dengan enhanced interactivity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative group h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-[#D4A34A]/50 hover:shadow-2xl hover:shadow-[#D4A34A]/20">
                  {/* Animated gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                  
                  {/* Icon container dengan enhanced animation */}
                  <div className={`relative mb-6 transform transition-all duration-500 ${isHovered ? 'scale-125 -rotate-12' : 'scale-100 rotate-0'}`}>
                    <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${feature.color}`} />
                    <div className="bg-gradient-to-br from-[#D4A34A]/30 to-[#D4A34A]/5 w-16 h-16 rounded-2xl flex items-center justify-center relative z-10 group-hover:from-[#D4A34A]/40 group-hover:to-[#D4A34A]/15 transition-all duration-500">
                      <Icon className={`h-8 w-8 text-[#D4A34A] transition-all duration-500 ${isHovered ? 'scale-150' : 'scale-100'}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-black mb-4 transition-all duration-500 tracking-tight ${isHovered ? 'text-[#D4A34A] translate-x-2' : 'text-white'}`}>
                    {feature.title}
                  </h3>
                  <p className={`transition-all duration-500 leading-relaxed text-sm ${isHovered ? 'text-gray-200' : 'text-gray-400'}`}>
                    {feature.description}
                  </p>

                  {/* Animated bottom line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#D4A34A] to-[#f3d382] transition-all duration-500 ${isHovered ? 'w-full' : 'w-0'}`} />
                  
                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-1 h-1 bg-[#D4A34A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className={`transform transition-all duration-1000 delay-500 mt-24 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Ready to experience the Bumi Charcoal difference? Our premium products are trusted by thousands of businesses worldwide.
          </p>
          <a href="#products" className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#D4A34A] to-[#f3d382] text-black rounded-xl font-bold uppercase tracking-wider transition-all hover:shadow-2xl hover:shadow-[#D4A34A]/50 hover:scale-110">
            <Zap className="h-5 w-5" />
            Explore Our Products
            <span className="group-hover:translate-x-2 transition-transform">→</span>
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
