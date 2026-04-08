"use client";

import MeetOurInstructorsSection from "@/components/MeetOurInstructorsSection";
import AboutPageHero from "@/components/AboutPageHero";
import CoachesCardsSection from "@/components/CoachesCardsSection";
import FounderCoachSection from "@/components/FounderCoachSection";
import ScrollReveal from "@/components/ScrollReveal";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <main className="overflow-x-hidden bg-[#f3f4f6] text-slate-900 dark:bg-[#0d0d0d] dark:text-slate-100">
      {/* Hero Section */}
      <AboutPageHero />


      
      {/* Meet Our Instructors */}
      <ScrollReveal>
        <MeetOurInstructorsSection />
      </ScrollReveal>


      {/* Coach & Team */}
      <ScrollReveal>
        <CoachesCardsSection />
      </ScrollReveal>

      {/* Founder / Main Coach */}
      <ScrollReveal>
        <FounderCoachSection />
      </ScrollReveal>

      {/* Why Us */}
      <ScrollReveal>
        <section className="bg-black py-24 text-white">
          <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-24 w-24 border-t-4 border-l-4 border-primary" />
              <img
                className="relative z-10 h-[500px] w-full rounded object-cover shadow-2xl"
                src="/contact-martial-art-academy.jpg"
                alt={t("legacyImageAlt")}
              />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-4 border-r-4 border-[#1e3a8a]" />
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <span className="mb-2 block text-sm font-black tracking-widest text-primary uppercase">
                  {t("legacyKicker")}
                </span>
                <h2 className="text-4xl font-black uppercase  text-white">
                  {t("legacyTitle")}
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-slate-200">
                {t("legacyBody1")}
              </p>
              <p className="text-lg leading-relaxed text-slate-200">
                {t("legacyBody2")}
              </p>

              <div className="mt-4 grid gap-6">
                {[
                  {
                    icon: "calendar_today",
                    title: t("legacyStats.foundedTitle"),
                    text: t("legacyStats.foundedText"),
                  },
                  {
                    icon: "groups",
                    title: t("legacyStats.studentsTitle"),
                    text: t("legacyStats.studentsText"),
                  },
                  {
                    icon: "emoji_events",
                    title: t("legacyStats.winnersTitle"),
                    text: t("legacyStats.winnersText"),
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="rounded bg-white/10 p-3 text-white">
                      <span className="material-symbols-outlined">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-slate-300">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Accessories & Equipment */}
      <ScrollReveal>
        <section className="bg-[#000000] py-24">
          <div className="container mx-auto px-6">
            <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="mb-2 block text-sm font-black tracking-widest text-[#1e3a8a] uppercase">
                  {t("proGearKicker")}
                </span>
                <h2 className="text-4xl font-black text-slate-900 uppercase dark:text-white">
                  {t("proGearTitle")}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  topic: t("proGearCards.locationTopic"),
                  border: "border-primary",
                  img: "/gym/gym.jpeg",
                  alt: t("proGearCards.locationAlt"),
                  desc: t("proGearCards.locationDesc"),
                },
                {
                  topic: t("proGearCards.facilitiesTopic"),
                  border: "border-[#1e3a8a]",
                  img: "/gym/fighting-safety.jpeg",
                  alt: t("proGearCards.facilitiesAlt"),
                  desc: t("proGearCards.facilitiesDesc"),
                },
                {
                  topic: t("proGearCards.teamTopic"),
                  border: "border-primary",
                  img: "/gym/gym%20accesories.jpeg",
                  alt: t("proGearCards.teamAlt"),
                  desc: t("proGearCards.teamDesc"),
                },
                {
                  topic: t("proGearCards.classesTopic"),
                  border: "border-[#1e3a8a]",
                  img: "/gym/gym3.jpeg",
                  alt: t("proGearCards.classesAlt"),
                  desc: t("proGearCards.classesDesc"),
                },
              ].map((item) => (
                <div
                  key={item.topic}
                  className={`group overflow-hidden  bg-[#0d0d0d] p-1 ${item.border}`}
                >
                  <div className="relative aspect-square bg-slate-800">
                    <img
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={item.img}
                      alt={item.alt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                    <div className="absolute inset-0 p-5">
                      <div className="flex h-full flex-col justify-end">
                        <h4 className="text-lg font-black tracking-widest text-white uppercase md:text-xl">
                          {item.topic}
                        </h4>

                        <div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40">
                          <div className="pt-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm text-slate-200">{item.desc}</p>
                            <button className="mt-4 inline-flex items-center gap-2 rounded bg-white/10 px-4 py-2 text-xs font-black tracking-widest text-white uppercase transition-colors hover:bg-white/20">
                              {t("learnMore")}
                              <span className="material-symbols-outlined text-base">
                                arrow_forward
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
    </main>
  );
}

