import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Goldschmiede Cifci" },
      { name: "description", content: "Impressum der Goldschmiede Cifci, Inhaber Serhat Cifci, Waldstraße 25, 76133 Karlsruhe." },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-24">
        <div className="container-x max-w-3xl">
          <h1 className="font-serif text-4xl font-semibold text-foreground mb-10">Impressum</h1>
          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-3">Verantwortlich</h2>
              <p>
                Goldschmiede Cifci<br />
                Inhaber: Serhat Cifci<br />
                Waldstraße 25<br />
                76133 Karlsruhe
              </p>
            </section>
            <section>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-3">Kontakt</h2>
              <p>
                Telefon: 0721 / 2032810<br />
                E-Mail: kontakt@goldschmiede-cifci.de
              </p>
            </section>
            <section>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-3">Berufsbezeichnung</h2>
              <p>
                Goldschmiedemeister (verliehen in Deutschland)<br />
                Ausbildung: Goldschmiedeschule Pforzheim
              </p>
            </section>
            <section>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-3">Haftung für Inhalte</h2>
              <p>
                Als Dienstanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                Nach §§ 8 bis 10 TMG sind wir als Dienstanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen
                zu überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
