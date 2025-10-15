import { useLanguage } from "./LanguageContext";
import { Timeline } from "./ui/timeline";

const TimelineDemo = () => {
  const {language} = useLanguage();
  const text = {
    title: language === 'EN' ? 'Early 2025' : 'Principios de 2025',
    subtitle: language === 'EN' ? 'Foundation' : 'Fundación',
    paragraph: language === 'EN' ? 'Ecua Code Forge was founded in Quito, Ecuador by a team of experienced software engineers with a vision to connect Ecuadorian talent with international markets.' : 'Ecua Code Forge fue fundado en Quito, Ecuador por un equipo de ingenieros de software experimentados con la visión de conectar el talento ecuatoriano con los mercados internacionales.',
    subtitle2: language === 'EN' ? 'U.S.A. Expansion' : 'Expansión a EE.UU',
    paragraph2: language === 'EN' ? 'Established a partnership with our first U.S. office and several insurance companies, beginning our cross-border operations.' : 'Establecimos una asociación con nuestra primera oficina en EE. UU. y varias compañías de seguros, dando inicio a nuestras operaciones transfronterizas.',
    subtitle3: language === 'EN' ? 'AI Focus' : 'Enfoque en la IA',
    paragraph3: language === 'EN' ? 'Specializing in AI aTimelineDemond machine learning solutions, developing our first proprietary algorithms for insurance underwriting and claims processing.' : 'Especializándonos en soluciones de IA y aprendizaje automático (machine learning), desarrollamos nuestros primeros algoritmos patentados para la suscripción de seguros (underwriting) y el procesamiento de reclamos (claims processing).',
    title4: language === 'EN' ? '2025 - Present' : '2025 - Actualidad',
    subtitle4: language === 'EN' ? 'Today' : 'Hoy',
    paragraph4: language === 'EN' ? 'Currently serving clients across multiple industries with a team of specialists in AI, software development, and data science, with partnerships in Ecuador and the United States.' : 'Actualmente sirviendo a clientes en múltiples industrias con un equipo de especialistas en IA, desarrollo de software y ciencia de datos, y con asociaciones en Ecuador y Estados Unidos.',
  }
  const data = [
    {
      title: text.title,
      content: (
        <div>
          <h1 className="font-bold sm:text-1x1 md:text-2xl lg:text-2xl">{text.subtitle}</h1>
          <p className="mx-auto text-sm md:text-base lg:text-lg text-neutral-400 mt-5 mb-6">
            {text.paragraph}
          </p>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h1 className="font-bold sm:text-1x1 md:text-2xl lg:text-2xl">{text.subtitle2}</h1>
          <p className="mx-auto text-sm md:text-base lg:text-lg text-neutral-400 mt-5 mb-6">
            {text.paragraph2}
          </p>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h1 className="font-bold sm:text-1x1 md:text-2xl lg:text-2xl">{text.subtitle3}</h1>
          <p className="mx-auto text-sm md:text-base lg:text-lg text-neutral-400 mt-5 mb-6">
            {text.paragraph3}
          </p>
        </div>
      ),
    },
        {
      title: text.title4,
      content: (
        <div>
          <h1 className="font-bold sm:text-1x1 md:text-2xl lg:text-2xl">{text.subtitle4}</h1>
          <p className="mx-auto text-sm md:text-base lg:text-lg text-neutral-400 mt-5 mb-6">
            {text.paragraph4}
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip bg-white">
      <Timeline data={data} />
    </div>
  );
};

export default TimelineDemo;
