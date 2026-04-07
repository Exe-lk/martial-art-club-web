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
        <section className="bg-[#f3f4f6] py-24 dark:bg-slate-900">
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
              <h2 className="text-4xl font-black text-slate-900 uppercase italic dark:text-white">
                Our Academy
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Founded in 2010 by Grandmaster Elias Thorne, Apex Martial Arts
              Academy was built on a singular philosophy: discipline equals
              freedom. What started as a small garage dojo has evolved into a
              premier training center for future champions.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
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
                  <div className="rounded bg-[#1e3a8a]/10 p-3 text-[#1e3a8a]">
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
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
        <section className="bg-[#f3f4f6] py-24 dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-2 block text-sm font-black tracking-widest text-[#1e3a8a] uppercase">
                Pro Gear
              </span>
              <h2 className="text-4xl font-black text-slate-900 uppercase italic dark:text-white">
              Explore our gym
              </h2>
            </div>
            <button className="rounded bg-[#1e3a8a] px-8 py-3 text-xs font-black tracking-widest text-white uppercase transition-colors hover:bg-blue-800">
              Shop All Equipment
            </button>
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
                topic: "Safety",
                border: "border-[#1e3a8a]",
                img: "/gym/fighting-safety.jpeg",
                alt: "Fighting safety training",
                desc: "Train with clear rules, proper supervision, and protective standards every session.",
              },
              {
                topic: "Accessories",
                border: "border-primary",
                img: "/gym/gym%20accesories.jpeg",
                alt: "Gym accessories and equipment",
                desc: "Gloves, pads, and essential gear to support your training and protect your body.",
              },
              {
                topic: "Standard",
                border: "border-[#1e3a8a]",
                img: "/gym/gym3.jpeg",
                alt: "Gym training standard and facility",
                desc: "Clean facilities, structured coaching, and disciplined routines that set the bar high.",
              },
            ].map((item) => (
              <div
                key={item.topic}
                className={`group overflow-hidden border-l-4 bg-[#0d0d0d] p-1 ${item.border}`}
              >
                <div className="relative aspect-square bg-slate-800">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={item.img}
                    alt={item.alt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                  <div className="absolute inset-0 p-5">
                    <div className="relative h-full">
                      <h4 className="absolute bottom-0 left-0 text-base font-black tracking-widest text-white uppercase transition-all duration-300 group-hover:bottom-auto group-hover:top-0">
                        {item.topic}
                      </h4>

                      <div className="absolute left-0 right-0 bottom-0 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="pt-10">
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

      

      {/* Achievements */}
      <ScrollReveal>
        <section className="border-y border-slate-800 bg-[#0d0d0d] py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-12 text-center lg:grid-cols-4">
            {[
              { icon: "military_tech", value: "50+", label: "Tournament Medals" },
              { icon: "rewarded_ads", value: "20+", label: "National Champions" },
              { icon: "person_celebrate", value: "1000+", label: "Students Trained" },
              { icon: "history_edu", value: "15+", label: "Years of Excellence" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-4">
                <span className="material-symbols-outlined text-5xl text-[#1e3a8a]">
                  {item.icon}
                </span>
                <div className="text-4xl font-black text-white italic md:text-5xl">
                  {item.value}
                </div>
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Our Complete Staff */}
      <ScrollReveal>
        <section className="bg-white py-24 dark:bg-[#0d0d0d]">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="mb-2 block text-sm font-black tracking-widest text-primary uppercase">
              Elite Instructors
            </span>
            <h2 className="text-4xl font-black text-slate-900 uppercase italic dark:text-white">
              Our Complete Staff
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Master Sarah Jenkins",
                role: "4th Dan Black Belt",
                desc: "15 Years Teaching Experience. Specialized in Taekwondo and Brazilian Jiu-Jitsu.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlL7Zvaieo36Y_Fcf_36VJ_fZZCk5QQQ_WW7VxDtd3e4VC_OSpi_aczNhLy7zkkl6Wkwb1nFMr9UZI42L0W4zz2KJpZOp3Sx5yR2ywv28eN6krbcgAgLlCai_hexK2xl_yZmUmItMJ7F_cp87Wf04D0Kd-Z3czG_DBbpNDo8OIylXTCuF_s0Qgi3D3j1OWL_w7VLmrLEBWegoVGORpaj4rTfIIbSjLIA-eMXXvZc7ParxZNlwKAtJl_aTgQ8bRjMNUmOjnarNKWck",
                alt: "Martial arts instructor Sarah Jenkins posing",
              },
              {
                name: "Kru Marcus Chen",
                role: "Muay Thai Specialist",
                desc: "Former regional champion. 12 Years Experience in striking and conditioning.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC491QLeh_kKBQkRjd2iXfGLnRmL_7kPShiulCT26LE65QL7yuOPLaabKIH7yPEBiT3Mrc7B5jNV4w5E5zGMr41j9xdXj05dXXEmWhbSBdeUU-2FMG7XGXeYL5RnMDrsi_RusIVjYjkv6KAb2yKMiULObDP-3KGktNN2mYV4HmvFyJugS3bTFhc2qi9Fx3Pd6WR6ksQBblSRRkUsOF7ojmAAnSVMfQDv0bFJv884iGzpc1bLvP0PwDNrsO48A05cfuqhF-JjUnlvE",
                alt: "Male Muay Thai instructor training",
              },
              {
                name: "Sensei David Vogel",
                role: "Karate & Self Defense",
                desc: "20+ Years Experience. Expert in traditional styles and modern self-defense.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBrlr01NW4-fIeyay0n9PHb8j6thKs969-oLjp_kuLiG5cDJADryxJof8ifCcnvNdGLFqUpZqHqH1-uWvIfsWOnmMy4zJPdDhFvpNlR0bd4ZsaR-32oORF_Lzbtq2WS1A6h6ao9uCTyHh0r_BTz-3Af--dWCJ3ZRuDhk33mI_EB__6oHhumNeVExFMyUatEhnxRkVQkuK4HUqxLsFLJpevc9y3HJ7_k5LYOaC-klBuk-m9RmI47hOc28jlo8XL6dIZuio1qYRRXQE",
                alt: "Martial arts instructor demonstration",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="group relative overflow-hidden rounded border border-slate-200 bg-slate-50 transition-all hover:-translate-y-2 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    src={t.img}
                    alt={t.alt}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-900 uppercase transition-colors group-hover:text-primary dark:text-white">
                    {t.name}
                  </h3>
                  <p className="mb-4 text-sm font-bold text-[#1e3a8a] uppercase">
                    {t.role}
                  </p>
                  <p className="text-sm italic text-slate-500 dark:text-slate-400">
                    {t.desc}
                  </p>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    star
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Gallery */}
      <ScrollReveal>
        <section className="bg-[#f3f4f6] py-24 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-2 block text-sm font-black tracking-widest text-primary uppercase">
                Dojo Life
              </span>
              <h2 className="text-4xl font-black text-slate-900 uppercase italic dark:text-white">
                Life at Our Dojo
              </h2>
            </div>
            <a
              className="flex items-center gap-2 text-xs font-black tracking-widest text-[#1e3a8a] uppercase hover:underline"
              href="#"
            >
              View Full Gallery{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                img: "/gallery/training/taining-time.jpg",
                alt: "Training time at the dojo",
              },
              {
                img: "/gallery/training/taining-time2.jpg",
                alt: "Training time sparring session",
              },
              {
                img: "/gallery/training/taining-time3.jpg",
                alt: "Training time drills and techniques",
              },
              {
                img: "/gallery/training/taining-time4.jpg",
                alt: "Training time group practice",
              },
            ].map((g) => (
              <div
                key={g.alt}
                className="group relative aspect-square overflow-hidden rounded"
              >
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={g.img}
                  alt={g.alt}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="material-symbols-outlined text-4xl text-white">
                    zoom_in
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="bg-primary py-20">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-8 text-4xl font-black text-white uppercase italic md:text-5xl">
            Ready to Start Your Martial Arts Journey?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="rounded bg-white px-10 py-4 text-sm font-black tracking-widest text-primary uppercase transition-all shadow-xl hover:bg-slate-100">
              Join the Club
            </button>
            <button className="rounded border-2 border-white bg-transparent px-10 py-4 text-sm font-black tracking-widest text-white uppercase transition-all hover:bg-white/10">
              Book a Free Trial
            </button>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </main>
  );
}

