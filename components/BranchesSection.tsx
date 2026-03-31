"use client";

import { useId, useMemo, useState } from "react";

type Branch = {
  name: string;
  subtitle: string;
  heroImageUrl: string;
  headquartersLabel: string;
  address: string;
  phone: string;
  email: string;
  districtLabel: string;
  mapImageUrl: string;
};

export default function BranchesSection() {
  const tabsId = useId();

  const branches: Branch[] = useMemo(
    () => [
      {
        name: "Downtown Dojo",
        subtitle: "Flagship Location • Est. 2018",
        heroImageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0oOwi9rXv8msd57wzdxeGK231KI0psuacq0mUVisn3Her54OklCuEVsNY4gxXJUhuquPz7j6eJOVHX0SB5Vuto1Yd9HMz6ueK6YQwtf3XMBIHhVq-G3RjNb9K70EBF46vY7oN8Hc1zM-e5n_a9ynPt8jQ-os9ZYQ8qwBL-gWSSG2AVwvX1SwslAV5oS5_kdQzJq3POyHZ_4HWtPYp_ejVvRxsjoBgRTqyGYlncaoMl5K5BkPDoPoJFEnonnJ1GU3YzUG7bUSc40",
        headquartersLabel: "Headquarters",
        address: "123 Warrior Way, Combat City",
        phone: "+1 (555) 123-4567",
        email: "info@apexmartialarts.com",
        districtLabel: "Downtown District",
        mapImageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDZcAZJQTElEbRNaA1CZ67wkMBqxppaut2YNTHnTrGXNr_3vdJ6sUzwtmt9bVxnM7JzXyoEPjaVJr96ejdl8Lf512rqGwPQr5liUn5eZfw7m9EJIezZbordVFw2JeQmLPgJ6nwQ7dP6HsHV1MVp3nmQkLIiB_LVEiQcJ9L-7CunUaCWrpaCDc6RStJhH173XHvzJYAAh76KKrjtGbCg-xQoyHLjI_2XrQFQja5U66VRmAaYlqDdAn_577zSjqRWQ-3ELI6go7MfZJg",
      },
      {
        name: "Elite Performance Center",
        subtitle: "High-Performance Training • Strength & Conditioning",
        heroImageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0oOwi9rXv8msd57wzdxeGK231KI0psuacq0mUVisn3Her54OklCuEVsNY4gxXJUhuquPz7j6eJOVHX0SB5Vuto1Yd9HMz6ueK6YQwtf3XMBIHhVq-G3RjNb9K70EBF46vY7oN8Hc1zM-e5n_a9ynPt8jQ-os9ZYQ8qwBL-gWSSG2AVwvX1SwslAV5oS5_kdQzJq3POyHZ_4HWtPYp_ejVvRxsjoBgRTqyGYlncaoMl5K5BkPDoPoJFEnonnJ1GU3YzUG7bUSc40",
        headquartersLabel: "Performance Desk",
        address: "88 Victory Rd, Sports District",
        phone: "+1 (555) 909-IRON",
        email: "elite@apexmartialarts.com",
        districtLabel: "Sports District",
        mapImageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDZcAZJQTElEbRNaA1CZ67wkMBqxppaut2YNTHnTrGXNr_3vdJ6sUzwtmt9bVxnM7JzXyoEPjaVJr96ejdl8Lf512rqGwPQr5liUn5eZfw7m9EJIezZbordVFw2JeQmLPgJ6nwQ7dP6HsHV1MVp3nmQkLIiB_LVEiQcJ9L-7CunUaCWrpaCDc6RStJhH173XHvzJYAAh76KKrjtGbCg-xQoyHLjI_2XrQFQja5U66VRmAaYlqDdAn_577zSjqRWQ-3ELI6go7MfZJg",
      },
      {
        name: "Westside Academy",
        subtitle: "Family Programs • Kids & Beginners Friendly",
        heroImageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0oOwi9rXv8msd57wzdxeGK231KI0psuacq0mUVisn3Her54OklCuEVsNY4gxXJUhuquPz7j6eJOVHX0SB5Vuto1Yd9HMz6ueK6YQwtf3XMBIHhVq-G3RjNb9K70EBF46vY7oN8Hc1zM-e5n_a9ynPt8jQ-os9ZYQ8qwBL-gWSSG2AVwvX1SwslAV5oS5_kdQzJq3POyHZ_4HWtPYp_ejVvRxsjoBgRTqyGYlncaoMl5K5BkPDoPoJFEnonnJ1GU3YzUG7bUSc40",
        headquartersLabel: "Front Desk",
        address: "45 Titan St, Westside",
        phone: "+1 (555) 000-2222",
        email: "westside@apexmartialarts.com",
        districtLabel: "Westside",
        mapImageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDZcAZJQTElEbRNaA1CZ67wkMBqxppaut2YNTHnTrGXNr_3vdJ6sUzwtmt9bVxnM7JzXyoEPjaVJr96ejdl8Lf512rqGwPQr5liUn5eZfw7m9EJIezZbordVFw2JeQmLPgJ6nwQ7dP6HsHV1MVp3nmQkLIiB_LVEiQcJ9L-7CunUaCWrpaCDc6RStJhH173XHvzJYAAh76KKrjtGbCg-xQoyHLjI_2XrQFQja5U66VRmAaYlqDdAn_577zSjqRWQ-3ELI6go7MfZJg",
      },
    ],
    [],
  );

  const [activeIdx, setActiveIdx] = useState(0);
  const active = branches[activeIdx]!;

  return (
    <>
      <section className="bg-background-dark px-6 py-10 md:px-20">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col">
          <span className="mb-2 block text-sm font-black tracking-widest text-primary uppercase">
            Our Locations
          </span>
          <h2 className="mb-6 border-b border-white/10 pb-5 text-3xl font-black tracking-tighter text-white uppercase md:text-5xl">
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
                <div
                  className="h-full w-full bg-slate-800 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${active.heroImageUrl}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  aria-label={`${active.name} training image`}
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
            <div className="lg:col-span-5 relative min-h-[320px] overflow-hidden rounded-xl bg-white/5 lg:min-h-0 lg:h-full lg:max-h-[calc(52vh+12.5rem)]">
              <div
                className="h-full w-full grayscale brightness-75 contrast-125"
                style={{
                  backgroundImage: `url('${active.mapImageUrl}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-label={`Map preview for ${active.name}`}
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

      {/* Branch stats */}
      <section className="bg-black px-6 py-8 md:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: "12k+", label: "Active Members" },
            { value: "03", label: "Branches" },
            { value: "50+", label: "Certified Coaches" },
            { value: "24/7", label: "Support" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-black italic tracking-tighter text-white md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

