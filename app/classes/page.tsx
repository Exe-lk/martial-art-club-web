"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import BranchScheduleSection from "@/components/BranchScheduleSection";

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

type Goal = "fitness" | "defense" | "show";
type Preference = "modern" | "traditional" | "mixed";
type Experience = "beginner" | "intermediate" | "advanced";

function suggestStyle(goal: Goal, preference: Preference): keyof typeof classSlugByTitle {
  if (goal === "defense") return "Jeet Kune Do";
  if (goal === "show") return "Wushu";

  if (preference === "traditional") return "Kung Fu";
  if (preference === "modern") return "Jeet Kune Do";
  return "Wushu";
}

export default function ClassesPage() {
  const [goal, setGoal] = useState<Goal>("fitness");
  const [experience, setExperience] = useState<Experience>("beginner");
  const [preference, setPreference] = useState<Preference>("mixed");
  const [suggestedTitle, setSuggestedTitle] = useState<keyof typeof classSlugByTitle | null>(null);

  const mainSectionHeaderClass =
    "mx-auto mb-4 w-fit border-b-4 border-[#d62929] pb-2 text-center text-4xl font-black tracking-tight uppercase md:text-5xl";
  const mainSectionKickerClass = "text-xs font-bold tracking-widest text-slate-300 uppercase text-center";

  const result = useMemo(() => {
    if (!suggestedTitle) return null;

    if (suggestedTitle === "Kung Fu") {
      return {
        badge: "Result: Traditional Mastery",
        title: "Kung Fu",
        description:
          "Based on your fitness focus with a traditional aesthetic, Kung Fu is your path. Build discipline, balance, mobility, and technical depth with roots that last.",
      };
    }

    if (suggestedTitle === "Wushu") {
      return {
        badge: "Result: Performance & Power",
        title: "Wushu",
        description:
          "Based on your goal and preference mix, Wushu fits you best. Expect explosive athleticism, flexibility, and high-intensity training with dynamic forms.",
      };
    }

    return {
      badge: "Result: High Efficiency",
      title: "Jeet Kune Do",
      description:
        "Based on your focus on self-defense and modern application, the way of the intercepting fist is your path. This style discards flowery movements for raw efficiency.",
    };
  }, [suggestedTitle]);

  return (
    
    <div className="bg-[#0D0D0D] text-gray-100 selection:bg-[#d62929] selection:text-white">
      <main>
        {/* Hero (no header/footer per request) */}
        <section className="relative flex h-[614px] items-center overflow-hidden">
          <Image
            className="object-cover"
            src="/classs-martial-art.jpg"
            alt="Martial arts professional in training stance"
            fill
            sizes="100vw"
            priority
            quality={80}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />
          <div className="container relative z-20 mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-5xl leading-none font-black tracking-tight uppercase md:text-7xl">
                Our Martial Arts <span className="text-[#d62929]">Classes</span>
              </h1>
              <p className="mx-auto mb-8 max-w-xl text-lg font-medium text-slate-300 md:text-xl">
                Choose your path, train with purpose, and master your discipline. Join the elite
                practitioners at IRON OBSIDIAN.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[#d62929] px-8 py-4 text-sm font-black tracking-widest uppercase transition-all hover:brightness-110">
                  View Schedule
                </button>
                <button className="bg-[#1E3A8A] px-8 py-4 text-sm font-black tracking-widest uppercase transition-all hover:brightness-110">
                  Join the Club
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Fighting Styles Overview */}
        <ScrollReveal>
          <section className="bg-[#000000] py-24 text-white max-w-7xl mx-auto">
            <div className="container mx-auto px-6">
              <div className="mb-16">
                <h2 className={mainSectionHeaderClass}>
                  Explore Our Fighting <span className="text-[#d62929]">Styles</span>
                </h2>
                <p className={mainSectionKickerClass}>Refine Your Combat DNA</p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-black">
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
                      View details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Interactive */}
        <ScrollReveal>
          <section className="border-y border-slate-800 bg-[#0D0D0D] py-24 max-w-7xl mx-auto">
          <h2 className={mainSectionHeaderClass}>
            Which <span className="text-[#d62929]">Style</span> Fits You?
          </h2>
            <div className="container mx-auto px-6">
            
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <label className="block text-xs font-black tracking-widest text-slate-400 uppercase">
                      01. What is your primary goal?
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setGoal("fitness")}
                        className={
                          goal === "fitness"
                            ? "border border-[#d62929] bg-[#d62929] p-3 text-[10px] font-bold tracking-widest uppercase"
                            : "border border-slate-700 bg-[#292929] p-3 text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-[#d62929]/20"
                        }
                      >
                        Fitness
                      </button>
                      <button
                        type="button"
                        onClick={() => setGoal("defense")}
                        className={
                          goal === "defense"
                            ? "border border-[#d62929] bg-[#d62929] p-3 text-[10px] font-bold tracking-widest uppercase"
                            : "border border-slate-700 bg-[#292929] p-3 text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-[#d62929]/20"
                        }
                      >
                        Defense
                      </button>
                      <button
                        type="button"
                        onClick={() => setGoal("show")}
                        className={
                          goal === "show"
                            ? "border border-[#d62929] bg-[#d62929] p-3 text-[10px] font-bold tracking-widest uppercase"
                            : "border border-slate-700 bg-[#292929] p-3 text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-[#d62929]/20"
                        }
                      >
                        Show
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-xs font-black tracking-widest text-slate-400 uppercase">
                      02. Current Experience Level?
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setExperience("beginner")}
                        className={
                          experience === "beginner"
                            ? "border border-[#d62929] bg-[#d62929] p-3 text-[10px] font-bold tracking-widest uppercase"
                            : "border border-slate-700 bg-[#292929] p-3 text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-[#d62929]/20"
                        }
                      >
                        Beginner
                      </button>
                      <button
                        type="button"
                        onClick={() => setExperience("intermediate")}
                        className={
                          experience === "intermediate"
                            ? "border border-[#d62929] bg-[#d62929] p-3 text-[10px] font-bold tracking-widest uppercase"
                            : "border border-slate-700 bg-[#292929] p-3 text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-[#d62929]/20"
                        }
                      >
                        Intermed.
                      </button>
                      <button
                        type="button"
                        onClick={() => setExperience("advanced")}
                        className={
                          experience === "advanced"
                            ? "border border-[#d62929] bg-[#d62929] p-3 text-[10px] font-bold tracking-widest uppercase"
                            : "border border-slate-700 bg-[#292929] p-3 text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-[#d62929]/20"
                        }
                      >
                        Advanced
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-xs font-black tracking-widest text-slate-400 uppercase">
                      03. Aesthetic Preference?
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setPreference("modern")}
                        className={
                          preference === "modern"
                            ? "border border-[#d62929] bg-[#d62929] p-3 text-[10px] font-bold tracking-widest uppercase"
                            : "border border-slate-700 bg-[#292929] p-3 text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-[#d62929]/20"
                        }
                      >
                        Modern
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreference("traditional")}
                        className={
                          preference === "traditional"
                            ? "border border-[#d62929] bg-[#d62929] p-3 text-[10px] font-bold tracking-widest uppercase"
                            : "border border-slate-700 bg-[#292929] p-3 text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-[#d62929]/20"
                        }
                      >
                        Traditional
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreference("mixed")}
                        className={
                          preference === "mixed"
                            ? "border border-[#d62929] bg-[#d62929] p-3 text-[10px] font-bold tracking-widest uppercase"
                            : "border border-slate-700 bg-[#292929] p-3 text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-[#d62929]/20"
                        }
                      >
                        Mixed
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSuggestedTitle(suggestStyle(goal, preference));
                    }}
                    className="w-full bg-[#1E3A8A] py-4 text-xs font-black tracking-widest uppercase transition-all hover:brightness-110 active:scale-95"
                  >
                    Suggest My Style
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden bg-[#141414] p-12">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <span className="material-symbols-outlined text-[120px]">fitness_center</span>
                </div>
                <div className="relative z-10">
                  {result ? (
                    <>
                      <span className="mb-6 inline-block bg-[#d62929]/20 px-3 py-1 text-[10px] font-black tracking-widest text-[#d62929] uppercase">
                        {result.badge}
                      </span>
                      <h3 className="mb-4 text-3xl font-black tracking-tight uppercase">
                        {result.title}
                      </h3>
                      <p className="mb-8 leading-relaxed text-slate-300">{result.description}</p>
                    </>
                  ) : (
                    <>
                      <span className="mb-6 inline-block bg-[#d62929]/20 px-3 py-1 text-[10px] font-black tracking-widest text-[#d62929] uppercase">
                        Answer the questions
                      </span>
                      <h3 className="mb-4 text-3xl font-black tracking-tight uppercase">
                        Get your recommendation
                      </h3>
                      <p className="mb-8 leading-relaxed text-slate-300">
                        Choose your goal and preference, then click <span className="font-bold">Suggest My Style</span>{" "}
                        to see the best martial art style for you.
                      </p>
                    </>
                  )}
                  <button className="w-full bg-[#d62929] py-4 font-black tracking-widest uppercase transition-all hover:bg-red-700 active:scale-95">
                    Claim Free Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>

        {/* Branch Schedule (tabs + sessions) */}
        <ScrollReveal>
          <BranchScheduleSection />
        </ScrollReveal>

        {/* Student Progress */}
        <ScrollReveal>
          <section className="overflow-hidden bg-black py-24 text-white">
            <div className="container mx-auto px-6">
              <div className="mb-16 text-center">
                <h2 className={mainSectionHeaderClass}>
                  Your Training <span className="text-[#d62929]">Journey</span>
                </h2>
                <p className={mainSectionKickerClass}>
                  Discipline is the bridge between goals and accomplishment.
                </p>
              </div>
              <div className="relative">
                <div className="absolute top-1/2 left-0 hidden h-1 w-full -translate-y-1/2 bg-neutral-800 md:block" />
                <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-4">
                  {[
                    {
                      step: "01",
                      title: "Beginner",
                      color: "bg-neutral-900",
                      text: "Foundational mechanics, basic forms, and establishing psychological discipline.",
                    },
                    {
                      step: "02",
                      title: "Intermediate",
                      color: "bg-[#d62929]",
                      text: "Application of speed, sparring fundamentals, and technical combinations.",
                    },
                    {
                      step: "03",
                      title: "Advanced",
                      color: "bg-[#1E3A8A]",
                      text: "Mastery of flow, independent tactical thinking, and competitive readiness.",
                    },
                    {
                      step: "04",
                      title: "Master Level",
                      color: "bg-red-800",
                      text: "The synthesis of technique and philosophy. Teaching others the way of Obsidian.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="bg-transparent text-center md:pt-16">
                      <div
                        className={`mx-auto mb-6 flex h-12 w-12 items-center justify-center text-white outline-8 outline-white ${item.color} font-black outline`}
                      >
                        {item.step}
                      </div>
                      <h4 className="mb-2 text-lg font-black tracking-tight uppercase">{item.title}</h4>
                      <p className="px-4 text-sm leading-relaxed text-slate-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA */}
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
