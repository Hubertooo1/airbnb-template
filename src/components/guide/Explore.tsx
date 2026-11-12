import { useState } from "react";
import { Car, Footprints, MapPin, Quote } from "lucide-react";
import streetImg from "@/assets/local-street.jpg";
import restaurantImg from "@/assets/explore-restaurant.jpg";
import attractionImg from "@/assets/explore-attraction.jpg";
import shoppingImg from "@/assets/explore-shopping.jpg";
import marketImg from "@/assets/explore-market.jpg";
import activityImg from "@/assets/explore-activity.jpg";
import {
  exploreCategories,
  host,
  localFavourites,
  neighbourhood,
  recommendations,
  type ExploreCategory,
  type Recommendation,
} from "@/content/guide";
import { cn } from "@/lib/utils";
import { Fill } from "./Fill";
import { MapsButton } from "./LinkButtons";
import { Reveal } from "./Reveal";
import { SectionHeader, SubHeading } from "./SectionHeader";
import { sectionNav } from "./nav";

const images: Record<Recommendation["image"], string> = {
  restaurant: restaurantImg,
  attraction: attractionImg,
  nature: attractionImg,
  shopping: shoppingImg,
  market: marketImg,
  activity: activityImg,
};

/** Walking icon when the place is within walking distance, car icon otherwise. */
function DistanceIcon({ distance }: { distance: string }) {
  const Cmp = distance.includes("on foot") ? Footprints : Car;
  return <Cmp className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />;
}

function RecommendationCard({ rec }: { rec: Recommendation }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-lift">
      <div className="photo-zoom aspect-[4/3] overflow-hidden">
        <img
          src={images[rec.image]}
          alt=""
          width={1024}
          height={768}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{rec.label ?? rec.category}</p>
        <h3 className="mt-2 text-2xl">
          <Fill>{rec.name}</Fill>
        </h3>
        <p className="mt-2 text-muted-foreground">
          <Fill>{rec.description}</Fill>
        </p>
        <div className="mt-4 space-y-1 text-sm text-muted-foreground">
          <p>
            <Fill>{rec.address}</Fill>
          </p>
          <p className="flex items-center gap-1.5">
            <DistanceIcon distance={rec.distance} />
            <Fill>{rec.distance}</Fill>
          </p>
        </div>
        <div className="mt-auto pt-6">
          <MapsButton query={`${rec.name} ${rec.address}`} size="sm" />
        </div>
      </div>
    </article>
  );
}

export function Explore() {
  const s = sectionNav.explore;
  const [filter, setFilter] = useState<ExploreCategory | "All">("All");
  const list = filter === "All" ? recommendations : recommendations.filter((r) => r.category === filter);

  return (
    <section id={s.id} className="scroll-mt-20 py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          number={s.number}
          title="Explore the area"
          intro="Our favourite places nearby — to eat, see, shop and enjoy."
          icon={s.icon}
        />

        <Reveal className="photo-zoom relative overflow-hidden rounded-3xl">
          <img
            src={streetImg}
            alt="A quiet cobbled street with café tables at golden hour"
            width={1600}
            height={1008}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover sm:aspect-[21/9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-overlay via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 max-w-xl p-6 text-on-photo sm:p-10">
            <p className="text-sm uppercase tracking-[0.2em]">The neighbourhood</p>
            <p className="mt-2 font-serif text-2xl sm:text-4xl">{neighbourhood.name}</p>
            <p className="mt-2 hidden text-on-photo/90 sm:block">{neighbourhood.description}</p>
          </div>
        </Reveal>

        {/* Category filter */}
        <div className="mt-12" role="group" aria-label="Filter recommendations">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
            {(["All", ...exploreCategories] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={cn(
                  "h-11 shrink-0 cursor-pointer rounded-full border px-5 text-[0.95rem] font-medium transition-colors",
                  filter === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-sand-deep bg-card text-ink hover:border-primary",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((rec, i) => (
            <li key={`${rec.category}-${i}`}>
              <RecommendationCard rec={rec} />
            </li>
          ))}
        </ul>

        {/* Local favourites */}
        <div className="mt-20 rounded-3xl bg-secondary p-7 sm:p-12">
          <Reveal>
            <SubHeading eyebrow="From your host">Local favourites</SubHeading>
            <p className="-mt-2 max-w-xl text-muted-foreground">
              A few personal tips we love to share with our guests.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {localFavourites.map((f, i) => (
              <Reveal as="li" key={i} delay={i * 80} className="flex flex-col rounded-2xl bg-card p-6 shadow-soft">
                <Quote className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden />
                <p className="eyebrow mt-4">{f.label}</p>
                <p className="mt-2 font-serif text-xl text-ink">
                  <Fill>{f.title}</Fill>
                </p>
                <p className="mt-2 text-muted-foreground">
                  <Fill>{f.note}</Fill>
                </p>
                <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-start gap-1.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
                    {f.address}
                  </p>
                  {f.distance && (
                    <p className="flex items-center gap-1.5">
                      <DistanceIcon distance={f.distance} />
                      {f.distance}
                    </p>
                  )}
                </div>
                <p className="mt-auto pt-5 text-sm text-stone">
                  — <Fill>{host.name}</Fill>
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
