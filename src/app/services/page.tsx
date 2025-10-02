"use client";

import SlideUp from "@/components/SlideUp";
import { AnimatedServices } from "@/components/ui/animated-services"
import React from "react";
import { HeroParallax } from "@/components/ui/parallax";
import WhyChooseUs from "@/components/choose-us";

export default function Services(){
    return (
        <div>
            <section className="bg-black">
                {HeroParallaxDemo()}
            </section>
            <section className="bg-black">
                <SlideUp>
                    <div className="text-white flex flex-col items-center justify-center">
                        <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-700 to-neutral-300 text-5xl relative z-20 font-bold tracking-tight pt-25">Our Specialized Solutions</h1>
                        <p className="mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-500 text-center mb-9 pt-7">From custom software development to advanced AI implementation, we deliver tailored solutions to meet your unique business challenges.</p>
                    </div>
                </SlideUp>
                <div className="flex items-center justify-center">
                    {AnimatedServices({ services: [
                    { 
                      name: "AI & ML Solutions", 
                      description: "Process automation powered by AI, combined with advanced data analysis and predictive modeling, enables organizations to make faster decisions. By leveraging specialized technological equipment designed for AI, businesses can optimize strategies, ultimately driving efficiency, innovation, and sustainable growth.",
                      subtitle: "Smarter decisions through automation",
                      src: "/images/solutions/AI-solutions.jpg"
                    },
                    { 
                      name: "Custom Software Development", 
                      description: "Our team of expert developers creates custom web applications fully adapted to your needs. By designing modern and secure platforms, we help optimize processes and deliver software solutions that align with your specific business requirements, ensuring efficiency, scalability, and long-term value.",
                      subtitle: "Tailor-made digital solutions",
                      src: "/images/solutions/Coding.jpeg"
                    },
                    { 
                      name: "Document management and form generation", 
                      description: "Document digitization, combined with the automatic generation of invoices, contracts, and digital reports, streamlines business operations by reducing errors and minimizing management time. This approach ensures greater accuracy, efficiency, and productivity.",
                      subtitle: "Efficient digital document workflows",
                      src: "/images/solutions/documents.jpg"
                    },
                    { 
                      name: "Data collection with custom calculations", 
                      description: "Real-time data collection, processing, and analysis enable businesses to access valuable insights instantly. With advanced calculations that deliver precise and reliable information, organizations can make informed decisions, optimize strategies, and stay ahead in a competitive environment.",
                      subtitle: "Real-time insights for smarter strategies",
                      src: "/images/solutions/data-collection.jpg"
                    },
                    { 
                      name: "Insurance Technology", 
                      description: "Specialized solutions for P&C insurance and claims processing, optimizing workflows and enhancing customer experiences in the insurance sector.",
                      subtitle: "Optimized solutions for insurance",
                      src: "/images/solutions/Insurance.jpg"
                    },
                    { 
                      name: "Technical support", 
                      description: "With 24/7 availability, preventive and corrective maintenance, and a highly trained multidisciplinary team, we ensure continuous support and reliable solutions. Our experts work proactively to keep systems running smoothly, maximizing operational efficiency.",
                      subtitle: "Reliable support anytime, anywhere",
                      src: "/images/solutions/tech-support.jpg"
                    },
                    { 
                      name: "Training on technologies and software", 
                      description: "Through custom workshops, technology updates, and tailored inductions on the use of digital tools, we empower teams to enhance their skills. This approach ensures effective adoption of new technologies, greater productivity, and a smoother digital transformation process.",
                      subtitle: "Empowering teams with digital skills",
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
  return <HeroParallax products={products} />;
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
    title: "Costumer Portal - HDI",
    thumbnail: "/images/services/CP-HDI.png",
  },
  {
    title: "PCC",
    thumbnail: "/images/services/PCC.png",
  },
  {
    title: "Costumer Portal - STM",
    thumbnail:
      "/images/services/CP-STM.png",
  },
  {
    title: "Costumer Portal - SSI",
    thumbnail:
      "/images/services/CP-SSI.png",
  },
];


