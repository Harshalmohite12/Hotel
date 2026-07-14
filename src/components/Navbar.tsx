'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Events', href: '#events' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-nav py-4 shadow-[0_10px_30px_rgba(0,0,0,0.3)]' 
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col select-none"
          >
            <span className="text-xl md:text-2xl font-serif text-white font-light tracking-[0.2em] leading-none">
              SHERI
            </span>
            <span className="text-[8px] tracking-[0.5em] text-gold uppercase mt-1 pl-[0.2em]">
              Patio & Casa
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-textGray hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-300 relative py-2 group font-sans"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#reservation"
              onClick={(e) => handleNavClick(e, '#reservation')}
              className="px-6 py-2.5 bg-transparent border border-gold hover:bg-gold text-white hover:text-bgDark text-xs font-semibold tracking-[0.2em] uppercase rounded-none transition-all duration-500 hover:shadow-[0_0_15px_rgba(200,169,106,0.3)] hover:-translate-y-0.5"
            >
              Reserve Table
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-gold transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-bgDark/95 backdrop-blur-lg z-45 lg:hidden flex flex-col justify-center items-center"
          >
            {/* Ambient gold glow in mobile menu */}
            <div className="absolute w-[300px] h-[300px] bg-gold rounded-full filter blur-[120px] opacity-10 top-1/4 left-1/4"></div>
            
            <div className="flex flex-col items-center space-y-6 md:space-y-8 relative z-10">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-textGray hover:text-white text-base md:text-lg tracking-[0.25em] uppercase transition-colors duration-300 font-serif"
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pt-6"
              >
                <a
                  href="#reservation"
                  onClick={(e) => handleNavClick(e, '#reservation')}
                  className="px-8 py-3 bg-gold border border-gold hover:bg-transparent text-bgDark hover:text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-none transition-all duration-300 block text-center"
                >
                  Reserve Table
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
