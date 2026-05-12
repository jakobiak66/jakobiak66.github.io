import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const beispielBaeder = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/heizung-sanitaer-adamek/images/beispiel-bad${i + 1}.jpg`,
  alt: `Badezimmer Beispiel ${i + 1} – Heizung Sanitär Adamek`,
}));

const Beispiele = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container py-16">
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary-dark mb-5">
          Unsere Arbeit
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-dark">Beispiele & Referenzen</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Ausgewählte Beispiele unserer Arbeit – Badezimmersanierungen und Installationsprojekte
          von Heizung Sanitär Adamek.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {beispielBaeder.map((bild) => (
          <div key={bild.id} className="aspect-square rounded-xl overflow-hidden shadow-card border border-border">
            <img
              src={bild.src}
              alt={bild.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">Interesse an einem ähnlichen Projekt?</p>
        <a
          href="/kontakt"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Jetzt Angebot anfragen
        </a>
      </div>
    </main>
    <Footer />
  </div>
);

export default Beispiele;
