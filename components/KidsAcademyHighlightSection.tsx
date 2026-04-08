import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function KidsAcademyHighlightSection() {
  const t = await getTranslations("KidsAcademy");

  return (
    <section className="relative overflow-hidden py-20 text-white">
      <Image
        className="object-cover"
        src="/classs-martial-art.jpg"
        alt="Kids academy martial arts training"
        fill
        sizes="100vw"
        loading="lazy"
        quality={75}
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black tracking-tight uppercase md:text-5xl">{t("title")}</h2>
          <p className="mt-4 text-sm text-slate-200 md:text-base">{t("description")}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/kids-academy"
              className="animated-gradient-border inline-flex items-center justify-center gap-2 rounded-2xl px-10 py-4 text-sm font-black tracking-[0.22em] text-white uppercase shadow-lg transition-transform active:scale-[0.98]"
            >
              {t("learnMore")}
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
