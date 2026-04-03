"use client";

import { useMemo, useState } from "react";
import { trainingBranches, trainingSessions, type TrainingBranch } from "@/data/trainingSchedule";

function formatLkr(priceLkr: number) {
  return `LKR ${priceLkr.toLocaleString("en-LK")}`;
}

export default function BranchScheduleSection() {
  const [activeBranchId, setActiveBranchId] = useState<TrainingBranch["id"]>(
    trainingBranches[0]?.id ?? "",
  );

  const mainSectionHeaderClass =
    "mx-auto mb-4 w-fit border-b-4 border-[#d62929] pb-2 text-center text-4xl font-black tracking-tight uppercase md:text-5xl";
  const mainSectionKickerClass = "text-xs font-bold tracking-widest text-slate-300 uppercase text-center";

  const activeBranch = useMemo(
    () => trainingBranches.find((b) => b.id === activeBranchId) ?? trainingBranches[0],
    [activeBranchId],
  );

  const sessions = useMemo(
    () => trainingSessions.filter((s) => s.branchId === activeBranch?.id),
    [activeBranch?.id],
  );

  return (
    <section id="schedule" className="pt-24 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <header className="mb-16">
        <h2 className={mainSectionHeaderClass}>
          Training <span className="text-[#d62929]">Schedule</span>
        </h2>
        <p className={mainSectionKickerClass}>Elite Training</p>
        <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-slate-300">
          Select your nearest branch and explore available training sessions.
        </p>
      </header>

      {/* Branch Selector Tabs */}
      <div className="flex overflow-x-auto pb-4 mb-12 gap-2 no-scrollbar border-b border-neutral-800">
        {trainingBranches.map((branch) => {
          const isActive = branch.id === activeBranch?.id;
          return (
            <button
              key={branch.id}
              type="button"
              onClick={() => setActiveBranchId(branch.id)}
              className={
                isActive
                  ? "whitespace-nowrap px-8 py-4 bg-[#d62929] text-white font-black uppercase tracking-widest text-[12px] border-b-2 border-[#d62929] active:scale-95 transition-all"
                  : "whitespace-nowrap px-8 py-4 bg-[#141414] text-slate-400 font-black uppercase tracking-widest text-[12px] hover:bg-[#1f1f1f] transition-all border-b-2 border-transparent"
              }
            >
              {branch.label}
            </button>
          );
        })}
      </div>

      {/* Schedule Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {sessions.map((session, idx) => (
          <div
            key={session.id}
            className="group relative bg-[#141414] border-l-4 border-[#d62929] p-8 shadow-2xl transition-all duration-500 hover:bg-[#292929]"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-[#1E3A8A]">
                {session.icon}
              </span>
            </div>

            <div className="mb-8">
              <span className="text-[10px] text-slate-400 tracking-[0.3em] uppercase font-bold">
                {activeBranch?.location} Branch
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tight mt-2 text-white">
                {session.title}
              </h3>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#1E3A8A]">calendar_today</span>
                <span className="text-white font-medium uppercase text-sm tracking-wide">
                  {session.date}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#1E3A8A]">schedule</span>
                <span className="text-white font-medium uppercase text-sm tracking-wide">
                  {session.time}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#1E3A8A]">timer</span>
                <span className="text-white font-medium uppercase text-sm tracking-wide">
                  {session.duration}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#1E3A8A]">payments</span>
                <span className="text-white font-black text-xl tracking-tight">
                  {formatLkr(session.priceLkr)}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-[#d62929] py-4 text-white font-black uppercase tracking-widest text-[12px] group-hover:scale-[1.02] active:scale-95 transition-all"
            >
              Enlist Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

