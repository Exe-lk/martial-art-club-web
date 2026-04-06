import Image from "next/image";

type FacilityImage = {
  src: string;
  alt: string;
};

function GalleryImage({
  image,
  className,
  imageClassName,
  roundedClassName = "rounded-3xl",
  sizes,
}: {
  image: FacilityImage;
  className?: string;
  imageClassName?: string;
  roundedClassName?: string;
  sizes: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#1b1b1b] ${roundedClassName} ${className ?? ""}`}
    >
      <Image
        alt={image.alt}
        className={`object-cover ${imageClassName ?? ""}`}
        src={image.src}
        fill
        sizes={sizes}
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
    </div>
  );
}

const FACILITY_IMAGES = {
  safety: { src: "/facilities/fighting-safety.jpeg", alt: "Training safety equipment" },
  gym: { src: "/facilities/gym3.jpeg", alt: "Modern gym area" },
  training: { src: "/facilities/taining-time3.jpg", alt: "Training session in progress" },
  accessories: { src: "/facilities/gym%20accesories.jpeg", alt: "Gym accessories and gloves" },
  contact: { src: "/facilities/contact-martial-art-academy.jpg", alt: "Academy lobby and contact area" },
  blog: { src: "/facilities/blog-martial-art-academy.jpeg", alt: "Academy interior detail" },
  confidence: { src: "/facilities/Boost-Confidence.PNG", alt: "Confidence-building training moment" },
} satisfies Record<string, FacilityImage>;

export default function FacilitiesPage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-[#000000] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-5">
        {/* Intro */}
        <section className="text-center">
          <p className="text-primary text-xs font-black tracking-[0.38em] uppercase md:text-sm">
            Facilities
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight uppercase md:text-6xl">
            Built for serious training
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            A clean, modern space designed for focus—premium mats, safe training zones, and the
            equipment you need to level up with confidence.
          </p>
        </section>

        {/* Large intro gallery (uneven but clean) */}
        <section className="relative left-1/2 mt-12 w-screen -translate-x-1/2 md:mt-16">
          <GalleryImage
          image={FACILITY_IMAGES.contact}
            className="aspect-[16/9] w-full md:aspect-[21/8]"
            roundedClassName="rounded-none md:rounded-3xl"
            imageClassName="object-center"
            sizes="100vw"
          />
        </section>

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          {/* Pattern A (large): title -> text -> gallery */}
          <section className="space-y-7">
            <header className="space-y-3">
              <h2 className="text-3xl font-black tracking-tight uppercase md:text-4xl">
                Full-size training floor
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
                Wide open space, clean lines, and consistent lighting—so you can drill footwork,
                clinch work, and combinations with total clarity. The layout supports both group
                classes and focused coaching.
              </p>
            </header>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-6">
              <GalleryImage
                image={FACILITY_IMAGES.training}
                className="col-span-2 aspect-[16/9] md:col-span-7 md:aspect-[21/10]"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            
              <GalleryImage
                image={FACILITY_IMAGES.contact}
                className="col-span-2 aspect-[21/9] md:col-span-4 md:aspect-[4/5] md:-translate-y-6"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </section>

          {/* Pattern B (smaller): title -> text -> image row */}
          <section className="space-y-7">
            <header className="space-y-3">
              <h2 className="text-2xl font-black tracking-tight uppercase md:text-3xl">
                Equipment & essentials
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
                Everything stays clean, organized, and ready. You’ll always have the right tools
                within reach—without clutter, noise, or distractions.
              </p>
            </header>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
              <GalleryImage
                image={FACILITY_IMAGES.accessories}
                className="aspect-[4/3]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 28vw"
              />
              <GalleryImage
                image={FACILITY_IMAGES.safety}
                className="aspect-[4/3]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 28vw"
              />
              <GalleryImage
                image={FACILITY_IMAGES.gym}
                className="aspect-[4/3]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 28vw"
              />
            </div>
          </section>

          {/* Pattern A (large): biggest gallery */}
          <section className="space-y-7">
            <header className="space-y-3">
              <h2 className="text-3xl font-black tracking-tight uppercase md:text-4xl">
                Premium atmosphere, clean detail
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
                A premium gym feel—dark, modern, and focused. From training intensity to quiet
                reset moments, the space supports both performance and recovery.
              </p>
            </header>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-6">
              <GalleryImage
                image={FACILITY_IMAGES.gym}
                className="col-span-2 aspect-[16/9] md:col-span-8 md:aspect-[24/10]"
                sizes="(max-width: 768px) 100vw, 70vw"
              />
              <GalleryImage
                image={FACILITY_IMAGES.blog}
                className="col-span-1 aspect-[4/5] md:col-span-4 md:aspect-[3/4] md:translate-y-10"
                sizes="(max-width: 768px) 50vw, 30vw"
              />
              <GalleryImage
                image={FACILITY_IMAGES.contact}
                className="col-span-1 aspect-[4/5] md:col-span-4 md:aspect-[4/5] md:-translate-y-6"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <GalleryImage
                image={FACILITY_IMAGES.training}
                className="col-span-2 aspect-[21/9] md:col-span-8 md:aspect-[21/9]"
                sizes="(max-width: 768px) 100vw, 70vw"
              />
            </div>
          </section>

          {/* Pattern C (medium): text left -> image grid right */}
          <section className="grid gap-8 md:grid-cols-12 md:items-start md:gap-10">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-black tracking-tight uppercase md:text-3xl">
                Safe, structured training zones
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                Clear zones help classes run smoothly—warm-ups, drills, and partner work all flow
                naturally. It’s easier to focus, easier to learn, and safer to train hard.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:col-span-7 md:gap-6">
              <GalleryImage
                image={FACILITY_IMAGES.safety}
                className="aspect-[4/3]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <GalleryImage
                image={FACILITY_IMAGES.training}
                className="aspect-[4/3]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <GalleryImage
                image={FACILITY_IMAGES.accessories}
                className="col-span-2 aspect-[21/9]"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>
          </section>

          {/* Several smaller sections: title + short text + 2–4 images */}
          <section className="space-y-10">
            

            <div className="grid gap-10 md:gap-14">
              <div className="space-y-5">
                <h3 className="text-lg font-black uppercase tracking-tight md:text-xl">
                  Clean entry & welcome area
                </h3>
                <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
                  First impressions matter. The entry stays tidy and organized, creating a focused
                  “switch-on” moment before training starts.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
                  <GalleryImage
                    image={FACILITY_IMAGES.contact}
                    className="aspect-[4/3]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <GalleryImage
                    image={FACILITY_IMAGES.blog}
                    className="aspect-[4/3]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="text-lg font-black uppercase tracking-tight md:text-xl">
                  Focused strength corner
                </h3>
                <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
                  Support your martial arts with strength and conditioning—simple, effective, and
                  always kept clean.
                </p>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                  <GalleryImage
                    image={FACILITY_IMAGES.gym}
                    className="aspect-[1/1]"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <GalleryImage
                    image={FACILITY_IMAGES.accessories}
                    className="aspect-[1/1]"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  
                </div>
              </div>

              
            </div>
          </section>

          {/* Final simple section: text + a few images */}
          
        </div>
      </div>
    </main>
  );
}

