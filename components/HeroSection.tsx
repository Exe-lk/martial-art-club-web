import NewsTicker from "@/components/NewsTicker";

export default function HeroSection() {
  return (
    <section className="relative pt-24 text-white lg:pt-0">
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-start gap-12 px-6 py-8 lg:grid-cols-2 lg:py-10">
        <div className="flex flex-col items-center gap-5 text-center lg:items-center lg:text-center lg:pt-18">
          <div className="space-y-4">
            <span className="inline-block border border-primary/30 bg-primary/20 px-3 py-1 text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Elite Academy
            </span>
            <h1 className="text-4xl font-black leading-tight tracking-tight uppercase sm:text-5xl md:text-5xl">
              Train Hard.
              <br />
              <span className="text-primary">Fight Smart.</span>
              <br />
              Become Unstoppable.
            </h1>
            <p className="mx-auto max-w-lg text-lg leading-relaxed text-slate-400">
              Start your journey with the
              champions.
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-black text-white uppercase transition-all hover:bg-red-700 sm:w-auto">
              Join the Club <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="w-full rounded-lg border-2 border-accent-blue px-8 py-4 text-base font-black text-white uppercase transition-all hover:bg-accent-blue/10 sm:w-auto">
              View Classes
            </button>
          </div>

          <div className="flex w-full flex-wrap justify-center gap-8 border-t border-white/10 pt-8 text-center sm:gap-10">
            <div>
              <p className="text-3xl font-black">500+</p>
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Active Members
              </p>
            </div>
            <div>
              <p className="text-3xl font-black">15</p>
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Pro Trainers
              </p>
            </div>
            <div>
              <p className="text-3xl font-black">30+</p>
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Championships
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-30 flex justify-center lg:justify-end">
          <img
            src="/martial-art-sri-lanka (2).png"
            alt="Martial arts in Sri Lanka"
            className="w-full max-w-sm rounded-xl object-cover shadow-2xl sm:max-w-xl"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[190px] z-20">
        <div className="pointer-events-auto">
          <NewsTicker className="border-t border-primary/90" />
        </div>
      </div>
    </section>
  );
}

