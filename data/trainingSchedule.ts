export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type WeeklyClassTone = "primary" | "secondary" | "neutral" | "muted";

export type TrainingBranch = {
  id: string;
  art: string;
  location: string;
  label: string;
};

export type TrainingClassDetail = {
  id: string;
  branchId: string;
  title: string;
  /** 24-hour local time, e.g. "17:30" */
  startTime: string;
  imageUrl: string;
  weekday: Weekday;
  /** Shown on /classes branch cards */
  date: string;
  tone?: WeeklyClassTone;
};

export const trainingBranches: TrainingBranch[] = [
  {
    id: "jkd-urubokka",
    art: "Jeet Kune Do",
    location: "Urubokka",
    label: "Jeet Kune Do - Urubokka",
  },
  {
    id: "jkd-walasmulla",
    art: "Jeet Kune Do",
    location: "Walasmulla",
    label: "Jeet Kune Do - Walasmulla",
  },
  {
    id: "jkd-beliatta",
    art: "Jeet Kune Do",
    location: "Beliatta",
    label: "Jeet Kune Do - Beliatta",
  },
];

export const WEEKDAYS_ORDER: Weekday[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export const weekdayLabels: Record<Weekday, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

export const WEEKLY_SCHEDULE_SLOT_START_HOURS = [
  6, 8, 10, 12, 14, 16, 18, 20,
] as const;

/** All classes — six rows total. */
export const trainingClasses: TrainingClassDetail[] = [
  {
    id: "jkd-urubokka-beginner",
    branchId: "jkd-urubokka",
    title: "Beginner Class",
    startTime: "08:00",
    imageUrl: "/Boost-Confidence.PNG",
    weekday: "monday",
    date: "2026-04-10",
    tone: "primary",
  },
  {
    id: "jkd-urubokka-intermediate",
    branchId: "jkd-urubokka",
    title: "Intermediate Class",
    startTime: "10:30",
    imageUrl: "/facilities/taining-time3.jpg",
    weekday: "monday",
    date: "2026-04-12",
    tone: "secondary",
  },
  {
    id: "jkd-walasmulla-beginner",
    branchId: "jkd-walasmulla",
    title: "Beginner Class",
    startTime: "17:30",
    imageUrl: "/kun-fu.PNG",
    weekday: "monday",
    date: "2026-04-11",
    tone: "neutral",
  },
  {
    id: "jkd-beliatta-beginner",
    branchId: "jkd-beliatta",
    title: "Beginner Class",
    startTime: "09:00",
    imageUrl: "/wusu.PNG",
    weekday: "tuesday",
    date: "2026-04-14",
    tone: "secondary",
  },
  {
    id: "jkd-walasmulla-intermediate",
    branchId: "jkd-walasmulla",
    title: "Intermediate Class",
    startTime: "18:00",
    imageUrl: "/JKD.PNG",
    weekday: "tuesday",
    date: "2026-04-13",
    tone: "primary",
  },
  {
    id: "jkd-beliatta-intermediate",
    branchId: "jkd-beliatta",
    title: "Intermediate Class",
    startTime: "16:00",
    imageUrl: "/JKD.PNG",
    weekday: "wednesday",
    date: "2026-04-16",
    tone: "primary",
  },
];
