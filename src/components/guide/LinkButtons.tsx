import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mapsHref, telHref } from "@/lib/links";

export function MapsButton({
  query,
  label = "Open in Google Maps",
  variant = "outline",
  size = "default",
}: {
  query: string;
  label?: string;
  variant?: "outline" | "default" | "photo";
  size?: "default" | "sm";
}) {
  return (
    <Button asChild variant={variant} size={size}>
      <a href={mapsHref(query)} target="_blank" rel="noopener noreferrer">
        <MapPin strokeWidth={1.75} />
        {label}
      </a>
    </Button>
  );
}

export function CallButton({
  phone,
  label,
  variant = "default",
  className,
}: {
  phone: string;
  label: string;
  variant?: "default" | "outline" | "destructive" | "photo";
  className?: string;
}) {
  const href = telHref(phone);
  if (!href) {
    return (
      <Button variant={variant} disabled className={className} title="Phone number not added yet">
        <Phone strokeWidth={1.75} />
        {label}
      </Button>
    );
  }
  return (
    <Button asChild variant={variant} className={className}>
      <a href={href}>
        <Phone strokeWidth={1.75} />
        {label}
      </a>
    </Button>
  );
}
