import { Phone, Check, Leaf, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="container py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-5">
            <MapPin className="h-3.5 w-3.5" /> Therapeutisches Yoga · Bremen
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            Sich selbst finden &<br />
            <span className="text-primary">neue Kraft schöpfen</span>
          </h1>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/20 text-foreground px-3 py-1.5 text-sm font-medium">
            <Leaf className="h-4 w-4 text-accent" /> Therapeutische Yoga-Praxis aus Indien
          </div>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
            Yogalehrerin BDY/EYU und Heilpraktikerin für Psychotherapie.
            Individuelle Yoga-Praxis für mehr Gelassenheit, Gesundheit und innere Klarheit.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "Ausbildung in Indien – Yoga im Ursprungsland erlernt",
              "Therapeutisches Yoga nach Krishnamacharya & Desikachar",
              "Einzel-, Gruppen- und Firmen-Angebote in Bremen",
              "Krankenkassen-anerkannte Präventionskurse",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-foreground">
                <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2 shadow-cta">
              <a href="#kontakt">
                <Leaf className="h-5 w-5" /> Termin anfragen
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+491765538153"><Phone className="h-4 w-4" /> +49 176 553 81 553</a>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Leaf className="h-4 w-4 text-primary" /> BDY/EYU zertifiziert</span>
            <span>•</span>
            <span>Heilpraktikerin für Psychotherapie</span>
            <span>•</span>
            <span>Yoga seit 1985</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-2xl" />
          <div className="relative rounded-2xl shadow-cta overflow-hidden bg-gradient-hero p-8 flex flex-col items-center justify-center min-h-[400px] text-primary-foreground text-center">
            <div className="text-6xl mb-6">🪷</div>
            <blockquote className="text-xl font-light italic leading-relaxed">
              „Der Atem ist das Herzstück meiner Yoga-Angebote – er verbindet uns mit uns selbst."
            </blockquote>
            <div className="mt-6 font-semibold">Śucī Susanne Bruhn</div>
            <div className="text-sm opacity-80">Yogalehrerin BDY/EYU · Heilpraktikerin</div>
          </div>
        </div>
      </div>
    </section>
  );
};