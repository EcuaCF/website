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
  { id: 1, name: "Doménica Criollo", role: text.role3, image: "/images/dome.jpeg" },
  { id: 2, name: "Jairo Cabrera", role: text.role2, image: "/images/jairo.jpeg" },
  { id: 3, name: "Jinson Medina", role: text.role1, image: "/images/jinson.jpeg" },
  { id: 4, name: "Erick Armijos", role: text.role1, image: "/images/erick.jpeg" },
  { id: 5, name: "Diego Pazmiño", role: text.role1, image: "/images/diego.jpeg" },
  { id: 6, name: "David Velasco", role: text.role1, image: "/images/david.jpeg" },
  { id: 7, name: "Omar Gualotuña", role: text.role1, image: "/images/omar.jpeg" },
  { id: 8, name: "Adhisson Cedeño", role: text.role1, image: "/images/adhisson.jpeg" },
  ];

  return (
    <div className="team-carousel-section pt-9">
      <SlideUp>
        <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-700 to-blue-500 sm:text-3xl md:text-4xl lg:text-5xl py-2 md:py-10 relative z-20 font-bold tracking-tight">{text.title}</h1>
        <p className="mx-auto text-sm md:text-lg text-neutral-500 text-center pb-12">{text.subtitle}</p>
      </SlideUp>
      <div className="team-carousel-container">
        <div className="team-carousel"> 
          {/* First set */}
          {teamMembers.map((member) => (
            <CardPerson member={member} key={member.name}/>
          ))}
          {/* Duplicate set for seamless loop */}
          {teamMembers.map(member => (
            <CardPerson member={member} key={member.name}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Members;