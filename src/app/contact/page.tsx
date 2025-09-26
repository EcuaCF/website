"use client";

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import ContactUs from "@/components/Contact";
import SlideUp from "@/components/SlideUp";

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
        <div className="max-w-5xl mx-auto">
            <SlideUp>
                <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
                <p className="mt-4 text-gray-300 w-160">Have questions about our services or want to discuss a potential project? We are here to help. Reach out to our team using the contact information below or fill out the form.</p>
            </SlideUp>
            </div>
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Ecua Code Forge
        </div>
    </div>
  );
}


export default function Contact (){
    return (
    <div>
        <section className="bg-black">
            {FlipWordsDemo()}
        </section>
        <section>
            {ContactUs()}
        </section>
    </div>
    );
}