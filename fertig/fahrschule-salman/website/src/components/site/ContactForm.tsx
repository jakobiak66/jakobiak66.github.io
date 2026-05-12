import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";


const problems = ["Rohrbruch", "Verstopfung", "Heizung", "Toilette", "Boiler", "Armatur", "Sonstiges"];

export const ContactForm = () => {
  const [selected, setSelected] = useState<string>("Rohrbruch");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Anfrage gesendet!", description: "Wir rufen Sie innerhalb von 5 Minuten zurÃ¼ck." });
  };

  return (
    <section id="kontakt" className="py-16 bg-surface border-b border-border scroll-mt-32">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">RÃ¼ckruf in 5 Minuten â€“ garantiert.</h2>
          <p className="mt-3 text-muted-foreground">Kurz Daten eingeben â€“ wir melden uns sofort.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <form onSubmit={onSubmit} className="rounded-2xl bg-card border border-border p-6 shadow-card space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Vor- und Nachname" required />
            </div>
            <div>
              <Label htmlFor="phone">Telefonnummer</Label>
              <Input id="phone" type="tel" placeholder="z. B. 0179 1234567" required />
            </div>
            <div>
              <Label htmlFor="msg">Kurzbeschreibung</Label>
              <Textarea id="msg" placeholder="Was ist passiert?" rows={3} />
            </div>
            <div>
              <Label>Worum geht's?</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {problems.map((p) => (
                  <button
                    type="button"
                    key={p}
                    onClick={() => setSelected(p)}
                    className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                      selected === p
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground border-border hover:border-primary"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full gap-2 shadow-cta">
              <Send className="h-4 w-4" /> Jetzt zurÃ¼ckrufen lassen
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemÃ¤ÃŸ unserer DatenschutzerklÃ¤rung zu.
            </p>
          </form>
          <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
            <div className="flex items-center gap-4">
              <img src="/fahrschule-salman/images/header.png" alt="Bernd Lindner" loading="lazy" width={64} height={64} className="h-16 w-16 rounded-full object-cover" />
              <div>
                <div className="font-bold text-foreground">Bernd Lindner</div>
                <div className="text-sm text-muted-foreground">Inhaber & SanitÃ¤r-Meister</div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { v: "15+", l: "Jahre" },
                { v: "8000+", l: "AuftrÃ¤ge" },
                { v: "4.9", l: "Bewertung" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-surface border border-border p-3">
                  <div className="text-xl font-extrabold text-primary">{s.v}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
              <span className="ml-2 text-sm text-muted-foreground">basierend auf Ã¼ber 200 Bewertungen</span>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-foreground">
              <li>âœ“ Kostenlose Erstberatung am Telefon</li>
              <li>âœ“ Antwort innerhalb von 5 Minuten</li>
              <li>âœ“ Festpreis vor Auftragsannahme</li>
              <li>âœ“ Sauberes Arbeiten â€“ garantiert</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

