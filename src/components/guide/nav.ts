import { CalendarCheck, Compass, House, LifeBuoy, type LucideIcon } from "lucide-react";

export type NavSection = {
  id: string;
  number: string;
  label: string;
  short: string;
  description: string;
  icon: LucideIcon;
};

const list = [
  {
    id: "before-you-arrive",
    number: "01",
    label: "Before you arrive",
    short: "Arrive",
    description: "Address, check-in, parking and keys",
    icon: CalendarCheck,
  },
  {
    id: "your-stay",
    number: "02",
    label: "Your stay",
    short: "Stay",
    description: "Wi-Fi, appliances and house rules",
    icon: House,
  },
  {
    id: "explore",
    number: "03",
    label: "Explore",
    short: "Explore",
    description: "Food, sights and local favourites",
    icon: Compass,
  },
  {
    id: "essentials",
    number: "04",
    label: "Essentials",
    short: "Essentials",
    description: "Check-out, emergency and contact",
    icon: LifeBuoy,
  },
] as const satisfies readonly NavSection[];

export const navSections: readonly NavSection[] = list;
export const sectionNav = {
  arrive: list[0],
  stay: list[1],
  explore: list[2],
  essentials: list[3],
};
