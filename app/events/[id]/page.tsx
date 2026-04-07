import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { EVENTS } from "@/data/events";

function getEventById(id: string) {
  return EVENTS.find((event) => event.id === id);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) {
    return {
      title: "Event Not Found | Martial Art Club",
      description: "The requested event could not be found.",
    };
  }

  return {
    title: `${event.title} | Events | Martial Art Club`,
    description: event.description,
  };
}

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) notFound();

  const gallery =
    event.gallery && event.gallery.length > 0
      ? event.gallery
      : event.imageSrc
        ? [{ src: event.imageSrc, alt: event.imageAlt ?? event.title }]
        : [];

  return (
    <main className="flex-1 overflow-x-hidden bg-[#000000] text-white">
      <section className="border-b border-white/10 bg-background-dark">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="mb-10">
            <Link
              href="/events"
              className="inline-flex items-center gap-3 text-sm font-black tracking-widest uppercase text-slate-300 transition-colors hover:text-white"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Events
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.35fr] md:items-start">
            <div className="space-y-6">
              <div className="inline-flex">
                <span
                  className={`inline-flex items-center gap-2 rounded-sm px-6 py-3 text-xs font-black tracking-[0.28em] uppercase shadow-lg ring-1 backdrop-blur ${
                    event.state === "upcoming"
                      ? "text-white border-l-[6px] border-primary ring-primary/35 shadow-primary/25 bg-white/5"
                      : "bg-white/5 text-slate-200 border-l-[6px] border-secondary ring-white/10 shadow-black/30"
                  }`}
                >
                  {event.state === "upcoming" ? (
                    <span className="inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(245,158,11,0.20)]" />
                  ) : null}
                  {event.state === "upcoming" ? "Upcoming event" : "Past event"}
                </span>
              </div>

              <h1 className="text-4xl font-black tracking-tight uppercase md:text-6xl">
                {event.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm font-black tracking-widest uppercase text-slate-300">
                {event.dateMonth && event.dateDay ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">
                      calendar_month
                    </span>
                    {event.dateMonth} {event.dateDay}
                  </span>
                ) : null}
                {event.timeLabel ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">
                      schedule
                    </span>
                    {event.timeLabel}
                  </span>
                ) : null}
              </div>

              <p className="text-base font-medium leading-relaxed text-slate-300 md:text-lg">
                {event.longDescription ?? event.description}
              </p>

              {event.highlights && event.highlights.length > 0 ? (
                <div className="rounded-sm border border-white/10 bg-white/5 p-6">
                  <h2 className="text-sm font-black tracking-widest uppercase text-white">
                    Highlights
                  </h2>
                  <ul className="mt-4 space-y-2 text-sm font-semibold text-slate-300">
                    {event.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-red-700"
                >
                  Contact Us
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center border border-white/20 bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white/10"
                >
                  Explore More Events
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              {gallery.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {gallery.slice(0, 2).map((img, index) => (
                    <div
                      key={`${img.src}-${index}`}
                      className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/10 bg-[#141414] shadow-2xl md:aspect-[16/9]"
                    >
                      <Image
                        alt={img.alt ?? event.title}
                        src={img.src}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 58vw"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-sm border border-white/10 bg-white/5 p-10 text-center text-slate-300">
                  No images available for this event yet.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

