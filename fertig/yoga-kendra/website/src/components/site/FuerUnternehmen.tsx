import { Check, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const angebote = [
  {
    titel: "Kompakt-Workshops",
    beschreibung: "2–4 Stunden Yoga für Ihr Team. Ideal für Teambuilding, Betriebsausflüge oder Gesundheitstage.",
    emoji: "⏱️"
  },
  {
    titel: "Regelmäßige Betriebskurse",
    beschreibung: "Wöchentliche oder monatliche Yoga-Einheiten direkt im Unternehmen oder online.",
    emoji: "📅"
  },
  {
    titel: "Präventionsprogramme",
    beschreibung: "Krankenkassen-anerkannte Kurse zur betrieblichen Gesundheitsförderung (BGF).",
    emoji: "🏥"
  },
  {
    titel: "Führungskräfte-Coaching",
    beschreibung: "Individuelle Yoga-Praxis für Manager und Führungspersönlichkeiten – mehr Gelassenheit im Berufsalltag.",
    emoji: "🎯"
  },
];

export const FuerUnternehmen = () => (
  <section id="unternehmen" className="py-16 border-b border-border bg-surface scroll-mt-32">
    <div className="container">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-4">
          <Leaf className="h-3.5 w-3.5" /> Für Unternehmen & Teams
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Yoga im Unternehmenskontext</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Gesunde Mitarbeiter sind das Fundament eines erfolgreichen Unternehmens.
          Yoga fördert Konzentration, reduziert Stress und stärkt das Teamgefühl.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {angebote.map((a) => (
          <div key={a.titel} className="rounded-2xl bg-card border border-border p-6 shadow-card text-center hover:shadow-cta transition-all">
            <div className="text-4xl mb-4">{a.emoji}</div>
            <h3 className="font-bold text-foreground">{a.titel}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{a.beschreibung}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-card border border-border p-8 shadow-card grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold text-foreground">Vorteile für Ihr Unternehmen</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              "Reduzierung von Kranktagen durch Stressprävention",
              "Verbesserung von Konzentration und Produktivität",
              "Stärkung des Teamzusammenhalts",
              "Attraktiveres Employer Branding",
              "Steuerlich absetzbar als Betriebsausgabe",
              "Förderung durch gesetzliche Krankenkassen möglich",
            ].map((v) => (
              <li key={v} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <div className="text-6xl mb-4">🏢</div>
          <p className="text-muted-foreground italic mb-4">
            „Individuell stimme ich die Yoga-Übungen auf die Teilnehmer*innen ab – in Kompakt-Angeboten für Betriebe und Hotels."
          </p>
          <Button asChild size="lg" className="gap-2 shadow-cta">
            <a href="#kontakt"><Leaf className="h-5 w-5" /> Firmenangebot anfragen</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
