import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const Datenschutz = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container py-16 max-w-3xl">
      <h1 className="text-3xl font-extrabold text-primary-dark mb-8">Datenschutzerklärung</h1>
      <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
        <div>
          <h2 className="text-xl font-bold text-primary-dark">1. Datenschutz auf einen Blick</h2>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary-dark">2. Datenerfassung auf dieser Website</h2>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary-dark">3. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten sowie ein Recht auf Berichtigung oder Löschung dieser Daten.</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Datenschutz;
