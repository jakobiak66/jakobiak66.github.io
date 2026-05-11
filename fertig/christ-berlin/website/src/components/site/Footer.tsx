import { Link } from "@tanstack/react-router";
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
                C
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-base text-white tracking-tight">A. Christ GmbH</span>
                <span className="text-xs text-white/70">Gebäudetechnik Berlin</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-white/85 leading-relaxed">
              Ihr Fachbetrieb für Heizung, Sanitär, Solar & Schornsteinbau in Berlin.
            </p>
          </div>

          {/* Leistungen */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold mb-3 uppercase tracking-wider">
              Leistungen
            </div>
            <ul className="space-y-1.5 text-sm text-white/90">
              <li>
                <Link to="/leistungen/bad-und-sanitaerinstallation" className="hover:text-white">
                  Sanitärinstallation
                </Link>
              </li>
              <li>
                <Link to="/leistungen/heizungstechnik" className="hover:text-white">
                  Heizungstechnik
                </Link>
              </li>
              <li>
                <Link to="/leistungen/solartechnik" className="hover:text-white">
                  Solar- & Photovoltaik
                </Link>
              </li>
              <li>
                <Link to="/leistungen/wohnraumlueftung" className="hover:text-white">
                  Schornsteinbau
                </Link>
              </li>
              <li>
                <Link to="/leistungen/wasseraufbereitung" className="hover:text-white">
                  Energieberatung
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-white font-semibold">
                  24h-Notdienst
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
                <span>Tegeler Straße 42-43, 13353 Berlin</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>
                  <a href="tel:+4930453016260" className="hover:text-white">030 - 453 01 626</a>
                  <span className="text-white/70"> · Notdienst: </span>
                  <a href="tel:+4930453101360" className="hover:text-white">030 - 453 10 136</a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a href="mailto:info@christ-berlin.de" className="hover:text-white break-all">
                  info@christ-berlin.de
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 shrink-0" />
                <span>Mo – Fr: 07:00 – 17:00 Uhr · 24h Notdienst</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-1 text-xs text-white/70">
          <div>
            © {new Date().getFullYear()} Dipl.-Ing. Alexander Christ GmbH. Alle Rechte vorbehalten.
          </div>
          <div>Fachbetrieb · Berlin · HRB 143702 B</div>
        </div>
      </div>
    </footer>
  );
}
