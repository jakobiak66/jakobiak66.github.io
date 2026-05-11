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
      { title: "Kontakt – Dipl.-Ing. Alexander Christ GmbH" },
      {
        name: "description",
        content:
          "Kontaktieren Sie die Dipl.-Ing. Alexander Christ GmbH in Berlin: Tegeler Straße 42-43, 13353 Berlin. Tel: 030 - 453 01 626. 24h-Notdienst: 030 - 453 10 136.",
      },
      { property: "og:title", content: "Kontakt – Dipl.-Ing. Alexander Christ GmbH" },
      {
        property: "og:description",
        content: "So erreichen Sie uns in Berlin – telefonisch, per E-Mail oder direkt vor Ort. 24h-Notdienst verfügbar.",
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
          backgroundAlt="Dipl.-Ing. Alexander Christ GmbH – Gebäudetechnik Berlin"
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
