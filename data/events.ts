export type EventState = "upcoming" | "past";

export type ClubEvent = {
  id: string;
  state: EventState;
  eyebrow: string;
  title: string;
  accentWord?: string;
  description: string;
  longDescription?: string;
  highlights?: readonly string[];
  dateMonth?: string;
  dateDay?: string;
  timeLabel?: string;
  ctaLabel: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  gallery?: readonly { src: string; alt?: string }[];
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
    longDescription:
      "Experience a high-intensity day of structured matches, technical demonstrations, and disciplined competition. This championship is designed to test composure under pressure, movement efficiency, and tactical decision-making.",
    highlights: [
      "Competitive bouts across multiple levels",
      "Technical demonstrations and form showcase",
      "Awards, recognition, and photo moments",
    ],
    dateMonth: "APR",
    dateDay: "18",
    timeLabel: "11:00 AM - 1:00 PM",
    ctaLabel: "Registration Details",
    ctaHref: "/contact",
    imageSrc: "/stay-active-and-healthy.PNG",
    imageAlt: "Martial arts event photo from the club gallery",
    gallery: [
      { src: "/stay-active-and-healthy.PNG", alt: "Championship training moment" },
      {
        src: "/gallery/events/480326514_596697989934796_4121116657036155314_n.jpg",
        alt: "Championship action highlight",
      },
    ],
  },
  {
    id: "zen-power-seminar",
    state: "upcoming",
    eyebrow: "Technical Seminar",
    title: "Zen & Power Seminar at Black Dragon Jeet Kune DO",
    accentWord: "Power",
    description:
      "A deep dive into mental focus and traditional kata mastery. Aligning the blade of the mind with the engine of the body to reach peak performance.",
    longDescription:
      "A focused seminar blending breath control, timing, and structure. Expect a guided progression from fundamentals into applied drills that sharpen balance, power generation, and calm decision-making.",
    highlights: [
      "Mindset + breathwork for pressure control",
      "Kata fundamentals and structured drilling",
      "Partner work for timing and distance",
    ],
    dateMonth: "MAY",
    dateDay: "02",
    timeLabel: "10:00 AM - 12:00 PM",
    ctaLabel: "Curriculum Overview",
    ctaHref: "/classes",
    imageSrc: "/gallery/events/480326514_596697989934796_4121116657036155314_n.jpg",
    imageAlt: "Martial arts seminar photo from the club gallery",
    gallery: [
      {
        src: "/gallery/events/480326514_596697989934796_4121116657036155314_n.jpg",
        alt: "Seminar group training",
      },
      {
        src: "/gallery/events/480281407_596698423268086_8216583939379925773_n.jpg",
        alt: "Seminar group training",
      },
    ],
  },
  {
    id: "belt-promotion",
    state: "past",
    eyebrow: "Achievement Milestone",
    title: "Elite Belt Promotion Ceremony",
    accentWord: "Promotion",
    description:
      "Honoring the dedication and progress of our dedicated practitioners. Witness the evolution of the next generation of masters.",
    longDescription:
      "A ceremony recognizing consistent training, character, and technical development. Promotions reflect the effort put in over time—discipline, resilience, and respect shown on and off the mat.",
    highlights: [
      "Promotion acknowledgements and certificates",
      "Group photos and family moments",
      "Celebration of disciplined progress",
    ],
    dateMonth: "MAR",
    dateDay: "12",
    timeLabel: "4:00 PM - 6:00 PM",
    ctaLabel: "Honoree List",
    ctaHref: "/about",
    imageSrc: "/gallery/events/480281407_596698423268086_8216583939379925773_n.jpg",
    imageAlt: "Belt promotion ceremony photo from the club gallery",
    gallery: [
      {
        src: "/gallery/events/480281407_596698423268086_8216583939379925773_n.jpg",
        alt: "Promotion ceremony highlights",
      },
      {
        src: "/gallery/events/480440785_596698313268097_8199364771232065174_n.jpg",
        alt: "Promotion ceremony highlights",
      },
    ],
  },
] as const;

