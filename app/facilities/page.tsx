import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import FacilitiesPageHero from "@/components/FacilitiesPageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLoadFallback from "@/components/SectionLoadFallback";

const CtaSection = dynamic(() => import("@/components/CtaSection"), {
  loading: () => <SectionLoadFallback minHeight="min-h-[240px]" />,
});

export const metadata: Metadata = {
  title: "Facilities | Martial Art Club",
  description:
    "Explore Black Dragon’s world class martial arts facilities in Sri Lanka.",
};

export default function FacilitiesPage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-[#000000] text-white">
      <FacilitiesPageHero />

      <ScrollReveal>
        <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          

          <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-stretch md:gap-10">
            <div className="md:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#1b1b1b] md:aspect-auto md:h-full md:max-h-screen md:min-h-[420px]">
                <Image
                  src="/gym/contact-martial-art-academy.jpg"
                  alt="Academy facilities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
            </div>

            <div className="md:col-span-5  md:items-center">
            <header className="text-center md:text-left">
            <p className="text-primary text-xs font-black tracking-[0.38em] uppercase md:text-sm">
              Facilities
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight uppercase md:text-4xl">
              WORLD CLASS FACILITIES in Sri Lanka
            </h2>
          </header>
              <p className="text-left text-xl leading-relaxed text-slate-300 md:text-xl mt-10">
                Experience a professional training environment designed to support every level
                of martial artist. Our facilities are equipped with modern training spaces,
                high-quality equipment, and dedicated areas for Jeet Kune Do, Kung Fu, and Wushu
                practice. From spacious training halls to safe and well-maintained equipment
                zones, every detail is built to enhance performance, safety, and comfort.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16 md:gap-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#1b1b1b]">
              <Image
                src="/gym/fighting-safety.jpeg"
                alt="Fighting safety equipment"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 28vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#1b1b1b]">
              <Image
                src="/gym/gym%20accesories.jpeg"
                alt="Gym accessories"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 28vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#1b1b1b]">
              <Image
                src="/gym/gym.jpeg"
                alt="Gym training area"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 28vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="mx-auto max-w-7xl px-6 pb-14 md:pb-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-12">
            <div className="md:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#1b1b1b] md:aspect-[16/10]">
                <Image
                  src="/Boost-Confidence.PNG"
                  alt="Boost confidence through training"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
            </div>

            <div className="md:col-span-6">
              <p className="text-primary text-xs font-black tracking-[0.38em] uppercase md:text-sm">
                Training benefits
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight uppercase md:text-4xl">
                FITNESS
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
                Enhance your strength, endurance, and overall fitness through dynamic martial
                arts training. Our programs combine techniques from Jeet Kune Do, Kung Fu, and
                Wushu to deliver full-body workouts that improve flexibility, speed, and
                coordination. Every session is designed to build both physical power and mental
                focus, helping you achieve a healthier and more disciplined lifestyle.
              </p>
            </div>


            
          </div>
          <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-12 mt-20">
            

            <div className="md:col-span-6 ">
              <p className="text-primary text-xs font-black tracking-[0.38em] uppercase md:text-sm">
                Training benefits
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight uppercase md:text-4xl">
                Safty
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
                Enhance your strength, endurance, and overall fitness through dynamic martial
                arts training. Our programs combine techniques from Jeet Kune Do, Kung Fu, and
                Wushu to deliver full-body workouts that improve flexibility, speed, and
                coordination. Every session is designed to build both physical power and mental
                focus, helping you achieve a healthier and more disciplined lifestyle.
              </p>
            </div>

            <div className="md:col-span-6 ">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#1b1b1b] md:aspect-[16/10]">
                <Image
                  src="/blog-martial-art.jpeg"
                  alt="Boost confidence through training"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
            </div>


            
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>
    </main>
  );
}

