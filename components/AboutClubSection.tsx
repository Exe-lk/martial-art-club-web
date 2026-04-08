"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export default function AboutClubSection() {
  const t = useTranslations("About");
  const imageAreaRef = useRef<HTMLDivElement | null>(null);
  const [revealImage, setRevealImage] = useState(false);

  useEffect(() => {
    const el = imageAreaRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setRevealImage(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="grid grid-cols-1 overflow-hidden bg-[#000000] text-white md:grid-cols-2 md:max-h-[85svh] ml-30"
    >
      <div className="flex flex-col justify-center bg-[#000000] px-6 py-10 md:pl-10 md:pr-[10px] md:py-12 lg:pl-16 lg:pr-[10px] lg:py-14 mt-10">
        <div className="ml-auto max-w-2xl text-right">
          <span className="mb-4 inline-block text-xs font-black tracking-[0.3em] text-secondary uppercase">
            {t("eyebrow")}
          </span>
          <h2 className=" text-2xl font-black uppercase tracking-tight leading-tight md:text-3xl lg:text-4xl">
            {t("titleLine1")} <br />
            <span className="">{t("titleLine2")}</span> {t("titleLine3")}
          </h2>
          <p className="mt-5 leading-relaxed text-slate-300 md:text-lg">{t("body")}</p>
        </div>
      </div>

      <div
        ref={imageAreaRef}
        className="relative flex items-center justify-start overflow-hidden bg-[#000000] px-6 py-10 md:pl-[10px] md:pr-10 md:py-12 lg:pl-[10px] lg:pr-16 lg:py-14"
      >
        <div className="relative w-full max-w-md">
          <Image
            alt={t("kungFuAlt")}
            className={`h-auto w-full object-contain about-image-slide ${revealImage ? "about-image-slide--show" : ""}`}
            src="/logos/kun-fu.png"
            width={520}
            height={520}
            priority
            style={{ ["--about-slide-delay" as string]: "140ms" }}
          />
        </div>
      </div>
    </section>
  );
}
