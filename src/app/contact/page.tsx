"use client";

import React from "react";
import ContactUs from "@/components/Contact";
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { ParticleSphere } from "@/components/sphere"
import { useLanguage } from "@/components/LanguageContext";
import FlipWordsDemo from "@/components/FlipWordsDemo";

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
            <FlipWordsDemo />
        </section>
        <section className="bg-white">
            {ContactUs()}
        </section>
    </div>
        </div>
        
    );
}