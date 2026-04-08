export type BranchHeadCoach = {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
};

export type Branch = {
  name: string;
  /** URL segment for `/branches/[slug]`. */
  slug: string;
  subtitle: string;
  headCoach: BranchHeadCoach;
  /** Short locality label (used in cards and hero). */
  location: string;
  heroImageUrl: string;
  cardImageUrl: string;
  headquartersLabel: string;
  address: string;
  phone: string;
  email: string;
  districtLabel: string;
  /**
   * Google Maps embed `iframe` src. Prefer Share → Embed map from Google Maps, or
   * `https://www.google.com/maps?q=…&output=embed` for a place query.
   */
  mapEmbedUrl: string;
};

const coachBio =
  "Leads training at this branch. Contact us by phone or email for class times and enrollment.";

export const branches: Branch[] = [
  {
    name: "Jeet Kun Do - Urubokka",
    slug: "urubokka",
    subtitle: "Jeet Kun Do",
    location: "Urubokka",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0oOwi9rXv8msd57wzdxeGK231KI0psuacq0mUVisn3Her54OklCuEVsNY4gxXJUhuquPz7j6eJOVHX0SB5Vuto1Yd9HMz6ueK6YQwtf3XMBIHhVq-G3RjNb9K70EBF46vY7oN8Hc1zM-e5n_a9ynPt8jQ-os9ZYQ8qwBL-gWSSG2AVwvX1SwslAV5oS5_kdQzJq3POyHZ_4HWtPYp_ejVvRxsjoBgRTqyGYlncaoMl5K5BkPDoPoJFEnonnJ1GU3YzUG7bUSc40",
    cardImageUrl: "/gallery/kun-fu/JKDA.jpg",
    headquartersLabel: "Headquarters",
    address: "Main Rd, Urubokka, Matara 81074, Sri Lanka",
    phone: "+94 71 234 5678",
    email: "urubokka@apexmartialarts.lk",
    districtLabel: "Matara District",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Urubokka%2C+Matara%2C+Sri+Lanka&output=embed",
    headCoach: {
      name: "Lead Instructor — Urubokka",
      title: "Head Coach",
      bio: coachBio,
      imageUrl: "/gallery/kun-fu/JKDA.jpg",
    },
  },
  {
    name: "Jeet Kun Do - Walasmulla",
    slug: "walasmulla",
    subtitle: "High-Performance Training • Strength & Conditioning",
    location: "Walasmulla",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0oOwi9rXv8msd57wzdxeGK231KI0psuacq0mUVisn3Her54OklCuEVsNY4gxXJUhuquPz7j6eJOVHX0SB5Vuto1Yd9HMz6ueK6YQwtf3XMBIHhVq-G3RjNb9K70EBF46vY7oN8Hc1zM-e5n_a9ynPt8jQ-os9ZYQ8qwBL-gWSSG2AVwvX1SwslAV5oS5_kdQzJq3POyHZ_4HWtPYp_ejVvRxsjoBgRTqyGYlncaoMl5K5BkPDoPoJFEnonnJ1GU3YzUG7bUSc40",
    cardImageUrl: "/gallery/wushu/wusuA.jpg",
    headquartersLabel: "Performance Desk",
    address: "Town Centre, Walasmulla, Hambantota 82450, Sri Lanka",
    phone: "+94 71 345 6789",
    email: "walasmulla@apexmartialarts.lk",
    districtLabel: "Hambantota District",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Walasmulla%2C+Hambantota%2C+Sri+Lanka&output=embed",
    headCoach: {
      name: "Lead Instructor — Walasmulla",
      title: "Head Coach",
      bio: coachBio,
      imageUrl: "/gallery/wushu/wusuA.jpg",
    },
  },
  {
    name: "Jeet Kun Do - Beliatta",
    slug: "beliatta",
    subtitle: "Family Programs • Kids & Beginners Friendly",
    location: "Beliatta",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0oOwi9rXv8msd57wzdxeGK231KI0psuacq0mUVisn3Her54OklCuEVsNY4gxXJUhuquPz7j6eJOVHX0SB5Vuto1Yd9HMz6ueK6YQwtf3XMBIHhVq-G3RjNb9K70EBF46vY7oN8Hc1zM-e5n_a9ynPt8jQ-os9ZYQ8qwBL-gWSSG2AVwvX1SwslAV5oS5_kdQzJq3POyHZ_4HWtPYp_ejVvRxsjoBgRTqyGYlncaoMl5K5BkPDoPoJFEnonnJ1GU3YzUG7bUSc40",
    cardImageUrl: "/gallery/jeet-kun-do/kun-fu.jpg",
    headquartersLabel: "Front Desk",
    address: "Beliatta Junction, Beliatta, Matara 82100, Sri Lanka",
    phone: "+94 71 456 7890",
    email: "beliatta@apexmartialarts.lk",
    districtLabel: "Matara District",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Beliatta%2C+Matara%2C+Sri+Lanka&output=embed",
    headCoach: {
      name: "Lead Instructor — Beliatta",
      title: "Head Coach",
      bio: coachBio,
      imageUrl: "/gallery/jeet-kun-do/kun-fu.jpg",
    },
  },
  {
    name: "Jeet Kun Do - Weligama",
    slug: "weligama",
    subtitle: "Family Programs • Kids & Beginners Friendly",
    location: "Weligama",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0oOwi9rXv8msd57wzdxeGK231KI0psuacq0mUVisn3Her54OklCuEVsNY4gxXJUhuquPz7j6eJOVHX0SB5Vuto1Yd9HMz6ueK6YQwtf3XMBIHhVq-G3RjNb9K70EBF46vY7oN8Hc1zM-e5n_a9ynPt8jQ-os9ZYQ8qwBL-gWSSG2AVwvX1SwslAV5oS5_kdQzJq3POyHZ_4HWtPYp_ejVvRxsjoBgRTqyGYlncaoMl5K5BkPDoPoJFEnonnJ1GU3YzUG7bUSc40",
    cardImageUrl: "/gallery/jeet-kun-do/kun-fu.jpg",
    headquartersLabel: "Front Desk",
    address: "Matara Rd, Weligama, Matara 81700, Sri Lanka",
    phone: "+94 71 567 8901",
    email: "weligama@apexmartialarts.lk",
    districtLabel: "Matara District",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Weligama%2C+Matara%2C+Sri+Lanka&output=embed",
    headCoach: {
      name: "Lead Instructor — Weligama",
      title: "Head Coach",
      bio: coachBio,
      imageUrl: "/gallery/jeet-kun-do/kun-fu.jpg",
    },
  },
  {
    name: "Jeet Kun Do - Hakmana",
    slug: "hakmana",
    subtitle: "Family Programs • Kids & Beginners Friendly",
    location: "Hakmana",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0oOwi9rXv8msd57wzdxeGK231KI0psuacq0mUVisn3Her54OklCuEVsNY4gxXJUhuquPz7j6eJOVHX0SB5Vuto1Yd9HMz6ueK6YQwtf3XMBIHhVq-G3RjNb9K70EBF46vY7oN8Hc1zM-e5n_a9ynPt8jQ-os9ZYQ8qwBL-gWSSG2AVwvX1SwslAV5oS5_kdQzJq3POyHZ_4HWtPYp_ejVvRxsjoBgRTqyGYlncaoMl5K5BkPDoPoJFEnonnJ1GU3YzUG7bUSc40",
    cardImageUrl: "/gallery/jeet-kun-do/kun-fu.jpg",
    headquartersLabel: "Front Desk",
    address: "Hakmana Town, Hakmana, Matara 81300, Sri Lanka",
    phone: "+94 71 678 9012",
    email: "hakmana@apexmartialarts.lk",
    districtLabel: "Matara District",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Hakmana%2C+Matara%2C+Sri+Lanka&output=embed",
    headCoach: {
      name: "Lead Instructor — Hakmana",
      title: "Head Coach",
      bio: coachBio,
      imageUrl: "/gallery/jeet-kun-do/kun-fu.jpg",
    },
  },
  {
    name: "Jeet Kun Do - Weerakatiya",
    slug: "weerakatiya",
    subtitle: "Family Programs • Kids & Beginners Friendly",
    location: "Weerakatiya",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0oOwi9rXv8msd57wzdxeGK231KI0psuacq0mUVisn3Her54OklCuEVsNY4gxXJUhuquPz7j6eJOVHX0SB5Vuto1Yd9HMz6ueK6YQwtf3XMBIHhVq-G3RjNb9K70EBF46vY7oN8Hc1zM-e5n_a9ynPt8jQ-os9ZYQ8qwBL-gWSSG2AVwvX1SwslAV5oS5_kdQzJq3POyHZ_4HWtPYp_ejVvRxsjoBgRTqyGYlncaoMl5K5BkPDoPoJFEnonnJ1GU3YzUG7bUSc40",
    cardImageUrl: "/gallery/jeet-kun-do/kun-fu.jpg",
    headquartersLabel: "Front Desk",
    address: "Weerakatiya Rd, Weerakatiya, Hambantota 82200, Sri Lanka",
    phone: "+94 71 789 0123",
    email: "weerakatiya@apexmartialarts.lk",
    districtLabel: "Hambantota District",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Weerakatiya%2C+Hambantota%2C+Sri+Lanka&output=embed",
    headCoach: {
      name: "Lead Instructor — Weerakatiya",
      title: "Head Coach",
      bio: coachBio,
      imageUrl: "/gallery/jeet-kun-do/kun-fu.jpg",
    },
  },
];
