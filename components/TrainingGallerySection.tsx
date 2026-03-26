"use client";

import { useMemo, useState } from "react";

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

const GALLERY_ITEMS: GalleryItem[] = [
  {
    label: "Kung Fu",
    title: "Iron Palm Mastery",
    imageAlt: "Training",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYvJyPTsxG5yALLzanm84RmV6QXEG-HupowFPMl2XdHcFYM3wD-FqYeMRhB24qrDZzzUNaSohLoOBm2Y8GcaRI8Dt7HDUjxIMbysQCfW5ypplDs6zliSy9aGgBujkAjPWrfAnS1y-ijdautvWgp67WUqdc-5jmica28db2mCNGQ0eJUslVHyzA03x7Svpg5ugq9L3ZhjdzlhNZiOSE9mExOYhGIJqwGay9JKz-xN2Ht20-42YldNiZMwyACiDOx49ljezwRrUBGZc",
    categories: ["kung-fu", "training"],
  },
  {
    label: "Jeet Kune Do",
    title: "Direct Efficiency",
    imageAlt: "Training",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2JLQ7P8htsC0RozlFe5yjVF_LFrNvChKhyRei5y9v7mIQcndR-T5rxz3zG_5tLOiTmKaQ9VBV1RXD989aodolWtcpcAy-szTZ-r66gsjJIaA18RURV_cM6TCxMXaBGUXzW9vD7RMtkp25ggiLj6uzf0VcQ-GawILDwoRnnQ-stC5nyAWeUPF49SlCGALsyiCmxuadG0SSbOCTeya-_SCVOp5Oa3c6RahExYE_JYOhmNYrrxEVngHfxlW94VOKcPrYHKRUZcKLtOY",
    categories: ["jeet-kune-do", "training"],
  },
  {
    label: "Wushu",
    title: "Aerial Precision",
    imageAlt: "Performance",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApIlex_Q3u1l-msRvECEzq3VYqGgvhkuY-lX7LjyT0pF07XCCDKO6RJVWwjpvLR7K1Fk80XTuUuJJ8XfGdnK40gloGiivXnHYG2Bi7EUbPF1fumW1-XdKJkWwJAKpRI_v0G_PlegwK3D9Iwf4DNUeeX3EYR6r-h7vpBh6jhaH6cxakeOQbOlpEK4c45FeHsQZBzktuLdz9q-2kuAaV-GdQsm0owph3laMjeHSsJPz05x8lYJdJosr5gjhxds0-RGPi4qvVcmyehJI",
    categories: ["wushu", "performance"],
  },
  {
    label: "Events",
    title: "Annual Grading",
    imageAlt: "Event",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDm2oQL6ogT5jqEag2fpb03MsgkkA41THdIFewIoaxz_xPHxktfO1VRqFZ7nLRAMcXju17aJvPBFSq1hOykr61oeFOwIBVVS5NeRCqiIxc0ETJQtOMtIRsJ103JYRFC3xFBGU6gwvk0R2KsK7NNSoi4ggiZobMbRUX8Pv9F4Fdi6Yesn37KOLpD6TxhOveT7Ls5hZAPZnvIVAQGoe_zLUyqv_3vhAjpcKBWrN_uQTx3eWok-ilQ8LAct6Ry7YJmBliZH5-q3rDvrGc",
    categories: ["events"],
  },
  {
    label: "Training",
    title: "Night Sessions",
    imageAlt: "Training",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdJl9lCRy5U3ggNbyfKFT7t6OYoBQuQXM0fsxxjxNoLJjgdL8g6UU8JX658DNx8g_g3cqTBbVfjefwA6WcIpt-Fjx8N4c4UAhMHO9M0ijAtbXnBeMhfqW68I6vPUcL31FPmqU-SyQ4Ur3Vq69twIIK2JV8qHcUN5PqjHdNWQRFk1OjMXogZH8Wvk_ktqRMN7ejuKqNpnwXl_AUovdt9oZEnGvkQUbu6QkCfmCfmLVdBukpPVEPcMadqubVNoe6IV34HihN0B-moHk",
    categories: ["training"],
  },
  {
    label: "Kung Fu",
    title: "Shaolin Flow",
    imageAlt: "Training",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCizS3PD95tzpvKVK0-LsCg7hLqQ_r8Jh2hT7vspcAqzrswkUDZXXeYZF9KcvIezAD7hAHBytVCLKnnDLAd3TXAlrKScVZzENdsPAn4VkNwvUIGauWwEmUSdhxMmS3f04Hp0nTcyxHOp3Y6pk3ffqXJbMJLUJdDSQutPCuusglujbOF3jx_Dv6e5xDQUbwo10oFc856DIY7AokeTCmaMpVXIQG5YZJqHwK3ra6t3C_9qoQw23xaEUuUojy1Q4PBSLHZKq-l4N5FVKM",
    categories: ["kung-fu", "training"],
  },
  {
    label: "Jeet Kune Do",
    title: "Rapid Sparring",
    imageAlt: "Training",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTdoLIhj3bKQ5EulJFSckbLP275RkmphySyc_pAchU8GDCBnRL8hTaUSri9k9JIZgUKtkziXZXnKYWE3EEcNuUlzuQfGYl2VvdirpFKmJjxRtzBFGXnTaSjgpTlW_krnp7MGU_nbn3znZFAYN_d4dj8byBccgXtTnmhZ3GLBLxNaVlEtkfY-tR7Ss2a0k2l7FpKUn0FTUR0jCV8fbFL9nNjjLN3Q27qKPJ-a2ApCbFtkKEZqCnugZrxMqE1rjUZxeZCYq43SnOYHc",
    categories: ["jeet-kune-do", "training"],
  },
  {
    label: "Events",
    title: "Elite Workshop",
    imageAlt: "Event",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAiz7QM5zGDoRA_g77VFSWP-a1qN9-iYGd5GhvSiu9so031kHRfAEhwcpbztpWWTL5HcBVRX-o5_YauMtBUzFmGXnNn7n87UmgNhv8N3c2LppzlcM0A8HyMOmpdqx_fOg18jgsBJbyVcbq5Oq0e9bmi7Bo_cTs8LPwhHjsrp6jJo5_oZe2O3p6dBTYwrbxLtMKDsZreBHIjDXAImcch8YEf8iFkTuH-hr0m0Whp2c_X92P5GraB5FxCnhXrIbNbj4W1OXLOM1FBfNM",
    categories: ["events", "training"],
  },
];

export default function TrainingGallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const visibleItems = useMemo(() => {
    if (activeCategory === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.categories.includes(activeCategory));
  }, [activeCategory]);

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
                onClick={() => setActiveCategory(cat.id)}
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
          {visibleItems.map((item) => (
            <div
              key={`${item.title}-${item.imageSrc}`}
              className="group relative aspect-square overflow-hidden rounded-lg bg-white/5"
            >
              <img
                alt={item.imageAlt}
                src={item.imageSrc}
                className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-black/60 p-6 opacity-0 transition-opacity group-hover:opacity-100">
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
      </div>
    </section>
  );
}

