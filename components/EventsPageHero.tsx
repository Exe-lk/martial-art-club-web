"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const LEFT_BG = "/event.jpg";
const RIGHT_IMAGE = "/logos/kun-fu.png";

export default function EventsPageHero() {
  const t = useTranslations("EventsPage");

  return (
    <section
      className="relative grid min-h-[480px] grid-cols-1 overflow-hidden lg:min-h-[76vh] lg:grid-cols-2"
      aria-labelledby="events-hero-heading"
    >
      <div className="relative min-h-[320px] lg:min-h-0">
        <Image
          src={LEFT_BG}
          alt={t("heroLeftAlt")}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-black/25" />
      </div>

      <div className="relative min-h-[320px] lg:min-h-0">
        <Image
          src={RIGHT_IMAGE}
          alt={t("heroRightAlt")}
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
            id="events-hero-heading"
            className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white uppercase sm:text-5xl md:text-6xl"
          >
            {t.rich("heroTitle", {
              accent: (chunks) => <span className="text-primary">{chunks}</span>,
            })}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-relaxed text-slate-200 md:text-base">
            {t("heroSubtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}

