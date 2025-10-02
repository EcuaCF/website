"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import SlideUp from "./SlideUp";
import { TrustedIcon } from "./trusted-icon";

const logos = [
  "/images/IA.jpg",
  "/images/header-logo.gif",
  "/images/IA.jpg",
  "/images/IA.jpg",
  "/images/IA.jpg",
  "/images/IA.jpg",
];

export default function TrustedBy() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trackRef.current) {
      // Duplicate logos to make the loop seamless
      const track = trackRef.current;
      track.innerHTML += track.innerHTML;
    }
  }, []);

  return (
    <section className="relative w-full py-10 bg-white">

      <div className="mx-auto max-w-6xl px-6 text-center">
        <SlideUp>
          <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-700 to-blue-500 text-5xl py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Trusted by Industry Leaders
          </h1>
          <p className="mx-auto text-sm md:text-lg text-neutral-500 text-center">
            Our solutions are powering innovation across top businesses worldwide. We have partnered with forward-thinking companies across Ecuador and the United States to deliver transformative digital solutions.
          </p>
        </SlideUp>
        <SlideUp>
          <div className="justify-items-center mt-10">
            {TrustedIcon()}
          </div>
        </SlideUp>
      </div>

      <div className="relative mt-10 w-full overflow-hidden">
        {/* Gradient fades left/right */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Logo track */}
        <div
          ref={trackRef}
          className="flex animate-scroll gap-10 whitespace-nowrap"
        >
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="relative h-60 w-70 flex-shrink-0 grayscale hover:grayscale-0 transition flex items-center"
            >
              <Image
                src={logo}
                alt={`logo-${idx}`}
                width={300} // Set your preferred width
                height={200} // Set your preferred height
                style={{
                    objectFit: "contain",
                    borderRadius: "25px",
                    justifyContent: "center",
                }}
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
