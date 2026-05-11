import { Phone, Check, Clock, Award, MapPin, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => (
  <section className="relative overflow-hidden border-b border-border bg-background">
    <div className="container py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-5">
          <MapPin className="h-3.5 w-3.5" /> Bremen-Huckelriede · Linie 4 vor der Tür
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
          <span className="text-primary">Führerschein</span> in Bremen:<br />Direkt zum Ziel
        </h1>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/20 text-foreground px-3 py-1.5 text-sm font-medium">
          <Clock className="h-4 w-4 text-accent" /> Theorie Mo + Mi abends · Klassen B, BF17, BE
        </div>
        <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
          Professionelle, zügige und faire Fahrausbildung in Bremen-Huckelriede. Auf Fahrzeugen mit Schalt- und Automatikgetriebe. Überzeugen Sie sich beim kostenlosen Probetermin!
        </p>
        <ul className="mt-6 space-y-2.5">
          {["Klassen B, BF17 (begleitetes Fahren ab 17) und BE","Theorieunterricht Mo & Mi abends","Schalt- und Automatikgetriebe","Zentrale Lage – direkt an Straßenbahnlinie 4"].map((t) => (
            <li key={t} className="flex items-start gap-2 text-foreground">
              <Check className="h-5 w-5 text-success shrink-0 mt-0.5" /><span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="gap-2 shadow-cta">
            <a href="tel:042184999053"><Phone className="h-5 w-5" /> 0421-84 999 053</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#kontakt">Kostenloser Probetermin</a>
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Award className="h-4 w-4 text-primary" /> Erfahrene Fahrlehrer</span>
          <span>•</span><span>Top Google-Bewertungen</span><span>•</span><span>Faire Preise</span>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-2xl" />
        <div className="relative rounded-2xl shadow-cta bg-gradient-hero flex items-center justify-center h-80 md:h-[420px]">
          <div className="text-center text-white p-8">
            <Car className="h-20 w-20 mx-auto mb-4 opacity-90" />
            <div className="text-3xl font-extrabold">Fahrschule Salman</div>
            <div className="mt-3 text-base opacity-90">Bremen-Huckelriede</div>
            <div className="mt-2 text-sm opacity-75">Klassen B · BF17 · BE</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
