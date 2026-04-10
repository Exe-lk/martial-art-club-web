import { branches } from "@/data/branches";

export type FacilityGalleryItem = {
  src: string;
  altKey: "introImageAlt" | "gallery1Alt" | "gallery2Alt" | "gallery3Alt";
};

export type FacilityTopicBlock = {
  /** Translation key for the topic title. */
  titleKey: "benefits1Title" | "benefits2Title" | "benefits3Title";
  /** Translation key for the topic body/description. */
  bodyKey: "benefits1Body" | "benefits2Body" | "benefits3Body";
  /** Translation key for the image alt. */
  imageAltKey: "benefits1ImageAlt" | "benefits2ImageAlt" | "benefits3ImageAlt";
  imageSrc: string;
  /** Layout direction for the block on desktop. */
  imageSide: "left" | "right";
};

export type BranchFacilitiesData = {
  introImage: FacilityGalleryItem;
  gallery: FacilityGalleryItem[];
  topics: FacilityTopicBlock[];
};

/**
 * Base facilities content currently used in `app/[locale]/facilities/page.tsx`.
 * Duplicated for every branch by default, so each branch has a complete set of:
 * - 1 intro image
 * - 3 gallery images
 * - 3 topic blocks (with images + translations)
 *
 * You can later override any branch by editing `branchFacilitiesBySlug`.
 */
export const DEFAULT_BRANCH_FACILITIES: BranchFacilitiesData = {
  introImage: { src: "/gym/contact-martial-art-academy.jpg", altKey: "introImageAlt" },
  gallery: [
    { src: "/gym/fighting-safety.jpeg", altKey: "gallery1Alt" },
    { src: "/gym/gym%20accesories.jpeg", altKey: "gallery2Alt" },
    { src: "/gym/gym.jpeg", altKey: "gallery3Alt" },
  ],
  topics: [
    {
      titleKey: "benefits1Title",
      bodyKey: "benefits1Body",
      imageAltKey: "benefits1ImageAlt",
      imageSrc: "/Boost-Confidence.PNG",
      imageSide: "left",
    },
    {
      titleKey: "benefits2Title",
      bodyKey: "benefits2Body",
      imageAltKey: "benefits2ImageAlt",
      imageSrc: "/blog-martial-art.jpeg",
      imageSide: "right",
    },
    {
      titleKey: "benefits3Title",
      bodyKey: "benefits3Body",
      imageAltKey: "benefits3ImageAlt",
      imageSrc: "/gallery/kun-fu/weapon-training.jpg",
      imageSide: "left",
    },
  ],
};

export const branchFacilitiesBySlug: Record<string, BranchFacilitiesData> =
  Object.fromEntries(branches.map((b) => [b.slug, DEFAULT_BRANCH_FACILITIES]));

