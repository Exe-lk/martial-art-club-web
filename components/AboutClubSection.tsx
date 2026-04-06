"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutClubSection() {
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
      { threshold: 0.22 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="grid grid-cols-1 overflow-hidden bg-background-dark text-white md:grid-cols-2 md:max-h-[85svh] ml-30">
      <div className="flex flex-col justify-center bg-background-dark px-6 py-10 md:pl-10 md:pr-[10px] md:py-12 lg:pl-16 lg:pr-[10px] lg:py-14 mt-10">
        <div className="ml-auto max-w-2xl text-right">
          <span className="mb-4 inline-block text-xs font-black tracking-[0.3em] text-secondary uppercase">
            About us
          </span>
          <h2 className="text-2xl font-black uppercase tracking-tight leading-tight md:text-3xl lg:text-4xl">
            BLACK DRAGON JEET KUNE DO{" "}<br></br>
            <span className="text-primary">Sri Lanka’s #1 Martial Arts</span> Training Academ
          </h2>
          <p className="mt-5 leading-relaxed text-slate-300 md:text-lg">
            Black Dragon Jeet Kune Do is Sri Lanka’s #1 martial arts training
            academy, dedicated to developing strength, discipline, and confidence
            through world-class training. Specializing in Jeet Kune Do, Kung Fu,
            and Wushu, the academy blends traditional techniques with modern
            combat principles.
          </p>
        </div>
      </div>

      <div
        ref={imageAreaRef}
        className="relative flex items-center justify-start overflow-hidden bg-background-dark px-6 py-10 md:pl-[10px] md:pr-10 md:py-12 lg:pl-[10px] lg:pr-16 lg:py-14"
      >
        <div className="relative w-full max-w-md">
          <Image
            alt="Kung Fu logo"
            className={`h-auto w-full object-contain about-image-slide ${revealImage ? "about-image-slide--show" : ""}`}
            src="/logos/kun-fu.png"
            width={520}
            height={520}
            priority
            style={{ ["--about-slide-delay" as any]: "140ms" }}
          />
        </div>
      </div>
    </section>
  );
}

