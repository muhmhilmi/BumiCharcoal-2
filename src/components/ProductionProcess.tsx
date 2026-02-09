import { Flame, Droplet, Wind, Package, CheckCircle, Zap, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const processSteps = [
  {
    icon: Flame,
    title: 'Material Selection',
    description: 'Premium coconut shells & hardwood from sustainable sources. Rigorous batch inspection ensures excellence.',
    image: 'https://fasmpo.com/image/catalog/v%E1%BB%8F%20d%E1%BB%ABa%20kh%C3%B4/Ung-dung-cua-vo-dua-kho-trong-doi-song.jpg',
    color: 'from-orange-500/20'
  },
  {
    icon: Zap,
    title: 'Carbonization',
    description: 'Specialized kilns at controlled temperatures. Process removes moisture & volatiles for premium quality.',
    image: 'https://tokomesinkelapa.com/wp-content/uploads/2025/07/briket-arang.jpeg',
    color: 'from-yellow-500/20'
  },
  {
    icon: Wind,
    title: 'Cooling & Screening',
    description: 'Gradual cooling preserves quality. Screens ensure uniform size and remove all impurities.',
    image: 'https://id-test-11.slatic.net/p/1c61ddad46723dbdbe18e7f0e591d72b.jpg',
    color: 'from-blue-500/20'
  },
  {
    icon: Droplet,
    title: 'Quality Testing',
    description: 'Tested for ash content, moisture, and burning performance.',
    image: 'https://static.wixstatic.com/media/nsplsh_7854646f486f5846684e73~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_7854646f486f5846684e73~mv2_d_6000_4000_s_4_2.jpg',
    color: 'from-cyan-500/20'
  },
  {
    icon: Package,
    title: 'Packaging',
    description: 'Moisture-proof bags with multiple size options. Premium protection for every shipment.',
    image: 'https://jasaforwarderekspor.com/mymedia/2024/01/Cargo-Groupage-1.webp',
    color: 'from-purple-500/20'
  },
  {
    icon: CheckCircle,
    title: 'Global Distribution',
    description: 'Optimal storage conditions and trusted logistics partners. Shipping to 50+ countries worldwide.',
    image: 'https://d9qdiq7a7hdin.cloudfront.net/public/hub/post_image/shipping-process-artinya-arahin.id.jpg',
    color: 'from-green-500/20'
  }
];

export default function ProductionProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="process" className="py-32 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-r from-[#D4A34A]/15 to-transparent rounded-full blur-3xl opacity-25 animate-blob" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/4 right-0 w-[700px] h-[700px] bg-gradient-to-l from-[#D4A34A]/10 to-transparent rounded-full blur-3xl opacity-20 animate-blob" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 bg-[#D4A34A]/10 border border-[#D4A34A]/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#D4A34A] rounded-full animate-pulse" />
              <span className="text-[#D4A34A] font-bold text-sm uppercase tracking-wider">How We Make It</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Our <span className="text-transparent bg-gradient-to-r from-[#D4A34A] to-[#f3d382] bg-clip-text animate-shine">Production Process</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              At Bumi Charcoal, we maintain stringent quality standards throughout our six-step production process. From carefully selecting premium coconut shell raw materials to final packaging and global distribution, each phase is meticulously engineered to ensure consistent excellence. Our production facilities meet international environmental and safety standards, utilizing advanced carbonization technology and rigorous quality testing to deliver charcoal products that exceed customer expectations in every market we serve.
            </p>
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block mb-24">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4A34A]/40 to-transparent rounded-full" />

            {/* Steps Grid */}
            <div className="grid grid-cols-6 gap-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                
                return (
                  <div
                    key={index}
                    className={`transform transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    <div className="flex flex-col items-center">
                      {/* Step circle */}
                      <div className={`relative mb-4 transform transition-all duration-300 ${isActive ? 'scale-125' : 'scale-100'}`}>
                        <div className={`absolute inset-0 rounded-full blur-lg transition-all duration-300 ${isActive ? 'bg-[#D4A34A]/50 w-24 h-24' : 'bg-transparent w-0 h-0'}`} />
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 border-2 ${
                          isActive 
                            ? 'bg-gradient-to-br from-[#D4A34A] to-[#f3d382] border-white shadow-2xl shadow-[#D4A34A]/60' 
                            : 'bg-white/[0.08] border-white/20 hover:border-[#D4A34A]/50 backdrop-blur-xl'
                        }`}>
                          <Icon className={`h-10 w-10 transition-all duration-300 ${isActive ? 'text-black scale-125' : 'text-[#D4A34A]'}`} />
                        </div>
                      </div>
                      
                      {/* Step title */}
                      <h3 className={`text-center font-bold text-sm transition-all duration-300 ${isActive ? 'text-[#D4A34A] text-base' : 'text-gray-400'}`}>
                        {step.title}
                      </h3>
                      
                      {/* Step number */}
                      <p className={`text-xs mt-2 transition-all duration-300 ${isActive ? 'text-[#D4A34A]/80' : 'text-gray-600'}`}>
                        Step {index + 1}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detail Card Desktop */}
          <div className={`mt-24 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 backdrop-blur-xl ${activeStep >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 h-[450px]">
              {/* Image */}
              <div className="relative overflow-hidden group bg-gradient-to-br from-white/5 to-transparent">
                <img 
                  src={processSteps[activeStep].image} 
                  alt={processSteps[activeStep].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4A34A]/30 via-transparent to-black/40" />
              </div>

              {/* Content */}
              <div className="p-12 flex flex-col justify-center relative overflow-hidden">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${processSteps[activeStep].color}`} />
                
                <div className="relative z-10">
                  <div className="text-7xl font-black text-white/10 mb-4">
                    {String(activeStep + 1).padStart(2, '0')}
                  </div>
                  
                  <h3 className="text-4xl font-black text-white mb-4 group-hover:text-[#D4A34A] transition-colors duration-300">
                    {processSteps[activeStep].title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 font-medium">
                    {processSteps[activeStep].description}
                  </p>

                  {/* Progress bar */}
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Progress</p>
                    <div className="flex gap-2">
                      {processSteps.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            idx <= activeStep 
                              ? 'bg-gradient-to-r from-[#D4A34A] to-[#f3d382] w-12' 
                              : 'bg-white/20 w-3'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isOpen = activeStep === index;
            
            return (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <button
                  onClick={() => setActiveStep(isOpen ? -1 : index)}
                  className={`w-full group text-left transition-all duration-300 rounded-2xl p-6 border ${
                    isOpen 
                      ? 'bg-gradient-to-br from-white/[0.12] to-white/[0.02] border-[#D4A34A]/40 shadow-xl shadow-[#D4A34A]/20' 
                      : 'bg-white/[0.06] border-white/10 hover:border-[#D4A34A]/30 hover:bg-white/[0.08]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? 'bg-gradient-to-br from-[#D4A34A] to-[#f3d382]' 
                        : 'bg-white/[0.08] group-hover:bg-white/[0.12]'
                    }`}>
                      <Icon className={`h-7 w-7 transition-colors duration-300 ${isOpen ? 'text-black' : 'text-[#D4A34A]'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-black text-lg transition-colors duration-300 ${isOpen ? 'text-[#D4A34A]' : 'text-white'}`}>
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider font-bold">Step {index + 1} of {processSteps.length}</p>
                    </div>
                    <ArrowRight className={`h-5 w-5 text-[#D4A34A] transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                  </div>
                </button>
                
                {isOpen && (
                  <div className="mt-3 bg-white/[0.04] border border-white/10 rounded-2xl p-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-gray-300 mb-6 text-base leading-relaxed font-medium">{step.description}</p>
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-40 object-cover rounded-xl mb-4"
                    />
                    <div className="flex gap-2">
                      {processSteps.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx <= index 
                              ? 'bg-gradient-to-r from-[#D4A34A] to-[#f3d382] flex-1' 
                              : 'bg-white/20 w-1'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`transform transition-all duration-1000 delay-500 mt-24 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Quality is our commitment. Every step of our process is designed to deliver the finest charcoal products.
          </p>
          <a href="#products" className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#D4A34A] to-[#f3d382] text-black rounded-xl font-bold uppercase tracking-wider transition-all hover:shadow-2xl hover:shadow-[#D4A34A]/50 hover:scale-110">
            View Our Products
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