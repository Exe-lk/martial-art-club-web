"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";

import { branches } from "@/data/branches";
import { googleMapsDirectionsUrl, googleMapsSearchUrl } from "@/lib/mapsUrls";

/** Tab label: show place/branch only (drop leading style prefix like "Jeet Kun Do - "). */
function branchNavLabel(fullName: string): string {
  const parts = fullName.split(" - ");
  return parts.length > 1 ? parts.slice(1).join(" - ").trim() : fullName;
}

export default function BranchesSection() {
  const tabsId = useId();

  const [activeIdx, setActiveIdx] = useState(0);
  const active = branches[activeIdx]!;
  const directionsHref = googleMapsDirectionsUrl(active.address);
  const openMapHref = googleMapsSearchUrl(active.address);

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
                  {branchNavLabel(b.name)}
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
                  alt={`${active.location} branch training image`}
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
                    {active.location}
                  </h3>
                  <p className="mt-1 max-w-md text-xs font-medium text-slate-300">
                    {active.name}
                  </p>
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
                    <a
                      href={directionsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center rounded bg-primary px-4 py-3 text-xs font-black tracking-widest text-white uppercase transition-all hover:bg-red-700"
                    >
                      Get Directions
                    </a>
                    <Link
                      href="/schedule"
                      className="flex w-full items-center justify-center rounded border-2 border-white/15 bg-black/30 px-4 py-3 text-xs font-black tracking-widest text-white uppercase transition-all hover:border-primary hover:bg-white/5"
                    >
                      View Schedule
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Google Map (embed URL from data/branches.ts) */}
            <div className="relative flex min-h-[320px] flex-col overflow-hidden rounded-xl bg-white/5 lg:col-span-5 lg:min-h-0 lg:h-full lg:max-h-[calc(52vh+12.5rem)]">
              <iframe
                title={`Google Map — ${active.location}`}
                className="min-h-[280px] flex-1 border-0 lg:min-h-0"
                src={active.mapEmbedUrl}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15" />

              <div className="absolute left-6 right-6 top-6 flex items-center justify-between border-l-2 border-primary bg-black/60 p-4 backdrop-blur pointer-events-auto">
                <div>
                  <p className="text-[10px] font-black tracking-widest text-primary uppercase">
                    Location
                  </p>
                  <p className="text-sm font-bold text-white">
                    {active.districtLabel}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-300">{active.location}</p>
                </div>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-primary p-2 text-white transition-colors hover:bg-red-700"
                  aria-label="Open directions in Google Maps"
                >
                  <span className="material-symbols-outlined">directions</span>
                </a>
              </div>

              <div className="absolute bottom-6 left-6 right-6 pointer-events-auto">
                <a
                  href={openMapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded border-2 border-white/15 bg-black/50 py-4 text-xs font-black tracking-widest text-white uppercase backdrop-blur transition-all hover:border-primary hover:bg-primary"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

