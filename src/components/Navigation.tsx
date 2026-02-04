import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#products', label: 'Our Products' },
    { href: '#contact', label: 'Contact' },
  ];

  const dropdowns = {
    about: [
      { href: '#company', label: 'Company Info' },
      { href: '#certificates', label: 'Certificates' },
    ],
    production: [
      { href: '#process', label: 'Process' },
      { href: '#shipping', label: 'Shipment' },
    ],
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-[#D4A34A]/10 shadow-2xl shadow-black/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo dengan animation */}
          <div className="flex items-center group cursor-pointer relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4A34A]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
            <h1 className="relative text-3xl font-black bg-gradient-to-r from-[#D4A34A] via-[#f3d382] to-[#D4A34A] bg-clip-text text-transparent group-hover:from-[#f3d382] group-hover:to-[#D4A34A] transition-all duration-300 animate-pulse-slow">
              BUMI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white px-5 py-2.5 rounded-xl transition-all duration-300 relative group text-sm font-semibold tracking-wide hover:bg-white/5 backdrop-blur-sm"
              >
                {link.label}
                <span className="absolute bottom-1 left-5 w-0 h-1 bg-gradient-to-r from-[#D4A34A] to-[#f3d382] group-hover:w-[calc(100%-40px)] transition-all duration-400 rounded-full" />
              </a>
            ))}

            {/* About Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-300 hover:text-white px-5 py-2.5 rounded-xl transition-all duration-300 flex items-center group relative text-sm font-semibold tracking-wide hover:bg-white/5 backdrop-blur-sm">
                About
                <ChevronDown className="ml-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt- w-56 bg-[#151515]/95 border border-[#D4A34A]/20 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-300">
                  {dropdowns.about.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-3.5 text-gray-300 hover:bg-gradient-to-r hover:from-[#D4A34A]/20 hover:to-transparent hover:text-white hover:border-l-2 hover:border-[#D4A34A] transition-all duration-300 relative group/item"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4A34A] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                        {item.label}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Production Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('production')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-300 hover:text-white px-5 py-2.5 rounded-xl transition-all duration-300 flex items-center group relative text-sm font-semibold tracking-wide hover:bg-white/5 backdrop-blur-sm">
                Production
                <ChevronDown className="ml-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              {activeDropdown === 'production' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#151515]/95 border border-[#D4A34A]/20 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-300">
                  {dropdowns.production.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-3.5 text-gray-300 hover:bg-gradient-to-r hover:from-[#D4A34A]/20 hover:to-transparent hover:text-white hover:border-l-2 hover:border-[#D4A34A] transition-all duration-300 relative group/item"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4A34A] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                        {item.label}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button dengan premium styling */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 group relative px-8 py-3 bg-gradient-to-r from-[#D4A34A] to-[#f3d382] text-black rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4A34A]/50 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#f3d382] to-[#D4A34A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#D4A34A] transition-colors duration-300 p-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#151515]/98 to-[#0a0a0a]/98 border-t border-[#D4A34A]/10 backdrop-blur-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3.5 px-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#D4A34A]/10 hover:to-transparent rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#D4A34A]/10">
              <p className="text-xs text-gray-500 px-4 py-2 uppercase font-bold tracking-wider">About</p>
              {dropdowns.about.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2.5 px-8 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-[#D4A34A]/10 hover:to-transparent rounded-lg transition-all duration-300 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-[#D4A34A]/10">
              <p className="text-xs text-gray-500 px-4 py-2 uppercase font-bold tracking-wider">Production</p>
              {dropdowns.production.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2.5 px-8 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-[#D4A34A]/10 hover:to-transparent rounded-lg transition-all duration-300 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-[#D4A34A] to-[#f3d382] text-black px-6 py-3.5 rounded-xl font-bold mt-6 transition-all duration-300 uppercase tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </nav>
  );
}
