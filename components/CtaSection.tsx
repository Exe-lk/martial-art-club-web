import Link from "next/link";

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="border-t border-white/10 bg-[#C10007]  py-24"
    >
      <div className="mx-auto max-w-4xl px-6 text-center ">
        <h2 className="mb-6 text-4xl font-black uppercase tracking-tight text-slate-100 md:text-6xl">
          Start Your Martial Arts Journey Today
        </h2>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/#classes"
            className="inline-flex items-center justify-center bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-primary transition hover:bg-white/90"
          >
            Join Now
          </Link>
          <Link
            href="/#programs"
            className="inline-flex items-center justify-center border border-white bg-primary px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-red-700"
          >
            View Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
