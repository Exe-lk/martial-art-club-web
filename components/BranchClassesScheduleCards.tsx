import Image from "next/image";

import { weekdayLabels, type TrainingClassDetail } from "@/data/trainingSchedule";

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

export default function BranchClassesScheduleCards({
  sessions,
  branchLabel,
}: {
  sessions: TrainingClassDetail[];
  branchLabel: string;
}) {
  if (sessions.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:px-12">
        <header className="mb-10">
          <h2 className="mx-auto mb-4 w-fit text-center text-4xl font-black tracking-tight uppercase md:text-5xl">
            Class <span className="text-primary">Schedule</span>
          </h2>
          <p className="text-xs font-bold tracking-widest text-slate-300 uppercase text-center">
            {branchLabel}
          </p>
        </header>

        <div className="border border-white/10 bg-[#141414] p-8 text-center text-slate-300">
          No sessions found for this branch yet.
        </div>
      </section>
    );
  }

  return (
    <section id="schedule" className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:px-12">
      <header className="mb-12">
        <h2 className="mx-auto mb-4 w-fit text-center text-4xl font-black tracking-tight uppercase md:text-5xl">
          Class <span className="text-primary">Schedule</span>
        </h2>
        <p className="text-xs font-bold tracking-widest text-slate-300 uppercase text-center">
          {branchLabel}
        </p>
        <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-slate-300">
          Explore available training sessions for this branch.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="group relative overflow-hidden border border-white/10 bg-[#141414] shadow-2xl transition-all duration-500 hover:bg-[#292929]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0a0a]">
              <Image
                src={session.imageUrl}
                alt={`${session.title} session`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>

            <div className="p-8">
              <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">
                {branchLabel}
              </span>
              <h3 className="mt-2 text-3xl font-black tracking-tight text-white uppercase">
                {session.title}
              </h3>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#1E3A8A]">
                    calendar_today
                  </span>
                  <span className="text-sm font-medium tracking-wide text-white uppercase">
                    {weekdayLabels[session.weekday]}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#1E3A8A]">
                    schedule
                  </span>
                  <span className="text-sm font-medium tracking-wide text-white uppercase">
                    {formatClassTime(session.startTime)}
                  </span>
                </div>
              </div>

              <a
                href="/contact"
                className="mt-10 block w-full bg-primary py-4 text-center text-[12px] font-black tracking-widest text-white uppercase transition-all group-hover:scale-[1.02] active:scale-95"
              >
                Contact This Branch
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

