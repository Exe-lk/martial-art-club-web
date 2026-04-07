import MeetOurInstructorsSection from "@/components/MeetOurInstructorsSection";
import AboutPageHero from "@/components/AboutPageHero";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-[#f3f4f6] text-slate-900 dark:bg-[#0d0d0d] dark:text-slate-100">
      {/* Hero Section */}
      <AboutPageHero />


{/* Why Us */}
<ScrollReveal>
        <section className="bg-black py-24 text-white">
        <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-24 w-24 border-t-4 border-l-4 border-primary" />
            <img
              className="relative z-10 h-[500px] w-full rounded object-cover shadow-2xl"
              src="/contact-martial-art-academy.jpg"
              alt="Martial arts coaches training with students"
            />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-4 border-r-4 border-[#1e3a8a]" />
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <span className="mb-2 block text-sm font-black tracking-widest text-primary uppercase">
                The Legacy
              </span>
              <h2 className="text-4xl font-black uppercase  text-white">
                Our Academy
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-slate-200">
              Founded in 2010 by Grandmaster Elias Thorne, Apex Martial Arts
              Academy was built on a singular philosophy: discipline equals
              freedom. What started as a small garage dojo has evolved into a
              premier training center for future champions.
            </p>
            <p className="text-lg leading-relaxed text-slate-200">
              Our growth is rooted in our commitment to authentic technique and
              mental fortitude. We don&apos;t just teach combat; we cultivate
              character, resilience, and a warrior&apos;s spirit in every student
              who walks through our doors.
            </p>

            <div className="mt-4 grid gap-6">
              {[
                {
                  icon: "calendar_today",
                  title: "Founded in 2010",
                  text: "Over a decade of martial excellence.",
                },
                {
                  icon: "groups",
                  title: "500+ Students Trained",
                  text: "A growing community of dedicated practitioners.",
                },
                {
                  icon: "emoji_events",
                  title: "National Winners",
                  text: "Elite competitive achievements on the world stage.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="rounded bg-white/10 p-3 text-white">
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Meet Our Instructors */}
      <ScrollReveal>
        <MeetOurInstructorsSection />
      </ScrollReveal>

      {/* Accessories & Equipment */}
      <ScrollReveal>
        <section className="bg-[#000000] py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-2 block text-sm font-black tracking-widest text-[#1e3a8a] uppercase">
                Pro Gear
              </span>
              <h2 className="text-4xl font-black text-slate-900 uppercase dark:text-white">
              Explore our gym
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                topic: "Location",
                border: "border-primary",
                img: "/gym/gym.jpeg",
                alt: "Gym location and training space",
                desc: "Find us easily and step into a focused training environment built for progress.",
              },
              {
                topic: "Facilities",
                border: "border-[#1e3a8a]",
                img: "/gym/fighting-safety.jpeg",
                alt: "Fighting safety training",
                desc: "Train with clear rules, proper supervision, and protective standards every session.",
              },
              {
                topic: "Team",
                border: "border-primary",
                img: "/gym/gym%20accesories.jpeg",
                alt: "Gym accessories and equipment",
                desc: "Gloves, pads, and essential gear to support your training and protect your body.",
              },
              {
                topic: "Classes",
                border: "border-[#1e3a8a]",
                img: "/gym/gym3.jpeg",
                alt: "Gym training standard and facility",
                desc: "Clean facilities, structured coaching, and disciplined routines that set the bar high.",
              },
            ].map((item) => (
              <div
                key={item.topic}
                className={`group overflow-hidden  bg-[#0d0d0d] p-1 ${item.border}`}
              >
                <div className="relative aspect-square bg-slate-800">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={item.img}
                    alt={item.alt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                  <div className="absolute inset-0 p-5">
                    <div className="flex h-full flex-col justify-end">
                      <h4 className="text-lg font-black tracking-widest text-white uppercase md:text-xl">
                        {item.topic}
                      </h4>

                      <div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40">
                        <div className="pt-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm text-slate-200">{item.desc}</p>
                        <button className="mt-4 inline-flex items-center gap-2 rounded bg-white/10 px-4 py-2 text-xs font-black tracking-widest text-white uppercase transition-colors hover:bg-white/20">
                          Learn more
                          <span className="material-symbols-outlined text-base">
                            arrow_forward
                          </span>
                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

  
      {/* CTA */}

    </main>
  );
}

