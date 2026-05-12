import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";


export const About = () => (
  <section className="py-16 border-b border-border bg-background">
    <div className="container grid md:grid-cols-2 gap-10 items-center">
      <img src="/fahrschulekolb/images/team.jpg" alt="Bernd Lindner â€“ Ihr Ansprechpartner" loading="lazy" width={1024} height={768} className="rounded-2xl shadow-card object-cover w-full" />
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ihr Ansprechpartner: Bernd Lindner</h2>
        <p className="mt-2 text-muted-foreground">PersÃ¶nlich. VerlÃ¤sslich. Mit Handschlag-QualitÃ¤t.</p>
        <div className="mt-6 grid grid-cols-3 gap-4">
          {[
            { v: "15+", l: "Jahre Erfahrung" },
            { v: "8000+", l: "AuftrÃ¤ge erledigt" },
            { v: "99%", l: "Kundenzufriedenheit" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-surface border border-border p-4 text-center">
              <div className="text-2xl font-extrabold text-primary">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-primary/5 border-l-4 border-primary p-4 text-sm text-foreground">
          â€žMein Anspruch ist es, jedem Kunden so zu helfen, wie ich auch selbst behandelt werden mÃ¶chte: schnell, fair und ehrlich. Deshalb gibt es bei mir Festpreise â€“ ohne bÃ¶se Ãœberraschungen."
        </div>
        <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm">
          {["Meisterbetrieb", "Versicherungs-Partner", "Festpreis-Garantie", "Saubere Arbeit"].map((t) => (
            <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> {t}</li>
          ))}
        </ul>
        <Button asChild size="lg" className="mt-6 gap-2 shadow-cta">
          <a href="tel:015792631852"><Phone className="h-5 w-5" /> Bernd Lindner anrufen</a>
        </Button>
      </div>
    </div>
  </section>
);
