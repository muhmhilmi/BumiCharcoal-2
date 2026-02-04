import { Award, Globe, Shield, Users, ArrowRight, Check } from 'lucide-react';
import { useEffect, useState } from 'react';

interface AboutFeature {
  icon: any;
  title: string;
  desc: string;
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: AboutFeature[] = [
    { icon: Award, title: 'Excellence', desc: 'Premium quality standards' },
    { icon: Globe, title: 'Global', desc: 'Trusted in 50+ countries' },
    { icon: Shield, title: 'Reliable', desc: 'Proven track record' },
    { icon: Users, title: 'Expert', desc: 'Professional team' }
  ];

  const certifications = [
    { icon: '✓', name: 'Ministry Trade', badge: 'Official' },
    { icon: '✓', name: 'MSDS Certified', badge: 'Verified' },
    { icon: '✓', name: '100% Natural', badge: 'Pure' },
    { icon: '✓', name: 'Tested Quality', badge: 'Guaranteed' }
  ];

  return (
    <section id="company" className="py-32 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/2 right-1/3 w-[800px] h-[800px] bg-gradient-to-br from-[#D4A34A]/15 to-transparent rounded-full blur-3xl opacity-25 animate-blob" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#D4A34A]/10 to-transparent rounded-full blur-3xl opacity-20 animate-blob" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-24 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-[#D4A34A]/10 border border-[#D4A34A]/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#D4A34A] rounded-full animate-pulse" />
            <span className="text-[#D4A34A] font-bold text-sm uppercase tracking-wider">Our Story</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            About <span className="text-transparent bg-gradient-to-r from-[#D4A34A] to-[#f3d382] bg-clip-text animate-shine">Bumi Charcoal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Pioneering premium charcoal solutions with unwavering commitment to quality, sustainability, and global excellence
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Content */}
          <div>
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-4xl font-black text-white mb-8">
                Crafted with <span className="text-[#D4A34A]">Precision</span>
              </h3>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed font-medium">
                PT Bumi Perkasa Nan Jaya stands as a beacon of excellence in the charcoal industry. With years of dedicated expertise, we've developed a reputation for delivering premium quality products that exceed international standards.
              </p>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Our commitment to sustainability and innovation ensures that every product bearing the Bumi Charcoal name represents uncompromising quality and environmental responsibility.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                {['Sustainable sourcing practices', 'State-of-the-art facilities', 'Rigorous quality control', 'Global distribution network'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-[#D4A34A]/20 flex items-center justify-center group-hover:bg-[#D4A34A]/40 transition-all duration-300">
                      <Check className="h-4 w-4 text-[#D4A34A]" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="group inline-flex items-center gap-3 mt-10 px-8 py-4 bg-gradient-to-r from-[#D4A34A] to-[#f3d382] text-black rounded-xl font-bold uppercase tracking-wider hover:shadow-xl hover:shadow-[#D4A34A]/40 transition-all hover:scale-105">
                Partner With Us
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className={`relative transform transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden group">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A34A]/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="absolute inset-[2px] bg-[#0a0a0a] rounded-3xl" />
              </div>

              <img
                src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Charcoal Production"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A34A]/30 via-transparent to-black/30 group-hover:from-[#D4A34A]/40 transition-all duration-500" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)'
                }}
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-[#D4A34A] to-[#f3d382] p-8 rounded-3xl shadow-2xl shadow-[#D4A34A]/40 group-hover:scale-110 transition-all duration-500">
              <div className="text-black">
                <div className="text-5xl font-black mb-2">10+</div>
                <div className="text-sm font-bold uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`group h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-500 ${
                  hoveredCard === idx ? 'border-[#D4A34A]/40 bg-white/[0.08] shadow-xl shadow-[#D4A34A]/20' : 'hover:border-[#D4A34A]/20'
                } relative`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#D4A34A]/20 rounded-xl group-hover:bg-[#D4A34A]/30 transition-all duration-300">
                      <Icon className={`h-6 w-6 text-[#D4A34A] transition-transform duration-300 ${hoveredCard === idx ? 'scale-125' : ''}`} />
                    </div>
                    <div className="w-2 h-2 bg-[#D4A34A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h4 className={`text-xl font-bold mb-2 transition-colors duration-300 ${hoveredCard === idx ? 'text-[#D4A34A]' : 'text-white'}`}>
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {feature.desc}
                  </p>
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#D4A34A] to-transparent transition-all duration-500 ${hoveredCard === idx ? 'w-full' : 'w-0'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div id="certificates" className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-white">
              Standards & <span className="text-transparent bg-gradient-to-r from-[#D4A34A] to-[#f3d382] bg-clip-text animate-shine">Certifications</span>
            </h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Backed by rigorous testing and quality assurance</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`group transform transition-all duration-700 hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 100 + 500}ms` }}
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-2xl p-8 text-center overflow-hidden group-hover:border-[#D4A34A]/40 group-hover:from-white/[0.12] transition-all duration-500">
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4A34A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  
                  <div className="mb-4 text-4xl font-black text-[#D4A34A]">{cert.icon}</div>
                  <h4 className="text-white font-bold mb-2 group-hover:text-[#D4A34A] transition-colors duration-300">
                    {cert.name}
                  </h4>
                  <span className="inline-block px-3 py-1 bg-[#D4A34A]/20 text-[#D4A34A] text-xs font-bold uppercase rounded-full">
                    {cert.badge}
                  </span>
                </div>
              </div>
            ))}
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
