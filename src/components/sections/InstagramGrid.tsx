'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaHeart, FaComment } from 'react-icons/fa';
import Image from 'next/image';

interface InstagramPost {
  id: string;
  image: string;
  likes: string;
  comments: string;
}

const instaPosts: InstagramPost[] = [
  {
    id: 'ip1',
    image: '/images/patio_ambience.png',
    likes: '412',
    comments: '24',
  },
  {
    id: 'ip2',
    image: '/images/paneer_tikka.png',
    likes: '389',
    comments: '18',
  },
  {
    id: 'ip3',
    image: '/images/cocktail.png',
    likes: '520',
    comments: '42',
  },
  {
    id: 'ip4',
    image: '/images/butter_chicken.png',
    likes: '480',
    comments: '31',
  },
];

export default function InstagramGrid() {
  return (
    <section className="relative py-20 bg-bgCard overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Title */}
        <div className="space-y-4 max-w-xl mx-auto mb-12">
          <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gold uppercase block">
            SOCIAL STREAM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white">
            Stories from <span className="italic font-normal text-gold">@SheriPune</span>
          </h2>
          <div className="h-[1px] w-24 bg-gold/30 mx-auto mt-4"></div>
        </div>

        {/* 4 Column Instagram Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {instaPosts.map((post) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-square relative rounded-[20px] overflow-hidden shadow-lg group block border border-white/5 bg-bgDark"
            >
              <Image
                src={post.image}
                alt="Instagram feed"
                fill
                sizes="(max-width: 768px) 50vw, 280px"
                className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.8]"
                loading="lazy"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-bgDark/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center gap-4 text-white z-10">
                <FaInstagram size={28} className="text-gold" />
                <div className="flex gap-4 text-sm font-sans font-medium">
                  <span className="flex items-center gap-1.5 hover:text-gold transition-colors duration-200">
                    <FaHeart size={14} className="fill-current" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-gold transition-colors duration-200">
                    <FaComment size={14} className="fill-current" /> {post.comments}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Call to Action button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-transparent border border-gold hover:bg-gold text-white hover:text-bgDark text-xs font-semibold tracking-[0.2em] uppercase rounded-none transition-all duration-500 hover:shadow-[0_0_15px_rgba(200,169,106,0.3)] inline-flex items-center gap-2 cursor-pointer"
          >
            <FaInstagram size={14} /> Follow @SheriPune
          </a>
        </motion.div>

      </div>
    </section>
  );
}
