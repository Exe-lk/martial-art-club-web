import type { Metadata } from "next";
import Image from "next/image";
import BranchesSection from "@/components/BranchesSection";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Us | Apex Martial Arts Academy",
};

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">
      {/* Hero */}
      <section
        className="relative grid min-h-[480px] grid-cols-1 overflow-hidden lg:min-h-[76vh] lg:grid-cols-2"
        aria-labelledby="contact-hero-heading"
      >
        <div className="relative min-h-[320px] lg:min-h-0">
          <Image
            src="/contact-martial-art-academy.jpg"
            alt="Martial arts professional in training stance"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
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
            <p className="text-xs font-black tracking-[0.35em] text-primary uppercase">
              Black Dragon
            </p>
            <h1
              id="contact-hero-heading"
              className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white uppercase sm:text-5xl md:text-6xl"
            >
              Contact Our <span className="text-primary">Academy</span>
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-relaxed text-slate-200 md:text-base">
              Get in touch with our elite coaching team and start your martial arts
              journey today. Professional training for all levels.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="bg-primary px-8 py-4 font-bold tracking-widest text-white uppercase transition-all hover:bg-red-700">
              View Classes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Contact methods */}
      <ScrollReveal>
        <section className="bg-[#000000] px-6 pb-24 md:px-20 pt-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
              <div className="h-full rounded-xl bg-white p-10 shadow-xl">
                <h2 className="mb-8 text-3xl font-black tracking-tighter text-slate-900 uppercase">
                  Send a Message
                </h2>
                <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold tracking-widest text-slate-500 uppercase">
                      Full Name
                    </label>
                    <input
                      className="w-full rounded border-slate-200 bg-slate-50 py-3 text-slate-900 focus:border-primary focus:ring-primary"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold tracking-widest text-slate-500 uppercase">
                      Email Address
                    </label>
                    <input
                      className="w-full rounded border-slate-200 bg-slate-50 py-3 text-slate-900 focus:border-primary focus:ring-primary"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold tracking-widest text-slate-500 uppercase">
                      Phone Number
                    </label>
                    <input
                      className="w-full rounded border-slate-200 bg-slate-50 py-3 text-slate-900 focus:border-primary focus:ring-primary"
                      placeholder="+1 (555) 000-0000"
                      type="tel"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold tracking-widest text-slate-500 uppercase">
                      Subject
                    </label>
                    <select className="w-full rounded border-slate-200 bg-slate-50 py-3 text-slate-900 focus:border-primary focus:ring-primary">
                      <option>General Inquiry</option>
                      <option>Membership Plans</option>
                      <option>Free Trial Session</option>
                      <option>Private Training</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold tracking-widest text-slate-500 uppercase">
                    Message
                  </label>
                  <textarea
                    className="w-full rounded border-slate-200 bg-slate-50 py-3 text-slate-900 focus:border-primary focus:ring-primary"
                    placeholder="How can we help you?"
                    rows={5}
                  />
                </div>

                <button className="w-full rounded bg-primary py-5 font-black tracking-widest text-white uppercase shadow-lg shadow-primary/20 transition-all hover:bg-red-700">
                  Send Message
                </button>

                <div className="pt-4">
                  <p className="mb-3 text-center text-xs font-bold tracking-widest text-slate-500 uppercase">
                    Connect with us
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                      href="#"
                      aria-label="WhatsApp"
                    >
                      <span className="material-symbols-outlined">chat</span>
                    </a>
                    <a
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                      href="#"
                      aria-label="Facebook"
                    >
                      <span className="material-symbols-outlined">public</span>
                    </a>
                    <a
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                      href="#"
                      aria-label="Instagram"
                    >
                      <span className="material-symbols-outlined">photo_camera</span>
                    </a>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex h-full min-h-0 flex-col gap-8">
              <h2 className="text-3xl font-black text-white tracking-tighter text-slate-900 uppercase">
                Contact Details
              </h2>

              <div className="grid flex-1 grid-cols-1 gap-6 overflow-auto pr-1">
               

                <div className="group rounded-xl border-b-4 border-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary">
                  <div className="mb-6 text-secondary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-4xl">
                      call
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Telephone
                  </h3>
                  <p className="mb-4 text-sm text-slate-600">
                    Call us for direct inquiries.
                  </p>
                  <a className="text-sm font-bold text-primary" href="#">
                    +1 (555) 123-4567
                  </a>
                </div>

                <div className="group rounded-xl border-b-4 border-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary">
                  <div className="mb-6 text-secondary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-4xl">
                      mail
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Email
                  </h3>
                  <p className="mb-4 text-sm text-slate-600">
                    Drop us a line anytime.
                  </p>
                  <a className="text-sm font-bold text-primary" href="#">
                    info@apexmartialarts.com
                  </a>
                </div>

                <div className="group rounded-xl border-b-4 border-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary">
                  <div className="mb-6 text-secondary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-4xl">
                      location_on
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Address
                  </h3>
                  <p className="mb-4 text-sm text-slate-600">
                    Visit our world-class dojo.
                  </p>
                  <p className="text-sm font-bold text-primary">
                    123 Warrior Way, Combat City
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
        <BranchesSection />
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section className="border-t border-slate-200 bg-[#000000] px-6 py-24 md:px-20 -mt-5">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-black text-white tracking-tighter text-[#0d0d0d] uppercase md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-2xl  text-[#C20009]">
                Everything you need to know about starting your journey at Apex
                Martial Arts Academy.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  q: "What should I wear for my first class?",
                  a: "For your first session, comfortable athletic wear like a t-shirt and shorts/leggings is perfect. We provide specialized gear for trial sessions if required.",
                },
                {
                  q: "Do I need any previous experience?",
                  a: "Not at all! Our 'Beginners Program' is specifically designed for those with zero martial arts background. Our coaches will guide you every step of the way.",
                },
                {
                  q: "What is the minimum age for kids' classes?",
                  a: "We welcome young warriors starting from age 5. Our kids' classes focus on discipline, coordination, and fundamental techniques in a fun environment.",
                },
                {
                  q: "Can I try a class for free?",
                  a: "Absolutely. We offer a complimentary first session for all new local residents so you can experience our facility and coaching first-hand.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="rounded-xl border-l-4 border-secondary bg-white p-8 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined font-bold text-secondary">
                      help
                    </span>
                    <div>
                      <h3 className="mb-3 text-lg font-bold text-[#0d0d0d]">
                        {item.q}
                      </h3>
                      <p className="leading-relaxed text-slate-600">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="relative overflow-hidden border-t border-white/5 bg-background-dark px-6 py-24 text-center md:px-20">
          <div className="absolute top-0 right-0 h-64 w-64 bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-64 w-64 bg-secondary/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="mb-8 text-4xl font-black tracking-tighter text-white uppercase md:text-5xl">
              Start Your <span className="text-primary">Martial Arts</span> Journey
              Today
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-primary px-10 py-5 font-bold tracking-widest text-white uppercase transition-all hover:bg-red-700">
                Join the Club
              </button>
              <button className="border-2 border-white/20 px-10 py-5 font-bold tracking-widest text-white uppercase transition-all hover:bg-white/10">
                Book Free Trial
              </button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}

