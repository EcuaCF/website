"use client";
import React from "react";
import { useLanguage } from "../LanguageContext";

export const HeroParallax = () => {
  const {language} = useLanguage();
  const text = {
    title1: language === 'EN' ? 'Meet Our' : 'Conoce Nuestros',
    title2: language === 'EN' ? 'Services' : 'Servicios',
    subtitle: language === 'EN' ? 'We build beautiful products with the latest technologies and frameworks. We are a team of passionate developers and designers that love to build amazing products.' : 'Construimos productos atractivos con las últimas tecnologías y frameworks. Somos un equipo de desarrolladores y diseñadores apasionados a los que les encanta construir productos increíbles.',
  }

  return (
    <div className="max-w-7xl relative mx-auto py-12 sm:py-20 md:py-30 lg:py-40 px-4 sm:px-6 lg:px-8 w-full left-0 top-0 pt-25">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-300 text-2xl md:text-4xl lg:text-6xl py-4 sm:py-6 md:py-8 lg:py-10 relative z-20 font-bold tracking-tight">
        {text.title1} <br /> {text.title2} 
      </h1>
      <p className="max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl text-sm md:text-base lg:text-lg mt-4 sm:mt-6 lg:mt-8 dark:text-neutral-400">
        {text.subtitle} 
      </p>
    </div>
  );
};