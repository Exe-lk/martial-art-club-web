"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";

type TestimonialId = "marcus" | "sarah" | "david" | "amina" | "ravi";

type Testimonial = {
  id: TestimonialId;
  accent: "primary" | "secondary";
};

const TESTIMONIALS: Testimonial[] = [
  { id: "marcus", accent: "primary" },
  { id: "sarah", accent: "secondary" },
  { id: "david", accent: "primary" },
  { id: "amina", accent: "secondary" },
  { id: "ravi", accent: "primary" },
];

function svgAvatarDataUri({
  name,
  accent,
}: {
  name: string;
  accent: Testimonial["accent"];
}) {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");

  const bg1 = accent === "primary" ? "#D62929" : "#1E3A8A";
  const bg2 = accent === "primary" ? "#7F1D1D" : "#0B1E4A";

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${bg1}"/>
      <stop offset="1" stop-color="${bg2}"/>
    </linearGradient>
  </defs>
  <rect width="160" height="160" rx="80" fill="url(#g)"/>
  <circle cx="80" cy="84" r="52" fill="rgba(0,0,0,0.18)"/>
  <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle"
        font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
        font-size="56" font-weight="800" fill="white" letter-spacing="2">
    ${initials}
  </text>
</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function TestimonialsSection() {
  const t = useTranslations("Testimonials");
  const tItem = useTranslations("Testimonials.items");
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  const perView = 3;
  const n = TESTIMONIALS.length;

  const trackItems = useMemo(() => {
    const head = TESTIMONIALS.slice(0, perView);
    const tail = TESTIMONIALS.slice(-perView);
    return [...tail, ...TESTIMONIALS, ...head];
  }, [perView]);

  const [pos, setPos] = useState(perView);
  const [isAnimating, setIsAnimating] = useState(true);
  const autoplayRef = useRef<number | null>(null);

  const activeIndex = (((pos - perView) % n) + n) % n;

  const goTo = (nextIndex: number) => {
    const normalized = ((nextIndex % n) + n) % n;
    setIsAnimating(true);
    setPos(perView + normalized);
  };

  const next = () => {
    setIsAnimating(true);
    setPos((p) => p + 1);
  };

  const prev = () => {
    setIsAnimating(true);
    setPos((p) => p - 1);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current != null) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const startAutoplay = () => {
    if (prefersReducedMotion) return;
    stopAutoplay();
    autoplayRef.current = window.setInterval(() => {
      setIsAnimating(true);
      setPos((p) => p + 1);
    }, 4500);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-background-dark py-24 px-6 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="pb-10 text-4xl font-black uppercase tracking-tighter leading-none text-slate-100 md:text-5xl">
          {t("title")}
        </h2>

        <div
          className="relative mx-auto max-w-7xl"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <button
            type="button"
            onClick={() => {
              stopAutoplay();
              prev();
              startAutoplay();
            }}
            aria-label={t("previous")}
            className="absolute -left-12 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/5 p-3 text-white ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white/10 lg:inline-flex"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          <button
            type="button"
            onClick={() => {
              stopAutoplay();
              next();
              startAutoplay();
            }}
            aria-label={t("next")}
            className="absolute -right-12 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/5 p-3 text-white ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white/10 lg:inline-flex"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          <div className="overflow-hidden">
            <div
              className="flex ease-out"
              style={{
                transform: `translateX(-${(pos - perView) * (100 / perView)}%)`,
                transition: isAnimating ? "transform 700ms ease-out" : "none",
              }}
              onTransitionEnd={() => {
                if (pos >= n + perView) {
                  setIsAnimating(false);
                  setPos(perView);
                } else if (pos < perView) {
                  setIsAnimating(false);
                  setPos(n + perView - 1);
                }
              }}
            >
              {trackItems.map((testimonial, idx) => {
                const id = testimonial.id;
                const name = tItem(`${id}.name`);
                const quote = tItem(`${id}.quote`);
                const role = tItem(`${id}.role`);
                const ratingLabel = tItem(`${id}.ratingLabel`);
                const avatarSrc = svgAvatarDataUri({
                  name,
                  accent: testimonial.accent,
                });
                const accentText =
                  testimonial.accent === "primary" ? "text-primary" : "text-secondary";

                return (
                  <div
                    key={`${testimonial.id}-${idx}`}
                    className="shrink-0 px-2"
                    style={{ flexBasis: `${100 / perView}%` }}
                  >
                    <article
                      className="rounded bg-[#0f172a] p-8 text-left ring-1 ring-white/10"
                      aria-label={t("ariaFrom", { name })}
                    >
                      <header className="mb-5 flex items-center gap-4">
                        <Image
                          src={avatarSrc}
                          alt={t("profileAlt", { name })}
                          width={48}
                          height={48}
                          className="h-12 w-12 rounded-full ring-2 ring-white/10"
                        />
                        <div className="min-w-0">
                          <h4 className="truncate text-sm font-black tracking-wide text-white uppercase">
                            {name}
                          </h4>
                          <div className="mt-1 flex flex-wrap items-center gap-3">
                            <span
                              className={`text-[10px] font-black tracking-widest uppercase ${accentText}`}
                            >
                              {role}
                            </span>
                            <div
                              className="text-sm text-primary"
                              aria-label={ratingLabel}
                              title={ratingLabel}
                            >
                              ★★★★★
                            </div>
                          </div>
                        </div>
                      </header>

                      <p className="text-base leading-relaxed text-slate-300 italic">
                        &quot;{quote}&quot;
                      </p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                aria-label={t("goTo", { n: idx + 1 })}
                onClick={() => {
                  stopAutoplay();
                  goTo(idx);
                  startAutoplay();
                }}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  idx === activeIndex ? "bg-primary" : "bg-white/20 hover:bg-white/35"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
