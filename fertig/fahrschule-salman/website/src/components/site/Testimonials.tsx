import { Star, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const reviews = [
  { name: "Andrea M.", city: "München", text: "Herr Lindner kam noch am selben Tag – Rohrbruch in der Küche, alles sauber gelöst. Top Service!" },
  { name: "Thomas K.", city: "Augsburg", text: "Festpreis vorab, freundlich und absolut zuverlässig. Würde ich jederzeit wieder beauftragen." },
  { name: "Sandra W.", city: "Ingolstadt", text: "Verstopfter Abfluss, innerhalb 40 Minuten da, in 20 Minuten erledigt. Klare Empfehlung." },
  { name: "Markus B.", city: "Landshut", text: "Heizung mitten im Winter ausgefallen – schnell repariert, fairer Preis. Danke!" },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  return (
    <section id="bewertungen" className="py-16 bg-gradient-hero text-primary-foreground scroll-mt-32">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Das sagen unsere Kunden über uns</h2>
          <p className="mt-3 opacity-90">Echte Stimmen von Menschen, denen wir geholfen haben.</p>
        </div>
        <div className="max-w-2xl mx-auto rounded-2xl bg-primary-foreground/10 backdrop-blur p-8 border border-primary-foreground/20 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, k) => <Star key={k} className="h-5 w-5 fill-accent text-accent" />)}
          </div>
          <p className="text-lg italic">„{reviews[i].text}"</p>
          <div className="mt-5 font-bold">{reviews[i].name}</div>
          <div className="text-sm opacity-80">{reviews[i].city}</div>
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
            <a href="tel:015792631852"><Phone className="h-4 w-4" /> Auch Sie helfen lassen</a>
          </Button>
        </div>
      </div>
    </section>
  );
};