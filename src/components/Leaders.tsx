import React from "react";
import CardPerson from "./CardPerson";
import SlideUp from "./SlideUp";
import { useLanguage } from "@/components/LanguageContext";

export function Leaders() {
  const {language} = useLanguage();
  const text = {
    title: language === 'EN' ? 'Company Leadership' : 'Liderazgo de la Compañía',
    subtitle: language === 'EN' ? 'Meet the people who make our vision possible.' : 'Conoce a las personas que hacen posible nuestra visión.',
    role1: language === 'EN' ? 'CEO' : 'CEO',
    role2: language === 'EN' ? 'Office Manager' : 'Gerente de Oficina',
  }
  
  const teamLeaders = [
    { id: 1, name: "Sean Pitcher", role: text.role1, image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/leaders/sean_pitcher.png` },
    { id: 2, name: "Luz Garzón", role: text.role2, image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/leaders/luz.png` },
  ];

  return (
    <div className="pb-10 pt-0">
      <SlideUp>
        <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-700 to-blue-500 text-2xl md:text-4xl lg:text-5xl pt-16 md:pt-16 lg:pt-20 pb-4 md:pb-5 lg:pb-8 relative z-20 font-bold tracking-tight">
          {text.title}
        </h1>
        <p className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto text-sm md:text-base lg:text-lg text-neutral-500 text-center mb-8 sm:mb-10 lg:mb-12">
          {text.subtitle}
        </p>
      </SlideUp>
      
      {/* Horizontal Carousel for all devices */}
      
        <div className="gap-4 sm:gap-6 md:gap-8 justify-center flex flex-wrap">
          {/* First set */}
          {teamLeaders.map((member) => (
            <div key={`${member.id}-1`} className="inline-flex">
              <CardPerson member={member} />
            </div>
          ))}
        </div>
    </div>
  );
}

export default Leaders;