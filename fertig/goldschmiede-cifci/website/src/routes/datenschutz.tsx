import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";



export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-24">
        <div className="container-x max-w-3xl">
          <h1 className="font-serif text-4xl font-semibold text-foreground mb-10">Datenschutzerklärung</h1>
          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-3">Verantwortlicher</h2>
              <p>
                Goldschmiede Cifci<br />
                Inhaber: Serhat Cifci<br />
                Waldstraße 25, 76133 Karlsruhe<br />
                E-Mail: kontakt@goldschmiede-cifci.de
              </p>
            </section>
            <section>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-3">Erhebung von Daten</h2>
              <p>
                Wir erheben nur personenbezogene Daten, die zur Auftragserfüllung erforderlich sind
                (z. B. Name, Telefonnummer, E-Mail-Adresse bei Kontaktanfragen).
                Diese Daten werden nicht an Dritte weitergegeben.
              </p>
            </section>
            <section>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-3">Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
                der Verarbeitung Ihrer personenbezogenen Daten. Wenden Sie sich dazu per E-Mail
                an kontakt@goldschmiede-cifci.de.
              </p>
            </section>
            <section>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-3">Cookies</h2>
              <p>
                Diese Website verwendet keine Tracking-Cookies. Es werden ausschließlich
                technisch notwendige Ressourcen geladen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
