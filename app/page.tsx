import dynamic from "next/dynamic";

import HeroSection from "@/components/HeroSection";
import AboutClubSection from "@/components/AboutClubSection";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLoadFallback from "@/components/SectionLoadFallback";
import LandingFloatingButtons from "@/components/LandingFloatingButtons";

const EventsSection = dynamic(() => import("@/components/EventsSection"), {
  loading: () => <SectionLoadFallback minHeight="min-h-[420px]" />,
});

const NotJustFightingClassSection = dynamic(
  () => import("@/components/NotJustFightingClassSection"),
  { loading: () => <SectionLoadFallback minHeight="min-h-[520px]" /> },
);

const ClassesSection = dynamic(() => import("@/components/ClassesSection"), {
  loading: () => <SectionLoadFallback minHeight="min-h-[400px]" />,
});

const KidsAcademyHighlightSection = dynamic(
  () => import("@/components/KidsAcademyHighlightSection"),
  { loading: () => <SectionLoadFallback minHeight="min-h-[280px]" /> },
);

const MembershipPlansSection = dynamic(
  () => import("@/components/MembershipPlansSection"),
  { loading: () => <SectionLoadFallback minHeight="min-h-[360px]" /> },
);

const ChooseArtSection = dynamic(() => import("@/components/ChooseArtSection"), {
  loading: () => <SectionLoadFallback minHeight="min-h-[520px]" />,
});

const FacilitiesSection = dynamic(() => import("@/components/FacilitiesSection"), {
  loading: () => <SectionLoadFallback minHeight="min-h-[480px]" />,
});

const MeetOurInstructorsSection = dynamic(
  () => import("@/components/MeetOurInstructorsSection"),
  { loading: () => <SectionLoadFallback minHeight="min-h-[380px]" /> },
);

const AchievementsCounterSection = dynamic(
  () => import("@/components/AchievementsCounterSection"),
  { loading: () => <SectionLoadFallback minHeight="min-h-[200px]" /> },
);

const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), {
  loading: () => <SectionLoadFallback minHeight="min-h-[320px]" />,
});

const TrainingGallerySection = dynamic(() => import("@/components/TrainingGallerySection"), {
  loading: () => <SectionLoadFallback minHeight="min-h-[400px]" />,
});

const CtaSection = dynamic(() => import("@/components/CtaSection"), {
  loading: () => <SectionLoadFallback minHeight="min-h-[240px]" />,
});

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden bg-[#000000]">
      <HeroSection />
      <ScrollReveal>
        <AboutClubSection />
      </ScrollReveal>
      <ScrollReveal>
        <EventsSection />
      </ScrollReveal>
      <ScrollReveal>
        <NotJustFightingClassSection />
      </ScrollReveal>
      <ScrollReveal>
        <ClassesSection />
      </ScrollReveal>
      <ScrollReveal>
        <KidsAcademyHighlightSection />
      </ScrollReveal>
      <ScrollReveal>
        <MembershipPlansSection />
      </ScrollReveal>
      <ScrollReveal>
        <ChooseArtSection />
      </ScrollReveal>
      <ScrollReveal>
        <FacilitiesSection />
      </ScrollReveal>
      <ScrollReveal>
        <MeetOurInstructorsSection />
      </ScrollReveal>
      <ScrollReveal>
        <AchievementsCounterSection />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal>
        <TrainingGallerySection />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>
      <LandingFloatingButtons />
    </main>
  );
}
