import { ArrowRight } from "lucide-react";

const artworks = [
  {
    img: "/susanneheitmann/images/01-future-I-2021.jpg",
    title: "Future I",
    desc: "2021, Malerei auf Papier",
    serie: "Galerie Papier 2019–21",
  },
  {
    img: "/susanneheitmann/images/02-future-II-2021.jpg",
    title: "Future II",
    desc: "2021, Malerei auf Papier",
    serie: "Galerie Papier 2019–21",
  },
  {
    img: "/susanneheitmann/images/03-still-I-2020.jpg",
    title: "Still I",
    desc: "2020, Malerei auf Papier",
    serie: "Galerie Papier 2019–21",
  },
  {
    img: "/susanneheitmann/images/IN-SITU-2024.jpg",
    title: "IN SITU",
    desc: "2024, Ausstellungsansicht",
    serie: "Ausstellungen",
  },
  {
    img: "/susanneheitmann/images/Kunsthalle-OS-1.jpg",
    title: "Kunsthalle Osnabrück",
    desc: "Ausstellungsansicht",
    serie: "Ausstellungen",
  },
  {
    img: "/susanneheitmann/images/momentaufnahmen1.jpg",
    title: "Momentaufnahmen",
    desc: "Ausstellungsansicht",
    serie: "Ausstellungen",
  },
];

export const Services = () => (
  <section id="arbeiten" className="py-16 border-b border-border bg-background scroll-mt-32">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ausgewählte Arbeiten</h2>
        <p className="mt-3 text-muted-foreground">Malerei, Siebdruck und Ausstellungsansichten.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((s) => (
          <article key={s.title} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-cta transition-all">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={s.img} alt={`${s.title} – ${s.desc}`} loading="lazy" width={800} height={600} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <div className="text-xs text-primary font-semibold mb-1">{s.serie}</div>
              <h3 className="font-bold text-lg text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              <a href="#kontakt" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                Anfragen <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
