'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import Image from 'next/image';

interface Dish {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  isVeg: boolean;
}

const menuCategories = [
  'All',
  'Starters',
  'Non-Veg Starters',
  'Main Course',
  'Italian',
  'Desserts',
  'Drinks',
];

const menuDishes: Dish[] = [
  // Starters
  {
    id: 's1',
    name: 'Kandhari Paneer Tikka',
    category: 'Starters',
    price: 495,
    description: 'Pomegranate infused cottage cheese blocks, marinated in spices and flame-grilled in a clay oven.',
    image: '/images/paneer_tikka.png',
    isVeg: true,
  },
  {
    id: 's2',
    name: 'Hara Bhara Kebab',
    category: 'Starters',
    price: 345,
    description: 'Crispy deep-fried spinach and green peas patties stuffed with spiced cheese and dry nuts.',
    image: '/images/paneer_tikka.png',
    isVeg: true,
  },
  {
    id: 's3',
    name: 'Tandoori Broccoli',
    category: 'Starters',
    price: 445,
    description: 'Crispy broccoli florets marinated in saffron yogurt, toasted almonds, and served with mint sauce.',
    image: '/images/paneer_tikka.png',
    isVeg: true,
  },
  {
    id: 's4',
    name: 'Lotus Stem Crisps',
    category: 'Starters',
    price: 295,
    description: 'Crisp fried sliced lotus stem tossed in a tangy sweet-chili glaze and toasted sesame seeds.',
    image: '/images/paneer_tikka.png',
    isVeg: true,
  },
  {
    id: 's5',
    name: 'Loaded Hummus & Mushroom',
    category: 'Starters',
    price: 395,
    description: 'Creamy chickpea hummus topped with garlic sautéed mushrooms and olives, served with warm pita.',
    image: '/images/paneer_tikka.png',
    isVeg: true,
  },
  // Non-Veg Starters
  {
    id: 'nv1',
    name: 'Asian Crispy Batter Fish Sticks',
    category: 'Non-Veg Starters',
    price: 595,
    description: 'Golden fried crispy fish fingers tossed in Sichuan pepper salt, served with garlic tartar dip.',
    image: '/images/patio_ambience.png',
    isVeg: false,
  },
  {
    id: 'nv2',
    name: 'Non-Veg Platter',
    category: 'Non-Veg Starters',
    price: 995,
    description: 'A premium chef’s platter featuring Sheekh Kebab, Chicken Malai Tikka, and Amritsari Fish Tikka.',
    image: '/images/butter_chicken.png',
    isVeg: false,
  },
  // Main Course
  {
    id: 'm1',
    name: 'Delhi 6 Butter Chicken',
    category: 'Main Course',
    price: 625,
    description: 'Classic clay oven chicken tikka simmered in rich, velvety tomato butter sauce, swirled with fresh cream.',
    image: '/images/butter_chicken.png',
    isVeg: false,
  },
  {
    id: 'm2',
    name: 'Grilled Chicken with Mushroom Pepper Sauce',
    category: 'Main Course',
    price: 595,
    description: 'Tender grilled chicken breast served with loaded sautéed mushrooms, veggies, and cracked pepper demi-glace.',
    image: '/images/butter_chicken.png',
    isVeg: false,
  },
  {
    id: 'm3',
    name: 'Paneer Bhurji with Karari Roti',
    category: 'Main Course',
    price: 485,
    description: 'Spiced scrambled cottage cheese cooked with peppers and onions, served with a crispy giant roti.',
    image: '/images/paneer_tikka.png',
    isVeg: true,
  },
  // Italian
  {
    id: 'i1',
    name: 'Veggie Pizza',
    category: 'Italian',
    price: 545,
    description: 'Woodfired sourdough crust, topped with garden fresh vegetables, rich tomato sauce, and mozzarella.',
    image: '/images/patio_ambience.png',
    isVeg: true,
  },
  {
    id: 'i2',
    name: 'Spaghetti with Pesto',
    category: 'Italian',
    price: 495,
    description: 'Al dente spaghetti tossed in rich basil-pine nut pesto cream, finished with grated parmesan.',
    image: '/images/patio_ambience.png',
    isVeg: true,
  },
  // Desserts
  {
    id: 'd1',
    name: 'Degla Ka Meetha',
    category: 'Desserts',
    price: 345,
    description: 'A traditional rich dates dessert, layered and served warm with slivered almonds and vanilla cream.',
    image: '/images/cocktail.png',
    isVeg: true,
  },
  // Drinks
  {
    id: 'dr1',
    name: 'Signature Cocktails',
    category: 'Drinks',
    price: 550,
    description: 'Craft cocktails featuring curated botanical extracts, fresh-pressed citrus juices, and premium spirits.',
    image: '/images/cocktail.png',
    isVeg: true,
  },
  {
    id: 'dr2',
    name: 'Premium Mocktails',
    category: 'Drinks',
    price: 295,
    description: 'Handcrafted refreshing fruit infusions, fresh mint, botanicals, and sparkling tonic water.',
    image: '/images/cocktail.png',
    isVeg: true,
  },
  {
    id: 'dr3',
    name: 'Craft Beverages',
    category: 'Drinks',
    price: 180,
    description: 'Selection of custom cold brews, specialty iced teas, and premium carbonated beverages.',
    image: '/images/cocktail.png',
    isVeg: true,
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from localStorage and set up category listener
  useEffect(() => {
    const savedFavs = localStorage.getItem('sheri_menu_favorites');
    if (savedFavs) {
      try {
        setFavorites(JSON.parse(savedFavs));
      } catch (e) {
        console.error('Error parsing menu favorites', e);
      }
    }

    const handleSetCategory = (e: Event) => {
      const category = (e as CustomEvent).detail;
      if (category) {
        setActiveCategory(category);
      }
    };

    window.addEventListener('set-menu-category', handleSetCategory);
    return () => {
      window.removeEventListener('set-menu-category', handleSetCategory);
    };
  }, []);

  const toggleFavorite = (id: string) => {
    const updated = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem('sheri_menu_favorites', JSON.stringify(updated));
  };

  const filteredDishes = activeCategory === 'All'
    ? menuDishes
    : menuDishes.filter(dish => dish.category === activeCategory);

  return (
    <section id="menu" className="relative py-20 md:py-32 bg-bgDark overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute w-[600px] h-[600px] bg-gold/5 rounded-full filter blur-[180px] -bottom-48 -right-48 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-orangeAccent/5 rounded-full filter blur-[150px] top-10 left-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Title */}
        <div className="space-y-4 max-w-xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gold uppercase block">
            THE ART OF CUISINE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white">
            Explore Our <span className="italic font-normal text-gold">Signature Menu</span>
          </h2>
          <div className="h-[1px] w-24 bg-gold/30 mx-auto mt-4"></div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto pb-4 border-b border-white/5">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 rounded-none cursor-pointer ${
                activeCategory === category
                  ? 'bg-gold text-bgDark shadow-[0_0_15px_rgba(200,169,106,0.3)]'
                  : 'text-textGray hover:text-white border border-transparent hover:border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dish Grid with Framer Motion AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish) => (
              <motion.div
                key={dish.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-[20px] overflow-hidden flex flex-col justify-between relative group shadow-lg glass-card-hover"
              >
                {/* Image Wrap */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-bgDark">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.9]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bgDark/40 to-transparent pointer-events-none" />

                  {/* Veg / Non-Veg Indicator Icon */}
                  <div className="absolute top-4 left-4 bg-bgDark/80 backdrop-blur-md px-2.5 py-1 flex items-center gap-1.5 border border-white/10 rounded-full select-none">
                    <span 
                      className={`w-2.5 h-2.5 rounded-full border border-white/20 flex-shrink-0 ${
                        dish.isVeg ? 'bg-green-600' : 'bg-red-600'
                      }`} 
                    />
                    <span className="text-[9px] font-semibold tracking-wider text-textGray uppercase">
                      {dish.isVeg ? 'Veg' : 'Non-Veg'}
                    </span>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(dish.id)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-bgDark/80 backdrop-blur-md flex items-center justify-center border border-white/10 hover:border-gold/50 text-textGray hover:text-gold transition-all duration-300 cursor-pointer"
                    aria-label="Toggle favorite"
                  >
                    <FiHeart
                      className={`transition-all duration-300 ${
                        favorites.includes(dish.id) ? 'fill-gold text-gold scale-110' : 'text-white'
                      }`}
                      size={16}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline gap-2">
                      <h3 className="text-lg font-serif font-medium text-white group-hover:text-gold transition-colors duration-300">
                        {dish.name}
                      </h3>
                      <span className="text-gold font-semibold tracking-wide flex-shrink-0">
                        ₹{dish.price}
                      </span>
                    </div>
                    <p className="text-xs text-textGray font-light leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  {/* Footer details */}
                  <div className="flex justify-between items-center border-t border-white/5 pt-4">
                    <span className="text-[9px] tracking-[0.15em] text-textGray/60 uppercase">
                      {dish.category}
                    </span>
                    <a
                      href="#reservation"
                      className="text-[10px] tracking-[0.15em] text-gold group-hover:text-white uppercase font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
                    >
                      Book Plating
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
