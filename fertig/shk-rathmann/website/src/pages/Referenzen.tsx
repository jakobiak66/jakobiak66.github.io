import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const heizungRefs = [
  { src: "/shk-rathmann/images/ref-heizung-1.png", alt: "Heizungsanlage Referenz 1" },
  { src: "/shk-rathmann/images/ref-heizung-2.png", alt: "Heizungsanlage Referenz 2" },
  { src: "/shk-rathmann/images/ref-heizung-3.png", alt: "Heizungsanlage Referenz 3" },
];
const sanitaerRefs = [
  { src: "/shk-rathmann/images/ref-sanitaer-1.jpg", alt: "Sanitär Referenz 1" },
  { src: "/shk-rathmann/images/ref-sanitaer-2.jpg", alt: "Sanitär Referenz 2" },
  { src: "/shk-rathmann/images/ref-sanitaer-3.jpg", alt: "Sanitär Referenz 3" },
];

const Referenzen = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container py-16">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-dark">Referenzen</h1>
        <p className="mt-3 text-muted-foreground">Ausgewählte Projekte von SHK Rathmann Berlin.</p>
      </div>
      <section className="mb-12">
        <h2 className="text-xl font-bold text-primary-dark mb-6">Heizung</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {heizungRefs.map((r) => (
            <div key={r.alt} className="rounded-xl overflow-hidden border border-border shadow-card bg-card aspect-square">
              <img src={r.src} alt={r.alt} loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-bold text-primary-dark mb-6">Sanitär</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {sanitaerRefs.map((r) => (
            <div key={r.alt} className="rounded-xl overflow-hidden border border-border shadow-card bg-card aspect-square">
              <img src={r.src} alt={r.alt} loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
export default Referenzen;
