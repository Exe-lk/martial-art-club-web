import type { Metadata } from "next";
import dynamic from "next/dynamic";
import GalleryPageHero from "@/components/GalleryPageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLoadFallback from "@/components/SectionLoadFallback";
import TrainingGallerySection from "@/components/TrainingGallerySection";

const CtaSection = dynamic(() => import("@/components/CtaSection"), {
  loading: () => <SectionLoadFallback minHeight="min-h-[240px]" />,
});

export const metadata: Metadata = {
  title: "Gallery | Martial Art Club",
  description:
    "Explore moments from our classes, events, and training sessions at Black Dragon Jeet Kune Do.",
};

export default function GalleryPage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-[#000000] text-white">
      <GalleryPageHero />

      <ScrollReveal>
        <TrainingGallerySection />
      </ScrollReveal>

      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>
    </main>
  );
}

