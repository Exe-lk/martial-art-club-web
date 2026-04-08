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

        <div className="flex flex-col gap-16 md:gap-24">
          {MEMBERSHIP_PLANS_SHOWCASE.map((plan, idx) => (
            <article
              key={plan.title}
              className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-0"
            >
              <div className="relative w-full md:w-1/2">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#141414] md:aspect-auto md:min-h-[280px] md:h-full">
                  <Image
                    src={plan.imageSrc}
                    alt={plan.imageAlt}
                    fill
                    className={`object-cover image-wipe ${reveal ? "image-wipe--show" : ""}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    quality={80}
                    style={{ ["--image-wipe-delay" as any]: `${idx * 140}ms` }}
                  />
                </div>
              </div>

              <div className="flex w-full flex-col justify-center px-0 md:w-1/2 md:pl-12 md:pr-4 lg:pl-16 lg:pr-8">
                <h3
                  className="text-2xl font-black uppercase tracking-tight text-primary md:text-4xl lg:text-[2.25rem] [text-shadow:0_0_24px_rgba(214,41,41,0.45)]"
                >
                  {plan.title}
                </h3>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white md:text-base">
                  {plan.description}
                </p>
                <div className="mt-8">
                  <Link
                    href={plan.ctaHref}
                    className="inline-flex items-center justify-center border border-primary px-8 py-3 text-xs font-black uppercase tracking-[0.28em] text-primary transition-colors hover:bg-primary/10"
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
