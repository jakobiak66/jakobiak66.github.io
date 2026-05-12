import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";

const offene_stellen = [
  {
    titel: "Anlagenmechaniker SHK (m/w/d)",
    typ: "Vollzeit",
    desc: "Wir suchen erfahrene Anlagenmechaniker für Sanitär-, Heizungs- und Klimatechnik für unsere TGA-Projekte in Berlin und Brandenburg.",
  },
  {
    titel: "Meister / Techniker SHK (m/w/d)",
    typ: "Vollzeit",
    desc: "Als wachsendes Unternehmen suchen wir Fachkräfte mit Meister- oder Technikerabschluss für die Projektleitung.",
  },
  {
    titel: "Auszubildende(r) Anlagenmechaniker SHK",
    typ: "Ausbildung",
    desc: "Wir bieten eine qualifizierte Ausbildung zum Anlagenmechaniker SHK mit guten Übernahmechancen.",
  },
];

export default function Jobs() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-24 bg-background">
          <div className="container-page">
            <span className="inline-flex items-center gap-2 bg-brand/10 text-brand text-xs font-semibold px-3 py-1 rounded-full mb-6">
              Karriere
            </span>
            <h1 className="text-ink">Jobs & Karriere</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Werden Sie Teil der SWA Berlin GmbH. Wir suchen engagierte Fachkräfte
              für TGA-Projekte in Berlin und Brandenburg.
            </p>

            <div className="mt-12 space-y-6">
              {offene_stellen.map((stelle) => (
                <div key={stelle.titel} className="rounded-lg border border-border p-6 bg-card shadow-card">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-extrabold text-ink">{stelle.titel}</h3>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold bg-brand/10 text-brand px-2 py-1 rounded mt-2">
                        {stelle.typ}
                      </span>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{stelle.desc}</p>
                    </div>
                  </div>
                  <a
                    href="/kontakt"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
                  >
                    Jetzt bewerben →
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-brand/10 rounded-lg">
              <h3 className="font-extrabold text-ink">Keine passende Stelle dabei?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Wir freuen uns auch über Initiativbewerbungen. Schreiben Sie uns einfach.
              </p>
              <a
                href="/kontakt"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
              >
                Initiativbewerbung senden →
              </a>
            </div>
          </div>
        </section>
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
