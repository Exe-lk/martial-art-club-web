type CounterItem = {
  icon: string;
  value: string;
  label: string;
};

const COUNTERS: CounterItem[] = [
  { icon: "military_tech", value: "50+", label: "Tournament Medals" },
  { icon: "rewarded_ads", value: "20+", label: "National Champions" },
  { icon: "person_celebrate", value: "1000+", label: "Students Trained" },
  { icon: "history_edu", value: "15+", label: "Years of Excellence" },
];

export default function AchievementsCounterSection() {
  return (
    <section className="bg-white py-16 md:py-20 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-center">
          {COUNTERS.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-warrior-blue text-5xl">
                {item.icon}
              </span>
              <div className="text-blue-900 text-4xl md:text-5xl font-black italic">
                {item.value}
              </div>
              <p className="text-black uppercase tracking-widest text-xs font-bold">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

