import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const galerie2019_21 = [
  { src: "/susanneheitmann/images/01-future-I-2021.jpg", title: "Future I, 2021" },
  { src: "/susanneheitmann/images/02-future-II-2021.jpg", title: "Future II, 2021" },
  { src: "/susanneheitmann/images/03-still-I-2020.jpg", title: "Still I, 2020" },
];

const ausstellungsansichten = [
  { src: "/susanneheitmann/images/IN-SITU-2024.jpg", title: "IN SITU, 2024" },
  { src: "/susanneheitmann/images/Kunsthalle-OS-1.jpg", title: "Kunsthalle Osnabrück" },
  { src: "/susanneheitmann/images/momentaufnahmen1.jpg", title: "Momentaufnahmen" },
];

const Galerie = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container py-16">
      <h1 className="text-4xl font-extrabold text-foreground mb-3">Arbeiten</h1>
      <p className="text-muted-foreground mb-12">Malerei, Siebdruck und Ausstellungsansichten von Susanne Heitmann.</p>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2">Galerie Papier 2019–21</h2>
        <p className="text-muted-foreground text-sm mb-6">Malerei auf Papier</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galerie2019_21.map((work) => (
            <div key={work.title} className="rounded-xl overflow-hidden border border-border bg-card shadow-card">
              <img src={work.src} alt={work.title} loading="lazy" className="w-full h-64 object-cover" />
              <div className="p-3 text-sm font-medium text-foreground">{work.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2">Ausstellungsansichten</h2>
        <p className="text-muted-foreground text-sm mb-6">Dokumentation von Ausstellungen</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ausstellungsansichten.map((work) => (
            <div key={work.title} className="rounded-xl overflow-hidden border border-border bg-card shadow-card">
              <img src={work.src} alt={work.title} loading="lazy" className="w-full h-64 object-cover" />
              <div className="p-3 text-sm font-medium text-foreground">{work.title}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="rounded-2xl bg-muted/50 border border-border p-6 text-center">
        <p className="text-muted-foreground">Weitere Serien auf Anfrage verfügbar.</p>
        <a href="/kontakt" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
          Kontakt aufnehmen →
        </a>
      </div>
    </main>
    <Footer />
  </div>
);

export default Galerie;
