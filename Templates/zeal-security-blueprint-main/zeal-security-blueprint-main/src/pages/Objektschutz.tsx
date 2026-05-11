import { Link } from "react-router-dom";
import { Building2, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead, createServiceSchema } from "@/components/SEOHead";
import heroImage from "@/assets/objektschutz.jpg";
import objektschutzService from "@/assets/objektschutz-service.jpg";
import objektschutzFacility from "@/assets/objektschutz-facility.jpg";
import { useInView } from "@/hooks/use-in-view";

const Objektschutz = () => {
  const leistungenSection = useInView({
    threshold: 0.2
  });
  const detailSection = useInView({
    threshold: 0.2
  });
  const branchenSection = useInView({
    threshold: 0.2
  });
  return <div className="min-h-screen w-full overflow-x-hidden">
      <SEOHead
        title="Objektschutz Berlin | Werkschutz & Bewachung"
        description="Professioneller Objektschutz in Berlin: Werkschutz, Pförtnerdienste und Bewachung von Firmengeländen, Lagerhallen und Bürogebäuden. 24/7 zuverlässig."
        canonicalPath="/leistungen/objektschutz"
        keywords="Objektschutz Berlin, Werkschutz, Revierdienst, Zutrittskontrolle, Gebäudesicherheit"
        structuredData={createServiceSchema(
          "Objektschutz & Werkschutz",
          "Professioneller Objektschutz und Werkschutz für Gebäude, Betriebsstätten und Industrieanlagen in Berlin",
          "https://zeal-security.de/leistungen/objektschutz"
        )}
      />
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Objektschutz Berlin" className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
              <Building2 className="mx-auto mb-6 h-16 w-16 text-primary animate-scale-in" style={{
              animationDelay: '0.1s',
              animationFillMode: 'both'
            }} />
              <h1 className="mb-6 text-4xl font-bold md:text-5xl animate-slide-in-left" style={{
              animationDelay: '0.2s',
              animationFillMode: 'both'
            }}>
                Objektschutz & Werkschutz – Schutz für Gebäude, Flächen & Prozesse
              </h1>
              <p className="mb-8 text-lg text-muted-foreground animate-slide-in-right" style={{
              animationDelay: '0.3s',
              animationFillMode: 'both'
            }}>
                Revier- & Interventionsdienst, Zutrittskontrolle und Werkschutz für Ihre Immobilien und Betriebsstätten in Berlin.
              </p>
              <Button asChild size="lg" className="gradient-primary shadow-elegant animate-slide-in-up hover:scale-105 transition-all" style={{
              animationDelay: '0.4s',
              animationFillMode: 'both'
            }}>
                <Link to="/kontakt">Objektschutz anfragen</Link>
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
                <div className={`lg:w-1/2 transition-all duration-700 ${leistungenSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{
                transitionDelay: leistungenSection.isInView ? '100ms' : '0ms'
              }}>
                  <img src={objektschutzService} alt="Objektschutz Service" className="h-full w-full rounded-lg object-cover shadow-elegant min-h-[500px]" />
                </div>
                <div className={`lg:w-1/2 transition-all duration-700 ${leistungenSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{
                transitionDelay: leistungenSection.isInView ? '200ms' : '0ms'
              }}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Objektschutz</h3>
                      <p className="text-muted-foreground">
                        Wir sichern Ihr Eigentum zuverlässig. Ob Firmengelände, Gebäude oder sensible Bereiche. Unser Personal sorgt dafür, dass Ihr Objekt dauerhaft geschützt bleibt.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Zugangskontrolle</h3>
                      <p className="text-muted-foreground">
                        Unsere Sicherheitsmitarbeiter prüfen Personen und Zugangsberechtigungen sorgfältig. So stellen wir sicher, dass nur autorisierte Personen das Gelände oder Gebäude betreten.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Sicherheitskonzept</h3>
                      <p className="text-muted-foreground">
                        Auf Basis einer gemeinsamen Analyse entwickeln wir ein individuelles Sicherheitskonzept für Ihr Objekt. Dabei berücksichtigen wir Risiken, Besonderheiten vor Ort und Ihre konkreten Anforderungen.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Streifengänge</h3>
                      <p className="text-muted-foreground">
                        Geplante und unregelmäßige Rundgänge ermöglichen eine lückenarme Kontrolle des Areals. Auffälligkeiten werden früh erkannt und mögliche Gefahren können direkt eingedämmt werden.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Alarmintervention</h3>
                      <p className="text-muted-foreground">
                        Im Alarmfall sind wir kurzfristig zur Stelle, prüfen die Situation und leiten die notwendigen Schritte ein. Von der Lageeinschätzung bis zur Koordination weiterer Einsatzkräfte.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Brand- und Gefahrenprävention</h3>
                      <p className="text-muted-foreground">
                        Wir achten auf Brandlasten, potenzielle Gefahrenquellen und Umweltaspekte. Durch geeignete Präventions-maßnahmen unterstützen wir Sie dabei, Schäden zu reduzieren oder ganz zu vermeiden.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">24/7-Verfügbarkeit</h3>
                      <p className="text-muted-foreground">
                        Wir sind für unsere Kunden jederzeit erreichbar. Bei Fragen, Vorfällen oder Anpassungs-wünschen erhalten Sie rund um die Uhr kompetente Unterstützung und klare Auskünfte.
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
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Image */}
                <div className={`lg:w-1/2 lg:order-2 transition-all duration-700 ${detailSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <img src={objektschutzFacility} alt="Professioneller Objektschutz und Werkschutz in Berlin" className="rounded-lg shadow-elegant w-full h-auto object-cover" />
                </div>

                {/* Text Content */}
                <div className={`lg:w-1/2 lg:order-1 space-y-6 transition-all duration-700 ${detailSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h2 className="text-3xl font-bold">
                    Objektschutz & Werkschutz – Sicherheit mit System
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Wir schützen Ihre Gebäude und Betriebsstätten in Berlin durch zuverlässigen Revierdienst, konsequente Zutrittskontrolle und professionellen Werkschutz. Unsere Teams agieren sichtbar, diskret und effizient – für reibungslose Abläufe rund um die Uhr.
                  </p>
                  <p className="text-muted-foreground">
                    Zum Leistungsumfang gehören Kontroll- und Schließrunden, Empfangsdienste sowie die Aufschaltung und Überwachung Ihrer Alarm- und Videosysteme. Im Ereignisfall reagieren wir sofort – ergänzt durch regelmäßige Brandschutzkontrollen.
                  </p>
                  <p className="text-muted-foreground">
                    Alle Maßnahmen werden digital dokumentiert – transparent, nachvollziehbar und jederzeit abrufbar.
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <Button asChild size="lg" className="gradient-primary shadow-elegant hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                      <Link to="/kontakt">Objektschutz anfragen</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Branchenfokus */}
        <section ref={branchenSection.ref} className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className={`mb-8 text-3xl font-bold transition-all duration-700 ${branchenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Branchenfokus Berlin</h2>
              <div className={`space-y-4 transition-all duration-700 ${branchenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
              transitionDelay: branchenSection.isInView ? '100ms' : '0ms'
            }}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Hotellerie</h3>
                    <p className="text-muted-foreground">Diskrete Sicherheit für Gäste und Veranstaltungen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Luxus-Immobilien</h3>
                    <p className="text-muted-foreground">Exklusiver Schutz für hochwertige Wohnobjekte</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Büros & Unternehmen</h3>
                    <p className="text-muted-foreground">Werkschutz und Zutrittskontrolle für Geschäftsräume</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Galerien & Museen</h3>
                    <p className="text-muted-foreground">Spezialisierter Schutz für Kunst und Ausstellungen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Einzelhandel & Shopping-Center</h3>
                    <p className="text-muted-foreground">Ladendetektive und Sicherheitspersonal für den Retail-Bereich</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="shadow-elegant">
              <CardContent className="p-8 text-center md:p-12">
                <h2 className="mb-4 text-3xl font-bold">Benötigen Sie professionellen Objektschutz?</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Kontaktieren Sie uns für eine unverbindliche Beratung.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button asChild size="lg" className="gradient-primary shadow-elegant w-full sm:w-64 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                    <Link to="/kontakt">Jetzt Kontakt aufnehmen</Link>
                  </Button>
                  <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 shadow-elegant w-full sm:w-64 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                    <a href="tel:+4916346299993">
                      <Phone className="mr-2 h-4 w-4" />
                      24/7 Notruf
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Objektschutz;