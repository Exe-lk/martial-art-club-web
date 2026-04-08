import HeroDeferredVideo from "@/components/HeroDeferredVideo";
import NewsTicker from "@/components/NewsTicker";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80svh] max-h-[90svh] overflow-hidden bg-black text-white">
      <HeroDeferredVideo />

      <div className="absolute inset-0 bg-black/55" />

      <div className="pointer-events-none absolute inset-0 z-[1] bottom-20" aria-hidden>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/dragon-hero-dark.png"
            alt=""
            width={900}
            height={900}
            priority
            className="hero-dragon-fade h-auto w-[72vw] max-w-[560px] select-none object-cover sm:max-w-[560px] md:max-w-[680px] lg:max-w-[760px]"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center gap-6 px-6 text-center bottom-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-black leading-tight tracking-tight uppercase sm:text-5xl md:text-6xl">
          Real training. Real discipline. Real fighters.
            
          </h1>

          <span className="mb-4 block text-xs font-bold tracking-[0.3em] text-primary uppercase">
          Black Dragon Jeet Kun Do
            </span>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <div className="w-full rounded-lg sm:inline-flex sm:w-auto">
            <button
              className="flex w-full items-center justify-center gap-2 rounded-md px-10 py-4 text-base font-black text-white uppercase transition-all sm:w-auto hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              style={{
                backgroundImage: "url('/button.PNG')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              Join the Club <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <button className="w-full  border-2 border-accent-blue px-8 py-4 text-base font-black text-white uppercase transition-all hover:bg-accent-blue/10 sm:w-auto">
            View Classes
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[0px] z-20">
        <div className="pointer-events-auto mx-auto max-w-full overflow-hidden px-0">
          <NewsTicker />
        </div>
      </div>
    </section>
  );
}

