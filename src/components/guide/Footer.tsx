import { Mail, MessageCircle, Phone } from "lucide-react";
import terraceImg from "@/assets/footer-terrace.jpg";
import { host, property } from "@/content/guide";
import { telHref } from "@/lib/links";
import { navSections } from "./nav";

export function Footer() {
  const tel = telHref(host.phone);
  return (
    <footer className="bg-ink text-cream">
      <div className="relative overflow-hidden">
        <img
          src={terraceImg}
          alt="Two chairs on a terrace at sunset overlooking the hills"
          width={1920}
          height={1088}
          loading="lazy"
          className="h-[70svh] min-h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-overlay/40 to-transparent" />
        <div className="section-shell absolute inset-x-0 bottom-0 pb-12 text-center sm:pb-20">
          <p className="eyebrow mb-4 text-on-photo/80">Until next time</p>
          <h2 className="mx-auto max-w-3xl text-4xl text-on-photo sm:text-6xl lg:text-7xl">
            Thank you for staying with us.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-on-photo/90">
            We hope you had a wonderful stay and enjoyed your time here. You're always welcome back!
          </p>
        </div>
      </div>

      <div className="section-shell grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-cream">{property.name}</p>
          <p className="mt-2 text-cream/70">{property.address}</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cream/60">Contact</p>
          <ul className="space-y-3">
            <li>
              {tel ? (
                <a href={tel} className="flex items-center gap-3 text-cream hover:text-sand">
                  <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden /> {host.phone}
                </a>
              ) : (
                <span className="flex items-center gap-3 text-cream/80">
                  <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden /> {host.phone}
                </span>
              )}
            </li>
            <li>
              <span className="flex items-center gap-3 text-cream/80">
                <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden /> {host.email}
              </span>
            </li>
            <li>
              <a
                href={host.airbnbMessagesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream hover:text-sand"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden /> Message on Airbnb
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cream/60">Guide</p>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-1">
            {navSections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-cream/90 transition-colors hover:text-sand">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#faq" className="text-cream/90 transition-colors hover:text-sand">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-cream/10">
        <p className="section-shell py-6 text-center text-sm text-cream/60">
          Made with care for our guests · {property.name}
        </p>
      </div>
    </footer>
  );
}
