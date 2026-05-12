import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const Datenschutz = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container py-16 max-w-3xl">
      <h1 className="text-3xl font-extrabold mb-8">Datenschutzerklärung</h1>
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h2 className="text-xl font-bold text-foreground">1. Datenschutz auf einen Blick</h2>
          <p className="mt-2">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">2. Ihre Rechte</h2>
          <p className="mt-2">Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten sowie ein Recht auf Berichtigung oder Löschung dieser Daten.</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Datenschutz;
