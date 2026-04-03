type Plan = {
  name: string;
  priceLkrPerMonth: string;
  features: { label: string; available: boolean }[];
  popular?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Beginner",
    priceLkrPerMonth: "5,000",
    features: [
      { label: "2 Classes per week", available: true },
      { label: "Basic Gi included", available: true },
      { label: "Standard facility access", available: true },
      { label: "1-on-1 coaching session", available: false },
    ],
  },
  {
    name: "Standard",
    priceLkrPerMonth: "8,000",
    popular: true,
    features: [
      { label: "4 Classes per week", available: true },
      { label: "Standard Gi included", available: true },
      { label: "Full facility access", available: true },
      { label: "Access to all open sessions", available: true },
    ],
  },
  {
    name: "Professional",
    priceLkrPerMonth: "12,000",
    features: [
      { label: "Unlimited Classes", available: true },
      { label: "Pro Gear kit included", available: true },
      { label: "Priority facility access", available: true },
      { label: "1-on-1 coaching session", available: true },
    ],
  },
];

export default function MembershipPlansSection() {
  return (
    <section id="membership" className="bg-white dark:bg-background-dark py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 dark:text-white">
            Membership Plans
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Flexible options tailored to your commitment and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan) => {
            const featured = plan.popular === true;
            return (
              <div
                key={plan.name}
                className={
                  featured
                    ? "border-2 border-primary p-10 flex flex-col items-center text-center relative scale-105 bg-white dark:bg-white/5 shadow-xl"
                    : "border border-slate-200 dark:border-white/10 p-10 flex flex-col items-center text-center"
                }
              >
                {featured ? (
                  <div className="absolute -top-4 bg-primary text-white text-[10px] font-black uppercase px-4 py-1 tracking-tighter">
                    Most Popular
                  </div>
                ) : null}

                <span
                  className={
                    featured
                      ? "text-primary font-bold uppercase text-xs tracking-widest mb-2"
                      : "text-slate-500 dark:text-slate-400 font-bold uppercase text-xs tracking-widest mb-2"
                  }
                >
                  {plan.name}
                </span>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black dark:text-white">{plan.priceLkrPerMonth}</span>
                  <span className="text-sm font-bold text-slate-500">LKR/MO</span>
                </div>

                <ul className="space-y-4 mb-10 text-slate-600 dark:text-slate-300 text-sm">
                  {plan.features.map((f) => (
                    <li
                      key={f.label}
                      className={
                        f.available
                          ? undefined
                          : "line-through opacity-30 text-slate-400 dark:text-slate-400"
                      }
                    >
                      {f.label}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="w-full bg-primary text-white font-bold py-4 uppercase rounded hover:bg-primary/90 transition-all"
                >
                  Select Plan
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

