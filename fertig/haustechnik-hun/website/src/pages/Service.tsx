import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Booking } from "@/components/site/Booking";
import { Button } from "@/components/ui/button";
import { CalendarCheck, CheckCircle2, Wrench, Settings, ShieldCheck, ClipboardList } from "lucide-react";
import betriebImg from "@/assets/betrieb.jpg";
import leistungenImg from "@/assets/leistungen.jpg";

const serviceLeistungen = [
  { icon: Settings, title: "Heizungswartung", text: "Jährliche Inspektion und Wartung Ihrer Heizungsanlage für optimale Effizienz und Sicherheit." },
  { icon: Wrench, title: "Reparaturen", text: "Schnelle Reparatur von Heizungen, Boilern, Sanitäranlagen und Gasgeräten aller Hersteller." },
  { icon: ShieldCheck, title: "Gasgeräteservice", text: "Prüfung, Wartung und Instandsetzung von Gasthermen und Gasheizungen nach TRGI." },
  { icon: ClipboardList, title: "Wartungsverträge", text: "Regelmäßige Servicepakete für eine sorgenfreie Haustechnik — wir erinnern Sie rechtzeitig." },
];

const Service = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      {/* HERO */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="container relative grid lg:grid-cols-2 gap-6 py-12 lg:py-16 items-stretch">
          <div className="bg-secondary/70 backdrop-blur rounded-2xl p-8 sm:p-10 shadow-card animate-fade-up flex flex-col justify-center">
            <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5 self-start">
              Service
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-5 leading-tight">
              Service & Wartung in Überlingen
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-7">
              Regelmäßige Wartung und schneller Service für Ihre Heizungs- und Sanitäranlagen.
              Als Meisterbetrieb sorgen wir dafür, dass Ihre Anlagen zuverlässig und effizient laufen — auch außerhalb der regulären Öffnungszeiten.
            </p>
            <Button variant="hero" size="lg" asChild className="self-start">
              <a href="/kontakt"><CalendarCheck className="h-5 w-5" /> Termin vereinbaren</a>
            </Button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card min-h-[320px]">
            <img src={betriebImg} alt="Haustechnik Hun Service" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Service Leistungen */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Unser Service
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-3">
              Service und Wartung für Ihre Haustechnik
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vorsorgen ist besser als Reparieren — mit regelmäßigem Service verlängern Sie die Lebensdauer Ihrer Anlagen.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {serviceLeistungen.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-secondary rounded-2xl p-7 flex gap-5 items-start">
                  <div className="h-11 w-11 rounded-full bg-card flex items-center justify-center shrink-0 shadow-soft">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-primary-dark text-lg mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="bg-surface-soft py-20">
        <div className="container grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-card rounded-tr-[6rem]">
            <img src={leistungenImg} alt="Haustechnik Leistungen" loading="lazy" className="w-full h-[400px] object-cover" />
          </div>
          <div>
            <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Vorteile
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-5 leading-tight">
              Warum regelmäßige Wartung wichtig ist
            </h2>
            <div className="flex flex-col gap-3">
              {[
                "Längere Lebensdauer Ihrer Anlage",
                "Höhere Energieeffizienz & niedrigere Kosten",
                "Frühzeitige Erkennung von Defekten",
                "Einhaltung von Garantiebedingungen",
                "Gesetzlich vorgeschriebene Prüfungen",
              ].map((v) => (
                <div key={v} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-primary-dark font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Booking />
    </main>
    <Footer />
  </div>
);

export default Service;
