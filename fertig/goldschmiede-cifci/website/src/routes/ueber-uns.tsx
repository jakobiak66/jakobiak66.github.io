import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram } from "lucide-react";



export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-24">
        <div className="container-x max-w-5xl">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Der Betrieb</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
              Über uns
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Familienbetrieb mit Tradition
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Die Goldschmiede Cifci blickt auf eine lange Familiengeschichte zurück:
                  1992 gründeten die Eltern von Serhat Cifci den Betrieb zunächst in Aachen.
                  Serhat Cifci absolvierte seine Ausbildung an der renommierten
                  Goldschmiedeschule Pforzheim und arbeitete danach in Mannheim.
                </p>
                <p>
                  Seit 2005 führt er das Atelier in Karlsruhe eigenständig weiter –
                  mit derselben Leidenschaft und Liebe zum Handwerk wie seine Eltern.
                  Seit 2013 verstärkt seine Schwester Esra Cifci das Team.
                </p>
                <p>
                  In unserer Werkstatt im Herzen Karlsruhes fertigen wir jeden Schmuck
                  von Hand – mit Präzision, Geduld und dem Anspruch auf Perfektion.
                  Kein Stück gleicht dem anderen.
                </p>
              </div>
              <a
                href="https://www.instagram.com/cifcijewelrycustoms"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold hover:opacity-80 transition"
              >
                <Instagram className="size-4" />
                Unsere Arbeiten auf Instagram
              </a>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 mb-6">
                  <span className="font-serif text-2xl font-semibold text-gold">S</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Serhat Cifci</h3>
                <p className="text-sm text-gold mb-3">Inhaber & Goldschmied</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ausbildung an der Goldschmiedeschule Pforzheim.
                  Gesellenjahre in Mannheim. Seit 2005 in eigenem Atelier in Karlsruhe.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 mb-6">
                  <span className="font-serif text-2xl font-semibold text-gold">E</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Esra Cifci</h3>
                <p className="text-sm text-gold mb-3">Team</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Seit 2013 Teil des Familienbetriebs – mit Leidenschaft und Sorgfalt
                  für jeden Kunden.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-20 text-center">
            <div>
              <p className="font-serif text-4xl font-semibold text-gold">1992</p>
              <p className="mt-2 text-sm text-muted-foreground">Familienbetrieb gegründet</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-semibold text-gold">30+</p>
              <p className="mt-2 text-sm text-muted-foreground">Jahre Goldschmiedekunst</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-semibold text-gold">∞</p>
              <p className="mt-2 text-sm text-muted-foreground">Einzigartige Schmuckstücke</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-gold text-background rounded-full px-8 py-4 text-sm font-semibold hover:opacity-90 transition"
            >
              Beratungstermin vereinbaren <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
