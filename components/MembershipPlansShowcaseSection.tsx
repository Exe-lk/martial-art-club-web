"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

import { MEMBERSHIP_PLANS_SHOWCASE } from "@/data/membershipPlansShowcase";

export default function MembershipPlansShowcaseSection() {
  const t = useTranslations("Membership");
  const sectionRef = useRef<HTMLElement | null>(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setReveal(true);
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
      ref={sectionRef}
      id="membership"
      className="bg-black py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <header className="mb-16 text-center md:mb-20">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white md:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm text-slate-400 md:text-base">
            {t("subtitle")}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
          {MEMBERSHIP_PLANS_SHOWCASE.map((plan, idx) => (
            <article
              key={plan.title}
              className="flex h-full flex-col overflow-hidden border border-white/10 bg-white/5"
            >
              <div className="relative w-full">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#141414]">
                  <Image
                    src={plan.imageSrc}
                    alt={plan.imageAlt}
                    fill
                    className={`object-cover image-wipe ${reveal ? "image-wipe--show" : ""}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
                    loading="lazy"
                    quality={80}
                    style={{ ["--image-wipe-delay" as any]: `${idx * 140}ms` }}
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-7 pt-6">
                <h3 className="text-xl font-black uppercase tracking-tight text-primary md:text-2xl [text-shadow:0_0_24px_rgba(214,41,41,0.45)]">
                  {plan.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/90 md:text-sm">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={plan.ctaHref}
                    className="inline-flex w-full items-center justify-center border border-primary px-8 py-3 text-xs font-black uppercase tracking-[0.28em] text-white rounded-md transition-colors hover:bg-primary/10 bg-primary"
                  >
                    {plan.ctaLabel}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
