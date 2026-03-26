export type ClassSlug = "kung-fu" | "jeet-kune-do" | "wushu";

export type WeeklySlot = {
  day: string;
  time: string;
  title: string;
};

export type PricingPlan = {
  name: string;
  priceLkr: number;
  perks: string[];
  featured?: boolean;
};

export type Instructor = {
  name: string;
  title: string;
  bio: string;
  yearsExp: string;
  students: string;
  imageUrl: string;
};

export type ClassCurriculumItem = {
  icon: string; // Material Symbols name
  title: string;
  description: string;
};

export type MartialArtClass = {
  slug: ClassSlug;
  name: string;
  seoTitle: string;
  seoDescription: string;
  badges: string[];
  heroImageUrl: string;
  heroImageAlt: string;
  overviewImageUrl: string;
  overviewImageAlt: string;
  overviewTitle: string;
  overviewBody: string;
  highlights: Array<{ label: string; value: string; icon: string }>;
  curriculum: ClassCurriculumItem[];
  schedule: WeeklySlot[];
  pricing: PricingPlan[];
  instructor: Instructor;
};

export const classesData: MartialArtClass[] = [
  {
    slug: "kung-fu",
    name: "Kung Fu",
    seoTitle: "Kung Fu Training Program | Apex Martial Arts Academy",
    seoDescription:
      "Build discipline, strength, and control through traditional Kung Fu training. Master technique, mobility, and self-defense with certified coaches.",
    badges: ["Beginner Friendly", "Ages 8+ & Adults", "Certified Trainers"],
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcv_1ueuCvYXLQbVRqP2-VMLc6aIwAgbb9y87o0XUs5iRjReXqNYYaNLoUCgfkMkK5-hTQEVjuf0LCoNNDnF315GpNVdQxwiSembuwcuMUYxLw8w3fB9qiLtHwNodOv15x_ch-Du7qtXYeXNdjBD-S2spowPGhqxJlGP_p2XnV-CaP9LF9hMtpnXQaZqWYvzeHbT5hHC3erBQkgW4XabP1ossEkBNfQNIyKjWX1mGBucXgFVvVj9UdpPUTh9AhX_0DthZbF140AE8",
    heroImageAlt: "Kung Fu athlete performing a high kick in a dark dojo",
    overviewImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5_yqzSL2_5p8NYEaplS4KbnI__ABgXR0wyUjnN5sS6V4PdpvxtzwRkGLjydE01sEz4zNy2sBOppImH43YKmtLprJtBS336Gail5AIzricOPzHnVyefwVAgkgxRCr-oBJysLTr1PGfa76ASnnBybAjQuVUMLErRC_nfIchlTBOo9dA-yLkRoZNfk_psMuY_Q6gepFXqDXqqqtdMvKL_DIXjaA4ahPZyvqdkJX9GZ3jMxIVgLLdsRJSkl292IVo5cdJb4Kp4bF-7zA",
    overviewImageAlt: "Instructor teaching a small group Kung Fu basics",
    overviewTitle: "About This Class",
    overviewBody:
      "Our Kung Fu program blends traditional fundamentals with modern athletic conditioning. You’ll develop balance, mobility, and disciplined movement while building practical self-defense skills for real-world confidence.",
    highlights: [
      { label: "Class Type", value: "Traditional Arts", icon: "sports_score" },
      { label: "Skill Level", value: "Beginner to Advanced", icon: "trending_up" },
      { label: "Age Group", value: "8+ & Adults", icon: "groups" },
      { label: "Training Style", value: "Technique & Fitness", icon: "fitness_center" },
    ],
    curriculum: [
      {
        icon: "exercise",
        title: "Fundamentals (Kihon)",
        description: "Stances, strikes, blocks, footwork, and alignment.",
      },
      {
        icon: "swords",
        title: "Partner Drills",
        description: "Timing, distance control, and safe contact fundamentals.",
      },
      {
        icon: "bolt",
        title: "Conditioning",
        description: "Strength, flexibility, and endurance for resilient movement.",
      },
      {
        icon: "security",
        title: "Self Defense",
        description: "Escapes, control, and scenario-based awareness training.",
      },
      {
        icon: "psychology",
        title: "Mindset & Discipline",
        description: "Focus, respect, etiquette, and confidence under pressure.",
      },
    ],
    schedule: [
      { day: "Monday", time: "6:00 PM - 8:00 PM", title: "Basics & Forms" },
      { day: "Wednesday", time: "6:00 PM - 8:00 PM", title: "Partner Drills" },
      { day: "Friday", time: "6:00 PM - 8:00 PM", title: "Conditioning & Skill" },
      { day: "Saturday", time: "9:00 AM - 11:00 AM", title: "Open Dojo & Review" },
    ],
    pricing: [
      {
        name: "Beginner",
        priceLkr: 5000,
        perks: ["2 Sessions per Week", "Basic Uniform Included", "Beginner Workshops"],
      },
      {
        name: "Intermediate",
        priceLkr: 8000,
        perks: ["3 Sessions per Week", "Grading Fee Included", "All Workshops Access"],
        featured: true,
      },
      {
        name: "Professional",
        priceLkr: 12000,
        perks: ["Unlimited Sessions", "Private Training (1/Mo)", "Competition Coaching"],
      },
    ],
    instructor: {
      name: "Sifu Kai Wen",
      title: "Traditional Kung Fu Coach",
      bio: "With over 12 years of coaching experience, Sifu Kai focuses on strong fundamentals, mobility, and disciplined progression—helping students build skill with purpose.",
      yearsExp: "12+",
      students: "350+",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAbPmNQXesGx32C44_8Po-wJ-CeneR-oTtHAgCypGiUshafTUbwKw1QgaBZpN1DbHjdNKrshx6Oql77YsEFSECjAKHfZyCeqUtF5kX1oFpJJ1UYcvu1Rg9RuECep9vQRgrDh202mOkT4R4cmIYt0Iw1iY1g45uho_uhhHwuzGLHjA6okPjN-pMiPzqZRcBEgIHZnUJwJVveh_GCscNoRLq6s8QHXUlJ0HbiofGmXHLjbiIDvLldVMxf9J6bWD23THyXnLIQmBthsTM",
    },
  },
  {
    slug: "jeet-kune-do",
    name: "Jeet Kune Do",
    seoTitle: "Jeet Kune Do Training Program | Apex Martial Arts Academy",
    seoDescription:
      "Train Jeet Kune Do for direct, practical self-defense. Improve speed, timing, and adaptability through high-efficiency drills and sparring fundamentals.",
    badges: ["Self-Defense Focus", "Fast Progression", "Adaptive Training"],
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDObCzHY1wm0vHBO_6pB-ur1G3PF36X4Qtl2mBTszMwRDfyrjCzDmS1AA3a6o4LpZBFjTPm1YBJ2aq1XFZmXaMK_ArU9ZyOUVmh9R1kUEgZ9CgmokQsxmCSUC28qlsB7UImFIbeDNYSO6megEmplZ5aTW89RhNlHdjuGjhW3ktcMe8iG4GMZqI7VlBSWGFgBalyzYqaPMW873lCuFtAhzkYUTRTdNZyjK0ISkZ1qENbFEMmN5Lfe72ymNwG1VryswP3rpq5QfuchgE",
    heroImageAlt: "Athlete training striking drills in a modern gym",
    overviewImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdbJ4gjP4lvvYAm3ZxiwjytAJgxB488rrSCZtmjEUROL5oaC04Xi7A8bi6aJi2fdeG4DUu1D9705sLreRDxk_JjbvzQ5jteWLMq1JjhF527tgNsJevKfU7lxkOGT0A56sxW26EHZwunIGAQWPA25jEtv0ZSENAQg3ywcmaBheoxLs-naAk35e_IuFQ8xo0jTEqa-6_wRlRIeqGrEUZazU-14uDf339TDv7nxsjGlJlcj2QrvD15YAB-w1UxBWFjJKKHoBsw2HUusE",
    overviewImageAlt: "Coach demonstrating close-range striking and footwork",
    overviewTitle: "About This Class",
    overviewBody:
      "Jeet Kune Do is built around efficiency: simple tools, sharp timing, and adaptable decision-making. Our sessions prioritize practical self-defense, footwork, and pressure-tested combinations—without unnecessary complexity.",
    highlights: [
      { label: "Class Type", value: "Concept-Based", icon: "sports_score" },
      { label: "Skill Level", value: "Beginner to Pro", icon: "trending_up" },
      { label: "Age Group", value: "15+ & Adults", icon: "groups" },
      { label: "Training Style", value: "Timing & Reflex", icon: "fitness_center" },
    ],
    curriculum: [
      {
        icon: "exercise",
        title: "Footwork & Distance",
        description: "Entry angles, range management, and intercepting timing.",
      },
      {
        icon: "swords",
        title: "Combinations",
        description: "Direct striking combinations built for real application.",
      },
      {
        icon: "bolt",
        title: "Reaction Training",
        description: "Drills to improve reflexes, speed, and decision-making.",
      },
      {
        icon: "security",
        title: "Self Defense Scenarios",
        description: "Awareness, escape routes, and controlled response options.",
      },
      {
        icon: "psychology",
        title: "Mindset Under Pressure",
        description: "Confidence, composure, and performance consistency.",
      },
    ],
    schedule: [
      { day: "Tuesday", time: "6:00 PM - 8:00 PM", title: "Timing & Entries" },
      { day: "Thursday", time: "6:00 PM - 8:00 PM", title: "Combinations & Drills" },
      { day: "Friday", time: "6:30 PM - 8:00 PM", title: "Sparring Fundamentals" },
      { day: "Saturday", time: "11:30 AM - 1:00 PM", title: "Open Mat (JKD)" },
    ],
    pricing: [
      {
        name: "Starter",
        priceLkr: 6000,
        perks: ["2 Sessions per Week", "Basics Pack", "Monthly Skills Check"],
      },
      {
        name: "Core",
        priceLkr: 9000,
        perks: ["3 Sessions per Week", "Sparring Class Access", "All Workshops Access"],
        featured: true,
      },
      {
        name: "Elite",
        priceLkr: 14000,
        perks: ["Unlimited Sessions", "Private Training (1/Mo)", "Competition Coaching"],
      },
    ],
    instructor: {
      name: "Coach Ryo Silva",
      title: "JKD / Striking Coach",
      bio: "Coach Ryo brings a pragmatic approach—helping students build clean footwork, fast entries, and consistent execution through progressive pressure testing.",
      yearsExp: "10+",
      students: "420+",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuADrPrB-MQRjkD3Mh_4bhv7z1M_iU1er6vEOSyEZxqdfCgp2Wm_e9OoyabzTitJUHawMXXAQTyYdJqhpFkPmV3XEGdJKw77M99juMdvful8xIoB1cgh1VRS7kkqzODkIBTgDZlYoVR9zFZnEaXdYzaY4PUifNXX9VR2ro7YJEfyV3le_yGib_R2KO4dIuYMXezPkOeMqapJF-o59GWgMpi_PgfFSiv8JCihs7xfGMcKdsSkI-23KzB_-A4AqmvKkaIhiIug_2WvzWU",
    },
  },
  {
    slug: "wushu",
    name: "Wushu",
    seoTitle: "Wushu Training Program | Apex Martial Arts Academy",
    seoDescription:
      "Train Wushu for athletic performance, flexibility, and explosive power. Learn acrobatic fundamentals, forms, and conditioning with safe progression.",
    badges: ["Athletic Performance", "Flexibility Focus", "High Energy"],
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCpPCzk6lP64D-ZKyAQ_T0R0tPvjWbqGoBS9Pd6zGu3LZAOiP-3kdPkb1Qx0F-8twJk-vSyBLiXDH8_6QokzzzNq8Z-7bnDPtGOLKjl1amrBqUOaDNm6XNQEn8X0TfkL__-Mwrb111RH-9QBdoXlWTgd9hkAswT1sAJ0Keco7cJYmy6hoM2OoHWVmpmK06Lo-aLLxNvMC2HAF0ELhmN7V69YqhK7GqyekYK5HcdN1DHCMmFJnX_cgHZhRKSyfy8S_OO45bwb4zpz8",
    heroImageAlt: "Wushu performer mid-air during an acrobatic kick",
    overviewImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqiqnjJlTnz7YXmEOdVXQT3INUmkfffAYTYgBX6AhEgvJfCgIOVkTu9CU2IEyyrgTfRDEcvlR_BEg7KZYrJ9YGFQbVpf193kRPsZbk2LZyFhZdL2wwT-iEvf5WnRJnxQFM8ziknOvyAuWoFQbIbRg5imHk51wu5xEPfL6uOLKKjzT0LeM65jCTvqQICYO7iAU9lohIPrXUhYTICTVFqvPHXTyv2pjKS9__rAWpytXIsIcWniAj3YdcrIBGj9ylYs9bIhR-OgjkO_E",
    overviewImageAlt: "Athletes practicing Wushu forms on mats",
    overviewTitle: "About This Class",
    overviewBody:
      "Wushu combines explosive power, flexibility, and performance-ready technique. We train the foundations of forms and athletic movement with safe progression—building strength, mobility, and confidence in advanced skills.",
    highlights: [
      { label: "Class Type", value: "Performance Arts", icon: "sports_score" },
      { label: "Skill Level", value: "Beginner to Advanced", icon: "trending_up" },
      { label: "Age Group", value: "10+ & Adults", icon: "groups" },
      { label: "Training Style", value: "Athletic & Power", icon: "fitness_center" },
    ],
    curriculum: [
      {
        icon: "exercise",
        title: "Forms Foundations",
        description: "Technique, posture, lines, and rhythm in core forms.",
      },
      {
        icon: "bolt",
        title: "Explosive Power",
        description: "Jump mechanics, speed, and safe landing progressions.",
      },
      {
        icon: "fitness_center",
        title: "Mobility & Flexibility",
        description: "Hips, hamstrings, and shoulders for better range of motion.",
      },
      {
        icon: "security",
        title: "Safe Progressions",
        description: "Skill ladders to reduce risk while improving technique.",
      },
      {
        icon: "psychology",
        title: "Performance Confidence",
        description: "Consistency, composure, and stage-ready execution.",
      },
    ],
    schedule: [
      { day: "Monday", time: "5:30 PM - 7:00 PM", title: "Forms & Basics" },
      { day: "Wednesday", time: "5:30 PM - 7:00 PM", title: "Power & Mobility" },
      { day: "Thursday", time: "6:30 PM - 8:00 PM", title: "Acrobatics (Safe)" },
      { day: "Saturday", time: "9:00 AM - 10:30 AM", title: "Performance Drills" },
    ],
    pricing: [
      {
        name: "Beginner",
        priceLkr: 5500,
        perks: ["2 Sessions per Week", "Mobility Program", "Form Checkpoints"],
      },
      {
        name: "Intermediate",
        priceLkr: 8500,
        perks: ["3 Sessions per Week", "Acrobatics Class Access", "All Workshops Access"],
        featured: true,
      },
      {
        name: "Professional",
        priceLkr: 12500,
        perks: ["Unlimited Sessions", "Private Training (1/Mo)", "Performance Coaching"],
      },
    ],
    instructor: {
      name: "Coach Mei Lin",
      title: "Wushu Performance Coach",
      bio: "Coach Mei specializes in safe progression—building mobility, power, and clean form lines so students can perform with confidence and control.",
      yearsExp: "9+",
      students: "280+",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAbPmNQXesGx32C44_8Po-wJ-CeneR-oTtHAgCypGiUshafTUbwKw1QgaBZpN1DbHjdNKrshx6Oql77YsEFSECjAKHfZyCeqUtF5kX1oFpJJ1UYcvu1Rg9RuECep9vQRgrDh202mOkT4R4cmIYt0Iw1iY1g45uho_uhhHwuzGLHjA6okPjN-pMiPzqZRcBEgIHZnUJwJVveh_GCscNoRLq6s8QHXUlJ0HbiofGmXHLjbiIDvLldVMxf9J6bWD23THyXnLIQmBthsTM",
    },
  },
];

export function getClassBySlug(slug: string) {
  return classesData.find((c) => c.slug === slug);
}

export function getOtherClasses(slug: string) {
  return classesData.filter((c) => c.slug !== slug);
}

