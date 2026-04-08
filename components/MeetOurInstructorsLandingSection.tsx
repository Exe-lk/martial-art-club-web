import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function MeetOurInstructorsLandingSection() {
  const t = await getTranslations("Instructors");

  return (
    <section
      className="bg-[#000000] px-6 py-16 text-white md:py-20"
      id="instructors"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="absolute -top-4 -left-4 h-20 w-20 border-t-4 border-l-4 border-primary" />
          <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#141414] shadow-2xl">
            <Image
              src="/gallery/martial-art-coaches.jpg"
              alt={t("imageAlt")}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 h-20 w-20 border-b-4 border-r-4 border-secondary" />
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <span className="block text-sm font-black tracking-widest text-primary uppercase">
              {t("eyebrow")}
            </span>
            <h2 className="text-4xl font-black tracking-tight uppercase md:text-5xl">{t("title")}</h2>
          </div>

          <p className="text-base font-medium leading-relaxed text-slate-400 md:text-lg">
            {t("description")}
          </p>

          <div className="pt-2">
            <Link
              href="/coaches"
              className="animated-gradient-border inline-flex items-center justify-center gap-2 rounded-2xl px-10 py-4 text-sm font-black tracking-[0.22em] text-white uppercase shadow-lg transition-transform active:scale-[0.98]"
            >
              {t("meetTeam")}
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
