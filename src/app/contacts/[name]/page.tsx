import VCFDownloader from "@/components/VCFDownloader";

// app/contacts/[name]/page.tsx
export default function ContactPage({ params }: { params: { name: string } }) {
  return (
    VCFDownloader(params.name)
  );
}