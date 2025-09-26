import React from "react";
import Image from "next/image";
import CardPerson from "./CardPerson";
import SlideUp from "./SlideUp";

const teamMembers = [
  { id: 1, name: "Doménica Criollo", role: "Intern", image: "/images/dome.jpeg" },
  { id: 2, name: "Jairo Cabrera", role: "Lead Developer", image: "/images/jairo.jpeg" },
  { id: 3, name: "Jinson Medina", role: "Developer", image: "/images/jinson.jpeg" },
  { id: 4, name: "Erick Armijos", role: "Developer", image: "/images/erick.jpeg" },
  { id: 5, name: "Diego Pazmiño", role: "Developer", image: "/images/diego.jpeg" },
  { id: 6, name: "David Velasco", role: "Developer", image: "/images/david.jpeg" },
  { id: 7, name: "Omar Gualotuña", role: "Developer", image: "/images/omar.jpeg" },
  { id: 8, name: "Adhisson Cedeño", role: "Developer", image: "/images/adhisson.jpeg" },
];

export function Members() {
  return (
    <div className="team-carousel-section">
      <SlideUp>
        <h1 className="team-section-title">Our Leadership Team</h1>
        <p className="text-1xl text-black text-center mb-10">Meet the experts driving innovation and excellence at Ecua Code Forge</p>
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