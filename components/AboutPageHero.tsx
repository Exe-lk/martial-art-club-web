"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const LEFT_BG = "/logos/kun-fu.png";
const RIGHT_IMAGE = "/hero-about.jpg";

export default function AboutPageHero() {
  const t = useTranslations("AboutPage");

  return (
    <section
      className="relative grid min-h-[480px] grid-cols-1 overflow-hidden lg:min-h-[70vh] lg:grid-cols-2"
      aria-labelledby="about-hero-heading"
    >
      <div className="relative min-h-[320px] lg:min-h-0">
        <Image
          src={RIGHT_IMAGE}
          alt={t("heroRightAlt")}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent lg:from-black/60 lg:via-black/25" />
      </div>

      <div className="relative min-h-[320px] lg:min-h-0">
        <Image
          src={LEFT_BG}
          alt={t("heroLeftAlt")}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/80 to-black/60" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-xs font-black tracking-[0.35em] text-primary uppercase">
            {t("heroKicker")}
          </p>
          <h1
            id="about-hero-heading"
            className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white uppercase sm:text-5xl md:text-6xl"
          >
            {t.rich("heroTitle", {
              accent: (chunks) => <span className="text-primary">{chunks}</span>,
            })}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-relaxed text-slate-200 md:text-base">
            {t("heroSubtitle")}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded bg-primary px-10 py-4 text-sm font-black tracking-widest text-white uppercase transition-all hover:bg-red-700 shadow-lg shadow-primary/20">
              {t("heroPrimaryCta")}
            </button>
            <button className="rounded border-2 border-[#1e3a8a] px-10 py-4 text-sm font-black tracking-widest text-white uppercase transition-all hover:bg-[#1e3a8a]/10">
              {t("heroSecondaryCta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

