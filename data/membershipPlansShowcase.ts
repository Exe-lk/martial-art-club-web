export type MembershipPlanShowcase = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

export const MEMBERSHIP_PLANS_SHOWCASE: MembershipPlanShowcase[] = [
  {
    title: "Beginner membership",
    description:
      "New to training and want a steady start? Our beginner plan gives you structured weekly classes, essential gear support, and coaches who meet you where you are—so you can build habits and confidence without overwhelm.",
    imageSrc: "/gallery/training/taining-time.jpg",
    imageAlt: "Beginner martial arts training session",
    ctaLabel: "Find out more",
    ctaHref: "/contact",
  },
  {
    title: "Standard membership",
    description:
      "Ready to train more often and unlock the full floor? Standard membership adds more weekly sessions, full facility access, and open training options—ideal when you want consistency, variety, and room to grow.",
    imageSrc: "/gallery/training/taining-time2.jpg",
    imageAlt: "Group martial arts class in session",
    ctaLabel: "Find out more",
    ctaHref: "/contact",
  },
  {
    title: "Professional membership",
    description:
      "For athletes who want the maximum from every week: unlimited classes, pro gear considerations, priority access, and dedicated one-on-one coaching time—everything aligned for serious progression.",
    imageSrc: "/gallery/training/taining-time3.jpg",
    imageAlt: "Advanced martial arts training",
    ctaLabel: "Find out more",
    ctaHref: "/contact",
  },
];
