"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { useLanguage } from "../LanguageContext";
import Image from "next/image";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0, 300]),  // Reduced from -700 to 300
    springConfig
  );

  return (
    <div
      ref={ref}
      className="parallax min-h-screen py-70 md:py-50 lg:py-20 lg:overflow-visible lg:pb-50 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      style={{ position: "relative" }}
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 sm:space-x-6 lg:space-x-10 mb-10 md:mb-20 lg:mb-30">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  space-x-4 sm:space-x-6 lg:space-x-10 mb-5 md:mb-15 lg:mb-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 sm:space-x-6 lg:space-x-10 mb-5 md:mb-15 lg:mb-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const {language} = useLanguage();
  const text = {
    title1: language === 'EN' ? 'Meet Our' : 'Conoce Nuestros',
    title2: language === 'EN' ? 'Services' : 'Servicios',
    subtitle: language === 'EN' ? 'We build beautiful products with the latest technologies and frameworks. We are a team of passionate developers and designers that love to build amazing products.' : 'Construimos productos atractivos con las últimas tecnologías y frameworks. Somos un equipo de desarrolladores y diseñadores apasionados a los que les encanta construir productos increíbles.',
  }

  return (
    <div className="max-w-7xl relative mx-auto py-12 sm:py-20 md:py-30 lg:py-40 px-4 sm:px-6 lg:px-8 w-full left-0 top-0">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-300 text-2xl md:text-4xl lg:text-6xl py-4 sm:py-6 md:py-8 lg:py-10 relative z-20 font-bold tracking-tight">
        {text.title1} <br /> {text.title2} 
      </h1>
      <p className="max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl text-sm md:text-base lg:text-lg mt-4 sm:mt-6 lg:mt-8 dark:text-neutral-400">
        {text.subtitle} 
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-48 sm:h-60 md:h-72 lg:h-82 w-64 sm:w-80 md:w-96 lg:w-[40rem] relative shrink-0"
    >
        <Image
          src={product.thumbnail}
          height="600"
          width="850"
          className="object-cover absolute h-full w-full inset-0"
          alt={product.title}
        />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 opacity-0 group-hover/product:opacity-100 text-white text-sm sm:text-base md:text-lg">
        {product.title}
      </h2>
    </motion.div>
  );
};