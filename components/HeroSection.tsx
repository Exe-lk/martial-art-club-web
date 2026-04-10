"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import HeroDeferredVideo from "@/components/HeroDeferredVideo";
import NewsTicker from "@/components/NewsTicker";

export default function HeroSection() {
  const t = useTranslations("Hero");
  const locale = useLocale();

  return (
    <section className="relative min-h-[80svh] max-h-[90svh] overflow-hidden bg-black text-white">
      <HeroDeferredVideo />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center gap-6 px-6 text-center bottom-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-black leading-tight tracking-tight uppercase sm:text-5xl md:text-6xl">
            {t("title")}
          </h1>

          <span className="mb-4 block text-xs font-bold tracking-[0.3em] text-primary uppercase">
            {t("subtitle")}
          </span>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <div className="w-full rounded-lg sm:inline-flex sm:w-auto">
            <button
              className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-10 py-4 text-base font-black text-white uppercase transition-all sm:w-auto hover:bg-[url('/button2.PNG')] hover:bg-cover hover:bg-center hover:bg-no-repeat hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {t("joinClub")}{" "}
              
            </button>
          </div>
          <Link
            href={`/${locale}/classes`}
            className="rounded-md w-full hover-border-2  px-8 py-4 text-base font-black text-white uppercase transition-all hover:bg-accent-blue/10 sm:w-auto text-center bg-white/50"
          >
            {t("viewClasses")}
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[0px] z-20">
        <div className="pointer-events-auto mx-auto max-w-full overflow-hidden px-0">
          <NewsTicker />
        </div>
      </div>
    </section>
  );
}
