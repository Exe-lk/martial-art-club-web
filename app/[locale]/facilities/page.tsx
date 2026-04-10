import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { getTranslations } from "next-intl/server";

import BranchFacilitiesSection from "@/components/BranchFacilitiesSection";
import FacilitiesPageHero from "@/components/FacilitiesPageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLoadFallback from "@/components/SectionLoadFallback";

const CtaSection = dynamic(() => import("@/components/CtaSection"), {
  loading: () => <SectionLoadFallback minHeight="min-h-[240px]" />,
});

export const metadata: Metadata = {
  title: "Facilities | Martial Art Club",
  description: "Explore Black Dragon’s world class martial arts facilities in Sri Lanka.",
};

export default async function LocalizedFacilitiesPage() {
  const t = await getTranslations("FacilitiesPage");

  return (
    <main className="flex-1 overflow-x-hidden bg-[#000000] text-white">
      <FacilitiesPageHero />

      <ScrollReveal>
        <BranchFacilitiesSection />
      </ScrollReveal>

      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>
    </main>
  );
}

