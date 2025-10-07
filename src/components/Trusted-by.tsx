"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import SlideUp from "./SlideUp";
import { TrustedIcon } from "./trusted-icon";
import { useLanguage } from "@/components/LanguageContext";

const logos = [
  "/images/industry-leaders/core-logo.png",
  "/images/industry-leaders/HDI-logo.png",
  "/images/industry-leaders/NPIA-logo.png",
  "/images/industry-leaders/PCC-logo.png",
  "/images/industry-leaders/sterling-logo.png",
  "/images/industry-leaders/quick-silver-logo.gif",
];

export default function TrustedBy() {
  const {language} = useLanguage();
  const text = {
    title: language === 'EN' ? 'Trusted by Industry Leaders' : 'Con la Confianza de Líderes de la Industria',
    paragraph: language === 'EN' ? 'Our solutions are powering innovation across top businesses worldwide. We have partnered with forward-thinking companies across Ecuador and the United States to deliver transformative digital solutions.' : 'Nuestras soluciones están impulsando la innovación en las principales empresas a nivel mundial. Nos hemos asociado con compañías con visión de futuro en Ecuador y Estados Unidos para ofrecer soluciones digitales transformadoras.',
  }
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trackRef.current) {
      // Duplicate logos to make the loop seamless
      const track = trackRef.current;
      track.innerHTML += track.innerHTML;
    }
  }, []);

  return (
    <section className="relative w-full bg-white py-8 md:py-12 lg:py-16">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <SlideUp>
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-700 to-blue-500 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight py-4 md:py-6 lg:py-8">
              {text.title}
            </h1>
            <p className="mx-auto text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-500 text-center max-w-2xl lg:max-w-3xl leading-relaxed">
              {text.paragraph}
            </p>
            </div>
        </SlideUp>
        <SlideUp>
          <div className="flex justify-center mt-8 md:mt-12">
            <div className="scale-90 sm:scale-100">
              {TrustedIcon()}
            </div>
          </div>
        </SlideUp>
      </div>

      <div className="relative mt-8 md:mt-12 lg:mt-16 w-full overflow-hidden">
        {/* Gradient fades left/right */}
        <div className="pointer-events-none absolute inset-y-0 left-0 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Logo track */}
        <div
          ref={trackRef}
          className="flex animate-scroll gap-6 sm:gap-8 md:gap-10 whitespace-nowrap"
        >
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 hover:grayscale-100 transition-all duration-300 flex items-center justify-center"
              style={{
                  width: 'clamp(120px, 20vw, 280px)',
                  height: 'clamp(80px, 15vw, 160px)'
              }}
            >
              <Image
                src={logo}
                alt={`logo-${idx}`}
                width={300} // Set your preferred width
                height={200} // Set your preferred height
                style={{
                    objectFit: "contain",
                    borderRadius: "10px",
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
