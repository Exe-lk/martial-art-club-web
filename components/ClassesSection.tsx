const PROGRAMS = [
  {
    tag: "Striking",
    title: "Karate",
    description:
      "Traditional striking discipline focused on precision, speed, and powerful blocks.",
    difficulty: "All Levels",
    ageGroup: "7+ Years",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAaJx9N5-zqbCtwz7i3VsNHDDfY4nCzU44d3XuNWgeIrQN3x6OFZC-Ti_f-kFK8SxtSlGGEQqGVoJuN0OiQFN2aqM-WrThaZhWl_bAhn_WnB53FOH7YOV0Rlu7xPvSd47vdGT3Td3C8l15TMR2wJe0vZeeKoS5LPqA1FVoZDshmikgPI_ziJ_XVxu7_nKwKs34zc_kSUeqS86WUmVgRpB8_flqlIA5NrJEkZEh-VSqmkaA-ra-F48aKAJ6yuL0C-j3p3OlFhR-dstg",
    alt: "Karate",
  },
  {
    tag: "Grappling",
    title: "Brazilian Jiu-Jitsu",
    description:
      "Master the art of leverage and ground fighting. Perfect for self-defense and competition.",
    difficulty: "Intermediate",
    ageGroup: "Adults / Teens",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0d9y5HKcUoO13CL6Td6Xk_HtAljquMDowxBF-XTs4dPu2YOjV0jgR-wM8pRXWbF4t6A5fT-os76GOA_OZ08tzPnEV07U5P28El721SvGj5X3MXkjgJNrwMoRLchxAsIimfICww__tKLdjSRSJ9SKvX53F5KT_2GzRBDy2W8tr2th9TKfnwO55WJxHvcBAz3WBfv2l_TapBVR5H2HWLpe_RGmSRIOpUt6R4OaYx-F71-gQfXILErP40IffKn1s-zIuD2Eor-mhy58",
    alt: "BJJ",
  },
  {
    tag: "Sport",
    title: "Taekwondo",
    description:
      "Dynamic kicking techniques and olympic-style sparring for agility and focus.",
    difficulty: "All Levels",
    ageGroup: "5+ Years",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ3l84pZn5j_IhRBFBKCiMRUMyzZWiSMJHS1vodVKi4odvBlAjQY8xuC_Z1bfkONo8D5yz8nwpqfFICkEbEkQTNL0aep8cyhehz4hqBijGgg3ti-eG_71CdZ84jpEjHme6fMsHARuB8kAjL9o2T7iv7aNT8mQquxT_5G4-t8HAXY15sM1wsBt48ETlEgELa3s8JFMWPrekPtabryfVWbxP2M64M_WM6ass81F3UvHzs_90L6-zDMxbCpTO6LCfbW9oWGtoOmZVWIw",
    alt: "Taekwondo",
  },
  {
    tag: "Throws",
    title: "Judo",
    description:
      "Traditional Japanese art focusing on powerful throws and pinning techniques.",
    difficulty: "Advanced",
    ageGroup: "12+ Years",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDja-_6wYrOVoK5bmSmIDQvWwA60IYOeYl6xIquT3Moj1PZ1DhvbzzAISHgSeoWycnzzuJq1bdqmKo7r5DAPRicZhNn-kzJcatSgxawoi0_Tywovz5vhUJUZWt9hor-Jqm1eY-wj41zc36JjkfSWVkVQ5WEQwJ7Doi-Dlpmy2FD0iHPpUBJbCW_oCHAtYaxcA7smx33bhXog33AyHAEipgYknCjt-ySz0AngpmFqGYIWZgpN4PwgqXTQaPPxiPHHzwaV2gOReOIB50",
    alt: "Judo",
  },
  {
    tag: "Survival",
    title: "Self-Defense",
    description:
      "Practical techniques for real-world safety scenarios. Build awareness and confidence.",
    difficulty: "Beginner Friendly",
    ageGroup: "16+ Years",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKSd_sSjoZ085EPasl9yhnmyZnRR-yqlryPPfezn2F8KEG1LMaZrrZc99I-YYx8XZVu8loyq_HjNda34xodhAMbCg3LVtZ05r3o68xOE6BOpeDB1gGWiygadCWQ0C-WmnvCAB4KjtZBi496r-u-R6WcXttkoB6roQtKVy83cDC2JGJrYj0U3k5hsNgb6JmY5migZoS-Cz2--2cXhQwTO6jmrpmSP847TWPt-c-w8vWqgQf-H_BR5JNwJL2eFdmjA72Ca6-3PD0X_g",
    alt: "Self Defense",
  },
  {
    tag: "Youth",
    title: "Kids Academy",
    description:
      "Confidence, respect, and discipline for the next generation. Fun and structured environment.",
    difficulty: "Beginner",
    ageGroup: "4-12 Years",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0Nram2xu7EaVPruPpOrI1ejnd845UHjuPEQqRxogB2DOUP8p-qRqPz7rUppbop1LuGnUyntAgjfF44CAEATUGNL8Ee_YAqTIfxIWUNNJlrQbvJWkZe2pyGjFyyekl_CPoYyjtebSbqIwq6t_J5dRnnsyKchWCusp9tCdHU0mftc3E5h9sqUtAQxo-XLZFqQeA96Xz3_M3766Nkk9Xi4z-DyWYJQ1XSBLuXG0RJw92_Q7juFUOVj9lXyora5JGw9WmjmLzmQfImEg",
    alt: "Kids Academy",
  },
] as const;

export default function ClassesSection() {
  return (
    <section className="bg-background-dark py-24 text-white" id="programs">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-16 space-y-4 text-center">
          <h2 className="text-primary text-sm font-black tracking-widest uppercase">
            Our Martial Arts Programs
          </h2>
          <h3 className="text-4xl font-black tracking-tight uppercase md:text-5xl">
            Choose Your Path
          </h3>
          <p className="mx-auto max-w-2xl text-slate-400">
            Specialized training paths for every age and skill level, led by world-class
            instructors.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <article
              key={program.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-white/5 bg-[#1a1a1a]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={program.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={program.image}
                />
                <div className="absolute left-4 top-4">
                  <span className="bg-accent-blue/90 rounded px-2 py-1 text-[10px] font-bold tracking-tighter text-white uppercase">
                    {program.tag}
                  </span>
                </div>
              </div>

              <div className="flex flex-grow flex-col p-6">
                <h4 className="mb-3 text-2xl font-black uppercase">{program.title}</h4>
                <p className="mb-6 flex-grow text-sm text-slate-400">{program.description}</p>

                <dl className="mb-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase">
                    <span className="material-symbols-outlined text-primary text-lg">
                      trending_up
                    </span>
                    <dt className="text-slate-500">Difficulty:</dt>
                    <dd className="text-white">{program.difficulty}</dd>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase">
                    <span className="material-symbols-outlined text-primary text-lg">groups</span>
                    <dt className="text-slate-500">Age Group:</dt>
                    <dd className="text-white">{program.ageGroup}</dd>
                  </div>
                </dl>

                <button
                  type="button"
                  className="w-full rounded bg-primary py-3 text-xs font-black tracking-widest text-white uppercase transition-colors hover:bg-red-700"
                >
                  Program Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

