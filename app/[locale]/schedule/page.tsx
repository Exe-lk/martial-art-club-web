import type { Metadata } from "next";
import dynamic from "next/dynamic";
import SchedulePageHero from "@/components/SchedulePageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLoadFallback from "@/components/SectionLoadFallback";
import WeeklyTrainingScheduleSection from "@/components/WeeklyTrainingScheduleSection";

const CtaSection = dynamic(() => import("@/components/CtaSection"), {
  loading: () => <SectionLoadFallback minHeight="min-h-[240px]" />,
});

export const metadata: Metadata = {
  title: "Class Schedule | Martial Art Club",
  description:
    "View training schedules by branch and find class times for Black Dragon Jeet Kune Do.",
};

export default function SchedulePage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-[#000000] text-white">
      <SchedulePageHero />

      <ScrollReveal>
        <WeeklyTrainingScheduleSection />
      </ScrollReveal>

      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>
    </main>
  );
}

