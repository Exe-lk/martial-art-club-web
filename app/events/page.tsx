import type { Metadata } from "next";
import dynamic from "next/dynamic";

import EventsPageHero from "@/components/EventsPageHero";
import EventsSection from "@/components/EventsSection";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLoadFallback from "@/components/SectionLoadFallback";

const CtaSection = dynamic(() => import("@/components/CtaSection"), {
  loading: () => <SectionLoadFallback minHeight="min-h-[240px]" />,
});

export const metadata: Metadata = {
  title: "Events | Martial Art Club",
  description:
    "Explore upcoming and past events at Black Dragon Jeet Kune Do, including seminars, championships, and promotions.",
};

export default function EventsPage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-[#000000] text-white">
      <EventsPageHero />

      <ScrollReveal>
        <EventsSection />
      </ScrollReveal>

      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>
    </main>
  );
}

