import Link from "next/link";

export default function NavigationBar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#000000] px-6 py-4 backdrop-blur-md lg:px-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl text-primary">
            sports_martial_arts
          </span>
          <span className="text-xl font-bold tracking-tighter text-white uppercase">
            Apex <span className="text-primary">Martial Arts</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a
            className="text-sm font-medium text-white/80 transition-colors hover:text-primary"
            href="/about"
          >
            About
          </a>
          <a
            className="text-sm font-medium text-white/80 transition-colors hover:text-primary"
            href="/classes"
          >
            Classes
          </a>
          <a
            className="text-sm font-medium text-white/80 transition-colors hover:text-primary"
            href="/contact"
          >
            Conatct us
          </a>
          <a
            className="text-sm font-medium text-white/80 transition-colors hover:text-primary"
            href="#gallery"
          >
            Gallery
          </a>
          <button className="rounded bg-primary px-6 py-2 text-sm font-bold tracking-wider text-white uppercase transition-all hover:bg-red-700">
            Join the Club
          </button>
        </div>
      </nav>
    </header>
  );
}

