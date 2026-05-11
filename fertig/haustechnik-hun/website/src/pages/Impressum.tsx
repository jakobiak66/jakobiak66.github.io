import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const Impressum = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="py-16 lg:py-24">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-extrabold text-primary-dark mb-10">Impressum</h1>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-primary-dark font-bold text-lg mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              <strong className="text-primary-dark">HAUSTECHNIK HUN</strong><br />
              Heizung + Sanitär + Solar<br />
              Laszlo Hun<br />
              Heiligenbreite 22<br />
              88662 Überlingen
            </p>
          </section>

          <section>
            <h2 className="text-primary-dark font-bold text-lg mb-3">Kontakt</h2>
            <p>
              Telefon: <a href="tel:+4975519450480" className="text-primary hover:underline">+49 7551 / 945048</a><br />
              Mobil: <a href="tel:+4901718297911" className="text-primary hover:underline">0171 – 82 97 911</a><br />
              E-Mail: <a href="mailto:info@haustechnik-hun.de" className="text-primary hover:underline">info@haustechnik-hun.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-primary-dark font-bold text-lg mb-3">Umsatzsteuer-Identifikationsnummer</h2>
            <p>
              Gemäß § 27 a Umsatzsteuergesetz: <strong className="text-primary-dark">DE221394906</strong>
            </p>
          </section>

          <section>
            <h2 className="text-primary-dark font-bold text-lg mb-3">Wirtschafts-Identifikationsnummer</h2>
            <p>41725663804</p>
          </section>

          <section>
            <h2 className="text-primary-dark font-bold text-lg mb-3">Aufsichtsbehörde</h2>
            <p>Bundeszentralamt für Steuern, Bonn</p>
          </section>

          <section>
            <h2 className="text-primary-dark font-bold text-lg mb-3">Haftung für Inhalte</h2>
            <p>
              Als Dienstanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              Nach §§ 8 bis 10 TMG sind wir als Dienstanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
            </p>
          </section>

          <section>
            <h2 className="text-primary-dark font-bold text-lg mb-3">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
              zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt
              der Verlinkung nicht erkennbar.
            </p>
          </section>

          <section>
            <h2 className="text-primary-dark font-bold text-lg mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Impressum;
