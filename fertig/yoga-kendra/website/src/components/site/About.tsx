import { Check, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => (
  <section id="ueber-mich" className="py-16 border-b border-border bg-background scroll-mt-32">
    <div className="container grid md:grid-cols-2 gap-10 items-center">
      <div className="relative rounded-2xl shadow-card overflow-hidden bg-gradient-hero p-10 flex flex-col items-center justify-center min-h-[380px] text-primary-foreground text-center">
        <div className="text-7xl mb-5">🙏</div>
        <div className="font-extrabold text-2xl">Śucī Susanne Bruhn</div>
        <div className="mt-1 opacity-90">Yogalehrerin BDY/EYU</div>
        <div className="opacity-80 text-sm">Heilpraktikerin für Psychotherapie</div>
        <div className="opacity-80 text-sm">Diplom-Sozialpädagogin</div>
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Über mich: Śucī Susanne Bruhn</h2>
        <p className="mt-2 text-muted-foreground">Yoga als Herzensangelegenheit – seit 1985.</p>
        <div className="mt-6 grid grid-cols-3 gap-4">
          {[
            { v: "40+", l: "Jahre Yoga" },
            { v: "3x", l: "Indien-Ausbildung" },
            { v: "BDY/EYU", l: "zertifiziert" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-surface border border-border p-4 text-center">
              <div className="text-2xl font-extrabold text-primary">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-primary/5 border-l-4 border-primary p-4 text-sm text-foreground">
          „Es war und ist mir eine Herzensangelegenheit, Menschen mit Yoga zu stärken und ihre Gesundheit zu erhalten. Der Atem verbindet uns mit uns selbst."
        </div>
        <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm">
          {["BDY/EYU zertifiziert", "Heilpraktikerin für Psychotherapie", "Ausbildung in Indien (Rishikesh)", "Yoga nach Krishnamacharya/Desikachar"].map((t) => (
            <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> {t}</li>
          ))}
        </ul>
        <Button asChild size="lg" className="mt-6 gap-2 shadow-cta">
          <a href="#kontakt"><Leaf className="h-5 w-5" /> Kennenlerngespräch anfragen</a>
        </Button>
      </div>
    </div>
  </section>
);