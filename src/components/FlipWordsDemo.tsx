'use client';

import { useLanguage } from "./LanguageContext";
import SlideUp from "./SlideUp";
import { FlipWords } from "./ui/FlipWords";

const FlipWordsDemo = () => {
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
    <div className="min-h-[35rem] flex justify-center items-center py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Mobile & Tablet: Stacked layout */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-8">
          <SlideUp>
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {text.title}
              </h1>
              <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
                {text.subtitle}
              </p>
            </div>
          </SlideUp>
          
          <div className="text-2xl sm:text-3xl font-normal text-neutral-600 dark:text-neutral-400">
            {text.build}{" "}
            <FlipWords words={words} /> <br />
            {text.text}
          </div>
        </div>

        {/* Desktop: Side by side layout */}
        <div className="hidden lg:flex justify-between items-center gap-12">
          {/* Left side - Title and subtitle */}
          <div className="flex-1 max-w-2xl">
            <SlideUp>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {text.title}
              </h1>
              <p className="text-gray-300 text-lg lg:text-xl">
                {text.subtitle}
              </p>
            </SlideUp>
          </div>

          {/* Right side - FlipWords */}
          <div className="flex-1 flex justify-center">
            <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400 text-center lg:text-right">
              {text.build}{" "}
              <FlipWords words={words} /> <br />
              {text.text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipWordsDemo;