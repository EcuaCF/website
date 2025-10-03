"use client";

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import ContactUs from "@/components/Contact";
import SlideUp from "@/components/SlideUp";
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { ParticleSphere } from "@/components/sphere"
import { useLanguage } from "@/components/LanguageContext";

export function FlipWordsDemo() {
    const {language} = useLanguage();
    const text = {
    title: language === 'EN' ? 'Get in Touch' : 'Contáctanos',
    subtitle: language === 'EN' ? 'Have questions about our services or want to discuss a potential project? We are here to help. Reach out to our team using the contact information below or fill out the form.' : '¿Tienes preguntas sobre nuestros servicios o deseas discutir un posible proyecto? Estamos aquí para ayudarte. Comunícate con nuestro equipo utilizando la información de contacto a continuación o completa el formulario.',
    build: language === 'EN' ? 'Build' : 'Construye páginas',
    flip1: language === 'EN' ? 'incredible' : 'increíbles',
    flip2: language === 'EN' ? 'professional' : 'profesionales',
    flip3: language === 'EN' ? 'interesting' : 'interesantes',
    flip4: language === 'EN' ? 'efficient' : 'eficientes',
    flip5: language === 'EN' ? 'responsive' : 'adaptables',
    flip6: language === 'EN' ? 'inspiring' : 'inspiradoras',
    flip7: language === 'EN' ? 'modern' : 'modernas',
    flip8: language === 'EN' ? 'creative' : 'creativas',
    text: language === 'EN' ? 'websites with Ecua Code Forge' : 'con Ecua Code Forge',
    }

  const words = [text.flip1, text.flip2, text.flip3, text.flip4, text.flip5, text.flip6, text.flip7, text.flip8];

  return (
    <div className="h-[35rem] flex justify-center items-center">
        <div className="max-w-5xl mx-auto">
            <SlideUp>
                <h1 className="text-4xl font-bold text-white">{text.title}</h1>
                <p className="mt-4 text-gray-300 w-160">{text.subtitle}</p>
            </SlideUp>
        </div>
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 w-140">
            {text.build}
            <FlipWords words={words} /> <br />
            {text.text}
        </div>
    </div>
  );
}

export default function Contact (){
    const {language} = useLanguage();
    const text = {
    title: language === 'EN' ? 'Do you want to know more?' : '¿Quieres conocer más?',
    subtitle: language === 'EN' ? 'Contact Us' : 'Contáctanos',
    }

    return (
        <div>
            <div className="w-full h-screen bg-black relative">
                <div className="absolute top-20 left-0 right-0 z-10 p-6">
                    <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 font-bold tracking-tight">
                        {text.title} <br />
                        {text.subtitle}
                    </h1>
                </div>
                <Canvas camera={{ position: [-10, 1.5, 10], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <ParticleSphere />
                    <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
                </Canvas>
            </div>
        <div>
        <section className="bg-black">
            {FlipWordsDemo()}
        </section>
        <section className="bg-white">
            {ContactUs()}
        </section>
    </div>
        </div>
        
    );
}