export type EventState = "upcoming" | "past";

export type ClubEvent = {
  id: string;
  state: EventState;
  eyebrow: string;
  title: string;
  accentWord?: string;
  description: string;
  ctaLabel: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const EVENTS: readonly ClubEvent[] = [
  {
    id: "annual-championship",
    state: "upcoming",
    eyebrow: "Competition Phase",
    title: "Annual Martial Arts Championship",
    accentWord: "Championship",
    description:
      "Showcasing skill, discipline, and competitive spirit among our students. An elite-level display of technical combat and unwavering resolve under pressure.",
    ctaLabel: "Registration Details",
    ctaHref: "/contact",
    imageSrc: "/stay-active-and-healthy.PNG",
    imageAlt: "Martial arts event photo from the club gallery",
  },
  {
    id: "zen-power-seminar",
    state: "upcoming",
    eyebrow: "Technical Seminar",
    title: "Zen & Power Seminar",
    accentWord: "Power",
    description:
      "A deep dive into mental focus and traditional kata mastery. Aligning the blade of the mind with the engine of the body to reach peak performance.",
    ctaLabel: "Curriculum Overview",
    ctaHref: "/classes",
    imageSrc: "/gallery/events/480326514_596697989934796_4121116657036155314_n.jpg",
    imageAlt: "Martial arts seminar photo from the club gallery",
  },
  {
    id: "belt-promotion",
    state: "past",
    eyebrow: "Achievement Milestone",
    title: "Elite Belt Promotion Ceremony",
    accentWord: "Promotion",
    description:
      "Honoring the dedication and progress of our dedicated practitioners. Witness the evolution of the next generation of masters.",
    ctaLabel: "Honoree List",
    ctaHref: "/about",
    imageSrc: "/gallery/events/480281407_596698423268086_8216583939379925773_n.jpg",
    imageAlt: "Belt promotion ceremony photo from the club gallery",
  },
] as const;

