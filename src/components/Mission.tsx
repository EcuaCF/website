"use client";

import SlideUp from "./SlideUp";
import { useLanguage } from "@/components/LanguageContext";

export default function MissionVision() {
  const {language} = useLanguage();
  const text = {
    title: language === 'EN' ? 'Our Mission & Vision' : 'Nuestra Misión y Visión',
    subtitle: language === 'EN' ? 'Driving innovation through cross-border collaboration and cutting-edge technology' : 'Impulsando la innovación a través de la colaboración transfronteriza y la tecnología de vanguardia',
    title2: language === 'EN' ? 'Our Mission' : 'Nuestra Misión',
    text1: language === 'EN' ? 'To leverage the exceptional technical talent in Ecuador to deliver world-class AI and software solutions that transform businesses across North America and beyond. We bridge geographical boundaries to create innovative, efficient, and scalable technology solutions that address complex business challenges.' : 'Aprovechar el excepcional talento técnico en Ecuador para ofrecer soluciones de software e IA de clase mundial que transformen negocios en Norteamérica y más allá. Acortamos las fronteras geográficas para crear soluciones tecnológicas innovadoras, eficientes y escalables que aborden complejos desafíos empresariales.',
    title3: language === 'EN' ? 'Our Vision' : 'Nuestra Visión',
    text2: language === 'EN' ? 'To become the premier cross-border technology partner connecting Latin American expertise with global markets, recognized for our technical excellence, innovative AI implementations, and commitment to creating value through digital transformation.' : 'Convertirnos en el socio tecnológico transfronterizo líder que conecta la experiencia latinoamericana con los mercados globales, siendo reconocidos por nuestra excelencia técnica, las implementaciones innovadoras de IA y el compromiso de crear valor a través de la transformación digital.',
  }

  return (
    <section className="py-10 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <SlideUp>
          <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-700 to-blue-500 text-2xl md:text-4xl lg:text-5xl pt-6 md:pt-7 lg:pt-10 pb-5 md:pb-6 lg:pb-9 relative z-20 font-bold tracking-tight">{text.title}</h1>
          <p className="mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-500 text-center mb-9">
            {text.subtitle}
          </p>
        </SlideUp>
        {/* Boxes */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="p-8 border rounded-2xl shadow-md transition duration-300 hover:shadow-xl hover:border-blue-600">
            <h2 className="text-2xl font-semibold text-black">{text.title2}</h2>
            <p className="mt-3 text-gray-600 text-sm md:text-base lg:text-base">
              {text.text1}
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 border rounded-2xl shadow-md transition duration-300 hover:shadow-xl hover:border-blue-600">
            <h2 className="text-2xl font-semibold text-black">{text.title3}</h2>
            <p className="mt-3 text-gray-600 text-sm md:text-base lg:text-base">
              {text.text2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
