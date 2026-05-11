import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/impressum")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Impressum – SWA Service Wartung Anlagenbau Berlin GmbH" },
      {
        name: "description",
        content:
          "Impressum und Anbieterkennzeichnung der SWA Service Wartung Anlagenbau Berlin GmbH, Volmerstraße 10, 12489 Berlin.",
      },
      { property: "og:title", content: "Impressum – SWA Berlin GmbH" },
      {
        property: "og:description",
        content: "Impressum der SWA Berlin GmbH.",
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
          <h1 className="text-ink mb-8">Impressum</h1>

          <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-ink mb-3">Verantwortlich</h2>
              <p>
                SWA Service Wartung Anlagenbau Berlin GmbH
                <br />
                Volmerstraße 10
                <br />
                12489 Berlin
              </p>
            </section>

            <section>
              <h2 className="text-ink mb-3">Geschäftsführer</h2>
              <p>Ulf Weihmann · Michael Uwe Trapp</p>
            </section>

            <section>
              <h2 className="text-ink mb-3">Kontakt</h2>
              <p>
                Telefon: +49 (0)30 23 593 85 - 80
                <br />
                E-Mail: info@swa.berlin
              </p>
            </section>

            <section>
              <h2 className="text-ink mb-3">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister
                <br />
                Registergericht: Berlin Charlottenburg
                <br />
                Registernummer: HRB 215691
              </p>
            </section>

            <section>
              <h2 className="text-ink mb-3">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                <br />
                DE32 8976 933
              </p>
            </section>

            <section>
              <h2 className="text-ink mb-3">Steuernummer</h2>
              <p>37 / 553 / 00011</p>
            </section>

            <section>
              <h2 className="text-ink mb-3">Haftung für Inhalte</h2>
              <p>
                Als Dienstanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
