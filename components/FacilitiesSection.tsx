const FACILITIES = [
  {
    number: "01",
    title: "Standard Learning Environment",
    description:
      "Our curriculum is built on pedagogical excellence. We maintain strict student-to-coach ratios to ensure every movement is corrected and every technique is mastered with precision.",
    image: "/gym/fighting-safety.jpeg",
    alt: "Professional training space",
    accent: "primary" as const,
  },
  {
    number: "02",
    title: "Modern Gym",
    description:
      "Elite athletes require elite tools. From high-impact flooring to state-of-the-art recovery zones, our facility represents the pinnacle of martial arts infrastructure.",
    image: "/gym/gym.jpeg",
    alt: "Modern gym equipment",
    accent: "primary" as const,
    cta: "Virtual Tour",
  },
  {
    number: "03",
    title: "Qualified Coaches",
    description:
      "Our mentors are not just practitioners; they are certified instructors with decades of competitive and teaching experience. We prioritize methodology over muscle.",
    image: "/gym/coach.PNG",
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:h-[1100px] kinetic-skew max-h-[1100px]">
          <div className="md:col-span-4 flex flex-col gap-4 kinetic-unskew md:-mt-12">
            <div className="group relative h-[380px] overflow-hidden bg-[#292929] border-l-4 border-primary/30 transition-all duration-500 hover:border-primary">
              <img
                alt={FACILITIES[0].alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={FACILITIES[0].image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
            <div className="flex flex-1 flex-col justify-center border-b-4 border-secondary bg-[#1f1f1f] p-8">
              <span className="text-secondary text-6xl font-black opacity-10">{FACILITIES[0].number}</span>
              <h3 className="mb-4 text-2xl font-black tracking-tight uppercase">
                {FACILITIES[0].title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{FACILITIES[0].description}</p>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4 kinetic-unskew">
            <div className="group relative h-[280px] overflow-hidden bg-[#292929]">
              <img
                alt={FACILITIES[1].alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={FACILITIES[1].image}
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>

            <div className="group relative overflow-hidden bg-primary p-12 shadow-2xl">
              <div className="absolute -right-12 -bottom-12 rotate-12 opacity-10 transition-transform duration-700 group-hover:scale-125">
                <span className="material-symbols-outlined text-[12rem]">fitness_center</span>
              </div>
              <span className="mb-2 text-6xl font-black text-white/60">{FACILITIES[1].number}</span>
              <h3 className="mb-4 text-3xl font-black tracking-tight uppercase">{FACILITIES[1].title}</h3>
              <p className="relative z-10 text-white/90 leading-relaxed">{FACILITIES[1].description}</p>
              <button
                type="button"
                className="mt-8 border-2 border-white px-6 py-2 text-xs font-bold tracking-widest uppercase transition-all hover:bg-white hover:text-primary"
              >
                {FACILITIES[1].cta}
              </button>
            </div>

            <div className="group relative h-[330px] overflow-hidden bg-[#292929]">
              <img
                alt="Premium boxing gloves"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/gym/gym%20accesories.jpeg"
              />
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4 kinetic-unskew md:mt-12">
          <div className="flex h-[380px] flex-col justify-center border-t-4 border-primary bg-[#1f1f1f] p-8">
              <span className="text-primary text-6xl font-black opacity-10">{FACILITIES[2].number}</span>
              <h3 className="mb-4 text-2xl font-black tracking-tight uppercase">
                {FACILITIES[2].title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{FACILITIES[2].description}</p>
            </div>

            <div className="group relative flex-1 overflow-hidden bg-[#292929] border-r-4 border-secondary/30 transition-all duration-500 hover:border-secondary">
              <img
                alt={FACILITIES[2].alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={FACILITIES[2].image}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

