import Image from "next/image";

import { classesData } from "@/lib/classesData";

function getHighlightValue(
  highlights: Array<{ label: string; value: string }>,
  label: string,
) {
  return highlights.find((h) => h.label === label)?.value;
}

export default function ClassesSection() {
  const classImagesBySlug: Record<string, { src: string; alt?: string }> = {
    "kung-fu": { src: "/kun-fu.PNG" },
    "jeet-kune-do": { src: "/JKD.PNG" },
    "wushu": { src: "/wusu.PNG" },
  };

  const programs = classesData.map((c) => ({
    tag: c.badges[0] ?? "Program",
    title: c.name,
    description: c.seoDescription,
    difficulty: getHighlightValue(c.highlights, "Skill Level") ?? "All Levels",
    ageGroup: getHighlightValue(c.highlights, "Age Group") ?? "All Ages",
    image: classImagesBySlug[c.slug]?.src ?? c.heroImageUrl,
    alt: classImagesBySlug[c.slug]?.alt ?? c.heroImageAlt,
  }));

  return (
    <section className="bg-background-dark py-24 text-white" id="programs">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-16 space-y-4 text-center">
          <h2 className="text-primary text-sm font-black tracking-widest uppercase">
            Our Martial Arts Programs
          </h2>
          <h3 className="text-4xl font-black tracking-tight uppercase md:text-5xl">
            Choose Your Path
          </h3>
          <p className="mx-auto max-w-2xl text-slate-400">
            Specialized training paths for every age and skill level, led by world-class
            instructors.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-white/5 bg-[#1a1a1a]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  alt={program.alt ?? program.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  src={program.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute left-4 top-4">
                  <span className="bg-accent-blue/90 rounded px-2 py-1 text-[10px] font-bold tracking-tighter text-white uppercase">
                    {program.tag}
                  </span>
                </div>
              </div>

              <div className="flex flex-grow flex-col p-6">
                <h4 className="mb-3 text-2xl font-black uppercase">{program.title}</h4>
                <p className="mb-6 flex-grow text-sm text-slate-400">{program.description}</p>

                <dl className="mb-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase">
                    <span className="material-symbols-outlined text-primary text-lg">
                      trending_up
                    </span>
                    <dt className="text-slate-500">Difficulty:</dt>
                    <dd className="text-white">{program.difficulty}</dd>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase">
                    <span className="material-symbols-outlined text-primary text-lg">groups</span>
                    <dt className="text-slate-500">Age Group:</dt>
                    <dd className="text-white">{program.ageGroup}</dd>
                  </div>
                </dl>

                <button
                  type="button"
                  className="w-full rounded bg-primary py-3 text-xs font-black tracking-widest text-white uppercase transition-colors hover:bg-red-700"
                >
                  Program Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

