'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MouseFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on mobile/tablet
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    // Set initial off-screen positions
    gsap.set(dot, { xPercent: -50, yPercent: -50, x: -100, y: -100 });
    gsap.set(ring, { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      gsap.to(dot, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: 'power3.out',
      });

      gsap.to(ring, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    const handleHoverStart = () => {
      ring.classList.add('active');
      gsap.to(ring, {
        scale: 1.5,
        borderColor: '#C8A96A',
        backgroundColor: 'rgba(200, 169, 106, 0.08)',
        duration: 0.3,
      });
      gsap.to(dot, {
        scale: 0.5,
        backgroundColor: '#C8A96A',
        duration: 0.3,
      });
    };

    const handleHoverEnd = () => {
      ring.classList.remove('active');
      gsap.to(ring, {
        scale: 1.0,
        borderColor: 'rgba(200, 169, 106, 0.3)',
        backgroundColor: 'rgba(200, 169, 106, 0)',
        duration: 0.3,
      });
      gsap.to(dot, {
        scale: 1.0,
        backgroundColor: '#C8A96A',
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Apply event delegation for dynamically loaded interactive tags
    const addListeners = () => {
      const links = document.querySelectorAll('a, button, select, input, textarea, [role="button"], .clickable-item');
      links.forEach(link => {
        link.addEventListener('mouseenter', handleHoverStart);
        link.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    addListeners();
    const intervalId = setInterval(addListeners, 1000);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      clearInterval(intervalId);
      const links = document.querySelectorAll('a, button, select, input, textarea, [role="button"], .clickable-item');
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleHoverStart);
        link.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot hidden lg:block" style={{ top: 0, left: 0 }} />
      <div ref={ringRef} className="custom-cursor-ring hidden lg:block" style={{ top: 0, left: 0 }} />
    </>
  );
}
