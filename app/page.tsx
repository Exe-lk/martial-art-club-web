import dynamic from "next/dynamic";

import HeroSection from "@/components/HeroSection";
import ClassesSection from "@/components/ClassesSection";
import AboutClubSection from "@/components/AboutClubSection";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLoadFallback from "@/components/SectionLoadFallback";
import LandingFloatingButtons from "@/components/LandingFloatingButtons";

const EventsSection = dynamic(() => import("@/components/EventsCardsSection"), {
  loading: () => <SectionLoadFallback minHeight="min-h-[420px]" />,
});

const BlogArticlesSection = dynamic(() => import("@/components/BlogArticlesSection"), {
  loading: () => <SectionLoadFallback minHeight="min-h-[420px]" />,
});

const WeeklyTrainingScheduleSection = dynamic(
  () => import("@/components/WeeklyTrainingScheduleSection"),
  { loading: () => <SectionLoadFallback minHeight="min-h-[380px]" /> },
);

const KidsAcademyHighlightSection = dynamic(
  () => import("@/components/KidsAcademyHighlightSection"),
  { loading: () => <SectionLoadFallback minHeight="min-h-[280px]" /> },
);

const MembershipPlansShowcaseSection = dynamic(
  () => import("@/components/MembershipPlansShowcaseSection"),
  { loading: () => <SectionLoadFallback minHeight="min-h-[520px]" /> },
);

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

const CtaSection = dynamic(() => import("@/components/CtaSection"), {
  loading: () => <SectionLoadFallback minHeight="min-h-[240px]" />,
});

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden bg-[#000000]">
      <HeroSection />

      <ScrollReveal>
        <ClassesSection />
      </ScrollReveal>

      <ScrollReveal>
        <AboutClubSection />
      </ScrollReveal>

      <ScrollReveal>
        <AchievementsCounterSection />
      </ScrollReveal>

      <ScrollReveal>
        <EventsSection />
      </ScrollReveal> 
      
      <ScrollReveal>
        <KidsAcademyHighlightSection />
      </ScrollReveal>

      <ScrollReveal>
        <MeetOurInstructorsSection />
      </ScrollReveal>

      <ScrollReveal>
        <MembershipPlansShowcaseSection />
      </ScrollReveal>


      <ScrollReveal>
        <BlogArticlesSection />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>
      <LandingFloatingButtons />
    </main>
  );
}
