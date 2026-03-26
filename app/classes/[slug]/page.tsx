import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { classesData, getClassBySlug, getOtherClasses } from "@/lib/classesData";

export function generateStaticParams() {
  return classesData.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> | Metadata {
  // Next may pass params as a promise in some builds; support both.
  const maybePromise = params as unknown as { slug?: string } | Promise<{ slug: string }>;

  if (typeof (maybePromise as any)?.then === "function") {
    return (maybePromise as Promise<{ slug: string }>).then(({ slug }) => {
      const cls = getClassBySlug(slug);
      if (!cls) return { title: "Class Not Found" };
      return { title: cls.seoTitle, description: cls.seoDescription };
    });
  }

  const slug = (maybePromise as { slug?: string }).slug ?? "";
  const cls = getClassBySlug(slug);
  if (!cls) return { title: "Class Not Found" };
  return { title: cls.seoTitle, description: cls.seoDescription };
}

export default async function ClassDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cls = getClassBySlug(slug);
  if (!cls) notFound();

  const other = getOtherClasses(slug);

  return (
    <main className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-6 md:px-20 lg:min-h-[70vh] flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10" />
          <div
            className="w-full h-full bg-cover bg-center"
            aria-label={cls.heroImageAlt}
            style={{ backgroundImage: `url("${cls.heroImageUrl}")` }}
          />
        </div>

        <div className="relative z-20 max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-6">
            {cls.badges.map((b, idx) => (
              <span
                key={b}
                className={
                  idx === 0
                    ? "bg-primary/20 text-primary border border-primary/30 text-[10px] font-bold uppercase px-3 py-1 rounded"
                    : idx === 1
                      ? "bg-secondary/20 text-blue-300 border border-secondary/30 text-[10px] font-bold uppercase px-3 py-1 rounded"
                      : "bg-white/10 text-white border border-white/20 text-[10px] font-bold uppercase px-3 py-1 rounded"
                }
              >
                {b}
              </span>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase italic leading-none tracking-tighter mb-4">
            {cls.name} <span className="text-primary">Training</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
            {cls.seoDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:scale-105 transition-transform text-white font-black uppercase tracking-widest px-8 py-4 rounded text-sm">
              Join This Class
            </button>
            <a
              href="#schedule"
              className="inline-flex items-center justify-center border-2 border-secondary text-white hover:bg-secondary/20 transition-all font-black uppercase tracking-widest px-8 py-4 rounded text-sm"
            >
              View Schedule
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-neutral-gray dark:bg-slate-900 py-24 px-6 md:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-xl transform group-hover:rotate-2 transition-transform" />
            <div
              className="relative aspect-[4/3] bg-cover bg-center rounded-lg shadow-2xl"
              aria-label={cls.overviewImageAlt}
              style={{ backgroundImage: `url("${cls.overviewImageUrl}")` }}
            />
          </div>

          <div>
            <h2 className="text-primary font-black uppercase tracking-[0.2em] mb-4 text-sm">
              Overview
            </h2>
            <h3 className="text-4xl font-black dark:text-white uppercase mb-6 italic leading-tight">
              {cls.overviewTitle}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              {cls.overviewBody}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cls.highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-white dark:bg-background-dark p-4 rounded-lg flex items-center gap-4 border border-slate-200 dark:border-white/5 shadow-sm"
                >
                  <span className="material-symbols-outlined text-secondary text-3xl">
                    {h.icon}
                  </span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">{h.label}</p>
                    <p className="font-bold dark:text-white">{h.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="bg-white dark:bg-background-dark py-24 px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-primary font-black uppercase tracking-[0.2em] mb-4 text-sm">
            Curriculum
          </h2>
          <h3 className="text-4xl font-black dark:text-white uppercase italic">
            What You Will Learn
          </h3>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cls.curriculum.map((item) => (
            <div
              key={item.title}
              className="group p-8 border border-slate-100 dark:border-white/5 rounded-xl hover:bg-primary transition-all duration-300"
            >
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white mb-6">
                {item.icon}
              </span>
              <h4 className="font-black uppercase italic dark:text-white group-hover:text-white mb-3">
                {item.title}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-white/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="bg-neutral-gray dark:bg-slate-900 py-24 px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-primary font-black uppercase tracking-[0.2em] mb-4 text-sm">
            Timetable
          </h2>
          <h3 className="text-4xl font-black dark:text-white uppercase italic">
            Weekly Training Schedule
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cls.schedule.map((slot) => (
            <div
              key={`${slot.day}-${slot.time}`}
              className="bg-white dark:bg-background-dark p-6 rounded-lg border-l-4 border-secondary"
            >
              <p className="text-primary font-black mb-2 uppercase tracking-widest text-xs">
                {slot.day}
              </p>
              <h4 className="text-xl font-bold dark:text-white mb-4">{slot.time}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                {slot.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Fees Section */}
      <section className="bg-background-dark py-24 px-6 md:px-20 text-white">
        <div className="text-center mb-16">
          <h2 className="text-primary font-black uppercase tracking-[0.2em] mb-4 text-sm">
            Pricing Plans
          </h2>
          <h3 className="text-4xl font-black uppercase italic">Training Fees</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cls.pricing.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.featured
                  ? "bg-white/5 border-2 border-primary p-10 rounded-xl flex flex-col items-center relative scale-105"
                  : "border border-white/10 p-10 rounded-xl flex flex-col items-center hover:border-primary transition-colors"
              }
            >
              {plan.featured ? (
                <div className="absolute -top-4 bg-primary text-[10px] font-black uppercase px-4 py-1 tracking-widest">
                  Most Popular
                </div>
              ) : null}

              <p
                className={
                  plan.featured
                    ? "text-xs uppercase font-black tracking-widest text-primary mb-6"
                    : "text-xs uppercase font-black tracking-widest text-slate-400 mb-6"
                }
              >
                {plan.name}
              </p>

              <h4 className="text-5xl font-black italic mb-2">
                {plan.priceLkr.toLocaleString("en-US")}
                <span className="text-lg font-bold not-italic text-slate-400 ml-2">LKR</span>
              </h4>
              <p className={plan.featured ? "text-slate-400 text-sm mb-10" : "text-slate-500 text-sm mb-10"}>
                Monthly Membership
              </p>

              <ul className="space-y-4 mb-10 w-full">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>{" "}
                    {perk}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-primary py-4 font-black uppercase tracking-widest text-sm rounded">
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Trainer Section */}
      <section className="bg-neutral-gray dark:bg-slate-900 py-24 px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-primary font-black uppercase tracking-[0.2em] mb-4 text-sm">
            Class Instructor
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-background-dark overflow-hidden rounded-2xl shadow-xl flex flex-col">
          <div className="flex flex-col md:flex-row">
            <div
              className="md:w-1/2 min-h-[400px] bg-cover bg-center"
              aria-label={cls.instructor.name}
              style={{ backgroundImage: `url("${cls.instructor.imageUrl}")` }}
            />
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <h4 className="text-3xl font-black uppercase italic dark:text-white mb-2">
                {cls.instructor.name}
              </h4>
              <p className="text-primary font-bold mb-6">{cls.instructor.title}</p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {cls.instructor.bio}
              </p>

              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-2xl font-black dark:text-white">{cls.instructor.yearsExp}</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500">Years Exp</p>
                </div>
                <div className="w-px bg-slate-200 dark:bg-white/10" />
                <div className="text-center">
                  <p className="text-2xl font-black dark:text-white">{cls.instructor.students}</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500">Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Classes Section */}
      <section className="bg-white dark:bg-background-dark py-24 px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-primary font-black uppercase tracking-[0.2em] mb-4 text-sm">
            More Options
          </h2>
          <h3 className="text-4xl font-black dark:text-white uppercase italic">
            Explore Other Classes
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {other.map((c) => (
            <Link
              key={c.slug}
              href={`/classes/${c.slug}`}
              className="group overflow-hidden rounded-xl border border-slate-100 dark:border-white/5 shadow-lg"
            >
              <div
                className="aspect-video bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                aria-label={c.heroImageAlt}
                style={{ backgroundImage: `url("${c.heroImageUrl}")` }}
              />
              <div className="p-8">
                <h4 className="text-xl font-black dark:text-white uppercase italic mb-2">
                  {c.name}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                  {c.seoDescription}
                </p>
                <div className="text-xs font-black uppercase tracking-widest text-primary group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  View Class{" "}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <span className="material-symbols-outlined text-[30rem]">sports_martial_arts</span>
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
          <h2 className="text-5xl font-black uppercase italic mb-6">Start Training Today</h2>
          <p className="text-lg font-medium mb-12 text-white/90">
            Join the elite community at Apex Martial Arts Academy. Your first trial session is on
            us!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-primary px-10 py-5 font-black uppercase tracking-widest rounded hover:scale-105 transition-transform shadow-xl">
              Join This Class
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-5 font-black uppercase tracking-widest rounded hover:bg-white hover:text-primary transition-all">
              Book Free Trial
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

