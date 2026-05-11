import { Phone, Check, Clock, Award, MapPin, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => (
  <section className="relative overflow-hidden border-b border-border bg-background">
    <div className="container py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-5">
          <MapPin className="h-3.5 w-3.5" /> Karlsruhe · 9 Standorte in der Region
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
          <span className="text-primary">Führerschein</span><br />in Karlsruhe
        </h1>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/20 text-foreground px-3 py-1.5 text-sm font-medium">
          <Clock className="h-4 w-4 text-accent" /> PKW · Motorrad · LKW · Simulator · ASF
        </div>
        <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
          Die Fahrschule Frank Dopf ist eine der größten Fahrschulen in der Region Karlsruhe – mit 9 Standorten, umfassendem Kursangebot und erfahrenen Fahrlehrern.
        </p>
        <ul className="mt-6 space-y-2.5">
          {["PKW, Motorrad, LKW, Trailer & Simulator","9 Standorte in Karlsruhe und Umgebung","Aufbauseminar für Fahranfänger (ASF)","Senioren-Fahrtraining verfügbar"].map((t) => (
            <li key={t} className="flex items-start gap-2 text-foreground">
              <Check className="h-5 w-5 text-success shrink-0 mt-0.5" /><span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="gap-2 shadow-cta">
            <a href="#kontakt"><Phone className="h-5 w-5" /> Jetzt Kontakt aufnehmen</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#leistungen">Alle Führerscheinklassen</a>
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Award className="h-4 w-4 text-primary" /> Erfahrene Fahrlehrer</span>
          <span>•</span><span>9 Standorte Karlsruhe</span><span>•</span><span>Alle Klassen</span>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-2xl" />
        <div className="relative rounded-2xl shadow-cta bg-gradient-hero flex items-center justify-center h-80 md:h-[420px]">
          <div className="text-center text-white p-8">
            <Car className="h-16 w-16 mx-auto mb-3 opacity-90" />
            <div className="text-3xl font-extrabold">Fahrschule</div>
            <div className="text-3xl font-extrabold">Frank Dopf</div>
            <div className="mt-3 text-base opacity-90">9 Standorte · Karlsruhe</div>
            <div className="mt-2 text-sm opacity-75">PKW · Motorrad · LKW · Simulator</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
