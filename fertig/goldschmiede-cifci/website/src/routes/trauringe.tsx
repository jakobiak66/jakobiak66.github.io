import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Link } from "@tanstack/react-router";
import { Heart, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/trauringe")({
  head: () => ({
    meta: [
      { title: "Trauringe & Verlobungsringe – Goldschmiede Cifci Karlsruhe" },
      { name: "description", content: "Handgefertigte Trauringe und Verlobungsringe in Gold, Silber und Platin. Persönliche Beratung in der Goldschmiede Cifci, Karlsruhe." },
    ],
  }),
  component: TrauringePage,
});

const ringstile = [
  { title: "Klassisch", desc: "Zeitlose Eleganz in schlichtem Design – für alle, die das Wesentliche schätzen." },
  { title: "Modern", desc: "Klare Linien, ungewöhnliche Materialien und zeitgemäße Ästhetik." },
  { title: "Romantisch", desc: "Filigranes Design mit Gravuren, Milgrain-Kanten und besonderen Details." },
  { title: "Individuell", desc: "Komplett nach Ihren Wünschen – kein Ring gleicht dem anderen." },
];

function TrauringePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-24">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                <Heart className="size-8 text-gold" />
              </div>
            </div>
            <p className="eyebrow mb-4">Für Ihren besonderen Moment</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
              Trauringe & Verlobungsringe
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Ein Ring ist mehr als Schmuck – er ist ein Symbol. Wir fertigen Ihre Ringe
              mit größter Sorgfalt, in höchster Qualität und nach Ihren persönlichen Wünschen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {ringstile.map((s) => (
              <div key={s.title} className="bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-2xl p-10 text-center">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Vereinbaren Sie Ihren Beratungstermin
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto">
              Besuchen Sie uns in unserem Atelier in der Waldstraße 25, Karlsruhe.
              Wir nehmen uns Zeit für Sie – denn Ihr Ring soll perfekt sein.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-gold text-background rounded-full px-8 py-4 text-sm font-semibold hover:opacity-90 transition"
            >
              Jetzt Termin vereinbaren <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
