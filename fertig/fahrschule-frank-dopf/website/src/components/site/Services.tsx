import { ArrowRight, Car, Bike, BookOpen, Award, Users, Navigation } from "lucide-react";

const fuehrerscheine = [
  { icon: Car, title: "Klasse B", desc: "PKW-Fuehrerschein - klassisch und zuverlassig." },
  { icon: Bike, title: "Klasse A / A2 / AM", desc: "Motorrad- und Mofafuehrerschein fuer alle Levels." },
  { icon: BookOpen, title: "Theorieunterricht", desc: "Praxisnaher Theorieunterricht in modernen Unterrichtsraeumen." },
  { icon: Award, title: "Intensivkurse", desc: "Schnell zum Fuehrerschein - Intensivausbildung auf Anfrage." },
  { icon: Navigation, title: "Fahrten Autobahn/Nacht", desc: "Pflichtfahrten Autobahn, Uberlandfahrt und Nacht inklusive." },
  { icon: Users, title: "Begleitetes Fahren BF17", desc: "Ab 17 mit Begleitung - volle Vorbereitung auf den Strassenverkehr." },
];

export const Services = () => (
  <section id="fuehrerscheine" className="py-16 border-b border-border bg-background scroll-mt-32">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Unsere Fuehrerscheinklassen</h2>
        <p className="mt-3 text-muted-foreground">Fahrschule Frank Dopf - Karlsruhe und Umgebung.</p>
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
