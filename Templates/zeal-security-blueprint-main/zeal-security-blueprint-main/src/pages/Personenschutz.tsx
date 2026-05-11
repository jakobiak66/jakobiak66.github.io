import { Link } from "react-router-dom";
import { Shield, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead, createServiceSchema } from "@/components/SEOHead";
import heroImage from "@/assets/personenschutz.jpg";
import personenschutzService from "@/assets/personenschutz-service.jpg";
import personenschutzBodyguards from "@/assets/personenschutz-bodyguards.jpg";
import { useInView } from "@/hooks/use-in-view";

const Personenschutz = () => {
  const leistungenSection = useInView({ threshold: 0.2 });
  const detailSection = useInView({ threshold: 0.2 });
  const qualifikationenSection = useInView({ threshold: 0.2 });
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <SEOHead
        title="Personenschutz Berlin | Bodyguard & Begleitschutz"
        description="Diskreter Personenschutz in Berlin: erfahrene Bodyguards für Privatpersonen, VIPs und Geschäftsführer. Begleitschutz, Reiseschutz, individuelle Bedrohungsanalyse."
        canonicalPath="/leistungen/personenschutz"
        keywords="Personenschutz Berlin, Begleitschutz, VIP-Schutz, Bodyguard Berlin, Leibwächter"
        structuredData={createServiceSchema(
          "Personenschutz",
          "Professioneller Personenschutz für exponierte Personen, Geschäftsführer, Künstler und Delegationen in Berlin",
          "https://zeal-security.de/leistungen/personenschutz"
        )}
      />
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Personenschutz Berlin" className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Shield className="mx-auto mb-6 h-16 w-16 text-primary animate-scale-in" style={{animationDelay: '0.1s', animationFillMode: 'both'}} />
              <h1 className="mb-6 text-4xl font-bold md:text-5xl animate-slide-in-left" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
                Personenschutz in Berlin – diskret, erfahren, professionell
              </h1>
              <p className="mb-8 text-lg text-muted-foreground animate-slide-in-right" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
                Schutz für exponierte Personen, Geschäftsführer:innen, Künstler:innen und Delegationen – mit präventiver Planung, Lagebild, Route & Begleitschutz.
              </p>
              <Button asChild size="lg" className="gradient-primary shadow-elegant animate-slide-in-up hover:scale-105 transition-all" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
                <Link to="/kontakt">Beratung zum Personenschutz</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Leistungsumfang */}
        <section ref={leistungenSection.ref} className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className={`mb-12 text-3xl font-bold transition-all duration-700 ${leistungenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Leistungsumfang</h2>
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                <div className={`lg:w-1/2 transition-all duration-700 ${leistungenSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: leistungenSection.isInView ? '100ms' : '0ms' }}>
                  <img 
                    src={personenschutzService} 
                    alt="Personenschutz Service" 
                    className="h-full w-full rounded-lg object-cover shadow-elegant"
                  />
                </div>
                <div className={`lg:w-1/2 space-y-6 transition-all duration-700 ${leistungenSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: leistungenSection.isInView ? '200ms' : '0ms' }}>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Gefährdungsanalyse & Schutzkonzept</h3>
                    <p className="text-muted-foreground">
                      Individuelle Risikoanalyse und maßgeschneiderte Schutzkonzepte basierend auf Ihrer spezifischen Situation.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Begleitschutz</h3>
                    <p className="text-muted-foreground">
                      Offen oder verdeckt, mit professionellem Fahrdienst, Routenplanung und Rückfallebenen.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Veranstaltungs- & Reisetermine</h3>
                    <p className="text-muted-foreground">
                      Schnittstellenkoordination und professionelle Begleitung bei allen Terminen.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Behördenkooperation</h3>
                    <p className="text-muted-foreground">
                      Zusammenarbeit mit Behörden und Veranstaltern für maximale Sicherheit.
                    </p>
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
                    src={personenschutzBodyguards} 
                    alt="Professioneller Personenschutz in Berlin" 
                    className="rounded-lg shadow-elegant w-full h-auto object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className={`lg:w-1/2 lg:order-1 space-y-6 transition-all duration-700 ${detailSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h2 className="text-3xl font-bold">
                    Sicherheit für Menschen mit Verantwortung
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Wir schützen exponierte Personen, Geschäftsführer:innen, Künstler:innen und Delegationen mit vorausschauender Planung, präzisem Lagebild sowie sicherer Route und Begleitschutz. Unser Anspruch: maximale Sicherheit bei minimaler Sichtbarkeit – zuverlässig, unaufdringlich und stets einen Schritt voraus.
                  </p>
                  <div className="pt-4">
                    <h3 className="text-xl font-semibold mb-3">Beratung zum Personenschutz</h3>
                    <p className="text-muted-foreground">
                      Wir analysieren Ihre Situation, definieren Ziele und entwickeln ein stimmiges Sicherheitskonzept – transparent, verständlich, umsetzbar.
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <Button asChild size="lg" className="gradient-primary shadow-elegant hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                      <Link to="/kontakt">Kostenlose Beratung anfordern</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifikationen */}
        <section ref={qualifikationenSection.ref} className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className={`mb-8 text-3xl font-bold transition-all duration-700 ${qualifikationenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Unsere Qualifikationen</h2>
              <div className={`space-y-4 transition-all duration-700 ${qualifikationenSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: qualifikationenSection.isInView ? '100ms' : '0ms' }}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">IHK-Sachkunde §34a GewO</h3>
                    <p className="text-muted-foreground">Zertifizierte Fachkräfte mit fundierter Ausbildung</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Deeskalationstraining</h3>
                    <p className="text-muted-foreground">Professioneller Umgang in Konfliktsituationen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Erste Hilfe</h3>
                    <p className="text-muted-foreground">Aktuelle Zertifizierung und regelmäßige Auffrischung</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Eigensicherung</h3>
                    <p className="text-muted-foreground">Spezialisiertes Training für Personenschutz-Szenarien</p>
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
                <h2 className="mb-4 text-3xl font-bold">Benötigen Sie professionellen Personenschutz?</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Kontaktieren Sie uns für eine vertrauliche Beratung.
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

export default Personenschutz;
