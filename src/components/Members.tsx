import React from "react";
import CardPerson from "./CardPerson";
import SlideUp from "./SlideUp";
import { useLanguage } from "@/components/LanguageContext";

export function Members() {
  const {language} = useLanguage();
  const text = {
    title: language === 'EN' ? 'Our Leadership Team' : 'Nuestro Equipo de Liderazgo',
    subtitle: language === 'EN' ? 'Meet the experts driving innovation and excellence at Ecua Code Forge' : 'Conoce a los expertos que impulsan la innovación y la excelencia en Ecua Code Forge.',
    role1: language === 'EN' ? 'Developer' : 'Desarrollador',
    role2: language === 'EN' ? 'Lead Developer' : 'Desarrollador Líder',
    role3: language === 'EN' ? 'Intern' : 'Pasante',
  }
  
  const teamMembers = [
    { id: 1, name: "Doménica Criollo", role: text.role3, image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/dome.jpeg` },
    { id: 2, name: "Jairo Cabrera", role: text.role2, image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/jairo.jpeg` },
    { id: 3, name: "Jinson Medina", role: text.role1, image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/jinson.jpeg` },
    { id: 4, name: "Erick Armijos", role: text.role1, image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/erick.jpeg` },
    { id: 5, name: "Diego Pazmiño", role: text.role1, image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/diego.jpeg` },
    { id: 6, name: "David Velasco", role: text.role1, image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/david.jpeg` },
    { id: 7, name: "Omar Gualotuña", role: text.role1, image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/omar.jpeg` },
    { id: 8, name: "Adhisson Cedeño", role: text.role1, image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/adhisson.jpeg` },
  ];

  return (
    <div className="team-carousel-section">
      <SlideUp>
        <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-700 to-blue-500 text-2xl md:text-4xl lg:text-5xl pt-16 md:pt-16 lg:pt-20 pb-4 md:pb-5 lg:pb-8 relative z-20 font-bold tracking-tight">
          {text.title}
        </h1>
        <p className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto text-sm md:text-base lg:text-lg text-neutral-500 text-center mb-8 sm:mb-10 lg:mb-12">
          {text.subtitle}
        </p>
      </SlideUp>
      
      {/* Horizontal Carousel for all devices */}
      <div className="team-carousel-container w-full overflow-hidden">
        <div className="team-carousel flex gap-4 sm:gap-6 md:gap-8 animate-scroll whitespace-nowrap">
          {/* First set */}
          {teamMembers.map((member) => (
            <div key={`${member.id}-1`} className="inline-flex">
              <CardPerson member={member} />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {teamMembers.map(member => (
            <div key={`${member.id}-2`} className="inline-flex">
              <CardPerson member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Members;