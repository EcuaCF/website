"use client";
import React, { JSX, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  title?: string; // Add title property
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "relative")}>
          <motion.div
            onClick={() => handleClick(card)}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={cn(
              card.className,
              "relative overflow-hidden cursor-pointer transition-all duration-300",
              selected?.id === card.id
                ? "rounded-lg absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent 
              card={card} 
              isHovered={hoveredCard === card.id}
              isSelected={selected?.id === card.id}
            />
            
            {/* Title overlay - only show when not selected and not hovered */}
            {!selected && hoveredCard !== card.id && card.title && (
              <div className="absolute top-0 left-0 w-full p-4 z-30">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                  <h3 className="text-white font-bold text-lg md:text-xl text-center">
                    {card.title}
                  </h3>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ 
  card, 
  isHovered, 
  isSelected 
}: { 
  card: Card; 
  isHovered: boolean; 
  isSelected: boolean; 
}) => {
  return (
    <>
      <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        height="500"
        width="500"
        className={cn(
          "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
          isHovered && !isSelected && "brightness-75"
        )}
        alt="thumbnail"
      />
      
      {/* Hover overlay effect */}
      {isHovered && !isSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black/20 z-20"
        />
      )}
    </>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};