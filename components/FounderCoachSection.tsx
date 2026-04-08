"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FounderCoachSection() {
  const t = useTranslations("AboutPage.founder");

  return (
    <section className="bg-black py-24 text-white">
      <div className="container mx-auto grid items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="absolute -top-4 -left-4 h-24 w-24 border-t-4 border-l-4 border-primary" />
          <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded bg-[#0f0f0f] shadow-2xl">
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

        <div className="flex flex-col gap-8">
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
      </div>
    </section>
  );
}

