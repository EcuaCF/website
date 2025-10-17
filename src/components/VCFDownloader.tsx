  import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function VCFDownloader(name: string) {
  const router = useRouter();
  useEffect(() => {
    const downloadVCF = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/contacts/${name}`);
        const blob = await response.blob();
        
        // Create download link
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = name;
        
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
  }, [router]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>Downloading your contacts file...</p>
      <p>If download does not start automatically, 
        <a href="/api/contacts/vcf" download="contacts.vcf"> click here</a>.
      </p>
    </div>
  );
}