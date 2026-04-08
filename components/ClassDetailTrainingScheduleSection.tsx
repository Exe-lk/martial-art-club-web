"use client";

import { useMemo } from "react";
import Link from "next/link";

import {
  trainingBranches,
  trainingClasses,
  WEEKDAYS_ORDER,
  weekdayLabels,
  type TrainingBranch,
  type TrainingClassDetail,
  type Weekday,
} from "@/data/trainingSchedule";
import { branches as clubBranches } from "@/data/branches";

function formatClassTime(startTime: string): string {
  const [hStr, mStr] = startTime.split(":");
  const h = Number.parseInt(hStr ?? "0", 10);
  const m = Number.parseInt(mStr ?? "0", 10);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d.toLocaleTimeString("en-LK", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function formatClassDate(date: string): string {
  // Stored as YYYY-MM-DD in data; render a readable date.
  const d = new Date(`${date}T00:00:00`);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-LK", { year: "numeric", month: "short", day: "2-digit" });
}

function humanizeBranchId(branchId: string): string {
  return branchId
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" - ");
}

function getBranchLabel(branchId: string): string {
  return trainingBranches.find((b) => b.id === branchId)?.label ?? humanizeBranchId(branchId);
}

function weekdayIndex(day: Weekday): number {
  const idx = WEEKDAYS_ORDER.indexOf(day);
  return idx === -1 ? 999 : idx;
}

function parseTimeToMinutes(time: string): number {
  const [h, m] = time.split(":").map((x) => Number.parseInt(x, 10));
  if (Number.isNaN(h) || Number.isNaN(m)) return 0;
  return h * 60 + m;
}

function locationSlugFromTrainingBranchId(branchId: string): string {
  // Examples:
  // - "kung-fu-urubokka" -> "urubokka"
  // - "jkd-walasmulla" -> "walasmulla"
  const parts = branchId.split("-").filter(Boolean);
  return (parts.at(-1) ?? "").toLowerCase();
}

function branchHrefFromTrainingBranchId(branchId: string): string {
  const locationSlug = locationSlugFromTrainingBranchId(branchId);
  const exists = clubBranches.some((b) => b.slug.toLowerCase() === locationSlug);
  return exists ? `/branches/${locationSlug}` : "/branches";
}

function normalizeArtFromSlug(slug: string): "Kung Fu" | "Jeet Kune Do" | "Wushu" | null {
  if (slug === "kung-fu") return "Kung Fu";
  if (slug === "jeet-kune-do") return "Jeet Kune Do";
  if (slug === "wushu") return "Wushu";
  return null;
}

function sessionMatchesArt(session: TrainingClassDetail, art: NonNullable<ReturnType<typeof normalizeArtFromSlug>>): boolean {
  const branch = trainingBranches.find((b) => b.id === session.branchId);
  if (branch?.art) return branch.art.toLowerCase() === art.toLowerCase();

  // Fallback: infer from ids since some data uses branchId prefixes like "KunFu-..." / "WUSU-..."
  const haystack = `${session.branchId} ${session.id}`.toLowerCase();
  if (art === "Jeet Kune Do") return haystack.includes("jkd");
  if (art === "Kung Fu") return haystack.includes("kunfu") || haystack.includes("kung");
  if (art === "Wushu") return haystack.includes("wusu") || haystack.includes("wushu");
  return false;
}

type Props = {
  classSlug: string;
};

export default function ClassDetailTrainingScheduleSection({ classSlug }: Props) {
  const art = normalizeArtFromSlug(classSlug);

  const sessions = useMemo(() => {
    if (!art) return [];
    return trainingClasses.filter((s) => sessionMatchesArt(s, art));
  }, [art]);

  const branches = useMemo(() => {
    const byBranch = new Map<string, TrainingClassDetail[]>();
    for (const s of sessions) {
      const list = byBranch.get(s.branchId) ?? [];
      list.push(s);
      byBranch.set(s.branchId, list);
    }

    const result: Array<{
      branchId: string;
      branchLabel: string;
      sessions: TrainingClassDetail[];
      art?: TrainingBranch["art"];
      location?: TrainingBranch["location"];
    }> = [];

    for (const [branchId, items] of byBranch.entries()) {
      const branch = trainingBranches.find((b) => b.id === branchId);
      result.push({
        branchId,
        branchLabel: getBranchLabel(branchId),
        sessions: items.slice().sort((a, b) => {
          const w = weekdayIndex(a.weekday) - weekdayIndex(b.weekday);
          if (w !== 0) return w;
          return parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime);
        }),
        art: branch?.art,
        location: branch?.location,
      });
    }

    return result.sort((a, b) => a.branchLabel.localeCompare(b.branchLabel));
  }, [sessions]);

  return (
    <section id="schedule" className="bg-[#000000] py-24 px-6 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-primary font-black uppercase tracking-[0.2em] mb-4 text-sm">
          Timetable
        </h2>
        <h3 className="text-4xl font-black text-white uppercase">
          Weekly Training Schedule
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-400 md:text-base">
          {art ? `Showing ${art} sessions by branch.` : "Schedule unavailable."}
        </p>
      </div>

      {branches.length === 0 ? (
        <div className="mx-auto max-w-3xl rounded-lg border border-white/10 bg-[#141414] p-8 text-center text-slate-300">
          No sessions found for this class yet.
        </div>
      ) : (
        <div className="mx-auto max-w-6xl space-y-10">
          {branches.map((branch) => (
            <div key={branch.branchId} className="rounded-xl border border-white/10 bg-[#121212] p-6 md:p-8">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-white">
                    {branch.branchLabel}
                  </h4>
                  <p className="mt-1 text-xs font-black tracking-widest uppercase text-slate-400">
                    {branch.location ? `${branch.location} Branch` : "Branch"}
                  </p>
                </div>
                <p className="text-xs font-black tracking-widest uppercase text-slate-400">
                  {branch.sessions.length} Session{branch.sessions.length === 1 ? "" : "s"}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {branch.sessions.map((s) => (
                  <div
                    key={s.id}
                    className="rounded-lg border border-white/10 bg-[#141414] p-5 shadow-lg"
                  >
                    <p className="text-[10px] font-black tracking-[0.28em] uppercase text-primary">
                      {weekdayLabels[s.weekday]}
                    </p>
                    <div className="mt-2 flex items-baseline justify-between gap-3">
                      <h5 className="text-lg font-black uppercase text-white">{s.title}</h5>
                      <span className="font-mono text-sm text-slate-200">
                        {formatClassTime(s.startTime)}
                      </span>
                    </div>

                    <p className="mt-2 text-xs font-bold tracking-wide text-slate-400 uppercase">
                      {formatClassDate(s.date)}
                    </p>

                    <Link
                      href={branchHrefFromTrainingBranchId(s.branchId)}
                      className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-white/10 bg-[#1a1a1a] px-4 py-2.5 text-[11px] font-black tracking-widest text-slate-200 uppercase transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      Contact academy
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

