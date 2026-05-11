import { Link } from "react-router-dom";
import { Shield, Users, Award, Target, Phone, Eye, BookOpen, GraduationCap, Building2, FileCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import berlinSkyline from "@/assets/berlin-skyline.jpg";
import zealBadgeLogo from "@/assets/zeal-logo-badge.png";
import visionImage from "@/assets/vision-berlin.jpg";
import missionImage from "@/assets/mission-security.jpg";

const UeberUns = () => {
  return (
    <div className="min-h-screen w-full">
      <SEOHead
        title="Über uns | Sicherheitsdienst aus Berlin"
        description="Wer ist ZEAL Security? Erfahrenes Team, hohe Standards, persönlicher Kontakt. Lernen Sie unser Unternehmen, unsere Werte und unser Selbstverständnis kennen."
        canonicalPath="/ueber-uns"
        keywords="ZEAL Security Berlin, Sicherheitsfirma, Über uns, §34a GewO, Sicherheitsteam"
      />
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <img src={berlinSkyline} alt="Berlin Skyline" className="h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
                Wer wir sind
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                ZEAL Security – Ihr zertifizierter Partner in Berlin
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                {/* Logo Links */}
                <div className="flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                  <img 
                    src={zealBadgeLogo} 
                    alt="ZEAL Security Logo" 
                    className="w-full max-w-md h-auto hover-scale transition-all duration-700"
                  />
                </div>
                
                {/* Text Rechts */}
                <div className="animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">Über ZEAL Security</h2>
                  <p className="mb-6 text-lg leading-relaxed transform transition-all duration-500 hover:translate-x-2">
                    ZEAL Security ist ein junges, dynamisches Sicherheitsunternehmen aus Berlin. In kurzer Zeit haben wir uns als zuverlässiger Partner etabliert. Mit einem erfahrenen Team und höchstem Qualitätsanspruch bieten wir maßgeschneiderte Sicherheitslösungen.
                  </p>
                  <p className="mb-8 text-lg font-semibold text-primary animate-pulse">
                    Wir verstehen Sicherheit nicht nur als Dienstleistung, sondern als Verantwortung – für Unternehmen, Menschen und Werte.
                  </p>
                </div>
              </div>

              <div className="mt-16 grid gap-8 md:grid-cols-3">
                <Card className="group text-center transition-all duration-700 hover:shadow-glow hover:-translate-y-3 hover:scale-105 animate-fade-in cursor-pointer" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
                  <CardContent className="pt-8">
                    <Award className="mx-auto mb-4 h-12 w-12 text-primary transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
                    <p className="font-semibold transition-colors duration-300 group-hover:text-primary">Fachkräfte mit IHK-Sachkunde</p>
                    <p className="mt-2 text-sm text-muted-foreground">§34a GewO</p>
                  </CardContent>
                </Card>
                <Card className="group text-center transition-all duration-700 hover:shadow-glow hover:-translate-y-3 hover:scale-105 animate-fade-in cursor-pointer" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
                  <CardContent className="pt-8">
                    <Users className="mx-auto mb-4 h-12 w-12 text-primary transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
                    <p className="font-semibold transition-colors duration-300 group-hover:text-primary">Geschulte Sicherheitskräfte</p>
                    <p className="mt-2 text-sm text-muted-foreground">§34a Unterrichtung</p>
                  </CardContent>
                </Card>
                <Card className="group text-center transition-all duration-700 hover:shadow-glow hover:-translate-y-3 hover:scale-105 animate-fade-in cursor-pointer" style={{ animationDelay: "1s", animationFillMode: "both" }}>
                  <CardContent className="pt-8">
                    <Shield className="mx-auto mb-4 h-12 w-12 text-primary transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
                    <p className="font-semibold transition-colors duration-300 group-hover:text-primary">Einsatzbereit</p>
                    <p className="mt-2 text-sm text-muted-foreground">Rund um die Uhr für Sie da</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>Unsere Zertifizierungen</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                ZEAL Security erfüllt alle relevanten nationalen und internationalen Standards 
                der Sicherheitsbranche
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group transition-all duration-700 hover:shadow-glow hover:-translate-y-2 hover:rotate-1 animate-fade-in cursor-pointer" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                    <FileCheck className="h-6 w-6 text-primary transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                  <CardTitle className="transition-colors duration-300 group-hover:text-primary">IHK-Sachkunde §34a GewO</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Alle Führungskräfte und Sicherheitsmitarbeiter verfügen über 
                    die Sachkundeprüfung nach §34a Gewerbeordnung.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-700 hover:shadow-glow hover:-translate-y-2 hover:-rotate-1 animate-fade-in cursor-pointer" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                    <Building2 className="h-6 w-6 text-primary transition-transform duration-500 group-hover:-rotate-12" />
                  </div>
                  <CardTitle className="transition-colors duration-300 group-hover:text-primary">Gewerberechtliche Erlaubnis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Vollständige gewerberechtliche Erlaubnis nach §34a GewO für 
                    Bewachungsgewerbe.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-700 hover:shadow-glow hover:-translate-y-2 hover:rotate-1 animate-fade-in cursor-pointer" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                    <CheckCircle2 className="h-6 w-6 text-primary transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                  <CardTitle className="transition-colors duration-300 group-hover:text-primary">DGUV-Schulungen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Regelmäßige Schulungen nach DGUV Vorschrift 1 
                    (Arbeitsschutz und Unfallverhütung).
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-700 hover:shadow-glow hover:-translate-y-2 hover:-rotate-1 animate-fade-in cursor-pointer" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                    <GraduationCap className="h-6 w-6 text-primary transition-transform duration-500 group-hover:-rotate-12" />
                  </div>
                  <CardTitle className="transition-colors duration-300 group-hover:text-primary">34a Schulung & Vorbereitung</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Professionelle Vorbereitung auf die IHK-Sachkundeprüfung §34a GewO 
                    für den qualifizierten Einstieg in die Sicherheitsbranche.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-700 hover:shadow-glow hover:-translate-y-2 hover:-rotate-1 animate-fade-in cursor-pointer" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                    <Shield className="h-6 w-6 text-primary transition-transform duration-500 group-hover:-rotate-12" />
                  </div>
                  <CardTitle className="transition-colors duration-300 group-hover:text-primary">Datenschutz DSGVO</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Vollständige Compliance mit EU-Datenschutz-Grundverordnung 
                    und deutschem Datenschutzrecht.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Qualifications */}
        <section className="bg-muted/30 py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>Qualifikationen unseres Teams</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                Unser Team besteht aus hochqualifizierten Sicherheitsfachkräften
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="group transition-all duration-700 hover:shadow-glow hover:-translate-y-2 animate-fade-in cursor-pointer" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6">
                      <GraduationCap className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">IHK-Sachkundeprüfung §34a</h3>
                      <p className="mb-3 text-muted-foreground">
                        Qualifizierte Sicherheitskräfte mit bestandener IHK-Sachkundeprüfung
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="transition-all duration-300 hover:translate-x-2 hover:text-foreground">• Recht (Gewerbe-, Datenschutz-, Strafrecht)</li>
                        <li className="transition-all duration-300 hover:translate-x-2 hover:text-foreground">• Umgang mit Menschen & Deeskalation</li>
                        <li className="transition-all duration-300 hover:translate-x-2 hover:text-foreground">• Grundlagen der Sicherheitstechnik</li>
                        <li className="transition-all duration-300 hover:translate-x-2 hover:text-foreground">• Unfallverhütung & Notfallmaßnahmen</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-700 hover:shadow-glow hover:-translate-y-2 animate-fade-in cursor-pointer" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:-rotate-6">
                      <BookOpen className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">Unterrichtung §34a</h3>
                      <p className="mb-3 text-muted-foreground">
                        Geschulte Sicherheitsmitarbeiter mit §34a-Unterrichtung
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="transition-all duration-300 hover:translate-x-2 hover:text-foreground">• Grundlagen des Sicherheitsgewerbes</li>
                        <li className="transition-all duration-300 hover:translate-x-2 hover:text-foreground">• Rechtliche Rahmenbedingungen</li>
                        <li className="transition-all duration-300 hover:translate-x-2 hover:text-foreground">• Umgang in Notfallsituationen</li>
                        <li className="transition-all duration-300 hover:translate-x-2 hover:text-foreground">• Kundenorientiertes Verhalten</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-700 hover:shadow-glow hover:-translate-y-2 animate-fade-in cursor-pointer" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6">
                      <Users className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">Spezialisierungen</h3>
                      <p className="mb-3 text-muted-foreground">
                        Zusätzliche Qualifikationen unserer Mitarbeiter
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="transition-all duration-300 hover:translate-x-2 hover:text-foreground">• Close Protection / Personenschutz</li>
                        <li className="transition-all duration-300 hover:translate-x-2 hover:text-foreground">• Veranstaltungssicherheit & Crowd Management</li>
                        <li className="transition-all duration-300 hover:translate-x-2 hover:text-foreground">• Brandschutzhelfer</li>
                        <li className="transition-all duration-300 hover:translate-x-2 hover:text-foreground">• Erste-Hilfe-Ausbildung</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-700 hover:shadow-glow hover:-translate-y-2 animate-fade-in cursor-pointer" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:-rotate-6">
                      <CheckCircle2 className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">Fortbildungen</h3>
                      <p className="mb-3 text-muted-foreground">
                        Permanente Weiterentwicklung des Teams
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="transition-all duration-300 hover:translate-x-2 hover:text-foreground">• Regelmäßige interne Schulungen</li>
                        <li className="transition-all duration-300 hover:translate-x-2 hover:text-foreground">• Deeskalationstraining</li>
                        <li className="transition-all duration-300 hover:translate-x-2 hover:text-foreground">• Retailschutz & Ladendiebstahl-Prävention</li>
                        <li className="transition-all duration-300 hover:translate-x-2 hover:text-foreground">• Rechtliche Aktualisierungen</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 items-center md:grid-cols-2">
                <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-700 hover:scale-110 hover:rotate-12 hover:shadow-glow animate-pulse">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Unsere Vision</h2>
                  <p className="mb-4 text-lg leading-relaxed text-muted-foreground transition-all duration-500 hover:text-foreground hover:translate-x-2">
                    Wir möchten der führende Sicherheitsdienstleister in Berlin und Brandenburg werden, 
                    der für Innovation, Professionalität und Vertrauen steht.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground transition-all duration-500 hover:text-foreground hover:translate-x-2">
                    Eine Stadt, in der sich Menschen sicher fühlen, Unternehmen geschützt sind und 
                    Veranstaltungen ohne Sorgen stattfinden können – das ist unsere Vision für Berlin.
                  </p>
                </div>
                <div className="order-1 md:order-2 group relative h-[400px] overflow-hidden rounded-2xl shadow-elegant animate-fade-in transition-all duration-700 hover:shadow-glow hover:scale-105" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                  <img 
                    src={visionImage} 
                    alt="Vision - Berlin Siegessäule"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent transition-opacity duration-700 group-hover:opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-muted/30 py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 items-center md:grid-cols-2">
                <div className="group relative order-1 h-[400px] overflow-hidden rounded-2xl shadow-elegant animate-fade-in transition-all duration-700 hover:shadow-glow hover:scale-105 md:order-1" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                  <img 
                    src={missionImage} 
                    alt="Mission - Digitale Sicherheitstechnologie"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent transition-opacity duration-700 group-hover:opacity-70" />
                </div>
                <div className="order-2 animate-fade-in md:order-2" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-700 hover:scale-110 hover:-rotate-12 hover:shadow-glow animate-pulse">
                    <Target className="h-8 w-8" />
                  </div>
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Unsere Mission</h2>
                  <p className="mb-4 text-lg leading-relaxed text-muted-foreground transition-all duration-500 hover:text-foreground hover:translate-x-2">
                    Wir schaffen Sicherheit durch maßgeschneiderte Lösungen, hochqualifizierte Mitarbeiter 
                    und modernste Technologie. Dabei setzen wir auf persönlichen Service und langfristige Partnerschaften.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground transition-all duration-500 hover:text-foreground hover:translate-x-2">
                    Jeden Tag arbeiten wir daran, die Erwartungen unserer Kunden zu übertreffen und 
                    neue Maßstäbe in der Sicherheitsbranche zu setzen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>Compliance & Qualitätssicherung</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                Wir nehmen unsere Verantwortung ernst und arbeiten nach höchsten Standards
              </p>
            </div>

            <div className="mx-auto max-w-4xl space-y-6">
              <Card className="group transition-all duration-700 hover:shadow-glow hover:scale-[1.02] hover:-translate-x-2 animate-fade-in cursor-pointer" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-180" />
                    <div>
                      <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-primary">Regelmäßige Audits</h3>
                      <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        Interne und externe Qualitätsaudits zur kontinuierlichen Verbesserung 
                        unserer Prozesse und Dienstleistungen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-700 hover:shadow-glow hover:scale-[1.02] hover:translate-x-2 animate-fade-in cursor-pointer" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-180" />
                    <div>
                      <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-primary">Dokumentation & Transparenz</h3>
                      <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        Lückenlose Dokumentation aller Einsätze, digitale Einsatzprotokolle 
                        und transparente Berichterstattung an unsere Kunden.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-700 hover:shadow-glow hover:scale-[1.02] hover:-translate-x-2 animate-fade-in cursor-pointer" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-180" />
                    <div>
                      <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-primary">Datenschutz & Vertraulichkeit</h3>
                      <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        Strikte Einhaltung der DSGVO, Verschwiegenheitsverpflichtungen und 
                        sichere Datenverarbeitung nach höchsten Standards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-700 hover:shadow-glow hover:scale-[1.02] hover:translate-x-2 animate-fade-in cursor-pointer" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-180" />
                    <div>
                      <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-primary">Versicherungsschutz</h3>
                      <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        Umfassende Betriebs- und Berufshaftpflichtversicherung für maximale 
                        Sicherheit unserer Kunden.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-700 hover:shadow-glow hover:scale-[1.02] hover:-translate-x-2 animate-fade-in cursor-pointer" style={{ animationDelay: "0.7s", animationFillMode: "both" }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-180" />
                    <div>
                      <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-primary">Code of Conduct</h3>
                      <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        Alle Mitarbeiter sind verpflichtet, unseren ethischen Verhaltenskodex 
                        einzuhalten: Respekt, Integrität und professionelles Auftreten.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="shadow-elegant animate-fade-in transition-all duration-700 hover:shadow-glow hover:scale-[1.02]" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
              <CardContent className="p-8 text-center md:p-12">
                <h2 className="mb-4 text-3xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>Lernen Sie uns kennen</h2>
                <p className="mb-8 text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                  Kontaktieren Sie uns für ein unverbindliches Kennenlerngespräch.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
                  <Button asChild size="lg" className="gradient-primary shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-110 hover:-translate-y-1 w-full sm:w-64">
                    <Link to="/kontakt">Jetzt Kontakt aufnehmen</Link>
                  </Button>
                  <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 shadow-elegant transition-all duration-500 hover:scale-110 hover:-translate-y-1 w-full sm:w-64">
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

export default UeberUns;
