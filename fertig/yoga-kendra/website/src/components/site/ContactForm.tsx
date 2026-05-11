import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const interessen = ["Einzelangebot", "Gruppenangebot", "Firmenangebot", "Krankenkassen-Kurs", "Erstgespräch", "Sonstiges"];

export const ContactForm = () => {
  const [selected, setSelected] = useState<string>("Einzelangebot");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Anfrage gesendet!", description: "Ich melde mich so bald wie möglich bei Ihnen." });
  };

  return (
    <section id="kontakt" className="py-16 bg-surface border-b border-border scroll-mt-32">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Kontakt aufnehmen</h2>
          <p className="mt-3 text-muted-foreground">Ich freue mich auf Ihre Nachricht – für ein unverbindliches Erstgespräch.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <form onSubmit={onSubmit} className="rounded-2xl bg-card border border-border p-6 shadow-card space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Vor- und Nachname" required />
            </div>
            <div>
              <Label htmlFor="email">E-Mail</Label>
              <Input id="email" type="email" placeholder="ihre@email.de" required />
            </div>
            <div>
              <Label htmlFor="phone">Telefon (optional)</Label>
              <Input id="phone" type="tel" placeholder="+49 176 ..." />
            </div>
            <div>
              <Label htmlFor="msg">Ihre Nachricht</Label>
              <Textarea id="msg" placeholder="Was wünschen Sie sich von Ihrer Yoga-Praxis?" rows={3} />
            </div>
            <div>
              <Label>Ich interessiere mich für:</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {interessen.map((p) => (
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
              <Send className="h-4 w-4" /> Nachricht senden
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer Datenschutzerklärung zu.
            </p>
          </form>
          <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-gradient-cta flex items-center justify-center text-2xl text-primary-foreground">🙏</div>
              <div>
                <div className="font-bold text-foreground">Śucī Susanne Bruhn</div>
                <div className="text-sm text-muted-foreground">Yogalehrerin BDY/EYU · Heilpraktikerin</div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              {[
                { v: "Bremen", l: "Standort" },
                { v: "BDY/EYU", l: "Zertifizierung" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-surface border border-border p-3">
                  <div className="text-lg font-extrabold text-primary">{s.v}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-2 text-sm text-foreground">
              <div><strong>Adresse:</strong> Achimer Straße 27, 28205 Bremen</div>
              <div><strong>Tel:</strong> <a href="tel:+491765538153" className="text-primary hover:underline">+49 176 553 81 553</a></div>
              <div><strong>Tel 2:</strong> <a href="tel:+494214349464" className="text-primary hover:underline">+49 421 434 9 464</a></div>
              <div><strong>E-Mail:</strong> <a href="mailto:suci@yoga-kendra.net" className="text-primary hover:underline">suci@yoga-kendra.net</a></div>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-foreground">
              <li>✓ Kostenloses Erstgespräch</li>
              <li>✓ Individuelle Yoga-Programme</li>
              <li>✓ Krankenkassen-anerkannte Kurse</li>
              <li>✓ Yoga für Einzel & Gruppen</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};