import { Wifi } from "lucide-react";
import coffeeImg from "@/assets/coffee-breakfast.jpg";
import bedroomImg from "@/assets/bedroom-evening.jpg";
import { extraRules, houseInfo, houseRules, wifi } from "@/content/guide";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CopyButton } from "./CopyButton";
import { Fill } from "./Fill";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeader, SubHeading } from "./SectionHeader";
import { navSections } from "./nav";

export function YourStay() {
  const s = navSections[1];
  return (
    <section id={s.id} className="scroll-mt-20 bg-secondary py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          number={s.number}
          title="Your stay"
          intro="How everything works — so you can relax and feel at home."
          icon={s.icon}
        />

        {/* Wi-Fi — always visible */}
        <div className="grid gap-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <Reveal className="rounded-3xl bg-card p-7 shadow-soft sm:p-10">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-olive-soft text-primary">
                <Wifi className="h-5 w-5" strokeWidth={1.5} aria-hidden />
              </span>
              <h3 className="text-3xl">Wi-Fi</h3>
            </div>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm uppercase tracking-wider text-muted-foreground">Network</dt>
                <dd className="mt-1.5 break-words text-xl font-medium text-ink">
                  <Fill>{wifi.network}</Fill>
                </dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-wider text-muted-foreground">Password</dt>
                <dd className="mt-1.5 break-words text-xl font-medium text-ink">
                  <Fill>{wifi.password}</Fill>
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CopyButton value={wifi.password} />
              <p className="text-sm text-muted-foreground">
                Router: <Fill>{wifi.routerLocation}</Fill>
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="photo-zoom hidden overflow-hidden rounded-3xl lg:block">
            <img
              src={coffeeImg}
              alt="Coffee and croissants on the kitchen counter"
              width={1280}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>

        {/* House information — expandable */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <Reveal>
            <SubHeading eyebrow="How things work">House information</SubHeading>
            <p className="text-muted-foreground">Tap a topic to see short, step-by-step instructions.</p>
          </Reveal>
          <Reveal delay={80}>
            <Accordion type="single" collapsible className="rounded-2xl bg-card px-5 shadow-soft sm:px-7">
              {houseInfo.map((item, i) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className={i === houseInfo.length - 1 ? "border-b-0" : "border-border"}
                >
                  <AccordionTrigger>
                    <span className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                        <Icon name={item.icon} className="h-5 w-5" />
                      </span>
                      <span className="text-lg text-ink">{item.title}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-14">
                    <p className="text-muted-foreground">
                      <Fill>{item.summary}</Fill>
                    </p>
                    <ol className="mt-4 space-y-2.5">
                      {item.steps.map((step, n) => (
                        <li key={step} className="flex gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/40 text-xs font-semibold text-primary">
                            {n + 1}
                          </span>
                          <span className="text-ink">
                            <Fill>{step}</Fill>
                          </span>
                        </li>
                      ))}
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>

        {/* Photo band */}
        <Reveal className="photo-zoom relative mt-20 overflow-hidden rounded-3xl">
          <img
            src={bedroomImg}
            alt="Freshly made bed with folded towels and a bedside lamp"
            width={1600}
            height={1008}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover sm:aspect-[21/9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-overlay via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-on-photo sm:p-10">
            <p className="text-sm uppercase tracking-[0.2em]">Extra towels & bedding</p>
            <p className="mt-2 font-serif text-2xl sm:text-3xl">[WHERE TO FIND EXTRA TOWELS AND LINEN]</p>
          </div>
        </Reveal>

        {/* House rules — visible */}
        <div className="mt-20">
          <Reveal>
            <SubHeading eyebrow="Please respect">House rules</SubHeading>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {houseRules.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 70} className="rounded-2xl bg-card p-6 shadow-soft">
                <Icon name={r.icon} className="h-7 w-7 text-primary" />
                <p className="mt-5 font-serif text-xl text-ink">{r.title}</p>
                <p className="mt-1.5 text-muted-foreground">
                  <Fill>{r.text}</Fill>
                </p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-4">
            <Accordion type="single" collapsible className="rounded-2xl bg-card px-5 shadow-soft sm:px-7">
              <AccordionItem value="more-rules" className="border-b-0">
                <AccordionTrigger>
                  <span className="text-lg text-ink">More house rules</span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2.5">
                    {extraRules.map((r) => (
                      <li key={r} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                        <span>
                          <Fill>{r}</Fill>
                        </span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
