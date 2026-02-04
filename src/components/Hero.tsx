import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

// --- STAT COUNTER PINDAH KE LUAR ---
// Kita pindahkan ke sini agar React tidak membuat ulang komponen ini setiap kali mouse bergerak
const StatCounter = ({ target, label, suffix = '', isVisible }: { target: number; label: string; suffix?: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div className="group cursor-pointer">
      <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-[#D4A34A] via-[#e8c76a] to-[#D4A34A] bg-clip-text group-hover:scale-110 transition-transform duration-300">
        {count}{suffix}
      </div>
      <div className="text-gray-400 mt-2 text-sm md:text-base group-hover:text-[#D4A34A] transition-colors duration-300 font-medium">
        {label}
      </div>
    </div>
  );
};

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-start justify-center bg-[#0a0a0a] overflow-hidden pt-32 md:pt-40"
    >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ 
            filter: 'brightness(0.4)',
            objectPosition: 'center bottom'
          }}
        >
          <source 
            src="https://www.shutterstock.com/shutterstock/videos/3849858795/preview/stock-footage-coconut-tree-bottom-top-view-summer-beach-wide-angle-camera-palm-trees-grove-dolly-shot-pov.webm" 
            type="video/webm" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#D4A34A]/20 via-transparent to-[#0a0a0a]"></div>
        </video>

      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#D4A34A]/15 via-[#0a0a0a]/30 to-[#0a0a0a] z-[1]"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      ></div>

      {/* Animated particle/glow effect */}
      <div 
        className="absolute w-[600px] h-[600px] bg-[#D4A34A]/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 z-[1] pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>

      {/* Additional animated glow */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 163, 74, 0.1) 0%, transparent 50%)`,
          transition: 'background 0.3s ease-out'
        }}
      ></div>

      {/* Dark overlay untuk text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/40 to-[#0a0a0a] z-[2]"></div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-20 h-20 border border-[#D4A34A]/20 rounded-full animate-float z-0 opacity-40"></div>
      <div className="absolute bottom-32 left-10 w-32 h-32 border-2 border-[#D4A34A]/10 rounded-full animate-pulse z-0 opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <div 
          className={`transform transition-all duration-1000 mb-6 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4A34A]/10 to-[#D4A34A]/5 border border-[#D4A34A]/30 rounded-full px-6 py-3 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#D4A34A]" />
            <span className="text-[#D4A34A] font-semibold text-sm">Premium Quality Charcoal</span>
          </div>
        </div>

        {/* Main heading dengan shine effect */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight relative group">
            Premium{' '}
            <span className="bg-gradient-to-r from-[#D4A34A] via-[#e8c76a] to-[#D4A34A] bg-clip-text text-transparent animate-shine">
              Charcoal
            </span>{' '}
            Solutions
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          </h1>
        </div>

        {/* Subtitle - minimal */}
        <div 
          className={`transform transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto drop-shadow-lg">
            High-quality charcoal for energy, industrial, and commercial applications worldwide.
          </p>
        </div>

        {/* CTA Buttons dengan enhanced effects */}
        <div 
          className={`transform transition-all duration-1000 delay-200 flex flex-col sm:flex-row gap-4 justify-center items-center ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="#products"
            className="group relative bg-gradient-to-r from-[#D4A34A] to-[#c19340] text-black px-10 py-4 rounded-lg font-bold text-base hover:shadow-2xl hover:shadow-[#D4A34A]/60 transition-all transform hover:scale-105 flex items-center gap-2 overflow-hidden backdrop-blur-sm"
          >
            <span className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="relative">Explore Products</span>
            <ArrowRight className="h-4 w-4 relative group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#company"
            className="group relative border-2 border-[#D4A34A] text-[#D4A34A] px-10 py-4 rounded-lg font-bold text-base hover:bg-[#D4A34A] hover:text-black transition-all transform hover:scale-105 duration-300 overflow-hidden backdrop-blur-sm"
          >
            <span className="absolute inset-0 bg-[#D4A34A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0"></span>
            <span className="relative z-10">Get in Touch</span>
          </a>
        </div>

        {/* Enhanced Stats Section - Menggunakan isVisible prop agar tidak reset */}
        <div 
          className={`transform transition-all duration-1000 delay-500 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-white mt-12 p-8 md:p-12 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/0 border border-[#D4A34A]/30 shadow-2xl shadow-[#D4A34A]/10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <StatCounter target={100} label="Quality Inspection" suffix="%" isVisible={isVisible} />
          <StatCounter target={100} label="Natural Sustainable Source" suffix="%" isVisible={isVisible} />
          <StatCounter target={24} label="Global Logistics Support" suffix="/7" isVisible={isVisible} />
        </div>

        {/* Scroll indicator with pulse */}
        <div 
          className="mt-16 flex justify-center animate-bounce"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="w-6 h-10 border-2 border-[#D4A34A] rounded-full flex items-start justify-center p-2 hover:border-[#e8c76a] transition-colors">
            <div className="w-1 h-2 bg-[#D4A34A] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Add custom animation to tailwind */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes shine {
          0%, 100% { background-position: 200% center; }
          50% { background-position: -200% center; }
        }
        
        .animate-shine {
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }

        /* Fallback untuk browser yang tidak support video */
        @supports not (display: grid) {
          section#home {
            background: linear-gradient(135deg, #D4A34A/20 0%, transparent 50%, #0a0a0a 100%);
          }
        }
      `}</style>
    </section>
  );
}