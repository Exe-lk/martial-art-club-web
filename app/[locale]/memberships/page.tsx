"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";

type MembershipPlan = {
  id: "basic" | "standard" | "elite";
  name: string;
  price: string;
  bestFor: string;
  benefits: string[];
  access: string[];
  accentClass: string;
};

function PlanCard({ plan }: { plan: MembershipPlan }) {
  const t = useTranslations("MembershipPage");
  const isRecommended = plan.id === "standard";
  const features = useMemo(
    () => [...plan.benefits, ...plan.access].slice(0, 7),
    [plan.benefits, plan.access],
  );

  return (
    <article
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-[#0f0f0f]/80 p-8 shadow-2xl transition-transform duration-300 ease-out will-change-transform",
        "border-white/10 hover:-translate-y-1 hover:scale-[1.03] focus-within:-translate-y-1 focus-within:scale-[1.03]",
        "hover:bg-[#141414]",
        isRecommended ? "ring-1 ring-primary/40" : "",
      ].join(" ")}
    >
      {isRecommended ? (
        <div className="absolute right-5 top-5 rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-primary">
          Recommended
        </div>
      ) : null}

      <header className="flex items-center justify-between gap-4">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-slate-400">
          {plan.name}
        </span>
      </header>

      <div className="mt-5 flex items-end gap-2">
        <span className={`text-4xl font-black tracking-tight ${plan.accentClass}`}>
          {plan.price}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-300">{plan.bestFor}</p>

      <div className="mt-7">
        <Link
          href="/contact"
          className={[
            "inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-xs font-black uppercase tracking-[0.28em] transition-colors",
            isRecommended
              ? "bg-primary text-white hover:bg-primary/90"
              : "border border-white/15 text-white hover:bg-white/5",
          ].join(" ")}
        >
          {t("subscribeNow")}
        </Link>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6">
        <ul className="space-y-3 text-sm text-slate-200/95">
          {features.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className={[
                  "mt-[2px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                  isRecommended ? "border-primary/35 text-primary" : "border-white/15 text-white/80",
                ].join(" ")}
                aria-hidden="true"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                  <path
                    fillRule="evenodd"
                    d="M16.704 5.296a1 1 0 0 1 0 1.414l-7.1 7.1a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 1 1 1.414-1.414l2.793 2.793 6.393-6.393a1 1 0 0 1 1.414 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function PlanDetail({ plan }: { plan: MembershipPlan }) {
  const t = useTranslations("MembershipPage");

  return (
    <section id={plan.id} className="scroll-mt-24 border-t border-white/10 py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="flex h-full flex-col">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
            {plan.name}
          </h2>
          <p className={`mt-3 text-xl font-black tracking-tight ${plan.accentClass}`}>
            {plan.price}
          </p>

          <div className="mt-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
              {t("bestForTitle")}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
              {plan.bestFor}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary px-8 py-4 text-xs font-black uppercase tracking-[0.28em] text-white transition-colors hover:bg-primary/90"
            >
              {t("joinNow")}
            </Link>
            <Link
              href="#top"
              className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-xs font-black uppercase tracking-[0.28em] text-white transition-colors hover:bg-white/5"
            >
              {t("backToTop")}
            </Link>
          </div>

          <div className="mt-22">
            <div className="flex items-center gap-6">
              <Image
                src="/logos/JeetKuneDo.svg"
                alt={t("logos.jkdAlt")}
                width={192}
                height={192}
                className="h-30 w-auto opacity-90"
              />
              <Image
                src="/logos/kun-fu.png"
                alt={t("logos.kungfuAlt")}
                width={192}
                height={192}
                className="h-30 w-auto object-contain opacity-90"
              />
              <Image
                src="/logos/wushu.png"
                alt={t("logos.wushuAlt")}
                width={192}
                height={192}
                className="h-30 w-auto object-contain opacity-90"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-10">
          <div className="border border-white/10 bg-[#0f0f0f] p-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
              {t("benefitsTitle")}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-200">
              {plan.benefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[2px] h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-white/10 bg-[#0f0f0f] p-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
              {t("accessTitle")}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-200">
              {plan.access.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[2px] h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LocalizedMembershipsPage() {
  const locale = useLocale();
  const t = useTranslations("MembershipPage");

  const plans = useMemo<MembershipPlan[]>(() => {
    const plan = (id: MembershipPlan["id"]) => ({
      id,
      name: t(`plans.${id}.name`),
      price: t(`plans.${id}.price`),
      bestFor: t(`plans.${id}.bestFor`),
      benefits: t.raw(`plans.${id}.benefits`) as string[],
      access: t.raw(`plans.${id}.access`) as string[],
      accentClass:
        id === "basic"
          ? "text-slate-200"
          : id === "standard"
            ? "text-primary"
            : "text-[#d62929]",
    });

    return [plan("basic"), plan("standard"), plan("elite")];
  }, [t]);

  return (
    <main id="top" className="bg-black text-white">
      <section
        className="relative grid min-h-[480px] grid-cols-1 overflow-hidden lg:min-h-[76vh] lg:grid-cols-2"
        aria-labelledby="memberships-hero-heading"
      >
        <div className="relative min-h-[320px] lg:min-h-0">
          <Image
            src="/gallery/training/taining-time2.jpg"
            alt={t("heroLeftAlt")}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-black/25" />
        </div>

        <div className="relative min-h-[320px] lg:min-h-0">
          <Image
            src="/dragon.jpg"
            alt={t("heroRightAlt")}
            fill
            priority
            className="object-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/80 to-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

            <h1
              id="memberships-hero-heading"
              className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white uppercase sm:text-5xl md:text-6xl"
            >
              {t.rich("heroTitle", {
                accent: (chunks) => <span className="text-primary">{chunks}</span>,
              })}
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-relaxed text-slate-200 md:text-base">
              {t("heroSubtitle")}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row">

            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white md:text-5xl">
            {t("plansTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 md:text-base">
            {t("plansSubtitle")}
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      <div className="sr-only" aria-hidden="true">
        {locale}
      </div>
    </main>
  );
}

