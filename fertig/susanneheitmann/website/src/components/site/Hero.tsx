import { Phone, Check, Clock, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-plumber.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="container py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-5">
            <MapPin className="h-3.5 w-3.5" /> Berlin & Osnabrück
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            Susanne Heitmann –<br /><span className="text-primary">Bildende Künstlerin</span>
          </h1>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/20 text-foreground px-3 py-1.5 text-sm font-medium">
            Malerei · Siebdruck · Collagen · Workshops
          </div>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
            Freischaffende Künstlerin mit Atelier in Berlin und Osnabrück. Malerei auf Leinwand und Papier, Siebdruck, Collagen sowie Workshops in der Kunstvermittlung.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "Malerei auf Leinwand und Papier",
              "Siebdruck (Lichtpunkte-Serie)",
              "Workshops in der Kunstvermittlung",
              "Mitglied im GEDOK",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-foreground">
                <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2 shadow-cta">
              <a href="#arbeiten">
                Arbeiten ansehen
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#kontakt">Kontakt</a>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-primary" /> Magisterabschluss Freie Kunst 2005</span>
            <span>•</span>
            <span>Atelier Berlin & Osnabrück</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-2xl" />
          <img
            src={heroImg}
            alt="Sanitär Lindner - Meister vor Service-Fahrzeug"
            width={1024}
            height={768}
            className="relative rounded-2xl shadow-cta object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};