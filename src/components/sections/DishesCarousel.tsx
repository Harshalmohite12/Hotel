'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

interface CarouselItem {
  id: string;
  name: string;
  price: string;
  image: string;
  tag: string;
  description: string;
}

const signatureItems: CarouselItem[] = [
  {
    id: '1',
    name: 'Kandhari Paneer Tikka',
    price: '₹495',
    image: '/images/paneer_tikka.png',
    tag: 'Tandoor Special',
    description: 'Fresh pomegranate-infused cottage cheese glazed and tandoor-roasted.'
  },
  {
    id: '2',
    name: 'Delhi 6 Butter Chicken',
    price: '₹625',
    image: '/images/butter_chicken.png',
    tag: 'Classic Main',
    description: 'Boneless chicken cubes slow-cooked in velvety rich sweet-spicy butter gravy.'
  },
  {
    id: '3',
    name: 'Signature Cocktails',
    price: '₹550',
    image: '/images/cocktail.png',
    tag: 'Cocktail Bar',
    description: 'Craft mixology drinks featuring botanicals, fresh extracts, and fine spirits.'
  },
  {
    id: '4',
    name: 'Non-Veg Platter',
    price: '₹995',
    image: '/images/patio_ambience.png',
    tag: 'Platter Special',
    description: 'A premium combination of our finest clay-oven chicken, kebabs, and fish tikkas.'
  }
];

export default function DishesCarousel() {
  return (
    <section className="relative py-20 md:py-24 bg-bgCard overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-xl mx-auto mb-12">
          <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gold uppercase block">
            CHEF'S RECOMMENDATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white">
            Signature <span className="italic font-normal text-gold">Masterpieces</span>
          </h2>
          <div className="h-[1px] w-24 bg-gold/30 mx-auto mt-4"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative py-8 select-none">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={false}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 150,
              modifier: 1.2,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="w-full max-w-[1000px]"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
          >
            {signatureItems.map((item) => (
              <SwiperSlide key={item.id} className="max-w-[320px] sm:max-w-[360px] aspect-[3/4] pb-12">
                <div className="w-full h-full glass-card rounded-[24px] p-4 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 hover:border-gold/30 hover:shadow-[0_15px_40px_rgba(200,169,106,0.15)] group relative">
                  
                  {/* Floating badge */}
                  <div className="absolute top-6 left-6 z-10 bg-bgDark/80 backdrop-blur-md border border-gold/35 px-3.5 py-1 text-[9px] font-bold tracking-[0.2em] text-gold uppercase">
                    {item.tag}
                  </div>

                  {/* Visual Frame */}
                  <div className="relative w-full h-[65%] rounded-[18px] overflow-hidden bg-bgDark">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.85]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bgDark/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2 mt-4 text-left">
                    <div className="flex justify-between items-baseline gap-2">
                      <h3 className="text-lg font-serif text-white group-hover:text-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                      <span className="text-gold font-semibold text-sm leading-none flex-shrink-0">{item.price}</span>
                    </div>
                    <p className="text-xs text-textGray font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
