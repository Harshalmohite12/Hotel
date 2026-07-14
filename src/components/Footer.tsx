'use client';

import { useState } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { FiMail, FiArrowRight } from 'react-icons/fi';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-bgDark border-t border-white/5 pt-16 pb-8 overflow-hidden font-sans">
      {/* Background Soft Glow */}
      <div className="absolute w-[300px] h-[300px] bg-gold/5 rounded-full filter blur-[120px] bottom-0 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5 text-left">
        
        {/* Brand Column (4 Columns) */}
        <div className="lg:col-span-4 space-y-4">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex flex-col select-none">
            <span className="text-xl md:text-2xl font-serif text-white font-light tracking-[0.2em] leading-none">
              SHERI
            </span>
            <span className="text-[8px] tracking-[0.5em] text-gold uppercase mt-1 pl-[0.2em]">
              Patio & Casa
            </span>
          </a>
          <p className="text-xs text-textGray/70 font-light leading-relaxed max-w-sm">
            Experience the finest outdoor garden patio and family dining at Keshav Nagar, Mundhwa, Pune. Combining global cuisine, North Indian classics, wood-fired Italian specials, and live music.
          </p>
          {/* Socials */}
          <div className="flex gap-3 pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center text-white transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center text-white transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={14} />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center text-white transition-all duration-300"
              aria-label="Pinterest"
            >
              <FaPinterestP size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links Column (3 Columns) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-serif font-bold tracking-[0.2em] text-white uppercase">
            Quick Links
          </h4>
          <ul className="text-xs text-textGray/80 font-light space-y-2.5">
            <li>
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-gold transition-colors duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-gold transition-colors duration-200">
                About Story
              </a>
            </li>
            <li>
              <a href="#menu" onClick={(e) => handleNavClick(e, '#menu')} className="hover:text-gold transition-colors duration-200">
                Signature Menu
              </a>
            </li>
            <li>
              <a href="#experiences" onClick={(e) => handleNavClick(e, '#experiences')} className="hover:text-gold transition-colors duration-200">
                Bespoke Experiences
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-gold transition-colors duration-200">
                Gallery Portfolio
              </a>
            </li>
            <li>
              <a href="#events" onClick={(e) => handleNavClick(e, '#events')} className="hover:text-gold transition-colors duration-200">
                Curated Events
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Column (2 Columns) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs font-serif font-bold tracking-[0.2em] text-white uppercase">
            Reservations
          </h4>
          <ul className="text-xs text-textGray/85 space-y-3 font-light leading-relaxed">
            <li>
              <a href="#reservation" onClick={(e) => handleNavClick(e, '#reservation')} className="text-gold hover:text-white font-semibold transition-colors duration-200">
                Reserve A Table
              </a>
            </li>
            <li>
              <span>Reception Desk:</span> <br />
              <a href="tel:+919673631105" className="hover:text-gold text-white font-medium">+91 96736 31105</a>
            </li>
            <li>
              <span>Email:</span> <br />
              <a href="mailto:desk@sheripune.com" className="hover:text-gold text-white font-medium">desk@sheripune.com</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Column (3 Columns) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-serif font-bold tracking-[0.2em] text-white uppercase">
            Join The Club
          </h4>
          <p className="text-xs text-textGray/70 font-light leading-relaxed">
            Subscribe to receive exclusive invitations for our wine paired tasting nights and jazz showcases.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="flex w-full bg-bgCard border border-white/10 focus-within:border-gold transition-colors duration-300">
              <div className="px-3 flex items-center text-textGray/50">
                <FiMail size={14} />
              </div>
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-0 px-1 py-2.5 text-xs text-white focus:outline-none placeholder-textGray/40"
              />
              <button
                type="submit"
                className="px-3 flex items-center text-gold hover:text-white transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <FiArrowRight size={14} />
              </button>
            </div>
            {subscribed && (
              <p className="text-[10px] text-green-500 font-medium tracking-wide">
                Successfully subscribed to newsletter!
              </p>
            )}
          </form>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] tracking-wider text-textGray/45 font-light space-y-2 sm:space-y-0">
        <p>&copy; {new Date().getFullYear()} Sheri – Patio & Casa, Pune. All Rights Reserved.</p>
        <p className="flex gap-4">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-gold">Privacy Policy</a>
          <span>•</span>
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-gold">Terms of Use</a>
        </p>
      </div>
    </footer>
  );
}
