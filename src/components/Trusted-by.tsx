"use client";
import SlideUp from "./SlideUp";
import { TrustedIcon } from "./trusted-icon";
import { useLanguage } from "@/components/LanguageContext";

export default function TrustedBy() {
  const {language} = useLanguage();
  const text = {
    title: language === 'EN' ? 'Trusted by Industry Leaders' : 'Con la Confianza de Líderes de la Industria',
    paragraph: language === 'EN' ? 'Our solutions are powering innovation across top businesses worldwide. We have partnered with forward-thinking companies across Ecuador and the United States to deliver transformative digital solutions.' : 'Nuestras soluciones están impulsando la innovación en las principales empresas a nivel mundial. Nos hemos asociado con compañías con visión de futuro en Ecuador y Estados Unidos para ofrecer soluciones digitales transformadoras.',
  }

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
    </section>
  );
}
