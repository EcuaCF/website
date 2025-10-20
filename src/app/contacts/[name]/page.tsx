import fs from 'fs';
import path from 'path';
import VCFDownloader from '@/components/VCFDownloader';

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

export default async function ContactPage({ 
  params 
}: { 
  params: Promise<{ name: string }> 
}) {
  const { name } = await params;
  
  return <VCFDownloader name={name} />;
}