import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Clock, AlertTriangle, CheckCircle2, Wrench, Droplets, Flame, ShieldAlert } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const notfaelle = [
  { icon: Droplets, title: "Rohrbruch &\nWassernotfall" },
  { icon: Flame, title: "Heizungsausfall\nim Winter" },
  { icon: AlertTriangle, title: "Gasleck &\nGasgeruch" },
  { icon: Wrench, title: "Verstopfte\nRohre" },
  { icon: ShieldAlert, title: "Defekter\nBoiler" },
  { icon: CheckCircle2, title: "Alle Sanitär-\nNotfälle" },
];

const Notdienst = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      {/* HERO */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="container relative grid lg:grid-cols-2 gap-6 py-12 lg:py-16 items-stretch">
          <div className="bg-secondary/70 backdrop-blur rounded-2xl p-8 sm:p-10 shadow-card animate-fade-up flex flex-col justify-center">
            <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5 self-start">
              ⚡ 24h Notdienst
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-5 leading-tight">
              Notdienst — 24 Stunden, 7 Tage die Woche
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-7">
              Rohrbruch? Heizungsausfall? Gasgeruch? Wir sind rund um die Uhr für Sie erreichbar.
              Haustechnik Hun bietet schnellen Notdienst in Überlingen und Umgebung — auch nachts, an Wochenenden und Feiertagen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="tel:+4901718297911">
                  <Phone className="h-5 w-5" /> 0171 – 82 97 911
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+4975519450480">
                  <Phone className="h-5 w-5" /> +49 7551 / 945048
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card min-h-[320px]">
            <img src={heroImg} alt="Haustechnik Hun Notdienst" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 24h Info */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Clock, title: "24/7 erreichbar", text: "Rund um die Uhr — auch nachts, am Wochenende und an Feiertagen." },
              { icon: Phone, title: "Direkter Kontakt", text: "Rufen Sie direkt an: 0171 – 82 97 911. Keine Warteschleifen." },
              { icon: CheckCircle2, title: "Schnelle Reaktion", text: "Wir sind so schnell wie möglich bei Ihnen — für Überlingen und Umgebung." },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="bg-secondary rounded-2xl p-7 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-extrabold text-primary-dark text-lg mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notfälle Grid */}
      <section className="bg-surface-soft py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Notfälle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-3">
              Wir helfen bei allen Notfällen
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {notfaelle.map((n) => {
              const Icon = n.icon;
              return (
                <div key={n.title} className="group bg-card hover:bg-primary-dark hover:text-primary-foreground transition-smooth rounded-2xl p-6 border border-border hover:border-primary-dark hover:shadow-card text-center">
                  <div className="h-9 w-9 rounded-full bg-secondary group-hover:bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-bold whitespace-pre-line text-sm leading-snug">{n.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Notfall */}
      <section className="py-16 bg-primary-dark text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
            Notfall? Rufen Sie jetzt an!
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Haustechnik Hun ist 24 Stunden am Tag erreichbar. Schildern Sie uns kurz Ihr Problem —
            wir organisieren sofort die notwendige Hilfe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="bg-white text-primary-dark hover:bg-white/90 font-extrabold text-lg" asChild>
              <a href="tel:+4901718297911">
                <Phone className="h-6 w-6" /> 0171 – 82 97 911
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10" asChild>
              <a href="tel:+4975519450480">
                <Phone className="h-5 w-5" /> +49 7551 / 945048
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Notdienst;
