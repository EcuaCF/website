import VCFDownloader from "@/components/VCFDownloader";
import { use } from "react";

export default function ContactPage({ params }: { params: Promise<{ name: string }> }) {
  const resolvedParams = use(params);
  return (
    VCFDownloader(resolvedParams.name)
  );
}