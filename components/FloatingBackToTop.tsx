"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/** Home route renders `LandingFloatingButtons` with combined back-to-top + WhatsApp. */
function isLocaleHomePath(pathname: string | null) {
  if (!pathname) return false;
  return /^\/(en|si)\/?$/.test(pathname);
}

export default function FloatingBackToTop() {
  const pathname = usePathname();
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowToTop(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isLocaleHomePath(pathname)) return null;
  if (!showToTop) return null;

  return (
    <div className="fixed right-10 bottom-10 z-[60] flex flex-col items-center gap-3">
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/30 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/60"
      >
        <span className="material-symbols-outlined">arrow_upward</span>
      </button>
    </div>
  );
}

