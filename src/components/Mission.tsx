"use client";

import SlideUp from "./SlideUp";

export default function MissionVision() {
  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <SlideUp>
          <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-700 to-blue-500 text-5xl py-2 md:py-10 relative z-20 font-bold tracking-tight">Our Mission & Vision</h1>
          <p className="mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-500 text-center mb-9 pt-7">
            Driving innovation through cross-border collaboration and cutting-edge technology
          </p>
        </SlideUp>
        {/* Boxes */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="p-8 border rounded-2xl shadow-md transition duration-300 hover:shadow-xl hover:border-blue-600">
            <h2 className="text-2xl font-semibold text-black">Our Mission</h2>
            <p className="mt-3 text-gray-600">
              To leverage the exceptional technical talent in Ecuador to deliver world-class AI and software solutions that transform businesses across North America and beyond. We bridge geographical boundaries to create innovative, efficient, and scalable technology solutions that address complex business challenges.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 border rounded-2xl shadow-md transition duration-300 hover:shadow-xl hover:border-blue-600">
            <h2 className="text-2xl font-semibold text-black">Our Vision</h2>
            <p className="mt-3 text-gray-600">
              To become the premier cross-border technology partner connecting Latin American expertise with global markets, recognized for our technical excellence, innovative AI implementations, and commitment to creating value through digital transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
