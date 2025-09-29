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
                {WhyChooseUs()}
            </section>
            <section className="w-full bg-white h-100">
                <div className="text-black text-center">KNOW YOUR REQUIREMENTS</div>
            </section>
        </div>
    );
}

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];


