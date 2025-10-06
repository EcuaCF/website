import { useLanguage } from "./LanguageContext";
import SlideUp from "./SlideUp";

const WhyChooseUs = () => {
  const {language} = useLanguage();
  const text = {
    title: language === 'EN' ? 'Why Choose Us' : '¿Por qué elegirnos?',
    subtitle: language === 'EN' ? 'Faster, safer, and more personalized solutions for your needs.' : 'Soluciones más rápidas, seguras y personalizadas para sus necesidades.',
    title1: language === 'EN' ? 'Efficiency, automation and better customer experience' : 'Eficiencia, automatización y mejor experiencia del cliente',
    title2: language === 'EN' ? 'Cost reduction and scalability' : 'Reducción de costos y escalabilidad',
    title3: language === 'EN' ? 'Security and competitiveness in the current market' : 'Seguridad y competitividad en el mercado actual',
    text1: language === 'EN' ? 'Fast and organized processes.' : 'Procesos rápidos y organizados.',
    text2: language === 'EN' ? 'Less time on repetitive tasks.' : 'Menos tiempo en tareas repetitivas.',
    text3: language === 'EN' ? 'Reduction of human errors thanks to digitalization.' : 'Reducción de errores humanos gracias a la digitalización.',
    text4: language === 'EN' ? 'Immediate response systems for clients.' : 'Sistemas de respuesta inmediata para clientes.',
    text5: language === 'EN' ? 'Quick and personalized responses.' : 'Respuestas rápidas y personalizadas.',
    text6: language === 'EN' ? 'Access to services 24/7.' : 'Acceso a servicios 24/7.',
    text7: language === 'EN' ? 'Reduction in expenses, calls and manual processes.' : 'Reducción de gastos, llamadas y procesos manuales.',
    text8: language === 'EN' ? 'Fewer personnel required for routine tasks.' : 'Menos personal necesario para tareas rutinarias.',
    text9: language === 'EN' ? 'Software grows without the need to replace it.' : 'El software crece sin necesidad de reemplazarlo.',
    text10: language === 'EN' ? 'Possibility of adding modules.' : 'Posibilidad de añadir módulos.',
    text11: language === 'EN' ? 'Adaptation to market and user demands.' : 'Adaptación a las demandas del mercado y de los usuarios.',
    text12: language === 'EN' ? 'Protection of sensitive data with controlled access.' : 'Protección de datos sensibles con acceso controlado.',
    text13: language === 'EN' ? 'Automatic backups to avoid losses.' : 'Copias de seguridad automáticas para evitar pérdidas.',
    text14: language === 'EN' ? 'Data protection regulations.' : 'Regulaciones de protección de datos.',
    text15: language === 'EN' ? 'More productivity compared to competitors who work manually.' : 'Más productividad en comparación con competidores que trabajan manualmente.',
    text16: language === 'EN' ? 'Greater ability to adapt to market changes or customer needs.' : 'Mayor capacidad de adaptación a los cambios del mercado o las necesidades del cliente.',
  }
  const features = [
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: text.title1,
      items: [
        text.text1,
        text.text2,
        text.text3,
        text.text4,
        text.text5,
        text.text6,
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"> 
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/> 
        </svg>
      ),
      title: text.title2,
      items: [
        text.text7,
        text.text8,
        text.text9,
        text.text10,
        text.text11,
      ]
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: text.title3,
      items: [
        text.text12,
        text.text13,
        text.text14,
        text.text15,
        text.text16,
      ]
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <SlideUp>
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-700 to-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4 sm:py-6 md:py-8 lg:py-10 relative z-20 font-bold tracking-tight">
              {text.title}
            </h2>
            <p className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg text-neutral-700 dark:text-neutral-500 text-center">
              {text.subtitle}
            </p>
          </div>
        </SlideUp>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4 sm:p-6 lg:p-8">
              {/* Icon Container */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight">
                {feature.title}
              </h4>
              
              {/* List with checkmarks */}
              <ul className="text-left space-y-2 sm:space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-gray-600">
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span className="text-xs sm:text-sm lg:text-base text-justify leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;