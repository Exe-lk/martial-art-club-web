import Image from "next/image";
import Link from "next/link";

import TrainingGallerySection from "@/components/TrainingGallerySection";
import ScrollReveal from "@/components/ScrollReveal";
import { getFeaturedArticlesForIndex } from "@/lib/blogArticles";

export default function LocalizedBlogPage() {
  const featuredArticles = getFeaturedArticlesForIndex();

  return (
    <main className="bg-[#0D0D0D] text-[#f3f4f6]">
      <section
        className="relative grid min-h-[480px] grid-cols-1 overflow-hidden lg:min-h-[76vh] lg:grid-cols-2"
        aria-labelledby="blog-hero-heading"
      >
        <div className="relative min-h-[320px] lg:min-h-0">
          <Image
            src="/blog-martial-art-academy.jpeg"
            alt="Martial arts academy training"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-black/25" />
        </div>

        <div className="relative min-h-[320px] lg:min-h-0">
          <Image
            src="/dragon.jpg"
            alt="Martial arts training session"
            fill
            priority
            className="object-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/80 to-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-xs font-black tracking-[0.35em] text-primary uppercase">
              The Frontline
            </p>
            <h1
              id="blog-hero-heading"
              className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white uppercase italic sm:text-5xl md:text-6xl"
            >
              Martial Arts <span className="text-primary">Blog &amp; Insights</span>
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-relaxed text-slate-200 md:text-base">
              Learn, grow, and stay updated with expert tips, training guides, and martial arts
              stories.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row">
              <button className="transform border-2 border-primary bg-primary px-8 py-4 text-sm font-black tracking-widest text-white uppercase transition-transform active:scale-95">
                Join the Club
              </button>
              <button className="transform border-2 border-secondary px-8 py-4 text-sm font-black tracking-widest text-white uppercase transition-transform hover:bg-secondary/10 active:scale-95">
                Explore Articles
              </button>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="bg-[#000000] px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <span className="mb-2 block text-xs font-black tracking-widest text-red-600 uppercase">
                  The Frontline
                </span>
                <h2 className="text-4xl font-black tracking-tighter text-white uppercase md:text-5xl">
                  Latest Articles
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {featuredArticles.map((article, index) => (
                <article
                  key={article.slug}
                  className={`group relative overflow-hidden bg-white after:absolute after:-right-0.5 after:-bottom-0.5 after:h-5 after:w-5 after:border-r-2 after:border-b-2 after:border-r-primary after:border-b-primary after:content-[''] ${index % 2 === 1 ? "md:mt-12" : ""}`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={article.hero.url}
                      alt={article.hero.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-8">
                    <span className="mb-4 inline-block bg-secondary px-3 py-1 text-[10px] font-black tracking-widest text-white uppercase">
                      {article.category}
                    </span>
                    <h3 className="mb-4 text-2xl font-black tracking-tight text-[#0D0D0D] uppercase italic transition-colors group-hover:text-primary">
                      {article.cardTitle}
                    </h3>
                    <p className="mb-6 line-clamp-2 font-medium leading-relaxed text-zinc-600">
                      {article.listSummary}
                    </p>
                    <div className="flex items-center justify-between border-t border-zinc-100 pt-6">
                      <div className="text-[10px] font-black tracking-widest text-zinc-400 uppercase">
                        {article.author.name} • {article.publishedDate} • {article.readTimeLabel}
                      </div>
                      <Link
                        href={`/blog/${article.slug}`}
                        className="text-[10px] font-black tracking-widest text-primary uppercase transition-transform hover:translate-x-1"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <TrainingGallerySection />
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-primary px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-10 text-4xl leading-none font-black tracking-tighter text-white uppercase md:text-6xl">
              Start Your Martial Arts <br /> Journey Today
            </h2>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <button className="bg-white px-12 py-5 text-sm font-black tracking-widest text-primary uppercase shadow-2xl transition-colors hover:bg-zinc-100">
                Join the Club
              </button>
              <button className="border-2 border-white px-12 py-5 text-sm font-black tracking-widest text-white uppercase transition-colors hover:bg-white/10">
                View Classes
              </button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}

