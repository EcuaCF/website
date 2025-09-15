"use client";

import { World, GlobeConfig, Position } from "@/components/ui/globe";
import ReactCountryFlag from "react-country-flag";

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

export default function Footer() {
  const globeConfig: GlobeConfig = {
    globeColor: "#1d072e",
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    autoRotate: true,
    autoRotateSpeed: 0.2,
  };

  return (
    <footer className="w-full bg-black text-white relative py-15">
      <div className="max-w-9xl mx-auto px-2 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-10 mt-2 mb-3">
        {/* Column 1 - Globe */}
        <div className="h-60">
          <World globeConfig={globeConfig} data={sampleData} />
        </div>

        {/* Column 2 - Company Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold mb-3">Ecua Code Forge S.A.S</h1>
          <p className="text-gray-300 text-sm">
            Pioneering AI and software solutions that bridge international markets and drive business transformation.
          </p>
          <div className="flex gap-3 mt-2">
            <ReactCountryFlag countryCode="EC" svg style={{ width: '24px', height: '24px' }} />
            <ReactCountryFlag countryCode="US" svg style={{ width: '24px', height: '24px' }} />
          </div>
        </div>

        {/* Column 3 - Quick Links */}
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold mb-3">Quick Links</h1>
          <a href="#" className="hover:text-gray-400 transition">Home</a>
          <a href="/about" className="hover:text-gray-400 transition">About Us</a>
          <a href="/services" className="hover:text-gray-400 transition">Services</a>
          <a href="/white-papers" className="hover:text-gray-400 transition">White Papers</a>
          <a href="/contact" className="hover:text-gray-400 transition">Contact Us</a>
        </div>

        {/* Column 4 - Services */}
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold mb-3">Services</h1>
          <span>AI & Machine Learning</span>
          <span>Custom Software Development</span>
          <span>Data Analytics</span>
          <span>Cloud Solutions</span>
          <span>Insurance Technology</span>
        </div>

        {/* Column 5 - Contact */}
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold mb-3">Contact Us</h1>
          <p>Edificio SOHO Galaxy</p>
          <p>Av. Eloy Alfaro N-33-55 y Suiza Oficina 202</p>
          <p>Quito, Ecuador 170518</p>
          <p>Email: <a href="mailto:sales@ecuacf.com" className="underline">sales@ecuacf.com</a></p>
          <p>Phone: +59 (399) 885-2466</p>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-400 mt-5 text-sm">
        © 2025 Ecua Code Forge S.A.S. All rights reserved.
      </p>
    </footer>
  );
}
