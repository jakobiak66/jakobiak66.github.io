import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Anfahrt = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      {/* HEADER */}
      <section className="bg-gradient-hero py-14 lg:py-20">
        <div className="container text-center">
          <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
            Anfahrt
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-dark mb-4">
            Anfahrt & Kontakt
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Wir freuen uns auf Ihren Besuch in Überlingen oder melden uns gerne telefonisch bei Ihnen.
          </p>
        </div>
      </section>

      {/* Karte + Kontakt */}
      <section className="py-16">
        <div className="container grid lg:grid-cols-2 gap-10 items-start">
          {/* Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-card h-[420px]">
            <iframe
              title="Haustechnik Hun – Heiligenbreite 22, 88662 Überlingen"
              src="https://www.google.com/maps?q=Heiligenbreite+22,+88662+%C3%9Cberlingen&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Kontaktinfo */}
          <div className="flex flex-col gap-6">
            <div className="bg-secondary rounded-2xl p-7">
              <h2 className="text-2xl font-extrabold text-primary-dark mb-6">Haustechnik Hun</h2>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-card flex items-center justify-center shadow-soft shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-dark">Adresse</div>
                    <div className="text-muted-foreground mt-1">Heiligenbreite 22<br />88662 Überlingen</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-card flex items-center justify-center shadow-soft shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-dark">Telefon</div>
                    <a href="tel:+4975519450480" className="text-primary hover:underline mt-1 block">+49 7551 / 945048</a>
                    <a href="tel:+4901718297911" className="text-primary hover:underline block">0171 – 82 97 911 (Mobil)</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-card flex items-center justify-center shadow-soft shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-dark">E-Mail</div>
                    <a href="mailto:info@haustechnik-hun.de" className="text-primary hover:underline mt-1 block">info@haustechnik-hun.de</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-card flex items-center justify-center shadow-soft shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-dark">Öffnungszeiten</div>
                    <div className="text-muted-foreground mt-1">
                      Mo – Fr: 09:00 – 12:00 & 13:30 – 17:00<br />
                      Sa: 09:00 – 12:00<br />
                      <span className="text-primary font-semibold">Notdienst: 24h, 7 Tage</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Anfahrt;
