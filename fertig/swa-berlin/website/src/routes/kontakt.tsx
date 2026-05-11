import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import heroBg from "@/assets/hero-heizung-sanitaer.png";
import { ContactChannels, LocationSection } from "@/components/site/ContactSections";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/kontakt")({
  component: KontaktPage,
  head: () => ({
    meta: [
      { title: "Kontakt – SWA Service Wartung Anlagenbau Berlin GmbH" },
      {
        name: "description",
        content:
          "Kontaktieren Sie die SWA Berlin GmbH: Volmerstraße 10, 12489 Berlin. Telefon: +49 (0)30 23 593 85 - 80. E-Mail: info@swa.berlin",
      },
      { property: "og:title", content: "Kontakt – SWA Berlin GmbH" },
      {
        property: "og:description",
        content: "So erreichen Sie uns in Berlin-Adlershof – telefonisch, per E-Mail oder direkt vor Ort.",
      },
    ],
  }),
});

function KontaktPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Kontaktieren Sie uns"
          backgroundImage={heroBg}
          backgroundAlt="SWA Berlin GmbH – TGA-Fachbetrieb in Berlin"
          overlayOpacity={35}
        />
        <ContactChannels />
        <ContactForm />
        <LocationSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
