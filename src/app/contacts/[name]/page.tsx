"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { use } from "react";

export default function ContactPage({ params }: { params: Promise<{ name: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  
  useEffect(() => {
    const downloadVCF = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/contacts/${resolvedParams.name}`);
        const blob = await response.blob();
        
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = resolvedParams.name;
        
        document.body.appendChild(a);
        a.click();
        
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } catch (error) {
        console.error('Download failed:', error);
      }
    };

    downloadVCF();
  }, [resolvedParams.name, router]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>Downloading your contacts file...</p>
      <p>If download does not start automatically, 
        <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/contacts/${resolvedParams.name}`} download={resolvedParams.name}> click here</a>.
      </p>
    </div>
  );
}