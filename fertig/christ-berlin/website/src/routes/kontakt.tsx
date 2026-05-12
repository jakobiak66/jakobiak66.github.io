import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { ContactChannels, LocationSection } from "@/components/site/ContactSections";
import { ContactForm } from "@/components/site/ContactForm";



export default function KontaktPage() {
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
