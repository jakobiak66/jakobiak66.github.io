import { Link } from "react-router-dom";
import { Users, GraduationCap, TrendingUp, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import heroImage from "@/assets/karriere-team.jpg";
import benefitsImage from "@/assets/karriere-team-new.jpg";

const Karriere = () => {
  return (
    <div className="min-h-screen w-full">
      <SEOHead
        title="Karriere bei ZEAL Security Berlin | Jobs im Sicherheitsdienst"
        description="Stellenangebote im Sicherheitsdienst Berlin: Sicherheitsmitarbeiter, Personenschützer, Veranstaltungsschutz. Werden Sie Teil des ZEAL Security Teams."
        canonicalPath="/karriere"
        keywords="Jobs Sicherheitsdienst Berlin, Karriere Security, Stellenangebote §34a"
      />
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Karriere bei ZEAL Security" className="h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Karriere bei ZEAL Security
              </h1>
              <p className="mb-8 text-lg text-muted-foreground">
                Werden Sie Teil eines wachsenden Berliner Teams. Wir bieten faire Konditionen, strukturierte Einarbeitung und echte Entwicklungsmöglichkeiten.
              </p>
              <Button asChild size="lg" className="gradient-primary shadow-elegant">
                <Link to="/kontakt">Jetzt bewerben</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-3xl font-bold text-center animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>Ihre Benefits</h2>
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Image */}
                <div className="lg:w-[55%] animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                  <img 
                    src={benefitsImage} 
                    alt="Karriere Benefits bei ZEAL Security" 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
                
                {/* Benefits Cards */}
                <div className="lg:w-[45%] grid gap-4 md:grid-cols-2">
                  <Card className="transition-all duration-500 hover:shadow-blue hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                    <CardContent className="pt-4 pb-4">
                      <Users className="mb-3 h-7 w-7 text-primary" />
                      <h3 className="mb-1.5 text-base font-semibold">Faire Arbeitsbedingungen</h3>
                      <p className="text-sm text-muted-foreground">
                        Planbare Schichten, attraktive Zuschläge und hochwertige Dienstkleidung
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="transition-all duration-500 hover:shadow-blue hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                    <CardContent className="pt-4 pb-4">
                      <GraduationCap className="mb-3 h-7 w-7 text-primary" />
                      <h3 className="mb-1.5 text-base font-semibold">Fortbildungen</h3>
                      <p className="text-sm text-muted-foreground">
                        Regelmäßige Schulungen zu Deeskalation, Kommunikation und Brandschutz
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="transition-all duration-500 hover:shadow-blue hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
                    <CardContent className="pt-4 pb-4">
                      <TrendingUp className="mb-3 h-7 w-7 text-primary" />
                      <h3 className="mb-1.5 text-base font-semibold">Entwicklungs-<br />möglichkeiten</h3>
                      <p className="text-sm text-muted-foreground">
                        Aufstiegschancen zur Schichtleitung oder Einsatzleitung
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="transition-all duration-500 hover:shadow-blue hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
                    <CardContent className="pt-4 pb-4">
                      <CheckCircle2 className="mb-3 h-7 w-7 text-primary" />
                      <h3 className="mb-1.5 text-base font-semibold">Wertschätzung</h3>
                      <p className="text-sm text-muted-foreground">
                        Respektvoller Umgang und ein motiviertes Team in Berlin
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 34a Schulung Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <GraduationCap className="mx-auto h-16 w-16 text-primary mb-4" />
                <h2 className="mb-4 text-3xl font-bold">34a Schulung & Sachkundeprüfung</h2>
                <p className="text-lg text-muted-foreground">
                  Starten Sie Ihre Karriere in der Sicherheitsbranche mit unserer professionellen Vorbereitung
                </p>
              </div>
              
              <Card className="transition-all duration-500 hover:shadow-glow">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-xl font-semibold">Was wir bieten:</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>Professionelle Vorbereitung auf die IHK-Sachkundeprüfung §34a GewO</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>Erfahrene Dozenten mit langjähriger Praxis in der Sicherheitsbranche</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>Alle prüfungsrelevanten Themen: Recht, Gefahrenabwehr, Umgang mit Menschen, Sicherheitstechnik</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>Praxisnahe Übungen und Prüfungssimulationen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>Übernahmemöglichkeit nach bestandener Prüfung</span>
                    </li>
                  </ul>
                  
                  <div className="pt-6 border-t">
                    <p className="text-muted-foreground mb-4">
                      Die IHK-Sachkundeprüfung §34a ist die Grundvoraussetzung für qualifizierte Tätigkeiten im Sicherheitsgewerbe. Mit unserer Schulung bereiten wir Sie optimal auf die theoretische und mündliche Prüfung vor.
                    </p>
                    <Button asChild size="lg" className="gradient-primary shadow-elegant w-full sm:w-auto">
                      <Link to="/kontakt">Jetzt informieren</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>Offene Positionen</h2>
              <div className="space-y-6">
                <Card className="transition-all duration-300 hover:shadow-blue hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="mb-2 text-xl font-semibold">Sicherheitsmitarbeiter:in Objektschutz (m/w/d)</h3>
                        <p className="text-muted-foreground">Berlin · Vollzeit / Teilzeit</p>
                      </div>
                      <Button asChild>
                        <Link to="/kontakt">Bewerben</Link>
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium">Anforderungen:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• §34a-Unterrichtung (Mindestanforderung)</li>
                        <li>• Zuverlässigkeit und Teamfähigkeit</li>
                        <li>• Gute Deutschkenntnisse</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-blue hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="mb-2 text-xl font-semibold">Sicherheitsmitarbeiter:in Empfang (m/w/d)</h3>
                        <p className="text-muted-foreground">Berlin · Vollzeit</p>
                      </div>
                      <Button asChild>
                        <Link to="/kontakt">Bewerben</Link>
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium">Anforderungen:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• §34a-Unterrichtung</li>
                        <li>• Sehr gute Deutschkenntnisse, Englisch von Vorteil</li>
                        <li>• Serviceorientierung und gepflegtes Auftreten</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-blue hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="mb-2 text-xl font-semibold">Sicherheitsfachkraft Interventionsdienst (m/w/d)</h3>
                        <p className="text-muted-foreground">Berlin · Vollzeit</p>
                      </div>
                      <Button asChild>
                        <Link to="/kontakt">Bewerben</Link>
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium">Anforderungen:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• §34a-Sachkundeprüfung (IHK)</li>
                        <li>• Führerschein Klasse B</li>
                        <li>• Einsatzerfahrung im Sicherheitsbereich</li>
                        <li>• Belastbarkeit und Entscheidungsfähigkeit</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Bewerbungsprozess */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold">Unser Bewerbungsprozess</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Bewerbung einreichen</h3>
                    <p className="text-muted-foreground">
                      Senden Sie uns Ihren Lebenslauf über unser Kontaktformular oder per E-Mail
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Erstgespräch</h3>
                    <p className="text-muted-foreground">
                      Persönliches oder telefonisches Kennenlernen – wir besprechen Ihre Qualifikationen und Erwartungen
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Probeschicht</h3>
                    <p className="text-muted-foreground">
                      Schnuppern Sie in den Arbeitsalltag und lernen Sie das Team kennen
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Einstellung</h3>
                    <p className="text-muted-foreground">
                      Vertragsabschluss und strukturierte Einarbeitung
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-primary py-20 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Starten Sie Ihre Karriere bei ZEAL Security</h2>
              <p className="mb-8 text-lg opacity-90">
                Senden Sie uns Ihre Bewerbung und werden Sie Teil unseres Teams in Berlin.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 w-full sm:w-64">
                  <Link to="/kontakt">Jetzt bewerben</Link>
                </Button>
                <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 shadow-elegant w-full sm:w-64">
                  <a href="tel:+4916346299993">
                    <Phone className="mr-2 h-4 w-4" />
                    Rückfragen? Jetzt anrufen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Karriere;
