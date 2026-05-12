import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
const Impressum = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container py-16 max-w-3xl">
      <h1 className="text-3xl font-extrabold mb-8">Impressum</h1>
      <div className="space-y-6 text-muted-foreground">
        <div><h2 className="text-xl font-bold text-primary-dark">Angaben gemäß § 5 TMG</h2>
        <p className="mt-2">SHK Rathmann<br />Sanitär, Heizung, Klimatechnik<br />Berlin</p></div>
        <div><h2 className="text-xl font-bold text-primary-dark">Kontakt</h2>
        <p className="mt-2">Telefon: Bitte besuchen Sie shk-rathmann.de<br />E-Mail: Bitte über Kontaktformular</p></div>
      </div>
    </main>
    <Footer />
  </div>
);
export default Impressum;
