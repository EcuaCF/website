import { useLanguage } from "./LanguageContext";
import { HeroParallax } from "./ui/parallax";

const HeroParallaxDemo = () => {
  const {language} = useLanguage();

  const text = {
    hdi: language === 'EN' ? 'Costumer Portal - HDI' : 'Portal del Cliente - HDI',
    stm: language === 'EN' ? 'Costumer Portal - STM' : 'Portal del Cliente - STM',
    ssi: language === 'EN' ? 'Costumer Portal - SSI' : 'Portal del Cliente - SSI',
  }

  const products = [
    {
      title: "HDI.",
      thumbnail: `${{process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/services/HDI3.png`,
    },
    {
      title: "HDI",
      thumbnail: `${{process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/services/HDI2.png`,
    },
    {
      title: "HDI",
      thumbnail: `${{process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/services/HDI.png`,
    },

    {
      title: "NPIA",
      thumbnail: `${{process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/services/NPIA2.png`,
    },
    {
      title: "PCC",
      thumbnail: `${{process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/services/PCC.png`,
    },
    {
      title: "NPIA",
      thumbnail: `${{process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/services/NPIA.png`,
    },

    {
      title: "SSI",
      thumbnail: `${{process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/services/SSI.png`,
    },
    {
      title: "STM",
      thumbnail: `${{process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/services/STM2.png`,
    },
    {
      title: "STM",
      thumbnail: `${{process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/services/STM.png`,
    },
    {
      title: "AI",
      thumbnail: `${{process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/services/AI.png`,
    },
    {
      title: "PCC",
      thumbnail: `${{process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/services/PCC.png`,
    },

    {
      title: text.hdi,
      thumbnail: `${{process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/services/CP-HDI.png`,
    },
    {
      title: "PCC",
      thumbnail: `${{process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/services/PCC.png`,
    },
    {
      title: text.stm,
      thumbnail:
        `${{process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/services/CP-STM.png`,
    },
    {
      title: text.ssi,
      thumbnail:
        `${{process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/services/CP-SSI.png`,
    },
  ];

  return <HeroParallax products={products} />;
};

export default HeroParallaxDemo;