import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const Impressum = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container py-16 max-w-3xl">
      <h1 className="text-3xl font-extrabold mb-8">Impressum</h1>
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h2 className="text-xl font-bold text-foreground">Angaben gemäß § 5 TMG</h2>
          <p className="mt-2">Susanne Heitmann<br />Bildende Künstlerin<br />Berlin & Osnabrück</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Kontakt</h2>
          <p className="mt-2">Bitte nutzen Sie das Kontaktformular auf dieser Website.</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Impressum;
