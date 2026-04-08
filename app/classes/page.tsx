"use client";

import Image from "next/image";
import { NextIntlClientProvider } from "next-intl";
import BranchScheduleSection from "@/components/BranchScheduleSection";
import ClassesSection from "@/components/ClassesSection";
import ScrollReveal from "@/components/ScrollReveal";

import en from "@/messages/en.json";
import CoachesCardsSection from "@/components/CoachesCardsSection";

const styleCards = [
  {
    title: "Kung Fu",
    tag: "Traditional",
    description:
      "The original art of discipline. Focuses on fluid movements, internal energy, and ancient technical mastery.",
    focus: "Focus: Precision & Balance",
    bestFor: "Best For: Technical Growth",
    icon: "target",
    image: "/kun-fu.PNG",
    alt: "Traditional Kung Fu practitioner performing a precise movement in a bright minimal studio",
  },
  {
    title: "Jeet Kune Do",
    tag: "Efficiency",
    description:
      "Founded by Bruce Lee. The way of the intercepting fist prioritizes directness and adaptability.",
    focus: "Focus: Speed & Reflexes",
    bestFor: "Best For: Self-Defense",
    icon: "bolt",
    image: "/JKD.PNG",
    alt: "Close up of mixed martial arts training with heavy bags and dynamic lighting",
  },
  {
    title: "Wushu",
    tag: "Performance",
    description:
      "High-intensity Chinese martial arts combining explosive power with extreme acrobatic aesthetics.",
    focus: "Focus: Athleticism & Power",
    bestFor: "Best For: Total Fitness",
    icon: "fitness_center",
    image: "/wusu.PNG",
    alt: "Acrobatic Wushu performer mid-air against a high-contrast dark background",
  },
];

const classSlugByTitle: Record<string, string> = {
  "Kung Fu": "kung-fu",
  "Jeet Kune Do": "jeet-kune-do",
  Wushu: "wushu",
};

export default function ClassesPage() {
  const mainSectionHeaderClass =
    "mx-auto mb-4 w-fit text-center text-4xl font-black tracking-tight uppercase md:text-5xl";
  const mainSectionKickerClass =
    "text-xs font-bold tracking-widest text-slate-300 uppercase text-center";

  return (
    <div className="bg-[#0D0D0D] text-gray-100 selection:bg-[#d62929] selection:text-white">
      <main>
        <section
          className="relative grid min-h-[480px] grid-cols-1 overflow-hidden lg:min-h-[76vh] lg:grid-cols-2"
          aria-labelledby="classes-hero-heading"
        >
          <div className="relative min-h-[320px] lg:min-h-0">
            <Image
              src="/classs-martial-art.jpg"
              alt="Martial arts professional in training stance"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-black/25" />
          </div>

          <div className="relative min-h-[320px] lg:min-h-0">
            <Image
              src="/dragon.jpg"
              alt="Martial arts training session"
              fill
              priority
              className="object-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/80 to-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <p className="text-xs font-black tracking-[0.35em] text-[#d62929] uppercase">
                Black Dragon
              </p>
              <h1
                id="classes-hero-heading"
                className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white uppercase sm:text-5xl md:text-6xl"
              >
                Our Martial Arts <span className="text-[#d62929]">Classes</span>
              </h1>
              <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-relaxed text-slate-200 md:text-base">
                Choose your path, train with purpose, and master your discipline.
              </p>
            </div>
          </div>
        </section>

        <ScrollReveal>
          <section className="mx-auto max-w-7xl bg-[#000000] py-24 text-white">
            <div className="container mx-auto px-6">
              <div className="mb-16">
                <h2 className={mainSectionHeaderClass}>
                  Explore Our Fighting <span className="text-[#d62929]">Styles</span>
                </h2>
                <p className={mainSectionKickerClass}>Refine Your Combat DNA</p>
              </div>

              <div className="grid grid-cols-1 gap-8 text-black md:grid-cols-3">
                {styleCards.map((card, index) => (
                  <div
                    key={card.title}
                    className={`group border-b-4 border-transparent bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#d62929] ${
                      index === 1 ? "md:mt-12" : ""
                    }`}
                  >
                    <div className="relative mb-6 aspect-video overflow-hidden bg-neutral-100">
                      <Image
                        className="object-cover"
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="mb-4 flex items-start justify-between">
                      <h3 className="text-2xl font-black tracking-tight uppercase">{card.title}</h3>
                      <span className="bg-[#d62929]/10 px-2 py-1 text-[10px] font-bold tracking-widest text-[#d62929] uppercase">
                        {card.tag}
                      </span>
                    </div>
                    <p className="mb-6 leading-relaxed text-slate-600">{card.description}</p>
                    <div className="space-y-3 text-xs font-bold tracking-wider uppercase">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#d62929]">
                          {card.icon}
                        </span>
                        <span>{card.focus}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#d62929]">
                          verified
                        </span>
                        <span className="text-[#1E3A8A]">{card.bestFor}</span>
                      </div>
                    </div>
                    <a
                      href={`/classes/${classSlugByTitle[card.title]}`}
                      className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#d62929] transition-transform group-hover:translate-x-1"
                    >
                      View details{" "}
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <BranchScheduleSection />
        </ScrollReveal>

        <ScrollReveal>
          <CoachesCardsSection />
        </ScrollReveal>

        <ScrollReveal>
          <NextIntlClientProvider locale="en" messages={en}>
            <ClassesSection />
          </NextIntlClientProvider>
        </ScrollReveal>

        <ScrollReveal>
          <section className="bg-[#d62929] py-20">
            <div className="container mx-auto px-6 text-center">
              <h2 className="mb-10 text-4xl font-black tracking-tight text-white uppercase md:text-6xl">
                Start Your Martial Arts <br className="hidden md:block" /> Journey Today
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="scale-100 bg-white px-10 py-5 font-black tracking-widest text-[#d62929] uppercase transition-all hover:scale-105 hover:bg-neutral-100 active:scale-95">
                  Join the Club
                </button>
                <button className="scale-100 bg-neutral-900 px-10 py-5 font-black tracking-widest text-white uppercase transition-all hover:scale-105 hover:bg-black active:scale-95">
                  Book Free Trial
                </button>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </div>
  );
}
