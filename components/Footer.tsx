import Link from "next/link";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function TopSocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/90 text-white shadow-sm ring-1 ring-white/10 transition hover:bg-primary"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 px-6 py-16">
      {/* Top strip (icons + menu) */}
      <div className="mx-auto mb-10 max-w-7xl pb-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-center gap-2.5">
            <TopSocialIcon href="https://instagram.com" label="Instagram">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4zm-4.5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.8 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
              </svg>
            </TopSocialIcon>
            <TopSocialIcon href="https://facebook.com" label="Facebook">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.74l-.44 2.88h-2.3v6.99A10 10 0 0 0 22 12z" />
              </svg>
            </TopSocialIcon>
            <TopSocialIcon href="https://youtube.com" label="YouTube">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31.7 31.7 0 0 0 2 12a31.7 31.7 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 22 12a31.7 31.7 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
              </svg>
            </TopSocialIcon>
            <TopSocialIcon href="https://whatsapp.com" label="WhatsApp">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.49A11.8 11.8 0 0 0 12.05 0C5.46 0 .12 5.3.12 11.83c0 2.08.55 4.11 1.6 5.91L0 24l6.43-1.66a12.1 12.1 0 0 0 5.62 1.4h.01c6.59 0 11.94-5.3 11.94-11.83 0-3.16-1.24-6.13-3.48-8.42zM12.06 21.6h-.01a10 10 0 0 1-5.1-1.4l-.36-.21-3.82.99 1.02-3.71-.24-.38a9.8 9.8 0 0 1-1.5-5.16c0-5.44 4.48-9.87 9.99-9.87a9.9 9.9 0 0 1 7.06 2.9 9.7 9.7 0 0 1 2.93 6.97c0 5.44-4.48 9.87-9.97 9.87zm5.8-7.39c-.32-.16-1.88-.92-2.17-1.02-.29-.11-.5-.16-.71.16-.21.32-.82 1.02-1.01 1.23-.18.21-.36.24-.68.08-.32-.16-1.34-.49-2.55-1.56-.94-.83-1.58-1.86-1.76-2.18-.18-.32-.02-.49.14-.65.14-.14.32-.36.48-.53.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.7-.98-2.33-.26-.63-.52-.54-.71-.55h-.6c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.43 5.49 4.81.77.33 1.37.53 1.83.68.77.24 1.47.21 2.03.13.62-.09 1.88-.76 2.15-1.49.27-.73.27-1.35.19-1.49-.08-.13-.29-.21-.61-.37z" />
              </svg>
            </TopSocialIcon>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-extrabold tracking-widest text-white/80"
          >
            <Link className="transition hover:text-white" href="/">
              HOME
            </Link>
            <Link className="transition hover:text-white" href="/about">
              ABOUT
            </Link>
            <Link className="transition hover:text-white" href="/classes">
              CLASSES
            </Link>
            <Link className="transition hover:text-white" href="/schedule">
              SCHEDULE
            </Link>
            <Link className="transition hover:text-white" href="/pricing">
              PRICING
            </Link>
            <Link className="transition hover:text-white" href="/contact">
              CONTACT
            </Link>
          </nav>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/50">
      © 2026 Designed by Exe.lk All rights reserved.
      </div>
    </footer>
  );
}

