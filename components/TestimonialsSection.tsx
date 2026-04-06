 "use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Testimonial = {
  name: string;
  quote: string;
  ratingLabel: string;
  role: string;
  accent: "primary" | "secondary";
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marcus Sterling",
    ratingLabel: "5 out of 5 stars",
    quote:
      "Joining Apex was the best decision for my fitness and focus. The coaches are world-class and really push you to your limits.",
    role: "Working Professional",
    accent: "primary",
  },
  {
    name: "Sarah Jenkins",
    ratingLabel: "5 out of 5 stars",
    quote:
      "As a woman, the self-defense classes here gave me so much confidence. It’s a very supportive and respectful environment.",
    role: "Self-Defense Student",
    accent: "secondary",
  },
  {
    name: "David Chen",
    ratingLabel: "5 out of 5 stars",
    quote:
      "The BJJ program is incredible. Technique focus is high, and the community is like a second family to me now.",
    role: "Grappling Enthusiast",
    accent: "primary",
  },
  {
    name: "Amina Perera",
    ratingLabel: "5 out of 5 stars",
    quote:
      "The coaching style is detailed and patient. My stamina, timing, and confidence improved within weeks—especially during pad work.",
    role: "Beginner to Intermediate",
    accent: "secondary",
  },
  {
    name: "Ravi Dissanayake",
    ratingLabel: "5 out of 5 stars",
    quote:
      "Great energy, disciplined training, and a welcoming community. The classes feel structured and safe while still pushing you to grow.",
    role: "Fitness & Technique",
    accent: "primary",
  },
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

  // Position in trackItems. Start at the first "real" item (after the prepended tail).
  const [pos, setPos] = useState(perView);
  const [isAnimating, setIsAnimating] = useState(true);
  const autoplayRef = useRef<number | null>(null);

  const activeIndex = ((pos - perView) % n + n) % n;

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
          The Warrior&apos;s Voice
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
            aria-label="Previous review"
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
            aria-label="Next review"
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
                // Seamless wrap: when we slide into cloned edges, jump back to the real track.
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
                const avatarSrc = svgAvatarDataUri({
                  name: testimonial.name,
                  accent: testimonial.accent,
                });
                const accentText =
                  testimonial.accent === "primary" ? "text-primary" : "text-secondary";

                return (
                  <div
                    key={`${testimonial.name}-${idx}`}
                    className="shrink-0 px-2"
                    style={{ flexBasis: `${100 / perView}%` }}
                  >
                    <article
                      className="rounded bg-[#0f172a] p-8 text-left ring-1 ring-white/10"
                      aria-label={`Testimonial from ${testimonial.name}`}
                    >
                      <header className="mb-5 flex items-center gap-4">
                        <Image
                          src={avatarSrc}
                          alt={`Profile picture of ${testimonial.name}`}
                          width={48}
                          height={48}
                          className="h-12 w-12 rounded-full ring-2 ring-white/10"
                        />
                        <div className="min-w-0">
                          <h4 className="truncate text-sm font-black tracking-wide text-white uppercase">
                            {testimonial.name}
                          </h4>
                          <div className="mt-1 flex flex-wrap items-center gap-3">
                            <span className={`text-[10px] font-black tracking-widest uppercase ${accentText}`}>
                              {testimonial.role}
                            </span>
                            <div
                              className="text-sm text-primary"
                              aria-label={testimonial.ratingLabel}
                              title={testimonial.ratingLabel}
                            >
                              ★★★★★
                            </div>
                          </div>
                        </div>
                      </header>

                      <p className="text-base leading-relaxed text-slate-300 italic">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Go to review ${idx + 1}`}
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

