import { Link } from "react-router-dom";
import { Building2, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import heroImage from "@/assets/referenzen-luxury.jpg";
import adlonHotel from "@/assets/adlon-hotel.jpg";

const Referenzen = () => {
  return (
    <div className="min-h-screen w-full">
      <SEOHead
        title="Referenzen | Unsere Kunden in Berlin"
        description="Hotels, Museen, Unternehmen und Veranstalter in Berlin vertrauen auf ZEAL Security. Hier ein Auszug aus unseren Referenzen und Erfolgsprojekten."
        canonicalPath="/referenzen"
        keywords="Referenzen Sicherheitsdienst, Hotel Adlon Security, Kundenprojekte Berlin"
      />
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Luxury Hotel Reference" className="h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Referenzen
              </h1>
              <p className="text-lg text-muted-foreground">
                Auszug aus aktuellen Projekten. Weitere Referenzen nennen wir gerne im vertraulichen Gespräch.
              </p>
            </div>
          </div>
        </section>

        {/* Main Reference */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <Card className="shadow-elegant transition-all duration-500 hover:shadow-blue animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                <CardContent className="p-8 md:p-12">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Hotel Adlon Kempinski Berlin</h2>
                      <p className="text-muted-foreground">Hauptkunde seit Beginn – fortlaufende Zusammenarbeit</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                    <div className="lg:w-3/5">
                      <img 
                        src={adlonHotel} 
                        alt="Hotel Adlon Kempinski Berlin" 
                        className="h-full w-full rounded-lg object-cover shadow-elegant"
                      />
                    </div>
                    <div className="lg:w-2/5 space-y-6">
                      <div>
                        <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          Aufgabe
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>Objektschutz & Veranstaltungssicherheit</li>
                          <li>VIP- & Gästebetreuung</li>
                          <li>Sicherheitskoordination bei Events</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          Vorgehen
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>Schicht- & Lagedienstpläne</li>
                          <li>Einlass- & VIP-Prozesse</li>
                          <li>Funk- & Notfallkonzepte</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          Ergebnis
                        </h3>
                        <p className="text-muted-foreground">
                          Reibungslose Abläufe, hohe Gästezufriedenheit, belastbare Sicherheitskette
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional References */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold">Weitere Beispiele</h2>
              <p className="mb-8 text-muted-foreground">
                Aus Gründen der Vertraulichkeit werden weitere Referenzen anonymisiert dargestellt:
              </p>

              <div className="grid gap-6">
                <Card className="transition-all duration-300 hover:shadow-blue hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-semibold">Luxus-Wohnanlage, Berlin Mitte</h3>
                    <p className="mb-3 text-muted-foreground">
                      24/7 Concierge & Objektschutz für exklusives Wohnobjekt
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm">Objektschutz</span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm">Concierge</span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm">24/7</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-blue hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-semibold">Internationale Galerie, Charlottenburg</h3>
                    <p className="mb-3 text-muted-foreground">
                      Ausstellungsbewachung & Vernissagen-Sicherheit
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm">Wertschutz</span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm">Veranstaltungen</span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm">Kunst</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-blue hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-semibold">Tech-Kongress, Messe Berlin</h3>
                    <p className="mb-3 text-muted-foreground">
                      Einlass, Backstage & Crowd Management für 5.000+ Teilnehmer
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm">Veranstaltungsschutz</span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm">Crowd Management</span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm">Backstage</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="shadow-elegant">
              <CardContent className="p-8 text-center md:p-12">
                <h2 className="mb-4 text-3xl font-bold">Weitere Referenzen vertraulich anfragen</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Gerne nennen wir Ihnen weitere Referenzen im persönlichen Gespräch.
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

export default Referenzen;
