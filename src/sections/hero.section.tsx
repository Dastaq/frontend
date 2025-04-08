

'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { slides } from '../constant/slider.constant';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[90vh] max-h-[1000px] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={slides[currentSlide].image}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto flex h-full items-center px-4">
        <div className="max-w-2xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              {/* Main Headline - Larger Size */}
              <h1 className="mb-4 px-4 pt-10 text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
                Shop Premium Electronics
              </h1>
              
              {/* Value Proposition - More Prominent */}
              <p className="mb-4 text-2xl font-medium md:text-3xl">
                Free 2-Day Delivery & 24/7 Support
              </p>
              
              {/* Promo Badge - Slightly Larger */}
              <motion.h2
                className={`mb-4 inline-block rounded-full px-5 py-2 text-base font-bold ${slides[currentSlide].bgColor}`}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {slides[currentSlide].title}
              </motion.h2>
              
              {/* Slide Subtitle - Larger Size */}
              <h3 className="mb-6 text-3xl font-bold md:text-4xl">
                {slides[currentSlide].subtitle}
              </h3>
              
              
              {/* Description - Slightly Larger */}
              <p className="mb-8 text-xl">{slides[currentSlide].description}</p>
              

              {/* CTA Button - More Prominent */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl bg-rose-600 px-10 py-4 text-xl font-bold text-white shadow-2xl hover:bg-rose-700"
              >
                {slides[currentSlide].cta}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicators - Slightly Larger */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-10 rounded-full transition-all ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};


export default HeroSection;