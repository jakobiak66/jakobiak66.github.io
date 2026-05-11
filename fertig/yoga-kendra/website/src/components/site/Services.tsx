import { ArrowRight, Sparkles, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { emoji: "🧘", title: "Yoga Individuell (Yoga-Therapie)", desc: "Ca. 60–90 Min., 90–150 €. Persönliche Yoga-Praxis, abgestimmt auf Ihre Lebenssituation und Gesundheit. Auch als Heilpraktikerin für Psychotherapie." },
  { emoji: "🌿", title: "Hatha Yoga-Kurs", desc: "8 Wochen à 2,5 Std. Therapeutischer Yoga für Selbsterforschung, Resilienz und tägliche Praxis." },
  { emoji: "🏢", title: "Yoga für Unternehmen", desc: "Kompakt-Angebote für Betriebe, Hotels und Bildungsträger. Individuelle Programme – als Einzel- oder Gruppenangebot." },
  { emoji: "🌬️", title: "Atem-Yoga & Pranayama", desc: "Der Atem als Herzstück der Praxis. Atemübungen für innere Ruhe, Vitalität und geistige Klarheit." },
  { emoji: "🏥", title: "Präventionskurse (Krankenkasse)", desc: "Zertifizierte Kurse nach §20 SGB V, von gesetzlichen Krankenkassen anerkannt und bezuschusst." },
  { emoji: "📚", title: "Yoga-Philosophie & Sanskrit", desc: "Vertiefung durch Jahrtausende alte Yoga-Texte und Einblicke in Sanskrit – die heilige Sprache Indiens." },
];

export const Services = () => (
  <section id="leistungen" className="py-16 border-b border-border bg-background scroll-mt-32">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Yoga-Angebote für jeden Weg.</h2>
        <p className="mt-3 text-muted-foreground">Individuell, einfühlsam und nach klassischer indischer Tradition.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <article key={s.title} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-cta transition-all">
            <div className="bg-gradient-hero flex items-center justify-center text-5xl py-8">
              {s.emoji}
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              <a href="#kontakt" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                Mehr erfahren <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button asChild size="lg" className="gap-2 shadow-cta">
          <a href="#kontakt"><Leaf className="h-5 w-5" /> Kostenloses Erstgespräch anfragen</a>
        </Button>
      </div>
      <div className="mt-10 relative overflow-hidden rounded-3xl bg-gradient-hero text-primary-foreground shadow-cta">
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-6 p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/15 ring-1 ring-primary-foreground/25">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium ring-1 ring-primary-foreground/20">
                Ihr Anliegen ist besonders?
              </div>
              <h3 className="mt-2 text-xl md:text-2xl font-bold leading-tight">
                Kein Problem – sprechen Sie mich einfach an.
              </h3>
              <p className="mt-1 text-sm md:text-base text-primary-foreground/80">
                Ich stimme die Yoga-Übungen individuell auf Sie ab. Kontaktieren Sie mich für ein unverbindliches Erstgespräch.
              </p>
            </div>
          </div>
          <a
            href="tel:+491765538153"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground text-primary px-6 py-3.5 font-bold shadow-lg hover:scale-[1.03] transition-transform whitespace-nowrap"
          >
            <Leaf className="h-5 w-5" /> Jetzt anrufen
          </a>
        </div>
      </div>
    </div>
  </section>
);