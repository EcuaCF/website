"use client";

import { use, useEffect } from "react";

export default function ContactPage({ params }: { params: Promise<{ name: string }> }) {
  const resolvedParams = use(params);
  useEffect(() => {
    const downloadVCF = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/contactFiles/${resolvedParams.name}`);
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
  }, [resolvedParams.name]);
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>Downloading your contacts file...</p>
      <p>If download does not start automatically, 
        <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/contactFiles/${resolvedParams.name}`} download={resolvedParams.name}> click here</a>.
      </p>
    </div>
  );
}