import { Star, Leaf } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const reviews = [
  { name: "Lola", beruf: "Physikerin", text: "Ich habe früher oft sehr emotional reagiert. Seit ich Yoga praktiziere, kann ich gelassener sein. Und wenn mich etwas sehr stresst, erinnere ich mich an meinen Yoga und weiß sofort, wie ich mir Gutes tun kann." },
  { name: "Sonja, 40 J.", beruf: "Leitende Angestellte", text: "Während der Bildungszeit konnte ich merklich spüren, wie Yoga mir dabei geholfen hat mich zu entspannen und Druck zu verringern. Nicht nur mental, auch körperlich sind Schmerzen in Rücken und Schulter weniger geworden." },
  { name: "Yoga-Schülerin", beruf: "Seminarteilnehmerin", text: "Für mich war die Bildungszeit eine sehr sinnvolle Investition in meine eigene Gesundheit. Ich empfehle Yoga Kendra von Herzen weiter." },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  return (
    <section id="bewertungen" className="py-16 bg-gradient-hero text-primary-foreground scroll-mt-32">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Stimmen meiner Yoga-Schüler*innen</h2>
          <p className="mt-3 opacity-90">Die positive Wirkung von Yoga ist so facettenreich wie die Praxis selbst.</p>
        </div>
        <div className="max-w-2xl mx-auto rounded-2xl bg-primary-foreground/10 backdrop-blur p-8 border border-primary-foreground/20 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, k) => <Star key={k} className="h-5 w-5 fill-accent text-accent" />)}
          </div>
          <p className="text-lg italic">„{reviews[i].text}"</p>
          <div className="mt-5 font-bold">{reviews[i].name}</div>
          <div className="text-sm opacity-80">{reviews[i].beruf}</div>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {reviews.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Bewertung ${k + 1}`}
              className={`h-2.5 rounded-full transition-all ${k === i ? "w-8 bg-primary-foreground" : "w-2.5 bg-primary-foreground/40"}`}
            />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="secondary" className="gap-2">
            <a href="#kontakt"><Leaf className="h-4 w-4" /> Auch ich möchte Yoga erleben</a>
          </Button>
        </div>
      </div>
    </section>
  );
};