'use client';

import { motion } from 'framer-motion';
import { FiMusic, FiGift, FiClock, FiUsers, FiAward, FiStar } from 'react-icons/fi';

interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  timing: string;
}

const eventList: EventItem[] = [
  {
    id: 'e1',
    title: 'Friday Live Music',
    subtitle: 'Acoustic Soul & Jazz',
    description: 'Immerse in soulful acoustic jazz performances by renowned artists under Pune’s starry skies.',
    icon: <FiMusic className="text-gold" size={24} />,
    timing: 'Every Friday, 8:00 PM onwards',
  },
  {
    id: 'e2',
    title: 'Weekend Specials',
    subtitle: 'Chef’s Degustation Menu',
    description: 'Exclusively curated tasting menus pairing global flavors with fresh farm-to-table farm ingredients.',
    icon: <FiStar className="text-gold" size={24} />,
    timing: 'Saturdays & Sundays, Dinner only',
  },
  {
    id: 'e3',
    title: 'Sunset Happy Hours',
    subtitle: 'Curated Mixology Offers',
    description: 'Unwind during sunset with elegant craft mocktails and artisanal cocktails on our patio.',
    icon: <FiClock className="text-gold" size={24} />,
    timing: 'Every Mon - Thu, 4:00 PM - 7:00 PM',
  },
  {
    id: 'e4',
    title: 'Family Dining',
    subtitle: 'Casa Fine Gastronomy',
    description: 'Celebrate legacy, share laughter, and enjoy custom tasting menus designed for larger family gatherings.',
    icon: <FiUsers className="text-gold" size={24} />,
    timing: 'Reservations Recommended',
  },
  {
    id: 'e5',
    title: 'Birthday Celebrations',
    subtitle: 'Private Dining Styling',
    description: 'Personalized decoration, custom dessert platings, and private butler service for your special milestone.',
    icon: <FiGift className="text-gold" size={24} />,
    timing: 'On-Demand Customization',
  },
  {
    id: 'e6',
    title: 'Corporate Events',
    subtitle: 'Bespoke Executive Hosting',
    description: 'Impress clients or host team celebrations with custom projection setups, audio systems, and catering.',
    icon: <FiAward className="text-gold" size={24} />,
    timing: 'Prior Consultation Required',
  },
];

export default function Events() {
  const handleBookExperienceClick = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    const reservationSection = document.querySelector('#reservation');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
      // Set the occasion input if possible
      setTimeout(() => {
        const occasionInput = document.querySelector('select[name="occasion"]') as HTMLSelectElement;
        if (occasionInput) {
          occasionInput.value = title.includes('Birthday') 
            ? 'Birthday' 
            : title.includes('Corporate') 
            ? 'Business' 
            : 'Special Event';
          // Dispatch a change event so React Hook Form detects it
          occasionInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        const messageInput = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
        if (messageInput) {
          messageInput.value = `Hi Sheri, I would like to book a table for the "${title}" event.`;
          messageInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, 500);
    }
  };

  return (
    <section id="events" className="relative py-20 md:py-32 bg-bgCard overflow-hidden">
      {/* Lights background */}
      <div className="ambient-glow w-[400px] h-[400px] bg-orangeAccent/5 bottom-0 right-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Title */}
        <div className="space-y-4 max-w-xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gold uppercase block">
            RESERVED GATHERINGS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white">
            Curated <span className="italic font-normal text-gold">Experiences & Events</span>
          </h2>
          <div className="h-[1px] w-24 bg-gold/30 mx-auto mt-4"></div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventList.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-[24px] p-6 text-left flex flex-col justify-between glass-card-hover group shadow-lg"
            >
              <div className="space-y-4">
                {/* Header: Icon & Timing */}
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/25 flex items-center justify-center group-hover:bg-gold group-hover:text-bgDark transition-all duration-500">
                    {event.icon}
                  </div>
                  <span className="text-[9px] tracking-wider text-textGray/60 uppercase font-semibold mt-2.5">
                    {event.timing}
                  </span>
                </div>

                {/* Typography */}
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-medium text-white group-hover:text-gold transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-xs text-gold/80 font-medium tracking-[0.05em] uppercase font-sans">
                    {event.subtitle}
                  </p>
                  <p className="text-xs text-textGray font-light leading-relaxed pt-2">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* CTA Booking Link */}
              <div className="border-t border-white/5 mt-6 pt-4">
                <a
                  href="#reservation"
                  onClick={(e) => handleBookExperienceClick(e, event.title)}
                  className="text-xs font-semibold tracking-wider text-gold hover:text-white uppercase transition-colors duration-300 inline-block cursor-pointer"
                >
                  Book Experience &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
