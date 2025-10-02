import SlideUp from "./SlideUp";

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Efficiency, automation and better customer experience",
      items: [
        "Fast and organized processes.",
        "Less time on repetitive tasks.",
        "Reduction of human errors thanks to digitalization.",
        "Immediate response systems for clients.",
        "Quick and personalized responses.",
        "Access to services 24/7."
      ]
    },
    {
      icon: (
    <svg className="w-11 h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24"> 
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/> 
    </svg>
      ),
      title: "Cost reduction and scalability",
      items: [
        "Reduction in expenses, calls and manual processes.",
        "Fewer personnel required for routine tasks.",
        "Software grows without the need to replace it.",
        "Possibility of adding modules.",
        "Adaptation to market and user demands."
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Security and competitiveness in the current market",
      items: [
        "Protection of sensitive data with controlled access.",
        "Automatic backups to avoid losses.",
        "Data protection regulations.",
        "More productivity compared to competitors who work manually.",
        "Greater ability to adapt to market changes or customer needs."
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <SlideUp>
          <div className="text-center mb-16">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-700 to-blue-500 text-5xl py-2 md:py-10 relative z-20 font-bold tracking-tight">Why Choose Us</h2>
            <p className="mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-500 text-center mb-9">
              Faster, safer, and more personalized solutions for your needs.
            </p>
          </div>
        </SlideUp>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              {/* Icon Container */}
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                {feature.title}
              </h4>
              
              {/* List with checkmarks */}
              <ul className="text-left space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-gray-600">
                    <svg 
                      className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" 
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
                    <span className="text-justify">{item}</span>
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