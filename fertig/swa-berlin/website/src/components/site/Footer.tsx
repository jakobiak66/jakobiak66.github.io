import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand text-brand-foreground pt-10 pb-5">
      <div className="container-page">
        <div className="grid gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-white font-extrabold text-lg">
                S
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-base text-white tracking-tight">SWA Berlin GmbH</span>
                <span className="text-xs text-white/70">TGA-Haustechnik</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-white/85 leading-relaxed">
              Ihr TGA-Fachbetrieb für Heizung, Sanitär, Lüftung und Kälte-Klima in Berlin & Brandenburg.
            </p>
          </div>

          {/* Leistungen */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold mb-3 uppercase tracking-wider">
              Leistungen
            </div>
            <ul className="space-y-1.5 text-sm text-white/90">
              <li>
                <Link to="/leistungen/heizungstechnik" className="hover:text-white">
                  Heizungsinstallation
                </Link>
              </li>
              <li>
                <Link to="/leistungen/bad-und-sanitaerinstallation" className="hover:text-white">
                  Sanitärinstallation
                </Link>
              </li>
              <li>
                <Link to="/leistungen/wohnraumlueftung" className="hover:text-white">
                  Lüftungsanlagen
                </Link>
              </li>
              <li>
                <Link to="/leistungen/solartechnik" className="hover:text-white">
                  Kälte- & Klimaanlagen
                </Link>
              </li>
              <li>
                <Link to="/leistungen/wasseraufbereitung" className="hover:text-white">
                  Service & Wartung
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation + Rechtliches */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold mb-3 uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-1.5 text-sm text-white/90">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/ueber-uns" className="hover:text-white">Über uns</Link></li>
              <li><Link to="/kontakt" className="hover:text-white">Kontakt</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white">Datenschutz</Link></li>
              <li><Link to="/impressum" className="hover:text-white">Impressum</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="lg:col-span-4">
            <div className="text-xs font-bold mb-3 uppercase tracking-wider">
              Kontakt
            </div>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Volmerstraße 10, 12489 Berlin</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <a href="tel:+493023593858080" className="hover:text-white">+49 (0)30 23 593 85 - 80</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a href="mailto:info@swa.berlin" className="hover:text-white break-all">
                  info@swa.berlin
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 shrink-0" />
                <span>Mo – Fr: 07:00 – 17:00 Uhr</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-1 text-xs text-white/70">
          <div>
            © {new Date().getFullYear()} SWA Service Wartung Anlagenbau Berlin GmbH. Alle Rechte vorbehalten.
          </div>
          <div>TGA-Fachbetrieb · Berlin · HRB 215691</div>
        </div>
      </div>
    </footer>
  );
}
