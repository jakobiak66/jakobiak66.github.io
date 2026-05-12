import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const Impressum = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container py-16 max-w-3xl">
      <h1 className="text-3xl font-extrabold text-primary-dark mb-8">Impressum</h1>
      <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
        <div>
          <h2 className="text-xl font-bold text-primary-dark">Angaben gemäß § 5 TMG</h2>
          <p>Heizung Sanitär Adamek<br />
          Inhaberin: Frau Adamek<br />
          Berlin / Frankfurt (Oder)</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary-dark">Kontakt</h2>
          <p>Telefon: Bitte Website besuchen: heizung-sanitaer-adamek.de<br />
          E-Mail: Bitte über Kontaktformular</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary-dark">Berufsbezeichnung</h2>
          <p>Staatlich anerkannter Meisterbetrieb für Sanitär, Heizung und Klimatechnik</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary-dark">Haftungsausschluss</h2>
          <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Impressum;
