import Image from "next/image";
import Link from "next/link";

import { getFeaturedArticlesForIndex } from "@/lib/blogArticles";

export default function BlogArticlesSection() {
  const featuredArticles = getFeaturedArticlesForIndex().slice(0, 3);

  return (
    <section className="bg-[#000000] px-6 py-20 text-white" id="blog">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <div className="mx-auto max-w-3xl">
            <span className="mb-2 inline-block text-[11px] font-black tracking-[0.28em] text-primary uppercase">
              Insights
            </span>
            <h2 className="text-3xl font-black tracking-tight uppercase md:text-5xl">
               <span className="text-primary"> Warrios</span> Path
            </h2>
            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-400 md:text-base">
              Training tips, mindset, and martial arts wisdom from our coaches.
            </p>
          </div>

          
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredArticles.map((article, index) => (
            <article
              key={article.slug}
              className={`group relative overflow-hidden bg-white/5 ring-1 ring-white/10 backdrop-blur-sm ${
                index === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <Link href={`/blog/${article.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#141414]">
                  <Image
                    src={article.hero.url}
                    alt={article.hero.alt}
                    fill
                    className="object-cover opacity-85 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    priority={index === 0}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex bg-secondary px-3 py-1 text-[10px] font-black tracking-widest text-white uppercase">
                      {article.category}
                    </span>
                    <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                      {article.readTimeLabel}
                    </span>
                  </div>

                  <h3 className="text-xl font-black tracking-tight uppercase text-white transition-colors group-hover:text-primary">
                    {article.cardTitle}
                  </h3>

                  <p className="line-clamp-2 text-sm font-medium leading-relaxed text-slate-400">
                    {article.listSummary}
                  </p>

                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
                      {article.author.name} • {article.publishedDate}
                    </div>
                    <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-primary uppercase transition-transform group-hover:translate-x-1">
                      Read
                      
                    </span>
                  </div>
                </div>
              </Link>
              
            </article>
          ))}
        </div>

        <div className="mt-18 flex justify-center">
          <Link
            href="/blog"
            className="animated-gradient-border inline-flex items-center justify-center gap-2 rounded-2xl px-10 py-4 text-sm font-black tracking-[0.22em] text-white uppercase shadow-lg transition-transform active:scale-[0.98]"
          >
            View all articles
          </Link>
        </div>
        
      </div>
    </section>
  );
}

