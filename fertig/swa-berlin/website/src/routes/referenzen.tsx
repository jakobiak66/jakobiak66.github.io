import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";

const referenzen = [
  {
    name: "Energiemanagement Pankstraße",
    img: "/swa-berlin/images/referenz-energiemanagement.png",
    desc: "TGA-Planung und Installation für Energiemanagement-Anlage in Berlin-Mitte.",
  },
  {
    name: "TIB OHANA Hotel",
    img: "/swa-berlin/images/referenz-hotel.jpg",
    desc: "Komplette TGA-Ausstattung für das TIB OHANA Hotel.",
  },
  {
    name: "dopa Firmensitz",
    img: "/swa-berlin/images/referenz-dopa.jpg",
    desc: "Haustechnik für Büro- und Gewerbeobjekt in Berlin.",
  },
  {
    name: "AEMtec GmbH",
    img: "/swa-berlin/images/referenz-aemtec.jpg",
    desc: "TGA-Komplettsanierung für AEMtec – Hightech-Elektronikfertigung.",
  },
  {
    name: "Torhaus Projekt",
    img: "/swa-berlin/images/referenz-torhaus.jpg",
    desc: "Haustechnik und Anlagenbau für Wohn- und Gewerbeprojekt.",
  },
  {
    name: "SWA Referenzprojekt",
    img: "/swa-berlin/images/referenz-swa-projekt.jpg",
    desc: "Typisches TGA-Installationsprojekt der SWA Berlin GmbH.",
  },
  {
    name: "MyJump Trampolin-Park",
    img: "/swa-berlin/images/referenz-myjump.jpg",
    desc: "Lüftungs- und Klimatechnik für Freizeitanlage.",
  },
];

export default function Referenzen() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-24 bg-background">
          <div className="container-page">
            <span className="inline-flex items-center gap-2 bg-brand/10 text-brand text-xs font-semibold px-3 py-1 rounded-full mb-6">
              Unsere Arbeit
            </span>
            <h1 className="text-ink">Referenzen</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Ausgewählte Projekte der SWA Service Wartung Anlagenbau Berlin GmbH –
              von Hoteltechnik bis Industrie.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {referenzen.map((ref) => (
                <div key={ref.name} className="rounded-lg overflow-hidden border border-border shadow-card bg-card">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={ref.img}
                      alt={ref.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-extrabold text-ink">{ref.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{ref.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
