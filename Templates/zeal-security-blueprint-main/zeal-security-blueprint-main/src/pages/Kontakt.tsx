import { useState } from "react";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/kontakt-zentrale.jpg";

const CONTACT_API_URL = "https://dcyeadkbwimxkrmrogdg.supabase.co/functions/v1/contact";
const API_KEY = "sb_publishable_drqi8iz6hw5Mpvh9L9TrXA_2OdenjRp";
const X_TENANT = "zeal-security";
const X_TOKEN = "aaa9399398s8sdvsv2o4sfn230ftien49djdjt950wsmdsmr0aa03m3";

const Kontakt = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": API_KEY,
          "x-tenant": X_TENANT,
          "x-token": X_TOKEN,
        },
        body: JSON.stringify({
          form: "kontakt",
          name,
          email,
          telefon: phone,
          nachricht: message,
        }),
      });

      const data = await response.json();

      if (data.ok) {
        toast({
          title: "Anfrage gesendet",
          description: "Wir melden uns werktags innerhalb von 2 Stunden bei Ihnen.",
        });
        // Formular leeren
        setName("");
        setCompany("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        toast({
          title: "Fehler",
          description: data.error || "Beim Senden ist ein Fehler aufgetreten.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Netzwerkfehler",
        description: "Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full">
      <SEOHead
        title="Kontakt | Sicherheitsdienst Berlin anfragen"
        description="Kontaktieren Sie ZEAL Security in Berlin: 24/7 Notruf, unverbindliche Beratung und individuelles Sicherheitskonzept. Schreiben Sie uns oder rufen Sie an."
        canonicalPath="/kontakt"
        keywords="Kontakt Sicherheitsdienst Berlin, Angebot Objektschutz, Security Anfrage"
      />
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Kontakt ZEAL Security" className="h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Kontakt & Angebot
              </h1>
              <p className="text-lg text-muted-foreground">
                Wir melden uns werktags innerhalb von 2 Stunden bei Ihnen
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-6 h-full flex flex-col animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                <div>
                  <h2 className="mb-6 text-3xl font-bold">Kontaktmöglichkeiten</h2>
                  <p className="mb-8 text-muted-foreground">
                    Für akute Sicherheitsanliegen erreichen Sie unsere Einsatzleitung rund um die Uhr.
                  </p>
                </div>

                <Card className="transition-all duration-300 hover:shadow-blue hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold">24/7 Notruf</h3>
                        <a href="tel:+4916346299993" className="text-lg font-medium text-primary hover:underline">
                          +49 163 4629993
                        </a>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Rund um die Uhr für Sie erreichbar
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-blue hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold">E-Mail</h3>
                        <a href="mailto:office@zealsecurity.de" className="text-lg font-medium text-primary hover:underline">
                          office@zealsecurity.de
                        </a>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Für allgemeine Anfragen
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-blue hover:-translate-y-1 flex-grow">
                  <CardContent className="p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold">Einsatzgebiet</h3>
                        <p className="text-muted-foreground">
                          Berlin & Umland<br />
                          Bundesweite Projekte auf Anfrage
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="shadow-elegant h-full animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                <CardContent className="p-6 h-full flex flex-col">
                  <h2 className="mb-6 text-2xl font-bold">Anfrage senden</h2>
                  <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input 
                        id="name" 
                        placeholder="Ihr Name" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Unternehmen</Label>
                      <Input 
                        id="company" 
                        placeholder="Ihr Unternehmen" 
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="ihre@email.de" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+49 ..." 
                        required 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2 flex-grow flex flex-col">
                      <Label htmlFor="message">Ihr Anliegen *</Label>
                      <Textarea
                        id="message"
                        placeholder="Beschreiben Sie Ihr Anliegen..."
                        className="min-h-[120px] flex-grow"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Mit dem Absenden stimmen Sie unserer{" "}
                      <a href="/datenschutz" className="text-primary hover:underline">
                        Datenschutzerklärung
                      </a>{" "}
                      zu. Wir verarbeiten Ihre Daten ausschließlich zur Bearbeitung Ihrer Anfrage.
                    </p>
                    <Button 
                      type="submit" 
                      className="w-full gradient-primary shadow-elegant"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Wird gesendet...
                        </>
                      ) : (
                        "Anfrage senden"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;
