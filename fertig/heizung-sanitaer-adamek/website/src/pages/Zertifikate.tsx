import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const Zertifikate = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container py-16">
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary-dark mb-5">
          Qualitätsnachweise
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-dark">Zertifikate & Mitgliedschaften</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Unsere Qualifikationen und Mitgliedschaften als zugelassener Meisterbetrieb.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-xl border border-border p-6 bg-card shadow-card text-center">
          <img
            src="/heizung-sanitaer-adamek/images/handwerkskarte.jpg"
            alt="Handwerkskarte 2024"
            className="w-full h-48 object-contain mb-4"
            loading="lazy"
          />
          <h3 className="font-bold text-primary-dark">Handwerkskarte 2024</h3>
          <p className="text-sm text-muted-foreground mt-1">Eingetragener Meisterbetrieb</p>
        </div>
        <div className="rounded-xl border border-border p-6 bg-card shadow-card text-center">
          <img
            src="/heizung-sanitaer-adamek/images/partner-buderus.png"
            alt="Buderus Partner"
            className="w-full h-24 object-contain mb-4"
            loading="lazy"
          />
          <h3 className="font-bold text-primary-dark">Buderus Partner</h3>
          <p className="text-sm text-muted-foreground mt-1">Autorisierter Installationspartner</p>
        </div>
        <div className="rounded-xl border border-border p-6 bg-card shadow-card text-center">
          <img
            src="/heizung-sanitaer-adamek/images/partner-vaillant.png"
            alt="Vaillant Partner"
            className="w-full h-24 object-contain mb-4"
            loading="lazy"
          />
          <h3 className="font-bold text-primary-dark">Vaillant Partner</h3>
          <p className="text-sm text-muted-foreground mt-1">Zertifizierter Fachbetrieb</p>
        </div>
        <div className="rounded-xl border border-border p-6 bg-card shadow-card text-center">
          <img
            src="/heizung-sanitaer-adamek/images/partner-broetje.png"
            alt="Brötje Partner"
            className="w-full h-24 object-contain mb-4"
            loading="lazy"
          />
          <h3 className="font-bold text-primary-dark">Brötje Partner</h3>
          <p className="text-sm text-muted-foreground mt-1">Autorisierter Partner</p>
        </div>
        <div className="rounded-xl border border-border p-6 bg-card shadow-card text-center">
          <img
            src="/heizung-sanitaer-adamek/images/partner-junkers.png"
            alt="Junkers Partner"
            className="w-full h-24 object-contain mb-4"
            loading="lazy"
          />
          <h3 className="font-bold text-primary-dark">Junkers Bosch</h3>
          <p className="text-sm text-muted-foreground mt-1">Zertifizierter Servicebetrieb</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Zertifikate;
