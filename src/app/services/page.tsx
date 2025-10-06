"use client";

import SlideUp from "@/components/SlideUp";
import { AnimatedServices } from "@/components/ui/animated-services"
import React from "react";
import { HeroParallax } from "@/components/ui/parallax";
import WhyChooseUs from "@/components/choose-us";
import { useLanguage } from "@/components/LanguageContext";

export default function Services(){
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
        <div>
            <section className="bg-black">
                {HeroParallaxDemo()}
            </section>
            <section className="bg-black pt-20">
                <SlideUp>
                    <div className="text-white flex flex-col items-center justify-center">
                        <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-700 to-neutral-300 text-3xl md:text-4xl lg:text-5xl py-2 md:py-6 lg:py-10 relative z-20 font-bold tracking-tight">{text.special}</h1>
                        <p className="mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-500 text-center mb-9 pt-7">{text.custom}</p>
                    </div>
                </SlideUp>
                <div className="flex items-center justify-center">
                    {AnimatedServices({ services: [
                    { 
                      name: text.name1, 
                      description: text.description1,
                      subtitle: text.subtitle1,
                      src: "/images/solutions/AI-solutions.jpg"
                    },
                    { 
                      name: text.name2, 
                      description: text.description2,
                      subtitle: text.subtitle2,
                      src: "/images/solutions/Coding.jpeg"
                    },
                    { 
                      name: text.name3, 
                      description: text.description3,
                      subtitle: text.subtitle3,
                      src: "/images/solutions/documents.jpg"
                    },
                    { 
                      name: text.name4, 
                      description: text.description4,
                      subtitle: text.subtitle4,
                      src: "/images/solutions/data-collection.jpg"
                    },
                    { 
                      name: text.name5, 
                      description: text.description5,
                      subtitle: text.subtitle5,
                      src: "/images/solutions/Insurance.jpg"
                    },
                    { 
                      name: text.name6, 
                      description: text.description6,
                      subtitle: text.subtitle6,
                      src: "/images/solutions/tech-support.jpg"
                    },
                    { 
                      name: text.name7, 
                      description: text.description7,
                      subtitle: text.subtitle7,
                      src: "/images/solutions/training.jpg"
                    }
                    ] })}
                </div>
            </section>
            <section>
                {WhyChooseUs()}
            </section>
        </div>
    );
}

export function HeroParallaxDemo() {
  const {language} = useLanguage();
  const text = {
    hdi: language === 'EN' ? 'Costumer Portal - HDI' : 'Portal del Cliente - HDI',
    stm: language === 'EN' ? 'Costumer Portal - STM' : 'Portal del Cliente - STM',
    ssi: language === 'EN' ? 'Costumer Portal - SSI' : 'Portal del Cliente - SSI',
  }

  const products = [
  {
    title: "HDI.",
    thumbnail: "/images/services/HDI3.png",
  },
  {
    title: "HDI",
    thumbnail: "/images/services/HDI2.png",
  },
  {
    title: "HDI",
    thumbnail: "/images/services/HDI.png",
  },

  {
    title: "NPIA",
    thumbnail: "/images/services/NPIA2.png",
  },
  {
    title: "PCC",
    thumbnail: "/images/services/PCC.png",
  },
  {
    title: "NPIA",
    thumbnail: "/images/services/NPIA.png",
  },

  {
    title: "SSI",
    thumbnail: "/images/services/SSI.png",
  },
  {
    title: "STM",
    thumbnail: "/images/services/STM2.png",
  },
  {
    title: "STM",
    thumbnail: "/images/services/STM.png",
  },
  {
    title: "AI",
    thumbnail: "/images/services/AI.png",
  },
  {
    title: "PCC",
    thumbnail: "/images/services/PCC.png",
  },

  {
    title: text.hdi,
    thumbnail: "/images/services/CP-HDI.png",
  },
  {
    title: "PCC",
    thumbnail: "/images/services/PCC.png",
  },
  {
    title: text.stm,
    thumbnail:
      "/images/services/CP-STM.png",
  },
  {
    title: text.ssi,
    thumbnail:
      "/images/services/CP-SSI.png",
  },
];

  return <HeroParallax products={products} />;
}


