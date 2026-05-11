import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const faqs = [
  { q: "Wie schnell sind Sie bei mir vor Ort?", a: "In den meisten Fällen innerhalb von 30 Minuten. Bei Notfällen priorisieren wir Ihren Auftrag und sind oft noch schneller da." },
  { q: "Auf welche Preise muss ich mich einstellen?", a: "Wir arbeiten ausschließlich mit transparenten Festpreisen. Diese nennen wir Ihnen vor Beginn der Arbeit – keine versteckten Kosten." },
  { q: "Kann ich auch nachts oder am Wochenende anrufen?", a: "Ja, unser Notdienst ist 24/7 erreichbar – auch an Sonn- und Feiertagen." },
  { q: "Wie kann ich bezahlen?", a: "Sie können bequem in bar, mit EC-Karte oder per Überweisung bezahlen." },
  { q: "Gibt es eine Garantie?", a: "Selbstverständlich. Wir geben bis zu 5 Jahre Garantie auf unsere Leistungen." },
  { q: "Welche Gebiete decken Sie ab?", a: "Wir bedienen das gesamte Stadtgebiet sowie Umgebung im Umkreis von ca. 50 km." },
];

export const Faq = () => (
  <section id="faq" className="py-16 bg-background border-b border-border scroll-mt-32">
    <div className="container grid md:grid-cols-3 gap-10">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Häufig gestellte Fragen</h2>
        <p className="mt-3 text-muted-foreground">Die wichtigsten Antworten rund um unseren Sanitär-Service.</p>
        <p className="mt-4 text-sm text-muted-foreground">Noch eine Frage offen? Rufen Sie uns einfach an.</p>
        <Button asChild className="mt-5 gap-2 shadow-cta">
          <a href="tel:015792631852"><Phone className="h-4 w-4" /> Jetzt anrufen – Beratung kostenlos</a>
        </Button>
      </div>
      <div className="md:col-span-2">
        <Accordion type="single" collapsible defaultValue="0" className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={String(i)} className="border border-border rounded-xl bg-card px-4 shadow-card">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);