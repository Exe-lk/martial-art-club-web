"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

export default function NavigationBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/classes", label: "Classes" },
      { href: "/schedule", label: "Schedule" },
      { href: "/contact", label: "Contact us" },
      { href: "/blog", label: "Blog" },
    ],
    [],
  );

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#000000] px-6 py-4 backdrop-blur-md lg:px-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl text-primary">
            sports_martial_arts
          </span>
          <span className="text-xl font-bold tracking-tighter text-white uppercase">
            Black Dragon <span className="text-primary"> Jeet Kune Do</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className={[
                "text-sm font-medium transition-colors hover:text-primary",
                item.href === "/"
                  ? pathname === "/"
                    ? "text-primary"
                    : "text-white/80"
                  : pathname.startsWith(item.href)
                    ? "text-primary"
                    : "text-white/80",
              ].join(" ")}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}

          <button className="rounded bg-primary px-6 py-2 text-sm font-bold tracking-wider text-white uppercase transition-all hover:bg-red-700">
            Join the Club
          </button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={[
          "md:hidden",
          mobileOpen ? "block" : "hidden",
          "mx-auto mt-4 max-w-7xl border-t border-white/10 pt-4",
        ].join(" ")}
      >
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={[
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10",
                item.href === "/"
                  ? pathname === "/"
                    ? "text-primary"
                    : "text-white/85 hover:text-white"
                  : pathname.startsWith(item.href)
                    ? "text-primary"
                    : "text-white/85 hover:text-white",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}

          <button
            type="button"
            className="mt-2 rounded bg-primary px-6 py-3 text-sm font-bold tracking-wider text-white uppercase transition-all hover:bg-red-700"
            onClick={() => setMobileOpen(false)}
          >
            Join the Club
          </button>
        </div>
      </div>
    </header>
  );
}

