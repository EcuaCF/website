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
      image: "/images/values/innovation.jpg",
      description: text.desc1,
      colSpan: "col-span-1",
      rowSpan: "row-span-2" // Vertical image
    },
    {
      id: 2,
      title: text.titleT,
      image: "/images/values/collaboration.jpg",
      description:  text.desc2,
      colSpan: "col-span-2",
      rowSpan: "row-span-1" // Horizontal image on top
    },
    {
      id: 3,
      title: text.titleTh,
      image: "/images/values/technical.jpg",
      description:  text.desc3,
      colSpan: "col-span-1",
      rowSpan: "row-span-1" // Bottom left
    },
    {
      id: 4,
      title: text.titleF,
      image: "/images/values/integrity.jpg",
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
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4">
      {/* Header Section */}
      <SlideUp>
        <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              {text.title1}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {text.title2}
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto text-sm md:text-lg text-neutral-300 text-center mb-9"
            >
              {text.paragraph}
            </motion.p>
        </div>
      </SlideUp>
      

      {/* values Grid - Square Layout */}
      <div className="mx-auto flex justify-center">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 aspect-square max-h-[600px] w-[1000px]">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group ${value.colSpan} ${value.rowSpan}`}
            >
              {/* Card Container - No click handler here */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-800">
                {/* Background Image */}
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className={`object-cover transition-all duration-500 ${
                    activeCard === value.id ? 'blur-sm' : 'group-hover:scale-105'
                  }`}
                />
                
                {/* Gradient Overlay - Changes based on state */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  activeCard === value.id 
                    ? 'bg-black/70' 
                    : 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
                }`} />
                
                {/* Content Container */}
                <div className="absolute inset-0 p-6 flex flex-col">
                  {/* Title */}
                  <motion.div
                    layout
                    className={`text-white ${
                      activeCard === value.id
                    } transition-all duration-100`}
                  >
                    <h3 className="text-2xl font-bold">{value.title}</h3>
                  </motion.div>

                  {/* Description - Appears below title when active */}
                  <AnimatePresence>
                    {activeCard === value.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="mt-4 flex-1 overflow-hidden"
                      >
                        <p className="text-gray-200 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Default Button - Shows when not active */}
                  {activeCard !== value.id && (
                    <motion.button
                      onClick={() => handleCardClick(value.id)}
                      className="relative px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-sm border border-white/20 overflow-hidden group/btn mt-4 ml-auto mr-auto"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(255,255,255,0.2)"
                      }}
                    >
                      {/* White Aura/Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                      {text.learn}
                    </motion.button>
                  )}
                </div>

                {/* Close Button - Shows when active */}
                <AnimatePresence>
                  {activeCard === value.id && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      onClick={() => setActiveCard(null)}
                      className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors z-20"
                    >
                      ×
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    </main>
  );
}