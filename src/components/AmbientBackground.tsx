'use client';

import { motion } from 'framer-motion';

export default function AmbientBackground() {
  // Generate random stats for leaves/particles to prevent matching values
  const leaves = [
    { id: 1, size: 24, left: '5%', duration: 18, delay: 0 },
    { id: 2, size: 16, left: '25%', duration: 25, delay: 5 },
    { id: 3, size: 28, left: '50%', duration: 22, delay: 2 },
    { id: 4, size: 20, left: '75%', duration: 20, delay: 8 },
    { id: 5, size: 18, left: '90%', duration: 28, delay: 3 },
  ];

  const particles = [
    { id: 1, size: 4, left: '10%', duration: 12, delay: 1 },
    { id: 2, size: 6, left: '30%', duration: 16, delay: 4 },
    { id: 3, size: 3, left: '45%', duration: 14, delay: 0 },
    { id: 4, size: 5, left: '60%', duration: 18, delay: 6 },
    { id: 5, size: 4, left: '80%', duration: 15, delay: 2 },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      
      {/* Drifting Ambient Radial Backlights */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-[600px] h-[600px] bg-gold/5 rounded-full filter blur-[140px] top-[15%] left-[5%]"
      />

      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 60, -40, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-[500px] h-[500px] bg-orangeAccent/4 rounded-full filter blur-[120px] top-[50%] right-[5%]"
      />

      {/* Floating Leaves System */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {leaves.map((leaf) => (
          <motion.div
            key={`leaf-${leaf.id}`}
            initial={{ y: '-10%', x: 0, rotate: 0, opacity: 0 }}
            animate={{
              y: '110vh',
              x: [0, 30, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0, 0.4, 0.4, 0],
            }}
            transition={{
              duration: leaf.duration,
              repeat: Infinity,
              delay: leaf.delay,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              left: leaf.left,
              width: leaf.size,
              height: leaf.size,
            }}
          >
            {/* Elegant Golden Leaf Outline SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C8A96A"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full opacity-60"
            >
              <path d="M2 22C2 22 6 18 12 17C18 16 22 13 22 13C22 13 18 12 17 6C16 0 2 2 2 2C2 2 0 16 2 22Z" />
              <path d="M2 2L12 12" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Floating Glowing Particle Embers */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={`p-${p.id}`}
            initial={{ y: '100%', opacity: 0 }}
            animate={{
              y: '-10%',
              x: [0, 15, -15, 0],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left: p.left,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              backgroundColor: '#C8A96A',
              boxShadow: '0 0 8px #C8A96A, 0 0 15px #D97706',
            }}
          />
        ))}
      </div>

    </div>
  );
}
