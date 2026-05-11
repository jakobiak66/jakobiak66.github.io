import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { Building2, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/unternehmen-industrie.jpg";
import serviceImage from "@/assets/unternehmen-service.jpg";
import { useInView } from "@/hooks/use-in-view";

const UnternehmenUndIndustrie = () => {
  const leistungenSection = useInView({ threshold: 0.2 });
  const besonderheitenSection = useInView({ threshold: 0.2 });
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <SEOHead
        title="Werkschutz Berlin | Sicherheit für Unternehmen & Industrie"
        description="Sicherheitsdienst für Unternehmen und Industrie in Berlin: Werkschutz, Empfangsdienste, Pforte und Streifendienste für Firmengelände und Produktionsstätten."
        canonicalPath="/branchen/unternehmen-industrie"
      />
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Unternehmenssicherheit Berlin" className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Building2 className="mx-auto mb-6 h-16 w-16 text-primary animate-scale-in" style={{animationDelay: '0.1s', animationFillMode: 'both'}} />
              <h1 className="mb-6 text-4xl font-bold md:text-5xl animate-slide-in-left" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
                Unternehmen & Industrie
              </h1>
              <p className="mb-8 text-lg text-muted-foreground animate-slide-in-right" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
                Zutritts- & Werkschutz, Empfang, Interventionsdienst und Arbeitssicherheitsschnittstellen.
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
              <h2 className={`mb-12 text-3xl font-bold transition-all duration-700 ${leistungenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Unsere Leistungen für Unternehmen</h2>
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Image */}
                <div className={`lg:w-1/2 transition-all duration-700 ${leistungenSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <img 
                    src={serviceImage} 
                    alt="Unternehmen & Industrie Sicherheitslösungen" 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
                
                {/* Service Cards */}
                <div className="lg:w-1/2 grid gap-6 md:grid-cols-2">
                  <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${leistungenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: leistungenSection.isInView ? '100ms' : '0ms' }}>
                    <CardContent className="pt-6">
                      <h3 className="mb-3 text-xl font-semibold">Werkschutz</h3>
                      <p className="text-muted-foreground">
                        Objektschutz für Produktionsstätten, Lager und Verwaltungsgebäude
                      </p>
                    </CardContent>
                  </Card>
                  <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${leistungenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: leistungenSection.isInView ? '200ms' : '0ms' }}>
                    <CardContent className="pt-6">
                      <h3 className="mb-3 text-xl font-semibold">Zutrittskontrolle</h3>
                      <p className="text-muted-foreground">
                        Empfang, Besuchermanagement und Zugangskontrolle
                      </p>
                    </CardContent>
                  </Card>
                  <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${leistungenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: leistungenSection.isInView ? '300ms' : '0ms' }}>
                    <CardContent className="pt-6">
                      <h3 className="mb-3 text-xl font-semibold">Interventionsdienst</h3>
                      <p className="text-muted-foreground">
                        Schnelle Reaktion bei Alarmen und Sicherheitsvorfällen
                      </p>
                    </CardContent>
                  </Card>
                  <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${leistungenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: leistungenSection.isInView ? '400ms' : '0ms' }}>
                    <CardContent className="pt-6">
                      <h3 className="mb-3 text-xl font-semibold">Schicht- & Kontrollgänge</h3>
                      <p className="text-muted-foreground">
                        Regelmäßige Revierfahrten und Objektkontrollen
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Besonderheiten */}
        <section ref={besonderheitenSection.ref} className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className={`mb-8 text-3xl font-bold transition-all duration-700 ${besonderheitenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Warum Unternehmen uns wählen</h2>
              <div className={`space-y-4 transition-all duration-700 ${besonderheitenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: besonderheitenSection.isInView ? '100ms' : '0ms' }}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Betriebsabläufe verstehen</h3>
                    <p className="text-muted-foreground">Integration in Ihre Prozesse ohne Beeinträchtigung</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Arbeitssicherheits-Schnittstellen</h3>
                    <p className="text-muted-foreground">Kooperation mit Fachkräften für Arbeitssicherheit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Digitale Dokumentation</h3>
                    <p className="text-muted-foreground">Lückenlose Protokollierung aller Vorgänge</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Skalierbare Lösungen</h3>
                    <p className="text-muted-foreground">Anpassung an wachsende oder veränderte Anforderungen</p>
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
                <h2 className="mb-4 text-3xl font-bold">Sicherheit für Ihr Unternehmen?</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Kontaktieren Sie uns für eine Analyse Ihrer Sicherheitsbedürfnisse.
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

export default UnternehmenUndIndustrie;
