import HeroSection from "@/components/HeroSection";
import AboutClubSection from "@/components/AboutClubSection";
import ChooseArtSection from "@/components/ChooseArtSection";
import TrainingGallerySection from "@/components/TrainingGallerySection";
import CtaSection from "@/components/CtaSection";
import NotJustFightingClassSection from "@/components/NotJustFightingClassSection";
import ClassesSection from "@/components/ClassesSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import MeetOurInstructorsSection from "@/components/MeetOurInstructorsSection";
import AchievementsCounterSection from "@/components/AchievementsCounterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EventsSection from "@/components/EventsSection";
import ScrollReveal from "@/components/ScrollReveal";
import LandingFloatingButtons from "@/components/LandingFloatingButtons";

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
