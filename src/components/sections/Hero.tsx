'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FiCalendar, FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Detect mobile viewport size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Motion values for the 3D mouse parallax card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for card physics
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-300, 300], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-300, 300], [-15, 15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen bg-bgDark flex items-center overflow-hidden py-24 md:py-0"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!isMobile && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-[1.05] filter brightness-[0.4]"
            src="https://player.vimeo.com/external/538569739.hd.mp4?s=dcf69d6c703fb76b9148d4fb98547ca3922d56a3&profile_id=174&oauth2_token_id=57447761"
          />
        )}
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bgDark via-bgDark/40 to-bgDark" />
        <div className="absolute inset-0 bg-gradient-to-r from-bgDark/80 via-transparent to-bgDark/40" />
      </div>

      {/* Floating Ambient Lights */}
      <div className="ambient-glow w-[500px] h-[500px] bg-gold/10 top-1/4 left-1/4" />
      <div className="ambient-glow w-[400px] h-[400px] bg-orangeAccent/5 bottom-1/4 right-1/4" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typography and CTAs */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
            className="inline-flex items-center space-x-2 border border-gold/25 bg-gold/5 px-4 py-1.5 rounded-full"
          >
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-ping" />
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-gold uppercase">
              PUNE'S MOST EXQUISITE OUTDOOR PATIO
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.4 }}
              className="text-4xl sm:text-5xl md:text-7xl font-serif font-light text-white leading-[1.15]"
            >
              Experience Pune's <br className="hidden md:inline" />
              <span className="italic font-normal text-gold">Best Patio & Family</span> <br />
              Dining Destination
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
              className="text-xs md:text-sm tracking-[0.1em] text-textGray font-light max-w-xl uppercase leading-relaxed font-sans"
            >
              "Where Great Food, Fine Drinks & Beautiful Evenings Come Together."
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#reservation"
              onClick={(e) => handleScrollTo(e, '#reservation')}
              className="px-8 py-3.5 bg-gold text-bgDark text-xs font-semibold tracking-[0.2em] uppercase rounded-none transition-all duration-300 hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(200,169,106,0.4)]"
            >
              Reserve Table
            </a>
            <a
              href="#menu"
              onClick={(e) => handleScrollTo(e, '#menu')}
              className="px-8 py-3.5 bg-transparent border border-white/20 hover:border-gold hover:text-gold text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-none transition-all duration-300"
            >
              Explore Menu
            </a>
          </motion.div>
        </div>

        {/* Right Column: Floating 3D Parallax Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
            className="w-full max-w-[340px] aspect-[4/5] rounded-[24px] relative glass-card p-4 flex flex-col justify-between overflow-hidden shadow-2xl animate-float-slow cursor-pointer group"
          >
            {/* Glossy reflection shimmer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative w-full h-[65%] rounded-[18px] overflow-hidden">
              <Image
                src="/images/paneer_tikka.png"
                alt="Signature Kandhari Paneer Tikka"
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute top-3 left-3 bg-bgDark/80 backdrop-blur-md border border-gold/25 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-gold">
                Signature Dish
              </div>
            </div>

            <div className="space-y-2 mt-4" style={{ transform: 'translateZ(30px)' }}>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-serif text-white group-hover:text-gold transition-colors duration-300">
                  Kandhari Paneer Tikka
                </h3>
                <span className="text-gold text-sm font-semibold tracking-wider">₹545</span>
              </div>
              <p className="text-[11px] text-textGray font-light leading-relaxed">
                Gourmet cottage cheese glazed with pomegranate glaze, flame-grilled and served on hot slates.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/5 pt-3" style={{ transform: 'translateZ(15px)' }}>
              <span className="text-[9px] tracking-[0.15em] text-gold/80 uppercase font-semibold">
                ★ 4.9/5 Best Seller
              </span>
              <span className="w-2 h-2 bg-green-600 rounded-full" title="Vegetarian" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center select-none">
        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, '#about')}
          className="text-textGray/60 hover:text-gold text-[9px] tracking-[0.3em] uppercase transition-colors duration-300 flex flex-col items-center space-y-2"
        >
          <span>Scroll to Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <FiChevronDown size={14} />
          </motion.div>
        </a>
      </div>

      {/* Sticky Floating Quick Booking CTA (Bottom-Right) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.2, type: 'spring' }}
        className="fixed bottom-6 right-6 z-40 block"
      >
        <a
          href="#reservation"
          onClick={(e) => handleScrollTo(e, '#reservation')}
          className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-bgDark shadow-lg shadow-gold/20 hover:scale-110 active:scale-95 transition-all duration-300 group relative"
        >
          <FiCalendar size={20} />
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-bgCard text-white text-[10px] tracking-[0.2em] uppercase font-semibold border border-gold/20 py-2 px-4 rounded-none opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl">
            Book A Table
          </span>
        </a>
      </motion.div>
    </section>
  );
}
