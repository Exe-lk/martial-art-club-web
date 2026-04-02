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

export default function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-primary">
              sports_martial_arts
            </span>
            <span className="text-xl font-black tracking-tight text-white uppercase">
              Bkack <span className="text-primary">Dragon</span>
            </span>
          </Link>

          <p className="mt-4 text-sm text-white/70">
            Elite martial arts training academy focused on discipline, strength,
            and mastery.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <SocialIcon href="https://facebook.com" label="Facebook">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.74l-.44 2.88h-2.3v6.99A10 10 0 0 0 22 12z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://instagram.com" label="Instagram">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4zm-4.5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.8 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://youtube.com" label="YouTube">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31.7 31.7 0 0 0 2 12a31.7 31.7 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 22 12a31.7 31.7 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">
            Programs
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a className="transition-colors hover:text-white" href="#classes">
                Kung Fu
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-white" href="#classes">
                Jeet Kune Do
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-white" href="#classes">
                Wushu
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a className="transition-colors hover:text-white" href="#about">
                About
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-white"
                href="#instructors"
              >
                Instructors
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-white" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined mt-0.5 text-[20px] text-primary">
                mail
              </span>
              <span>
                <span className="sr-only">Email: </span>
                info@ironobsidian.com
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined mt-0.5 text-[20px] text-primary">
                call
              </span>
              <span>
                <span className="sr-only">Phone: </span>
                +94 77 123 4567
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined mt-0.5 text-[20px] text-primary">
                location_on
              </span>
              <span>
                <span className="sr-only">Location: </span>
                Colombo, Sri Lanka
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/50">
        © 2026 Iron Obsidian. All rights reserved.
      </div>
    </footer>
  );
}

