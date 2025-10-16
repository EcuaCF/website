'use client';
import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import SlideUp from './SlideUp';

const Gallery: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

    const {language} = useLanguage();
    const text = {
        title: language === 'EN' ? 'Cutting-edge Technological Equipment' : 'Equipos Tecnológicos de Vanguardia',
        subtitle: language === 'EN' ? 'Discover our state-of-the-art infrastructure designed to drive innovation and technological development. We have artificial intelligence equipment, high-performance computing and specialized tools that position our company at the forefront of technology.' : 'Descubre nuestra infraestructura de última generación diseñada para impulsar la innovación y el desarrollo tecnológico. Contamos con equipos de inteligencia artificial, computación de alto rendimiento y herramientas especializadas que posicionan a nuestra institución a la vanguardia de la tecnología.',
        title1: language === 'EN' ? 'Comprehensive Technological Infrastructure' : 'Infraestructura Tecnológica Integral',
        subtitle1: language === 'EN' ? 'Systems with 8 H100 GPUs, 2TB DDR5 RAM, liquid cooling and NVLink interconnection for advanced AI model training and high-performance scientific simulations, complemented by computers with Intel Xeon/AMD Threadripper processors, 128GB RAM, RTX 5090 graphics cards and high-speed NVMe storage for professional development and rendering.' : 'Sistemas con 8 GPUs H100, 2TB RAM DDR5, refrigeración líquida e interconexión NVLink para entrenamiento de modelos de IA avanzada y simulaciones científicas de alto rendimiento, complementado con computadoras con procesadores Intel Xeon/AMD Threadripper, 128GB RAM, tarjetas RTX 5090 y almacenamiento NVMe de alta velocidad para desarrollo y renderizado profesional.',
        title2: language === 'EN' ? 'Digital Fabrication Laboratory' : 'Laboratorio de Fabricación Digital',
        subtitle2: language === 'EN' ? '3D printers for industrial prototyping, high-precision Artec Leo 3D scanners, Haas VF-2SS 5-axis CNC milling machines, and Siemens NX software for integrated CAD/CAM/CAE design and advanced additive manufacturing.' : 'Impresoras 3D para prototipado industrial, scanners 3D Artec Leo de alta precisión, fresadoras CNC Haas VF-2SS de 5 ejes, y software Siemens NX para diseño CAD/CAM/CAE integrado y manufactura aditiva avanzada.',
        title3: language === 'EN' ? 'Advanced Network Infrastructure' : 'Infraestructura de Red Avanzada',
        subtitle3: language === 'EN' ? 'Fiber optic infrastructure with Cisco Meraki switches, enterprise WiFi 6E, and dedicated 1Gbps connections for secure data transfer, cloud computing and high-speed connectivity for business operations.' : 'Infraestructura de fibra óptica con switches Cisco Meraki, WiFi 6E enterprise, y conexiones dedicadas de 1Gbps para transferencia segura de datos, computación en la nube y conectividad de alta velocidad para operaciones empresariales.',
        title4: language === 'EN' ? 'IoT and Embedded Systems Platform' : 'Plataforma IoT y Sistemas Embebidos',
        subtitle4: language === 'EN' ? 'NVIDIA Jetson development kits, Raspberry Pi clusters, Arduino boards and specialized sensors for Internet of Things solutions development, industrial automation and intelligent embedded systems.' : 'Kits de desarrollo NVIDIA Jetson, clusters Raspberry Pi, placas Arduino y sensores especializados para desarrollo de soluciones de Internet de las Cosas, automatización industrial y sistemas embebidos inteligentes.',
    }

  const slides = [
    {
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/gallery/pict1.jpg`,
      title: text.title1,
      description: text.subtitle1,
    },
    {
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/gallery/pict2.jpg`,
      title: text.title2,
      description: text.subtitle2,
    },
    {
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/gallery/pict3.jpeg`,
      title: text.title3,
      description: text.subtitle3,
    },
    {
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/gallery/pict4.jpg`,
      title:text.title4,
      description: text.subtitle4,
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  
    
  return (
    <section className="relative min-h-[800px] flex items-center justify-center overflow-hidden pt-20 py-17 bg-white">
      {/* Dots Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            radial-gradient(circle at 5px 5px, #1b5ff2 1px, transparent 2px),
            radial-gradient(circle at 13px 13px, #1b5ff2 1px, transparent 2px)
          `,
          backgroundSize: '15px 15px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
        }}
      />

      {/* Main Container */}
      <div className="max-w-[1400px] w-full relative mx-auto px-4 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
            <SlideUp>
                <h1 className='bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-700 to-blue-500 text-2xl md:text-4xl lg:text-5xl py-4 sm:py-6 md:py-8 lg:py-10 relative z-20 font-bold tracking-tight'>{text.title}</h1>
                <p className="mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-500 text-center mb-9">
                {text.subtitle}
                </p>  
            </SlideUp>
        </div>
        {/* Image Container */}
        <div className="relative w-full h-[300px] md:h-[580px] mb-10">
          {/* Image Slider */}
          <div className="w-full h-full relative overflow-hidden border-2 border-[#ffffff] rounded-lg shadow-lg shadow-blue-500/10">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            ))}

            {/* Blue Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-48 md:h-[300px] bg-gradient-to-t from-[#2e59b8] via-[#1b5ff2]/20 to-transparent pointer-events-none z-10" />

            {/* Text Content */}
            <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 z-20 w-[calc(100%-2rem)] md:w-[calc(100%-5rem)] text-white">
              <h1 className="italiana-regular text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-4 tracking-wide text-left leading-tight text-shadow-lg">
                {slides[currentSlide].title}
              </h1>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl text-shadow-md opacity-95 font-normal">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute right-4 md:right-8 bottom-4 md:bottom-8 flex gap-4 md:gap-5 z-30">
            <button
              onClick={prevSlide}
              className="w-8 h-8 md:w-9 md:h-9 border-2 border-[#ffffff] bg-transparent flex items-center justify-center cursor-pointer rotate-45 transition-all duration-300 ease-in-out rounded hover:bg-[#1b5ff2]"
            >
              <div className="text-[#ffffff] rotate-[-45deg] transition-colors duration-300 ease-in-out text-lg md:text-xl font-bold hover:text-white">
                ‹
              </div>
            </button>

            <button
              onClick={nextSlide}
              className="w-8 h-8 md:w-9 md:h-9 border-2 border-[#ffffff] bg-transparent flex items-center justify-center cursor-pointer rotate-45 transition-all duration-300 ease-in-out rounded hover:bg-[#1b5ff2]"
            >
              <div className="text-[#ffffff] rotate-[-45deg] transition-colors duration-300 ease-in-out text-lg md:text-xl font-bold hover:text-white">
                ›
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Text shadows */}
      <style jsx>{`
        .text-shadow-lg {
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
        }
        .text-shadow-md {
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </section>
  );
};

export default Gallery;