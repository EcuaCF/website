"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { AnimatedServices } from "@/components/ui/animated-services";
import { HoverBorderGradient } from "@/components/ui/button-border";
import TrustedBy from "@/components/Carrousel";
import Clients from "@/components/Clients";
import SectionSeparator from "@/components/SectionSeparator";
import SlideUp from "@/components/SlideUp";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <section className="w-full bg-black flex items-center justify-center">
        {SparklesPreview()}
      </section>
        {TrustedBy()}
      <section className="w-full bg-black">
        <SlideUp>
          <div className="text-white flex flex-col items-center justify-center py-2 px-4 md:px-8 lg:px-12 mt-10">
              <h1 className="lg:text-4xl font-bold py-8">Our Specialized Solutions</h1>
              <p className="mx-auto mt-4 text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">From custom software development to advanced AI implementation, we deliver tailored solutions to meet your unique business challenges.</p>
          </div>
        </SlideUp>
        <div className="flex items-center justify-center py-4 mb-8">
          {AnimatedServices({ services: [
            { 
              name: "AI & ML Solutions", 
              description: "Leverage our expertise in artificial intelligence and machine learning to automate processes, gain insights from data, and make smarter business decisions.",
              subtitle: "You should add a subtitle here",
              src: "/images/Artificial-intelligence.jpg"
            },
            { 
              name: "Custom Software Development", 
              description: "From concept to deployment, our team of expert developers builds tailor-made software solutions that address your specific business requirements.",
              subtitle: "You should add a subtitle here",
              src: "/images/Coding.jpeg"
            },
            { 
              name: "Insurance Technology", 
              description: "Specialized solutions for P&C insurance and claims processing, optimizing workflows and enhancing customer experiences in the insurance sector.",
              subtitle: "You should add a subtitle here",
              src: "/images/Insurance.jpg"
            }
          ] })}
        </div>
      </section>
      <section>
        {Clients()}
      </section>
      <section className="h-120 w-full bg-white flex items-center justify-center">
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
        <SlideUp>
          <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Custom AI Solutions for Global <br />Innovation
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            Bridging Ecuador and the US with cutting-edge machine learning and artificial intelligence solutions tailored to transform your business operations.
          </p>
        </SlideUp>
        
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
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <SlideUp>
        <p className="text-black text-base lg:text-4xl font-bold mb-10">
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
