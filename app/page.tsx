import HeroSection from "@/components/HeroSection";
import ChooseArtSection from "@/components/ChooseArtSection";
import TrainingGallerySection from "@/components/TrainingGallerySection";
import CtaSection from "@/components/CtaSection";
import NotJustFightingClassSection from "@/components/NotJustFightingClassSection";
import ClassesSection from "@/components/ClassesSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import MeetOurInstructorsSection from "@/components/MeetOurInstructorsSection";
import AchievementsCounterSection from "@/components/AchievementsCounterSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <HeroSection />
      <ChooseArtSection />
      <NotJustFightingClassSection />
      <ClassesSection />
      <FacilitiesSection />
      <MeetOurInstructorsSection />
      <AchievementsCounterSection />
      <TestimonialsSection />
      <TrainingGallerySection />
      <CtaSection />
    </main>
  );
}
