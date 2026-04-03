export default function KidsAcademyHighlightSection() {
  return (
    <section className="relative overflow-hidden py-20 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/classs-martial-art.jpg')" }}
        aria-label="Kids academy martial arts training"
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black tracking-tight uppercase md:text-5xl">
            Explore our kids academy
          </h2>
          <p className="mt-4 text-sm text-slate-200 md:text-base">
            Build confidence, focus, and discipline in a fun and structured environment.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/classes"
              className="inline-flex items-center justify-center rounded-full bg-[#d62929] px-8 py-3 text-xs font-black tracking-[0.3em] uppercase text-white transition-colors hover:brightness-110"
            >
              Explore now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

