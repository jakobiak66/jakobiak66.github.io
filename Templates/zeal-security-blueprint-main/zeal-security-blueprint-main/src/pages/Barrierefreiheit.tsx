import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import { SEOHead } from "@/components/SEOHead";

const Barrierefreiheit = () => {
  return (
    <div className="min-h-screen w-full">
      <SEOHead
        title="Erklärung zur Barrierefreiheit"
        description="Erklärung zur Barrierefreiheit der ZEAL Security Website nach BFSG."
        canonicalPath="/barrierefreiheit"
      />
      <SkipLink />
      <Navigation />
      
      <main id="main-content" role="main">
        <section className="gradient-subtle py-20" aria-labelledby="accessibility-heading">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h1 id="accessibility-heading" className="mb-8 text-4xl font-bold">Erklärung zur Barrierefreiheit</h1>
              
              <div className="space-y-8">
                <div>
                  <p className="mb-4 text-muted-foreground">
                    ZEAL Security ist bemüht, diese Website im Einklang mit den geltenden Bestimmungen barrierefrei zugänglich zu machen.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-semibold">Stand der Vereinbarkeit</h2>
                  <p className="mb-4 text-muted-foreground">
                    Diese Website ist mit den Anforderungen der harmonisierten europäischen Norm EN 301 549 V3.2.1 (2021-03) sowie mit den Web Content Accessibility Guidelines (WCAG) 2.1 auf Konformitätsstufe AA teilweise vereinbar.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-semibold">Barrierefreiheits-Maßnahmen</h2>
                  <p className="mb-4 text-muted-foreground">
                    Wir haben folgende Maßnahmen zur Verbesserung der Barrierefreiheit umgesetzt:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>Skip-Navigation zum direkten Springen zum Hauptinhalt</li>
                    <li>Semantische HTML-Struktur mit ARIA-Rollen und -Labels</li>
                    <li>Ausreichende Farbkontraste gemäß WCAG 2.1 AA</li>
                    <li>Tastaturnavigation für alle interaktiven Elemente</li>
                    <li>Beschreibende Alt-Texte für alle informativen Bilder</li>
                    <li>Fokus-Indikatoren für verbesserte Sichtbarkeit</li>
                    <li>Korrekte Dokumentsprache (lang="de")</li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-semibold">Nicht barrierefreie Inhalte</h2>
                  <p className="mb-4 text-muted-foreground">
                    Die nachstehend aufgeführten Inhalte sind aus folgenden Gründen nicht barrierefrei:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>Das Hero-Video hat keine Untertitel (ist jedoch rein dekorativ ohne Sprachinhalt)</li>
                    <li>Bestimmte PDF-Dokumente sind noch nicht vollständig barrierefrei aufbereitet</li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-semibold">Feedback und Kontakt</h2>
                  <p className="mb-4 text-muted-foreground">
                    Sollten Ihnen Mängel beim barrierefreien Zugang zu Inhalten dieser Website auffallen, können Sie uns gerne kontaktieren:
                  </p>
                  <p className="text-muted-foreground">
                    E-Mail: <a href="mailto:office@zealsecurity.de" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">office@zealsecurity.de</a><br />
                    Telefon: <a href="tel:+4916346299993" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">+49 163 4629993</a>
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-semibold">Erstellung dieser Erklärung</h2>
                  <p className="text-muted-foreground">
                    Diese Erklärung wurde am 20. Dezember 2024 erstellt und zuletzt am 20. Dezember 2024 überprüft.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Barrierefreiheit;
