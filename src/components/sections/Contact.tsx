'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiClock, FiCompass, FiMessageCircle } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 bg-bgCard overflow-hidden">
      {/* Background Glow */}
      <div className="ambient-glow w-[400px] h-[400px] bg-gold/5 top-1/4 right-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Contact Card Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gold uppercase block">
                FIND US
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
                Connect With <br />
                <span className="italic font-normal text-gold">Sheri – Patio & Casa</span>
              </h2>
              <div className="h-[1px] w-20 bg-gold/30 mt-4"></div>
            </div>

            {/* Info Items */}
            <div className="space-y-6 font-sans">
              
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold flex-shrink-0">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.1em] uppercase text-textGray/60 font-semibold mb-1">
                    Location
                  </h4>
                  <p className="text-sm text-white font-light leading-relaxed">
                    Sr No. 23A/4K, Lonkar Nagar, Keshav Nagar, <br />
                    Manjari Road, Mundhwa, Pune, Maharashtra 411036
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold flex-shrink-0">
                  <FiPhone size={18} />
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.1em] uppercase text-textGray/60 font-semibold mb-1">
                    Phone Desk
                  </h4>
                  <p className="text-sm text-white font-light">
                    +91 96736 31105
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold flex-shrink-0">
                  <FiClock size={18} />
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.1em] uppercase text-textGray/60 font-semibold mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-sm text-white font-light">
                    Open Daily: 11:00 AM – 11:45 PM <br />
                    Secure Parking Facility Available
                  </p>
                </div>
              </div>

            </div>

            {/* Interaction Buttons */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex flex-wrap gap-4">
                {/* WhatsApp Chat Desk */}
                <a
                  href="https://wa.me/919673631105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] text-white text-xs font-semibold tracking-wider uppercase rounded-none hover:bg-[#20ba59] transition-colors duration-300 flex items-center gap-2 cursor-pointer shadow-lg shadow-[#25d366]/15"
                >
                  <FaWhatsapp size={16} /> WhatsApp Desk
                </a>
                
                {/* Dial desk */}
                <a
                  href="tel:+919673631105"
                  className="px-6 py-3 bg-transparent border border-white/20 hover:border-gold text-white hover:text-gold text-xs font-semibold tracking-wider uppercase rounded-none transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <FiPhone size={14} /> Call Reception
                </a>
              </div>

              {/* Social links */}
              <div className="flex gap-4 items-center pt-2">
                <span className="text-[10px] tracking-wider text-textGray/55 uppercase font-semibold">
                  Follow us:
                </span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram size={14} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed (Dark Theme Styled) */}
          <div className="lg:col-span-7 h-[350px] lg:h-auto rounded-[32px] overflow-hidden border border-white/10 relative shadow-2xl bg-bgDark select-none">
            {/* The filter invert hue-rotate makes normal google maps look dark theme */}
            <iframe
              title="Sheri Patio & Casa Google Map Location"
              src="https://maps.google.com/maps?q=Sheri%20-%20Patio%20%26%20Casa,%20Keshav%20Nagar,%20Mundhwa,%20Pune&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0 brightness-[0.7] contrast-[1.2]"
              style={{
                filter: 'invert(90%) hue-rotate(180deg) brightness(90%) contrast(90%)',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>

      {/* Floating Call Button (Mobile Only) */}
      <div className="fixed bottom-6 left-6 z-40 md:hidden">
        <a
          href="tel:+919673631105"
          className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-bgDark shadow-lg shadow-gold/25 active:scale-90 transition-transform duration-200"
          aria-label="Call Desk"
        >
          <FiPhone size={20} />
        </a>
      </div>

    </section>
  );
}
