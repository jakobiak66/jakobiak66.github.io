import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Booking } from "@/components/site/Booking";
import { Button } from "@/components/ui/button";
import { CalendarCheck, CheckCircle2, Star, Flame, ShieldCheck, Wrench, AlertTriangle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import fahrzeugImg from "@/assets/fahrzeug.jpg";
import betriebImg from "@/assets/betrieb.jpg";

const leistungen = [
  { icon: Flame, title: "Gasheizung\nInstallation" },
  { icon: Wrench, title: "Gasheizung\nWartung & Service" },
  { icon: ShieldCheck, title: "Gasgeräte\nPrüfung & Abnahme" },
  { icon: AlertTriangle, title: "Gasleitung\nReparatur" },
  { icon: CheckCircle2, title: "Neue\nGasanschlüsse" },
  { icon: Flame, title: "Therme & Kessel\nTausch" },
];

const faqs = [
  {
    q: "Darf ich Gasinstallationen selbst durchführen?",
    a: "Nein. Gasinstallationen dürfen ausschließlich von zugelassenen Fachbetrieben durchgeführt werden. Eigenmächtige Eingriffe sind gefährlich und können zu Gaslecks, Explosionen oder dem Erlöschen von Versicherungsschutz führen.",
  },
  {
    q: "Wie oft sollte eine Gasheizung gewartet werden?",
    a: "Eine jährliche Wartung durch einen Fachbetrieb ist empfohlen. So stellen Sie die Betriebssicherheit sicher, halten die Garantie aufrecht und erkennen Verschleiß frühzeitig.",
  },
  {
    q: "Was kostet die Installation eines Gasgeräts?",
    a: "Die Kosten hängen vom Gerät und Aufwand ab. Wir erstellen Ihnen nach einer kostenlosen Besichtigung ein transparentes Angebot.",
  },
  {
    q: "Führt ihr auch Gasgeräteheilungen durch?",
    a: "Ja. Wir warten und reparieren Gasgeräte aller gängigen Hersteller — schnell, zuverlässig und zu fairen Preisen.",
  },
];

const Gasinstallationen = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      {/* HERO */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="container relative grid lg:grid-cols-2 gap-6 py-12 lg:py-16 items-stretch">
          <div className="bg-secondary/70 backdrop-blur rounded-2xl p-8 sm:p-10 shadow-card animate-fade-up flex flex-col justify-center">
            <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5 self-start">
              Leistung
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-5 leading-tight">
              Gasinstallationen in Überlingen
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-7">
              Fachgerechte Gasinstallationen vom Meisterbetrieb — sicher, geprüft und zuverlässig.
              Von der Neuinstallation bis zur Wartung Ihrer Gasanlage sind wir Ihr kompetenter Ansprechpartner in Überlingen und Umgebung.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="/kontakt"><CalendarCheck className="h-5 w-5" /> Jetzt anfragen</a>
              </Button>
              <div className="flex items-center gap-2 bg-card rounded-xl px-4 py-2 shadow-soft">
                <span className="font-bold text-primary-dark text-sm">Google</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card min-h-[320px]">
            <img src={fahrzeugImg} alt="Haustechnik Hun Fahrzeug" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Leistungen Grid */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Unsere Leistungen
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-3">
              Gasinstallationen & Gasgeräteservice
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Alle Leistungen rund um Gas — von der Installation bis zur regelmäßigen Wartung.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {leistungen.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="group bg-secondary hover:bg-card transition-smooth rounded-2xl p-6 border border-transparent hover:border-primary/30 hover:shadow-card">
                  <div className="h-9 w-9 rounded-full bg-card flex items-center justify-center mb-4 shadow-soft">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-primary-dark whitespace-pre-line text-sm leading-snug">
                    {s.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Sektion */}
      <section className="bg-surface-soft py-20">
        <div className="container grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Sicherheit geht vor
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-5 leading-tight">
              Gasinstallationen nur vom Fachbetrieb
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Gasinstallationen sind sicherheitskritisch und dürfen nur von zugelassenen Fachbetrieben durchgeführt werden.
              Als Meisterbetrieb sind wir zugelassen und verfügen über das notwendige Know-how für alle Gasarbeiten.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-7">
              Wir führen Gasinstallationen für Privathaushalte und Gewerbe durch — stets nach den aktuellen Normen
              und Vorschriften (TRGI, DVGW). Nach Abschluss erhalten Sie alle notwendigen Prüfdokumente.
            </p>
            <div className="flex flex-col gap-2">
              {["Zertifizierter Gasfachbetrieb", "Alle Hersteller und Fabrikate", "Wartungsverträge möglich", "Schnelle Reaktionszeit"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-primary-dark font-medium">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {f}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card rounded-tr-[6rem]">
            <img src={betriebImg} alt="Haustechnik Hun Betrieb" loading="lazy" className="w-full h-[400px] object-cover" />
          </div>
        </div>
      </section>

      <Booking />

      {/* FAQ */}
      <section className="bg-surface-soft py-20">
        <div className="container">
          <div className="text-center mb-10">
            <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-3">
              Häufige Fragen zu Gasinstallationen
            </h2>
          </div>
          <Accordion type="single" collapsible defaultValue="item-0" className="max-w-3xl mx-auto space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}
                className="rounded-xl border border-border bg-card data-[state=open]:bg-primary-dark data-[state=open]:text-primary-foreground data-[state=open]:border-primary-dark px-5 transition-smooth">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                  <span className="flex items-center gap-3">
                    <span className="text-xs opacity-60">{String(i + 1).padStart(2, "0")}</span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 opacity-90 leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Gasinstallationen;
