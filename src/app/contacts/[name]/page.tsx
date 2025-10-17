import VCFDownloader from "@/components/VCFDownloader";

export default function ContactPage({ params }: { params: { name: string } }) {
  return (
    VCFDownloader(params.name)
  );
}