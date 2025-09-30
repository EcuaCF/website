"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SlideUp from "@/components/SlideUp";

type Value = {
  id: number;
  title: string;
  image: string;
  description: string;
  colSpan: string;
  rowSpan: string;
};

const values: Value[] = [
  {
    id: 1,
    title: "Innovation",
    image: "/images/IA.jpg",
    description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions that give our clients a competitive edge.",
    colSpan: "col-span-1",
    rowSpan: "row-span-2" // Vertical image
  },
  {
    id: 2,
    title: "Cross-Border Collaboration",
    image: "/images/IA.jpg",
    description: "We believe in the power of diverse perspectives and international collaboration to solve complex problems and drive innovation.",
    colSpan: "col-span-2",
    rowSpan: "row-span-1" // Horizontal image on top
  },
  {
    id: 3,
    title: "Technical Excellence",
    image: "/images/IA.jpg",
    description: "We are committed to the highest standards of technical quality, continuously improving our skills and knowledge to deliver exceptional results.",
    colSpan: "col-span-1",
    rowSpan: "row-span-1" // Bottom left
  },
  {
    id: 4,
    title: "Integrity",
    image: "/images/IA.jpg",
    description: "We operate with transparency, honesty, and ethical practices in all our business relationships and technical implementations.",
    colSpan: "col-span-1",
    rowSpan: "row-span-1" // Bottom right
  }
];

export default function OurValues() {
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
                    Our Core
                    <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Values
                </span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                >
                    The principles that guide our work and relationships.
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
                      Learn More
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