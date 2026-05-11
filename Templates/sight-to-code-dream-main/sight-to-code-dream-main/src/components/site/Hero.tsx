import { Phone, Check, Clock, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-plumber.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="container py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-5">
            <MapPin className="h-3.5 w-3.5" /> Ihr lokaler Sanitär-Notdienst
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            Sanitär in <span className="text-primary">Ihrer Nähe</span>:<br />
            Sofort-Hilfe vom Profi
          </h1>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/20 text-foreground px-3 py-1.5 text-sm font-medium">
            <Clock className="h-4 w-4 text-accent" /> Heute noch verfügbar – 24/7 Notdienst
          </div>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
            Rohrbruch, verstopfter Abfluss oder defekte Heizung? Wir kommen schnell, arbeiten sauber und zum Festpreis.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "30 Minuten Anfahrt im Umkreis",
              "Transparente Festpreise – keine versteckten Kosten",
              "Meisterbetrieb mit über 15 Jahren Erfahrung",
              "Garantie auf alle Leistungen",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-foreground">
                <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2 shadow-cta">
              <a href="tel:015792631852">
                <Phone className="h-5 w-5" /> 01579 2631852
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#kontakt">Rückruf anfordern</a>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-primary" /> Meisterbetrieb</span>
            <span>•</span>
            <span>TÜV-zertifiziert</span>
            <span>•</span>
            <span>Bezahlung: Bar / EC / Überweisung</span>
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