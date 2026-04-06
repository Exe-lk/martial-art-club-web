"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { EVENTS, type ClubEvent } from "@/data/events";

function StateBadgeCompact({ state }: { state: ClubEvent["state"] }) {
  const isUpcoming = state === "upcoming";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-sm px-4 py-2 text-[11px] font-black tracking-[0.28em] uppercase shadow-lg ring-1 backdrop-blur ${
        isUpcoming
          ? "event-badge-upcoming-pulse text-white border-l-[5px] border-primary ring-primary/35 shadow-primary/25"
          : "bg-white/5 text-slate-200 border-l-[5px] border-secondary ring-white/10 shadow-black/30"
      }`}
    >
      {isUpcoming ? (
        <span className="inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(245,158,11,0.20)]" />
      ) : null}
      {isUpcoming ? "Upcoming" : "Past"}
    </span>
  );
}

function EventCard({
  event,
  index,
  reveal,
}: {
  event: ClubEvent;
  index: number;
  reveal: boolean;
}) {
  const imageClipPath = "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)";

  const isEven = index % 2 === 0;
  const accentColor = isEven ? "secondary" : "primary";
  const eyebrowText =
    accentColor === "primary" ? "text-primary" : "text-secondary";

  return (
    <article className="group relative overflow-hidden rounded-none bg-black/30 ring-1 ring-white/10 backdrop-blur-sm">
      <div className="relative">
        <div className="absolute left-4 top-4 z-20">
          <StateBadgeCompact state={event.state} />
        </div>
        <div
          className="relative aspect-[16/10] overflow-hidden bg-[#141414] shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
          style={{ clipPath: imageClipPath }}
        >
          {event.imageSrc ? (
            <Image
              alt={event.imageAlt ?? event.title}
              className={`object-cover opacity-85 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-100 event-image-wipe ${
                reveal ? "event-image-wipe--show" : ""
              }`}
              src={event.imageSrc}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ ["--event-wipe-delay" as any]: `${index * 90}ms` }}
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-primary/20 via-black to-secondary/15" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>
        <div
          className={`absolute ${
            isEven ? "bottom-0 right-0" : "top-0 left-0"
          } h-[2px] w-20 ${isEven ? "bg-primary" : "bg-secondary"}`}
        />
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`text-[10px] font-black tracking-[0.22em] uppercase ${eyebrowText}`}
          >
            {event.eyebrow}
          </span>
        </div>

        <h3 className="text-lg font-black tracking-tight uppercase text-white sm:text-xl">
          {event.title}
        </h3>

        {/* <p className="line-clamp-3 text-sm font-medium leading-relaxed text-slate-400">
          {event.description}
        </p> */}

        <a
          className={`inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-white transition-colors ${
            accentColor === "primary" ? "hover:text-primary" : "hover:text-secondary"
          }`}
          href={event.ctaHref ?? "#"}
        >
          {event.ctaLabel}
          <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </a>
      </div>
    </article>
  );
}

export default function EventsCardsSection() {
  const ordered = useMemo(() => {
    const upcoming = EVENTS.filter((e) => e.state === "upcoming");
    const past = EVENTS.filter((e) => e.state === "past");
    return [...upcoming, ...past];
  }, []);

  const sectionRef = useRef<HTMLElement | null>(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setReveal(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-background-dark text-white py-16"
      id="events"
    >
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-black tracking-tight uppercase md:text-5xl">
            Events <span className="text-primary">&amp;</span> Activities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-400 md:text-base">
            Latest highlights and what’s coming next.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ordered.map((event, idx) => (
            <EventCard key={event.id} event={event} index={idx} reveal={reveal} />
          ))}
        </div>
      </div>
    </section>
  );
}

