import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="flex-1 overflow-x-hidden">
        <HeroSection />
      </main>
    </>
  );
}
