import Image from "next/image";

const LEFT_BG = "/contact-martial-art-academy.jpg";
const RIGHT_IMAGE = "/gallery/training/481291835_604272849177310_6487048297748494752_n.jpg";

export default function SchedulePageHero() {
  return (
    <section
      className="relative grid min-h-[480px] grid-cols-1 overflow-hidden lg:min-h-[56vh] lg:grid-cols-2"
      aria-labelledby="schedule-hero-heading"
    >
      <div className="relative min-h-[320px] lg:min-h-0">
        <Image
          src={LEFT_BG}
          alt="Martial arts training at the academy"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-black/25" />
      </div>

      <div className="relative min-h-[320px] lg:min-h-0">
        <Image
          src={RIGHT_IMAGE}
          alt="Martial arts training session"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-xs font-black tracking-[0.35em] text-primary uppercase">
            Black Dragon
          </p>
          <h1
            id="schedule-hero-heading"
            className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white uppercase sm:text-5xl md:text-6xl"
          >
            Class <span className="text-primary">Schedule</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-relaxed text-slate-200 md:text-base">
            Plan your training sessions by branch and find the class times that fit you.
          </p>
        </div>
      </div>
    </section>
  );
}
