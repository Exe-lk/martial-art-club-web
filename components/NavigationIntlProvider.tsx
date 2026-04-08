"use client";

import { NextIntlClientProvider } from "next-intl";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import NavigationBar from "@/components/NavigationBar";
import { routing } from "@/i18n/routing";

import en from "@/messages/en.json";
import si from "@/messages/si.json";

const messagesByLocale = {
  en,
  si,
} as const;

export default function NavigationIntlProvider() {
  const pathname = usePathname();

  const locale = useMemo(() => {
    const first = pathname.split("/").filter(Boolean)[0];
    if (
      first &&
      routing.locales.includes(first as (typeof routing.locales)[number])
    ) {
      return first as (typeof routing.locales)[number];
    }
    return routing.defaultLocale;
  }, [pathname]);

  const messages = messagesByLocale[locale];

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <NavigationBar />
    </NextIntlClientProvider>
  );
}
