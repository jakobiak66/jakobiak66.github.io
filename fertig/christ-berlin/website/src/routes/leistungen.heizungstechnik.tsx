import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LeistungCta } from "@/components/site/LeistungCta";
import { ExternalLink } from "lucide-react";

const leistungen = [
  "Neuinstallation und Modernisierung",
  "Etagen- und Zentralheizung",
  "Fußboden- und Wandflächenheizung",
  "Einbau von Wärmepumpen",
  "Gas- und Öl-Brennwerttechnik",
  "Lüftungsanlagen",
  "Wartung und Reparatur",
];

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-background py-16 md:py-24">
          <div className="container-page grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
            <div>
              <span className="inline-flex items-center gap-2 bg-brand/10 text-brand text-xs font-semibold px-3 py-1 rounded-full mb-6">
                Leistung
              </span>
              <h1 className="text-ink">Heizungsinstallation</h1>
              <p className="mt-4 text-xl md:text-2xl font-semibold text-brand">
                Energiesparende Wohlfühlräume.
              </p>

              <div className="mt-6 space-y-5 text-sm md:text-base leading-relaxed text-muted-foreground">
                <p>
                  Mit unserem Fachwissen unterstützen wir Sie dabei, Ihre Wohnräume
                  zu energiesparenden Wohlfühlräumen zu machen.
                </p>
                <p>
                  Unser besonderes Augenmerk liegt auf energiesparenden,
                  umweltbewussten und komfortabel zu bedienenden Installationen.
                </p>
                <p>
                  Vorzugsweise installieren wir Heiztechnik unseres langjährigen
                  Partners Brötje.
                </p>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                <span className="font-semibold text-ink">Partner:</span>{" "}
                <a
                  href="https://www.broetje.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-brand font-semibold inline-flex items-center gap-1"
                >
                  broetje.de <ExternalLink size={14} />
                </a>
              </p>
            </div>

            <div className="relative w-full h-full min-h-[360px] md:min-h-[480px] rounded-lg overflow-hidden border border-border bg-card shadow-card">
              <img
                src="/christ-berlin/images/heizung.png"
                alt="Heizungsinstallation – Dipl.-Ing. Alexander Christ GmbH"
                className="absolute inset-0 w-full h-full object-contain p-8"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="mb-4">Unsere Leistungen im Überblick</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Von der Planung bis zur Wartung – wir sorgen für zuverlässige Wärme in Ihrem Zuhause.
              </p>
              <ul className="space-y-3">
                {leistungen.map((l) => (
                  <li key={l} className="flex items-start gap-3 bg-card border border-border/50 rounded-md px-4 py-3 shadow-sm">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0 text-sm font-bold">✓</span>
                    <span className="font-medium">{l}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {["Heizungsanlage – Foto folgt", "Wärmepumpe – Foto folgt", "Fußbodenheizung – Foto folgt", "Heizungsraum – Foto folgt"].map((label) => (
                <div key={label} className="aspect-square rounded-lg overflow-hidden border border-border bg-[#f0f0f0] border-2 border-dashed border-[#ccc] flex items-center justify-center p-3">
                  <p className="text-[#999] text-center text-xs">📷 Platzhalter<br /><small>{label}</small></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LeistungCta
          headline="Zeit für moderne Heiztechnik?"
          subline="Kostenlose Beratung zu Wärmepumpe, Brennwert & Co. – persönlich vor Ort in Berlin."
        />
      </main>
      <Footer />
    </div>
  );
}
