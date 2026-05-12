import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
const Datenschutz = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container py-16 max-w-3xl">
      <h1 className="text-3xl font-extrabold mb-8">Datenschutzerklärung</h1>
      <div className="space-y-6 text-muted-foreground">
        <div><h2 className="text-xl font-bold text-primary-dark">1. Datenschutz auf einen Blick</h2>
        <p className="mt-2">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.</p></div>
        <div><h2 className="text-xl font-bold text-primary-dark">2. Ihre Rechte</h2>
        <p className="mt-2">Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer gespeicherten Daten.</p></div>
      </div>
    </main>
    <Footer />
  </div>
);
export default Datenschutz;
