import Image from "next/image";
import Link from "next/link";

type MembershipPlan = {
  id: "basic" | "standard" | "elite";
  name: string;
  price: string;
  bestFor: string;
  benefits: string[];
  access: string[];
  accentClass: string;
};

const PLANS: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic Plan",
    price: "LKR 6,500 / month",
    bestFor: "Beginners who want to start martial arts training with essential access.",
    benefits: [
      "3 training sessions per week",
      "Access to beginner classes",
      "Basic fitness training support",
      "Instructor guidance",
      "Standard academy facility access",
    ],
    access: [
      "Jeet Kune Do beginner sessions",
      "Selected Kung Fu classes",
      "Shared training area access",
    ],
    accentClass: "text-slate-200",
  },
  {
    id: "standard",
    name: "Standard Plan",
    price: "LKR 9,500 / month",
    bestFor: "Students who want regular training and better flexibility.",
    benefits: [
      "5 training sessions per week",
      "Access to beginner and intermediate classes",
      "Martial arts fitness sessions",
      "Technique improvement support",
      "Priority class booking",
      "Standard equipment area access",
    ],
    access: [
      "Jeet Kune Do classes",
      "Kung Fu classes",
      "Wushu foundation sessions",
      "Fitness and conditioning area",
    ],
    accentClass: "text-primary",
  },
  {
    id: "elite",
    name: "Elite Plan",
    price: "LKR 14,500 / month",
    bestFor: "Dedicated members who want full access and faster progress.",
    benefits: [
      "Unlimited weekly training sessions",
      "Access to all class levels",
      "Advanced coaching support",
      "Strength and conditioning sessions",
      "Priority access to workshops",
      "Full facility access",
      "Special member event access",
    ],
    access: [
      "Jeet Kune Do full program",
      "Kung Fu full program",
      "Wushu full program",
      "Conditioning and fitness area",
      "Selected academy special training sessions",
    ],
    accentClass: "text-[#d62929]",
  },
];

function PlanCard({ plan }: { plan: MembershipPlan }) {
  return (
    <div className="relative overflow-hidden border border-white/10 bg-[#141414] p-10 shadow-2xl transition-all duration-300 hover:bg-[#1f1f1f]">
      <span className="text-xs font-black uppercase tracking-[0.28em] text-slate-400">
        {plan.name}
      </span>
      <div className="mt-4 flex items-baseline gap-2">
        <span className={`text-4xl font-black tracking-tight ${plan.accentClass}`}>{plan.price}</span>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-slate-300">{plan.bestFor}</p>

      <div className="mt-10">
        <Link
          href={`#${plan.id}`}
          className="inline-flex w-full items-center justify-center border border-primary px-8 py-4 text-xs font-black uppercase tracking-[0.28em] text-primary transition-colors hover:bg-primary/10"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}

function PlanDetail({ plan }: { plan: MembershipPlan }) {
  return (
    <section id={plan.id} className="scroll-mt-24 border-t border-white/10 py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="flex h-full flex-col">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
            {plan.name}
          </h2>
          <p className={`mt-3 text-xl font-black tracking-tight ${plan.accentClass}`}>{plan.price}</p>

          <div className="mt-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Best for</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">{plan.bestFor}</p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary px-8 py-4 text-xs font-black uppercase tracking-[0.28em] text-white transition-colors hover:bg-primary/90"
            >
              Join now
            </Link>
            <Link
              href="#top"
              className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-xs font-black uppercase tracking-[0.28em] text-white transition-colors hover:bg-white/5"
            >
              Back to top
            </Link>
          </div>

          <div className="mt-22">
            <div className="flex items-center gap-6">
              <Image
                src="/logos/JeetKuneDo.svg"
                alt="Jeet Kune Do logo"
                width={192}
                height={192}
                className="h-30 w-auto opacity-90"
              />
              <Image
                src="/logos/kun-fu.png"
                alt="Kung Fu logo"
                width={192}
                height={192}
                className="h-30 w-auto object-contain opacity-90"
              />
              <Image
                src="/logos/wushu.png"
                alt="Wushu logo"
                width={192}
                height={192}
                className="h-30 w-auto object-contain opacity-90"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-10">
          <div className="border border-white/10 bg-[#0f0f0f] p-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Benefits</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-200">
              {plan.benefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[2px] h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-white/10 bg-[#0f0f0f] p-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Access</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-200">
              {plan.access.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[2px] h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MembershipsPage() {
  return (
    <main id="top" className="bg-black text-white">
      {/* Hero */}
      <section
        className="relative grid min-h-[480px] grid-cols-1 overflow-hidden lg:min-h-[76vh] lg:grid-cols-2"
        aria-labelledby="memberships-hero-heading"
      >
        <div className="relative min-h-[320px] lg:min-h-0">
          <Image
            src="/gallery/training/taining-time2.jpg"
            alt="Martial arts training at the academy"
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
            <p className="text-xs font-black tracking-[0.35em] text-primary uppercase">
              Black Dragon
            </p>
            <h1
              id="memberships-hero-heading"
              className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white uppercase sm:text-5xl md:text-6xl"
            >
              Membership <span className="text-primary">Plans</span>
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-relaxed text-slate-200 md:text-base">
              Choose the plan that matches your training rhythm. Compare pricing, benefits, and access for each option.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row">
              <Link
                href="#plans"
                className="transform border-2 border-primary bg-primary px-8 py-4 text-sm font-black tracking-widest text-white uppercase transition-transform active:scale-95"
              >
                View plans
              </Link>
              <Link
                href="/contact"
                className="transform border-2 border-secondary px-8 py-4 text-sm font-black tracking-widest text-white uppercase transition-transform hover:bg-secondary/10 active:scale-95"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section id="plans" className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white md:text-5xl">
            Pick your plan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 md:text-base">
            Three options — from essential access to full academy experience.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto max-w-[1400px] px-4 pb-20 md:px-8 md:pb-28">
        {PLANS.map((plan) => (
          <PlanDetail key={plan.id} plan={plan} />
        ))}
      </section>
    </main>
  );
}

