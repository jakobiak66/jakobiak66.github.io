import { Link } from "react-router-dom";
import { Shield, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead, createServiceSchema } from "@/components/SEOHead";
import heroImage from "@/assets/veranstaltungsschutz.jpg";
import veranstaltungsschutzService from "@/assets/veranstaltungsschutz-crowd.jpg";
import veranstaltungsschutzDetail from "@/assets/veranstaltungsschutz-detail.jpg";
import { useInView } from "@/hooks/use-in-view";

const Veranstaltungsschutz = () => {
  const leistungenSection = useInView({ threshold: 0.2 });
  const detailSection = useInView({ threshold: 0.2 });
  const useCasesSection = useInView({ threshold: 0.2 });
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <SEOHead
        title="Veranstaltungsschutz Berlin | Eventsicherheit"
        description="Sicherheitsdienst für Events in Berlin: Einlasskontrolle, Crowd-Management und Awareness-Teams für Konzerte, Messen, Galas und Privatveranstaltungen."
        canonicalPath="/leistungen/veranstaltungsschutz"
        keywords="Veranstaltungsschutz Berlin, Event Security, Einlasskontrolle, Crowd Management"
        structuredData={createServiceSchema(
          "Veranstaltungsschutz",
          "Professioneller Veranstaltungsschutz für Events, Galas und Konferenzen in Berlin",
          "https://zeal-security.de/leistungen/veranstaltungsschutz"
        )}
      />
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Veranstaltungsschutz Berlin" className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
              <Shield className="mx-auto mb-6 h-16 w-16 text-primary animate-scale-in" style={{animationDelay: '0.1s', animationFillMode: 'both'}} />
              <h1 className="mb-6 text-4xl font-bold md:text-5xl animate-slide-in-left" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
                Veranstaltungssicherheit – von Gala bis Konferenz
              </h1>
              <p className="mb-8 text-lg text-muted-foreground animate-slide-in-right" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
                Professionelle Sicherheitskonzepte für Events jeder Größenordnung in Berlin.
              </p>
              <Button asChild size="lg" className="gradient-primary shadow-elegant animate-slide-up hover:scale-105 transition-all" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
                <Link to="/kontakt">Sicherheitskonzept für Ihr Event</Link>
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
                    src={veranstaltungsschutzService} 
                    alt="Veranstaltungsschutz Service" 
                    className="h-full w-full rounded-lg object-cover shadow-elegant min-h-[400px]"
                  />
                </div>
                <div className={`lg:w-1/2 transition-all duration-700 ${leistungenSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: leistungenSection.isInView ? '200ms' : '0ms' }}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Einlasskontrolle</h3>
                      <p className="text-muted-foreground">
                        Unsere Einlassdienste stellen sicher, dass nur befugte Personen Zugang erhalten. Geschulte Sicherheitsmitarbeiter prüfen Einlassberechtigungen, kontrollieren Zugänge und schützen so Ihr Event sowie Ihre Einrichtungen vor Störungen.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Konfliktlösung</h3>
                      <p className="text-muted-foreground">
                        Bei Spannungen oder Auseinandersetzungen greifen wir gezielt und deeskalierend ein. Unsere Mitarbeiter handeln besonnen, vermitteln zwischen den Parteien und stellen schnell wieder eine ruhige und sichere Situation her.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Ordnerdienst</h3>
                      <p className="text-muted-foreground">
                        Unsere Ordner begleiten Ihre Veranstaltung vom Einlass bis zum Ende. Sie leiten Besucherströme, unterstützen bei der Orientierung und tragen dazu bei, dass der Ablauf strukturiert, sicher und planmäßig verläuft.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Hostessendienst</h3>
                      <p className="text-muted-foreground">
                        Unsere Hostessen empfangen Ihre Gäste professionell und zuvorkommend, übernehmen Empfangs- und Informationsaufgaben und stehen als Ansprechpartner vor Ort zur Verfügung. So sorgen sie für eine angenehme und serviceorientierte Betreuung.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Sicherheitsplanung</h3>
                      <p className="text-muted-foreground">
                        Vorab entwickeln wir ein durchdachtes Sicherheitskonzept für Ihre Veranstaltung. Wir bewerten Risiken, definieren Abläufe und erstellen individuelle Maßnahmenpläne, damit alle Beteiligten optimal geschützt sind.
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
                  <img 
                    src={veranstaltungsschutzDetail} 
                    alt="Professionelle Veranstaltungssicherheit in Berlin" 
                    className="rounded-lg shadow-elegant w-full h-auto object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className={`lg:w-1/2 lg:order-1 space-y-6 transition-all duration-700 ${detailSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h2 className="text-3xl font-bold">
                    Veranstaltungssicherheit – Sicherheit trifft Service
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Ob Gala, Konzert oder Konferenz: Wir entwickeln und realisieren passgenaue Sicherheitskonzepte für Events jeder Größe. Unsere Teams sorgen für geordnete Abläufe, reibungslose Kommunikation und ein sicheres Umfeld – sichtbar serviceorientiert, im Hintergrund entschlossen.
                  </p>
                  <p className="text-muted-foreground">
                    Vom Einlass über VIP-Betreuung bis zum Crowd Management sichern wir Gäste, Künstler:innen und sensible Bereiche. Gesteuert wird alles zentral – mit klarer Koordination, abgestimmten Abläufen und transparenter Kommunikation.
                  </p>
                  <p className="text-muted-foreground">
                    Ergebnis: maximale Sicherheit, minimale Störung – und ein Event, das in bester Erinnerung bleibt.
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <Button asChild size="lg" className="gradient-primary shadow-elegant hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                      <Link to="/kontakt">Sicherheitskonzept anfragen</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Berliner Use Cases */}
        <section ref={useCasesSection.ref} className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className={`mb-8 text-3xl font-bold transition-all duration-700 ${useCasesSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Berliner Use Cases</h2>
              <div className={`space-y-4 transition-all duration-700 ${useCasesSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: useCasesSection.isInView ? '100ms' : '0ms' }}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Hotels & Luxus-Locations</h3>
                    <p className="text-muted-foreground">Galas, Hochzeiten, Corporate Events mit diskreter VIP-Betreuung</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Messe & Kongresse</h3>
                    <p className="text-muted-foreground">Einlass-Management, Badge-Kontrolle, Aussteller-Security</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Kultur-Events</h3>
                    <p className="text-muted-foreground">Vernissagen, Konzerte, Theateraufführungen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Pop-Up Formate</h3>
                    <p className="text-muted-foreground">Flexible Sicherheitskonzepte für temporäre Events</p>
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
                <h2 className="mb-4 text-3xl font-bold">Planen Sie ein Event?</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Kontaktieren Sie uns für ein maßgeschneidertes Sicherheitskonzept.
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
    </div>
  );
};

export default Veranstaltungsschutz;
