import Image from "next/image";

type Coach = {
  name: string;
  position: string;
  imageSrc: string;
  imageAlt: string;
};

const COACHES: Coach[] = [
  {
    name: "Master Sarah Jenkins",
    position: "Head Instructor",
    imageSrc: "/gallery/martial-art-coaches.jpg",
    imageAlt: "Coach Sarah Jenkins training with students",
  },
  {
    name: "Kru Marcus Chen",
    position: "Striking Coach",
    imageSrc: "/gallery/training/taining-time2.jpg",
    imageAlt: "Coach Marcus Chen leading striking drills",
  },
  {
    name: "Sensei David Vogel",
    position: "Self Defense Coach",
    imageSrc: "/gallery/training/taining-time3.jpg",
    imageAlt: "Coach David Vogel demonstrating technique",
  },
  {
    name: "Coach Ayesha Perera",
    position: "Kids Program Coach",
    imageSrc: "/gallery/training/taining-time4.jpg",
    imageAlt: "Coach Ayesha Perera coaching a group class",
  },
];

export default function CoachesCardsSection() {
  return (
    <section className="bg-[#000000] px-6 py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-xs font-black tracking-[0.35em] text-primary uppercase">
            The Team
          </p>
          <h2 className="text-3xl font-black tracking-tight uppercase sm:text-4xl">
            Train With{" "}
            <span className="text-primary">Experienced</span> Coaches
          </h2>
          <p className="mx-auto max-w-2xl text-sm font-medium leading-relaxed text-slate-300 md:text-base">
            Every class is led by coaches who care about your progress—whether
            you’re here to build confidence, fitness, or competitive skill.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COACHES.map((coach) => (
            <div key={coach.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <Image
                  src={coach.imageSrc}
                  alt={coach.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>

              <div className="mt-4 text-center">
                <div className="text-base font-black tracking-wide text-white uppercase">
                  {coach.name}
                </div>
                <div className="mt-1 text-xs font-black tracking-[0.28em] text-primary uppercase">
                  {coach.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

