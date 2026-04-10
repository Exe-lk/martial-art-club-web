"use client";

import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";

export default function LandingFloatingButtons() {
  const t = useTranslations("Floating");
  const [showToTop, setShowToTop] = useState(false);

  const whatsAppHref = useMemo(() => {
    const text = encodeURIComponent(t("whatsappText"));
    return `https://wa.me/?text=${text}`;
  }, [t]);

  useEffect(() => {
    const onScroll = () => setShowToTop(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-10 bottom-10 z-[60] flex flex-col items-center gap-3">
      {showToTop ? (
        <button
          type="button"
          aria-label={t("backToTop")}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/30 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/60"
        >
          <span className="material-symbols-outlined">arrow_upward</span>
        </button>
      ) : null}
      <a
        href={whatsAppHref}
        target="_blank"
        rel="noreferrer"
        aria-label={t("whatsappAria")}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-lg shadow-black/30 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/60"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-6 w-6 fill-current"
        >
          <path d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.43 0 .05 5.37.05 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.9 11.9 0 0 0 5.84 1.49h.01c6.61 0 11.99-5.37 11.99-11.98 0-3.2-1.25-6.22-3.52-8.4ZM12.05 21.86h-.01a9.93 9.93 0 0 1-5.06-1.39l-.36-.21-3.68.97.98-3.59-.24-.37a9.92 9.92 0 0 1-1.55-5.29C2.13 6.48 6.57 2.05 12.06 2.05c2.65 0 5.14 1.03 7.02 2.9a9.86 9.86 0 0 1 2.9 7.02c0 5.49-4.44 9.89-9.93 9.89Zm5.45-7.43c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.11 4.51.71.31 1.27.5 1.7.64.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </div>
  );
}
