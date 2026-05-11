import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const AGB = () => {
  return (
    <div className="min-h-screen w-full">
      <SEOHead
        title="AGB | Allgemeine Geschäftsbedingungen"
        description="Allgemeine Geschäftsbedingungen der Zeal Security & Service GmbH Berlin für Sicherheitsdienstleistungen."
        canonicalPath="/agb"
      />
      <Navigation />
      
      <main>
        <section className="gradient-subtle py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-8 text-4xl font-bold">Allgemeine Geschäftsbedingungen</h1>
              
              <div className="space-y-8">
                <div>
                  <h2 className="mb-4 text-2xl font-semibold">1. Geltungsbereich</h2>
                  <p className="text-muted-foreground">
                    Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen ZEAL Security und unseren Auftraggebern über die Erbringung von Sicherheitsdienstleistungen.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-semibold">2. Leistungsumfang</h2>
                  <p className="mb-4 text-muted-foreground">
                    Der Umfang der zu erbringenden Sicherheitsdienstleistungen ergibt sich aus dem jeweiligen Angebot bzw. der individuellen Vereinbarung mit dem Auftraggeber.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-semibold">3. Vertraulichkeit</h2>
                  <p className="text-muted-foreground">
                    Wir verpflichten uns, über alle Informationen und Daten, die uns im Rahmen der Auftragsausführung bekannt werden, Stillschweigen zu bewahren.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-semibold">4. Vergütung</h2>
                  <p className="text-muted-foreground">
                    Die Vergütung richtet sich nach der jeweils gültigen Preisliste bzw. individuellen Vereinbarung. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zahlbar.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-semibold">5. Haftung</h2>
                  <p className="text-muted-foreground">
                    Wir haften für Schäden nur bei Vorsatz oder grober Fahrlässigkeit. Die Haftung ist auf den vorhersehbaren, vertragstypischen Schaden begrenzt.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Hinweis:</strong> Dies ist ein Platzhalter für AGB. Vollständige, rechtssichere AGB müssen vor der Verwendung durch einen Rechtsanwalt erstellt werden.
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

export default AGB;
