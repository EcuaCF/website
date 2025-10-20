import VCFDownloader from "@/components/VCFDownloader";
import { use } from "react";

import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const contactFilesDir = path.join(process.cwd(), 'public', 'contactFiles');
  
  if (!fs.existsSync(contactFilesDir)) {
    return [];
  }
  
  const files = fs.readdirSync(contactFilesDir)
    .map((file) => ({
      name: `${file.replace(/\.[^/.]+$/, "")}.vcf`,
    }));
  
  return files;
}


export default function ContactPage({ params }: { params: Promise<{ name: string }> }) {
  const resolvedParams = use(params);
  return (
    VCFDownloader(resolvedParams.name)
  );
}