import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => (
  <section id="bewertungen" className="py-16 border-b border-border bg-background scroll-mt-32">
    <div className="container grid md:grid-cols-2 gap-10 items-center">
      <div className="rounded-2xl bg-gradient-hero flex items-center justify-center h-72 md:h-96 shadow-card">
        <div className="text-center text-white p-8">
          <div className="text-5xl font-extrabold">Reinhard</div>
          <div className="text-3xl font-bold mt-1 opacity-90">Pfeiffer</div>
          <div className="mt-4 text-base opacity-80">Sportwissenschaftler</div>
          <div className="mt-1 text-sm opacity-70">Personal Fitness Trainer</div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ihr Trainer: Reinhard Pfeiffer</h2>
        <p className="mt-2 text-muted-foreground">Sportwissenschaftler – mit Erfahrung, Empathie und Leidenschaft.</p>
        <div className="mt-6 grid grid-cols-3 gap-4">
          {[
            { v: "20+", l: "Jahre Erfahrung" },
            { v: "100%", l: "Individuell" },
            { v: "∞", l: "Motivation" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-surface border border-border p-4 text-center">
              <div className="text-2xl font-extrabold text-primary">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-primary/5 border-l-4 border-primary p-4 text-sm text-foreground">
          „Dank meiner langjährigen Erfahrung mit Kunden aus allen Lebensbereichen kann ich dir die Unterstützung und Beratung bieten, die du brauchst. Mit speziell auf dich abgestimmten Trainingseinheiten erreichst du deine Ziele schneller."
        </div>
        <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm">
          {["Diplom-Sportwissenschaftler", "Zertifizierter Personal Trainer", "Eigener Fitness-Raum", "Individuelle Trainingspläne"].map((t) => (
            <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> {t}</li>
          ))}
        </ul>
        <Button asChild size="lg" className="mt-6 gap-2 shadow-cta">
          <a href="tel:017954780910"><Phone className="h-5 w-5" /> Reinhard Pfeiffer anrufen</a>
        </Button>
      </div>
    </div>
  </section>
);
