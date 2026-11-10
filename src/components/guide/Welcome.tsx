import { ArrowDown, ArrowRight, Clock, LogOut, Phone, Wifi } from "lucide-react";
import heroImg from "@/assets/hero-living-room.jpg";
import { host, property, wifi } from "@/content/guide";
import { Fill } from "./Fill";
import { Reveal } from "./Reveal";
import { navSections } from "./nav";

export function Hero() {
  return (
    <section id="top" className="relative h-[78svh] min-h-[460px] w-full overflow-hidden sm:h-[88svh]">
      <img
        src={heroImg}
        alt="A bright, calm living room with a linen sofa and an olive-green armchair"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-overlay/40 via-transparent to-overlay" />
      <div className="section-shell relative flex h-full flex-col justify-between py-6 text-on-photo sm:py-10">
        <p className="text-sm font-medium uppercase tracking-[0.22em]">Guest welcome book</p>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-serif text-3xl italic sm:text-5xl">{property.name}</p>
          </div>
          <a
            href="#welcome"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-on-photo/60 transition-colors hover:bg-on-photo/15"
            aria-label="Scroll to welcome"
          >
            <ArrowDown className="h-5 w-5" strokeWidth={1.5} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Welcome() {
  const glance = [
    { icon: Clock, label: "Check-in", value: property.checkIn },
    { icon: LogOut, label: "Check-out", value: property.checkOut },
    { icon: Wifi, label: "Wi-Fi", value: wifi.network },
    { icon: Phone, label: "Your host", value: host.phone },
  ];

  return (
    <section id="welcome" className="scroll-mt-20 py-20 sm:py-28">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6">Welcome</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl">
            Welcome to <Fill>{property.name}</Fill>.
          </h1>
          <p className="mt-5 font-serif text-2xl italic text-primary sm:text-3xl">{property.tagline}</p>
          <div className="hairline mx-auto my-10 w-40" />
          <p className="text-lg text-muted-foreground sm:text-xl">{property.intro}</p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-14 max-w-4xl">
          <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-card shadow-soft md:grid-cols-4">
            {glance.map((g, i) => (
              <div
                key={g.label}
                className={[
                  "flex flex-col gap-1.5 p-5 sm:p-6",
                  i % 2 === 1 ? "border-l border-border" : "",
                  i >= 2 ? "border-t border-border md:border-t-0" : "",
                  i === 2 ? "md:border-l" : "",
                ].join(" ")}
              >
                <dt className="flex items-center gap-2 text-sm text-muted-foreground">
                  <g.icon className="h-4 w-4 text-primary" strokeWidth={1.5} aria-hidden />
                  {g.label}
                </dt>
                <dd className="text-base font-medium text-ink">
                  <Fill>{g.value}</Fill>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="section-shell mt-20 sm:mt-28">
        <Reveal>
          <p className="eyebrow mb-3 text-center">Your guide</p>
          <h2 className="text-center text-3xl sm:text-4xl">Where would you like to start?</h2>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {navSections.map((s, i) => (
            <Reveal as="li" key={s.id} delay={i * 80}>
              <a
                href={`#${s.id}`}
                className="group flex h-full items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lift sm:flex-col sm:items-start sm:p-7"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-olive-soft text-primary">
                  <s.icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-medium tracking-widest text-stone">{s.number}</span>
                  <span className="mt-1 block font-serif text-2xl text-ink">{s.label}</span>
                  <span className="mt-1.5 block text-[0.95rem] text-muted-foreground">{s.description}</span>
                </span>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1 sm:hidden lg:block lg:self-end"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
