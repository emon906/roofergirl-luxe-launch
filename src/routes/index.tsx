import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Trust } from "@/components/site/Trust";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

const title = "RooferGirl — Luxury Residential Roofing, Woman-Owned";
const description =
  "RooferGirl is a woman-owned residential roofing studio: full replacements, storm repairs, gutters and flashing, finished with precision craftsmanship and honest written pricing.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <BeforeAfter />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
