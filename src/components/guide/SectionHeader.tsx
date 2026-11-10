import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

export function SectionHeader({
  number,
  title,
  intro,
  icon: IconCmp,
}: {
  number: string;
  title: string;
  intro: string;
  icon: LucideIcon;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl sm:mb-16">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-sand-deep text-primary">
          <IconCmp className="h-5 w-5" strokeWidth={1.5} aria-hidden />
        </span>
        <span className="eyebrow">{number}</span>
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      <p className="mt-5 text-lg text-muted-foreground">{intro}</p>
    </Reveal>
  );
}

export function SubHeading({ children, eyebrow }: { children: string; eyebrow?: string }) {
  return (
    <div className="mb-6">
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h3 className="text-2xl sm:text-3xl">{children}</h3>
    </div>
  );
}
