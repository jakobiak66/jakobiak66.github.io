import { Phone, Check, Clock, Award, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="container py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-5">
            <MapPin className="h-3.5 w-3.5" /> Eggenstein-Leopoldshafen & Umgebung
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            Ihr Personal Trainer: <span className="text-primary">Fit werden</span><br />
            mit System
          </h1>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/20 text-foreground px-3 py-1.5 text-sm font-medium">
            <Clock className="h-4 w-4 text-accent" /> Flexible Trainingszeiten – ganz nach Ihrem Plan
          </div>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
            Abnehmen, Muskeln aufbauen, gesünder werden? Reinhard Pfeiffer, Sportwissenschaftler und zertifizierter Personal Trainer, begleitet Sie individuell zu Ihren Zielen.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "Individuell auf Sie abgestimmtes Training",
              "Sportwissenschaftliche Methoden – nachhaltige Ergebnisse",
              "Personal Training (Einzel) & Gruppentraining",
              "Eigener Fitness-Raum – keine Mitgliedschaft nötig",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-foreground">
                <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2 shadow-cta">
              <a href="tel:017954780910">
                <Phone className="h-5 w-5" /> 0179-5478091
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#kontakt">Kostenloses Erstgespräch</a>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Award className="h-4 w-4 text-primary" /> Sportwissenschaftler</span>
            <span>•</span>
            <span>Zertifizierter Personal Trainer</span>
            <span>•</span>
            <span>info@sehrfit.de</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-2xl" />
          <div className="relative rounded-2xl shadow-cta bg-gradient-hero flex items-center justify-center h-80 md:h-[420px]">
            <div className="text-center text-white p-8">
              <div className="text-7xl font-extrabold leading-none">SEHR</div>
              <div className="text-7xl font-extrabold leading-none" style={{color: 'hsl(28 100% 50%)'}}>FIT</div>
              <div className="mt-6 text-base opacity-90">Personal Fitness Training</div>
              <div className="mt-1 text-sm opacity-75">Reinhard Pfeiffer · Sportwissenschaftler</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
