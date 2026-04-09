"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { branches } from "@/data/branches";

export default function ClassesSection() {
  const t = useTranslations("Classes");

  return (
    <section className="bg-[#000000] py-24 text-white" id="programs">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-16 space-y-4 text-center">

          <h3 className="text-4xl font-black tracking-tight uppercase md:text-5xl">
            {t("title")}
          </h3>
          <p className="mx-auto max-w-2xl text-slate-400">{t("description")}</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <article
              key={branch.slug}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-lg"
            >
              <Image
                alt={`${branch.location} branch background`}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                src={branch.cardImageUrl}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/25 transition-opacity duration-300 group-hover:opacity-0" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/35 via-transparent to-secondary/25" />
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10">
                <div className="p-6 md:p-8">
                  <p className="text-sm font-bold tracking-wide text-white/90">
                    {t("branchBrand")}
                  </p>
                  <h4 className="mt-1 truncate text-3xl font-black uppercase leading-tight tracking-tight md:text-4xl">
                    {branch.location}
                  </h4>

                  <div className="mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-24 group-hover:opacity-100">
                    <Link
                      href={`/branches/${branch.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-black tracking-[0.2em] text-white uppercase shadow-lg transition-transform hover:scale-[1.02] hover:bg-red-700 active:scale-[0.98]"
                    >
                      {t("viewBranch")}

                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/classes"
            className="animated-gradient-border inline-flex items-center justify-center gap-2 rounded-2xl px-10 py-4 text-sm font-black tracking-[0.22em] text-white uppercase shadow-lg transition-transform active:scale-[0.98]"
          >
            <span className="relative z-10">{t("allClasses")}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
