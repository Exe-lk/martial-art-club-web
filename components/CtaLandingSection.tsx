"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function CtaLandingSection() {
  const t = useTranslations("Cta");
  const locale = useLocale();
  const base = `/${locale}`;

  return (
    <section
      id="cta"
      className="border-t border-white/10 bg-[#C10007] py-1 sm:py-20 lg:py-10"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[3fr_14fr_3fr]">
          {/* Left image — same column track; larger asset */}
          <div className="hidden min-w-0 lg:flex lg:justify-start">
            <Image
              src="/CTA-dragon-left.png"
              alt=""
              width={800}
              height={800}
              className="h-auto w-[240px] shrink-0 select-none sm:w-[300px] lg:w-[460px] xl:w-[520px] 2xl:w-[580px]"
              priority={false}
            />
          </div>

          {/* Middle content */}
          <div className="w-full max-w-none text-center">
            <h2 className="mb-6 text-4xl font-black uppercase tracking-tight text-slate-100 md:text-6xl">
              {t("title")}
            </h2>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={`${base}#classes`}
                className="inline-flex items-center justify-center bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-primary transition hover:bg-white/90"
              >
                {t("joinNow")}
              </Link>
              <Link
                href={`${base}#programs`}
                className="inline-flex items-center justify-center border border-white bg-primary px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-red-700"
              >
                {t("viewPrograms")}
              </Link>
            </div>
          </div>

          {/* Right image — same column track; larger asset */}
          <div className="hidden min-w-0 lg:flex lg:justify-end">
            <Image
              src="/CTA-dragon-right.png"
              alt=""
              width={800}
              height={800}
              className="h-auto w-[240px] shrink-0 select-none sm:w-[300px] lg:w-[460px] xl:w-[520px] 2xl:w-[580px]"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
