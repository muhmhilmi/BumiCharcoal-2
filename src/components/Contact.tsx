import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Zap, Send } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      items: ['+62 812-3456-7890', '+62 821-9876-5432'],
      color: 'from-blue-500/30'
    },
    {
      icon: Mail,
      title: 'Email',
      items: ['info@bumicharcoal.com', 'sales@bumicharcoal.com'],
      color: 'from-purple-500/30'
    },
    {
      icon: MapPin,
      title: 'Location',
      items: ['Jl. Industri Raya No. 123', 'Jakarta, Indonesia 12345'],
      color: 'from-pink-500/30'
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#D4A34A]/20 to-transparent rounded-full blur-3xl opacity-20 animate-blob" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#D4A34A]/15 to-transparent rounded-full blur-3xl opacity-15 animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-gradient-to-t from-[#D4A34A]/10 to-transparent rounded-full blur-3xl opacity-15 animate-blob" style={{ animationDelay: '4s' }} />

        {/* Interactive glow */}
        <div 
          className="absolute w-[1000px] h-[1000px] rounded-full pointer-events-none blur-3xl opacity-0"
          style={{
            background: `radial-gradient(circle, rgba(212, 163, 74, 0.15) 0%, transparent 70%)`,
            transform: `translate(${mousePosition.x - 500}px, ${mousePosition.y - 500}px)`,
            transition: 'opacity 0.3s ease-out',
            opacity: mousePosition.x > 0 ? 0.3 : 0
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 bg-[#D4A34A]/10 border border-[#D4A34A]/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#D4A34A] rounded-full animate-pulse" />
              <span className="text-[#D4A34A] font-bold text-sm uppercase tracking-wider">Let's Connect</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Get In <span className="text-transparent bg-gradient-to-r from-[#D4A34A] to-[#f3d382] bg-clip-text animate-shine">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to partner with us? Our team is standing by to help you find the perfect charcoal solution
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left - Contact Info Cards */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className={`transform transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredContact(index)}
                    onMouseLeave={() => setHoveredContact(null)}
                  >
                    <div className="relative group bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:border-[#D4A34A]/40 hover:shadow-2xl hover:shadow-[#D4A34A]/20 overflow-hidden">
                      {/* Animated background */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${info.color} to-transparent`} />
                      
                      {/* Icon */}
                      <div className="relative z-10 flex items-start gap-4">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4A34A]/30 to-[#D4A34A]/10 flex items-center justify-center group-hover:from-[#D4A34A]/50 group-hover:to-[#D4A34A]/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#D4A34A]/40">
                          <Icon className="h-8 w-8 text-[#D4A34A]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-black text-lg mb-3 group-hover:text-[#D4A34A] transition-colors duration-300">{info.title}</h4>
                          <div className="space-y-1">
                            {info.items.map((item, idx) => (
                              <p key={idx} className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 font-medium">
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Border glow */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, transparent 0%, rgba(212, 163, 74, 0.1) 50%, transparent 100%)`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}

              {/* WhatsApp CTA */}
              <div className={`transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block group bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#20BA5A] rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#25D366]/40"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-black text-xl mb-1">Chat on WhatsApp</h4>
                      <p className="text-white/80 text-sm font-medium">Get instant response from our team</p>
                    </div>
                    <MessageCircle className="h-6 w-6 text-white group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative group bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-10 transition-all duration-500 hover:border-[#D4A34A]/30 hover:shadow-xl hover:shadow-[#D4A34A]/10 h-full">
              <h3 className="text-3xl font-black text-white mb-8 relative z-10">Send us a message</h3>
              
              <form className="space-y-6 relative z-10">
                {[
                  { label: 'Full Name', type: 'text', placeholder: 'Your name', name: 'name' },
                  { label: 'Email Address', type: 'email', placeholder: 'your@email.com', name: 'email' },
                  { label: 'Company', type: 'text', placeholder: 'Your company', name: 'company' }
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-gray-400 mb-3 font-bold text-xs uppercase tracking-wider">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-white/[0.06] backdrop-blur-xl border rounded-xl px-6 py-3 text-white placeholder-gray-500 font-medium transition-all duration-300 focus:outline-none ${
                        focusedField === field.name
                          ? 'border-[#D4A34A]/50 bg-white/[0.1] shadow-lg shadow-[#D4A34A]/20' 
                          : 'border-white/10 hover:border-white/20'
                      }`}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-gray-400 mb-3 font-bold text-xs uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-white/[0.06] backdrop-blur-xl border rounded-xl px-6 py-3 text-white placeholder-gray-500 font-medium transition-all duration-300 focus:outline-none resize-none ${
                      focusedField === 'message'
                        ? 'border-[#D4A34A]/50 bg-white/[0.1] shadow-lg shadow-[#D4A34A]/20' 
                        : 'border-white/10 hover:border-white/20'
                    }`}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group/btn relative bg-gradient-to-r from-[#D4A34A] to-[#f3d382] text-black px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4A34A]/50 hover:scale-105"
                >
                  <span className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                </button>
              </form>
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
