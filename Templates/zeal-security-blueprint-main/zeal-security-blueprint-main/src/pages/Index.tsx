import { Link } from "react-router-dom";
import { Shield, Building2, Users, Gem, Flame, Cctv, Phone, CheckCircle2, Award, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import SkipLink from "@/components/SkipLink";
import { useInView } from "@/hooks/use-in-view";
import { SEOHead, createFAQSchema } from "@/components/SEOHead";
import heroImage from "@/assets/hero-security.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import whyZealImage from "@/assets/why-zeal-tech.jpg";
import adlonImage from "@/assets/adlon-reference.jpg";
import partnershipImage from "@/assets/partnership-trust.jpg";
import zealLogo from "@/assets/zeal-logo-badge.png";
import brandenburgerTor from "@/assets/brandenburger-tor.png";
import brandenburgerTorBg from "@/assets/brandenburger-tor-bg.png";
import germanyMap from "@/assets/germany-digital-map.png";
import professionalService from "@/assets/professional-security-service.jpg";
import securityScreening from "@/assets/security-screening.jpg";

// FAQ-Daten für strukturierte Daten
const faqData = [
  {
    question: "Welche Qualifikationen haben Ihre Sicherheitskräfte?",
    answer: "Alle unsere Sicherheitskräfte verfügen über die IHK-Sachkundeprüfung nach §34a GewO oder haben die §34a-Unterrichtung absolviert. Zusätzlich werden regelmäßig Deeskalationstrainings, Erste-Hilfe-Kurse und fachspezifische Schulungen durchgeführt."
  },
  {
    question: "Wie schnell können Sie Sicherheitspersonal bereitstellen?",
    answer: "In dringenden Fällen können wir innerhalb von wenigen Stunden einsatzbereit sein. Für geplante Projekte empfehlen wir eine Vorlaufzeit von 1-2 Wochen für optimale Vorbereitung."
  },
  {
    question: "In welchen Bereichen bieten Sie Sicherheitsdienstleistungen an?",
    answer: "Wir bieten Objekt- und Werkschutz, Veranstaltungsschutz, Personenschutz, Retailschutz, Brandschutz sowie Wertschutz an. Unser Fokus liegt auf Berlin und Umgebung."
  },
  {
    question: "Wie werden Ihre Einsätze dokumentiert?",
    answer: "Alle Einsätze werden digital dokumentiert – von Kontrollgängen über Vorkommnisse bis zu Schichtübergaben. Sie erhalten transparente Berichte und haben jederzeit Zugriff auf relevante Informationen."
  },
  {
    question: "Bieten Sie auch kurzfristige Unterstützung für Veranstaltungen?",
    answer: "Ja, wir unterstützen auch kurzfristig bei Veranstaltungen aller Art – von Firmenevents über Galas bis hin zu Konferenzen. Kontaktieren Sie uns für eine schnelle Verfügbarkeitsabfrage."
  }
];

const Index = () => {
  const servicesHeading = useInView();
  const whyZealHeading = useInView();
  const referenceHeading = useInView();
  const faqHeading = useInView();
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <SkipLink />
      <SEOHead
        title="Sicherheitsdienst Berlin – Personen- & Objektschutz"
        description="ZEAL Security: Sicherheitsdienst in Berlin für Personen-, Objekt- und Veranstaltungsschutz. Diskret, professionell, 24/7 erreichbar. Jetzt unverbindlich anfragen."
        canonicalPath="/"
        keywords="Sicherheitsdienst Berlin, Personenschutz, Objektschutz, Veranstaltungsschutz, Werkschutz, Security Berlin"
        structuredData={createFAQSchema(faqData)}
      />
      <Navigation />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-20" aria-labelledby="hero-heading">
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              disablePictureInPicture
              preload="auto"
              className="h-full w-full object-cover opacity-40"
              aria-hidden="true"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
            {/* Logo im Hintergrund */}
            <div className="absolute inset-0 flex items-center md:items-end justify-center pointer-events-none pb-0 md:pb-20">
              <img 
                src={zealLogo} 
                alt="" 
                className="w-96 h-96 object-contain opacity-10"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
              <h1 id="hero-heading" className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                ZEAL – Berliner Sicherheit mit Leidenschaft
              </h1>
              <p className="mb-24 text-lg text-muted-foreground md:text-xl">
                Wir stehen für zertifizierte Qualität, individuelle Konzepte und absolute Verlässlichkeit.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="gradient-primary shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in-up w-full sm:w-64" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                  <Link to="/kontakt">Angebot anfordern</Link>
                </Button>
                <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in-up w-full sm:w-64" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                  <a href="tel:+4916346299993">
                    <Phone className="mr-2 h-4 w-4" />
                    24/7 Notruf
                  </a>
                </Button>
              </div>
              
              {/* Trust Badges */}
              <div className="mt-16 md:mt-40 flex flex-wrap justify-center gap-4 text-sm animate-fade-in-up" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
                <div className="flex items-center gap-2 rounded-full bg-background px-4 py-2 shadow-sm hover:shadow-blue transition-all duration-300 hover:scale-105">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>IHK-Sachkunde §34a GewO</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-background px-4 py-2 shadow-sm hover:shadow-blue transition-all duration-300 hover:scale-105">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>24/7 einsatzbereit</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-40" aria-labelledby="services-heading">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-0 w-[600px] h-80 overflow-visible">
            <img src={brandenburgerTorBg} alt="" className="h-full w-full object-contain opacity-30" aria-hidden="true" />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div 
              ref={servicesHeading.ref}
              className={`mb-12 text-center transition-all duration-700 ${
                servicesHeading.isInView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 id="services-heading" className="mb-4 text-3xl font-bold md:text-4xl">Unsere Leistungen</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Maßgeschneiderte Sicherheitslösungen für Ihre individuellen Anforderungen
              </p>
            </div>
            <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${
              servicesHeading.isInView 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}>
              <ServiceCard
                title="Objektschutz"
                description="Revier- & Interventionsdienst, Zutrittskontrolle und Werkschutz"
                icon={Building2}
                link="/leistungen/objektschutz"
              />
              <ServiceCard
                title="Veranstaltungsschutz"
                description="Von Gala bis Konferenz – professionelle Veranstaltungssicherheit"
                icon={Shield}
                link="/leistungen/veranstaltungsschutz"
              />
              <ServiceCard
                title="Retailschutz"
                description="Professionelle Sicherheit für Einzelhandel und Shopping-Center"
                icon={Cctv}
                link="/leistungen/retailschutz"
              />
              <ServiceCard
                title="Brandschutz"
                description="Sicherheit durch Vorsorge und Expertise"
                icon={Flame}
                link="/leistungen/brandschutz"
              />
              <ServiceCard
                title="Personenschutz"
                description="Diskret, erfahren und professionell – Schutz für exponierte Personen"
                icon={Users}
                link="/leistungen/personenschutz"
              />
              <ServiceCard
                title="Wertschutz"
                description="Schutz von Kunst, Schmuck und sensiblen Assets"
                icon={Gem}
                link="/leistungen/wertschutz"
              />
            </div>
          </div>
        </section>

        {/* Why ZEAL Section */}
        <section className="pt-8 pb-20" aria-labelledby="why-zeal-heading">
          <div className="container mx-auto px-4">
            <div 
              ref={whyZealHeading.ref}
              className={`mb-12 text-center transition-all duration-700 ${
                whyZealHeading.isInView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 id="why-zeal-heading" className="mb-4 text-3xl font-bold md:text-4xl">Warum ZEAL?</h2>
            </div>
            <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              whyZealHeading.isInView 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}>
              {/* Left Side - Image */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-elegant">
                <img src={securityScreening} alt="Sicherheitsmitarbeiter bei der professionellen Zugangskontrolle" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </div>
              
              {/* Right Side - Reasons */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Maßgeschneiderte Konzepte</h3>
                    <p className="text-muted-foreground">
                      Wir analysieren Risiken, definieren klare Maßnahmen und dokumentieren transparent.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Erfahrenes Team</h3>
                    <p className="text-muted-foreground">
                      Qualifizierte Sicherheitskräfte mit IHK-Sachkundeprüfung §34a und §34a-Unterrichtung.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Qualifiziert & geprüft</h3>
                    <p className="text-muted-foreground">
                      Alle Mitarbeiter verfügen über die erforderlichen Qualifikationen nach §34a GewO.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <Cctv className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Modernste Technik</h3>
                    <p className="text-muted-foreground">
                      Alarmaufschaltung, Videoüberwachung, Zutrittskontrolle, digitale Einsatzprotokolle.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Diskret & zuverlässig</h3>
                    <p className="text-muted-foreground">
                      Deeskalation, Kommunikation und Kundennähe sind gelebte Praxis.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">34a Schulung & Sachkundeprüfung</h3>
                    <p className="text-muted-foreground">
                      Wir bieten professionelle Vorbereitung auf die IHK-Sachkundeprüfung §34a – für Ihren Einstieg in die Sicherheitsbranche.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Berlin-Fokus</h3>
                    <p className="text-muted-foreground">
                      Langjährige Erfahrung in Hotellerie, Kultur, Events und Unternehmen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reference Spotlight */}
        <section className="py-20" aria-labelledby="reference-heading">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div 
                ref={referenceHeading.ref}
                className={`mb-8 text-center transition-all duration-700 ${
                  referenceHeading.isInView 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h2 id="reference-heading" className="mb-4 text-3xl font-bold md:text-4xl">Referenz-Spotlight</h2>
              </div>
              <Card className={`shadow-elegant hover:shadow-blue transition-all duration-700 hover:scale-[1.02] overflow-hidden ${
                referenceHeading.isInView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}>
                <div className="relative h-64 w-full">
                  <img src={adlonImage} alt="Außenansicht des Hotel Adlon Kempinski am Brandenburger Tor in Berlin" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                <CardContent className="p-8">
                  <h3 className="mb-4 text-2xl font-bold">Hotel Adlon Kempinski Berlin</h3>
                  <p className="mb-4 text-lg text-muted-foreground">
                    Hauptkunde seit Beginn – fortlaufende Zusammenarbeit
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-semibold">Leistungen:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Objektschutz & Veranstaltungssicherheit</li>
                        <li>• VIP- & Gästebetreuung</li>
                        <li>• Sicherheitskoordination bei Events</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold">Ergebnis:</h4>
                      <p className="text-muted-foreground">
                        Reibungslose Abläufe, hohe Gästezufriedenheit, belastbare Sicherheitskette
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button asChild className="mt-6">
                      <Link to="/referenzen">Weitere Referenzen ansehen</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quality Promise */}
        <section className="gradient-primary py-20 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Unser Qualitätsversprechen</h2>
              <p className="mb-8 text-lg opacity-90">
                "Wir verstehen Sicherheit nicht nur als Dienstleistung, sondern als Verantwortung – für Unternehmen, Menschen und Werte."
              </p>
              <div className="grid gap-4 text-left sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Permanente Fortbildung</span>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Interne Qualitätssicherung</span>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Klare Strukturen</span>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Transparente Kommunikation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20">
          <div className="absolute top-8 right-0 z-0 w-1/3 h-96 overflow-visible">
            <img src={germanyMap} alt="Germany Digital Map" className="h-full w-full object-contain opacity-30" />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div 
              ref={faqHeading.ref}
              className={`mb-12 text-center transition-all duration-700 ${
                faqHeading.isInView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Häufig gestellte Fragen (FAQ)</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Antworten auf die wichtigsten Fragen zu unserem Service
              </p>
            </div>
            <div className={`mx-auto max-w-4xl transition-all duration-700 ${
              faqHeading.isInView 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}>
              <Card className="shadow-elegant">
                <CardContent className="p-6 md:p-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left">
                        Welche Qualifikationen haben Ihre Sicherheitskräfte?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Alle unsere Sicherheitskräfte verfügen über die gesetzlich erforderlichen Qualifikationen nach §34a GewO. Unser Team besteht aus Mitarbeitern mit IHK-Sachkundeprüfung sowie §34a-Unterrichtung. Darüber hinaus bilden wir unser Team kontinuierlich in den Bereichen Deeskalation, Kommunikation, Erste Hilfe und Brandschutz weiter, um höchste Sicherheitsstandards zu gewährleisten.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">
                        Sind Sie auch außerhalb von Berlin tätig?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Unser Haupteinsatzgebiet ist Berlin und das direkte Umland, da wir hier besonders gut vernetzt sind und kurze Reaktionszeiten garantieren können. Für größere bundesweite Projekte – etwa bei Veranstaltungen, VIP-Begleitungen oder speziellen Sicherheitskonzepten – sind wir jedoch ebenfalls verfügbar. Kontaktieren Sie uns gerne für eine individuelle Anfrage.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">
                        Wie schnell können Sie im Notfall reagieren?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Unsere Einsatzleitung ist 24/7 unter +49 163 4629993 erreichbar. Bei akuten Sicherheitsvorfällen können wir je nach Standort und Verfügbarkeit innerhalb kürzester Zeit vor Ort sein. Für reguläre Anfragen und Beratungsgespräche melden wir uns werktags in der Regel innerhalb von 2 Stunden zurück.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left">
                        Können Sie auch kurzfristige Einsätze übernehmen?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Ja, wir sind auch für kurzfristige Einsätze flexibel einsetzbar – sei es für spontane Veranstaltungen, Personalausfälle oder akute Sicherheitsbedarfe. Dank unseres gut organisierten Teams und der 24/7-Erreichbarkeit können wir oft auch bei kurzem Vorlauf eine passende Lösung anbieten. Kontaktieren Sie uns einfach telefonisch oder per E-Mail.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left">
                        Was unterscheidet ZEAL Security von anderen Sicherheitsdiensten?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Wir sind ein junges, dynamisches Unternehmen mit klarem Fokus auf Qualität, Verlässlichkeit und individuelle Sicherheitskonzepte. Unsere Stärken liegen in der engen Kundenbetreuung, modernster Sicherheitstechnik (Alarmaufschaltung, Videoüberwachung, digitale Protokolle) und einem Team, das nicht nur geschult, sondern auch in Deeskalation und diskretem Auftreten erfahren ist. Alle unsere Mitarbeiter verfügen über die erforderlichen Qualifikationen nach §34a GewO und wir können langjährige Referenzen wie das Hotel Adlon Kempinski Berlin vorweisen.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <img src={partnershipImage} alt="Partnership and Trust" className="h-full w-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <Card className="shadow-elegant">
              <CardContent className="p-8 text-center md:p-12">
                <h2 className="mb-4 text-3xl font-bold">Lassen Sie uns sprechen</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Kontaktieren Sie uns für eine unverbindliche Beratung. Wir melden uns werktags innerhalb von 2 Stunden.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button asChild size="lg" className="gradient-primary shadow-elegant w-full sm:w-64">
                    <Link to="/kontakt">Jetzt Kontakt aufnehmen</Link>
                  </Button>
                  <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 shadow-elegant w-full sm:w-64">
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

export default Index;
