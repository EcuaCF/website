"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

type Testimonial = {
  name: string;
  company: string;
  comment: string;
  photo: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Alice Johnson",
    company: "TechCorp",
    comment:
      "Their AI solutions transformed our workflow and boosted efficiency beyond expectations!",
    photo: "/images/customers/alice.jpg",
  },
  {
    name: "Bob Smith",
    company: "FinSolutions",
    comment: "Professional, reliable, and innovative. Highly recommend!",
    photo: "/images/customers/bob.jpg",
  },
  {
    name: "Clara Lee",
    company: "HealthPlus",
    comment: "Amazing service and support. Our team loves it!",
    photo: "/images/customers/clara.jpg",
  },
  {
    name: "David Green",
    company: "InsureCo",
    comment: "Exceeded our expectations in every way.",
    photo: "/images/customers/david.jpg",
  },
  {
    name: "Eva Martinez",
    company: "RetailHub",
    comment: "Seamless integration and excellent communication.",
    photo: "/images/customers/eva.jpg",
  },
  {
    name: "Frank Wilson",
    company: "EduTech",
    comment: "Truly transformative solutions for our business.",
    photo: "/images/customers/frank.jpg",
  },
];

export default function Clients() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;
  const commentBoxWidth = 800;
  const gap = 30; // gap between comment boxes

  const handleNext = () => {
    setIndex((prev) =>
      prev + 1 + visibleCount > testimonials.length ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 < 0 ? testimonials.length - visibleCount : prev - 1));
  };

  return (
    <div
      className="h-150 w-full relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/blue-back.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Title */}
      <div className="relative z-10 text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-white mb-4">
          What our customers say
        </h1>
        <p className="text-white/80 max-w-3xl mx-auto">
          Discover how our solutions have transformed businesses and enhanced operational efficiency.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative z-10 w-full flex items-center justify-center py-16">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/40 hover:bg-black/60 rounded-full"
        >
          <IconArrowLeft className="w-6 h-6 text-white" />
        </button>

        {/* Carousel viewport */}
        <div className="overflow-hidden w-full flex justify-center">
          <motion.div
            className="flex gap-6"
            style={{ width: "70%" }}
            animate={{ x: `-${index * (commentBoxWidth + gap)}px` }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[300px] bg-white/80 backdrop-blur-md rounded-xl p-6 flex flex-col justify-between"
              >
                {/* Stars */}
                <div className="flex mb-2">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400 mr-1">
                        ★
                      </span>
                    ))}
                  <span
                    className="mr-1 text-yellow-400"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1px yellow",
                    }}
                  >
                    ★
                  </span>
                </div>

                {/* Comment */}
                <p className="text-gray-800 text-sm mb-4">{t.comment}</p>

                {/* Name, Company & Photo */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.company}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/40 hover:bg-black/60 rounded-full"
        >
          <IconArrowRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
