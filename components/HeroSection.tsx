import HeroDeferredVideo from "@/components/HeroDeferredVideo";
import NewsTicker from "@/components/NewsTicker";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80svh] max-h-[90svh] overflow-hidden bg-black text-white">
      <HeroDeferredVideo />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center gap-6 px-6 text-center bottom-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-black leading-tight tracking-tight uppercase sm:text-5xl md:text-6xl">
          Start Your Journey Become Unstoppable.
            
          </h1>

          <span className="mb-4 block text-xs font-bold tracking-[0.3em] text-primary uppercase">
          Black Dragon Jeet Kun Do
            </span>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <div className="hero-join-rainbow w-full rounded-lg sm:inline-flex sm:w-auto">
            <button className="flex w-full items-center justify-center gap-2  bg-primary px-8 py-4 text-base font-black text-white uppercase transition-all hover:bg-red-700 sm:w-auto">
              Join the Club <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <button className="w-full  border-2 border-accent-blue px-8 py-4 text-base font-black text-white uppercase transition-all hover:bg-accent-blue/10 sm:w-auto">
            View Classes
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[13px] z-20">
        <div className="pointer-events-auto mx-auto max-w-full overflow-hidden px-0">
          <NewsTicker className="border-t border-primary/90" />
        </div>
      </div>
    </section>
  );
}

