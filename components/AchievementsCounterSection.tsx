"use client";

import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";

type CounterItem = {
  icon: string;
  value: string;
  labelKey: "medals" | "champions" | "students" | "years";
};

const COUNTERS: CounterItem[] = [
  { icon: "military_tech", value: "50+", labelKey: "medals" },
  { icon: "rewarded_ads", value: "20+", labelKey: "champions" },
  { icon: "person_celebrate", value: "1000+", labelKey: "students" },
  { icon: "history_edu", value: "15+", labelKey: "years" },
];

export default function AchievementsCounterSection() {
  const t = useTranslations("Achievements");
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const parsed = useMemo(() => {
    return COUNTERS.map((c) => {
      const match = c.value.match(/(\d[\d,]*)\s*(\+)?/);
      const numberPart = match?.[1] ?? "0";
      const suffix = match?.[2] ?? "";
      const target = Number(numberPart.replaceAll(",", "")) || 0;
      return { ...c, target, suffix };
    });
  }, []);

  const [displayed, setDisplayed] = useState<number[]>(() =>
    parsed.map(() => 0),
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;

    const durationMs = 3000;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const tEase = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - tEase, 3);

      setDisplayed(parsed.map((p) => Math.round(p.target * eased)));

      if (tEase < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [parsed, shouldAnimate]);

  return (
    <section ref={sectionRef} className="bg-black py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-center">
          {parsed.map((item, idx) => (
            <div key={item.labelKey} className="flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-white text-5xl">
                {item.icon}
              </span>
              <div className="text-red-600 text-4xl md:text-5xl font-black italic">
                {(displayed[idx] ?? 0).toLocaleString()}
                {item.suffix}
              </div>
              <p className="text-white uppercase tracking-widest text-xs font-bold">
                {t(item.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
