import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Stats } from "@/components/site/Stats";
import { FAQ } from "@/components/site/FAQ";
import { Button } from "@/components/ui/button";
import { CalendarCheck, CheckCircle2, Phone } from "lucide-react";
import betriebImg from "@/assets/betrieb.jpg";
import teamLaszlo from "@/assets/team-laszlo.jpg";
import pelletsheizungImg from "@/assets/pelletsheizung.jpg";

// betriebImg: Firmengebäude Haustechnik Hun – Original haustechnik-hun.de, "Über uns" Sektion
// teamLaszlo: Laszlo Hun, Inhaber – Original haustechnik-hun.de
// pelletsheizungImg: Holz-/Pelletsheizung LIVE-Ausstellung – Original haustechnik-hun.de

const ImgPlaceholder = ({ label, height = 420 }: { label: string; height?: number }) => (
  <div style={{
    background: '#f0f0f0',
    border: '2px dashed #ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: `${height}px`,
    borderRadius: '16px',
  }}>
    <div style={{ color: '#999', textAlign: 'center' as const, padding: '20px' }}>
      <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📷</div>
      <div style={{ fontWeight: 'bold' as const, marginBottom: '4px' }}>Platzhalter</div>
      <small>{label}</small>
    </div>
  </div>
);

const advantages = [
  "24h-Notdienst verfügbar",
  "Meisterbetrieb seit 20+ Jahren",
  "Faire Preise",
  "Persönliche Betreuung",
  "Live-Ausstellung Solar & Pellets",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO – echte Bilder: Firmengebäude + Laszlo Hun */}
        <section className="relative bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 hex-pattern opacity-40 pointer-events-none" />
          <div className="container relative grid lg:grid-cols-2 gap-8 py-12 lg:py-20 items-center">
            <div className="bg-secondary/70 backdrop-blur rounded-2xl p-8 sm:p-10 shadow-card animate-fade-up">
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
                Wer wir sind
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-dark mb-5 leading-tight">
                Über Haustechnik Hun
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wir sind ein traditioneller Handwerksbetrieb aus Überlingen am Bodensee.
                Beratung und Betreuung stehen bei uns an erster Stelle — egal ob es um
                Gas-, Wasser- oder Heizungsinstallationen geht.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Laszlo Hun ist Installateur- und Heizungsbaumeister und steht Ihnen auch
                außerhalb der üblichen Öffnungszeiten zur Verfügung. Als Meisterbetrieb
                garantieren wir saubere Arbeit und faire Preise.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:+4975519450480">
                    <Phone className="h-5 w-5" /> Jetzt anrufen
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-4 h-[420px] sm:h-[480px]">
              {/* Echte Fotos: Firmengebäude (Über uns) + Laszlo Hun (Team) */}
              <div className="rounded-[2rem] overflow-hidden shadow-card rounded-tl-[6rem]">
                <img
                  src={betriebImg}
                  alt="Haustechnik Hun – Firmengebäude in Überlingen"
                  className="h-full w-full object-cover"
                  width={800}
                  height={600}
                />
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-card mt-10 rounded-tr-[6rem]">
                <img
                  src={teamLaszlo}
                  alt="Laszlo Hun – Inhaber Haustechnik Hun"
                  loading="lazy"
                  className="h-full w-full object-cover"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats reuse */}
        <Stats />

        {/* Laszlo Hun – Inhaber */}
        <section className="container py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-card">
              {/* Echtes Foto: Laszlo Hun – Original haustechnik-hun.de */}
              <img
                src={teamLaszlo}
                alt="Laszlo Hun – Installateur- und Heizungsbaumeister"
                loading="lazy"
                className="w-full h-[420px] object-cover"
                width={800}
                height={600}
              />
            </div>
            <div>
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Ihr Ansprechpartner
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-5 leading-tight">
                Laszlo Hun — Meisterbetrieb in Überlingen
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Als Installateur- und Heizungsbaumeister bin ich seit über 20 Jahren Ihr zuverlässiger
                Ansprechpartner in Überlingen und Umgebung. Mein Anspruch: saubere Arbeit, faire Preise
                und persönliche Beratung — auch außerhalb der regulären Öffnungszeiten.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+4975519450480">
                  <CalendarCheck className="h-5 w-5" /> Jetzt Termin vereinbaren
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Unsere Leistungen / Ausstellung */}
        <section className="bg-surface-soft py-20">
          <div className="container grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Live-Ausstellung
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-5 leading-tight">
                Holz-/Pelletsheizung live erleben
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                In unserer Ausstellung können Sie moderne Holz- und Pelletsheizungen sowie
                Regenwasseranlagen live in Betrieb sehen. Wir zeigen Ihnen gerne, welche Lösung
                am besten zu Ihrem Haus passt.
              </p>

              <div className="flex flex-wrap gap-3">
                {advantages.map((a) => (
                  <div key={a} className="inline-flex items-center gap-2 bg-card rounded-full pl-2 pr-4 py-2 shadow-soft border border-border">
                    <span className="h-6 w-6 rounded-full bg-gradient-primary flex items-center justify-center">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary-foreground" />
                    </span>
                    <span className="text-sm font-medium text-primary-dark">{a}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card rounded-tr-[6rem]">
              {/* Echtes Foto: Pelletsheizung Live-Ausstellung – Original haustechnik-hun.de
                  Originalkontext: "Holz-/Pelletsheizung LIVE" in der Über-uns Sektion */}
              <img
                src={pelletsheizungImg}
                alt="Holz- und Pelletsheizung – Live-Ausstellung bei Haustechnik Hun"
                loading="lazy"
                className="w-full h-[420px] object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>
        </section>

        {/* CTA mit Platzhalter */}
        <section className="container py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-card rounded-tr-[6rem]">
              {/* 📷 PLATZHALTER: Aktuelles Foto vom Betrieb / Laszlo Hun bei der Arbeit */}
              <ImgPlaceholder label="Foto: Haustechnik Hun – Aktuelle Aufnahme vom Betrieb oder bei der Arbeit" height={420} />
            </div>
            <div>
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Ihr Handwerkspartner
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-5 leading-tight">
                Lassen Sie uns Ihr Projekt gemeinsam angehen!
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Ob Wartung, Reparatur oder Neuinstallation — rufen Sie uns an und wir
                finden gemeinsam die beste Lösung für Ihr Zuhause. Kostenlos und unverbindlich.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+4975519450480">
                  <Phone className="h-5 w-5" /> +49 7551 / 945048
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ reuse */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default About;
