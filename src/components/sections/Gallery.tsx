'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  category: string;
  image: string;
  title: string;
}

const galleryCategories = [
  'All',
  'Food',
  'Drinks',
  'Outdoor Patio',
  'Indoor Seating',
  'Live Music',
  'Celebrations',
  'Events',
  'Happy Customers',
  'Night Ambience',
];

const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    category: 'Food',
    image: '/images/paneer_tikka.png',
    title: 'Kandhari Paneer Tikka Plating',
  },
  {
    id: 'g2',
    category: 'Night Ambience',
    image: '/images/patio_ambience.png',
    title: 'Cozy Courtyard Warm Lighting',
  },
  {
    id: 'g3',
    category: 'Drinks',
    image: '/images/cocktail.png',
    title: 'Signature Craft Cocktails',
  },
  {
    id: 'g4',
    category: 'Food',
    image: '/images/butter_chicken.png',
    title: 'Delhi 6 Butter Chicken Servings',
  },
  {
    id: 'g5',
    category: 'Live Music',
    image: '/images/patio_ambience.png',
    title: 'Acoustic Soul Sessions on Stage',
  },
  {
    id: 'g6',
    category: 'Outdoor Patio',
    image: '/images/patio_ambience.png',
    title: 'Spacious Outdoor Table Setup',
  },
  {
    id: 'g7',
    category: 'Indoor Seating',
    image: '/images/patio_ambience.png',
    title: 'Premium Indoor Fine Dining Casa',
  },
  {
    id: 'g8',
    category: 'Celebrations',
    image: '/images/patio_ambience.png',
    title: 'Table Decorations for Birthday Parties',
  },
  {
    id: 'g9',
    category: 'Events',
    image: '/images/patio_ambience.png',
    title: 'Corporate Dinners & Social Soirées',
  },
  {
    id: 'g10',
    category: 'Happy Customers',
    image: '/images/patio_ambience.png',
    title: 'Memorable Evenings with Loved Ones',
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(prev => (prev === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1));
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(prev => (prev === filteredItems.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <section id="gallery" className="relative py-20 md:py-32 bg-bgDark overflow-hidden">
      {/* Background radial highlights */}
      <div className="ambient-glow w-[500px] h-[500px] bg-gold/5 top-1/3 right-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gold uppercase block">
            VISUAL JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white">
            Capturing the <span className="italic font-normal text-gold">Sheri Experience</span>
          </h2>
          <div className="h-[1px] w-24 bg-gold/30 mx-auto mt-4"></div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto border-b border-white/5 pb-4">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 rounded-none cursor-pointer ${
                activeFilter === category
                  ? 'text-gold border-b-2 border-gold font-bold'
                  : 'text-textGray hover:text-white border-b-2 border-transparent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* CSS Column Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedIndex(index)}
                className="break-inside-avoid relative rounded-[20px] overflow-hidden group shadow-lg glass-card cursor-pointer block border border-white/5"
              >
                <div className="relative w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85] group-hover:brightness-100"
                    loading="lazy"
                  />
                  
                  {/* Floating Overlay on Hover */}
                  <div className="absolute inset-0 bg-bgDark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="flex justify-between items-center text-left">
                      <div>
                        <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-semibold block mb-1">
                          {item.category}
                        </span>
                        <h3 className="text-base font-serif text-white font-medium">
                          {item.title}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-300">
                        <FiMaximize2 size={16} />
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Slider Overlay */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-bgDark/98 backdrop-blur-xl z-[9999] flex flex-col justify-center items-center px-4"
          >
            {/* Top close bar */}
            <div className="absolute top-6 left-0 right-0 px-6 md:px-12 flex justify-between items-center z-20">
              <span className="text-[10px] tracking-[0.25em] text-textGray uppercase">
                {filteredItems[selectedIndex].category} • {selectedIndex + 1} / {filteredItems.length}
              </span>
              <button
                onClick={() => setSelectedIndex(null)}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-gold hover:text-gold text-white flex items-center justify-center transition-colors duration-300 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Slider frame */}
            <div className="relative w-full max-w-5xl aspect-video md:aspect-[16/10] flex justify-center items-center">
              
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-4 z-10 w-12 h-12 rounded-full bg-bgCard/60 border border-white/10 text-white hover:text-gold hover:border-gold flex items-center justify-center transition-colors duration-300 cursor-pointer"
                aria-label="Previous image"
              >
                <FiChevronLeft size={24} />
              </button>

              {/* Central Zoomed Image */}
              <motion.div
                key={selectedIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-full max-h-[75vh] rounded-[16px] overflow-hidden border border-white/10 shadow-2xl select-none"
              >
                <img
                  src={filteredItems[selectedIndex].image}
                  alt={filteredItems[selectedIndex].title}
                  className="max-w-full max-h-[75vh] object-contain"
                />
                
                {/* Caption Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bgDark/90 to-transparent p-6 text-left">
                  <h3 className="text-lg md:text-xl font-serif text-white font-light">
                    {filteredItems[selectedIndex].title}
                  </h3>
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 z-10 w-12 h-12 rounded-full bg-bgCard/60 border border-white/10 text-white hover:text-gold hover:border-gold flex items-center justify-center transition-colors duration-300 cursor-pointer"
                aria-label="Next image"
              >
                <FiChevronRight size={24} />
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
