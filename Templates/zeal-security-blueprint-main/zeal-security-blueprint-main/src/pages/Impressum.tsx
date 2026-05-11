import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import SkipLink from "@/components/SkipLink";

const Impressum = () => {
  return (
    <div className="min-h-screen w-full">
      <SEOHead title="Impressum | Zeal Security & Service GmbH" description="Impressum der Zeal Security & Service GmbH Berlin. Angaben gemäß § 5 TMG." canonicalPath="/impressum" />
      <SkipLink />
      <Navigation />
      
      <main id="main-content" role="main">
        <section className="gradient-subtle py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-8 text-4xl font-bold">Impressum</h1>
              
              <div className="space-y-8">
                <section>
                  <h2 className="mb-3 text-2xl font-semibold">Angaben gemäß § 5 TMG</h2>
                  <address className="text-muted-foreground not-italic">
                    <strong>Zeal Security & Service GmbH</strong><br />
                    Trautenaustraße 23<br />
                    10717 Berlin
                  </address>
                </section>

                <section>
                  <h2 className="mb-3 text-2xl font-semibold">Registereintrag</h2>
                  <p className="text-muted-foreground">
                    Handelsregister: 253445 B<br />
                    Registergericht: Amtsgericht Charlottenburg
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-2xl font-semibold">Vertreten durch</h2>
                  <p className="text-muted-foreground">
                    Anja Krause
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-2xl font-semibold">Kontakt</h2>
                  <p className="text-muted-foreground">
                    Telefon: 0163 462 9993<br />
                    E-Mail: <a href="mailto:office@zealsecurity.de" className="text-primary hover:underline">office@zealsecurity.de</a>
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-2xl font-semibold">Aufsichtsbehörde</h2>
                  <p className="text-muted-foreground">
                    Bezirksamt Charlottenburg-Wilmersdorf von Berlin<br />
                    Abteilung Ordnung, Umwelt, Straßen- und Grünflächen<br />
                    Ordnungsamt<br /><br />
                    Otto-Suhr-Allee 100<br />
                    10585 Berlin<br /><br />
                    <a 
                      href="http://www.berlin.de/ba-charlottenburg-wilmersdorf/politik/bezirksamt/abteilung-ordnung-umwelt-strassen-und-gruenflaechen/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline break-all"
                    >
                      www.berlin.de/ba-charlottenburg-wilmersdorf
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-2xl font-semibold">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                  <p className="text-muted-foreground">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;
