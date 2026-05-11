import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ServiceCards } from "@/components/site/ServiceCards";
import { Emergency } from "@/components/site/Emergency";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";

import { Faq } from "@/components/site/Faq";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SWA Berlin GmbH – TGA-Haustechnik Berlin & Brandenburg" },
      {
        name: "description",
        content:
          "TGA-Fachbetrieb für Heizung, Sanitär, Lüftung und Kälte-Klima in Berlin und Brandenburg. Neubau, Modernisierung und Wartung. SWA Service Wartung Anlagenbau Berlin GmbH.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServiceCards />
        <Services />
        <Testimonials />
        
        <Faq />
        <Emergency />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
