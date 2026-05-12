import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Über uns"
          variant="geometric"
        />

        <section className="pt-16 md:pt-24 pb-8 md:pb-10 bg-background">
          <div className="container-page">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
              <div className="rounded-md overflow-hidden shadow-card-lg md:sticky md:top-24 bg-[#f0f0f0] border-2 border-dashed border-[#ccc] min-h-[300px] flex items-center justify-center p-8">
                <p className="text-[#999] text-center text-sm">
                  📷 Platzhalter<br />
                  <small>Teamfoto – bitte Firmenfoto einsenden</small>
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
                  Unser Betrieb
                </p>
                <h2 className="mt-3 text-ink">
                  Dipl.-Ing. Alexander<br />Christ GmbH
                </h2>
                <div className="mt-6 space-y-5 text-sm md:text-base leading-relaxed text-muted-foreground">
                  <p>
                    Die Dipl.-Ing. Alexander Christ GmbH ist Ihr modernes Berliner
                    Gebäudetechnikunternehmen mit Schwerpunkten in den Bereichen
                    Heizung, Sanitär, Solar und Schornsteinbau.
                  </p>
                  <p>
                    Wir erarbeiten maßgeschneiderte Konzepte auf Basis intensiver Beratung –
                    persönlich, zuverlässig und auf dem neuesten Stand der Technik.
                    Dabei steht die individuelle Situation jedes Kunden im Mittelpunkt.
                  </p>
                  <p>
                    Unser erfahrenes Team unter der Leitung von Geschäftsführer
                    Alexander Christ (Dipl.-Ing. FH) begleitet Sie von der ersten Beratung
                    bis zur Fertigstellung – und darüber hinaus mit unserem Wartungs- und
                    Notdienstangebot.
                  </p>
                  <p>
                    24 Stunden am Tag, 7 Tage die Woche steht unser Notdienst für Sie bereit.
                    Bei Heizungsausfall, Rohrbruch oder anderen Notfällen sind wir schnell vor Ort.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 grid sm:grid-cols-3 gap-8 md:gap-10">
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-brand">
                  24/7
                </p>
                <h3 className="mt-2 font-extrabold text-base text-ink">
                  Notdienst
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Rund um die Uhr erreichbar für alle Notfälle in der Gebäudetechnik.
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-brand">
                  100%
                </p>
                <h3 className="mt-2 font-extrabold text-base text-ink">
                  Fachkompetenz
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Dipl.-Ing. Leitung mit langjähriger Erfahrung in der Gebäudetechnik.
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-brand">
                  A–Z
                </p>
                <h3 className="mt-2 font-extrabold text-base text-ink">
                  Alles aus einer Hand
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Beratung, Planung, Installation und Wartung – komplett aus einer Hand.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
