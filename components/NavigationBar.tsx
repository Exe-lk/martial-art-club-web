"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavItem = {
  href: string;
  label: string;
  children?: Array<{ href: string; label: string }>;
};

export default function NavigationBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(
    null,
  );
  const [hiddenOnScroll, setHiddenOnScroll] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpenDesktopDropdown(null);
  }, [pathname]);

  useEffect(() => {
    // Auto-hide on scroll down, show on scroll up.
    // Keep visible when mobile menu is open to avoid trapping navigation.
    if (mobileOpen) {
      setHiddenOnScroll(false);
      return;
    }

    let lastY = window.scrollY;
    let ticking = false;
    const delta = 8;

    const onScroll = () => {
      const y = window.scrollY;
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const diff = y - lastY;

        if (y <= 4) {
          setHiddenOnScroll(false);
        } else if (diff > delta) {
          setHiddenOnScroll(true);
        } else if (diff < -delta) {
          setHiddenOnScroll(false);
        }

        lastY = y;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  const navItems: NavItem[] = useMemo(
    () => [
      { href: "/", label: "Home" },
      {
        href: "/about",
        label: "About",
        children: [
          { href: "/about", label: "Our Story" },
          { href: "/schedule", label: "Schedule" },
          { href: "/gallery", label: "Gallery" },
          { href: "/events", label: "Events" },
          { href: "/coaches", label: "Coach & Team" },
          { href: "/facilities", label: "Facilities" },
        ],
      },
      { href: "/memberships", label: "Prices" },
      {
        href: "/classes",
        label: "Classes",
        children: [
          { href: "/classes", label: "Classes overview" },
          { href: "/kids-academy", label: "Kids Academy" },
        ],
      },
      { href: "/contact", label: "Contact us" },
      { href: "/blog", label: "Blog" },
    ],
    [],
  );

  const isItemActive = (item: NavItem) => {
    if (item.href === "/") return pathname === "/";
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  };

  return (
    <header
      className={[
        "fixed top-0 z-50 w-full border-b border-white/10 bg-[#000000] px-6 py-5 backdrop-blur-md transition-transform duration-300 will-change-transform lg:px-20",
        hiddenOnScroll ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
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
          {navItems.map((item) => {
            const active = isItemActive(item);

            if (!item.children?.length) {
              return (
                <Link
                  key={item.href}
                  className={[
                    "text-base font-medium transition-colors hover:text-primary",
                    active ? "text-primary" : "text-white/80",
                  ].join(" ")}
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.href}
                className="group relative"
                onMouseEnter={() => setOpenDesktopDropdown(item.href)}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={[
                    "inline-flex items-center gap-1 text-base font-medium transition-colors hover:text-primary",
                    active ? "text-primary" : "text-white/80",
                  ].join(" ")}
                  aria-haspopup="menu"
                  aria-expanded={openDesktopDropdown === item.href}
                >
                  {item.label}
                  <span
                    className={[
                      "material-symbols-outlined text-base opacity-80 transition-transform",
                      openDesktopDropdown === item.href ? "rotate-180" : "",
                    ].join(" ")}
                  >
                    expand_more
                  </span>
                </Link>

                <div
                  className={[
                    "absolute left-0 top-full z-50 mt-3 min-w-56 rounded-xl border border-white/10 bg-[#0b0b0b] p-2 shadow-2xl transition-all duration-150",
                    openDesktopDropdown === item.href
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-1 opacity-0",
                  ].join(" ")}
                >
                  {item.children.map((child) => {
                    const childActive =
                      pathname === child.href ||
                      pathname.startsWith(`${child.href}/`);
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpenDesktopDropdown(null)}
                        className={[
                          "block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-white/10",
                          childActive ? "text-primary" : "text-white/85",
                        ].join(" ")}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <button className="rounded bg-primary px-6 py-2 text-base font-bold tracking-wider text-white uppercase transition-all hover:bg-red-700">
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
          {navItems.map((item) => {
            const active = isItemActive(item);

            if (!item.children?.length) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    "rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-white/10",
                    active
                      ? "text-primary"
                      : "text-white/85 hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.href} className="rounded-md border border-white/10">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    "flex items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-white/10",
                    active
                      ? "text-primary"
                      : "text-white/85 hover:text-white",
                  ].join(" ")}
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-xl opacity-80">
                    chevron_right
                  </span>
                </Link>

                <div className="flex flex-col gap-1 border-t border-white/10 p-2">
                  {item.children.map((child) => {
                    const childActive =
                      pathname === child.href ||
                      pathname.startsWith(`${child.href}/`);
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className={[
                          "rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-white/10",
                          childActive
                            ? "text-primary"
                            : "text-white/80 hover:text-white",
                        ].join(" ")}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <button
            type="button"
            className="mt-2 rounded bg-primary px-6 py-3 text-base font-bold tracking-wider text-white uppercase transition-all hover:bg-red-700"
            onClick={() => setMobileOpen(false)}
          >
            Join the Club
          </button>
        </div>
      </div>
    </header>
  );
}

