import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/SectionSeparator";
import { LanguageProvider } from "@/components/LanguageContext";

const bitcoin = Roboto_Flex({
  variable: "--font-bitcoin",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Ecua Code Forge SAS",
  description: "Ecua Code Forge SAS builds custom, scalable software applications and digital solutions to drive business growth and efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bitcoin.variable} antialiased relative min-h-screen`}>
        <LanguageProvider>
          <Navbar/>
          <div className="relative z-20 mb-155 md:mb-90 lg:mb-100">
            {children}
            <SectionSeparator></SectionSeparator>
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}