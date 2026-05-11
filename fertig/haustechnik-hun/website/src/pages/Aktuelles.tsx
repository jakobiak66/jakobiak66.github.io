import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CalendarDays, ShowerHead, Zap } from "lucide-react";

const news = [
  {
    datum: "April 2022",
    icon: Zap,
    titel: "Energiepauschale eingeführt",
    text: "Aufgrund gestiegener Energiekosten erheben wir ab dem 01.04.2022 eine Energiepauschale auf unbestimmten Zeitraum (bis zum Widerruf). Diese Pauschale wird je nach Entfernung vom Firmensitz zum Kunden berechnet.",
  },
  {
    datum: "Frühjahr 2021",
    icon: ShowerHead,
    titel: "Neue Badezimmer-Ausstellung bei BERTSCHE",
    text: "Unsere Partnerausstellung bei BERTSCHE zeigt die neuesten Trends und Materialien im Badbereich. Besuchen Sie die Ausstellung und lassen Sie sich von modernen Bäderwelten inspirieren.",
    details: [
      "BERTSCHE Radolfzell · Eisenbahnstr. 4 · Tel. 07732/8003-0",
      "BERTSCHE Konstanz · Max-Stromeyerstr. 146 · Tel. 07531/892999-0",
      "BERTSCHE Ravensburg · Im Karrer 1 · Tel. 0751/604-190",
    ],
  },
];

const Aktuelles = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      {/* HEADER */}
      <section className="bg-gradient-hero py-14 lg:py-20">
        <div className="container text-center">
          <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
            Neuigkeiten
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-dark mb-4">
            Aktuelles
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Neuigkeiten, Ankündigungen und Informationen von Haustechnik Hun.
          </p>
        </div>
      </section>

      {/* News Liste */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="flex flex-col gap-8">
            {news.map((n, i) => {
              const Icon = n.icon;
              return (
                <article key={i} className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
                  <div className="bg-secondary px-7 py-4 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-card flex items-center justify-center shadow-soft">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CalendarDays className="h-3.5 w-3.5" /> {n.datum}
                      </div>
                      <h2 className="font-extrabold text-primary-dark text-lg">{n.titel}</h2>
                    </div>
                  </div>
                  <div className="px-7 py-6">
                    <p className="text-muted-foreground leading-relaxed">{n.text}</p>
                    {n.details && (
                      <ul className="mt-4 flex flex-col gap-1">
                        {n.details.map((d) => (
                          <li key={d} className="text-sm text-primary-dark font-medium">· {d}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Aktuelles;
