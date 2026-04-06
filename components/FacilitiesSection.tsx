import Image from "next/image";
import Link from "next/link";

const FACILITIES = [
  {
    number: "01",
    title: "Standard Learning Environment",
    description:
      "Our curriculum is built on pedagogical excellence. We maintain strict student-to-coach ratios to ensure every movement is corrected and every technique is mastered with precision.",
    image: "/facilities/fighting-safety.jpeg",
    alt: "Professional training space",
    accent: "primary" as const,
  },
  {
    number: "02",
    title: "Modern Gym",
    description:
      "Elite athletes require elite tools. From high-impact flooring to state-of-the-art recovery zones, our facility represents the pinnacle of martial arts infrastructure.",
    image: "/facilities/gym3.jpeg",
    alt: "Modern gym equipment",
    accent: "primary" as const,
    cta: "Virtual Tour",
  },
  {
    number: "03",
    title: "Qualified Coaches",
    description:
      "Our mentors are not just practitioners; they are certified instructors with decades of competitive and teaching experience. We prioritize methodology over muscle.",
    image: "/facilities/taining-time3.jpg",
    alt: "Qualified martial arts coach",
    accent: "secondary" as const,
  },
] as const;

export default function FacilitiesSection() {
  return (
    <section className="bg-background-dark text-white py-14" id="facilities">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-14 space-y-4 text-center">
          <p className="text-primary text-sm font-black tracking-[0.35em] uppercase">
            Why train with us
          </p>
          <h2 className="text-4xl font-black tracking-tight uppercase md:text-5xl">
            Modern facilities. Expert guidance. Professional growth.
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Everything in our academy is designed to support focused, structured, high-quality
            martial arts training.
          </p>
        </header>

        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-6">
            <div className="group relative col-span-1 aspect-[4/5] overflow-hidden rounded-3xl bg-[#292929] md:col-span-4 md:aspect-[4/5]">
              <Image
                alt={FACILITIES[0].alt}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                src={FACILITIES[0].image}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="group relative col-span-1 aspect-[4/5] overflow-hidden rounded-3xl bg-[#292929] md:col-span-4 md:translate-y-10">
              <Image
                alt={FACILITIES[1].alt}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                src={FACILITIES[1].image}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>

            <div className="group relative col-span-2 aspect-[21/9] overflow-hidden rounded-3xl bg-[#292929] md:col-span-4 md:aspect-[4/5]">
              <Image
                alt={FACILITIES[2].alt}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                src={FACILITIES[2].image}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
            </div>

            <div className="group relative col-span-2 aspect-[21/9] overflow-hidden rounded-3xl bg-[#292929] md:col-span-6 md:aspect-[16/9] md:-translate-y-8">
              <Image
                alt="Premium boxing gloves"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                src="/facilities/gym%20accesories.jpeg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>

            <div className="group relative col-span-2 aspect-[21/9] overflow-hidden rounded-3xl bg-[#292929] md:col-span-6 md:aspect-[16/9] md:translate-y-6">
              <Image
                alt="Martial arts academy contact area"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                src="/facilities/contact-martial-art-academy.jpg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
            <div className="pointer-events-auto w-full max-w-xl rounded-3xl border border-white/10 bg-black/40 p-8 text-center shadow-2xl backdrop-blur-md md:p-10">
              <h3 className="text-3xl font-black tracking-tight md:text-4xl">
                We’ll help you become who you dream of being
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Train in a structured environment with modern facilities and qualified coaches.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/facilities"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-8 py-3 text-xs font-black tracking-[0.3em] uppercase text-white transition-colors hover:bg-white hover:text-black"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

