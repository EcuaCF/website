import VCFDownloader from "@/components/VCFDownloader";
import { use } from "react";

import fs from 'fs';
import path from 'path';

// This function tells Next.js which contact pages to generate at build time
export async function generateStaticParams() {
  const contactFilesDir = path.join(process.cwd(), 'public', 'contactFiles');
  
  // Check if directory exists
  if (!fs.existsSync(contactFilesDir)) {
    return [];
  }
  
  const files = fs.readdirSync(contactFilesDir)
    .filter(file => !file.startsWith('.')) // exclude hidden files
    .map(file => ({
      name: file.replace(/\.[^/.]+$/, ""), // remove extension
    }));
  
  return files;
}


export default function ContactPage({ params }: { params: Promise<{ name: string }> }) {
  const resolvedParams = use(params);
  return (
    VCFDownloader(resolvedParams.name)
  );
}