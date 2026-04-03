export type TrainingBranch = {
  id: string;
  art: string;
  location: string;
  label: string;
};

export type TrainingSession = {
  id: string;
  branchId: TrainingBranch["id"];
  title: string;
  date: string; // YYYY-MM-DD
  time: string; // e.g. "5:30 PM"
  duration: string; // e.g. "1.5 HOURS"
  priceLkr: number;
  icon: string; // material symbol name
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

export const trainingSessions: TrainingSession[] = [
  {
    id: "urubokka-beginner-2026-04-10",
    branchId: "jkd-urubokka",
    title: "Beginner Class",
    date: "2026-04-10",
    time: "5:30 PM",
    duration: "1.5 HOURS",
    priceLkr: 3000,
    icon: "sports_martial_arts",
  },
  {
    id: "urubokka-intermediate-2026-04-12",
    branchId: "jkd-urubokka",
    title: "Intermediate Class",
    date: "2026-04-12",
    time: "6:30 PM",
    duration: "2.0 HOURS",
    priceLkr: 4000,
    icon: "fitness_center",
  },
  {
    id: "walasmulla-beginner-2026-04-11",
    branchId: "jkd-walasmulla",
    title: "Beginner Class",
    date: "2026-04-11",
    time: "5:30 PM",
    duration: "1.5 HOURS",
    priceLkr: 3000,
    icon: "sports_martial_arts",
  },
  {
    id: "walasmulla-intermediate-2026-04-13",
    branchId: "jkd-walasmulla",
    title: "Intermediate Class",
    date: "2026-04-13",
    time: "6:30 PM",
    duration: "2.0 HOURS",
    priceLkr: 4000,
    icon: "fitness_center",
  },
  {
    id: "beliatta-beginner-2026-04-14",
    branchId: "jkd-beliatta",
    title: "Beginner Class",
    date: "2026-04-14",
    time: "5:30 PM",
    duration: "1.5 HOURS",
    priceLkr: 3000,
    icon: "sports_martial_arts",
  },
  {
    id: "beliatta-intermediate-2026-04-16",
    branchId: "jkd-beliatta",
    title: "Intermediate Class",
    date: "2026-04-16",
    time: "6:30 PM",
    duration: "2.0 HOURS",
    priceLkr: 4000,
    icon: "fitness_center",
  },
];

