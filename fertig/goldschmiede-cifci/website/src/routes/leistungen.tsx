import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Link } from "react-router-dom";
import { Gem, Heart, Wrench, Sparkles, ArrowRight } from "lucide-react";



const leistungen = [
  {
    icon: Gem,
    title: "Individuelle Schmuckstücke",
    desc: "Jedes Schmuckstück entsteht nach Ihren persönlichen Wünschen. Wir entwerfen, skizzieren und fertigen – von der Idee bis zum fertigen Unikat. Ringe, Anhänger, Colliers, Armreifen und mehr.",
    details: ["Entwurf und Beratung", "3D-Visualisierung auf Wunsch", "Verschiedene Materialien: Gold, Silber, Platin", "Mit oder ohne Edelsteine"],
  },
  {
    icon: Heart,
    title: "Trauringe & Verlobungsringe",
    desc: "Ringe, die ein Leben lang halten und Ihre Liebe symbolisieren. Wir fertigen Trauringe in klassischen und modernen Designs – als Paar oder einzeln, in allen Edelmetallen.",
    details: ["Klassische und moderne Designs", "Gravur und Veredelung", "Alle Edelmetalle", "Auch als Set erhältlich"],
  },
  {
    icon: Wrench,
    title: "Umarbeitungen",
    desc: "Alten Schmuck in neuem Glanz erstrahlen lassen. Wir arbeiten geerbte Stücke professionell um, damit sie wieder getragen werden können und neue Bedeutung erhalten.",
    details: ["Größenänderungen", "Neues Design aus altem Material", "Edelsteine umfassen", "Werterhalt und Aufwertung"],
  },
  {
    icon: Sparkles,
    title: "Reparaturen",
    desc: "Lieblingsschmuck wird repariert – mit handwerklichem Können und größter Sorgfalt. Kettenreparaturen, Schließen, Verschlüsse, Steinfassungen und mehr.",
    details: ["Kettenreparaturen", "Verschlüsse und Schließen", "Steinfassungen erneuern", "Politur und Reinigung"],
  },
];

export default function LeistungenPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-24">
        <div className="container-x">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Was wir für Sie schaffen</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
              Unsere Leistungen
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Handgefertigte Goldschmiedekunst auf höchstem Niveau – seit über 30 Jahren
              in Karlsruhe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leistungen.map((l) => (
              <div key={l.title} className="bg-card border border-border rounded-2xl p-8 hover:border-gold/50 transition">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <l.icon className="size-6 text-gold" />
                </div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">{l.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{l.desc}</p>
                <ul className="space-y-2">
                  {l.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-gold text-background rounded-full px-8 py-4 text-sm font-semibold hover:opacity-90 transition"
            >
              Beratungstermin vereinbaren <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
