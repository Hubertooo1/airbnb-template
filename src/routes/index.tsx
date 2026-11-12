import { createFileRoute } from "@tanstack/react-router";
import { property } from "@/content/guide";
import { BackToTop } from "@/components/guide/BackToTop";
import { BeforeYouArrive } from "@/components/guide/BeforeYouArrive";
import { Essentials } from "@/components/guide/Essentials";
import { Explore } from "@/components/guide/Explore";
import { Faq } from "@/components/guide/Faq";
import { Footer } from "@/components/guide/Footer";
import { StickyNav } from "@/components/guide/StickyNav";
import { Hero, Welcome } from "@/components/guide/Welcome";
import { YourStay } from "@/components/guide/YourStay";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${property.shortName} — Guest welcome book` },
      {
        name: "description",
        content:
          "Everything you need for your stay in Skælskør: check-in, Wi-Fi, house information, local tips and check-out.",
      },
      { property: "og:title", content: `${property.shortName} — Guest welcome book` },
      {
        property: "og:description",
        content: "Check-in, Wi-Fi, house information, local tips and essentials — all in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <StickyNav />
      <main>
        <Hero />
        <Welcome />
        <BeforeYouArrive />
        <YourStay />
        <Explore />
        <Essentials />
        <Faq />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
