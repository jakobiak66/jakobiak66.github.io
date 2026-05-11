import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/impressum")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Impressum – Dipl.-Ing. Alexander Christ GmbH" },
      {
        name: "description",
        content:
          "Impressum und Anbieterkennzeichnung der Dipl.-Ing. Alexander Christ GmbH in Berlin.",
      },
      { property: "og:title", content: "Impressum – Dipl.-Ing. Alexander Christ GmbH" },
      {
        property: "og:description",
        content: "Impressum der Dipl.-Ing. Alexander Christ GmbH, Tegeler Straße 42-43, 13353 Berlin.",
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
                Dipl.-Ing. Alexander Christ GmbH
                <br />
                Tegeler Straße 42-43
                <br />
                13353 Berlin
              </p>
            </section>

            <section>
              <h2 className="text-ink mb-3">Geschäftsführer</h2>
              <p>Alexander Christ, Dipl.-Ing. (FH)</p>
            </section>

            <section>
              <h2 className="text-ink mb-3">Kontakt</h2>
              <p>
                Telefon: 030 - 453 01 626
                <br />
                Telefax: 030 - 453 07 156
                <br />
                Notdienst: 030 - 453 10 136
                <br />
                E-Mail: info@christ-berlin.de
              </p>
            </section>

            <section>
              <h2 className="text-ink mb-3">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister
                <br />
                Registergericht: Berlin Charlottenburg
                <br />
                Registernummer: HRB 143702 B
              </p>
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
