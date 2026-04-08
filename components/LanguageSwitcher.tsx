"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import { routing } from "@/i18n/routing";

const locales = routing.locales;

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const switchLocale = (next: (typeof locales)[number]) => {
    if (next === locale) return;

    const segments = pathname.split("/").filter(Boolean);
    const first = segments[0];

    if (first && locales.includes(first as (typeof locales)[number])) {
      segments[0] = next;
      router.push(`/${segments.join("/")}`);
      return;
    }

    router.push(`/${next}`);
  };

  return (
    <div
      className="flex items-center gap-1 rounded-lg border border-white/15 bg-black/70 p-1 shadow-lg backdrop-blur-md"
      role="group"
      aria-label="Language"
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchLocale(code)}
          className={[
            "min-w-[2.5rem] rounded-md px-2.5 py-1.5 text-xs font-black uppercase tracking-wider transition-colors",
            code === locale
              ? "bg-primary text-white"
              : "text-white/75 hover:bg-white/10 hover:text-white",
          ].join(" ")}
          aria-pressed={code === locale}
          aria-label={code === "en" ? "English" : "සිංහල"}
        >
          {code === "en" ? "EN" : "SI"}
        </button>
      ))}
    </div>
  );
}
