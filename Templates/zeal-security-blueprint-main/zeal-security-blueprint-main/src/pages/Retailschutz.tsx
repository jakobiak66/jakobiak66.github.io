import { Link } from "react-router-dom";
import { ShoppingCart, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead, createServiceSchema } from "@/components/SEOHead";
import heroImage from "@/assets/retail-security-gate-banner.jpg";
import retailService from "@/assets/retail-security-service.jpg";
import retailDetail from "@/assets/retail-surveillance-tracking.jpg";
import { useInView } from "@/hooks/use-in-view";

const Retailschutz = () => {
  const leistungenSection = useInView({
    threshold: 0.2
  });
  const detailSection = useInView({
    threshold: 0.2
  });
  const vorteileSection = useInView({
    threshold: 0.2
  });

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <SEOHead
        title="Retailschutz Berlin | Ladendetektive & Kaufhausdetektive"
        description="Professioneller Retailschutz in Berlin: Ladendetektive, Kaufhausdetektive und uniformierte Sicherheitskräfte gegen Diebstahl und Inventurverluste."
        canonicalPath="/leistungen/retailschutz"
        keywords="Retailschutz Berlin, Ladendetektiv, Warenhausschutz, Einzelhandel Sicherheit"
        structuredData={createServiceSchema(
          "Retailschutz",
          "Professioneller Schutz für Einzelhandel und Shopping-Center in Berlin",
          "https://zeal-security.de/leistungen/retailschutz"
        )}
      />
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Retailschutz Berlin" className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <ShoppingCart className="mx-auto mb-6 h-16 w-16 text-primary animate-scale-in" style={{
                animationDelay: '0.1s',
                animationFillMode: 'both'
              }} />
              <h1 className="mb-6 text-4xl font-bold md:text-5xl animate-slide-in-left" style={{
                animationDelay: '0.2s',
                animationFillMode: 'both'
              }}>
                Retailschutz – Sicherheit für Ihren Einzelhandel
              </h1>
              <p className="mb-8 text-lg text-muted-foreground animate-slide-in-right" style={{
                animationDelay: '0.3s',
                animationFillMode: 'both'
              }}>
                Professionelle Sicherheitslösungen für Einzelhandel und Shopping-Center in Berlin – Diebstahlprävention, Kundenbetreuung und Kassenüberwachung.
              </p>
              <Button asChild size="lg" className="gradient-primary shadow-elegant animate-slide-in-up hover:scale-105 transition-all" style={{
                animationDelay: '0.4s',
                animationFillMode: 'both'
              }}>
                <Link to="/kontakt">Retailschutz anfragen</Link>
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
                  <img src={retailService} alt="Retailschutz Service" className="h-full w-full rounded-lg object-cover shadow-elegant min-h-[500px]" />
                </div>
                <div className={`lg:w-1/2 transition-all duration-700 ${leistungenSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{
                  transitionDelay: leistungenSection.isInView ? '200ms' : '0ms'
                }}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Diebstahlprävention</h3>
                      <p className="text-muted-foreground">
                        Durch aktive Überwachung und Strategien minimieren wir Ladendiebstahl, schützen Ihre Waren und optimieren das Einkaufserlebnis für Kunden.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Kundenbetreuung</h3>
                      <p className="text-muted-foreground">
                        Unsere Sicherheitskräfte schaffen eine freundliche Atmosphäre, die Kunden Vertrauen gibt und Diebstahlabschreckung fördert.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Verhaltensanalyse</h3>
                      <p className="text-muted-foreground">
                        Unsere Sicherheitskräfte erkennen verdächtige Verhaltensmuster und intervenieren diskret, um potenzielle Diebstähle zu verhindern.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Einkaufserlebnis optimieren</h3>
                      <p className="text-muted-foreground">
                        Unsere Sicherheitsstrategien gewährleisten eine sichere und angenehme Umgebung, die das Einkaufserlebnis positiv beeinflusst.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Kundenvertrauen stärken</h3>
                      <p className="text-muted-foreground">
                        Durch sichtbare Präsenz und effektiven Schutzmaßnahmen gewinnen wir das Vertrauen Ihrer Kunden und fördern die Loyalität.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Kassenüberwachung</h3>
                      <p className="text-muted-foreground">
                        Wir überwachen Kassenbereiche, um Manipulationen und Betrug zu verhindern, und schützen so Ihre finanziellen Interessen.
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
                  <img src={retailDetail} alt="Professioneller Retailschutz in Berlin" className="rounded-lg shadow-elegant w-full h-auto object-cover" />
                </div>

                {/* Text Content */}
                <div className={`lg:w-1/2 lg:order-1 space-y-6 transition-all duration-700 ${detailSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h2 className="text-3xl font-bold">
                    Retailschutz – Professionelle Sicherheit für den Einzelhandel
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Wir schützen Ihren Einzelhandel in Berlin durch professionelle Ladendetektive, diskrete Überwachung und präventive Sicherheitsmaßnahmen. Unsere Teams sorgen für ein sicheres Einkaufserlebnis und minimieren Warenverluste durch Diebstahl.
                  </p>
                  <p className="text-muted-foreground">
                    Zum Leistungsumfang gehören aktive Überwachung der Verkaufsflächen, Verhaltensanalyse verdächtiger Personen, Kassenüberwachung sowie freundliche Kundenbetreuung. Im Verdachtsfall handeln wir professionell und diskret – immer im Rahmen der gesetzlichen Vorgaben.
                  </p>
                  <p className="text-muted-foreground">
                    Alle Vorfälle werden sorgfältig dokumentiert und können bei Bedarf den Behörden übergeben werden. So schützen wir Ihre Waren, Ihr Personal und Ihre Kunden.
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <Button asChild size="lg" className="gradient-primary shadow-elegant hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                      <Link to="/kontakt">Retailschutz anfragen</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vorteile für Ihren Einzelhandel */}
        <section ref={vorteileSection.ref} className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className={`mb-8 text-3xl font-bold transition-all duration-700 ${vorteileSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Vorteile für Ihren Einzelhandel</h2>
              <div className={`space-y-4 transition-all duration-700 ${vorteileSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
                transitionDelay: vorteileSection.isInView ? '100ms' : '0ms'
              }}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Minimierung von Warenverlusten</h3>
                    <p className="text-muted-foreground">Durch professionelle Überwachung reduzieren wir Inventurschwund und Diebstahl signifikant</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Verbessertes Einkaufserlebnis</h3>
                    <p className="text-muted-foreground">Kunden fühlen sich sicher und willkommen – das steigert Zufriedenheit und Loyalität</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Entlastung Ihres Personals</h3>
                    <p className="text-muted-foreground">Ihre Mitarbeiter können sich auf den Verkauf konzentrieren, während wir für Sicherheit sorgen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Professionelle Vorfallsbearbeitung</h3>
                    <p className="text-muted-foreground">Im Verdachtsfall handeln wir rechtskonform und dokumentieren alle Vorgänge lückenlos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Flexible Einsatzplanung</h3>
                    <p className="text-muted-foreground">Wir passen unsere Präsenz an Ihre Stoßzeiten und besonderen Anforderungen an</p>
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
                <h2 className="mb-4 text-3xl font-bold">Benötigen Sie professionellen Retailschutz?</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Kontaktieren Sie uns für eine unverbindliche Beratung zu Ihren Sicherheitsbedürfnissen im Einzelhandel.
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

export default Retailschutz;
