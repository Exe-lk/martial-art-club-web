import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleScrollProgress from "@/components/blog/ArticleScrollProgress";
import {
  blogArticles,
  getArticleBySlug,
  getRelatedArticles,
  type BlogArticle,
} from "@/lib/blogArticles";

export function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return { title: article.seoTitle, description: article.seoDescription };
}

function ArticleBody({ article }: { article: BlogArticle }) {
  const related = getRelatedArticles(article.slug, article);

  return (
    <>
      <ArticleScrollProgress />
      <main className="bg-[#0D0D0D] pb-0 text-[#f3f4f6] selection:bg-primary selection:text-white">
        <section className="relative flex h-[min(921px,100svh)] w-full items-end overflow-hidden pb-24">
          <div className="absolute inset-0 z-0">
            <Image
              src={article.hero.url}
              alt={article.hero.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
            <div className="mb-6 inline-block bg-primary px-3 py-1 text-[12px] font-black tracking-widest text-white uppercase">
              {article.category}
            </div>
            <h1 className="mb-8 max-w-4xl text-5xl leading-none font-black tracking-tighter uppercase italic md:text-8xl">
              {article.headline.line1}{" "}
              <span className="text-primary">{article.headline.accent}</span>{" "}
              {article.headline.line2}
            </h1>
            <div className="flex flex-wrap items-center gap-8 text-sm font-bold tracking-widest text-slate-400 uppercase">
              <div className="flex items-center gap-3">
                <Image
                  src={article.author.imageUrl}
                  alt={article.author.imageAlt}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border-2 border-primary object-cover"
                />
                <span className="text-[#f3f4f6]">{article.author.name}</span>
              </div>
              <span>{article.publishedDate}</span>
              <span className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-primary text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  schedule
                </span>
                {article.readTimeLabel}
              </span>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <p className="first-letter:float-left first-letter:mr-4 first-letter:text-7xl first-letter:font-black first-letter:text-primary max-w-none text-2xl leading-relaxed text-[#f3f4f6]/90">
              {article.introLead}
            </p>
            <p className="mt-8 text-lg leading-relaxed text-slate-400">{article.introBody}</p>
          </div>
        </section>

        {article.fullWidthImage ? (
          <section className="group relative h-[614px] w-full overflow-hidden md:h-[819px]">
            <Image
              src={article.fullWidthImage.url}
              alt={article.fullWidthImage.alt}
              fill
              className="scale-105 object-cover grayscale transition-all duration-700 group-hover:scale-100 group-hover:grayscale-0"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </section>
        ) : null}

        {article.mindset ? (
          <section className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <h2 className="relative mb-8 pb-4 text-4xl font-black tracking-tight uppercase after:absolute after:bottom-[-2px] after:left-0 after:h-1 after:w-10 after:bg-primary">
                  {article.mindset.title}
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-slate-400">
                  {article.mindset.paragraphs[0]}
                </p>
                <p className="text-lg leading-relaxed text-slate-400">
                  {article.mindset.paragraphs[1]}
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square overflow-hidden rounded-lg bg-[#292929] shadow-2xl">
                  <Image
                    src={article.mindset.image.url}
                    alt={article.mindset.image.alt}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {article.highlightQuote ? (
          <section className="overflow-hidden bg-[#0f0f0f] px-6 py-32">
            <div className="relative mx-auto max-w-5xl text-center">
              <span
                className="material-symbols-outlined absolute -top-12 -left-8 text-9xl font-black text-primary/20"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                format_quote
              </span>
              <blockquote className="relative z-10 text-4xl leading-none font-black tracking-tighter text-primary uppercase italic md:text-7xl">
                &ldquo;{article.highlightQuote.text}&rdquo;
              </blockquote>
              <cite className="mt-12 block font-bold tracking-widest text-zinc-500 uppercase not-italic">
                — {article.highlightQuote.cite}
              </cite>
            </div>
          </section>
        ) : null}

        {article.bento ? (
          <section className="mx-auto max-w-7xl px-6 py-24">
            <h2 className="mb-12 text-center text-3xl font-black tracking-tight uppercase">
              {article.bento.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {article.bento.items.map((item, idx) => (
                <div
                  key={item.url}
                  className={`group h-80 overflow-hidden rounded-lg shadow-xl ${idx === 1 ? "md:mt-12" : ""}`}
                >
                  <Image
                    src={item.url}
                    alt={item.alt}
                    width={600}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {article.pillars ? (
          <section className="bg-[#292929] px-6 py-24">
            <div className="mx-auto max-w-7xl">
              <div className="mb-16">
                <h2 className="text-5xl font-black tracking-tighter uppercase">
                  {article.pillars.title}
                </h2>
                <div className="mt-4 h-2 w-24 bg-primary" />
              </div>
              <div className="grid gap-12 md:grid-cols-3">
                {article.pillars.items.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="flex flex-col items-start rounded-lg bg-[#0D0D0D] p-8 shadow-2xl transition-transform duration-300 hover:-translate-y-2"
                  >
                    <div className="mb-6 text-6xl font-black text-primary/30">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mb-4 text-2xl font-black tracking-tight uppercase">
                      {pillar.title}
                    </h3>
                    <p className="mb-8 leading-relaxed text-slate-400">{pillar.body}</p>
                    <Image
                      src={pillar.image.url}
                      alt={pillar.image.alt}
                      width={640}
                      height={320}
                      className="h-48 w-full rounded object-cover shadow-lg"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-black tracking-tight uppercase">More Wisdom</h2>
            <Link
              href="/blog"
              className="text-sm font-bold tracking-widest text-primary uppercase underline-offset-8 hover:underline"
            >
              View Archive
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="group cursor-pointer">
                <div className="mb-6 aspect-[16/10] overflow-hidden rounded-lg bg-[#141414] shadow-lg">
                  <Image
                    src={item.image.url}
                    alt={item.image.alt}
                    width={640}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <span className="text-[10px] font-black tracking-widest text-primary uppercase">
                  {item.category}
                </span>
                <h3 className="mt-2 text-xl font-black tracking-tight uppercase transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm text-slate-400">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-primary px-6 py-24">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
            <div className="text-[clamp(4rem,18vw,20rem)] font-black leading-none tracking-tighter text-white uppercase select-none">
              Discipline
            </div>
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-5xl font-black tracking-tighter text-white uppercase md:text-7xl">
              Start Your Martial Arts Journey Today
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg font-bold tracking-wide text-white/80 uppercase">
              Join the elite ranks of those who seek mastery through uncompromising discipline.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="bg-white px-10 py-5 text-lg font-black tracking-widest text-primary uppercase shadow-xl transition-all hover:bg-zinc-100 active:scale-95"
              >
                Join Now
              </Link>
              <Link
                href="/classes"
                className="border-4 border-white px-10 py-5 text-lg font-black tracking-widest text-white uppercase transition-all hover:bg-white hover:text-primary active:scale-95"
              >
                View Classes
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return <ArticleBody article={article} />;
}
