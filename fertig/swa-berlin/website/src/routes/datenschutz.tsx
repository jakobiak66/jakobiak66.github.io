import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/datenschutz")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – SWA Service Wartung Anlagenbau Berlin GmbH" },
      {
        name: "description",
        content:
          "Informationen zum Datenschutz bei der SWA Service Wartung Anlagenbau Berlin GmbH in Berlin.",
      },
      { property: "og:title", content: "Datenschutzerklärung – SWA Service Wartung Anlagenbau Berlin GmbH" },
      {
        property: "og:description",
        content: "Informationen zum Datenschutz bei der SWA Service Wartung Anlagenbau Berlin GmbH.",
      },
    ],
  }),
});

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-brand/10 text-brand text-xs font-semibold px-3 py-1 rounded-full mb-6">
            Rechtliches
          </span>
          <h1 className="text-ink mb-8">Datenschutzerklärung</h1>

          <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
            <p>
              Wir erheben nur personenbezogene Daten, die zur Auftragserfüllung erforderlich sind
              (z. B. Name, Anschrift, Telefonnummer, E-Mail-Adresse).
            </p>

            <p>
              Diese Daten werden bis zum Ablauf der gesetzlichen Aufbewahrungsfristen gespeichert
              bzw. archiviert. Mit der Beauftragung unseres Unternehmens erklären Sie grundsätzlich
              Ihr Einverständnis zur Datenarchivierung über die gesetzlichen Fristen hinaus, wenn
              die Aufbewahrung zur technischen Dokumentation des Auftrags sinnvoll ist.
            </p>

            <p>
              Eine Weitergabe Ihrer personenbezogenen Daten an Dritte findet grundsätzlich nicht
              statt. Ausnahmen hiervon gelten nur, soweit dies für die Abwicklung des Auftrags (von
              Auftragsannahme bis Forderungsmanagement) erforderlich ist. Hierzu zählen
              insbesondere von uns beauftragte Dienstleister (z. B. Lieferanten), die ihrerseits
              ebenso zum Datenschutz verpflichtet sind.
            </p>

            <p>
              Wir verwenden auf unserer Website keine Plug-Ins und nutzen keine Tools, um Ihr
              Nutzerverhalten zu analysieren.
            </p>

            <section>
              <h2 className="text-ink mb-3">
                Als von der Datenspeicherung betroffene Person stehen Ihnen folgende Rechte zu:
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Auskunftsrecht</li>
                <li>Berichtigungsrecht</li>
                <li>Löschungsrecht</li>
                <li>Recht auf eingeschränkte Verarbeitung</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>Beschwerderecht</li>
                <li>Widerspruchsrecht</li>
                <li>Recht auf Widerruf von Ihnen erteilter Einwilligungen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-ink mb-3">Für den Datenschutz verantwortlich</h2>
              <p>Ulf Weihmann / Michael Uwe Trapp</p>
              <p className="mt-3">
                Tel.: +49 (0)30 23 593 85 - 80
                <br />
                E-Mail: info@swa.berlin
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
