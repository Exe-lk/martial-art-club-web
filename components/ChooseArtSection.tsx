
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type ArtKey = "kung-fu" | "jeet-kune-do" | "wushu";

type ArtItem = {
  key: ArtKey;
  title: string;
  tag: string;
  icon: string;
  logoSrc: string;
  videoSrc: string;
  alt: string;
};

export default function ChooseArtSection() {
  const arts = useMemo<ArtItem[]>(
    () => [
      {
        key: "kung-fu",
        title: "Kung Fu",
        tag: "Traditional",
        icon: "sports_mma",
        logoSrc: "/logos/kun-fu.png",
        videoSrc: "/videos/Kung_Fu_training.mp4",
        alt: "Kung Fu training preview",
      },
      {
        key: "jeet-kune-do",
        title: "Jeet Kune Do",
        tag: "Conceptual",
        icon: "bolt",
        logoSrc: "/logos/JeetKuneDo.svg",
        videoSrc: "/videos/jeet_kun_do.mp4",
        alt: "Jeet Kune Do training preview",
      },
      {
        key: "wushu",
        title: "Wushu",
        tag: "Performance",
        icon: "fitness_center",
        logoSrc: "/logos/wushu.png",
        videoSrc: "/videos/Wushu.mp4",
        alt: "Wushu training preview",
      },
    ],
    []
  );

  const [selected, setSelected] = useState<ArtKey | null>(null);
  const [showCta, setShowCta] = useState(false);

  const selectedArt = selected ? arts.find((a) => a.key === selected) ?? null : null;

  return (
    <section className="bg-background-dark text-slate-100">
      <div className="pt-18 pb-20">
        <section className="mx-auto mb-8 max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-4 block text-xs font-bold tracking-[0.3em] text-primary uppercase">
              DISCIPLINE SELECTION
            </span>
            <h5 className="mb-6 text-4xl font-black tracking-tighter uppercase leading-none md:text-5xl">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Fighting Style
              </span>
            </h5>
            <p className="max-w-7xl font-medium text-slate-400 text-center">
              Select a discipline and explore its movement style. From traditional roots to modern
              efficiency.
            </p>
          </div>
        </section>

        {/* Tabs */}
        {/* <section className="mx-auto mb-2 max-w-7xl px-6">
          <div className="grid grid-cols-3 gap-1">
            {arts.map((art) => {
              const active = art.key === selected;
              return (
                <button
                  key={art.key}
                  type="button"
                  onClick={() => {
                    setSelected(art.key);
                    setShowCta(false);
                  }}
                  className={
                    active
                      ? "group flex transform flex-col items-center justify-center border-b-4 border-white bg-primary px-4 py-2 text-white transition-all duration-300"
                      : "group flex transform flex-col items-center justify-center border-b-4 border-transparent bg-black/30 px-4 py-2 text-slate-300 transition-all duration-300 hover:border-blue-900 hover:bg-secondary hover:text-white active:scale-95"
                  }
                >
                  <span
                    className={
                      active
                        ? "mb-1 text-[10px] font-black tracking-widest uppercase opacity-80"
                        : "mb-1 text-[10px] font-black tracking-widest uppercase opacity-60 group-hover:opacity-100"
                    }
                  >
                    {art.tag}
                  </span>
                  <h3
                    className={
                      active
                        ? "text-xl font-black tracking-tight uppercase md:text-3xl"
                        : "text-xl font-black tracking-tight uppercase group-hover:text-white md:text-3xl"
                    }
                  >
                    {art.title}
                  </h3>
                  <span
                    className={
                      active
                        ? "material-symbols-outlined mt-2 text-3xl"
                        : "material-symbols-outlined mt-2 text-3xl opacity-50 group-hover:opacity-100"
                    }
                  >
                    {art.icon}
                  </span>
                </button>
              );
            })}
          </div>
        </section> */}

        {/* Body */}
        <section className="mx-auto w-full max-w-7xl px-6 min-h-[500px]">
          <div className="relative w-full overflow-hidden rounded-sm border border-white/10 bg-black/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {selectedArt ? (
              <div className="relative">
                <div className="relative aspect-video w-full lg:aspect-[21/9]">
                  <video
                    key={selectedArt.key}
                    className="h-full w-full object-cover"
                    src={selectedArt.videoSrc}
                    playsInline
                    controls
                    onEnded={() => setShowCta(true)}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/85" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
                  <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                      <h4 className="text-3xl font-black tracking-tight text-white uppercase md:text-4xl">
                        {selectedArt.title} Preview
                      </h4>
                      <p className="mt-2 text-sm font-bold tracking-widest text-secondary uppercase">
                        Watch the movement
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setSelected(null);
                            setShowCta(false);
                          }}
                          className="border border-white/20 bg-black/50 px-5 py-3 text-xs font-black tracking-widest text-white uppercase backdrop-blur-sm transition-all hover:bg-black/65 active:scale-95"
                        >
                          Back to logos
                        </button>

                        <Link
                          href={`/classes/${selectedArt.key}`}
                          className={
                            showCta
                              ? "inline-flex items-center justify-center bg-primary px-6 py-3 text-xs font-black tracking-widest text-white uppercase shadow-lg shadow-primary/20 transition-all hover:bg-red-700 active:scale-95"
                              : "pointer-events-none inline-flex items-center justify-center bg-primary/40 px-6 py-3 text-xs font-black tracking-widest text-white/70 uppercase shadow-lg shadow-primary/10 opacity-60"
                          }
                          aria-disabled={!showCta}
                          tabIndex={showCta ? 0 : -1}
                        >
                          Secure your spot now
                        </Link>

                        {!showCta ? (
                          <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase">
                            Watch till the end to unlock
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="hidden gap-4 md:flex">
                      <div className="min-w-[120px] border-t-2 border-secondary bg-black/60 p-4 backdrop-blur-sm">
                        <div className="mb-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                          Selected
                        </div>
                        <div className="text-lg font-black leading-none text-white uppercase">
                          {selectedArt.tag}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative flex min-h-[500px] items-center overflow-hidden p-8 md:p-12">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  aria-hidden="true"
                  style={{ backgroundImage: 'url("/choose-your-style-background.png")' }}
                />
                <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

                <div className="relative z-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {arts.map((art) => (
                    <button
                      key={art.key}
                      type="button"
                      onClick={() => {
                        setSelected(art.key);
                        setShowCta(false);
                      }}
                      className="group flex items-center gap-6 border border-white/10 bg-black/70 p-7 transition-all hover:border-white/20 hover:bg-black/55 active:scale-[0.99] md:p-8"
                    >
                      <div className="flex h-20 w-20 items-center justify-center bg-white/5 md:h-24 md:w-24">
                        <img
                          src={art.logoSrc}
                          alt={`${art.title} logo`}
                          className="h-14 w-14 object-contain opacity-90 transition-opacity group-hover:opacity-100 md:h-16 md:w-16"
                        />
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase group-hover:text-slate-200 md:text-xs">
                          {art.tag}
                        </div>
                        <div className="text-2xl font-black tracking-tight text-white uppercase md:text-3xl">
                          {art.title}
                        </div>
                      </div>
                      <span className="material-symbols-outlined ml-auto text-3xl text-slate-400 group-hover:text-white">
                        arrow_forward
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}

