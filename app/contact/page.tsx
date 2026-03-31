import type { Metadata } from "next";
import BranchesSection from "@/components/BranchesSection";

export const metadata: Metadata = {
  title: "Contact Us | Apex Martial Arts Academy",
};

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">
      {/* Hero */}
      <section className="relative flex h-[60vh] min-h-[600px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/contact-martial-art-academy.jpg')",
          }}
          aria-label="Martial arts professional in training stance"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />

        <div className="relative z-20 max-w-4xl px-4 text-center">
          <h1 className="mb-6 text-5xl font-black tracking-tighter text-white uppercase md:text-7xl">
            Contact Our <span className="text-primary">Academy</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-slate-300 md:text-xl">
            Get in touch with our elite coaching team and start your martial arts
            journey today. Professional training for all levels.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary px-8 py-4 font-bold tracking-widest text-white uppercase transition-all hover:bg-red-700">
              Book Free Trial
            </button>
            <button className="border-2 border-secondary px-8 py-4 font-bold tracking-widest text-white uppercase transition-all hover:bg-secondary">
              View Classes
            </button>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="bg-[#12110F] px-6 py-20 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-xl border-b-4 border-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary">
              <div className="mb-6 text-secondary transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-4xl">chat</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">WhatsApp</h3>
              <p className="mb-4 text-sm text-slate-600">
                Chat with our support team instantly.
              </p>
              <a className="text-sm font-bold text-primary" href="#">
                +1 (555) 000-9999
              </a>
            </div>

            <div className="group rounded-xl border-b-4 border-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary">
              <div className="mb-6 text-secondary transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-4xl">call</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Telephone</h3>
              <p className="mb-4 text-sm text-slate-600">
                Call us for direct inquiries.
              </p>
              <a className="text-sm font-bold text-primary" href="#">
                +1 (555) 123-4567
              </a>
            </div>

            <div className="group rounded-xl border-b-4 border-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary">
              <div className="mb-6 text-secondary transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-4xl">mail</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Email</h3>
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
              <h3 className="mb-2 text-lg font-bold text-slate-900">Address</h3>
              <p className="mb-4 text-sm text-slate-600">
                Visit our world-class dojo.
              </p>
              <p className="text-sm font-bold text-primary">
                123 Warrior Way, Combat City
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smooth transition */}
      <div className="h-16 bg-gradient-to-b from-background-dark to-background-light" />

      {/* Form + Map */}
      <section className="bg-background-light px-6 pb-24 md:px-20 pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="rounded-xl bg-white p-10 shadow-xl">
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
              </form>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h2 className="mb-4 text-3xl font-black tracking-tighter text-slate-900 uppercase">
                  Find Our Dojo
                </h2>
                <p className="mb-6 text-slate-600">
                  Our academy is located in the heart of the sports district.
                  Featuring over 10,000 sq ft of premium mats, bags, and recovery
                  zones.
                </p>

                <div className="group relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl grayscale transition-all duration-700 hover:grayscale-0">
                  <div className="pointer-events-none absolute inset-0 z-10 bg-primary/10" />
                  <div
                    className="h-full w-full bg-slate-300"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDiAmZArk_3xG_n7_DbCSK26AQbrW6xJdf93QDWoAqoKeuO5s-Jd-C17egLytj6aF_0njM7QdwLykAWlurcKCQmDITx-ym7rfFs-d5OaZuWEcgmv4ZoFqevk53T7ffCx1XnubdCv6dZfOHRg9zgQwV1B2aKvkkoDmW6G1KP_neLS7zSQ2rMF2QmEcdV69lHVXwtgUzyAsESwDTVgmC2jD0JBBXvQ0Ymu5a5ge7j1WN4D7-oVl-fsZDcFDluqd9QqThbVYuFbSZrHdc')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    aria-label="Stylized map showing academy location"
                  />
                  <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                    <span className="material-symbols-outlined text-6xl text-primary drop-shadow-lg">
                      location_on
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BranchesSection />

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-background-light px-6 py-24 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black tracking-tighter text-[#0d0d0d] uppercase md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
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

      {/* CTA */}
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
    </main>
  );
}

