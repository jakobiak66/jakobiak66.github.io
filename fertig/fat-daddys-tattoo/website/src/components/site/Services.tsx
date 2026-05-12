import { ArrowRight } from "lucide-react";

const tattoos = [
  { img: "/fat-daddys-tattoo/images/tattoo-1.jpg", title: "Tattoo Galerie", cat: "Verschiedene Stile" },
  { img: "/fat-daddys-tattoo/images/tattoo-2.jpg", title: "Tattoo Galerie", cat: "Detailarbeit" },
  { img: "/fat-daddys-tattoo/images/tattoo-3.jpg", title: "Tattoo Galerie", cat: "Custom Design" },
  { img: "/fat-daddys-tattoo/images/tattoo-4.jpg", title: "Tattoo Galerie", cat: "Black & Grey" },
  { img: "/fat-daddys-tattoo/images/tattoo-5.jpg", title: "Tattoo Galerie", cat: "Color Tattoo" },
  { img: "/fat-daddys-tattoo/images/tattoo-6.jpg", title: "Tattoo Galerie", cat: "Traditional" },
  { img: "/fat-daddys-tattoo/images/tattoo-7.jpg", title: "Tattoo Galerie", cat: "Fineline" },
  { img: "/fat-daddys-tattoo/images/tattoo-8.jpg", title: "Tattoo Galerie", cat: "Portrat" },
];

export const Services = () => (
  <section id="galerie" className="py-16 border-b border-border bg-background scroll-mt-32">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Unsere Tattoo-Galerie</h2>
        <p className="mt-3 text-muted-foreground">Fat Daddys Backyard - Echte Arbeiten, echte Kunst.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {tattoos.map((t, i) => (
          <article key={i} className="group rounded-xl overflow-hidden bg-card border border-border shadow-card hover:shadow-cta transition-all">
            <div className="aspect-square overflow-hidden">
              <img src={t.img} alt={t.cat} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-3">
              <p className="text-xs text-muted-foreground">{t.cat}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="#kontakt" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
          Termin buchen <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);
