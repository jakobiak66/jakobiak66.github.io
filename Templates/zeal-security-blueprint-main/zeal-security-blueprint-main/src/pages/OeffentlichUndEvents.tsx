import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { Users, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/oeffentlich-events.jpg";
import serviceImage from "@/assets/oeffentlich-service.jpg";
import { useInView } from "@/hooks/use-in-view";

const OeffentlichUndEvents = () => {
  const leistungenSection = useInView({ threshold: 0.2 });
  const expertiseSection = useInView({ threshold: 0.2 });
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <SEOHead
        title="Sicherheitsdienst öffentliche Veranstaltungen Berlin"
        description="Eventsicherheit für öffentliche Veranstaltungen in Berlin: Stadtfeste, Konzerte, Sport-Events. Crowd-Management, Einlasskontrolle und Awareness."
        canonicalPath="/branchen/oeffentlich-events"
      />
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Event Security" className="h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Users className="mx-auto mb-6 h-16 w-16 text-primary animate-scale-in" style={{animationDelay: '0.1s', animationFillMode: 'both'}} />
              <h1 className="mb-6 text-4xl font-bold md:text-5xl animate-slide-in-left" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
                Öffentliche Einrichtungen & Events
              </h1>
              <p className="mb-8 text-lg text-muted-foreground animate-slide-in-right" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
                Crowd Management, Einlass, Prävention und professionelle Behördenabstimmung.
              </p>
              <Button asChild size="lg" className="gradient-primary shadow-elegant animate-slide-up hover:scale-105 transition-all" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
                <Link to="/kontakt">Branchenlösung anfragen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Leistungen */}
        <section ref={leistungenSection.ref} className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className={`mb-12 text-3xl font-bold transition-all duration-700 ${leistungenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Unsere Leistungen für öffentliche Veranstaltungen</h2>
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Image */}
                <div className={`lg:w-1/2 transition-all duration-700 ${leistungenSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <img 
                    src={serviceImage} 
                    alt="Öffentliche Einrichtungen & Events Sicherheitslösungen" 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
                
                {/* Service Cards */}
                <div className="lg:w-1/2 grid gap-6 md:grid-cols-2">
                  <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${leistungenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: leistungenSection.isInView ? '100ms' : '0ms' }}>
                    <CardContent className="pt-6">
                      <h3 className="mb-3 text-xl font-semibold">Crowd Management</h3>
                      <p className="text-muted-foreground">
                        Professionelle Besucherstromsteuerung bei Großveranstaltungen
                      </p>
                    </CardContent>
                  </Card>
                  <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${leistungenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: leistungenSection.isInView ? '200ms' : '0ms' }}>
                    <CardContent className="pt-6">
                      <h3 className="mb-3 text-xl font-semibold">Einlass & Kontrolle</h3>
                      <p className="text-muted-foreground">
                        Ticket-Kontrolle, Taschenkontrollen und Zugangsmanagement
                      </p>
                    </CardContent>
                  </Card>
                  <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${leistungenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: leistungenSection.isInView ? '300ms' : '0ms' }}>
                    <CardContent className="pt-6">
                      <h3 className="mb-3 text-xl font-semibold">Prävention & Deeskalation</h3>
                      <p className="text-muted-foreground">
                        Frühzeitiges Erkennen und Entschärfen von Konfliktsituationen
                      </p>
                    </CardContent>
                  </Card>
                  <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${leistungenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: leistungenSection.isInView ? '400ms' : '0ms' }}>
                    <CardContent className="pt-6">
                      <h3 className="mb-3 text-xl font-semibold">Behördenabstimmung</h3>
                      <p className="text-muted-foreground">
                        Kooperation mit Polizei, Feuerwehr und Ordnungsämtern
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Besonderheiten */}
        <section ref={expertiseSection.ref} className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className={`mb-8 text-3xl font-bold transition-all duration-700 ${expertiseSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Unsere Expertise bei öffentlichen Events</h2>
              <div className={`space-y-4 transition-all duration-700 ${expertiseSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: expertiseSection.isInView ? '100ms' : '0ms' }}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Versammlungsstättenverordnung</h3>
                    <p className="text-muted-foreground">Kenntnisse der rechtlichen Rahmenbedingungen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Notfallkonzepte</h3>
                    <p className="text-muted-foreground">Klar definierte Rettungswege und Notfallketten</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Funkdisziplin</h3>
                    <p className="text-muted-foreground">Professionelle Kommunikation im Team und mit Behörden</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Berliner Event-Erfahrung</h3>
                    <p className="text-muted-foreground">Kenntnisse der lokalen Gegebenheiten und Anforderungen</p>
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
                <h2 className="mb-4 text-3xl font-bold">Planen Sie eine öffentliche Veranstaltung?</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Kontaktieren Sie uns für ein professionelles Sicherheitskonzept.
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

export default OeffentlichUndEvents;
