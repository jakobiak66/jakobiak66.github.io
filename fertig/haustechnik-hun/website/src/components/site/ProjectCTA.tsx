import fahrzeugImg from "@/assets/fahrzeug.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ProjectCTA = () => {
  return (
    <section className="container py-20">
      <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-card bg-card">
        <div className="relative h-[300px] lg:h-auto">
          {/* Echtes Foto: Haustechnik Hun Fahrzeug/Baustelle – Original haustechnik-hun.de
              Originalkontext: "Für jede Baustelle extra vorbereitet" */}
          <img
            src={fahrzeugImg}
            alt="Haustechnik Hun – Für jede Baustelle extra vorbereitet"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            width={800}
            height={600}
          />
        </div>
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 self-start">Für jede Baustelle vorbereitet</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-4 leading-tight">
            Lass uns Ihr Projekt gemeinsam angehen!
          </h2>
          <p className="text-muted-foreground mb-7 leading-relaxed">
            Ob kleine Reparatur, Heizungswartung oder komplette Badsanierung — wir kommen vorbereitet
            zu Ihnen. Vereinbaren Sie jetzt einen Termin, unverbindlich und kostenlos.
          </p>
          <Button variant="hero" size="lg" className="self-start" asChild>
            <a href="tel:+4975519450480">
              Jetzt anfragen <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
