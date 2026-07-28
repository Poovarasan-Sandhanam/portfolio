import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'project', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
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

  const navLinks = [
    { href: '#hero', id: 'hero', label: 'Home' },
    { href: '#about', id: 'about', label: 'About' },
    { href: '#project', id: 'project', label: 'Projects' },
    { href: '#experience', id: 'experience', label: 'Experience' },
    { href: '#contact', id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileOpen 
        ? 'bg-darkBlack/80 backdrop-blur-lg border-b border-cyberGreen/10 shadow-neon' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex-shrink-0 font-mono font-bold text-white text-xl sm:text-2xl tracking-wider hover:glow-text transition-all duration-300"
          >
            POOVARASAN<span className="text-cyberGreen">.dev</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-md text-sm font-medium tracking-wide transition-all duration-300 ${
                      isActive 
                        ? 'text-cyberGreen font-semibold' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBg"
                        className="absolute inset-0 bg-cyberGreen/10 border border-cyberGreen/20 rounded-md -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyberGreen p-2 rounded-md transition-colors focus:outline-none"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-darkBlack/95 border-b border-cyberGreen/20 backdrop-blur-lg"
          >
            <div className="px-4 pb-6 pt-2 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 border-l-2 ${
                      isActive 
                        ? 'bg-cyberGreen/10 text-cyberGreen border-cyberGreen font-semibold' 
                        : 'text-gray-400 hover:text-white border-transparent hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
