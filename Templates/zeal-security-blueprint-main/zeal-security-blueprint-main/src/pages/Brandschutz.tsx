import { Link } from "react-router-dom";
import { Flame, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead, createServiceSchema } from "@/components/SEOHead";
import heroImage from "@/assets/brandschutz-hero.jpg";
import brandschutzService from "@/assets/brandschutz-inspection-new.jpg";
import brandschutzDetail from "@/assets/brandschutz-detector.jpg";
import { useInView } from "@/hooks/use-in-view";

const Brandschutz = () => {
  const leistungenSection = useInView({ threshold: 0.2 });
  const detailSection = useInView({ threshold: 0.2 });
  const besonderheitenSection = useInView({ threshold: 0.2 });
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <SEOHead
        title="Brandschutz Berlin | Brandwache & Brandschutzhelfer"
        description="Brandschutzdienste in Berlin: Brandwachen, Brandschutzhelfer und vorbeugender Brandschutz für Baustellen, Veranstaltungen und Industriebetriebe."
        canonicalPath="/leistungen/brandschutz"
        keywords="Brandschutz Berlin, Brandwache, Evakuierungshelfer, Brandschutzkonzept"
        structuredData={createServiceSchema(
          "Brandschutz & Brandwache",
          "Professioneller Brandschutz und Brandwache für Veranstaltungen und Baustellen in Berlin",
          "https://zeal-security.de/leistungen/brandschutz"
        )}
      />
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Brandschutz Berlin" className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
              <Flame className="mx-auto mb-6 h-16 w-16 text-primary animate-scale-in" style={{animationDelay: '0.1s', animationFillMode: 'both'}} />
              <h1 className="mb-6 text-4xl font-bold md:text-5xl animate-slide-in-left" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
                Brandschutz – Sicherheit durch Vorsorge und Expertise
              </h1>
              <p className="mb-8 text-lg text-muted-foreground animate-slide-in-right" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
                Umfassende Brandschutzlösungen für maximale Sicherheit in Ihrem Unternehmen.
              </p>
              <Button asChild size="lg" className="gradient-primary shadow-elegant animate-slide-in-up hover:scale-105 transition-all" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
                <Link to="/kontakt">Brandschutzkonzept anfordern</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Leistungsumfang */}
        <section ref={leistungenSection.ref} className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className={`mb-12 text-3xl font-bold transition-all duration-700 ${leistungenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Leistungsumfang</h2>
              <div className="flex flex-col gap-8 lg:flex-row">
                <div className={`lg:w-1/2 transition-all duration-700 ${leistungenSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: leistungenSection.isInView ? '100ms' : '0ms' }}>
                  <img 
                    src={brandschutzService} 
                    alt="Brandschutz Equipment" 
                    className="h-full w-full rounded-lg object-cover shadow-elegant min-h-[400px]"
                  />
                </div>
                <div className={`lg:w-1/2 transition-all duration-700 ${leistungenSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: leistungenSection.isInView ? '200ms' : '0ms' }}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Brandkonzept & Prävention</h3>
                      <p className="text-muted-foreground">
                        Entwicklung individueller Brandschutzkonzepte mit vorbeugenden Maßnahmen und optimierten Evakuierungswegen
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Notfall- und Evakuierungspläne</h3>
                      <p className="text-muted-foreground">
                        Strukturierte Notfallpläne mit klaren Handlungsanweisungen für alle Mitarbeiter und Besucher
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Schulungen & Unterweisungen</h3>
                      <p className="text-muted-foreground">
                        Praxisnahe Schulungen vom Umgang mit Feuerlöschern bis zum richtigen Verhalten bei Alarm
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Regelmäßige Prüfungen & Instandhaltung</h3>
                      <p className="text-muted-foreground">
                        Turnusmäßige Kontrolle von Feuerlöschern, Brandmeldeanlagen und Schutzeinrichtungen
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Brandschutzbeauftragter</h3>
                      <p className="text-muted-foreground">
                        Qualifizierte Brandschutzbeauftragte als zentrale Ansprechpartner für kontinuierliche Sicherheit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detail Section */}
        <section ref={detailSection.ref} className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col gap-8 lg:flex-row-reverse">
                <div className={`lg:w-1/2 transition-all duration-700 ${detailSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: detailSection.isInView ? '100ms' : '0ms' }}>
                  <img 
                    src={brandschutzDetail} 
                    alt="Brandschutz Rauchmelder" 
                    className="h-full w-full rounded-lg object-cover shadow-elegant min-h-[400px]"
                  />
                </div>
                <div className={`lg:w-1/2 transition-all duration-700 ${detailSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: detailSection.isInView ? '200ms' : '0ms' }}>
                  <h2 className="mb-6 text-3xl font-bold">Vorbeugender Brandschutz für Ihr Unternehmen</h2>
                  <p className="mb-4 text-muted-foreground">
                    Wir entwickeln individuelle Brandschutzkonzepte, die sowohl vorbeugende Maßnahmen als auch das richtige Vorgehen im Ernstfall berücksichtigen. So werden Evakuierungswege, Meldeketten und Löschmaßnahmen optimal abgestimmt.
                  </p>
                  <p className="mb-6 text-muted-foreground">
                    Unsere strukturiert aufgebauten Notfallpläne legen fest, wer was wann zu tun hat. Mitarbeiter und Besucher erhalten klare Handlungsanweisungen, um im Brandfall geordnet und sicher das Gebäude verlassen zu können.
                  </p>
                  <p className="text-muted-foreground">
                    Durch regelmäßige Prüfungen und Instandhaltung bleibt die Funktionstüchtigkeit der Technik erhalten und gesetzliche Vorgaben werden erfüllt. Auf Wunsch stellen wir einen qualifizierten Brandschutzbeauftragten, der als zentraler Ansprechpartner fungiert und den vorbeugenden Brandschutz kontinuierlich weiterentwickelt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Besonderheiten */}
        <section ref={besonderheitenSection.ref} className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className={`mb-12 text-center text-3xl font-bold transition-all duration-700 ${besonderheitenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Unsere Brandschutz-Expertise
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Ganzheitliche Konzepte",
                    description: "Von der Prävention bis zur Notfallplanung – alles aus einer Hand"
                  },
                  {
                    title: "Qualifizierte Experten",
                    description: "Zertifizierte Brandschutzbeauftragte mit langjähriger Erfahrung"
                  },
                  {
                    title: "Praxisnahe Schulungen",
                    description: "Hands-on Training für schnelles und besonnenes Handeln im Ernstfall"
                  },
                  {
                    title: "Rechtssichere Dokumentation",
                    description: "Erfüllung aller gesetzlichen Vorgaben und Nachweispflichten"
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex gap-4 transition-all duration-700 ${besonderheitenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: besonderheitenSection.isInView ? `${(index + 1) * 100}ms` : '0ms' }}
                  >
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="mx-auto max-w-4xl overflow-hidden shadow-elegant">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <h2 className="mb-4 text-3xl font-bold">Schützen Sie Ihr Unternehmen professionell</h2>
                  <p className="mb-8 text-lg text-muted-foreground">
                    Kontaktieren Sie uns für ein individuelles Brandschutzkonzept, das genau zu Ihren Anforderungen passt.
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button asChild size="lg" className="gradient-primary shadow-elegant">
                      <Link to="/kontakt">Kontakt aufnehmen</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="tel:+493012345678">
                        <Phone className="mr-2 h-4 w-4" />
                        Jetzt anrufen
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Brandschutz;
