"use client";

import { useCallback, useMemo, useState } from "react";

import {
  WEEKDAYS_ORDER,
  trainingBranches,
  trainingClasses,
  weekdayLabels,
  type TrainingClassDetail,
  type Weekday,
  type WeeklyClassTone,
} from "@/data/trainingSchedule";

const tonePill: Record<WeeklyClassTone, string> = {
  primary: "border-primary/80 text-primary bg-primary/[0.06]",
  secondary: "border-secondary/80 text-blue-200 bg-secondary/[0.12]",
  neutral: "border-white/20 text-slate-200 bg-white/[0.04]",
  muted: "border-slate-600 text-slate-400 bg-white/[0.02]",
};

function parseTimeToMinutes(time: string): number {
  const [h, m] = time.split(":").map((x) => Number.parseInt(x, 10));
  if (Number.isNaN(h) || Number.isNaN(m)) return 0;
  return h * 60 + m;
}

function branchLabel(branchId: string): string {
  return trainingBranches.find((b) => b.id === branchId)?.label ?? branchId;
}

export default function WeeklyTrainingScheduleSection() {
  const [activeDay, setActiveDay] = useState<Weekday>("monday");
  const dayIndex = WEEKDAYS_ORDER.indexOf(activeDay);

  const goNextDay = useCallback(() => {
    const next = (dayIndex + 1) % WEEKDAYS_ORDER.length;
    setActiveDay(WEEKDAYS_ORDER[next]!);
  }, [dayIndex]);

  const goPrevDay = useCallback(() => {
    const prev = (dayIndex - 1 + WEEKDAYS_ORDER.length) % WEEKDAYS_ORDER.length;
    setActiveDay(WEEKDAYS_ORDER[prev]!);
  }, [dayIndex]);

  const dayClasses = useMemo(() => {
    return trainingClasses
      .filter((c) => c.weekday === activeDay)
      .sort((a, b) => parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime));
  }, [activeDay]);

  const timeSlots = useMemo(() => {
    const map = new Map<string, TrainingClassDetail[]>();
    for (const c of dayClasses) {
      const list = map.get(c.startTime) ?? [];
      list.push(c);
      map.set(c.startTime, list);
    }
    return [...map.entries()]
      .sort((a, b) => parseTimeToMinutes(a[0]) - parseTimeToMinutes(b[0]))
      .map(([startTime, classes]) => ({ startTime, classes }));
  }, [dayClasses]);

  return (
    <section
      className="bg-background-dark py-20 text-white md:py-24"
      id="weekly-training"
      aria-labelledby="weekly-training-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-10 text-center md:mb-12">
          <p className="mb-3 text-xs font-black tracking-[0.3em] text-primary uppercase">
            Branch timetable
          </p>
          <h2
            id="weekly-training-heading"
            className="text-4xl font-black tracking-tight uppercase md:text-5xl"
          >
            Weekly <span className="text-primary">Training</span> Schedule
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-400 md:text-lg">
            Sessions from your class list for each weekday.
          </p>
        </header>

        <div
          className="mb-6 flex flex-wrap justify-center gap-2 md:gap-2.5"
          role="tablist"
          aria-label="Weekday"
        >
          {WEEKDAYS_ORDER.map((day) => {
            const isActive = day === activeDay;
            return (
              <button
                key={day}
                type="button"
                role="tab"
                aria-selected={isActive}
                id={`weekly-tab-${day}`}
                onClick={() => setActiveDay(day)}
                className={
                  isActive
                    ? "rounded-full bg-primary px-4 py-2.5 text-[11px] font-black tracking-[0.2em] text-white uppercase shadow-lg shadow-primary/20 md:px-5 md:text-xs"
                    : "rounded-full border border-white/10 bg-[#141414] px-4 py-2.5 text-[11px] font-black tracking-[0.2em] text-slate-400 uppercase transition-colors hover:border-white/20 hover:text-slate-200 md:px-5 md:text-xs"
                }
              >
                {weekdayLabels[day]}
              </button>
            );
          })}
        </div>

        <div
          className="rounded-2xl border border-white/10 bg-[#121212] p-5 shadow-2xl md:p-8"
          role="tabpanel"
          aria-labelledby={`weekly-tab-${activeDay}`}
        >
          <div className="mb-6 flex flex-col gap-1 border-b border-white/5 pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1">
              <h3 className="text-2xl font-black tracking-tight text-white uppercase md:text-3xl">
                {weekdayLabels[activeDay]}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-500">
                {dayClasses.length === 0
                  ? "No sessions scheduled"
                  : `${dayClasses.length} session${dayClasses.length === 1 ? "" : "s"} scheduled`}
              </p>
            </div>
          </div>

          <div className="flex items-stretch gap-2 md:gap-3">
            <button
              type="button"
              onClick={goPrevDay}
              className="flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-full border border-white/10 bg-[#1a1a1a] text-slate-300 transition-colors hover:border-primary/40 hover:text-primary"
              aria-label="Previous day"
            >
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>

            {dayClasses.length === 0 ? (
              <p className="min-w-0 flex-1 self-center py-10 text-center text-slate-500">
                No classes on this day.
              </p>
            ) : (
              <ul className="min-w-0 flex-1 divide-y divide-white/5">
                {timeSlots.map(({ startTime, classes }) => (
                  <li key={startTime} className="flex gap-4 py-4 first:pt-0 last:pb-0 md:gap-6">
                    <span className="w-[3.25rem] shrink-0 pt-0.5 font-mono text-sm tabular-nums tracking-tight text-white md:w-[3.75rem] md:text-base">
                      {startTime}
                    </span>
                    <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2 md:gap-2.5">
                      {classes.map((c) => {
                        const tone: WeeklyClassTone = c.tone ?? "neutral";
                        const branch = branchLabel(c.branchId);
                        return (
                          <span
                            key={c.id}
                            title={branch}
                            className={`inline-flex max-w-full rounded-full border px-3 py-1.5 text-[11px] font-black uppercase tracking-wide md:px-3.5 md:py-2 md:text-xs ${tonePill[tone]}`}
                          >
                            <span className="truncate">{c.title}</span>
                            <span className="mx-2 text-white/30">•</span>
                            <span className="truncate text-white/85">{branch}</span>
                          </span>
                        );
                      })}
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <button
              type="button"
              onClick={goNextDay}
              className="flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-full border border-white/10 bg-[#1a1a1a] text-slate-300 transition-colors hover:border-primary/40 hover:text-primary"
              aria-label="Next day"
            >
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>
        </div>

        <div
          className="mt-8 flex justify-center gap-2.5"
          role="tablist"
          aria-label="Select weekday"
        >
          {WEEKDAYS_ORDER.map((day) => {
            const isActive = day === activeDay;
            return (
              <button
                key={day}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={weekdayLabels[day]}
                onClick={() => setActiveDay(day)}
                className={
                  isActive
                    ? "flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary p-0.5 ring-2 ring-primary/40"
                    : "h-2.5 w-2.5 rounded-full bg-slate-600 transition-transform hover:scale-110"
                }
              >
                {isActive ? (
                  <span className="block h-1.5 w-1.5 rounded-full bg-white" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
