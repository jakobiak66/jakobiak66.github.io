import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import { Link } from "@tanstack/react-router";
import { Gem, Heart, Wrench, Star, Instagram, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goldschmiede Cifci Karlsruhe – Individuelle Schmuckstücke & Trauringe" },
      { name: "description", content: "Handgefertigte Schmuckstücke, Trauringe und Verlobungsringe in Karlsruhe. Seit 1992 steht die Goldschmiede Cifci für höchste Qualität und persönliche Beratung." },
      { property: "og:title", content: "Goldschmiede Cifci – Goldschmiedekunst in Karlsruhe" },
    ],
  }),
  component: Index,
});

const leistungen = [
  {
    icon: Gem,
    title: "Individuelle Schmuckstücke",
    desc: "Jedes Stück wird nach Ihren Wünschen entworfen und von Hand gefertigt – einzigartig wie Sie.",
  },
  {
    icon: Heart,
    title: "Trauringe & Verlobungsringe",
    desc: "Ringe, die ein Leben lang halten – in Gold, Silber, Platin oder als Kombination.",
  },
  {
    icon: Wrench,
    title: "Umarbeitungen & Reparaturen",
    desc: "Wir hauchen alten Schmuckstücken neues Leben ein oder reparieren Ihre Lieblingsstücke.",
  },
];

function Index() {
  return (
    <main>
      <Header />
      <Hero />

      {/* Leistungen Übersicht */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Was wir für Sie tun</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Goldschmiedekunst auf höchstem Niveau
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {leistungen.map((l) => (
              <div key={l.title} className="group p-8 rounded-2xl border border-border hover:border-gold/50 transition bg-card">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition">
                  <l.icon className="size-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{l.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/leistungen" className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:opacity-80 transition">
              Alle Leistungen ansehen <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Über uns Teaser */}
      <section className="py-24 bg-muted">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Der Betrieb</p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Familienbetrieb mit Leidenschaft seit 1992
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Inhaber Serhat Cifci absolvierte seine Ausbildung an der renommierten
                Goldschmiedeschule Pforzheim und führt seit 2005 sein eigenes Atelier
                in Karlsruhe. Seit 2013 verstärkt seine Schwester Esra Cifci das Team.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Im Herzen Karlsruhes fertigen wir jeden Schmuck von Hand –
                mit Präzision, Liebe zum Detail und dem Anspruch auf Perfektion.
              </p>
              <Link
                to="/ueber-uns"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:opacity-80 transition"
              >
                Mehr über uns <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="bg-card rounded-2xl p-10 border border-border text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center">
                  <Star className="size-10 text-gold" />
                </div>
              </div>
              <p className="font-serif text-2xl font-semibold text-foreground mb-2">
                "Ihr Traum. Unsere Handarbeit."
              </p>
              <p className="text-sm text-muted-foreground">– Serhat Cifci, Inhaber & Goldschmied</p>
              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href="https://www.instagram.com/cifcijewelrycustoms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition"
                >
                  <Instagram className="size-4" />
                  @cifcijewelrycustoms
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background text-center">
        <div className="container-x max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-background">
            Bereit für Ihren einzigartigen Schmuck?
          </h2>
          <p className="text-background/70 mb-10 leading-relaxed">
            Vereinbaren Sie einen kostenlosen Beratungstermin – wir freuen uns darauf,
            Ihren Traum in die Wirklichkeit umzusetzen.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-gold text-background rounded-full px-8 py-4 text-sm font-semibold hover:opacity-90 transition"
          >
            Jetzt Termin vereinbaren <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
