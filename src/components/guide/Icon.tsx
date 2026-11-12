import {
  Bath,
  Car,
  ChefHat,
  CigaretteOff,
  Clock,
  Key,
  MapPin,
  Moon,
  PartyPopper,
  Sparkles,
  Thermometer,
  Trash2,
  Tv,
  Users,
  Utensils,
  Zap,
  Circle,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  bath: Bath,
  car: Car,
  "chef-hat": ChefHat,
  "cigarette-off": CigaretteOff,
  clock: Clock,
  key: Key,
  "map-pin": MapPin,
  moon: Moon,
  "party-popper": PartyPopper,
  sparkles: Sparkles,
  thermometer: Thermometer,
  trash: Trash2,
  tv: Tv,
  users: Users,
  utensils: Utensils,
  zap: Zap,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? Circle;
  return <Cmp className={className} strokeWidth={1.5} aria-hidden />;
}
