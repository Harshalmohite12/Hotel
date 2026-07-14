'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';

interface CounterProps {
  value: number;
  suffix?: string;
}

function CountUp({ value, suffix = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 120 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold font-normal">0</span>;
}

export default function About() {
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative py-20 md:py-32 bg-bgDark overflow-hidden">
      {/* Background soft glowing particles */}
      <div className="absolute w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[150px] top-1/3 -left-64 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Creative Overlapping Images */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[400px] sm:h-[500px] md:h-[600px] w-full">
            {/* Primary Background Image Frame */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 top-0 w-[70%] h-[75%] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image
                src="/images/patio_ambience.png"
                alt="Sheri Luxury Patio Ambience"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover brightness-[0.8] hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Overlapping Floating Secondary Image Frame */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="absolute right-0 bottom-4 w-[60%] h-[60%] rounded-[24px] overflow-hidden border border-gold/20 shadow-2xl z-10"
            >
              <Image
                src="/images/cocktail.png"
                alt="Craft Cocktails at Sheri"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover brightness-[0.9] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bgDark/60 via-transparent to-transparent" />
            </motion.div>

            {/* Small Floating Accent Glass Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
              className="absolute bottom-1/3 left-1/4 w-[160px] p-4 glass-card rounded-[16px] z-20 text-center animate-float-medium hidden sm:block"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-gold block mb-1">Ambiance</span>
              <p className="text-sm font-serif text-white font-light">Garden Patio</p>
            </motion.div>
          </div>

          {/* Right Column: Editorial Text & Storytelling */}
          <div ref={textRef} className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={textInView ? { opacity: 0.6, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gold uppercase block"
              >
                OUR HERITAGE & VISION
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={textInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight"
              >
                Where Great Food, <br />
                <span className="italic font-normal text-gold">Fine Drinks & Evenings Meet</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="space-y-6 text-textGray font-sans text-sm sm:text-base font-light leading-relaxed"
            >
              <p className="text-white text-base sm:text-lg font-serif italic border-l-2 border-gold pl-6">
                "Sheri – Patio & Casa is a premium family restaurant and lounge located in Keshav Nagar, Mundhwa, Pune."
              </p>
              <p>
                Our venue offers an elegant patio dining experience that combines modern architecture, warm lighting, lush greenery, handcrafted cocktails, live music, and global cuisine. Sheri is known for providing an atmosphere where families, couples, friends, and corporate groups can enjoy memorable dining experiences.
              </p>
            </motion.div>

            {/* Counters Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="grid grid-cols-2 gap-y-8 gap-x-4 border-t border-white/10 pt-8"
            >
              <div className="space-y-1 text-left">
                <CountUp value={900} suffix="+" />
                <p className="text-[10px] tracking-[0.2em] uppercase text-textGray font-light">
                  Google Reviews
                </p>
              </div>
              <div className="space-y-1 text-left">
                <CountUp value={4.2} suffix="★" />
                <p className="text-[10px] tracking-[0.2em] uppercase text-textGray font-light">
                  Google Rating
                </p>
              </div>
              <div className="space-y-1 text-left">
                <span className="text-xl sm:text-2xl font-serif text-gold font-normal block leading-[1.3] mt-2">11:00 AM - 11:45 PM</span>
                <p className="text-[10px] tracking-[0.2em] uppercase text-textGray font-light">
                  Opening Hours
                </p>
              </div>
              <div className="space-y-1 text-left">
                <span className="text-xl sm:text-2xl font-serif text-gold font-normal block leading-[1.3] mt-2">Valet Parking</span>
                <p className="text-[10px] tracking-[0.2em] uppercase text-textGray font-light">
                  Parking Facility
                </p>
              </div>
            </motion.div>

            {/* Services Grid (Focus Areas) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="border-t border-white/10 pt-8 space-y-4 text-left"
            >
              <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase block">
                Our Services & Facilities
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-textGray font-light font-sans">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Table Reservations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Online Ordering</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Family Dining</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Outdoor Patio</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Indoor Fine Dining</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Private Dining Room</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Birthday Celebrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Anniversary Celebrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Corporate Events</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Live Music Nights</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Happy Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Cocktail Bar</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Secure Parking Facility (Valet)</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
