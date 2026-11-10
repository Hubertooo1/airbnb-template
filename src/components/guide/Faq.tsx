import { faqs } from "@/content/guide";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Fill } from "./Fill";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-secondary py-20 sm:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
        <Reveal>
          <p className="eyebrow mb-3">Questions</p>
          <h2 className="text-4xl sm:text-5xl">Frequently asked</h2>
          <p className="mt-5 text-lg text-muted-foreground">Tap a question to see the answer.</p>
        </Reveal>
        <Reveal delay={80}>
          <Accordion type="single" collapsible className="rounded-2xl bg-card px-5 shadow-soft sm:px-8">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className={i === faqs.length - 1 ? "border-b-0" : "border-border"}
              >
                <AccordionTrigger>
                  <span className="text-lg text-ink">{f.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <Fill>{f.a}</Fill>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
