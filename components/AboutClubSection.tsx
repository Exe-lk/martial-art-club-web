const ABOUT_BLOCKS = [
  {
    title: "What is Black Dragon Jeet Kune Do?",
    description:
      "A modern martial arts academy focused on discipline, strength, and real-world self-defense.",
  },
  {
    title: "Why train with us?",
    description:
      "We combine structured training with practical techniques to build confidence and physical ability.",
  },
  {
    title: "What will you gain?",
    description:
      "Improved fitness, mental focus, self-discipline, and the ability to protect yourself.",
  },
  {
    title: "Who is this for?",
    description:
      "Beginners to advanced students who want purpose-driven training and personal growth.",
  },
] as const;

import Image from "next/image";

const HIGHLIGHTS = [
  {
    label: "Discipline",
    value: "BUILD DISCIPLINE & FOCUS",
  },
  {
    label: "Mindset",
    value: "TRAIN WITH PURPOSE",
  },
  {
    label: "Growth",
    value: "DEVELOP STRENGTH & CONFIDENCE",
  },
] as const;

export default function AboutClubSection() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 overflow-hidden bg-background-dark text-white md:grid-cols-2 md:max-h-[85svh]"
    >
      <div className="flex flex-col justify-center gap-8 bg-background-dark px-6 py-10 md:px-10 md:py-12 lg:px-16 lg:py-14">
        <div>
          <span className="mb-4 inline-block text-xs font-black tracking-[0.3em] text-secondary uppercase">
            About us
          </span>
          <h2 className="text-3xl font-black uppercase tracking-tight leading-none md:text-4xl lg:text-5xl">
            BLACK DRAGON <span className="text-primary">JEET KUNE DO</span>
          </h2>
        </div>

        <div className="grid gap-5 md:gap-6">
          {ABOUT_BLOCKS.map((block) => (
            <div
              key={block.title}
              className="group border-l-4 border-primary/80 bg-[#141414]/60 pl-5 py-3 transition-all duration-300 hover:translate-x-2"
            >
              <h3 className="mb-2 text-base font-black uppercase tracking-tight md:text-lg">
                {block.title}
              </h3>
              <p className="max-w-xl leading-relaxed text-slate-300">{block.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-1 grid grid-cols-1 gap-5 border-t border-white/10 pt-7 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div key={item.label}>
              <span className="mb-2 block text-[10px] font-black tracking-[0.3em] text-primary uppercase">
                {item.label}
              </span>
              <p className="text-sm font-black uppercase tracking-tight leading-tight">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-[320px] overflow-hidden sm:h-[380px] md:h-auto md:max-h-[85svh]">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent to-transparent" />
        <div className="absolute inset-0 z-10 bg-primary/10 mix-blend-overlay" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent" />

        <Image
          alt="Black Dragon Jeet Kune Do training"
          className="object-cover"
          src="/stay-active-and-healthy.PNG"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />

        <div className="absolute bottom-1/4 right-0 z-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />

        <div className="absolute bottom-8 left-8 z-20 hidden lg:block">
          <span className="material-symbols-outlined text-6xl text-primary/70">swords</span>
        </div>
      </div>
    </section>
  );
}

