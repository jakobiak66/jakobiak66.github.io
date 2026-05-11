import { Phone, MessageSquare, Wrench, ThumbsUp, Phone as PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Phone, title: "Anruf", text: "Sie rufen uns an – wir nehmen Ihr Anliegen sofort auf." },
  { icon: MessageSquare, title: "Analyse", text: "Wir klären das Problem und nennen Ihnen einen Festpreis." },
  { icon: Wrench, title: "Anfahrt & Reparatur", text: "Wir kommen schnell und beheben das Problem fachgerecht." },
  { icon: ThumbsUp, title: "Fertig", text: "Sie sind zufrieden – Bezahlung erfolgt erst nach erledigter Arbeit." },
];

export const Process = () => (
  <section id="ablauf" className="py-16 bg-surface border-b border-border scroll-mt-32">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">So einfach geht's</h2>
        <p className="mt-3 text-muted-foreground">In vier Schritten zur Lösung Ihres Sanitär-Problems.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={s.title} className="text-center">
            <div className="relative mx-auto h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-cta">
              <s.icon className="h-7 w-7" />
              <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">{i + 1}</span>
            </div>
            <h3 className="mt-4 font-bold text-foreground">{s.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button asChild size="lg" className="gap-2 shadow-cta">
          <a href="tel:015792631852"><PhoneIcon className="h-5 w-5" /> Sofort-Hilfe anfordern</a>
        </Button>
      </div>
    </div>
  </section>
);