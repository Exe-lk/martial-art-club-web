import Image from "next/image";

import type { Branch } from "@/data/branches";

export default function BranchPageHero({ branch }: { branch: Branch }) {
  return (
    <section
      className="relative grid min-h-[480px] grid-cols-1 overflow-hidden lg:min-h-[76vh] lg:grid-cols-2"
      aria-labelledby="branch-hero-heading"
    >
      <div className="relative min-h-[320px] lg:min-h-0">
        <Image
          src={branch.heroImageUrl}
          alt={`${branch.name} training image`}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent lg:from-black/60 lg:via-black/25" />
      </div>

      <div className="relative min-h-[320px] lg:min-h-0">
        <Image
          src={branch.cardImageUrl}
          alt={`${branch.name} class preview`}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/80 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-xs font-black tracking-[0.35em] text-primary uppercase">
            Black Dragon
          </p>
          <h1
            id="branch-hero-heading"
            className="mt-2 max-w-3xl text-4xl font-black tracking-tight text-white uppercase sm:text-5xl md:text-6xl"
          >
            {branch.location} <span className="text-primary">Branch</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-slate-200 md:text-base">
            {branch.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

