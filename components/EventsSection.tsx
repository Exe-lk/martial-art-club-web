"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { EVENTS, type ClubEvent } from "@/data/events";

function EventTitle({
  title,
  accentWord,
}: {
  title: string;
  accentWord?: string;
}) {
  if (!accentWord || !title.includes(accentWord)) {
    return (
      <h3 className="text-3xl font-black tracking-tight uppercase text-white md:text-5xl">
        {title}
      </h3>
    );
  }

  const [before, after] = title.split(accentWord);
  return (
    <h3 className="text-3xl font-black tracking-tight uppercase text-white md:text-5xl">
      {before}
      <span className="text-primary">{accentWord}</span>
      {after}
    </h3>
  );
}

function StateBadge({ state }: { state: ClubEvent["state"] }) {
  const isUpcoming = state === "upcoming";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-sm px-10 py-5 text-sm font-black tracking-[0.28em] uppercase shadow-lg ring-1 backdrop-blur md:text-base ${
        isUpcoming
          ? "event-badge-upcoming-pulse text-white border-l-[6px] border-primary ring-primary/35 shadow-primary/25"
          : "bg-white/5 text-slate-200 border-l-[6px] border-secondary ring-white/10 shadow-black/30"
      }`}
    >
      {isUpcoming ? (
        <span className="inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(245,158,11,0.20)]" />
      ) : null}
      {isUpcoming ? "Upcoming event" : "Past event"}
    </span>
  );
}

function EventBlock({
  event,
  index,
  reveal,
}: {
  event: ClubEvent;
  index: number;
  reveal: boolean;
}) {
  const isEven = index % 2 === 0;
  const imageClipPath = isEven
    ? "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)"
    : "polygon(0 0, 90% 0, 100% 100%, 10% 100%)";

  const accentColor = isEven ? "secondary" : "primary";
  const eyebrowBar = accentColor === "primary" ? "bg-primary" : "bg-secondary";
  const eyebrowText =
    accentColor === "primary" ? "text-primary" : "text-secondary";

  return (
    <div
      className={`flex flex-col items-center gap-10 md:gap-12 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="w-full md:w-1/2">
        <div className="relative">
          <div className="absolute -top-10 left-0 z-20 md:-top-12">
            <StateBadge state={event.state} />
          </div>
          <div
            className="relative aspect-[16/10] overflow-hidden bg-[#141414] shadow-2xl transition-transform duration-700 hover:scale-[1.01]"
            style={{ clipPath: imageClipPath }}
          >
            {event.imageSrc ? (
              <Image
                alt={event.imageAlt ?? event.title}
                className={`object-cover opacity-85 transition-transform duration-1000 hover:scale-110 hover:opacity-100 event-image-wipe ${reveal ? "event-image-wipe--show" : ""}`}
                src={event.imageSrc}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ ["--event-wipe-delay" as any]: `${index * 120}ms` }}
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-primary/20 via-black to-secondary/15" />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          </div>
          <div
            className={`absolute ${
              isEven ? "bottom-0 right-0" : "top-0 left-0"
            } h-[2px] w-24 ${isEven ? "bg-primary" : "bg-secondary"}`}
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-5">
        <div className="flex items-center gap-4">
          <div className={`h-[2px] w-12 ${eyebrowBar}`} />
          <span className={`text-xs font-black tracking-[0.2em] uppercase ${eyebrowText}`}>
            {event.eyebrow}
          </span>
        </div>

        <EventTitle title={event.title} accentWord={event.accentWord} />

        <p className="border-l-2 border-slate-800 pl-6 text-base font-medium leading-relaxed text-slate-400 md:text-lg">
          {event.description}
        </p>

        <a
          className={`group inline-flex items-center gap-3 text-sm font-black tracking-widest uppercase text-white transition-colors ${
            accentColor === "primary"
              ? "hover:text-primary"
              : "hover:text-secondary"
          }`}
          href={event.ctaHref ?? "#"}
        >
          {event.ctaLabel}
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
}

export default function EventsSection() {
  const upcoming = EVENTS.filter((e) => e.state === "upcoming");
  const past = EVENTS.filter((e) => e.state === "past");
  const ordered = [...upcoming, ...past];

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
      { threshold: 0.22 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-background-dark text-white py-20"
      id="events"
    >
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-14 text-center">
          <div className="mb-5 inline-flex">
            <span className="inline-flex items-center rounded-sm bg-primary/20 px-4 py-1 text-[10px] font-black tracking-[0.3em] text-primary uppercase border-l-4 border-primary">
              Operational Status: Active
            </span>
          </div>
          <h2 className="text-4xl font-black tracking-tight uppercase md:text-6xl">
            Events <span className="text-primary">&amp;</span> Activities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-400 md:text-lg">
            Explore our recent achievements and upcoming experiences. Designed for those who seek
            technical mastery and disciplined growth.
          </p>
        </header>

        <div className="space-y-8 md:space-y-8">
          {ordered.map((event, idx) => (
            <div key={event.id} className="space-y-16 md:space-y-24">
              <EventBlock event={event} index={idx} reveal={reveal} />
              {idx !== ordered.length - 1 ? (
                <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-25" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

