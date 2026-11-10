import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { property } from "@/content/guide";
import { navSections } from "./nav";

export function StickyNav() {
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.55);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = navSections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        const first = visible[0];
        if (first) setActive(first.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border bg-background/92 backdrop-blur-md transition-all duration-500",
        shown ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0",
      )}
      aria-hidden={!shown}
    >
      <nav aria-label="Welcome book sections" className="section-shell flex items-center gap-6">
        <a
          href="#top"
          tabIndex={shown ? 0 : -1}
          className="hidden shrink-0 font-serif text-xl text-ink lg:block"
        >
          {property.name}
        </a>
        <ul className="grid flex-1 grid-cols-4 lg:ml-auto lg:flex lg:flex-none lg:gap-1">
          {navSections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  tabIndex={shown ? 0 : -1}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "group flex flex-col items-center gap-1 px-1 py-2.5 text-center transition-colors lg:flex-row lg:gap-2.5 lg:rounded-full lg:px-4 lg:py-2",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-ink",
                    "lg:my-3",
                    isActive && "lg:bg-olive-soft",
                  )}
                >
                  <s.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                  <span className="text-[0.78rem] font-medium leading-tight sm:text-sm lg:hidden">
                    {s.short}
                  </span>
                  <span className="hidden text-sm font-medium lg:inline">
                    <span className="mr-1.5 text-stone">{s.number}</span>
                    {s.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
