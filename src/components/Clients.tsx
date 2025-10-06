"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { IconArrowLeft, IconArrowRight, IconQuote } from "@tabler/icons-react";
import SlideUp from "./SlideUp";
import { GradientBackground } from "@/components/Gradient-bg-clients"
import { useLanguage } from "@/components/LanguageContext";

type Testimonial = {
  name: string;
  company: string;
  comment: string;
  photo: string;
};

export default function Clients() {
    const {language} = useLanguage();
    const text = {
      title: language === 'EN' ? 'What Our Customers Say' : 'Opiniones de Nuestros Clientes',
      paragraph: language === 'EN' ? 'Discover how our solutions have transformed businesses and enhanced operational efficiency.' : 'Descubre cómo nuestras soluciones han transformado negocios y mejorado la eficiencia operativa.',
      testimonial1: language === 'EN' ? 'Their AI solutions transformed our workflow and boosted efficiency beyond expectations!' : '¡Sus soluciones de IA transformaron nuestro flujo de trabajo e impulsaron la eficiencia más allá de las expectativas!',
      testimonial2: language === 'EN' ? 'Professional, reliable, and innovative. Highly recommend!' : 'Profesionales, confiables e innovadores. ¡Altamente recomendados!',
      testimonial3: language === 'EN' ? 'Amazing service and support. Our team loves it!' : '¡Increíble servicio y soporte! ¡A nuestro equipo le encanta!',
      testimonial4: language === 'EN' ? 'Exceeded our expectations in every way.' : 'Superó nuestras expectativas en todos los sentidos.',
      testimonial5: language === 'EN' ? 'Seamless integration and excellent communication.' : 'Integración impecable y excelente comunicación.',
      testimonial6: language === 'EN' ? 'Truly transformative solutions for our business.' : 'Soluciones verdaderamente transformadoras para nuestro negocio.',
    }
    
    const testimonials: Testimonial[] = [
    {
      name: "Alice Johnson",
      company: "TechCorp",
      comment: text.testimonial1,
      photo: "/images/customers/alice.jpg",
    },
    {
      name: "Bob Smith",
      company: "FinSolutions",
      comment: text.testimonial2,
      photo: "/images/customers/bob.jpg",
    },
    {
      name: "Clara Lee",
      company: "HealthPlus",
      comment: text.testimonial3,
      photo: "/images/customers/clara.jpg",
    },
    {
      name: "David Green",
      company: "InsureCo",
      comment: text.testimonial4,
      photo: "/images/customers/david.jpg",
    },
    {
      name: "Eva Martinez",
      company: "RetailHub",
      comment: text.testimonial5,
      photo: "/images/customers/eva.jpg",
    },
    {
      name: "Frank Wilson",
      company: "EduTech",
      comment: text.testimonial6,
      photo: "/images/customers/frank.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const autoPlayDelay = 4000;

  // Handle responsive card visibility
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1280) { // xl screens
        setVisibleCards(3);
      } else if (window.innerWidth >= 1024) { // lg screens
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) { // md screens
        setVisibleCards(2);
      } else { // sm screens
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Calculate responsive card dimensions
  const getCardDimensions = () => {
    if (typeof window === 'undefined') return { width: 300, gap: 20 };
    
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) return { width: 380, gap: 24 };
    if (screenWidth >= 1024) return { width: 350, gap: 20 };
    if (screenWidth >= 768) return { width: 320, gap: 16 };
    return { width: 300, gap: 16 };
  };

  const { width: cardWidth, gap } = getCardDimensions();

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, autoPlayDelay);

    return () => clearInterval(interval);
  }, []);

  // Calculate the translateX value to center the current card
  const calculateTranslateX = () => {
    const containerWidth = cardWidth * visibleCards + gap * (visibleCards - 1);
    const centerPosition = (containerWidth - cardWidth) / 2;
    return -index * (cardWidth + gap) + centerPosition;
  };

  return (
    <main className="w-full min-h-screen bg-cover bg-center relative flex flex-col items-center justify-center overflow-hidden py-8 md:py-12 lg:py-16">
      <GradientBackground />
      <div className="absolute inset-0 -z-10 bg-black/20" />
      
      {/* Header Section */}
      <div className="relative z-10 text-center py-4 px-4 w-full max-w-6xl">
        <SlideUp>
          <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-500 to-neutral-300 text-3xl sm:text-4xl md:text-5xl py-2 relative z-20 font-bold tracking-tight">
            {text.title}
          </h1>
          <p className="mx-auto text-sm sm:text-base md:text-lg text-white dark:text-neutral-300 text-center mt-4 md:mt-7 mb-6 md:mb-8 max-w-2xl">
            {text.paragraph}
          </p>
        </SlideUp>
      </div>
    
      {/* Carousel Section */}
      <SlideUp>
        <div className="relative z-10 w-full max-w-7xl flex items-center justify-center py-4 md:py-8 px-4">
          {/* Left Arrow - Responsive positioning */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 md:p-4 bg-white/90 hover:bg-white cursor-pointer rounded-full shadow-xl transition-all duration-200 border border-gray-200"
          >
            <IconArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          </button>

          {/* Carousel container */}
          <div className="overflow-hidden w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[70vw]">
            <motion.div
              className="flex"
              style={{ gap: `${gap}px` }}
              animate={{ x: calculateTranslateX() }}
              transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
            >
              {testimonials.map((t, idx) => {
                const distanceFromCenter = Math.abs(idx - index);
                let opacity = 1;
                let scale = 1;
                
                // Adjust opacity and scale based on distance from center
                if (distanceFromCenter === 1 && visibleCards > 1) {
                  opacity = 0.6;
                  scale = 0.9;
                } else if (distanceFromCenter >= 2 && visibleCards > 2) {
                  opacity = 0.3;
                  scale = 0.8;
                } else if (distanceFromCenter > 0 && visibleCards === 1) {
                  opacity = 0;
                  scale = 0.8;
                }

                return (
                  <div
                    key={idx}
                    className="flex-shrink-0 bg-white/90 backdrop-blur-md rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-lg relative transition-all duration-300"
                    style={{ 
                      width: `${cardWidth}px`,
                      opacity,
                      transform: `scale(${scale})`,
                    }}
                  >
                    {/* Large Quote Icon */}
                    <div className="absolute top-2 right-4 md:right-8 text-blue-500/20">
                      <IconQuote className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
                    </div>

                    {/* Comment */}
                    <div className="relative z-10">
                      <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed pt-2 md:pt-3">
                        {t.comment}
                      </p>
                    </div>

                    {/* Name, Company & Photo */}
                    <div className="flex items-center justify-between mt-4 md:mt-6">
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-900 text-base sm:text-lg md:text-xl truncate">
                          {t.name}
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm md:text-base truncate">
                          {t.company}
                        </p>
                      </div>
                      <div className="ml-3 sm:ml-4 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <Image
                          src={t.photo}
                          alt={t.name}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Arrow - Responsive positioning */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 md:p-4 bg-white/90 hover:bg-white cursor-pointer rounded-full shadow-xl transition-all duration-200 border border-gray-200"
          >
            <IconArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          </button>

          {/* Single Dots Indicator - Only show on desktop */}
          <div className="absolute -bottom-8 sm:-bottom-10 md:-bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                className={`transition-all duration-200 ${
                  idx === index 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                style={{
                  width: idx === index ? '12px' : '8px',
                  height: idx === index ? '12px' : '8px',
                  borderRadius: '50%'
                }}
              />
            ))}
          </div>
        </div>
      </SlideUp>
    </main>
  );
}