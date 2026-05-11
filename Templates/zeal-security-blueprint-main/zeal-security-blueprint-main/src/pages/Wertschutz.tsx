import { Link } from "react-router-dom";
import { Gem, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead, createServiceSchema } from "@/components/SEOHead";
import heroImage from "@/assets/wertschutz.jpg";
import wertschutzService from "@/assets/wertschutz-service.jpg";
import wertschutzDetail from "@/assets/wertschutz-detail.jpg";
import { useInView } from "@/hooks/use-in-view";

const Wertschutz = () => {
  const leistungenSection = useInView({ threshold: 0.2 });
  const detailSection = useInView({ threshold: 0.2 });
  const anwendungsbereicheSection = useInView({ threshold: 0.2 });
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <SEOHead
        title="Wertschutz Berlin | Geld- & Werttransport"
        description="Sicherer Wert- und Geldtransport in Berlin: zuverlässige Begleitung wertvoller Güter, diskret und nach höchsten Sicherheitsstandards. Jetzt anfragen."
        canonicalPath="/leistungen/wertschutz"
        keywords="Wertschutz Berlin, Kunstschutz, Schmuckschutz, Transportbegleitung, Tresorschutz"
        structuredData={createServiceSchema(
          "Wertschutz",
          "Professioneller Schutz für Kunst, Schmuck und wertvolle Assets in Berlin",
          "https://zeal-security.de/leistungen/wertschutz"
        )}
      />
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Wertschutz Berlin" className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
              <Gem className="mx-auto mb-6 h-16 w-16 text-primary animate-scale-in" style={{animationDelay: '0.1s', animationFillMode: 'both'}} />
              <h1 className="mb-6 text-4xl font-bold md:text-5xl animate-slide-in-left" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
                Wertschutz – Kunst, Schmuck & sensible Assets
              </h1>
              <p className="mb-8 text-lg text-muted-foreground animate-slide-in-right" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
                Diskrete Bewachung und professioneller Schutz für hochwertige Objekte in Berlin.
              </p>
              <Button asChild size="lg" className="gradient-primary shadow-elegant animate-slide-up hover:scale-105 transition-all" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
                <Link to="/kontakt">Vertrauliches Vorgespräch vereinbaren</Link>
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
                    src={wertschutzService} 
                    alt="Wertschutz Service" 
                    className="h-full w-full rounded-lg object-cover shadow-elegant min-h-[400px]"
                  />
                </div>
                <div className={`lg:w-1/2 transition-all duration-700 ${leistungenSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: leistungenSection.isInView ? '200ms' : '0ms' }}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Transportbegleitung</h3>
                      <p className="text-muted-foreground">
                        Professionelle Begleitung von Kunstwerken und Wertgegenständen
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Auf- & Abbau-Bewachung</h3>
                      <p className="text-muted-foreground">
                        Sicherung während sensibler Auf- und Abbauphasen
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Ausstellungsbewachung</h3>
                      <p className="text-muted-foreground">
                        Diskrete Überwachung während Ausstellungen und Vernissagen
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Versicherer-Schnittstelle</h3>
                      <p className="text-muted-foreground">
                        Dokumentation und Kommunikation mit Versicherungen und Kurator:innen
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
                    src={wertschutzDetail} 
                    alt="Professioneller Wertschutz für Kunst und Schmuck in Berlin" 
                    className="rounded-lg shadow-elegant w-full h-auto object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className={`lg:w-1/2 lg:order-1 space-y-6 transition-all duration-700 ${detailSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h2 className="text-3xl font-bold">
                    Wertschutz – Diskretion für das Besondere
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Wir sichern Kunst, Schmuck und andere hochwertige Objekte mit klaren Abläufen und unauffälliger Präsenz. Von der Risikoanalyse bis zum individuellen Schutzkonzept sorgen wir für maximale Sicherheit bei minimaler Sichtbarkeit.
                  </p>
                  <p className="text-muted-foreground">
                    Unsere Teams begleiten Transporte, Auf- und Abbauphasen sowie Ausstellungen professionell, diskret und vorausschauend – inklusive sicherer Übergaben und transparenter Dokumentation.
                  </p>
                  <p className="text-muted-foreground">
                    So bleiben Werte geschützt – zuverlässig, nachvollziehbar und jederzeit unter Kontrolle.
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <Button asChild size="lg" className="gradient-primary shadow-elegant hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                      <Link to="/kontakt">Wertschutz anfragen</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anwendungsbereiche */}
        <section ref={anwendungsbereicheSection.ref} className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className={`mb-8 text-3xl font-bold transition-all duration-700 ${anwendungsbereicheSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Anwendungsbereiche</h2>
              <div className={`space-y-4 transition-all duration-700 ${anwendungsbereicheSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: anwendungsbereicheSection.isInView ? '100ms' : '0ms' }}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Kunst & Antiquitäten</h3>
                    <p className="text-muted-foreground">Gemälde, Skulpturen, historische Objekte</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Schmuck & Edelmetalle</h3>
                    <p className="text-muted-foreground">Hochwertiger Schmuck, Uhren, Edelsteine</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Galerien & Auktionen</h3>
                    <p className="text-muted-foreground">Bewachung von Ausstellungsräumen und Auktionshäusern</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Private Sammlungen</h3>
                    <p className="text-muted-foreground">Diskreter Schutz privater Kunstsammlungen</p>
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
                <h2 className="mb-4 text-3xl font-bold">Vertrauliche Beratung gewünscht?</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Kontaktieren Sie uns für ein diskretes Gespräch über Ihre Anforderungen.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button asChild size="lg" className="gradient-primary shadow-elegant w-full sm:w-64 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                    <Link to="/kontakt">Jetzt Kontakt aufnehmen</Link>
                  </Button>
                  <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 shadow-elegant w-full sm:w-64 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                    <a href="tel:+4916346299993">
                      <Phone className="mr-2 h-4 w-4" />
                      Jetzt anrufen
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

export default Wertschutz;
