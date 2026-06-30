import { useState, useEffect } from 'react';
import { HardHat, Menu, X, Calendar, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onBookNow: () => void;
}

export default function Header({ onBookNow }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'services', 'pricing', 'work', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT', id: 'about' },
    { label: 'SERVICES', id: 'services' },
    { label: 'PRICING', id: 'pricing' },
    { label: 'WORK', id: 'work' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="app-header"
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 py-3.5 shadow-sm transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2.5 cursor-pointer group"
            id="logo-container"
          >
            <div className="bg-orange-600 text-white p-2 rounded font-black flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
              <HardHat className="h-5.5 w-5.5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-display font-black text-slate-950 tracking-tighter block leading-none">
                LA.C <span className="text-orange-600 font-extrabold text-sm tracking-widest uppercase block mt-1 font-mono">LA CONTRACTORS</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-200 rounded-md ${
                  activeSection === item.id
                    ? 'text-orange-600 bg-slate-100 font-black'
                    : 'text-slate-600 hover:text-orange-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:3525550199" 
              className="flex items-center space-x-1.5 text-slate-600 hover:text-orange-600 text-xs font-bold uppercase tracking-wider transition-colors"
              id="header-phone-link"
            >
              <Phone className="h-4 w-4 text-orange-600" />
              <span>(352) 555-0199</span>
            </a>
            <button
              id="header-book-now-btn"
              onClick={onBookNow}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded text-xs font-black tracking-widest uppercase shadow-md transition-all duration-200 active:scale-95 flex items-center space-x-1.5"
            >
              <Calendar className="h-4 w-4" />
              <span>BOOK NOW</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <a 
              href="tel:3525550199" 
              className="p-2 text-slate-600 hover:text-orange-600 transition-colors"
              aria-label="Call LA Contractors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded text-sm font-bold tracking-wider uppercase transition-colors ${
                    activeSection === item.id
                      ? 'bg-orange-600 text-white font-black'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-orange-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-200 flex flex-col space-y-3 px-4">
                <div className="flex items-center space-x-2 text-slate-600 text-xs font-bold uppercase tracking-wider">
                  <Phone className="h-4 w-4 text-orange-600" />
                  <span>Call us: (352) 555-0199</span>
                </div>
                <button
                  id="mobile-book-now-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookNow();
                  }}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded text-xs font-black tracking-widest uppercase shadow-md transition-all text-center flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-4 w-4" />
                  <span>BOOK NOW</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
