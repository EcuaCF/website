"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { AnimatedServices } from "@/components/ui/animated-services";
import { HoverBorderGradient } from "@/components/ui/button-border";
import TrustedBy from "@/components/Trusted-by";
import Clients from "@/components/Clients";
import SlideUp from "@/components/SlideUp";
import { useLanguage } from "@/components/LanguageContext";

export default function Home() {
  const {language} = useLanguage();
  const text = {
    special: language === 'EN' ? 'Our Specialized Solutions' : 'Nuestras Soluciones Especializadas',
    custom: language === 'EN' ? 'From custom software development to advanced AI implementation, we deliver tailored solutions to meet your unique business challenges.' : 'Desde el desarrollo de software a medida hasta la implementación de inteligencia artificial avanzada, ofrecemos soluciones personalizadas para satisfacer sus desafíos empresariales únicos.',
    name1: language === 'EN' ? 'AI & ML Solutions' : 'Soluciones de Inteligencia Artificial y Machine Learning',
    name2: language === 'EN' ? 'Custom Software Development' : 'Desarrollo de Software Personalizado',
    name3: language === 'EN' ? 'Document Management and Form Generation' : 'Gestión Documental y Generación de Formularios',
    name4: language === 'EN' ? 'Data Collection with Custom Calculations' : '	Recolección de Datos con Cálculos Personalizados',
    name5: language === 'EN' ? 'Insurance Technology' : 'Tecnología para Seguros',
    name6: language === 'EN' ? 'Technical support' : 'Soporte Técnico',
    name7: language === 'EN' ? 'Training on Technologies and Software' : 'Capacitación en Tecnologías y Software',
    description1: language === 'EN' ? 'Process automation powered by AI, combined with advanced data analysis and predictive modeling, enables organizations to make faster decisions. By leveraging specialized technological equipment designed for AI, businesses can optimize strategies, ultimately driving efficiency, innovation, and sustainable growth.' : 'La automatización de procesos impulsada por IA, combinada con el análisis de datos avanzado y el modelado predictivo, permite a las organizaciones tomar decisiones más rápidas. Al aprovechar equipos tecnológicos especializados diseñados para IA, las empresas pueden optimizar estrategias, impulsando en última instancia la eficiencia, la innovación y el crecimiento sostenible.',
    description2: language === 'EN' ? 'Our team of expert developers creates custom web applications fully adapted to your needs. By designing modern and secure platforms, we help optimize processes and deliver software solutions that align with your specific business requirements, ensuring efficiency, scalability, and long-term value.' : 'Nuestro equipo de desarrolladores expertos crea aplicaciones web personalizadas y totalmente adaptadas a sus necesidades. Al diseñar plataformas modernas y seguras, ayudamos a optimizar procesos y a ofrecer soluciones de software que se alinean con sus requisitos empresariales específicos, asegurando eficiencia, escalabilidad y valor a largo plazo.',
    description3: language === 'EN' ? 'Document digitization, combined with the automatic generation of invoices, contracts, and digital reports, streamlines business operations by reducing errors and minimizing management time. This approach ensures greater accuracy, efficiency, and productivity.' : 'La digitalización de documentos, combinada con la generación automática de facturas, contratos e informes digitales, agiliza las operaciones comerciales al reducir errores y minimizar el tiempo de gestión. Este enfoque garantiza una mayor precisión, eficiencia y productividad.',
    description4: language === 'EN' ? 'Real-time data collection, processing, and analysis enable businesses to access valuable insights instantly. With advanced calculations that deliver precise and reliable information, organizations can make informed decisions, optimize strategies, and stay ahead in a competitive environment.' : 'La recolección, el procesamiento y el análisis de datos en tiempo real permiten a las empresas acceder a información valiosa al instante. Con cálculos avanzados que ofrecen información precisa y confiable, las organizaciones pueden tomar decisiones informadas, optimizar estrategias y mantenerse a la vanguardia en un entorno competitivo.',
    description5: language === 'EN' ? 'Specialized solutions for P&C insurance and claims processing, optimizing workflows and enhancing customer experiences in the insurance sector.' : 'Soluciones especializadas para seguros de P&C (Propiedad y Accidentes) y procesamiento de reclamos, optimizando los flujos de trabajo y mejorando las experiencias de los clientes en el sector asegurador.',
    description6: language === 'EN' ? 'With 24/7 availability, preventive and corrective maintenance, and a highly trained multidisciplinary team, we ensure continuous support and reliable solutions. Our experts work proactively to keep systems running smoothly, maximizing operational efficiency.' : 'Con disponibilidad 24/7, mantenimiento preventivo y correctivo, y un equipo multidisciplinario altamente capacitado, garantizamos soporte continuo y soluciones confiables. Nuestros expertos trabajan de forma proactiva para mantener los sistemas funcionando sin problemas, maximizando la eficiencia operativa.',
    description7: language === 'EN' ? 'Through custom workshops, technology updates, and tailored inductions on the use of digital tools, we empower teams to enhance their skills. This approach ensures effective adoption of new technologies, greater productivity, and a smoother digital transformation process.' : 'A través de talleres personalizados, actualizaciones tecnológicas e inducciones a medida sobre el uso de herramientas digitales, empoderamos a los equipos para que mejoren sus habilidades. Este enfoque garantiza la adopción efectiva de nuevas tecnologías, mayor productividad y un proceso de transformación digital más fluido.',
    subtitle1: language === 'EN' ? 'Smarter decisions through automation' : 'Decisiones más inteligentes a través de la automatización',
    subtitle2: language === 'EN' ? 'Tailor-made digital solutions' : 'Soluciones digitales a la medida',
    subtitle3: language === 'EN' ? 'Efficient digital document workflows' : 'Flujos de trabajo de documentos digitales eficientes',
    subtitle4: language === 'EN' ? 'Real-time insights for smarter strategies' : 'Información en tiempo real para estrategias más inteligentes',
    subtitle5: language === 'EN' ? 'Optimized solutions for insurance' : 'Soluciones optimizadas para seguros',
    subtitle6: language === 'EN' ? 'Reliable support anytime, anywhere' : 'Soporte confiable en cualquier momento y lugar',
    subtitle7: language === 'EN' ? 'Empowering teams with digital skills' : 'Potenciando equipos con habilidades digitales',
  }
  return (
    <div className="relative">
      <section className="w-full bg-black flex items-center justify-center relative z-20">
        {SparklesPreview(language)}
      </section>
      
      <section className="relative z-20 bg-white pb-6">
        {TrustedBy()}
      </section>
      
      <section className="w-full bg-black relative z-20 py-12 md:py-16 lg:py-20">
        <SlideUp>
          <div className="text-white flex flex-col items-center justify-center px-4 md:px-8 lg:px-12">
            <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-neutral-300 text-2xl md:text-4xl lg:text-5xl py-2 md:py-6 lg:py-10 relative z-20 font-bold tracking-tight">{text.special}</h1>
            <p className="mx-auto text-sm md:text-base lg:text-lg text-neutral-400 text-center mb-6 md:mb-8 max-w-2xl lg:max-w-4xl">{text.custom}</p>
          </div>
        </SlideUp>
        <div className="flex items-center justify-center px-4 md:px-8">
          {AnimatedServices({ services: [
            { 
              name: text.name1, 
              description: text.description1,
              subtitle: text.subtitle1,
              src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/solutions/AI-solutions.jpg`
            },
            { 
              name: text.name2, 
              description: text.description2,
              subtitle: text.subtitle2,
              src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/solutions/Coding.jpeg`
            },
            { 
              name: text.name3, 
              description: text.description3,
              subtitle: text.subtitle3,
              src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/solutions/documents.jpg`
            },
            { 
              name: text.name4, 
              description: text.description4,
              subtitle: text.subtitle4,
              src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/solutions/data-collection.jpg`
            },
            { 
              name: text.name5, 
              description: text.description5,
              subtitle: text.subtitle5,
              src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/solutions/Insurance.jpg`
            },
            { 
              name: text.name6, 
              description: text.description6,
              subtitle: text.subtitle6,
              src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/solutions/tech-support.jpg`
            },
            { 
              name: text.name7, 
              description: text.description7,
              subtitle: text.subtitle7,
              src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/solutions/training.jpg`
            }
          ] })}
        </div>
      </section>
      
      <section className="relative z-20">
        {Clients()}
      </section>
      <section className="relative z-20 bg-white py-12 md:py-16 lg:py-20">
        {TypewriterEffectDemo(language)}
      </section>
    </div>
  );
}

function SparklesPreview(language:string) {
  const translations = {
    title1: language === 'EN' ? 'Custom AI Solutions for Global' : 'Soluciones de IA Personalizadas para',
    title2: language === 'EN' ? 'Innovation' : 'Innovación Global',
    paragraph: language === 'EN' ? 'Bridging Ecuador and the US with cutting-edge machine learning and artificial intelligence solutions tailored to transform your business operations.' : 'Conectando a Ecuador y Estados Unidos con soluciones de vanguardia en aprendizaje automático (Machine Learning) e inteligencia artificial, diseñadas a medida para transformar sus operaciones comerciales.',
    button: language === 'EN' ? 'Request a Consultation' : 'Solicitar una Consulta',
  }
  return (
    <>
      <div className="h-[40rem] sm:h-[45rem] md:h-[50rem] lg:h-[57rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md px-4">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-7xl py-4 md:py-6 lg:py-10 relative z-20 font-bold tracking-tight">
        {translations.title1} <br />{translations.title2}
        </h1>
        <p className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto text-sm md:text-base lg:text-lg text-neutral-500 text-center mb-6 md:mb-8">
          {translations.paragraph}
        </p>
        <div className="mt-6 md:mt-10 flex justify-center text-center text-sm md:text-base">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-black text-white flex items-center space-x-2"
          >
            <span className="px-4 p-2 cursor-pointer" onClick={() => window.location.href = '/contact'}>{translations.button}</span>
          </HoverBorderGradient>
      </div>
    </div>
  </>
  );
}

function TypewriterEffectDemo(language:string) {
  const translated = {
    text1: language === 'EN' ? 'Build' : 'Construye',
    text2: language === 'EN' ? 'awesome' : 'increibles',
    text3: language === 'EN' ? 'apps' : 'aplicaciones',
    text4: language === 'EN' ? 'with' : 'con',
    question: language === 'EN' ? 'Ready to Transform Your Business?' : '¿Listo para Transformar su Negocio?',
    parag: language === 'EN' ? "Let's discuss how our custom AI and software solutions can address your specific challenges and drive innovation in your organization." : 'Conversemos sobre cómo nuestras soluciones de software e IA personalizadas pueden abordar sus desafíos específicos e impulsar la innovación en su organización.',
    button1: language === 'EN' ? 'Our Services' : 'Nuestros Servicios',
    button2: language === 'EN' ? 'Contact Us' : 'Contáctanos',
  };

  const words = [
    {
      text: translated.text1,
    },
    {
      text: translated.text2,
    },
    {
      text: translated.text3,
    },
    {
      text: translated.text4,
    },
    {
      text: "Ecua",
      className: "text-blue-500",
    },
    {
      text: "Code",
      className: "text-blue-500",
    },
    {
      text: "Forge",
      className: "text-blue-500",
    },
    {
      text: "S.A.S.",
      className: "text-blue-500",
    },
  ];

  
  
  return (
    <div className="flex flex-col items-center justify-center h-auto min-h-[20rem] sm:min-h-[25rem] md:min-h-[30rem] py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6">
      <SlideUp>
        <p className="bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-700 to-blue-500 text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-3 sm:py-4 md:py-6 lg:py-8 relative z-20 font-bold tracking-tight leading-tight">
          {translated.question}
        </p>
        <p className="mx-auto text-xs sm:text-sm md:text-base lg:text-lg text-neutral-500 text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl leading-relaxed">
          {translated.parag}
        </p>
      </SlideUp>
      <div className="w-full flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
        <div className="scale-95 sm:scale-95 md:scale-100 lg:scale-100 transform-gpu">
          <TypewriterEffect words={words} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto justify-center">
        <button className="w-full sm:w-32 md:w-36 lg:w-40 h-9 sm:h-10 md:h-11 rounded-lg sm:rounded-xl bg-black border border-transparent text-white text-xs sm:text-sm md:text-base font-medium cursor-pointer transition-all duration-200 hover:bg-gray-800 active:scale-95"
        onClick={() => window.location.href = '/services'}>
          {translated.button1}
        </button>
        <button className="w-full sm:w-32 md:w-36 lg:w-40 h-9 sm:h-10 md:h-11 rounded-lg sm:rounded-xl bg-white text-black border border-gray-300 text-xs sm:text-sm md:text-base font-medium cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 active:scale-95"
        onClick={() => window.location.href = '/contact'}>
          {translated.button2}
        </button>
      </div>
    </div>
  );
}