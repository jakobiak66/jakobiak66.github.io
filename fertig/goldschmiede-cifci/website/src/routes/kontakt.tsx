import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";



export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-24">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Wir freuen uns auf Sie</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
              Kontakt & Beratung
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Besuchen Sie uns in unserem Atelier oder vereinbaren Sie
              einen persönlichen Beratungstermin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Kontaktdaten */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-8">Goldschmiede Cifci</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="size-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Adresse</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Waldstraße 25<br />76133 Karlsruhe
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="size-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Telefon</p>
                    <a href="tel:+497212032810" className="text-sm text-muted-foreground mt-1 hover:text-gold transition">
                      0721 / 2032810
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="size-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">E-Mail</p>
                    <a href="mailto:kontakt@goldschmiede-cifci.de" className="text-sm text-muted-foreground mt-1 hover:text-gold transition break-all">
                      kontakt@goldschmiede-cifci.de
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Instagram className="size-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Instagram</p>
                    <a
                      href="https://www.instagram.com/cifcijewelrycustoms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground mt-1 hover:text-gold transition"
                    >
                      @cifcijewelrycustoms
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Karte */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                <iframe
                  title="Goldschmiede Cifci – Waldstraße 25, 76133 Karlsruhe"
                  src="https://www.google.com/maps?q=Waldstra%C3%9Fe+25,+76133+Karlsruhe&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
