'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiX, FiCalendar, FiClock, FiUsers, FiInfo } from 'react-icons/fi';
import confetti from 'canvas-confetti';

interface ReservationInputs {
  name: string;
  mobile: string;
  email: string;
  guests: string;
  date: string;
  time: string;
  occasion: string;
  message: string;
}

export default function Reservation() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState<ReservationInputs | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ReservationInputs>();

  const onSubmit = async (data: ReservationInputs) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Set response data
    setSubmittedData(data);
    setShowSuccessModal(true);
    
    // Confetti celebration (Gold, White, Warm Orange theme)
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C8A96A', '#FFFFFF', '#D97706'],
    });

    // Reset Form
    reset();
  };

  return (
    <section id="reservation" className="relative py-20 md:py-32 bg-bgDark overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-gold/5 rounded-full filter blur-[150px] top-1/4 left-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Guidelines & Contact Quicklinks */}
          <div className="lg:col-span-5 space-y-8 text-left lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gold uppercase block">
                TABLE RESERVATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
                Secure Your <br />
                <span className="italic font-normal text-gold">Memorable Evening</span>
              </h2>
              <div className="h-[1px] w-20 bg-gold/30 mt-4"></div>
            </div>

            <p className="text-xs sm:text-sm font-light text-textGray leading-relaxed font-sans max-w-md">
              Whether celebrating a milestone or seeking a quiet, romantic evening, Sheri - Patio & Casa offers an unparalleled dining experience. Select your preferences, and our hosting team will handle the rest.
            </p>

            {/* Guidelines Card */}
            <div className="glass-card rounded-[24px] p-6 space-y-4 border border-white/5">
              <div className="flex gap-3 text-gold">
                <FiInfo className="mt-1 flex-shrink-0" size={18} />
                <h4 className="text-sm font-serif font-semibold text-white uppercase tracking-wider">
                  Reservation Policies
                </h4>
              </div>
              <ul className="text-xs text-textGray font-light space-y-3 font-sans list-disc pl-5">
                <li>We hold tables for a maximum of 15 minutes past the booking hour.</li>
                <li>For parties larger than 8 guests, please reach out to our event planners directly via phone or WhatsApp.</li>
                <li>Lounge and patio seating is subject to availability and weather conditions.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Reservation Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-[32px] p-8 md:p-12 shadow-2xl border border-white/10 relative">
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name Input */}
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] tracking-[0.15em] text-textGray uppercase font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kabir Dev"
                      className="w-full bg-bgDark/50 border border-white/10 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300 font-sans"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-500 font-sans tracking-wide">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Mobile Input */}
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] tracking-[0.15em] text-textGray uppercase font-semibold">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-bgDark/50 border border-white/10 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300 font-sans"
                      {...register('mobile', {
                        required: 'Mobile is required',
                        pattern: {
                          value: /^[0-9+\s-]{10,15}$/,
                          message: 'Please enter a valid mobile number'
                        }
                      })}
                    />
                    {errors.mobile && (
                      <span className="text-[10px] text-red-500 font-sans tracking-wide">
                        {errors.mobile.message}
                      </span>
                    )}
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Email Input */}
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] tracking-[0.15em] text-textGray uppercase font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. kabir@gmail.com"
                      className="w-full bg-bgDark/50 border border-white/10 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300 font-sans"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-500 font-sans tracking-wide">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Guests Input */}
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] tracking-[0.15em] text-textGray uppercase font-semibold flex items-center gap-1">
                      <FiUsers size={12} /> Number of Guests
                    </label>
                    <select
                      className="w-full bg-bgDark/50 border border-white/10 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300 font-sans"
                      {...register('guests', { required: 'Please select guest count' })}
                    >
                      <option value="" disabled className="bg-bgCard">Select guests</option>
                      <option value="1 Guest" className="bg-bgCard">1 Guest</option>
                      <option value="2 Guests" className="bg-bgCard">2 Guests</option>
                      <option value="3 Guests" className="bg-bgCard">3 Guests</option>
                      <option value="4 Guests" className="bg-bgCard">4 Guests</option>
                      <option value="5 Guests" className="bg-bgCard">5 Guests</option>
                      <option value="6 Guests" className="bg-bgCard">6 Guests</option>
                      <option value="7 Guests" className="bg-bgCard">7 Guests</option>
                      <option value="8 Guests" className="bg-bgCard">8+ Guests (Call/WhatsApp)</option>
                    </select>
                    {errors.guests && (
                      <span className="text-[10px] text-red-500 font-sans tracking-wide">
                        {errors.guests.message}
                      </span>
                    )}
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  
                  {/* Date Input */}
                  <div className="space-y-2 text-left sm:col-span-1">
                    <label className="text-[10px] tracking-[0.15em] text-textGray uppercase font-semibold flex items-center gap-1">
                      <FiCalendar size={12} /> Date
                    </label>
                    <input
                      type="date"
                      className="w-full bg-bgDark/50 border border-white/10 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300 font-sans cursor-pointer"
                      {...register('date', { required: 'Date is required' })}
                    />
                    {errors.date && (
                      <span className="text-[10px] text-red-500 font-sans tracking-wide">
                        {errors.date.message}
                      </span>
                    )}
                  </div>

                  {/* Time Input */}
                  <div className="space-y-2 text-left sm:col-span-1">
                    <label className="text-[10px] tracking-[0.15em] text-textGray uppercase font-semibold flex items-center gap-1">
                      <FiClock size={12} /> Time
                    </label>
                    <input
                      type="time"
                      className="w-full bg-bgDark/50 border border-white/10 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300 font-sans cursor-pointer"
                      {...register('time', { required: 'Time is required' })}
                    />
                    {errors.time && (
                      <span className="text-[10px] text-red-500 font-sans tracking-wide">
                        {errors.time.message}
                      </span>
                    )}
                  </div>

                  {/* Occasion Input */}
                  <div className="space-y-2 text-left sm:col-span-1">
                    <label className="text-[10px] tracking-[0.15em] text-textGray uppercase font-semibold">
                      Booking Type
                    </label>
                    <select
                      className="w-full bg-bgDark/50 border border-white/10 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300 font-sans"
                      {...register('occasion')}
                    >
                      <option value="Table Reservation" className="bg-bgCard">Reserve a Table</option>
                      <option value="Birthday Celebration" className="bg-bgCard">Book Birthday Celebration</option>
                      <option value="Anniversary Package" className="bg-bgCard">Anniversary Package</option>
                      <option value="Corporate Event Booking" className="bg-bgCard">Corporate Event Booking</option>
                      <option value="Private Dining Reservation" className="bg-bgCard">Private Dining Reservation</option>
                    </select>
                  </div>

                </div>

                {/* Message Input */}
                <div className="space-y-2 text-left">
                  <label className="text-[10px] tracking-[0.15em] text-textGray uppercase font-semibold">
                    Additional Notes / Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Requesting a quiet candlelit table on the patio or food allergies..."
                    className="w-full bg-bgDark/50 border border-white/10 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300 font-sans resize-none"
                    {...register('message')}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gold text-bgDark text-xs font-bold tracking-[0.25em] uppercase hover:bg-gold-hover transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-gold/20"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-bgDark border-t-transparent rounded-full animate-spin" />
                  ) : (
                    'Confirm Reservation Request'
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Booking Success Modal */}
      <AnimatePresence>
        {showSuccessModal && submittedData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bgDark/90 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="w-full max-w-md bg-bgCard border border-gold/30 rounded-[32px] p-8 text-center space-y-6 relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-6 right-6 text-textGray hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <FiX size={18} />
              </button>

              {/* Success Badge */}
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto text-gold animate-bounce">
                <FiCheckCircle size={32} />
              </div>

              {/* Messaging */}
              <div className="space-y-2">
                <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-bold">
                  Reservation Received
                </span>
                <h3 className="text-2xl font-serif text-white font-medium">
                  Thank you, {submittedData.name}!
                </h3>
                <p className="text-xs text-textGray font-sans leading-relaxed">
                  We have registered your reservation request. A confirmation SMS and email have been dispatched to <strong>{submittedData.mobile}</strong> and <strong>{submittedData.email}</strong>.
                </p>
              </div>

              {/* Overview Details */}
              <div className="border-t border-b border-white/5 py-4 my-2 text-left text-xs font-sans space-y-2">
                <div className="flex justify-between">
                  <span className="text-textGray/65">Date:</span>
                  <span className="text-white font-medium">{submittedData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-textGray/65">Time:</span>
                  <span className="text-white font-medium">{submittedData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-textGray/65">Guests:</span>
                  <span className="text-white font-medium">{submittedData.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-textGray/65">Occasion:</span>
                  <span className="text-gold font-medium">{submittedData.occasion}</span>
                </div>
              </div>

              <p className="text-[10px] text-textGray/50 font-sans italic">
                For urgent modifications, please call the Patio Desk directly.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
