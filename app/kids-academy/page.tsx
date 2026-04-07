import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    title: "Build Discipline",
    description:
      "Students learn to follow instructions, respect rules, and stay consistent. These habits carry into school work, homework, and daily routines.",
    imageSrc: "/build-decipline.PNG",
    imageAlt: "Building discipline through martial arts",
  },
  {
    title: "Boost Confidence",
    description:
      "Every small improvement—stance, balance, technique—helps kids believe in themselves. Confidence grows through effort, not comparison.",
    imageSrc: "/Boost-Confidence.PNG",
    imageAlt: "Boosting confidence through martial arts",
  },
  {
    title: "Reduce Stress",
    description:
      "Training is a healthy outlet for energy and emotions. Breathing, movement, and focus help students feel calmer and more in control.",
    imageSrc: "/get-rid-of-stress.PNG",
    imageAlt: "Reducing stress through martial arts",
  },
] as const;

export default function KidsAcademyPage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-[#000000] text-white">
      <section
        className="relative grid min-h-[480px] grid-cols-1 overflow-hidden lg:min-h-[76vh] lg:grid-cols-2"
        aria-labelledby="kids-hero-heading"
      >
        <div className="relative min-h-[320px] lg:min-h-0">
          <Image
            src="/classs-martial-art.jpg"
            alt="Kids practicing martial arts in class"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-black/25" />
        </div>

        <div className="relative min-h-[320px] lg:min-h-0">
          <Image
            src="/dragon.jpg"
            alt="Martial arts training session"
            fill
            priority
            className="object-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/80 to-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-xs font-black tracking-[0.35em] uppercase text-white/80">
              Kids academy
            </p>
            <h1
              id="kids-hero-heading"
              className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white uppercase sm:text-5xl md:text-6xl"
            >
              Martial arts that helps students thrive
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-relaxed text-slate-200 md:text-base">
              Our kids program builds focus, discipline, confidence, and respect—skills
              that support learning, friendships, and a strong mindset at school.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/classes"
                className="inline-flex items-center justify-center rounded-full bg-[#d62929] px-8 py-3 text-xs font-black tracking-[0.3em] uppercase text-white transition-colors hover:brightness-110"
              >
                View classes
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-xs font-black tracking-[0.3em] uppercase text-white/90 backdrop-blur transition-colors hover:bg-white/10 hover:text-white"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight uppercase md:text-5xl">
            Why martial arts matters for students
          </h2>
          <p className="mt-4 text-sm text-white/75 md:text-base">
            Martial arts isn’t only about fighting. It teaches self-control, goal
            setting, and positive habits that support education and personal growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  src={benefit.imageSrc}
                  alt={benefit.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  loading="lazy"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black tracking-tight uppercase">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm text-white/75">{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 via-white/0 to-white/5 p-8 md:p-10">
          <div className="grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h3 className="text-2xl font-black tracking-tight uppercase md:text-3xl">
                A safe, structured, and fun environment
              </h3>
              <p className="mt-4 text-sm text-white/75 md:text-base">
                Students practice with age-appropriate drills, clear boundaries, and
                supportive coaching. They learn respect, teamwork, and how to handle
                challenges with a calm mind.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#d62929] px-8 py-3 text-xs font-black tracking-[0.3em] uppercase text-white transition-colors hover:brightness-110"
              >
                Book a trial
              </Link>
              <Link
                href="/classes"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-xs font-black tracking-[0.3em] uppercase text-white/90 backdrop-blur transition-colors hover:bg-white/10 hover:text-white"
              >
                See schedule
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

