"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { AnimatedServices } from "@/components/ui/animated-services";
import { HoverBorderGradient } from "@/components/ui/button-border";
import TrustedBy from "@/components/Trusted-by";
import Clients from "@/components/Clients";
import SlideUp from "@/components/SlideUp";

export default function Home() {
  return (
    <div className="relative">
      <section className="w-full bg-black flex items-center justify-center relative z-20">
        {SparklesPreview()}
      </section>
      
      <section className="relative z-20 bg-white">
        {TrustedBy()}
      </section>
      
      <section className="w-full bg-black relative z-20 pb-15 pt-20">
        <SlideUp>
          <div className="text-white flex flex-col items-center justify-center md:px-8 lg:px-12">
            <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-700 to-neutral-300 text-5xl py-2 md:py-10 relative z-20 font-bold tracking-tight">Our Specialized Solutions</h1>
            <p className="mx-auto text-sm md:text-lg text-white dark:text-neutral-300 text-center mb-4">From custom software development to advanced AI implementation, we deliver tailored solutions to meet your unique business challenges.</p>
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
      
      <section className="relative z-20">
        {Clients()}
      </section>
      <section className="relative z-20 bg-white">
        {TypewriterEffectDemo()}
      </section>
    </div>
  );
}

function SparklesPreview() {
  return (
    <>
      <div className="h-[57rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
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
        <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Custom AI Solutions for Global <br />Innovation
        </h1>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Bridging Ecuador and the US with cutting-edge machine learning and artificial intelligence solutions tailored to transform your business operations.
        </p>
        <div className="m-10 flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black text-black dark:text-white flex items-center space-x-2"
          >
            <span className="p-2 cursor-pointer">Request a Consultation</span>
          </HoverBorderGradient>
      </div>
    </div>
  </>
  );
}

function TypewriterEffectDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
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
        <p className="bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-700 to-blue-500 text-5xl py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Ready to Transform Your Business?
        </p>
        <p className="mx-auto text-sm md:text-lg text-neutral-500 text-center mb-9">
          {"Let's discuss how our custom AI and software solutions can address your specific challenges and drive innovation in your organization."}
        </p>
      </SlideUp>
        <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm cursor-pointer">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm cursor-pointer">
          Signup
        </button>
      </div>
    </div>
  );
}