"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type GalleryItem = {
  title: string;
  label: string;
  imageAlt: string;
  imageSrc: string;
  categories: string[];
};

const CATEGORIES: { id: string; label: string }[] = [
  { id: "all", label: "All" },
  { id: "kung-fu", label: "Kung Fu" },
  { id: "jeet-kune-do", label: "Jeet Kune Do" },
  { id: "wushu", label: "Wushu" },
  { id: "training", label: "Training" },
  { id: "events", label: "Events" },
];

const LOCAL_IMAGE_PATHS = [
  "/gallery/486603328_2093109104489921_5617833811638459708_n.jpg",
  "/gallery/events/480281407_596698423268086_8216583939379925773_n.jpg",
  "/gallery/events/480326514_596697989934796_4121116657036155314_n.jpg",
  "/gallery/events/480440785_596698313268097_8199364771232065174_n.jpg",
  "/gallery/events/480520780_596698106601451_2159366204510021519_n.jpg",
  "/gallery/events/480591409_596698273268101_8914357148270084608_n.jpg",
  "/gallery/events/480615754_596698373268091_6113740060840275045_n.jpg",
  "/gallery/events/480674438_596698093268119_2920696599622067516_n.jpg",
  "/gallery/jeet-kun-do/172072943_1142707122863462_7609693121190601178_n.jpg",
  "/gallery/jeet-kun-do/480671797_2068773616923470_3354075174883740120_n.jpg",
  "/gallery/jeet-kun-do/480737562_2068773613590137_4184260622523094791_n.jpg",
  "/gallery/jeet-kun-do/481216794_2068774033590095_6673438331088346098_n.jpg",
  "/gallery/jeet-kun-do/481253854_2068773850256780_8036672655206718369_n.jpg",
  "/gallery/jeet-kun-do/jeet-kun-so-class.jpg",
  "/gallery/kun-fu/480659567_604273912510537_385981634691492231_n.jpg",
  "/gallery/kun-fu/480784630_604272952510633_7677364397842933082_n.jpg",
  "/gallery/kun-fu/480893548_604272685843993_7636090135948259871_n.jpg",
  "/gallery/kun-fu/480928302_604273982510530_1377550972642963121_n.jpg",
  "/gallery/kun-fu/480971840_604272585844003_1461938362512487838_n.jpg",
  "/gallery/training/481258319_604272705843991_7772060579931745694_n.jpg",
  "/gallery/training/481291835_604272849177310_6487048297748494752_n.jpg",
  "/gallery/training/481769131_604272675843994_149680669691450545_n.jpg",
  "/gallery/training/482002605_604272615844000_5475728776468286268_n.jpg",
  "/gallery/training/482020411_604272919177303_3972575694414062918_n.jpg",
  "/gallery/training/482209139_604272639177331_5670640147597652569_n.jpg",
  "/gallery/wushu/481115393_604273762510552_269428111622660870_n.jpg",
  "/gallery/wushu/481120677_604273679177227_922634369156765066_n.jpg",
  "/gallery/wushu/481262174_604273949177200_2820651480742250467_n.jpg",
  "/gallery/wushu/481465948_604273999177195_4221468156841016824_n.jpg",
  "/gallery/wushu/481992167_604273692510559_1704114301242226740_n.jpg",
  "/gym/75443010_764354024032109_2374786090537058304_n.jpg",
  "/gym/75462284_764353914032120_9099130517156003840_n.jpg",
  "/gym/83275503_815975425536635_4737246153215574016_n.jpg",
  "/gym/Capture.PNG",
  "/gym/coach.PNG",
  "/gym/fighting-safety.jpeg",
  "/gym/gym accesories.jpeg",
  "/gym/gym.jpeg",
  "/gym/gym3.jpeg",
  "/gym/WhatsApp Image 2026-03-18 at 17.24.02 (1).jpeg",
  "/gym/WhatsApp Image 2026-03-18 at 17.24.02 (2).jpeg",
] as const;

function titleFromPath(path: string) {
  const filename = path.split("/").pop() ?? path;
  const base = filename.replace(/\.[^.]+$/, "");
  if (/^\d/.test(base)) return "Training Snapshot";
  return base.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}

function getCategoriesForPath(path: string): string[] {
  const normalized = path.toLowerCase();
  const categories = new Set<string>();

  if (normalized.includes("/gallery/events/")) categories.add("events");
  if (normalized.includes("/gallery/training/")) categories.add("training");

  if (normalized.includes("/gallery/kun-fu/")) categories.add("kung-fu");
  if (normalized.includes("/gallery/jeet-kun-do/")) categories.add("jeet-kune-do");
  if (normalized.includes("/gallery/wushu/")) categories.add("wushu");

  if (normalized.startsWith("/gym/")) categories.add("training");

  if (categories.size === 0) categories.add("training");
  return [...categories];
}

function labelForCategories(categories: string[]) {
  if (categories.includes("events")) return "Events";
  if (categories.includes("kung-fu")) return "Kung Fu";
  if (categories.includes("jeet-kune-do")) return "Jeet Kune Do";
  if (categories.includes("wushu")) return "Wushu";
  return "Training";
}

const GALLERY_ITEMS: GalleryItem[] = LOCAL_IMAGE_PATHS.map((path) => {
  const categories = getCategoriesForPath(path);
  return {
    label: labelForCategories(categories),
    title: titleFromPath(path),
    imageAlt: labelForCategories(categories),
    imageSrc: encodeURI(path),
    categories,
  };
});

export default function TrainingGallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expanded, setExpanded] = useState(false);
  const [columns, setColumns] = useState(4);

  const visibleItems = useMemo(() => {
    if (activeCategory === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.categories.includes(activeCategory));
  }, [activeCategory]);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setColumns(4);
        return;
      }
      if (window.matchMedia("(min-width: 768px)").matches) {
        setColumns(3);
        return;
      }
      if (window.matchMedia("(min-width: 640px)").matches) {
        setColumns(2);
        return;
      }
      setColumns(1);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const initialVisibleCount = columns * 2;
  const shouldShowToggle = visibleItems.length > initialVisibleCount;
  const itemsToRender = expanded ? visibleItems : visibleItems.slice(0, initialVisibleCount);

  return (
    <section
      id="training-gallery"
      className="border-t border-white/10 bg-background-dark py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tighter text-slate-100 uppercase md:text-6xl">
            Training Gallery
          </h2>
          <p className="mx-auto max-w-2xl font-medium text-slate-400">
            Explore moments from our training sessions, classes, and events.
          </p>
        </div>

        <div className="mb-16 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setExpanded(false);
                }}
                className={[
                  "rounded-full px-8 py-2 text-xs font-black tracking-widest uppercase transition-all",
                  isActive
                    ? "bg-primary text-white"
                    : "bg-white/5 text-slate-400 hover:text-white",
                ].join(" ")}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {itemsToRender.map((item) => (
            <div
              key={`${item.title}-${item.imageSrc}`}
              className="relative aspect-square overflow-hidden rounded-lg bg-white/5"
            >
              <Image
                alt={item.imageAlt}
                src={item.imageSrc}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-6">
                <span className="text-[10px] font-black tracking-widest text-primary uppercase">
                  {item.label}
                </span>
                <h4 className="text-lg font-bold leading-tight text-white uppercase">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {shouldShowToggle ? (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="border border-white/20 bg-white/5 px-10 py-3 text-xs font-black tracking-widest text-white uppercase transition-colors hover:bg-white/10"
            >
              {expanded ? "See less" : "See more"}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

