"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  trainingBranches,
  trainingClasses,
  type TrainingBranch,
} from "@/data/trainingSchedule";

function formatClassTime(startTime: string): string {
  const [hStr, mStr] = startTime.split(":");
  const h = Number.parseInt(hStr ?? "0", 10);
  const m = Number.parseInt(mStr ?? "0", 10);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d.toLocaleTimeString("en-LK", { hour: "numeric", minute: "2-digit", hour12: true });
}

function humanizeBranchId(branchId: string): string {
  // e.g. "jkd-urubokka" -> "Jkd - Urubokka", "KunFu-urubokka" -> "KunFu - Urubokka"
  return branchId
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" - ");
}

function getBranchLocationLabel(branch: TrainingBranch): string {
  if (branch.location?.trim()) return branch.location.trim();

  // Fallback for any branch ids not present in trainingBranches.
  // Example: "jkd-urubokka" -> "Urubokka"
  const parts = branch.id.split("-").filter(Boolean);
  const last = parts.at(-1) ?? branch.label ?? branch.id;
  return last.charAt(0).toUpperCase() + last.slice(1);
}

export default function BranchScheduleSection() {
  const allBranchOptions = useMemo(() => {
    const branchesById = new Map<string, TrainingBranch>();

    for (const b of trainingBranches) branchesById.set(b.id, b);

    // Ensure every branch referenced by a class is selectable (even if missing from trainingBranches).
    for (const c of trainingClasses) {
      if (!branchesById.has(c.branchId)) {
        branchesById.set(c.branchId, {
          id: c.branchId,
          art: "",
          location: "",
          label: humanizeBranchId(c.branchId),
        });
      }
    }

    return [...branchesById.values()];
  }, []);

  const [activeBranchId, setActiveBranchId] = useState<TrainingBranch["id"]>(
    allBranchOptions[0]?.id ?? "",
  );

  const mainSectionHeaderClass =
    "mx-auto mb-4 w-fit pb-2 text-center text-4xl font-black tracking-tight uppercase md:text-5xl";
  const mainSectionKickerClass = "text-xs font-bold tracking-widest text-slate-300 uppercase text-center";

  const activeBranch = useMemo(
    () => allBranchOptions.find((b) => b.id === activeBranchId) ?? allBranchOptions[0],
    [activeBranchId, allBranchOptions],
  );

  const sessions = useMemo(
    () => trainingClasses.filter((c) => c.branchId === activeBranchId),
    [activeBranchId],
  );

  return (
    <section id="schedule" className="mx-auto max-w-7xl px-6 pt-24 pb-24 md:px-12">
      <header className="mb-16">
        <h2 className={mainSectionHeaderClass}>
          Training <span className="text-[#d62929]">Schedule</span>
        </h2>
        <p className={mainSectionKickerClass}>Elite Training</p>
        <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-slate-300">
          Select your nearest branch and explore available training sessions.
        </p>
      </header>

      <div className="mb-12 flex gap-2 overflow-x-auto border-b border-neutral-800 pb-4 no-scrollbar">
        {allBranchOptions.map((branch) => {
          const isActive = branch.id === activeBranch?.id;
          return (
            <button
              key={branch.id}
              type="button"
              onClick={() => setActiveBranchId(branch.id)}
              className={
                isActive
                  ? "whitespace-nowrap border-b-2 border-[#d62929] bg-[#d62929] px-8 py-4 text-[12px] font-black tracking-widest text-white uppercase transition-all active:scale-95"
                  : "whitespace-nowrap border-b-2 border-transparent bg-[#141414] px-8 py-4 text-[12px] font-black tracking-widest text-slate-400 uppercase transition-all hover:bg-[#1f1f1f]"
              }
            >
              {getBranchLocationLabel(branch)}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="group relative overflow-hidden border border-white/10 bg-[#141414] shadow-2xl transition-all duration-500 hover:bg-[#292929]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0a0a]">
              <Image
                src={session.imageUrl}
                alt={`${session.title} at ${activeBranch?.location ?? ""}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>

            <div className="p-8">
              <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">
                {activeBranch?.location} Branch
              </span>
              <h3 className="mt-2 text-3xl font-black tracking-tight text-white uppercase">
                {session.title}
              </h3>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#1E3A8A]">calendar_today</span>
                  <span className="text-sm font-medium tracking-wide text-white uppercase">
                    {session.date}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#1E3A8A]">schedule</span>
                  <span className="text-sm font-medium tracking-wide text-white uppercase">
                    {formatClassTime(session.startTime)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="mt-10 w-full bg-[#d62929] py-4 text-[12px] font-black tracking-widest text-white uppercase transition-all group-hover:scale-[1.02] active:scale-95"
              >
                Enlist Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
