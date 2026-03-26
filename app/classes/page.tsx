const styleCards = [
  {
    title: "Kung Fu",
    tag: "Traditional",
    description:
      "The original art of discipline. Focuses on fluid movements, internal energy, and ancient technical mastery.",
    focus: "Focus: Precision & Balance",
    bestFor: "Best For: Technical Growth",
    icon: "target",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGDHP9b4w9952eVUZdOZoqlMeulqRM8KsJOqxbwbBifFDhexPj9xUhH0vD6HNNAG0KhMXWQyZU7ZXENb9mwo_K5T_aGTk0Yo39ci1_Bz5mxuG9WGsVux-fgy9KbgXZxU2Ip8r8-yEf9M1EUR5ffDVVwrok_1Yk4KIVBk_hWT9TAMaplsd32E89QZ5prWySdwfo9_l3TCCsn0L_UyuqzKzi4oTU5dl8L7NwSBMT_h_wMLPwQQ6pOMexMP7VNpGvpoWx1xewGgNAChI",
    alt: "Traditional Kung Fu practitioner performing a precise movement in a bright minimal studio",
  },
  {
    title: "Jeet Kune Do",
    tag: "Efficiency",
    description:
      "Founded by Bruce Lee. The way of the intercepting fist prioritizes directness and adaptability.",
    focus: "Focus: Speed & Reflexes",
    bestFor: "Best For: Self-Defense",
    icon: "bolt",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdbJ4gjP4lvvYAm3ZxiwjytAJgxB488rrSCZtmjEUROL5oaC04Xi7A8bi6aJi2fdeG4DUu1D9705sLreRDxk_JjbvzQ5jteWLMq1JjhF527tgNsJevKfU7lxkOGT0A56sxW26EHZwunIGAQWPA25jEtv0ZSENAQg3ywcmaBheoxLs-naAk35e_IuFQ8xo0jTEqa-6_wRlRIeqGrEUZazU-14uDf339TDv7nxsjGlJlcj2QrvD15YAB-w1UxBWFjJKKHoBsw2HUusE",
    alt: "Close up of mixed martial arts training with heavy bags and dynamic lighting",
  },
  {
    title: "Wushu",
    tag: "Performance",
    description:
      "High-intensity Chinese martial arts combining explosive power with extreme acrobatic aesthetics.",
    focus: "Focus: Athleticism & Power",
    bestFor: "Best For: Total Fitness",
    icon: "fitness_center",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCpPCzk6lP64D-ZKyAQ_T0R0tPvjWbqGoBS9Pd6zGu3LZAOiP-3kdPkb1Qx0F-8twJk-vSyBLiXDH8_6QokzzzNq8Z-7bnDPtGOLKjl1amrBqUOaDNm6XNQEn8X0TfkL__-Mwrb111RH-9QBdoXlWTgd9hkAswT1sAJ0Keco7cJYmy6hoM2OoHWVmpmK06Lo-aLLxNvMC2HAF0ELhmN7V69YqhK7GqyekYK5HcdN1DHCMmFJnX_cgHZhRKSyfy8S_OO45bwb4zpz8",
    alt: "Acrobatic Wushu performer mid-air against a high-contrast dark background",
  },
];

const weeklySchedule = [
  { day: "Monday", cls: "Kung Fu", time: "5:30PM - 7:00PM", accent: "secondary" },
  { day: "Tuesday", cls: "Jeet Kune Do", time: "6:00PM - 7:30PM", accent: "primary" },
  { day: "Wednesday", cls: "Wushu", time: "5:30PM - 7:00PM", accent: "secondary" },
  { day: "Friday", cls: "Sparring", time: "6:00PM - 8:00PM", accent: "primary" },
  { day: "Saturday", cls: "Mixed Styles", time: "9:00AM - 11:00AM", accent: "secondary" },
];

const classSlugByTitle: Record<string, string> = {
  "Kung Fu": "kung-fu",
  "Jeet Kune Do": "jeet-kune-do",
  Wushu: "wushu",
};

export default function ClassesPage() {
  return (
    
    <div className="bg-[#0D0D0D] text-gray-100 selection:bg-[#d62929] selection:text-white">
      <main>
        {/* Hero (no header/footer per request) */}
        <section className="relative flex h-[614px] items-center overflow-hidden">
          <div className="absolute inset-0 z-10 bg-neutral-950/70" />
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABElSbWIloh8gpflmn_ixeDvQHP-sMyho-rf5tZX84USUuGs5-NaGs-b4ZO8upqHNnET9itRy9RRPDm4VMJJWD7JAnRkDJ5QI2mt13wYuQLItSapEeged1FUkHBYoXlT2z925cAOA2s4GhDDwGQ-S30yla26iWy9cLQBjz6eJmsQXbuxfEwjznAIsl6u7G8cLtokUxRE9ggh6kDQlZBH8tgPMiPlywGHvXgW_AP55k4dXoX9OSpCUrlxdVw8Tma-yu5khk6Bfkaos"
            alt="Intense martial arts training session in a dark industrial gym"
          />
          <div className="container relative z-20 mx-auto px-6 ml-30">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-5xl leading-none font-black tracking-tight uppercase md:text-7xl">
                Our Martial Arts <span className="text-[#d62929]">Classes</span>
              </h1>
              <p className="mb-8 max-w-xl text-lg font-medium text-slate-300 md:text-xl">
                Choose your path, train with purpose, and master your discipline. Join the elite
                practitioners at IRON OBSIDIAN.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#d62929] px-8 py-4 text-sm font-black tracking-widest uppercase transition-all hover:brightness-110">
                  View Schedule
                </button>
                <button className="bg-[#1E3A8A] px-8 py-4 text-sm font-black tracking-widest uppercase transition-all hover:brightness-110">
                  Join the Club
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Fighting Styles Overview */}
        <section className="bg-[#000000] py-24 text-white max-w-7xl mx-auto">
          <div className="container mx-auto px-6">
            <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h2 className="border-b-4 border-[#d62929] pb-2 text-4xl font-black tracking-tight uppercase md:text-5xl">
                  Explore Our Fighting Styles
                </h2>
              </div>
              <div className="text-xs font-bold tracking-widest text-white uppercase">
                Refine Your Combat DNA
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-black">
              {styleCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`group border-b-4 border-transparent bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#d62929] ${
                    index === 1 ? "md:mt-12" : ""
                  }`}
                >
                  <div className="mb-6 aspect-video overflow-hidden bg-neutral-100">
                    <img
                      className="h-full w-full scale-105 object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                      src={card.image}
                      alt={card.alt}
                    />
                  </div>
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-2xl font-black tracking-tight uppercase">{card.title}</h3>
                    <span className="bg-[#d62929]/10 px-2 py-1 text-[10px] font-bold tracking-widest text-[#d62929] uppercase">
                      {card.tag}
                    </span>
                  </div>
                  <p className="mb-6 leading-relaxed text-slate-600">{card.description}</p>
                  <div className="space-y-3 text-xs font-bold tracking-wider uppercase">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-[#d62929]">
                        {card.icon}
                      </span>
                      <span>{card.focus}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-[#d62929]">
                        verified
                      </span>
                      <span className="text-[#1E3A8A]">{card.bestFor}</span>
                    </div>
                  </div>
                  <a
                    href={`/classes/${classSlugByTitle[card.title]}`}
                    className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#d62929] transition-transform group-hover:translate-x-1"
                  >
                    View details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive */}
        <section className="border-y border-slate-800 bg-[#0D0D0D] py-24 max-w-7xl mx-auto">
        <h2 className="mb-8 text-4xl font-black tracking-tight uppercase mx-auto text-center">
                  Which <span className="text-[#d62929]">Style</span> Fits You?
                </h2>
          <div className="container mx-auto px-6">
            
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <label className="block text-xs font-black tracking-widest text-slate-400 uppercase">
                      01. What is your primary goal?
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <button className="border border-slate-700 bg-[#292929] p-3 text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-[#d62929]/20">
                        Fitness
                      </button>
                      <button className="border border-[#d62929] bg-[#d62929] p-3 text-[10px] font-bold tracking-widest uppercase">
                        Defense
                      </button>
                      <button className="border border-slate-700 bg-[#292929] p-3 text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-[#d62929]/20">
                        Show
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-xs font-black tracking-widest text-slate-400 uppercase">
                      02. Current Experience Level?
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <button className="border border-slate-700 bg-[#292929] p-3 text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-[#d62929]/20">
                        Beginner
                      </button>
                      <button className="border border-slate-700 bg-[#292929] p-3 text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-[#d62929]/20">
                        Intermed.
                      </button>
                      <button className="border border-slate-700 bg-[#292929] p-3 text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-[#d62929]/20">
                        Advanced
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-xs font-black tracking-widest text-slate-400 uppercase">
                      03. Aesthetic Preference?
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <button className="border border-slate-700 bg-[#292929] p-3 text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-[#d62929]/20">
                        Modern
                      </button>
                      <button className="border border-slate-700 bg-[#292929] p-3 text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-[#d62929]/20">
                        Traditional
                      </button>
                      <button className="border border-slate-700 bg-[#292929] p-3 text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-[#d62929]/20">
                        Mixed
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-[#141414] p-12">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <span className="material-symbols-outlined text-[120px]">fitness_center</span>
                </div>
                <div className="relative z-10">
                  <span className="mb-6 inline-block bg-[#d62929]/20 px-3 py-1 text-[10px] font-black tracking-widest text-[#d62929] uppercase">
                    Result: High Efficiency
                  </span>
                  <h3 className="mb-4 text-3xl font-black tracking-tight uppercase">Jeet Kune Do</h3>
                  <p className="mb-8 leading-relaxed text-slate-300">
                    Based on your focus on self-defense and modern application, the way of the
                    intercepting fist is your path. This style discards flowery movements for raw
                    efficiency.
                  </p>
                  <button className="w-full bg-[#d62929] py-4 font-black tracking-widest uppercase transition-all hover:bg-red-700 active:scale-95">
                    Claim Free Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Class Schedule */}
        <section className="bg-gray-100 py-24 text-[#0D0D0D]">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <h2 className="border-b-4 border-[#d62929] pb-2 text-4xl font-black tracking-tight uppercase md:text-5xl">
                Weekly Training Schedule
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
              {weeklySchedule.map((item) => (
                <div
                  key={item.day}
                  className={`bg-white p-6 shadow-md ${
                    item.accent === "primary"
                      ? "border-l-4 border-[#d62929]"
                      : "border-l-4 border-[#1E3A8A]"
                  }`}
                >
                  <div
                    className={`mb-2 text-[10px] font-black tracking-widest uppercase ${
                      item.accent === "primary" ? "text-[#d62929]" : "text-[#1E3A8A]"
                    }`}
                  >
                    {item.day}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xl font-black tracking-tight uppercase">{item.cls}</div>
                      <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                        {item.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Progress */}
        <section className="overflow-hidden bg-black py-24 text-white">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-black tracking-tight uppercase md:text-5xl">
                Your Training Journey
              </h2>
              <p className="text-sm font-bold tracking-widest text-slate-300 uppercase">
                Discipline is the bridge between goals and accomplishment.
              </p>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-0 hidden h-1 w-full -translate-y-1/2 bg-neutral-800 md:block" />
              <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-4">
                {[
                  {
                    step: "01",
                    title: "Beginner",
                    color: "bg-neutral-900",
                    text: "Foundational mechanics, basic forms, and establishing psychological discipline.",
                  },
                  {
                    step: "02",
                    title: "Intermediate",
                    color: "bg-[#d62929]",
                    text: "Application of speed, sparring fundamentals, and technical combinations.",
                  },
                  {
                    step: "03",
                    title: "Advanced",
                    color: "bg-[#1E3A8A]",
                    text: "Mastery of flow, independent tactical thinking, and competitive readiness.",
                  },
                  {
                    step: "04",
                    title: "Master Level",
                    color: "bg-red-800",
                    text: "The synthesis of technique and philosophy. Teaching others the way of Obsidian.",
                  },
                ].map((item) => (
                  <div key={item.step} className="bg-transparent text-center md:pt-16">
                    <div
                      className={`mx-auto mb-6 flex h-12 w-12 items-center justify-center text-white outline-8 outline-white ${item.color} font-black outline`}
                    >
                      {item.step}
                    </div>
                    <h4 className="mb-2 text-lg font-black tracking-tight uppercase">{item.title}</h4>
                    <p className="px-4 text-sm leading-relaxed text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#d62929] py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-10 text-4xl font-black tracking-tight text-white uppercase md:text-6xl">
              Start Your Martial Arts <br className="hidden md:block" /> Journey Today
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="scale-100 bg-white px-10 py-5 font-black tracking-widest text-[#d62929] uppercase transition-all hover:scale-105 hover:bg-neutral-100 active:scale-95">
                Join the Club
              </button>
              <button className="scale-100 bg-neutral-900 px-10 py-5 font-black tracking-widest text-white uppercase transition-all hover:scale-105 hover:bg-black active:scale-95">
                Book Free Trial
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
