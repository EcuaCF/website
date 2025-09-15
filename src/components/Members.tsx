import React from "react";
import Image from "next/image";

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
    <h1 className="team-section-title">Our Leadership Team</h1>
    <p className="text-1xl text-black text-center mb-10">Meet the experts driving innovation and excellence at Ecua Code Forge</p>
    <div className="team-carousel-container">
    <div className="team-carousel"> 
        {/* First set */}
        {teamMembers.map(member => (
        <div key={member.id} className="team-member-wrapper">
            <div className="team-member">
            <div className="member-image">
                <Image src={member.image} alt={member.name} width={500} height={900}/>
            </div>
            <div className="member-info">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
            </div>
            </div>
        </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {teamMembers.map(member => (
        <div key={`duplicate-${member.id}`} className="team-member">
            <div className="member-image">
            <Image src={member.image} alt={member.name} width={500} height={900}/>
            </div>
            <div className="member-info">
            <h4>{member.name}</h4>
            <p>{member.role}</p>
            </div>
        </div>
        ))}
    </div>
    </div>
</div>
  );
}

export default Members;