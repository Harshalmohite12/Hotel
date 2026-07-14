'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        setProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initialize immediately
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[1px] bg-white/5 z-[60] pointer-events-none">
      <div
        className="h-full bg-gold shadow-[0_0_8px_#C8A96A] transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
