"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { AnimatedServices } from "@/components/ui/animated-services";

export default function Home() {
  return (
    <div className="min-h-screeen w-full flex flex-col items-center justify-center">
      <section className="min-h-screen w-full bg-white flex items-center justify-center">
        {SparklesPreview()}
      </section>
      <section className="w-full">
        <div className="bg-black text-white flex flex-col items-center justify-center py-20 px-4 md:px-8 lg:px-12">
          <h1 className="lg:text-4xl font-bold py-5">Our Specialized Solutions</h1>
          <p>From custom software development to advanced AI implementation, we deliver tailored solutions to meet your unique business challenges.</p>
        </div>
        <div className="h-[47rem] bg-black flex items-center justify-center">
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
          {/* Trusted by Industry Leaders */}
      </section>
      <section>
          {/* What our clients say */}
      </section>
      <section className="min-h-screen w-full bg-white flex items-center justify-center">
        {TypewriterEffectDemo()}
      </section>
      <section>
        <section>
          {/* Footer */}
      </section>
      </section>
    </div>
  );
}

function SparklesPreview() {
  return (
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
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Custom AI Solutions for Global Innovation
      </h1>
      <p className="text-neutral-300 text-center mt-8 relative z-20 lg:text-1xl " style={{ maxWidth: "600px" }}>
        Bridging Ecuador and the US with cutting-edge machine learning and artificial intelligence solutions tailored to transform your business operations.
      </p>
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
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-black text-base lg:text-4xl font-bold mb-10">
        Ready to Transform Your Business?
      </p>
      <p className="text-black text-base lg:text-1xl mb-10">
        {"Let's discuss how our custom AI and software solutions can address your specific challenges and drive innovation in your organization."}
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
