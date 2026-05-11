import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import leak from "@/assets/service-leak.jpg";
import drain from "@/assets/service-drain.jpg";
import toilet from "@/assets/service-toilet.jpg";
import faucet from "@/assets/service-faucet.jpg";
import heating from "@/assets/service-heating.jpg";
import boiler from "@/assets/service-boiler.jpg";
import pipe from "@/assets/service-pipe.jpg";
import bathroom from "@/assets/service-bathroom.jpg";
import waterheater from "@/assets/service-waterheater.jpg";
import other from "@/assets/service-other.jpg";

const services = [
  { img: leak, title: "Wasserhahn tropft?", desc: "Reparatur oder Austausch von Armaturen – schnell und sauber." },
  { img: drain, title: "Abfluss verstopft?", desc: "Professionelle Rohrreinigung mit modernster Technik." },
  { img: toilet, title: "Toilette defekt?", desc: "WC-Reparatur, Spülkasten und Komplett-Austausch." },
  { img: faucet, title: "Armatur tauschen?", desc: "Küche, Bad oder Garten – wir montieren jede Armatur." },
  { img: heating, title: "Heizung fällt aus?", desc: "Heizungsnotdienst und Reparatur aller Modelle." },
  { img: boiler, title: "Boiler defekt?", desc: "Wartung, Reparatur und Neuinstallation Ihres Warmwasserbereiters." },
  { img: pipe, title: "Rohrbruch?", desc: "Sofort-Hilfe bei Wasserschäden und Leckagen." },
  { img: bathroom, title: "Badsanierung?", desc: "Komplette Bäder neu gestaltet – aus einer Hand." },
  { img: waterheater, title: "Warmwasser kalt?", desc: "Durchlauferhitzer, Therme & Co. – wir bringen das Wasser zurück." },
];

export const Services = () => (
  <section id="leistungen" className="py-16 border-b border-border bg-background scroll-mt-32">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ihr Problem? Unsere Lösung.</h2>
        <p className="mt-3 text-muted-foreground">Egal welcher Sanitär-Notfall – wir helfen Ihnen sofort.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <article key={s.title} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-cta transition-all">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" width={800} height={512} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              <a href="#kontakt" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                Soforthilfe <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button asChild size="lg" className="gap-2 shadow-cta">
          <a href="tel:015792631852"><Phone className="h-5 w-5" /> Problem schildern – Sofort-Hilfe bekommen</a>
        </Button>
      </div>
      <div className="mt-10 relative overflow-hidden rounded-3xl bg-gradient-hero text-primary-foreground shadow-cta">
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-6 p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/15 ring-1 ring-primary-foreground/25">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium ring-1 ring-primary-foreground/20">
                Ihr Notfall ist nicht dabei?
              </div>
              <h3 className="mt-2 text-xl md:text-2xl font-bold leading-tight">
                Kein Problem – wir lösen jeden Sanitär-Notfall.
              </h3>
              <p className="mt-1 text-sm md:text-base text-primary-foreground/80">
                Rufen Sie uns an, schildern Sie Ihr Anliegen – wir sind in der Regel innerhalb von 30 Minuten bei Ihnen.
              </p>
            </div>
          </div>
          <a
            href="tel:015792631852"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground text-primary px-6 py-3.5 font-bold shadow-lg hover:scale-[1.03] transition-transform whitespace-nowrap"
          >
            <Phone className="h-5 w-5" /> 01579 2631852
          </a>
        </div>
      </div>
    </div>
  </section>
);