"use client";

import Image from "next/image";
import { useId, useState } from "react";

import { branches } from "@/data/branches";

export default function BranchesSection() {
  const tabsId = useId();

  const [activeIdx, setActiveIdx] = useState(0);
  const active = branches[activeIdx]!;

  return (
    <>
      <section className="bg-background-dark px-6 py-10 md:px-20">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col">
          <span className="mb-2 block text-center text-sm font-black tracking-widest text-primary uppercase">
            Our Locations
          </span>
          <h2 className="mb-6 border-b border-white/10 pb-5 text-center text-3xl font-black tracking-tighter text-white uppercase md:text-5xl">
            Find a Branch <br />{" "}
            <span className="text-slate-400">Near You</span>
          </h2>

          {/* Branch tabs */}
          <div
            className="mb-6 flex flex-col gap-2 border-b border-white/10 md:flex-row md:gap-4"
            role="tablist"
            aria-label="Branch locations"
          >
            {branches.map((b, idx) => {
              const selected = idx === activeIdx;
              return (
                <button
                  key={b.name}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`${tabsId}-panel-${idx}`}
                  id={`${tabsId}-tab-${idx}`}
                  onClick={() => setActiveIdx(idx)}
                  className={[
                    "px-6 py-4 text-sm font-black uppercase tracking-widest transition-all duration-300",
                    selected
                      ? "bg-white/10 text-primary border-b-4 border-primary"
                      : "text-slate-400 hover:text-white hover:bg-white/5",
                  ].join(" ")}
                >
                  {b.name}
                </button>
              );
            })}
          </div>

          {/* Content canvas */}
          <div
            id={`${tabsId}-panel-${activeIdx}`}
            role="tabpanel"
            aria-labelledby={`${tabsId}-tab-${activeIdx}`}
            className="grid flex-1 grid-cols-1 gap-5 lg:grid-cols-12 lg:min-h-0"
          >
            {/* Left: visual + branch cards */}
            <div className="lg:col-span-7 flex flex-col gap-5 lg:min-h-0">
              <div className="group relative h-[280px] overflow-hidden rounded-xl bg-white/5 lg:h-full lg:max-h-[52vh]">
                <Image
                  src={active.heroImageUrl}
                  alt={`${active.name} training image`}
                  fill
                  className="bg-slate-800 object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase">
                    {active.subtitle}
                  </p>
                  <h3 className="mt-2 text-3xl font-black tracking-tighter text-white uppercase md:text-4xl">
                    {active.name}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="rounded-xl bg-white/5 p-6 shadow-2xl shadow-black/30">
                  <h4 className="mb-6 border-l-4 border-secondary pl-4 text-lg font-black tracking-widest text-white uppercase">
                    {active.headquartersLabel}
                  </h4>
                  <ul className="space-y-6 text-slate-300">
                    <li className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-2xl text-secondary">
                        location_on
                      </span>
                      <span className="font-medium text-slate-300">
                        {active.address}
                      </span>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-2xl text-secondary">
                        call
                      </span>
                      <span className="font-medium text-slate-300">
                        {active.phone}
                      </span>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-2xl text-secondary">
                        mail
                      </span>
                      <span className="font-medium text-slate-300">
                        {active.email}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white/10 p-6">
                  <div>
                    <h4 className="mb-2 text-lg font-black tracking-widest text-white uppercase">
                      Quick Actions
                    </h4>
                    <p className="mb-6 text-sm text-slate-300">
                      Switch branches above to see details.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <button
                      type="button"
                      className="w-full rounded bg-primary px-4 py-3 text-xs font-black tracking-widest text-white uppercase transition-all hover:bg-red-700"
                    >
                      Get Directions
                    </button>
                    <button
                      type="button"
                      className="w-full rounded border-2 border-white/15 bg-black/30 px-4 py-3 text-xs font-black tracking-widest text-white uppercase transition-all hover:border-primary hover:bg-white/5"
                    >
                      View Schedule
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: map */}
            <div className="relative min-h-[320px] overflow-hidden rounded-xl bg-white/5 lg:col-span-5 lg:min-h-0 lg:h-full lg:max-h-[calc(52vh+12.5rem)]">
              <Image
                src={active.mapImageUrl}
                alt={`Map preview for ${active.name}`}
                fill
                className="object-cover grayscale brightness-75 contrast-125"
                sizes="(max-width: 1024px) 100vw, 42vw"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

              <div className="absolute left-6 right-6 top-6 flex items-center justify-between border-l-2 border-primary bg-black/50 p-4 backdrop-blur">
                <div>
                  <p className="text-[10px] font-black tracking-widest text-primary uppercase">
                    Live Location
                  </p>
                  <p className="text-sm font-bold text-white">
                    {active.districtLabel}
                  </p>
                </div>
                <button
                  type="button"
                  className="rounded bg-primary p-2 text-white hover:bg-red-700"
                >
                  <span className="material-symbols-outlined">directions</span>
                </button>
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                  <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_20px_rgba(214,41,41,0.9)]" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <button className="w-full rounded border-2 border-white/15 bg-black/40 py-4 text-xs font-black tracking-widest text-white uppercase transition-all hover:border-primary hover:bg-primary">
                  View Full Screen Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

