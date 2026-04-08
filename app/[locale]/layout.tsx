import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Noto_Sans_Sinhala } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { routing } from "@/i18n/routing";

const notoSinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  display: "swap",
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div
        className={locale === "si" ? notoSinhala.className : undefined}
        lang={locale}
      >
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
