import { Clock, Shield, Building2, Check } from "lucide-react";

const cards = [
  {
    number: "01",
    icon: Clock,
    title: "Modernste Technik",
    desc: "Wir setzen bei jedem TGA-Projekt auf die neuesten Technologien – für maximale Effizienz und Zukunftssicherheit.",
    badge: "Modernste Standards",
  },
  {
    number: "02",
    icon: Building2,
    title: "Großprojekt-Kompetenz",
    desc: "Von Tropical Islands bis E1 Energiemanagement – wir meistern anspruchsvolle Großprojekte in Industrie und Gewerbe.",
    badge: "Referenzprojekte",
  },
  {
    number: "03",
    icon: Shield,
    title: "Zuverlässiger Service",
    desc: "Service und Wartung aller TGA-Anlagen – zuverlässig und terminsicher in Berlin und Brandenburg.",
    badge: "Berlin & Brandenburg",
  },
];

export function ServiceCards() {
  return (
    <section id="leistungen" className="relative -mt-20 z-10">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-card rounded-lg p-6 shadow-card-lg border border-border/50 flex flex-col"
            >
              <div className="mb-4">
                <div className="w-10 h-10 rounded-md bg-brand/10 text-brand flex items-center justify-center">
                  <c.icon size={22} />
                </div>
              </div>
              <h3 className="text-lg font-extrabold leading-snug">
                {c.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {c.desc}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand/10 text-brand px-3 py-2 text-sm font-semibold">
                <Check size={16} />
                {c.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
