"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState, useCallback, useMemo } from "react";

type Service = {
  description: string;
  name: string;
  subtitle: string;
  src: string;
};

export const AnimatedServices = ({
  services,
  autoplay = false,
}: {
  services: Service[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % services.length);
  }, [services.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + services.length) % services.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

    const rotations = useMemo(() => {
    return services.map(() => Math.floor(Math.random() * 21) - 10);
  }, [services]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 antialiased sm:px-6 md:py-16 lg:px-8 lg:py-20">
      {/* Mobile & Tablet Layout - Stacked */}
      <div className="block lg:hidden">
        <div className="relative h-64 w-full sm:h-80">
          <AnimatePresence>
            {services.map((service, index) => (
              <motion.div
                key={service.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  rotate: isActive(index) ? 0 : rotations[index],
                  zIndex: 0,
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  rotate: isActive(index) ? 0 : isActive(index) ? 0 : rotations[index],
                  zIndex: isActive(index)
                    ? 40
                    : services.length + 2 - index,
                  y: isActive(index) ? [0, -40, 0] : 0, // Reduced movement for mobile
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  rotate: isActive(index) ? 0 : rotations[index],
                  zIndex: 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={service.src}
                  alt={service.name}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 70vw"
                  draggable={false}
                  className="h-full w-full rounded-2xl object-cover object-center sm:rounded-3xl"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Content for Mobile */}
        <div className="mt-8 flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              {services[active].name}
            </h3>
            <p className="text-sm text-blue-400 mt-2 sm:text-base">
              {services[active].subtitle}
            </p>
            <motion.p className="mt-6 text-base text-gray-300 sm:text-lg">
              {services[active].description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Navigation for Mobile */}
          <div className="flex gap-4 pt-8">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-14 items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors sm:h-12 sm:w-16"
            >
              <IconArrowLeft className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:rotate-12 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-14 items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors sm:h-12 sm:w-16"
            >
              <IconArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:-rotate-12 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Dots Indicator for Mobile */}
          <div className="flex justify-center space-x-2 pt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === active 
                    ? "bg-blue-500 scale-125" 
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by Side (Your original layout enhanced) */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-20">
        <div className="relative h-96 w-full xl:h-[500px]">
          <AnimatePresence>
            {services.map((service, index) => (
              <motion.div
                key={service.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  rotate: isActive(index) ? 0 : rotations[index],
                  zIndex: 0,
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  rotate: isActive(index) ? 0 : isActive(index) ? 0 : rotations[index],
                  zIndex: isActive(index)
                    ? 40
                    : services.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  rotate: isActive(index) ? 0 : rotations[index],
                  zIndex: 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={service.src}
                  alt={service.name}
                  fill
                  sizes="(max-width: 1280px) 40vw, 35vw"
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-white xl:text-3xl">
              {services[active].name}
            </h3>
            <p className="text-sm text-blue-400 mt-3 xl:text-base">
              {services[active].subtitle}
            </p>
            <motion.p className="mt-8 text-lg text-gray-300 xl:text-xl">
              {services[active].description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <div className="flex gap-4 pt-12">
            <button
              onClick={handlePrev}
              className="group/button flex h-12 w-16 items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors xl:h-14 xl:w-18"
            >
              <IconArrowLeft className="h-6 w-6 text-white transition-transform duration-300 group-hover/button:rotate-12 xl:h-7 xl:w-7" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-12 w-16 items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors xl:h-14 xl:w-18"
            >
              <IconArrowRight className="h-6 w-6 text-white transition-transform duration-300 group-hover/button:-rotate-12 xl:h-7 xl:w-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};