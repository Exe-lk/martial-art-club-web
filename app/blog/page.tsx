import Image from "next/image";
import Link from "next/link";
import { getFeaturedArticlesForIndex } from "@/lib/blogArticles";

const topics = [
  "Karate",
  "Taekwondo",
  "Self Defense",
  "Fitness",
  "Competitions",
  "Beginner Guides",
];

const galleryItems = [
  {
    title: "Sparring",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7lPBmQtHD589s-ghyY0TKZuPn-R5zmv67ZzEyolLP7cVLoHweEQVke1UJVcjd06QhJYFxsq3JXi59lT87dLhsh9kfewUXS4wCNayqniC3Zc2V-wwOUXrvPE2WgJgucYyzxwOkwgsLO-Q9uh6U3sotSTjQ2v4vN7l0e_3MCBJOJ2Uk1Ssa6iZVC6obOXVALwN7ko8EcFD4tMpWtKdR1dHAwja76YUatgXKm2vxt9LGHgfDZ4vl8AYCaC7kTNQDy_RaFFiv_WcqYNc",
    offset: false,
  },
  {
    title: "Ceremony",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4_NIWQsUuNvEtp3ek65ap6HZtYCyt-253258pV-OxypLLx0H4wuRaRBtxk6sS8GJB3J_fHtatO6GEgWeD32SXXjFLdx5N0fwZ-dh5Jp4RVKVyyvSBAJLiMEoD4rxGa9lBytiU27k5bDgX3i2ZROx8a5YQD1DVzZL1uja5YbulKxk5vm_UnJabGH1pI5RrEqUsp6TfPApEMU_89ClzLAIVE49yMGWPukt5lq8H-4SFk8mcSFouif3sWq_TLSCv5gmeTjV1Mt5R92M",
    offset: true,
  },
  {
    title: "Training",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuUkfamgNuXJqwxNlca6su12lX0RGv-_Xta535rVqDoOtYleKt4dIrF1JSO3mdQK9wWRzePI9sVyMv6Kd0wnD-RRlshhyY_CWX11s-cohtye-3yojSyrl-3hehuzGw024qfe9zBADBOvZPcnXumNYSdJ0Uxo5VLQ5oLnZii-QAqksg9l45lKmGD10cabwOkePr7dkqY5WAY6bMt30V4q0kwEC3cihgHmdvwNf_xkfyLabhyIpSmiAunKi5rKDLL84qJv08l5tqn3E",
    offset: false,
  },
  {
    title: "Meditation",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBidhjCq_zU7S8EM6CfUle3ML34bY6IMDw3YMsI1uDviedYetH1teBh6x8CiDy3XUsKd30xAIcyeYJc0M2mjOmf6Rrl8XY0562KSqIJq08VzRQLcufLfPoJN9QMVeiLjeLKD4SmpaJJucJmzOQdelsW1fH-vant3wcDM-jxZysvZzJ-X2HlxZ9-A0kVKsZ1ziX_txYDw7GdIWpUddmZU_Z26dG6VAkBKW0B63BLqxJ9VevuaBJ8ZZrYdLLV7AmT2sh6uuWrrycDcLY",
    offset: true,
  },
];

export default function BlogPage() {
  const featuredArticles = getFeaturedArticlesForIndex();

  return (
    <main className="bg-[#0D0D0D] text-[#f3f4f6]">
      <section className="relative flex h-[614px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/blog-martial-art.jpeg')",
          }}
          aria-label="Martial arts professional in training stance"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />
        <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-4 text-5xl font-black tracking-tighter text-white uppercase italic md:text-7xl">
            Martial Arts <span className="text-primary">Blog &amp; Insights</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed font-medium text-slate-300 md:text-xl">
            Learn, grow, and stay updated with expert tips, training guides, and
            martial arts stories.
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <button className="transform border-2 border-primary bg-primary px-8 py-4 text-sm font-black tracking-widest text-white uppercase transition-transform active:scale-95">
              Join the Club
            </button>
            <button className="transform border-2 border-secondary px-8 py-4 text-sm font-black tracking-widest text-white uppercase transition-transform hover:bg-secondary/10 active:scale-95">
              Explore Articles
            </button>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="mb-2 block text-xs font-black tracking-widest text-primary uppercase">
                The Frontline
              </span>
              <h2 className="text-4xl font-black tracking-tighter text-[#0D0D0D] uppercase italic md:text-5xl">
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

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-12 text-3xl font-black tracking-tighter text-[#0D0D0D] uppercase italic">
            Explore Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {topics.map((topic) => (
              <a
                key={topic}
                href="#"
                className="bg-secondary px-8 py-3 text-xs font-black tracking-widest text-white uppercase transition-colors hover:bg-primary"
              >
                {topic}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:text-left">
            <span className="mb-2 block text-xs font-black tracking-widest text-primary uppercase">
              Visual Discipline
            </span>
            <h2 className="text-4xl font-black tracking-tighter text-[#0D0D0D] uppercase italic md:text-5xl">
              Training &amp; Events
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className={`relative aspect-square overflow-hidden bg-[#0D0D0D] ${item.offset ? "md:mt-8" : ""}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-10 text-4xl leading-none font-black tracking-tighter text-white uppercase italic md:text-6xl">
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
    </main>
  );
}
