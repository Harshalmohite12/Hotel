'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaGoogle, FaStar, FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface Review {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  highlight: string;
  avatar: string;
}

const reviewList: Review[] = [
  {
    id: 'r1',
    name: 'Priya Sharma',
    location: 'Keshav Nagar, Pune',
    comment: 'The patio setting is absolutely magical at night under the fairy lights. We ordered the Kandhari Paneer Tikka and it was incredibly flavorful, melting in our mouth. The hospitality is top-notch.',
    rating: 5,
    highlight: 'Magical Ambience & Great Food',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'r2',
    name: 'Rohan Mehta',
    location: 'Baner, Pune',
    comment: 'Amazing mixology! The Rosemary Smoked Sour is a theatrical masterwork. Sheri has easily become our favorite spot in Pune for live acoustic music and crafted cocktails on weekends.',
    rating: 5,
    highlight: 'Masterful Mixology',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'r3',
    name: 'Anjali Deshmukh',
    location: 'Mumbai',
    comment: 'Exquisite fine dining. The Delhi 6 Butter Chicken is cooked to perfection, rich and cream-heavy. Elegant presentation, spacious seating, and premium service. Highly recommended for couples!',
    rating: 5,
    highlight: 'Premium Service',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-20 md:py-32 bg-bgDark overflow-hidden">
      {/* Background Lights */}
      <div className="ambient-glow w-[500px] h-[500px] bg-gold/5 top-1/4 left-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Ratings Summary Dashboard */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gold uppercase block">
              GUEST FEEDBACK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
              Loved by Guests, <br />
              <span className="italic font-normal text-gold">Rated by Connoisseurs</span>
            </h2>
            <div className="h-[1px] w-20 bg-gold/30 mt-4"></div>
            
            <p className="text-xs sm:text-sm font-light text-textGray leading-relaxed font-sans max-w-md">
              We take pride in our commitment to luxury dining experiences. Check out our verified rating highlights from food lovers and local hospitality critics.
            </p>

            {/* Google Rating Display Card */}
            <div className="glass-card rounded-[24px] p-6 max-w-sm flex items-center justify-between border border-gold/20 shadow-xl">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-white">
                  <FaGoogle className="text-gold text-lg" />
                  <span className="text-xs tracking-[0.1em] uppercase text-textGray font-semibold font-sans">
                    Google Reviews
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-serif text-white font-bold">4.2</span>
                  <span className="text-sm font-light text-textGray">/ 5.0</span>
                </div>
                <div className="flex text-gold gap-1">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} size={12} className="fill-gold" />
                  ))}
                  <FaStar size={12} className="text-gold/40" />
                </div>
              </div>

              <div className="h-12 w-[1px] bg-white/10" />

              <div className="text-left space-y-1">
                <span className="text-2xl font-serif text-gold block leading-none font-bold">900+</span>
                <span className="text-[10px] tracking-[0.1em] uppercase text-textGray/65">
                  Verified Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Reviews Testimonial Slider */}
          <div className="lg:col-span-7 select-none">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="w-full"
            >
              {reviewList.map((review) => (
                <SwiperSlide key={review.id} className="pb-12">
                  <div className="glass-card rounded-[24px] p-8 md:p-10 relative flex flex-col justify-between h-[360px] md:h-[320px] shadow-2xl border border-white/5 hover:border-gold/20 transition-colors duration-500 text-left">
                    <FaQuoteLeft className="absolute top-6 right-8 text-gold/10 text-6xl" />

                    <div className="space-y-4">
                      {/* Star Rating & Highlight */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <div className="flex text-gold gap-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <FaStar key={i} size={14} className="fill-gold" />
                          ))}
                        </div>
                        <span className="text-xs font-semibold tracking-wider text-gold font-sans uppercase">
                          "{review.highlight}"
                        </span>
                      </div>

                      {/* Comment text */}
                      <p className="text-xs sm:text-sm text-textGray font-light leading-relaxed font-sans italic">
                        {review.comment}
                      </p>
                    </div>

                    {/* Author Profiler */}
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/30">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="text-sm font-serif font-medium text-white">
                          {review.name}
                        </h4>
                        <span className="text-[10px] tracking-wider text-textGray/60 font-sans uppercase">
                          {review.location}
                        </span>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}
