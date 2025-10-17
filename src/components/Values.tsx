"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SlideUp from "@/components/SlideUp";
import { useLanguage } from "@/components/LanguageContext";

type Value = {
  id: number;
  title: string;
  image: string;
  description: string;
  colSpan: string;
  rowSpan: string;
};

export default function OurValues() {
  const {language} = useLanguage();
  const text = {
    title1: language === 'EN' ? 'Our Core' : 'Nuestros Valores',
    title2: language === 'EN' ? 'Values' : 'Fundamentales',
    paragraph: language === 'EN' ? 'The principles that guide our work and relationships.' : 'Los principios que guían nuestro trabajo y nuestras relaciones.',
    learn: language === 'EN' ? 'Learn more' : 'Conoce más',
    titleO: language === 'EN' ? 'Innovation' : 'Innovación',
    titleT: language === 'EN' ? 'Cross-Border Collaboration' : 'Colaboración Transfronteriza',
    titleTh: language === 'EN' ? 'Technical Excellence' : 'Excelencia Técnica',
    titleF: language === 'EN' ? 'Integrity' : 'Integridad',
    desc1: language === 'EN' ? 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions that give our clients a competitive edge.' : 'Constantemente superamos los límites y exploramos nuevas tecnologías para ofrecer soluciones de vanguardia que dan a nuestros clientes una ventaja competitiva.',
    desc2: language === 'EN' ? 'We believe in the power of diverse perspectives and international collaboration to solve complex problems and drive innovation.' : 'Creemos en el poder de las perspectivas diversas y la colaboración internacional para resolver problemas complejos e impulsar la innovación.',
    desc3: language === 'EN' ? 'We are committed to the highest standards of technical quality, continuously improving our skills and knowledge to deliver exceptional results.' : 'Estamos comprometidos con los más altos estándares de calidad técnica, mejorando continuamente nuestras habilidades y conocimientos para ofrecer resultados excepcionales.',
    desc4: language === 'EN' ? 'We operate with transparency, honesty, and ethical practices in all our business relationships and technical implementations.' : 'Operamos con transparencia, honestidad y prácticas éticas en todas nuestras relaciones comerciales e implementaciones técnicas.',
  }
  const values: Value[] = [
    {
      id: 1,
      title: text.titleO,
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/values/innovation.jpg`,
      description: text.desc1,
      colSpan: "col-span-1",
      rowSpan: "row-span-2" // Vertical image
    },
    {
      id: 2,
      title: text.titleT,
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/values/collaboration.jpg`,
      description:  text.desc2,
      colSpan: "col-span-2",
      rowSpan: "row-span-1" // Horizontal image on top
    },
    {
      id: 3,
      title: text.titleTh,
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/values/technical.jpg`,
      description:  text.desc3,
      colSpan: "col-span-1",
      rowSpan: "row-span-1" // Bottom left
    },
    {
      id: 4,
      title: text.titleF,
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/values/integrity.jpg`,
      description:  text.desc4,
      colSpan: "col-span-1",
      rowSpan: "row-span-1" // Bottom right
    }
  ];

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
  };
return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-10 md:pt-12 lg:pt-14 pb-10 md:pb-12 lg:pb-14 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <SlideUp>
        <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-bold text-2xl md:text-4xl lg:text-5xl text-white tracking-tight"
            >
              {text.title1}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-2xl md:text-4xl lg:text-5xl">
                  {text.title2}
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto text-sm md:text-base lg:text-lg pt-7 md:pt-9 lg:pt-12 pb-4 md:pb-5 lg:pb-8 text-neutral-300 text-center mb-6 sm:mb-9"
            >
              {text.paragraph}
            </motion.p>
        </div>
      </SlideUp>

      {/* Values Grid - Responsive Layout */}
      <div className="mx-auto flex justify-center">
        {/* Desktop Grid (lg and up) - Original layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-4 aspect-square max-h-[600px] w-[1000px]">
          {values.map((value, index) => (
            <ValueCard 
              key={value.id}
              value={value}
              index={index}
              activeCard={activeCard}
              handleCardClick={handleCardClick}
              setActiveCard={setActiveCard}
              text={text.learn}
            />
          ))}
        </div>

        {/* Mobile/Tablet Grid - Stacked layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl lg:hidden">
          {values.map((value, index) => (
            <div key={value.id} className="aspect-[4/3] sm:aspect-square">
              <ValueCard 
                value={value}
                index={index}
                activeCard={activeCard}
                handleCardClick={handleCardClick}
                setActiveCard={setActiveCard}
                text={text.learn}
                isMobile={true}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    </main>
  );
}

// Separate component for the value card to avoid code duplication
function ValueCard({ 
  value, 
  index, 
  activeCard, 
  handleCardClick, 
  setActiveCard, 
  text,
  isMobile = false 
}: { 
  value: Value;
  index: number;
  activeCard: number | null;
  handleCardClick: (id: number) => void;
  setActiveCard: (id: number | null) => void;
  text: string;
  isMobile?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group ${!isMobile ? `${value.colSpan} ${value.rowSpan}` : 'w-full h-full'}`}
    >
      {/* Card Container */}
      <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-gray-800">
        {/* Background Image */}
        <Image
          src={value.image}
          alt={value.title}
          fill
          sizes={isMobile ? 
            "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" : 
            "(max-width: 1024px) 100vw, 33vw"
          }
          className={`object-cover transition-all duration-500 ${
            activeCard === value.id ? 'blur-sm' : 'group-hover:scale-105'
          }`}
        />
        
        {/* Gradient Overlay - Enhanced for better text visibility */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          activeCard === value.id 
            ? 'bg-black/80' 
            : 'bg-gradient-to-t from-black/90 via-black/60 to-black/40'
        }`} />
        
        {/* Content Container */}
        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
          {/* Title and Description */}
          <div className="flex-1">
            <motion.div
              layout
              className="text-white transition-all duration-100"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                {value.title}
              </h3>
            </motion.div>

            {/* Description - Always visible on mobile, appears when active on desktop */}
            <AnimatePresence>
              {(isMobile || activeCard === value.id) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-200 text-xs sm:text-sm leading-relaxed sm:leading-normal">
                    {value.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Button - Only show on desktop when not active */}
          {!isMobile && activeCard !== value.id && (
            <motion.button
              onClick={() => handleCardClick(value.id)}
              className="relative px-4 sm:px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold text-xs sm:text-sm border border-white/30 overflow-hidden group/btn mt-2 sm:mt-4 ml-auto mr-auto"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.3)"
              }}
            >
              {/* White Aura/Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
              {text}
            </motion.button>
          )}

          {/* Mobile: Always show a subtle indicator */}
          {isMobile && (
            <div className="mt-2 text-center">
              <div className="w-6 h-1 bg-white/40 rounded-full mx-auto" />
            </div>
          )}
        </div>

        {/* Close Button - Shows when active on desktop */}
        <AnimatePresence>
          {!isMobile && activeCard === value.id && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveCard(null)}
              className="absolute top-3 right-3 w-6 h-6 sm:w-8 sm:h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors z-20 text-sm sm:text-base"
            >
              ×
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}