import { ArrowRight, Car, Award, Users, BookOpen, Bike, CreditCard } from "lucide-react";

const fuehrerscheine = [
  { icon: Car, title: "Klasse B", desc: "Der klassische PKW-Fuehrerschein - Ihr Einstieg in die Mobilitaet." },
  { icon: Bike, title: "Klasse A / A2", desc: "Motorrad-Fuehrerschein fuer Einsteiger und Fortgeschrittene." },
  { icon: CreditCard, title: "Klasse AM", desc: "Mofa- und Leichtkraftrad-Fuehrerschein ab 15 Jahren." },
  { icon: BookOpen, title: "Theorieunterricht", desc: "Moderner Theorieunterricht mit digitalen Lehrmitteln." },
  { icon: Award, title: "Fahrausbildung", desc: "Individuelle Begleitung durch erfahrene Fahrlehrer." },
  { icon: Users, title: "Begleitetes Fahren BF17", desc: "Mit Mama oder Papa schon mit 17 ans Steuer." },
];

export const Services = () => (
  <section id="fuehrerscheine" className="py-16 border-b border-border bg-background scroll-mt-32">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Unsere Fuehrerscheinklassen</h2>
        <p className="mt-3 text-muted-foreground">Fahrschule Salman - Ihr Partner fuer alle Fuehrerscheinklassen.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fuehrerscheine.map((s) => (
          <article key={s.title} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-cta transition-all p-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <a href="#kontakt" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
              Mehr erfahren <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
