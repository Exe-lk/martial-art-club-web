export type Branch = {
  slug: string;
  name: string;
  subtitle: string;
  location: string;
  heroImageUrl: string;
  cardImageUrl: string;
  headquartersLabel: string;
  address: string;
  phone: string;
  email: string;
  districtLabel: string;
  mapImageUrl: string;
  headCoach: {
    name: string;
    title: string;
    bio: string;
    imageUrl: string;
  };
};

export const branches: Branch[] = [
  {
    slug: "urubokka",
    name: "Jeet Kun Do - Urubokka",
    subtitle: "Jeet Kun Do",
    location: "Urubokka",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0oOwi9rXv8msd57wzdxeGK231KI0psuacq0mUVisn3Her54OklCuEVsNY4gxXJUhuquPz7j6eJOVHX0SB5Vuto1Yd9HMz6ueK6YQwtf3XMBIHhVq-G3RjNb9K70EBF46vY7oN8Hc1zM-e5n_a9ynPt8jQ-os9ZYQ8qwBL-gWSSG2AVwvX1SwslAV5oS5_kdQzJq3POyHZ_4HWtPYp_ejVvRxsjoBgRTqyGYlncaoMl5K5BkPDoPoJFEnonnJ1GU3YzUG7bUSc40",
    cardImageUrl: "/gallery/kun-fu/JKDA.jpg",
    headquartersLabel: "Headquarters",
    address: "123 Warrior Way, Combat City",
    phone: "+1 (555) 123-4567",
    email: "info@apexmartialarts.com",
    districtLabel: "Downtown District",
    mapImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZcAZJQTElEbRNaA1CZ67wkMBqxppaut2YNTHnTrGXNr_3vdJ6sUzwtmt9bVxnM7JzXyoEPjaVJr96ejdl8Lf512rqGwPQr5liUn5eZfw7m9EJIezZbordVFw2JeQmLPgJ6nwQ7dP6HsHV1MVp3nmQkLIiB_LVEiQcJ9L-7CunUaCWrpaCDc6RStJhH173XHvzJYAAh76KKrjtGbCg-xQoyHLjI_2XrQFQja5U66VRmAaYlqDdAn_577zSjqRWQ-3ELI6go7MfZJg",
    headCoach: {
      name: "Coach R. Silva",
      title: "Head Coach • Jeet Kune Do",
      bio: "Focused on functional self‑defense, timing, and athletic conditioning. Expect structured fundamentals, safe progression, and high-intensity pad work.",
      imageUrl: "/gallery/training/JKD.jpg",
    },
  },
  {
    slug: "walasmulla",
    name: "Jeet Kun Do - Walasmulla",
    subtitle: "High-Performance Training • Strength & Conditioning",
    location: "Walasmulla",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0oOwi9rXv8msd57wzdxeGK231KI0psuacq0mUVisn3Her54OklCuEVsNY4gxXJUhuquPz7j6eJOVHX0SB5Vuto1Yd9HMz6ueK6YQwtf3XMBIHhVq-G3RjNb9K70EBF46vY7oN8Hc1zM-e5n_a9ynPt8jQ-os9ZYQ8qwBL-gWSSG2AVwvX1SwslAV5oS5_kdQzJq3POyHZ_4HWtPYp_ejVvRxsjoBgRTqyGYlncaoMl5K5BkPDoPoJFEnonnJ1GU3YzUG7bUSc40",
    cardImageUrl: "/gallery/wushu/wusuA.jpg",
    headquartersLabel: "Performance Desk",
    address: "88 Victory Rd, Sports District",
    phone: "+1 (555) 909-IRON",
    email: "elite@apexmartialarts.com",
    districtLabel: "Sports District",
    mapImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZcAZJQTElEbRNaA1CZ67wkMBqxppaut2YNTHnTrGXNr_3vdJ6sUzwtmt9bVxnM7JzXyoEPjaVJr96ejdl8Lf512rqGwPQr5liUn5eZfw7m9EJIezZbordVFw2JeQmLPgJ6nwQ7dP6HsHV1MVp3nmQkLIiB_LVEiQcJ9L-7CunUaCWrpaCDc6RStJhH173XHvzJYAAh76KKrjtGbCg-xQoyHLjI_2XrQFQja5U66VRmAaYlqDdAn_577zSjqRWQ-3ELI6go7MfZJg",
    headCoach: {
      name: "Coach N. Perera",
      title: "Head Coach • Conditioning & Combat Fitness",
      bio: "Strength, mobility, and speed training built for martial artists. Sessions blend technical drills with performance conditioning for all levels.",
      imageUrl: "/gallery/wushu/wusuA.jpg",
    },
  },
  {
    slug: "beliatta",
    name: "Jeet Kun Do - Beliatta",
    subtitle: "Family Programs • Kids & Beginners Friendly",
    location: "Beliaththa",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0oOwi9rXv8msd57wzdxeGK231KI0psuacq0mUVisn3Her54OklCuEVsNY4gxXJUhuquPz7j6eJOVHX0SB5Vuto1Yd9HMz6ueK6YQwtf3XMBIHhVq-G3RjNb9K70EBF46vY7oN8Hc1zM-e5n_a9ynPt8jQ-os9ZYQ8qwBL-gWSSG2AVwvX1SwslAV5oS5_kdQzJq3POyHZ_4HWtPYp_ejVvRxsjoBgRTqyGYlncaoMl5K5BkPDoPoJFEnonnJ1GU3YzUG7bUSc40",
    cardImageUrl: "/gallery/jeet-kun-do/kun-fu.jpg",
    headquartersLabel: "Front Desk",
    address: "45 Titan St, Westside",
    phone: "+1 (555) 000-2222",
    email: "westside@apexmartialarts.com",
    districtLabel: "Westside",
    mapImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZcAZJQTElEbRNaA1CZ67wkMBqxppaut2YNTHnTrGXNr_3vdJ6sUzwtmt9bVxnM7JzXyoEPjaVJr96ejdl8Lf512rqGwPQr5liUn5eZfw7m9EJIezZbordVFw2JeQmLPgJ6nwQ7dP6HsHV1MVp3nmQkLIiB_LVEiQcJ9L-7CunUaCWrpaCDc6RStJhH173XHvzJYAAh76KKrjtGbCg-xQoyHLjI_2XrQFQja5U66VRmAaYlqDdAn_577zSjqRWQ-3ELI6go7MfZJg",
    headCoach: {
      name: "Coach S. Jayasinghe",
      title: "Head Coach • Beginners & Kids Program",
      bio: "A calm, detail-focused coaching style with a strong emphasis on safety, confidence, and fundamentals. Ideal for first-time students and juniors.",
      imageUrl: "/gallery/training/taining-time4.jpg",
    },
  },
  {
    slug: "waligama",
    name: "Jeet Kun Do - Waligama",
    subtitle: "Family Programs • Kids & Beginners Friendly",
    location: "Waligama",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0oOwi9rXv8msd57wzdxeGK231KI0psuacq0mUVisn3Her54OklCuEVsNY4gxXJUhuquPz7j6eJOVHX0SB5Vuto1Yd9HMz6ueK6YQwtf3XMBIHhVq-G3RjNb9K70EBF46vY7oN8Hc1zM-e5n_a9ynPt8jQ-os9ZYQ8qwBL-gWSSG2AVwvX1SwslAV5oS5_kdQzJq3POyHZ_4HWtPYp_ejVvRxsjoBgRTqyGYlncaoMl5K5BkPDoPoJFEnonnJ1GU3YzUG7bUSc40",
    cardImageUrl: "/gallery/jeet-kun-do/kun-fu.jpg",
    headquartersLabel: "Front Desk",
    address: "45 Titan St, Westside",
    phone: "+1 (555) 000-2222",
    email: "westside@apexmartialarts.com",
    districtLabel: "Westside",
    mapImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZcAZJQTElEbRNaA1CZ67wkMBqxppaut2YNTHnTrGXNr_3vdJ6sUzwtmt9bVxnM7JzXyoEPjaVJr96ejdl8Lf512rqGwPQr5liUn5eZfw7m9EJIezZbordVFw2JeQmLPgJ6nwQ7dP6HsHV1MVp3nmQkLIiB_LVEiQcJ9L-7CunUaCWrpaCDc6RStJhH173XHvzJYAAh76KKrjtGbCg-xQoyHLjI_2XrQFQja5U66VRmAaYlqDdAn_577zSjqRWQ-3ELI6go7MfZJg",
    headCoach: {
      name: "Coach D. Fernando",
      title: "Branch Coach",
      bio: "Training built around discipline, fitness, and practical technique. Suitable for beginners through intermediate students.",
      imageUrl: "/gallery/training/taining-time3.jpg",
    },
  },
  {
    slug: "hakmana",
    name: "Jeet Kun Do - Hakmana",
    subtitle: "Family Programs • Kids & Beginners Friendly",
    location: "Hakmana",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0oOwi9rXv8msd57wzdxeGK231KI0psuacq0mUVisn3Her54OklCuEVsNY4gxXJUhuquPz7j6eJOVHX0SB5Vuto1Yd9HMz6ueK6YQwtf3XMBIHhVq-G3RjNb9K70EBF46vY7oN8Hc1zM-e5n_a9ynPt8jQ-os9ZYQ8qwBL-gWSSG2AVwvX1SwslAV5oS5_kdQzJq3POyHZ_4HWtPYp_ejVvRxsjoBgRTqyGYlncaoMl5K5BkPDoPoJFEnonnJ1GU3YzUG7bUSc40",
    cardImageUrl: "/gallery/jeet-kun-do/kun-fu.jpg",
    headquartersLabel: "Front Desk",
    address: "45 Titan St, Westside",
    phone: "+1 (555) 000-2222",
    email: "westside@apexmartialarts.com",
    districtLabel: "Westside",
    mapImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZcAZJQTElEbRNaA1CZ67wkMBqxppaut2YNTHnTrGXNr_3vdJ6sUzwtmt9bVxnM7JzXyoEPjaVJr96ejdl8Lf512rqGwPQr5liUn5eZfw7m9EJIezZbordVFw2JeQmLPgJ6nwQ7dP6HsHV1MVp3nmQkLIiB_LVEiQcJ9L-7CunUaCWrpaCDc6RStJhH173XHvzJYAAh76KKrjtGbCg-xQoyHLjI_2XrQFQja5U66VRmAaYlqDdAn_577zSjqRWQ-3ELI6go7MfZJg",
    headCoach: {
      name: "Coach M. Lakshan",
      title: "Branch Coach",
      bio: "A fundamentals-first approach with progressive drills and partner work. Learn solid basics and build confidence week by week.",
      imageUrl: "/gallery/training/taining-time4.jpg",
    },
  },
  {
    slug: "weerakatiya",
    name: "Jeet Kun Do - Weerakatiya",
    subtitle: "Family Programs • Kids & Beginners Friendly",
    location: "Weerakatiya",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0oOwi9rXv8msd57wzdxeGK231KI0psuacq0mUVisn3Her54OklCuEVsNY4gxXJUhuquPz7j6eJOVHX0SB5Vuto1Yd9HMz6ueK6YQwtf3XMBIHhVq-G3RjNb9K70EBF46vY7oN8Hc1zM-e5n_a9ynPt8jQ-os9ZYQ8qwBL-gWSSG2AVwvX1SwslAV5oS5_kdQzJq3POyHZ_4HWtPYp_ejVvRxsjoBgRTqyGYlncaoMl5K5BkPDoPoJFEnonnJ1GU3YzUG7bUSc40",
    cardImageUrl: "/gallery/jeet-kun-do/kun-fu.jpg",
    headquartersLabel: "Front Desk",
    address: "45 Titan St, Westside",
    phone: "+1 (555) 000-2222",
    email: "westside@apexmartialarts.com",
    districtLabel: "Westside",
    mapImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZcAZJQTElEbRNaA1CZ67wkMBqxppaut2YNTHnTrGXNr_3vdJ6sUzwtmt9bVxnM7JzXyoEPjaVJr96ejdl8Lf512rqGwPQr5liUn5eZfw7m9EJIezZbordVFw2JeQmLPgJ6nwQ7dP6HsHV1MVp3nmQkLIiB_LVEiQcJ9L-7CunUaCWrpaCDc6RStJhH173XHvzJYAAh76KKrjtGbCg-xQoyHLjI_2XrQFQja5U66VRmAaYlqDdAn_577zSjqRWQ-3ELI6go7MfZJg",
    headCoach: {
      name: "Coach P. Nuwan",
      title: "Branch Coach",
      bio: "Balanced training for fitness and self‑defense. Ideal for students who want steady progress with clear weekly goals.",
      imageUrl: "/gallery/training/taining-time3.jpg",
    },
  },
];

