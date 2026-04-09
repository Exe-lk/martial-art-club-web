"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FounderCoachSection() {
  const t = useTranslations("AboutPage.founder");

  return (
    <section className="max-h-[100svh] overflow-hidden bg-black py-16 text-white lg:py-20">
      <div className="container mx-auto grid items-center gap-10 px-6 lg:grid-cols-2 lg:items-stretch lg:gap-14">
        <div className="relative">
          <div className="absolute -top-4 -left-4 h-24 w-24 border-t-4 border-l-4 border-primary" />
          <div className="relative z-10 h-[min(56svh,560px)] w-full overflow-hidden rounded bg-[#0f0f0f] shadow-2xl">
            <Image
              src={t("imageSrc")}
              alt={t("imageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-4 border-r-4 border-[#1e3a8a]" />
        </div>

        <div className="grid content-start gap-8 lg:gap-10">
          {/* Row 1: topic + description */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div>
              <span className="mb-2 block text-sm font-black tracking-widest text-primary uppercase">
                {t("kicker")}
              </span>
              <h2 className="text-4xl font-black tracking-tight text-white uppercase md:text-5xl">
                {t.rich("title", {
                  accent: (chunks) => <span className="text-primary">{chunks}</span>,
                })}
              </h2>
            </div>

            <div className="space-y-3 border-l-4 border-primary/70 pl-6">
              <div className="text-2xl font-black tracking-tight text-white uppercase md:text-3xl">
                {t("name")}
              </div>
              <div className="text-xs font-black tracking-[0.28em] text-primary uppercase">
                {t("qualification")}
              </div>
            </div>

            <p className="max-w-2xl text-base font-medium leading-relaxed text-slate-200 md:text-lg">
              {t("description")}
            </p>
          </div>

          {/* Row 2: coach certifications */}
          <div className="rounded border border-white/10 bg-white/5 p-5 lg:p-6">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <div className="text-xs font-black tracking-[0.28em] text-primary uppercase">
                  {t("certificationsKicker")}
                </div>
                <div className="mt-2 text-lg font-black tracking-tight text-white uppercase md:text-xl">
                  {t("certificationsTitle")}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { src: t("cert1Src"), alt: t("cert1Alt") },
                { src: t("cert2Src"), alt: t("cert2Alt") },
                { src: t("cert3Src"), alt: t("cert3Alt") },
                { src: t("cert4Src"), alt: t("cert4Alt") },
              ].map((cert) => (
                <div
                  key={cert.src}
                  className="relative h-[min(18svh,220px)] overflow-hidden rounded bg-black/30 ring-1 ring-white/10"
                >
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

