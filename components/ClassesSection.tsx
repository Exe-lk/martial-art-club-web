 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  trainingBranches,
  trainingClasses,
  type WeeklyClassTone,
} from "@/data/trainingSchedule";

const toneAccent: Record<WeeklyClassTone, string> = {
  primary: "text-primary",
  secondary: "text-blue-200",
  neutral: "text-slate-200",
  muted: "text-slate-400",
};

function branchHeadline(branchId: string): string {
  const b = trainingBranches.find((x) => x.id === branchId);
  return b ? `${b.art} — ${b.location}` : branchId;
}

export default function ClassesSection() {
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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-background-dark py-24 text-white"
      id="programs"
    >
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-16 space-y-4 text-center">
          <h2 className="text-primary text-sm font-black tracking-widest uppercase">
            Our Martial Arts Programs
          </h2>
          <h3 className="text-4xl font-black tracking-tight uppercase md:text-5xl">
            Choose Your Path
          </h3>
          <p className="mx-auto max-w-2xl text-slate-400">
            Each card reflects a class from your schedule. Details open on click.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainingClasses.map((c, idx) => {
            const accent = toneAccent[c.tone ?? "neutral"];
            return (
              <article
                key={c.id}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-lg"
              >
                <Image
                  alt={`${branchHeadline(c.branchId)} — ${c.title}`}
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 image-wipe ${reveal ? "image-wipe--show" : ""}`}
                  src={c.imageUrl}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ ["--image-wipe-delay" as any]: `${idx * 90}ms` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/25" />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/35" />

                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-6 md:p-8">
                  <p className={`mb-2 text-[10px] font-black tracking-[0.25em] uppercase ${accent}`}>
                    {c.title}
                  </p>
                  <h4 className="text-xl font-black uppercase leading-tight tracking-tight md:text-3/2xl">
                    {branchHeadline(c.branchId)}
                  </h4>
                </div>

                <div className="absolute inset-0 z-20 flex items-center justify-center p-6 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
                  <Link
                    href={`/training-classes/${encodeURIComponent(c.id)}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-xs font-black tracking-[0.2em] text-white uppercase shadow-lg transition-transform hover:scale-[1.02] hover:bg-red-700 active:scale-[0.98]"
                  >
                    Explore more
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
