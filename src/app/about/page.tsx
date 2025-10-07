"use client";           
import { BackgroundLines } from "@/components/ui/background-lines";
import React from "react";
import { Timeline } from "@/components/ui/timeline"; 
import Image from "next/image";
import Members from "@/components/Members";
import Mission from "@/components/Mission";
import { Globe } from "@/components/GlobalPresence";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import SlideUp from "@/components/SlideUp";
import OurValues from "@/components/Values";
import { useLanguage } from "@/components/LanguageContext";

export function TimelineDemo() {
  const {language} = useLanguage();
  const text = {
    title: language === 'EN' ? 'Early 2025' : 'Principios de 2025',
    subtitle: language === 'EN' ? 'Foundation' : 'Fundación',
    paragraph: language === 'EN' ? 'Ecua Code Forge was founded in Quito, Ecuador by a team of experienced software engineers with a vision to connect Ecuadorian talent with international markets.' : 'Ecua Code Forge fue fundado en Quito, Ecuador por un equipo de ingenieros de software experimentados con la visión de conectar el talento ecuatoriano con los mercados internacionales.',
    subtitle2: language === 'EN' ? 'U.S.A. Expansion' : 'Expansión a EE.UU',
    paragraph2: language === 'EN' ? 'Established a partnership with our first U.S. office and several insurance companies, beginning our cross-border operations.' : 'Establecimos una asociación con nuestra primera oficina en EE. UU. y varias compañías de seguros, dando inicio a nuestras operaciones transfronterizas.',
    subtitle3: language === 'EN' ? 'AI Focus' : 'Enfoque en la IA',
    paragraph3: language === 'EN' ? 'Specializing in AI and machine learning solutions, developing our first proprietary algorithms for insurance underwriting and claims processing.' : 'Especializándonos en soluciones de IA y aprendizaje automático (machine learning), desarrollamos nuestros primeros algoritmos patentados para la suscripción de seguros (underwriting) y el procesamiento de reclamos (claims processing).',
    title4: language === 'EN' ? '2025 - Present' : '2025 - Actualidad',
    subtitle4: language === 'EN' ? 'Today' : 'Hoy',
    paragraph4: language === 'EN' ? 'Currently serving clients across multiple industries with a team of specialists in AI, software development, and data science, with partnerships in Ecuador and the United States.' : 'Actualmente sirviendo a clientes en múltiples industrias con un equipo de especialistas en IA, desarrollo de software y ciencia de datos, y con asociaciones en Ecuador y Estados Unidos.',
  }
  const data = [
    {
      title: text.title,
      content: (
        <div>
          <h1 className="font-boldfont-bold sm:text-1x1 md:text-2xl lg:text-2xl">{text.subtitle}</h1>
          <p className="mx-auto text-sm md:text-base lg:text-lg text-neutral-400 mt-5 mb-6">
            {text.paragraph}
          </p>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h1 className="font-bold sm:text-1x1 md:text-2xl lg:text-2xl">{text.subtitle2}</h1>
          <p className="mx-auto text-sm md:text-base lg:text-lg text-neutral-400 mt-5 mb-6">
            {text.paragraph2}
          </p>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h1 className="font-bold sm:text-1x1 md:text-2xl lg:text-2xl">{text.subtitle3}</h1>
          <p className="mx-auto text-sm md:text-base lg:text-lg text-neutral-400 mt-5 mb-6">
            {text.paragraph3}
          </p>
        </div>
      ),
    },
        {
      title: text.title4,
      content: (
        <div>
          <h1 className="font-bold sm:text-1x1 md:text-2xl lg:text-2xl">{text.subtitle4}</h1>
          <p className="mx-auto text-sm md:text-base lg:text-lg text-neutral-400 mt-5 mb-6">
            {text.paragraph4}
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip bg-white">
      <Timeline data={data} />
    </div>
  );
}
 
export default function About() {
  const {language} = useLanguage();
  const text = {
    title1: language === 'EN' ? 'This is' : 'Esta es',
    title2: language === 'EN' ? 'Our Story.' : 'Nuestra Historia.',
    paragraph1: language === 'EN' ? 'Ecua Code Forge S.A.S is a pioneering software development company bridging talent and innovation between Ecuador and the United States, specializing in AI-driven solutions for global businesses.' : 'Ecua Code Forge S.A.S es una empresa pionera en desarrollo de software que une talento e innovación entre Ecuador y Estados Unidos, especializándose en soluciones impulsadas por IA para empresas a nivel mundial.',
  }

  return (
    <div className="relative">
      <main className="flex-grow w-full">
        <section className="w-full relative min-h-screen overflow-hidden">
          <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-full absolute inset-0">
            <div className="relative z-10">
              <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 font-bold tracking-tight">
                {text.title1} <br /> {text.title2}
              </h2>
              <p className="max-w-xl mx-auto text-sm md:text-base lg:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                {text.paragraph1}
              </p>
            </div>
          </BackgroundLines>
        </section>
        
        <section className="w-full bg-white">
          <TimelineDemo />
        </section>
        
        <section className="w-full bg-black">
          {OurValues()}
        </section>
        <section className="w-full bg-white">
          {Members()}
        </section>
        
        <section className="w-full bg-white">
          {Mission()}
        </section>
        
        <section className="w-full bg-white">
          {Globe()}
        </section>
        
        <section className="w-full bg-white">
          <div className="h-120 w-full flex items-center justify-center">
            {TypewriterEffectDemo()}
          </div>
        </section>
        <section className="relative z-0">
        </section>
      </main>
    </div>
  );
}

function TypewriterEffectDemo() {
  const {language} = useLanguage();
  const text = {
    text1: language === 'EN' ? 'Build' : 'Construye',
    text2: language === 'EN' ? 'awesome' : 'increibles',
    text3: language === 'EN' ? 'apps' : 'aplicaciones',
    text4: language === 'EN' ? 'with' : 'con',
    question: language === 'EN' ? 'Ready to Transform Your Business?' : '¿Listo para Transformar su Negocio?',
    parag: language === 'EN' ? "Let's discuss how our custom AI and software solutions can address your specific challenges and drive innovation in your organization." : 'Conversemos sobre cómo nuestras soluciones de software e IA personalizadas pueden abordar sus desafíos específicos e impulsar la innovación en su organización.',
    button1: language === 'EN' ? 'Our Services' : 'Nuestros Servicios',
    button2: language === 'EN' ? 'Contact Us' : 'Contáctanos',
  }

  const words = [
    {
      text: text.text1,
    },
    {
      text: text.text2,
    },
    {
      text: text.text3,
    },
    {
      text: text.text4,
    },
    {
      text: "Ecua",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Code",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Forge",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "S.A.S.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

 return (
     <div className="flex flex-col items-center justify-center h-[30rem] ">
       <SlideUp>
         <p className="bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-700 to-blue-500 text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-3 sm:py-4 md:py-6 lg:py-8 relative z-20 font-bold tracking-tight">
           {text.question}
         </p>
         <p className="mx-auto text-sm md:text-lg lg:text-lg text-neutral-700 dark:text-neutral-500 text-center mb-9">
           {text.parag}
         </p>
       </SlideUp>
         <TypewriterEffect words={words} />
       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
         <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm cursor-pointer">
           {text.button1}
         </button>
         <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm cursor-pointer">
           {text.button2}
         </button>
       </div>
     </div>
   );
}