import type { Metadata } from "next";
import dynamic from "next/dynamic";
import CoachesCardsSection from "@/components/CoachesCardsSection";
import CoachesPageHero from "@/components/CoachesPageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLoadFallback from "@/components/SectionLoadFallback";

const CtaSection = dynamic(() => import("@/components/CtaSection"), {
  loading: () => <SectionLoadFallback minHeight="min-h-[240px]" />,
});

export const metadata: Metadata = {
  title: "Coaches | Martial Art Club",
  description:
    "Meet the coaches behind Black Dragon martial arts training and experience.",
};

export default function CoachesPage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-[#000000] text-white">
      <CoachesPageHero />

      <ScrollReveal>
        <CoachesCardsSection />
      </ScrollReveal>

      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>
    </main>
  );
}

