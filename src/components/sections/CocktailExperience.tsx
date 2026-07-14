'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function CocktailExperience() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCocktailMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch custom event to tell Menu component to activate "Cocktails" filter
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('set-menu-category', { detail: 'Drinks' }));
      }, 500);
    }
  };

  return (
    <section id="experiences" className="relative w-full min-h-[60vh] md:min-h-[75vh] flex items-center bg-bgDark overflow-hidden py-20 md:py-0">
      
      {/* Background Mixology Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!isMobile && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-[1.03] filter brightness-[0.35] contrast-[1.05]"
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27d2ab2d4f9d0c622ffb77d658b4b73b1d431a7&profile_id=165&oauth2_token_id=57447761"
          />
        )}
        {/* Soft overlay gradient and ambient liquid reflection */}
        <div className="absolute inset-0 bg-gradient-to-r from-bgDark via-bgDark/45 to-bgDark" />
        <div className="absolute inset-0 bg-gradient-to-t from-bgDark via-transparent to-bgDark" />
      </div>

      {/* Animated Liquid Gradient Layer */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-gold/10 to-orangeAccent/10 rounded-full filter blur-[130px] opacity-40 bottom-[-200px] left-[10%] pointer-events-none mix-blend-screen z-0"
      />

      {/* Floating Glass Reflections */}
      <div className="absolute top-1/4 right-[15%] w-48 h-48 border border-white/5 bg-white/5 rounded-full backdrop-blur-md opacity-20 rotate-45 pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 left-[5%] w-36 h-36 border border-white/5 bg-white/5 rounded-full backdrop-blur-md opacity-10 pointer-events-none animate-float-medium" />

      {/* Immersive Contents */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl text-left space-y-6">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.7, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gold uppercase block"
          >
            ARTISAN MIXOLOGY
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-6xl font-serif font-light text-white leading-tight"
          >
            Crafted Spirits, <br />
            <span className="italic font-normal text-gold">Immersive Alchemy</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-sm md:text-base font-light text-textGray leading-relaxed font-sans"
          >
            Step into the warm gold glow of our bar lounge. Every signature cocktail is a theatrical experience, incorporating artisanal house syrups, premium single malts, fresh-squeezed botanicals, and real wood-smoke infusions that awaken the senses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="pt-4"
          >
            <a
              href="#menu"
              onClick={handleCocktailMenuClick}
              className="px-8 py-3.5 bg-transparent border border-gold hover:bg-gold text-white hover:text-bgDark text-xs font-semibold tracking-[0.2em] uppercase rounded-none transition-all duration-500 hover:shadow-[0_0_15px_rgba(200,169,106,0.3)] inline-block"
            >
              View Cocktail Menu
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
