import { Facebook, Instagram, Linkedin, MessageCircle, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#company' },
      { label: 'Certifications', href: '#certificates' },
      { label: 'Production Process', href: '#process' },
      { label: 'Contact Us', href: '#contact' }
    ],
    products: [
      { label: 'Shisha Charcoal', href: '#products' },
      { label: 'BBQ Briquettes', href: '#products' },
      { label: 'Bulk Orders', href: '#contact' },
      { label: 'Custom Solutions', href: '#contact' }
    ],
    support: [
      { label: 'Shipping Info', href: '#shipping' },
      { label: 'Quality Assurance', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Privacy Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-400' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-500' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/6281234567890', color: 'hover:text-green-400' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] to-black border-t border-white/5">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-[#D4A34A]/10 to-transparent rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#D4A34A]/5 to-transparent rounded-full blur-3xl opacity-15" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 md:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-black text-white mb-2">
                  <span className="bg-gradient-to-r from-[#D4A34A] to-[#f3d382] bg-clip-text text-transparent">BUMI</span>
                  <br />
                  CHARCOAL
                </h3>
                <div className="h-1 w-12 bg-gradient-to-r from-[#D4A34A] to-[#f3d382] rounded-full" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                Premium charcoal manufacturer and exporter committed to sustainable energy solutions and exceptional quality worldwide.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.label === 'WhatsApp' ? '_blank' : undefined}
                      rel={social.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                      className={`group w-10 h-10 rounded-lg bg-white/[0.08] border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:border-[#D4A34A]/40 hover:bg-white/[0.12] ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-125" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="text-white font-black uppercase text-sm tracking-wider mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D4A34A] rounded-full" />
                  {section === 'company' ? 'Company' : section === 'products' ? 'Products' : 'Support'}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#D4A34A] transition-all duration-300 text-sm font-medium group flex items-center gap-2"
                      >
                        <span className="inline-block w-1 h-1 bg-[#D4A34A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.label}
                        <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Contact</h5>
              <div className="space-y-3">
                <a href="tel:+6281234567890" className="flex items-center gap-3 text-gray-400 hover:text-[#D4A34A] transition-colors duration-300 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#D4A34A]/20 flex items-center justify-center group-hover:bg-[#D4A34A]/30 transition-colors duration-300">
                    <Phone className="h-4 w-4 text-[#D4A34A]" />
                  </div>
                  <span className="text-sm font-medium">+62 812-3456-7890</span>
                </a>
                <a href="mailto:info@bumicharcoal.com" className="flex items-center gap-3 text-gray-400 hover:text-[#D4A34A] transition-colors duration-300 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#D4A34A]/20 flex items-center justify-center group-hover:bg-[#D4A34A]/30 transition-colors duration-300">
                    <Mail className="h-4 w-4 text-[#D4A34A]" />
                  </div>
                  <span className="text-sm font-medium">info@bumicharcoal.com</span>
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#D4A34A]/20 flex items-center justify-center mt-0.5">
                    <MapPin className="h-4 w-4 text-[#D4A34A]" />
                  </div>
                  <div className="text-sm font-medium">
                    <p>Jl. Industri Raya No. 123</p>
                    <p>Jakarta, Indonesia 12345</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Stay Updated</h5>
              <p className="text-gray-400 text-sm mb-4 font-medium">Get latest updates on our products and services</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/[0.06] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D4A34A]/40 transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#D4A34A] to-[#f3d382] text-black px-6 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-[#D4A34A]/40 transition-all duration-300 hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm font-medium text-center sm:text-left">
                &copy; {currentYear} <span className="text-[#D4A34A] font-black">BUMI CHARCOAL</span>. All rights reserved. | Premium Manufacturer & Exporter
              </p>
              <div className="flex gap-6 text-xs text-gray-500 font-medium">
                <a href="#" className="hover:text-[#D4A34A] transition-colors duration-300">Privacy</a>
                <a href="#" className="hover:text-[#D4A34A] transition-colors duration-300">Terms</a>
                <a href="#" className="hover:text-[#D4A34A] transition-colors duration-300">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 group z-50"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 scale-150" />
        <div className="relative w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#20BA5A] rounded-full shadow-xl shadow-[#25D366]/40 flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <MessageCircle className="h-7 w-7 text-white" />
        </div>
      </a>
    </footer>
  );
}
