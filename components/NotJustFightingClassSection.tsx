const BENEFIT_CARDS = [
  {
    icon: "psychology",
    title: "Get Rid of Stress",
    description:
      "Training helps release tension and improves mental clarity through high-intensity explosive movements.",
    image: "/get-rid-of-stress.PNG",
    alt: "Dramatic black and white portrait of a focused martial artist exhaling deeply in a dark industrial gym setting",
    stagger: false,
  },
  {
    icon: "fitness_center",
    title: "Rebuild Your Strength",
    description:
      "Develop physical power and endurance through consistent practice and functional combat conditioning.",
    image: "/rebuild-your-strenth.PNG",
    alt: "Close-up of muscular arms hitting a heavy bag in a dimly lit gym with dust particles in the air",
    stagger: true,
  },
  {
    icon: "target",
    title: "Improve Focus",
    description:
      "Enhance concentration and sharpen your mind. Learn to stay calm in the eye of the storm.",
    image: "/improve-focus.PNG",
    alt: "Intense close-up of a fighter's eyes focusing on a target with cinematic blue and red lighting",
    stagger: false,
  },
  {
    icon: "shield",
    title: "Build Discipline",
    description:
      "Learn control, patience, and structured growth through a rigorous curriculum of elite martial arts.",
    image: "/build-decipline.PNG",
    alt: "Martial artist bowing in a traditional dojo with harsh sunlight streaming through high windows",
    stagger: false,
  },
  {
    icon: "bolt",
    title: "Boost Confidence",
    description:
      "Gain self-belief through tangible skill progression and the hardening of your physical vessel.",
    image: "/Boost-Confidence.PNG",
    alt: "Shadowy silhouette of a martial artist standing confidently in a ring with stadium lights",
    stagger: true,
  },
  {
    icon: "favorite",
    title: "Stay Active & Healthy",
    description:
      "Maintain an active lifestyle and improve overall metabolic fitness with explosive cardiovascular work.",
    image: "/stay-active-and-healthy.PNG",
    alt: "Sweaty athlete resting with a jump rope around their neck in a high-contrast gym environment",
    stagger: false,
  },
] as const;

export default function NotJustFightingClassSection() {
  return (
    <section className="bg-background-dark text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-8 text-center">
        <header className="mb-16 space-y-4 md:mb-20">
          <div className="mb-2 inline-block bg-primary/20 px-3 py-1 text-xs font-bold tracking-widest text-primary uppercase">
            Evolving Human Potential
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-slate-100 md:text-5xl">
            Not Just a <span className="text-primary">Fighting</span> Class
          </h2>
          <p className="max-w-6xl text-lg font-medium leading-relaxed text-slate-400 md:text-xl">
            Discover how martial arts transforms your mind, body, and lifestyle through disciplined
            movement and kinetic brutality.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BENEFIT_CARDS.map((card) => (
            <div
              key={card.title}
              className={`group kinetic-hover relative h-[450px] cursor-pointer overflow-hidden rounded-sm bg-[#141414] ${card.stagger ? "lg:mt-12" : ""}`}
            >
              <img
                alt={card.alt}
                className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform"
                src={card.image}
              />
              {/* Darkens entire card on hover so title + reveal read over the image */}
              <div
                aria-hidden
                className="hover-dim pointer-events-none absolute inset-0 z-[1] bg-black/55"
              />
              <div className="overlay-gradient pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-[background] duration-500" />
              <div className="relative z-[3] flex h-full flex-col justify-end p-8">
                <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                  {card.icon}
                </span>
                <h3 className="mb-2 text-2xl font-black uppercase tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="hover-reveal max-w-prose font-medium text-zinc-200">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-1 flex flex-col items-center justify-between gap-8 border-l-4 border-primary bg-[#141414] p-10 md:mt-24 md:flex-row md:p-12">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black uppercase tracking-tighter text-white">
              Ready to Forge Your New Self?
            </h3>
            <p className="mt-2 text-slate-400">
              Limited slots available for the next elite training cycle.
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 bg-primary px-10 py-4 font-black uppercase tracking-widest text-white transition-all hover:bg-red-700 active:scale-95"
          >
            Apply for Training
          </button>
        </div>
      </div>
    </section>
  );
}
