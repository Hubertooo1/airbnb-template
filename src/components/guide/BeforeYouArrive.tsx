import { Car, Navigation } from "lucide-react";
import keyboxImg from "@/assets/keybox.jpg";
import { arrival, property } from "@/content/guide";
import { Fill } from "./Fill";
import { Icon } from "./Icon";
import { MapsButton } from "./LinkButtons";
import { Reveal } from "./Reveal";
import { SectionHeader, SubHeading } from "./SectionHeader";
import { navSections } from "./nav";

export function BeforeYouArrive() {
  const s = navSections[0];
  return (
    <section id={s.id} className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          number={s.number}
          title="Before you arrive"
          intro="Everything you need to find us and get inside easily."
          icon={s.icon}
        />

        {/* Key facts — always visible */}
        <div className="grid gap-4 md:grid-cols-3">
          {arrival.quickFacts.map((f, i) => (
            <Reveal key={f.label} delay={i * 80} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Icon name={f.icon} className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium uppercase tracking-wider">{f.label}</span>
              </div>
              <p className="mt-3 font-serif text-2xl text-ink">
                <Fill>{f.value}</Fill>
              </p>
              {f.label === "Address" && (
                <div className="mt-5">
                  <MapsButton query={property.address} size="sm" />
                </div>
              )}
            </Reveal>
          ))}
        </div>

        {/* Arrival steps with keybox photo */}
        <div className="mt-20 grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28">
            <figure className="photo-zoom overflow-hidden rounded-3xl shadow-lift">
              <img
                src={keyboxImg}
                alt="The black keybox on the wall to the left of the front door"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              The keybox — <Fill>[REPLACE WITH A PHOTO OF YOUR KEYBOX]</Fill>
            </figcaption>
          </Reveal>

          <div>
            <SubHeading eyebrow="Getting in">Arrival & key collection</SubHeading>
            <ol className="space-y-3">
              {arrival.steps.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 60}>
                  <div className="flex gap-5 rounded-2xl border border-border bg-card p-5 sm:p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-lg text-primary-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-lg font-medium text-ink">{step.title}</p>
                      <p className="mt-1 text-muted-foreground">
                        <Fill>{step.text}</Fill>
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        {/* Directions & parking */}
        <div className="mt-20 grid gap-4 md:grid-cols-2">
          <Reveal className="rounded-2xl bg-secondary p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Navigation className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden />
              <h3 className="text-2xl">Directions</h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              <Fill>{arrival.directions}</Fill>
            </p>
            <div className="mt-6">
              <MapsButton query={property.address} label="Get directions" variant="default" />
            </div>
          </Reveal>
          <Reveal delay={80} className="rounded-2xl bg-secondary p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Car className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden />
              <h3 className="text-2xl">Parking</h3>
            </div>
            <ul className="mt-4 space-y-2.5">
              {arrival.parking.map((p) => (
                <li key={p} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span>
                    <Fill>{p}</Fill>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
