import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

/**
 * Runs next-intl only for locale-prefixed routes and `/`.
 * Non-prefixed routes (e.g. `/contact`) remain as-is for now.
 */
export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isIntlRoute =
    pathname === "/" || pathname.startsWith("/en") || pathname.startsWith("/si");

  if (isIntlRoute) {
    return intlMiddleware(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
