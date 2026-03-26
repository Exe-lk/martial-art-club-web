type Testimonial = {
  name: string;
  quote: string;
  ratingLabel: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marcus Sterling",
    ratingLabel: "5 out of 5 stars",
    quote:
      "Joining Apex was the best decision for my fitness and focus. The coaches are world-class and really push you to your limits.",
  },
  {
    name: "Sarah Jenkins",
    ratingLabel: "5 out of 5 stars",
    quote:
      "As a woman, the self-defense classes here gave me so much confidence. It’s a very supportive and respectful environment.",
  },
  {
    name: "David Chen",
    ratingLabel: "5 out of 5 stars",
    quote:
      "The BJJ program is incredible. Technique focus is high, and the community is like a second family to me now.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-background-dark py-24 px-6 text-white">
      <div className="mx-auto max-w-7xl text-center">

        <h2 className="pb-10 text-4xl font-black uppercase tracking-tighter leading-none text-slate-100 md:text-5xl">
        The Warrior&apos;s Voice
                  </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded bg-[#0f172a] p-6 text-left"
              aria-label={`Testimonial from ${testimonial.name}`}
            >
              <header className="mb-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-300" aria-hidden="true" />
                <div>
                  <h4 className="text-sm font-bold">{testimonial.name}</h4>
                  <div
                    className="text-sm text-primary"
                    aria-label={testimonial.ratingLabel}
                    title={testimonial.ratingLabel}
                  >
                    ★★★★★
                  </div>
                </div>
              </header>

              <p className="text-sm text-slate-400 italic">&quot;{testimonial.quote}&quot;</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

