"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ContactPage({ params }: { params: { name: string } }) {
  
    const router = useRouter();
  console.log(params.name);
    useEffect(() => {
      const downloadVCF = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/contacts/${params.name}`);
          const blob = await response.blob();
          
          // Create download link
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = params.name;
          
          document.body.appendChild(a);
          a.click();
          
          // Clean up
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
          
          // Optional: Redirect after download
          // router.push('/contacts');
        } catch (error) {
          console.error('Download failed:', error);
        }
      };
  
      downloadVCF();
    }, [params.name, router]);
  
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>Downloading your contacts file...</p>
        <p>If download does not start automatically, 
          <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/contacts/${params.name}`} download={params.name}> click here</a>.
        </p>
      </div>
    );
}
