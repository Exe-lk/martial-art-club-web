export type BlogAuthor = {
  name: string;
  imageUrl: string;
  imageAlt: string;
};

export type BlogHeadline = {
  line1: string;
  accent: string;
  line2: string;
};

export type BlogImage = {
  url: string;
  alt: string;
};

export type BlogMindsetSection = {
  title: string;
  paragraphs: [string, string];
  image: BlogImage;
};

export type BlogHighlightQuote = {
  text: string;
  // Person or source attribution (shown as cite line)
  cite: string;
};

export type BlogBento = {
  title: string;
  items: BlogImage[];
};

export type BlogPillar = {
  title: string;
  body: string;
  image: BlogImage;
};

export type BlogRelatedTeaser = {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: BlogImage;
};

export type BlogArticle = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  category: string;
  headline: BlogHeadline;
  author: BlogAuthor;
  publishedDate: string;
  readTimeLabel: string;
  hero: BlogImage;
  introLead: string;
  introBody: string;
  fullWidthImage?: BlogImage;
  mindset?: BlogMindsetSection;
  highlightQuote?: BlogHighlightQuote;
  bento?: BlogBento;
  pillars?: {
    title: string;
    items: BlogPillar[];
  };
  /** Slugs for “More Wisdom”; falls back to any other posts if omitted */
  relatedSlugs?: string[];
  /** Shown on /blog cards (first 3 by order) */
  featuredOnIndex: boolean;
  /** Short summary for listing cards */
  listSummary: string;
  /** Concise title for cards and “related” section */
  cardTitle: string;
};

export const blogArticles: BlogArticle[] = [
  {


    slug: "modern-warrior-discipline",
    seoTitle: "The Path of the Modern Warrior | IRON OBSIDIAN",
    seoDescription:
      "Discipline in every movement: how martial arts principles build mental fortitude and intent in modern training.",
    category: "Philosophy",
    headline: {
      line1: "The Path of the",
      accent: "Modern Warrior:",
      line2: "Discipline in Every Movement",
    },
    author: {
      name: "Master Chen",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1HZXgCMwdaYewvug95BwmHHQoNlTZOn7PKcIxdPo9rH6is_uvoIN_G7jfgNzzAgJ473Z-U3khvK0RXRcTQebjsfp3kyFMLoX74WYA8iHLZpST9VaBk7oY8dQDMjbEM0-hr0NxvMNTxFaZc4tzr1nZded7XFOFtiyOcql62VGHhYQNLPH1Bi40mOOR6h7HKZamNxHHSeeVkcmQyN1GfErH0bFW8ssiCg2Uml6Uos5Q_TnlSwijYs_GnA3SSwroJ8qmop648ohf0gk",
      imageAlt:
        "Close up portrait of a mature martial arts master with a calm expression, professional studio lighting against a dark background.",
    },
    publishedDate: "Oct 24, 2024",
    readTimeLabel: "5-Min Read",
    hero: {
      url: "/globe.svg",
      alt: "Article cover illustration.",
    },
    introLead:
      "In an era of instant gratification and digital noise, the ancient principles of martial arts offer more than just physical combat techniques. They provide a blueprint for mental fortitude. Discipline is not a punishment; it is the ultimate form of self-respect. It is the quiet voice that demands excellence when no one is watching.",
    introBody:
      'Modern training often focuses on the "what"—the strikes, the takedowns, the agility. But the "how" is where the true warrior is forged. Every repetition in the gym is a micro-transaction in the bank of character. To move with discipline is to move with intent, stripping away the unnecessary until only the essential remains.',
    fullWidthImage: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeRpOgM0pVX5Ryi3-dyxPNn2TcHVmFhwOTvcBv06jHs4IRM90rM_IYSwXijGiEwToUJBX6HtDNFZy4GUxM83kHal50aujsv8pANlIyMfTGd9o0RaMLUlAJBmGhefr2QHt1CtDAz4a0DXsKUd-QhNgXJDbLCB4MX1SZG0q-azuRlx_8yIavmwXp1Jp_iPE-x3TcXCqF7YglaL28FK95mDf1NIj7qyjkKtgEDZsnjMwJrrOvc3j70_znHiXe5TCjujasgOzq0dYrCK8",
      alt: "High-action shot of multiple fighters training in a grit-style gym with dramatic overhead lighting and sweat glistening, cinematic motion blur.",
    },
    mindset: {
      title: "The Architecture of Mindset",
      paragraphs: [
        "Before the first strike is thrown, the battle is won in the quietude of the mind. Meditation in martial arts isn't just relaxation—it's tactical focus. It's the ability to remain calm in the eye of the storm, maintaining a panoramic awareness while others are blinded by adrenaline.",
        "This mental equilibrium allows a practitioner to transcend reaction and enter a state of action. It is the bridge between the physical exertion and spiritual growth.",
      ],
      image: {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFwIGl0pjGV3wXyKIUToKLUau0tF0jWO_e8NszeblQDXMLj8zfeydHVsRtt9dz2ZmDciUUgzzo0rXP42PkKqeRAFTRAnKqXkTpE1LDkiVZdt4GBW17Hc_hbg3nXxnaxds6fBjZQxi4UFcoH6Co2nqk0jtbJNnQGM5L543QdO9xaBmR4KTlMF1QX5TzZfmSDy_tk8k8291OZW5yvvCbbr_QIsSTBagW0W4IaPhjtJWBkcwl1DgSTgXglRQtiF9DZUL4W6iZBwWzMtY",
        alt: "A martial artist sitting in seiza meditation pose, silhouette against a soft backlighting, minimalist and serene atmosphere.",
      },
    },
    highlightQuote: {
      text: "Discipline is the bridge between goals and accomplishment.",
      cite: "Jim Rohn",
    },
    bento: {
      title: "Moments of Transcendence",
      items: [
        {
          url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5XbfBfw466FTOEVdhkjdkxKnjLuyrRTNjMHGEdC3F_XTNdA_XwCaFDdurH0hrJzDgovB5sqOmrAJx4qKE56CUfY6UX0nqtmaTHRKtJdDptpT9QpEhijGfmXyzR7DyV7S3xfwen3h2HGXrFnJFe3NgDjA9f4_6xtlwPbNGHq5ULfeYys5vw0unEs_lWS02yqOSMolwl50BsFFxEpFJjfX5el8Q06B0vA0qB5WQbjRrZFQpZVY4IKNt0ii6mgPC9NV-HRFqpqbcuaA",
          alt: "Close up of a black belt being tied around a traditional white gi, high contrast black and white photography.",
        },
        {
          url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrtfIK-IX5XLES5cMtsx336XZwbNFB7BMwQ-tfazhlDoZdER2g2RjEZQ1QZR5bw1lEW6Su8sAvKr1Icy4B_6UWOE5KecWPrEy9YcHZT-mMQFptSG8vEWuR9_JtjwhwtyFuNnAwev2SnXVn7JcunWDS5qrCOsPG4rdOEs-JstiqPuR-sGKIAub6GSbVLqdlkmX_cgMgIiZ8wxgDcLiNuBz4w5d7IprYOEu9NLLZ5kVjlZH4ivf_SuyrUX6eYXnkDZptQuBOvUuCzzw",
          alt: "A group of martial artists bowing in unison at the start of a class in a traditional wooden dojo.",
        },
        {
          url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuP69w-eedVT4fe64rEkpUKYUbxXH6-BYC8YgIydxaMrS69QwHinMizUW8wLuFSOxTJvQtFcFD5DMAfSp-uIl-31NHjpicCt9wQFX85jYDByrpEOe7Z-bqgscVUdLhNIMWIpUCYpZSIjRQ5OaPUAA-B9z5neY1STJwZ3Gt94BLOLza06kZ0EvqP19lHYc1RkiM5KIDLcw0KN43DtFtV8Zjq4zJjJsZKJcJKlRwPa5tfrOR9H4YhDyOzuakYLfAU9eqaQxXG-Nt8ds",
          alt: "Intense close up of two martial artists engaged in a technical grappling exchange, sweat and focus visible.",
        },
      ],
    },
    pillars: {
      title: "3 Pillars of Progress",
      items: [
        {
          title: "Focus",
          body: "The elimination of the non-essential. Total immersion in the present moment, where distraction ceases to exist.",
          image: {
            url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBU7biFe44yfc7ag1t_UvRTI7SHvjf09Whbn0z_GoGJBFzVZ_w3hLwmNoWnZ4QTTKfG9KqFLysRTXCNSpoPzvx2A3fTP6HKJggA0yt3GPV2hCxZWRY4fstNol1DQeXonTQmOE6o1DQbH5KPfsus959j0XeBOCF6pvzG1tUaS7t3xb9AiCKvZmGCpCcKb8-ctlbgNYfn9bT6OI4LUvdItePl-iw13r1YA55S--mQdTxAT-1O-XAnvnVCbSYyZwc-W40PQVnBDeVzZrzU",
            alt: "A close up of a martial artist's eyes, conveying intense focus and determination, moody lighting.",
          },
        },
        {
          title: "Practice",
          body: "The relentless pursuit of perfection through repetition. Turning conscious effort into instinctive reaction.",
          image: {
            url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjiJXVbtAWX7B71iZnnpLonY7bCG2nJNMfUZmwIutEG3tipdqLY-YxFWAXNV3HFJU6CMZzbYzHFT7SC3HESgPF_diXUyKGzX-yITG7sKMoE3e3xMKRjxkrPNy_Jsj78GdiERicA9qjaeB0o33oXT16HYI2dtwfeurtJfxAYDM4ElpIAXcLjRWTp8VjP34GMNFc88a4p0vuN2CiCq7Ch-3Jzhg1HSHQhmuw2jk8NzNJXYc5t6jS26GfHJNPBMQyrkGMY5OBdJyU1RU",
            alt: "A martial artist punching a heavy bag, water droplets flying off the bag, capturing the impact.",
          },
        },
        {
          title: "Respect",
          body: "Honor for the craft, the opponent, and oneself. The humility to remain a student for life, regardless of rank.",
          image: {
            url: "https://lh3.googleusercontent.com/aida-public/AB6AXuACifCZqYR5qDFeAoXQCJiA8r9rF1H1ielaalzZXaZwoSQb6tH5zoX-EGRqfrEz6U_srP_jgwmzRKBa1YiXfG_OPKkG5WwznGLOmJQzTVV8gcKhc3G7qANbXAdtmcoPRM2LaJ08wZFv_pfNedqgogr9PshO_z2jwHuZXK9JNYwWfB9bOigCQHbZDs9vDqpaxx3tn5GLMLoWnZz6P-16IA8iXwqy4L5sV9s8EYW--SuumlmmJDflQv5d-Le-zT-9cc1-GG7P5X0GAaI",
            alt: "Two martial artists bowing to each other in a traditional setting, demonstrating mutual respect.",
          },
        },
      ],
    },
    relatedSlugs: [
      "physics-perfect-strike",
      "overcoming-plateau",
      "agility-beyond-mat",
    ],
    featuredOnIndex: true,
    listSummary:
      "How ancient principles and modern training intersect—discipline as self-respect and intent in every rep.",
    cardTitle: "The Path of the Modern Warrior",
  },
  {


    
    slug: "physics-perfect-strike",
    seoTitle: "The Physics of a Perfect Strike | IRON OBSIDIAN",
    seoDescription:
      "Bio-mechanical principles that generate explosive power: chain, timing, and transfer through the body.",
    category: "Training",
    headline: {
      line1: "The Physics of a",
      accent: "Perfect Strike:",
      line2: "Power, Timing, and Chain",
    },
    author: {
      name: "Coach Rivera",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1HZXgCMwdaYewvug95BwmHHQoNlTZOn7PKcIxdPo9rH6is_uvoIN_G7jfgNzzAgJ473Z-U3khvK0RXRcTQebjsfp3kyFMLoX74WYA8iHLZpST9VaBk7oY8dQDMjbEM0-hr0NxvMNTxFaZc4tzr1nZded7XFOFtiyOcql62VGHhYQNLPH1Bi40mOOR6h7HKZamNxHHSeeVkcmQyN1GfErH0bFW8ssiCg2Uml6Uos5Q_TnlSwijYs_GnA3SSwroJ8qmop648ohf0gk",
      imageAlt: "Portrait of a combat coach in low-key lighting.",
    },
    publishedDate: "Sep 12, 2024",
    readTimeLabel: "7-Min Read",
    hero: {
      url: "/window.svg",
      alt: "Article cover illustration.",
    },
    introLead:
      "Explosive striking is not about isolated arm speed—it is a full-body negotiation between mass, acceleration, and timing. When the chain is clean, force arrives in a compact window that is hard to read and harder to brace.",
    introBody:
      "This article breaks down how stance, hip drive, fascia elasticity, and breath collaborate. You will leave with a checklist you can film, measure, and improve—whether you train karate, kickboxing, or hybrid combat sports.",
    fullWidthImage: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEfBCJF9iKXvlA7DmZOycHL1by3hkmK2R2ZhrAkCq_Hq1nWuFqS6n0JE6q7f2UtWgci4rJMh14Y1hSRz91tDGOVCReDL1Pxw8FUk9Ig8sg__lkJVzozPdt2DFU0zcYMTlM5zk5Zt6p6KkQR3vVo-f5oz9wnaUoExzsWcE1scQpo3Zd_8WOuFZapLUL4z7umAQEtOpKDuccvEnvP9_nQ2IN0GMgGhd9yH95l8qt8UfRCI2RWelsK7hEaeDcE1Az5XBXcF10UIBOuqs",
      alt: "A focused fighter preparing their hand wraps before a session, close up on textures.",
    },
    highlightQuote: {
      text: "Force is borrowed from the floor, amplified by the hips, and delivered through a relaxed final inch.",
      cite: "Iron Obsidian Coaching Staff",
    },
    relatedSlugs: ["modern-warrior-discipline", "overcoming-plateau", "agility-beyond-mat"],
    featuredOnIndex: true,
    listSummary:
      "Exploring the bio-mechanical principles that generate explosive power in pad work and sparring.",
    cardTitle: "The Physics of a Perfect Strike",
  },
  {
    slug: "overcoming-plateau",
    seoTitle: "Overcoming the Plateau | IRON OBSIDIAN",
    seoDescription:
      "Psychological strategies for pushing through training stagnation: reframing plateaus, micro-goals, and recovery.",
    category: "Mindset",
    headline: {
      line1: "Overcoming the",
      accent: "Plateau:",
      line2: "When Progress Feels Invisible",
    },
    author: {
      name: "Dr. Amina Cole",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1HZXgCMwdaYewvug95BwmHHQoNlTZOn7PKcIxdPo9rH6is_uvoIN_G7jfgNzzAgJ473Z-U3khvK0RXRcTQebjsfp3kyFMLoX74WYA8iHLZpST9VaBk7oY8dQDMjbEM0-hr0NxvMNTxFaZc4tzr1nZded7XFOFtiyOcql62VGHhYQNLPH1Bi40mOOR6h7HKZamNxHHSeeVkcmQyN1GfErH0bFW8ssiCg2Uml6Uos5Q_TnlSwijYs_GnA3SSwroJ8qmop648ohf0gk",
      imageAlt: "Portrait of a sports psychology consultant.",
    },
    publishedDate: "Aug 3, 2024",
    readTimeLabel: "6-Min Read",
    hero: {
      url: "/file.svg",
      alt: "Article cover illustration.",
    },
    introLead:
      "Plateaus are not absence of ability—they are adaptation catching up with demand. The mind interprets flat lines as failure, but the body often consolidates in silence before the next jump.",
    introBody:
      "We outline reframing tools, training variety without chaos, sleep and stress guardrails, and how to audit your sessions with honest video review so momentum returns without burnout.",
    mindset: {
      title: "Reframe the Flat Line",
      paragraphs: [
        "Track inputs—sleep, nutrition, session quality—before you judge outcomes. Consistency with small upgrades beats dramatic overreach that spikes cortisol.",
        "Micro-goals rebuild confidence: one sharper exit on a combo, one quieter breath under fatigue. Mastery is a ladder of details, not a single leap.",
      ],
      image: {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFwIGl0pjGV3wXyKIUToKLUau0tF0jWO_e8NszeblQDXMLj8zfeydHVsRtt9dz2ZmDciUUgzzo0rXP42PkKqeRAFTRAnKqXkTpE1LDkiVZdt4GBW17Hc_hbg3nXxnaxds6fBjZQxi4UFcoH6Co2nqk0jtbJNnQGM5L543QdO9xaBmR4KTlMF1QX5TzZfmSDy_tk8k8291OZW5yvvCbbr_QIsSTBagW0W4IaPhjtJWBkcwl1DgSTgXglRQtiF9DZUL4W6iZBwWzMtY",
        alt: "Martial artist in meditation; calm focus as metaphor for mental reset.",
      },
    },
    relatedSlugs: ["modern-warrior-discipline", "physics-perfect-strike", "agility-beyond-mat"],
    featuredOnIndex: true,
    listSummary:
      "Psychological strategies for pushing through training stagnation without losing heart.",
    cardTitle: "Overcoming the Plateau",
  },
  {
    slug: "agility-beyond-mat",
    seoTitle: "Agility Beyond the Mat | IRON OBSIDIAN",
    seoDescription:
      "How combat-sport footwork and reaction drills improve everyday vitality, balance, and coordination.",
    category: "Technique",
    headline: {
      line1: "Agility Beyond the",
      accent: "Mat:",
      line2: "Carryover to Real Life",
    },
    author: {
      name: "Sensei Okada",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1HZXgCMwdaYewvug95BwmHHQoNlTZOn7PKcIxdPo9rH6is_uvoIN_G7jfgNzzAgJ473Z-U3khvK0RXRcTQebjsfp3kyFMLoX74WYA8iHLZpST9VaBk7oY8dQDMjbEM0-hr0NxvMNTxFaZc4tzr1nZded7XFOFtiyOcql62VGHhYQNLPH1Bi40mOOR6h7HKZamNxHHSeeVkcmQyN1GfErH0bFW8ssiCg2Uml6Uos5Q_TnlSwijYs_GnA3SSwroJ8qmop648ohf0gk",
      imageAlt: "Portrait of a techniques coach.",
    },
    publishedDate: "Jul 19, 2024",
    readTimeLabel: "5-Min Read",
    hero: {
      url: "/next.svg",
      alt: "Article cover illustration.",
    },
    introLead:
      "Agility is not circus tricks—it is coordinated redirection of force. The same split steps and level changes that save you in sparring make stairs, crowds, and sudden pivots in daily life feel effortless.",
    introBody:
      "We map three carryover pathways: deceleration control, lateral readiness, and eyes-up scanning. Each has a simple drill progression you can stack after class in ten minutes.",
    fullWidthImage: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeRpOgM0pVX5Ryi3-dyxPNn2TcHVmFhwOTvcBv06jHs4IRM90rM_IYSwXijGiEwToUJBX6HtDNFZy4GUxM83kHal50aujsv8pANlIyMfTGd9o0RaMLUlAJBmGhefr2QHt1CtDAz4a0DXsKUd-QhNgXJDbLCB4MX1SZG0q-azuRlx_8yIavmwXp1Jp_iPE-x3TcXCqF7YglaL28FK95mDf1NIj7qyjkKtgEDZsnjMwJrrOvc3j70_znHiXe5TCjujasgOzq0dYrCK8",
      alt: "High-action training session; footwork and spacing in motion.",
    },
    relatedSlugs: ["modern-warrior-discipline", "physics-perfect-strike", "overcoming-plateau"],
    featuredOnIndex: false,
    listSummary:
      "How functional movement in combat sports improves everyday vitality and coordination.",
    cardTitle: "Agility Beyond the Mat",
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string, article: BlogArticle): BlogRelatedTeaser[] {
  const slugs = article.relatedSlugs?.length
    ? article.relatedSlugs
    : blogArticles.filter((a) => a.slug !== currentSlug).map((a) => a.slug);

  const resolved = slugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is BlogArticle => a != null && a.slug !== currentSlug)
    .slice(0, 3);

  return resolved.map((a) => ({
    slug: a.slug,
    category: a.category,
    title: a.cardTitle,
    description: a.listSummary,
    image: a.hero,
  }));
}

export function getFeaturedArticlesForIndex(): BlogArticle[] {
  return blogArticles.filter((a) => a.featuredOnIndex);
}
