import { Phone, ArrowRight, Sparkles, Dumbbell, Users, Heart, Target, Activity, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Dumbbell, title: "Personal Training", desc: "Individuelles Einzeltraining – die effektivste Methode, Ihre Fitness- und Gesundheitsziele zu erreichen. Maßgeschneidert für Sie." },
  { icon: Users, title: "Gruppentraining", desc: "Sport macht in der Gruppe mehr Spaß! Effektives Training in kleinen Gruppen mit persönlicher Betreuung durch den Trainer." },
  { icon: Target, title: "Gewichtsreduktion", desc: "Wissenschaftlich fundierte Trainings- und Ernährungsberatung für nachhaltige Gewichtsabnahme ohne Jojo-Effekt." },
  { icon: Activity, title: "Krafttraining", desc: "Muskelaufbau, Körperformung und funktionelle Stärkung – mit dem richtigen Plan und korrekter Ausführung." },
  { icon: Heart, title: "Ausdauer & Gesundheit", desc: "Herz-Kreislauf-Training und Gesundheitssport – für mehr Energie im Alltag und langfristige Vitalität." },
  { icon: Zap, title: "Fitness-Coaching", desc: "Persönliches Coaching mit Trainingsplan, Fortschrittskontrolle und sportwissenschaftlicher Beratung." },
];

export const Services = () => (
  <section id="leistungen" className="py-16 border-b border-border bg-background scroll-mt-32">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ihr Trainingsziel? Meine Lösung.</h2>
        <p className="mt-3 text-muted-foreground">Egal ob Einzel- oder Gruppentraining – individuell auf Sie abgestimmt.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <article key={s.title} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-cta transition-all p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-foreground">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            <a href="#kontakt" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
              Mehr erfahren <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button asChild size="lg" className="gap-2 shadow-cta">
          <a href="tel:017954780910"><Phone className="h-5 w-5" /> Kostenloses Erstgespräch vereinbaren</a>
        </Button>
      </div>
      <div className="mt-10 relative overflow-hidden rounded-3xl bg-gradient-hero text-primary-foreground shadow-cta">
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-6 p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/15 ring-1 ring-primary-foreground/25">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium ring-1 ring-primary-foreground/20">
                Fitness-Raum vorhanden
              </div>
              <h3 className="mt-2 text-xl md:text-2xl font-bold leading-tight">
                Trainieren Sie in unserem eigenen Fitness-Raum.
              </h3>
              <p className="mt-1 text-sm md:text-base text-primary-foreground/80">
                Kein Fitnessstudio nötig – modernes Equipment, persönliche Atmosphäre, volle Konzentration auf Sie.
              </p>
            </div>
          </div>
          <a href="tel:017954780910" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground text-primary px-6 py-3.5 font-bold shadow-lg hover:scale-[1.03] transition-transform whitespace-nowrap">
            <Phone className="h-5 w-5" /> 0179-5478091
          </a>
        </div>
      </div>
    </div>
  </section>
);
