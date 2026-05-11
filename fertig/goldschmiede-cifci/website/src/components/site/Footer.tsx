import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container-x">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-background font-extrabold text-lg font-serif">
                C
              </div>
              <div>
                <span className="font-serif text-lg font-semibold text-background">Goldschmiede Cifci</span>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed max-w-xs">
              Handgefertigte Schmuckstücke, Trauringe und Umarbeitungen –
              seit 1992 im Herzen Karlsruhes.
            </p>
            <a
              href="https://www.instagram.com/cifcijewelrycustoms"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-background/70 hover:text-gold transition"
            >
              <Instagram className="size-4" />
              @cifcijewelrycustoms
            </a>
          </div>

          {/* Leistungen */}
          <div>
            <div className="text-xs font-bold mb-4 uppercase tracking-widest text-background/50">
              Leistungen
            </div>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link to="/leistungen" className="hover:text-gold transition">Individuelle Schmuckstücke</Link></li>
              <li><Link to="/trauringe" className="hover:text-gold transition">Trauringe & Verlobungsringe</Link></li>
              <li><Link to="/leistungen" className="hover:text-gold transition">Umarbeitungen</Link></li>
              <li><Link to="/leistungen" className="hover:text-gold transition">Reparaturen</Link></li>
              <li><Link to="/kontakt" className="hover:text-gold transition">Beratung & Service</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <div className="text-xs font-bold mb-4 uppercase tracking-widest text-background/50">
              Kontakt
            </div>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 shrink-0 text-gold" />
                <span>Waldstraße 25<br />76133 Karlsruhe</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-gold" />
                <a href="tel:+497212032810" className="hover:text-gold transition">0721 / 2032810</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-gold" />
                <a href="mailto:kontakt@goldschmiede-cifci.de" className="hover:text-gold transition break-all">
                  kontakt@goldschmiede-cifci.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-background/40">
          <div>© {new Date().getFullYear()} Goldschmiede Cifci · Serhat Cifci</div>
          <div className="flex gap-4">
            <Link to="/impressum" className="hover:text-gold transition">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-gold transition">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
