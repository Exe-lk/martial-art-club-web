"use client";

import { useEffect, useMemo, useState } from "react";

export default function LandingFloatingButtons() {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowToTop(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsAppHref = useMemo(() => {
    const text = encodeURIComponent("Hello! I’d like to know more.");
    return `https://wa.me/?text=${text}`;
  }, []);

  return (
    <div className="fixed right-10 bottom-10 z-[60] flex flex-col items-center gap-3">
      <a
        href={whatsAppHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/60"
      >
        <span className="material-symbols-outlined">chat</span>
      </a>

      {showToTop ? (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/30 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/60"
        >
          <span className="material-symbols-outlined">arrow_upward</span>
        </button>
      ) : null}
    </div>
  );
}

