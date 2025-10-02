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

export function TimelineDemo() {
  const data = [
    {
      title: "Early 2025",
      content: (
        <div>
          <h1 className="font-bold text-2xl">Foundation</h1>
          <p className="mx-auto text-sm md:text-lg text-neutral-400 mt-5 mb-6">
            Ecua Code Forge was founded in Quito, Ecuador by a team of experienced software engineers with a vision to connect Ecuadorian talent with international markets.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h1 className="font-bold text-2xl">U.S.A. Expansion</h1>
          <p className="mx-auto text-sm md:text-lg text-neutral-400 mt-5 mb-6">
            Established a partnership with our first U.S. office and several insurance companies, beginning our cross-border operations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h1 className="font-bold text-2xl">AI Focus</h1>
          <p className="mx-auto text-sm md:text-lg text-neutral-400 mt-5 mb-6">
            Specializing in AI and machine learning solutions, developing our first proprietary algorithms for insurance underwriting and claims processing.
          </p>
          <div className="mb-8">
            <div className="text-s text-neutral-700 dark:text-neutral-500">
              ✅ Card grid component
            </div>
            <div className="text-s text-neutral-700 dark:text-neutral-500">
              ✅ Startup template Aceternity
            </div>
            <div className="text-s text-neutral-700 dark:text-neutral-500">
              ✅ Random file upload lol
            </div>
            <div className="text-s text-neutral-700 dark:text-neutral-500">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="text-s text-neutral-700 dark:text-neutral-500">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
        {
      title: "2025 - Present",
      content: (
        <div>
          <h1 className="font-bold text-2xl">Today</h1>
          <p className="mx-auto text-sm md:text-lg text-neutral-400 mt-5 mb-6">
            Currently serving clients across multiple industries with a team of specialists in AI, software development, and data science, with partnerships in Ecuador and the United States.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
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
  return (
    <div className="relative">
      <main className="flex-grow w-full">
        <section className="w-full relative min-h-screen overflow-hidden">
          <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-full absolute inset-0">
            <div className="relative z-10">
              <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 font-bold tracking-tight">
                This is <br /> Our Story.
              </h2>
              <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                Ecua Code Forge S.A.S is a pioneering software development company bridging talent and innovation between Ecuador and the United States, specializing in AI-driven solutions for global businesses.
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
         <p className="mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-500 text-center mb-9">
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