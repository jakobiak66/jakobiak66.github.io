import { Award, Clock, ShieldCheck } from "lucide-react";

const items = [
  { icon: Award, title: "Meisterbetrieb", text: "Geprüfte Qualität nach Handwerksordnung. Saubere Arbeit, garantiert." },
  { icon: Clock, title: "Schnelle Anfahrt", text: "In der Regel innerhalb von 30 Minuten bei Ihnen vor Ort." },
  { icon: ShieldCheck, title: "24/7 Notdienst", text: "Auch am Wochenende und an Feiertagen für Sie erreichbar." },
];

export const Benefits = () => (
  <section className="bg-surface py-16 border-b border-border">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Warum Sanitär Lindner?</h2>
        <p className="mt-3 text-muted-foreground">Drei Gründe, warum uns Kunden seit Jahren vertrauen.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl bg-card p-7 shadow-card border border-border text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="font-bold text-lg text-foreground">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);