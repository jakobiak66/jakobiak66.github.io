import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const vorteile = [
  { emoji: "🧠", titel: "Geistige Klarheit", text: "Yoga schult die Achtsamkeit und fördert Fokus und Konzentrationsfähigkeit im Alltag." },
  { emoji: "💪", titel: "Körperliche Gesundheit", text: "Verbesserte Beweglichkeit, Körperspannung und Stärkung der Muskulatur durch regelmäßige Praxis." },
  { emoji: "🕊️", titel: "Innere Ruhe", text: "Atemübungen (Pranayama) und Meditation helfen, Stress abzubauen und Gelassenheit zu entwickeln." },
  { emoji: "🌱", titel: "Persönliches Wachstum", text: "Yoga-Philosophie und Selbstreflexion fördern ein tieferes Verständnis von sich selbst und anderen." },
  { emoji: "❤️", titel: "Emotionale Balance", text: "Therapeutisches Yoga hilft, emotionale Reaktionen zu regulieren und Resilienz aufzubauen." },
  { emoji: "🔋", titel: "Neue Energie", text: "Ausgleich von Körper und Geist – Yoga schenkt neue Kraft für die Anforderungen des Alltags." },
];

export const WarumYoga = () => (
  <section id="warum-yoga" className="py-16 border-b border-border bg-background scroll-mt-32">
    <div className="container">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-4">
          <Leaf className="h-3.5 w-3.5" /> Warum Yoga?
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Yoga als Lebensbegleiter</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Yoga ist mehr als Körperübungen – es ist ein ganzheitlicher Weg zu mehr Gesundheit,
          Gelassenheit und Selbsterkenntnis. Jahrtausende alte Weisheit für das moderne Leben.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {vorteile.map((v) => (
          <div key={v.titel} className="rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-cta transition-all">
            <div className="text-4xl mb-3">{v.emoji}</div>
            <h3 className="font-bold text-lg text-foreground">{v.titel}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-gradient-hero text-primary-foreground p-8 text-center shadow-cta">
        <div className="text-5xl mb-4">🪷</div>
        <blockquote className="text-xl font-light italic max-w-2xl mx-auto">
          „Yoga ist ein wertvoller Lebensbegleiter für innere Ruhe, Gelassenheit und Klarheit.
          Ich freue mich, Ihnen diese Kraftquelle näherzubringen."
        </blockquote>
        <div className="mt-4 font-semibold">Śucī Susanne Bruhn</div>
        <div className="mt-6">
          <Button asChild variant="secondary" size="lg" className="gap-2">
            <a href="#leistungen"><Leaf className="h-5 w-5" /> Meine Yoga-Angebote entdecken</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
