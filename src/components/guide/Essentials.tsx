import { useState } from "react";
import { Check, Cross, HeartPulse, LogOut, MessageCircle, Pill, ShieldAlert, Siren } from "lucide-react";
import { checkout, emergency, host, problemSteps } from "@/content/guide";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Fill } from "./Fill";
import { Icon } from "./Icon";
import { CallButton, MapsButton } from "./LinkButtons";
import { Reveal } from "./Reveal";
import { SectionHeader, SubHeading } from "./SectionHeader";
import { navSections } from "./nav";

function Checklist() {
  const [done, setDone] = useState<boolean[]>(() => checkout.checklist.map(() => false));
  return (
    <ul className="space-y-2.5">
      {checkout.checklist.map((item, i) => (
        <li key={item}>
          <button
            type="button"
            onClick={() => setDone((d) => d.map((v, j) => (j === i ? !v : v)))}
            aria-pressed={done[i]}
            className="flex w-full cursor-pointer items-center gap-4 rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-primary/50"
          >
            <span
              className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                done[i] ? "border-primary bg-primary text-primary-foreground" : "border-sand-deep",
              )}
            >
              {done[i] && <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />}
            </span>
            <span className={cn("text-ink transition-opacity", done[i] && "line-through opacity-60")}>
              <Fill>{item}</Fill>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export function Essentials() {
  const s = navSections[3];
  return (
    <section id={s.id} className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          number={s.number}
          title="Essentials"
          intro="Check-out, emergencies and how to reach us — all in one place."
          icon={s.icon}
        />

        {/* The three most important things, always visible */}
        <div className="grid gap-4 lg:grid-cols-3">
          <Reveal className="flex flex-col rounded-3xl border-2 border-alert/30 bg-alert-soft p-7">
            <div className="flex items-center gap-3 text-alert">
              <Siren className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-wider">Emergency</p>
            </div>
            <p className="mt-4 font-serif text-4xl text-ink">
              <Fill>{emergency.number}</Fill>
            </p>
            <p className="mt-2 text-muted-foreground">Police, ambulance and fire. Free to call, 24 hours a day.</p>
            <div className="mt-auto pt-6">
              <CallButton phone={emergency.number} label="Call emergency" variant="destructive" className="w-full" />
            </div>
          </Reveal>

          <Reveal delay={80} className="flex flex-col rounded-3xl bg-card p-7 shadow-soft">
            <div className="flex items-center gap-3 text-primary">
              <MessageCircle className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-wider">Your host</p>
            </div>
            <p className="mt-4 font-serif text-3xl text-ink">
              <Fill>{host.name}</Fill>
            </p>
            <p className="mt-2 text-muted-foreground">
              <Fill>{host.phone}</Fill>
              <br />
              <Fill>{host.availability}</Fill>
            </p>
            <div className="mt-auto flex flex-col gap-2 pt-6">
              <CallButton phone={host.phone} label="Call host" className="w-full" />
              <Button asChild variant="outline" className="w-full">
                <a href={host.airbnbMessagesUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle strokeWidth={1.75} />
                  Message on Airbnb
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={160} className="flex flex-col rounded-3xl bg-card p-7 shadow-soft">
            <div className="flex items-center gap-3 text-primary">
              <LogOut className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-wider">Check-out</p>
            </div>
            <p className="mt-4 font-serif text-4xl text-ink">
              <Fill>{checkout.time}</Fill>
            </p>
            <p className="mt-2 text-muted-foreground">Please use the checklist below before you leave.</p>
          </Reveal>
        </div>

        {/* Check-out */}
        <div id="check-out" className="mt-20 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SubHeading eyebrow="Before you leave">Check-out checklist</SubHeading>
            <p className="-mt-2 mb-6 text-muted-foreground">Tap each item when it's done.</p>
            <Checklist />
          </Reveal>
          <Reveal delay={80} className="space-y-3 lg:pt-24">
            {checkout.details.map((d) => (
              <div key={d.title} className="flex gap-4 rounded-2xl bg-secondary p-5 sm:p-6">
                <Icon name={d.icon} className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="text-lg font-medium text-ink">{d.title}</p>
                  <p className="mt-1 text-muted-foreground">
                    <Fill>{d.text}</Fill>
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Emergency details */}
        <div className="mt-20">
          <Reveal>
            <SubHeading eyebrow="Just in case">Health & safety</SubHeading>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { icon: HeartPulse, label: "Nearest hospital", ...emergency.hospital },
              { icon: Pill, label: "Nearest pharmacy", ...emergency.pharmacy },
            ].map((p, i) => (
              <Reveal key={p.label} delay={i * 80} className="rounded-2xl bg-card p-6 shadow-soft sm:p-7">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <p.icon className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden />
                  <span className="text-sm font-medium uppercase tracking-wider">{p.label}</span>
                </div>
                <p className="mt-3 font-serif text-2xl text-ink">
                  <Fill>{p.name}</Fill>
                </p>
                <p className="mt-1 text-muted-foreground">
                  <Fill>{p.address}</Fill>
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <MapsButton query={`${p.name} ${p.address}`} size="sm" label="Directions" />
                  <CallButton phone={p.phone} label="Call" variant="outline" />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="flex gap-4 rounded-2xl bg-secondary p-6">
              <Cross className="mt-0.5 h-6 w-6 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
              <div>
                <p className="text-lg font-medium text-ink">First-aid kit</p>
                <p className="mt-1 text-muted-foreground">
                  <Fill>{emergency.firstAid}</Fill>
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl bg-secondary p-6">
              <ShieldAlert className="mt-0.5 h-6 w-6 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
              <div>
                <p className="text-lg font-medium text-ink">Safety</p>
                <ul className="mt-1 space-y-1 text-muted-foreground">
                  {emergency.safety.map((x) => (
                    <li key={x}>
                      <Fill>{x}</Fill>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Something wrong */}
        <Reveal className="mt-20">
          <Accordion type="single" collapsible defaultValue="problem" className="rounded-3xl bg-card px-6 shadow-soft sm:px-10">
            <AccordionItem value="problem" className="border-b-0">
              <AccordionTrigger>
                <span className="font-serif text-2xl text-ink sm:text-3xl">Something not working?</span>
              </AccordionTrigger>
              <AccordionContent>
                <ol className="grid gap-4 sm:grid-cols-2">
                  {problemSteps.map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-primary-foreground">
                        {i + 1}
                      </span>
                      <span className="pt-1 text-ink">{step}</span>
                    </li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
