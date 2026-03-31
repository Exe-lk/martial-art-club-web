"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export default function ScrollReveal({
  children,
  className = "",
  threshold = 0.12,
  rootMargin = "0px 0px -12% 0px",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  // Important: clip overflow so the initial translated state
  // doesn't create an extra scrollbar during the reveal.
  return (
    <div ref={ref} className={["overflow-hidden", className].join(" ")}>
      <div
        className={[
          "transition-[opacity,transform] duration-700 ease-out will-change-transform",
          "motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}

