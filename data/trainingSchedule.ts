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
  {
    id: "kung-fu-urubokka",
    art: "Kung Fu",
    location: "Urubokka",
    label: "Kung Fu - Urubokka",
  },
  {
    id: "kung-fu-walasmulla",
    art: "Kung Fu",
    location: "Walasmulla",
    label: "Kung Fu - Walasmulla",
  },
  {
    id: "kung-fu-beliatta",
    art: "Kung Fu",
    location: "Beliatta",
    label: "Kung Fu - Beliatta",
  },
  {
    id: "wushu-urubokka",
    art: "Wushu",
    location: "Urubokka",
    label: "Wushu - Urubokka",
  },
  {
    id: "wushu-walasmulla",
    art: "Wushu",
    location: "Walasmulla",
    label: "Wushu - Walasmulla",
  },
  {
    id: "wushu-beliatta",
    art: "Wushu",
    location: "Beliatta",
    label: "Wushu - Beliatta",
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
    id: "kung-fu-urubokka-beginner",
    branchId: "kung-fu-urubokka",
    title: "Beginner Class",
    startTime: "08:00",
    imageUrl: "/Boost-Confidence.PNG",
    weekday: "monday",
    date: "2026-04-10",
    tone: "primary",
  },
  {
    id: "kung-fu-urubokka-intermediate",
    branchId: "kung-fu-urubokka",
    title: "Intermediate Class",
    startTime: "10:30",
    imageUrl: "/facilities/taining-time3.jpg",
    weekday: "monday",
    date: "2026-04-12",
    tone: "secondary",
  },
  {
    id: "wushu-walasmulla-beginner",
    branchId: "wushu-walasmulla",
    title: "Beginner Class",
    startTime: "17:30",
    imageUrl: "/kun-fu.PNG",
    weekday: "monday",
    date: "2026-04-11",
    tone: "neutral",
  },
  {
    id: "kung-fu-beliatta-beginner",
    branchId: "kung-fu-beliatta",
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
    id: "wushu-beliatta-intermediate",
    branchId: "wushu-beliatta",
    title: "Intermediate Class",
    startTime: "16:00",
    imageUrl: "/JKD.PNG",
    weekday: "wednesday",
    date: "2026-04-16",
    tone: "primary",
  },
];
