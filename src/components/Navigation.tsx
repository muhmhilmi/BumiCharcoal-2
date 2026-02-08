import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Send } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Deteksi Scroll untuk Ganti Style Navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#products', label: 'Our Products' },
    { href: '#contact', label: 'Contact' },
  ];

  const menuData = [
    {
      id: 'about',
      label: 'About',
      items: [
        { href: '#company', label: 'Company Info' },
        { href: '#certificates', label: 'Certificates' },
      ],
    },
    {
      id: 'production',
      label: 'Production',
      items: [
        { href: '#process', label: 'Process' },
        { href: '#shipping', label: 'Shipment' },
      ],
    },
  ];

  return (
    <nav className={`fixed w-full top-0 z-[100] transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/10 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* LOGO AREA */}
          <div className="relative group cursor-pointer">
            <h1 className="text-2xl font-black tracking-tighter bg-gradient-to-r from-[#D4A34A] to-[#f3d382] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              BUMI
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A34A] group-hover:w-full transition-all duration-500" />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-400 hover:text-white px-4 py-2 text-sm font-medium transition-colors duration-300">
                {link.label}
              </a>
            ))}

            {/* DROPDOWNS */}
            {menuData.map((menu) => (
              <div key={menu.id} className="relative group">
                <button className="flex items-center gap-1 text-gray-400 group-hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300">
                  {menu.label}
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                </button>

                {/* THE BRIDGE & CONTENT */}
                <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                  <div className="w-52 bg-[#111] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-2xl">
                    {menu.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-3.5 text-sm text-gray-400 hover:bg-[#D4A34A] hover:text-black transition-all duration-300"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* PREMIUM CTA BUTTON */}
            <button className="ml-4 relative group overflow-hidden px-7 py-2.5 bg-[#D4A34A] text-black text-sm font-bold rounded-full transition-transform active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                GET STARTED <Send className="w-4 h-4" />
              </span>
              {/* Shimmer Effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <div className={`md:hidden absolute w-full bg-[#0a0a0a] border-b border-white/10 transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-6 space-y-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-xl font-semibold text-gray-300" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
          {menuData.map((menu) => (
            <div key={menu.id} className="pt-4 border-t border-white/5">
              <p className="text-[#D4A34A] text-xs font-black uppercase mb-3 tracking-[0.2em]">{menu.label}</p>
              <div className="grid grid-cols-2 gap-4">
                {menu.items.map((item) => (
                  <a key={item.href} href={item.href} className="text-gray-400 text-sm" onClick={() => setIsOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </nav>
  );
}