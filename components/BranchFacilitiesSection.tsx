"use client";

import Image from "next/image";
import { useId, useState } from "react";

import { useTranslations } from "next-intl";

import { branchFacilitiesBySlug } from "@/data/branchFacilities";
import { branches } from "@/data/branches";

/** Tab label: show place/branch only (drop leading style prefix like "Jeet Kun Do - "). */
function branchNavLabel(fullName: string): string {
  const parts = fullName.split(" - ");
  return parts.length > 1 ? parts.slice(1).join(" - ").trim() : fullName;
}

export default function BranchFacilitiesSection() {
  const t = useTranslations("FacilitiesPage");
  const tabsId = useId();

  const [activeIdx, setActiveIdx] = useState(0);
  const active = branches[activeIdx]!;
  const facilities = branchFacilitiesBySlug[active.slug]!;

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
      <header className="text-center">
        <p className="text-primary text-xs font-black tracking-[0.38em] uppercase md:text-sm">
          {t("introKicker")}
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight uppercase md:text-4xl">
          {t("introTitle")}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
          {t("branchPickerHelper")}
        </p>
      </header>

      {/* Branch picker */}
      <div className="mt-10">
        <div className="md:hidden">
          <label className="sr-only" htmlFor={`${tabsId}-branch-select`}>
            {t("branchPickerLabel")}
          </label>
          <select
            id={`${tabsId}-branch-select`}
            value={String(activeIdx)}
            onChange={(e) => setActiveIdx(Number(e.target.value))}
            className="w-full rounded-xl border border-white/10 bg-[#0f0f0f] px-4 py-3 text-sm font-bold text-white"
          >
            {branches.map((b, idx) => (
              <option key={b.slug} value={idx}>
                {branchNavLabel(b.name)}
              </option>
            ))}
          </select>
        </div>

        <div className="hidden md:flex justify-center">
          <div
            className="flex w-fit max-w-full gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-[#0f0f0f] p-2"
            role="tablist"
            aria-label={t("branchPickerLabel")}
          >
            {branches.map((b, idx) => {
              const selected = idx === activeIdx;
              return (
                <button
                  key={b.slug}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`${tabsId}-panel-${idx}`}
                  id={`${tabsId}-tab-${idx}`}
                  onClick={() => setActiveIdx(idx)}
                  className={[
                    "shrink-0 rounded-xl px-5 py-3 text-xs font-black uppercase tracking-[0.28em] transition-colors",
                    selected ? "bg-primary text-white" : "text-white/80 hover:bg-white/5",
                  ].join(" ")}
                >
                  {branchNavLabel(b.name)}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Branch facilities */}
      <div
        id={`${tabsId}-panel-${activeIdx}`}
        role="tabpanel"
        aria-labelledby={`${tabsId}-tab-${activeIdx}`}
        className="mt-10 grid gap-8 md:grid-cols-12 md:items-stretch md:gap-10"
      >
        <div className="md:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#1b1b1b] md:aspect-auto md:h-full md:max-h-screen md:min-h-[420px]">
            <Image
              src={facilities.introImage.src}
              alt={t(facilities.introImage.altKey)}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[10px] font-black uppercase tracking-[0.38em] text-primary md:text-xs">
                {t("branchLabel")}
              </p>
              <h3 className="mt-2 text-2xl font-black uppercase tracking-tight md:text-4xl">
                {active.location}
              </h3>
              <p className="mt-1 max-w-xl text-xs font-medium text-slate-200/90 md:text-sm">
                {active.address}
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 md:items-center">
          <header className="text-center md:text-left">
            <p className="text-primary text-xs font-black tracking-[0.38em] uppercase md:text-sm">
              {t("branchFacilitiesKicker")}
            </p>
            <h3 className="mt-3 text-2xl font-black tracking-tight uppercase md:text-3xl">
              {active.name}
            </h3>
          </header>

          <p className="mt-6 text-sm leading-relaxed text-slate-300 md:text-base">
            {t("introBody")}
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16 md:gap-6">
        {facilities.gallery.map((item) => (
          <div key={item.src} className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#1b1b1b]">
            <Image
              src={item.src}
              alt={t(item.altKey)}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 28vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      <section className="mt-16 md:mt-20">
        <div className="mx-auto max-w-6xl">
          {facilities.topics.map((topic, idx) => {
            const imageFirst = topic.imageSide === "left";

            const imageCol = (
              <div className="md:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#1b1b1b] md:aspect-[16/10]">
                  <Image
                    src={topic.imageSrc}
                    alt={t(topic.imageAltKey)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
              </div>
            );

            const textCol = (
              <div className="md:col-span-6">
                <p className="text-primary text-xs font-black tracking-[0.38em] uppercase md:text-sm">
                  {t("benefitsKicker")}
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight uppercase md:text-4xl">
                  {t(topic.titleKey)}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
                  {t(topic.bodyKey)}
                </p>
              </div>
            );

            return (
              <div
                key={`${topic.titleKey}-${topic.imageSrc}`}
                className={[
                  "grid gap-10 md:grid-cols-12 md:items-center md:gap-12",
                  idx === 0 ? "mt-16" : "mt-20",
                ].join(" ")}
              >
                {imageFirst ? imageCol : textCol}
                {imageFirst ? textCol : imageCol}
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}

