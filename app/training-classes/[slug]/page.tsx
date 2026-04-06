import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  trainingBranches,
  trainingClasses,
  weekdayLabels,
} from "@/data/trainingSchedule";

function isPromiseLike<T = unknown>(value: unknown): value is PromiseLike<T> {
  return (
    typeof value === "object" &&
    value !== null &&
    "then" in value &&
    typeof (value as { then?: unknown }).then === "function"
  );
}

function formatStartTime(startTime: string): string {
  const [hStr, mStr] = startTime.split(":");
  const h = Number.parseInt(hStr ?? "0", 10);
  const m = Number.parseInt(mStr ?? "0", 10);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d.toLocaleTimeString("en-LK", { hour: "numeric", minute: "2-digit", hour12: true });
}

function branchHeadline(branchId: string): string {
  const b = trainingBranches.find((x) => x.id === branchId);
  return b ? `${b.art} — ${b.location}` : branchId;
}

function getClassById(id: string) {
  return trainingClasses.find((c) => c.id === id);
}

export function generateStaticParams() {
  return trainingClasses.map((c) => ({ slug: c.id }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> | Metadata {
  const maybePromise = params as unknown as { slug?: string } | Promise<{ slug: string }>;

  if (isPromiseLike<{ slug: string }>(maybePromise)) {
    return (maybePromise as Promise<{ slug: string }>).then(({ slug }) => {
      const cls = getClassById(decodeURIComponent(slug));
      if (!cls) return { title: "Class Not Found" };
      return {
        title: `${branchHeadline(cls.branchId)} · ${cls.title} | Black Dragon JKD`,
        description: `Details for ${cls.title} at ${branchHeadline(cls.branchId)}.`,
      };
    });
  }

  const slug = (maybePromise as { slug?: string }).slug ?? "";
  const cls = getClassById(decodeURIComponent(slug));
  if (!cls) return { title: "Class Not Found" };
  return {
    title: `${branchHeadline(cls.branchId)} · ${cls.title} | Black Dragon JKD`,
    description: `Details for ${cls.title} at ${branchHeadline(cls.branchId)}.`,
  };
}

export default async function TrainingClassDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cls = getClassById(decodeURIComponent(slug));
  if (!cls) notFound();

  const headline = branchHeadline(cls.branchId);
  const imageAlt = `${headline} — ${cls.title}`;

  return (
    <main className="overflow-x-hidden bg-background-dark text-white">
      <section className="relative min-h-[52vh]">
        <div className="absolute inset-0">
          <Image
            src={cls.imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/85 to-background-dark/40" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[52vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-28">
          <p className="mb-3 text-xs font-black tracking-[0.28em] text-primary uppercase">
            Class detail
          </p>
          <h1 className="max-w-4xl text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">
            {headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-bold text-slate-200 md:text-xl">{cls.title}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#weekly-training"
              className="inline-flex items-center justify-center bg-primary px-8 py-4 text-xs font-black tracking-widest text-white uppercase transition-colors hover:bg-red-700"
            >
              View weekly grid
            </Link>
            <Link
              href="/classes/jeet-kune-do"
              className="inline-flex items-center justify-center border-2 border-secondary px-8 py-4 text-xs font-black tracking-widest text-white uppercase transition-colors hover:bg-secondary/15"
            >
              Jeet Kune Do program
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-background-dark py-20 px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <header className="mb-12 text-center md:mb-14">
            <h2 className="text-xs font-black tracking-[0.3em] text-primary uppercase">
              Your session
            </h2>
            <h3 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-4xl">
              Time &amp; date
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              From your schedule: {cls.title} at {headline}.
            </p>
          </header>

          <ul className="mx-auto grid max-w-3xl gap-4">
            <li className="flex flex-col gap-1 rounded-xl border border-white/10 bg-[#141414] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-black tracking-widest text-primary uppercase">
                  {weekdayLabels[cls.weekday]}
                </p>
                <p className="mt-1 text-lg font-black uppercase">{formatStartTime(cls.startTime)}</p>
                <p className="mt-2 text-sm text-slate-400">Date: {cls.date}</p>
              </div>
              <p className="text-sm font-medium text-slate-400">{cls.title}</p>
            </li>
          </ul>

          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-slate-500">
            <Link href="/#programs" className="font-bold text-primary hover:underline">
              Back to Choose Your Path
            </Link>
            <span className="mx-2 text-slate-600">·</span>
            <Link href="/" className="font-bold text-slate-400 hover:text-white">
              Home
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
