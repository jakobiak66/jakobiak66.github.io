import { ArrowRight, Car, Award, Users, BookOpen, Bike, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const fuehrerscheine = [
  {
    icon: Car,
    img: "/fahrschulekolb/images/hero.jpg",
    title: "Klasse B",
    desc: "Der klassische PKW-Führerschein – Ihr Einstieg in die Mobilität.",
  },
  {
    icon: Bike,
    img: "/fahrschulekolb/images/fahrzeug1.jpg",
    title: "Klasse A",
    desc: "Motorrad-Führerschein – für Einsteiger und Erfahrene.",
  },
  {
    icon: Truck,
    img: "/fahrschulekolb/images/fahrzeug2.jpg",
    title: "Klasse BE/C",
    desc: "Anhänger und LKW – für mehr Möglichkeiten auf der Straße.",
  },
  {
    icon: BookOpen,
    img: "",
    title: "Theorieunterricht",
    desc: "Moderner Unterricht mit digitalen Lehrmitteln und erfahrenen Fahrlehrern.",
  },
  {
    icon: Award,
    img: "",
    title: "Intensivkurse",
    desc: "Schnell zum Führerschein – kompakte Intensivkurse auf Anfrage.",
  },
  {
    icon: Users,
    img: "",
    title: "Fahrstunden",
    desc: "Individuelle Begleitung durch unsere erfahrenen Fahrlehrer.",
  },
];

export const Services = () => (
  <section id="fuehrerscheine" className="py-16 border-b border-border bg-background scroll-mt-32">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Unsere Führerscheinklassen</h2>
        <p className="mt-3 text-muted-foreground">Fahrschule Kolb – Ihr Partner für alle Führerscheinklassen.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fuehrerscheine.map((s) => (
          <article key={s.title} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-cta transition-all">
            {s.img ? (
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ) : (
              <div className="aspect-[4/3] bg-primary/10 flex items-center justify-center">
                <s.icon className="h-16 w-16 text-primary/40" />
              </div>
            )}
            <div className="p-5">
              <h3 className="font-bold text-lg text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              <a href="#kontakt" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                Mehr erfahren <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
