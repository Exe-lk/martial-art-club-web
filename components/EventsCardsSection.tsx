"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";

import { EVENTS, type ClubEvent } from "@/data/events";

function EventCard({
  event,
  index,
  reveal,
}: {
  event: ClubEvent;
  index: number;
  reveal: boolean;
}) {
  const t = useTranslations("Events");
  const isUpcoming = event.state === "upcoming";

  return (
    <article className="group relative overflow-hidden rounded-3xl bg-[#0D0D0D] shadow-[0_18px_55px_rgba(0,0,0,0.35)] ring-1 ring-white/10 mb-15">
      <div className="relative">
        {event.dateMonth && event.dateDay ? (
          <div className="absolute left-4 top-4 z-20 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/10">
            <div className="px-4 pt-3 text-center text-sm font-black tracking-widest text-red-600">
              {event.dateMonth}
            </div>
            <div className="px-4 pb-3 text-center text-4xl font-black leading-none text-red-600">
              {event.dateDay}
            </div>
          </div>
        ) : null}

        <div className="relative h-64 overflow-hidden bg-[#141414] sm:h-72">
          {event.imageSrc ? (
            <Image
              alt={event.imageAlt ?? event.title}
              className={`object-cover transition-transform duration-700 group-hover:scale-[1.02] ${
                reveal ? "event-image-wipe--show" : ""
              }`}
              src={event.imageSrc}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ ["--event-wipe-delay" as string]: `${index * 90}ms` }}
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-primary/20 via-black to-secondary/15" />
          )}
        </div>
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-2xl font-black tracking-tight text-white">{event.title}</h3>

        <div className="flex flex-wrap items-center gap-3">
          {event.timeLabel ? (
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-white">
              <span className="material-symbols-outlined text-base">schedule</span>
              <span className="whitespace-nowrap">{event.timeLabel}</span>
            </div>
          ) : null}
          <span
            className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-black tracking-widest uppercase ${
              isUpcoming ? "bg-white text-black" : "bg-white/10 text-white"
            }`}
          >
            {isUpcoming ? t("upcoming") : t("past")}
          </span>
        </div>

        <Link
          className="inline-flex w-full items-center justify-center rounded-2xl bg-red-600 px-5 py-4 text-sm font-black tracking-widest uppercase text-white shadow-lg transition-colors hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
          href={`/events/${event.id}`}
          aria-label={t("viewDetailsAria", { title: event.title })}
        >
          {t("viewDetails")}
        </Link>
      </div>
    </article>
  );
}

export default function EventsCardsSection() {
  const t = useTranslations("Events");
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
      { threshold: 0.18 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#000000] text-white py-16" id="events">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-black tracking-tight uppercase md:text-5xl">
            {t("title")} <span className="text-primary">{t("titleAccent")}</span>{" "}
            {t("titleSuffix")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-400 md:text-base">
            {t("subtitle")}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {ordered.map((event, idx) => (
            <EventCard key={event.id} event={event} index={idx} reveal={reveal} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/events"
            className="animated-gradient-border inline-flex items-center justify-center gap-2 rounded-2xl px-10 py-4 text-sm font-black tracking-[0.22em] text-white uppercase shadow-lg transition-transform active:scale-[0.98]"
          >
            {t("seeMore")}
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
