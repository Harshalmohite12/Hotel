'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling when loading
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'unset';
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -20,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 bg-bgDark z-[99999] flex flex-col items-center justify-center text-center"
        >
          {/* Ambient glow */}
          <div className="absolute w-[400px] h-[400px] bg-gold rounded-full filter blur-[160px] opacity-15 animate-pulse"></div>

          <div className="relative z-10 space-y-8 px-4">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <span className="text-[11px] tracking-[0.5em] text-gold uppercase mb-4 opacity-80">Pune's Premium Dining</span>
              <h1 className="text-5xl md:text-7xl font-serif text-white font-extralight tracking-[0.25em]">
                SHERI
              </h1>
              <div className="h-[1px] w-24 bg-gold/30 my-3"></div>
              <span className="text-xs md:text-sm tracking-[0.7em] text-textGray uppercase pl-[0.7em]">
                PATIO & CASA
              </span>
            </motion.div>

            {/* Premium loading track */}
            <div className="w-[200px] h-[2px] bg-white/5 mx-auto overflow-hidden relative rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2.3,
                  ease: "easeInOut"
                }}
                className="absolute top-0 bottom-0 left-0 w-full bg-gold shadow-[0_0_8px_rgba(200,169,106,0.8)]"
              ></motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-[9px] tracking-[0.3em] uppercase text-textGray pl-[0.3em]"
            >
              Fine Dining • Cocktails • Ambience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
