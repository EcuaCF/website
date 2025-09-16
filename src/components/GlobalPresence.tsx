import { World, GlobeConfig, Position } from "@/components/ui/globe";

const sampleData: Position[] = [
  {
    order: 1,
    startLat: 0,
    startLng: 0,
    endLat: 10,
    endLng: 10,
    arcAlt: 0.3,
    color: "#ff0000",
  },
];

export default function Globe() {
  const globeConfig: GlobeConfig = {
    globeColor: "#1d072e",
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    autoRotate: true,
    autoRotateSpeed: 0.2,
  };
  return (
    <section className="w-full bg-white text-white">
        <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-black">Our Global Presence</h1>
            <p className="mt-4 text-gray-600">Bridging talent and innovation across the Americas</p>
        </div>
        <div className="px-2 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 mt-2 mb-3">
            
            {/* Column 1 - Globe */}
            <div className="h-120">
            <World globeConfig={globeConfig} data={sampleData} />
            </div>
            <div className="mt-12 gap-8">
                {/* Quito */}
                <div className="h-50 w-76 mb-10 p-7 px-9 border rounded-2xl shadow-md transition duration-300 hover:shadow-xl hover:border-blue-600">
                    <h2 className="text-2xl font-semibold text-black">Quito, Ecuador</h2>
                    <p className="mt-3 text-gray-600">Edificio SOHO Galaxy <br /> Av. Eloy Alfaro N-33-55 y Suiza Oficina 202 <br /> Quito, Ecuador 170518</p>
                </div>

                {/* Bardenton */}
                <div className="h-50 w-76 p-7 px-9 border rounded-2xl shadow-md transition duration-300 hover:shadow-xl hover:border-blue-600">
                    <h2 className="text-2xl font-semibold text-black">Bardenton, USA</h2>
                    <p className="mt-3 text-gray-600">U.S. Operations Office <br /> 3990 SR 64 East <br /> Bradenton, FL 34208</p>
                </div>
            </div>
        </div>
    </section>
  );
}