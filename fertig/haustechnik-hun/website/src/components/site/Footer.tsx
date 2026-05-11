import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-surface-dark text-primary-foreground">
      <div className="container py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-1 text-2xl font-extrabold mb-4">
            Haustechnik Hun<span className="text-primary-glow text-3xl leading-none">.</span>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Traditioneller Handwerksbetrieb für Heizung, Sanitär und Solar in Überlingen am Bodensee.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Leistungen</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/leistungen/installation-heizgeraet" className="hover:text-primary-glow">Heizungsinstallation</Link></li>
            <li><Link to="/leistungen/installation-sanitaer" className="hover:text-primary-glow">Sanitärinstallation</Link></li>
            <li><Link to="/leistungen/gasinstallationen" className="hover:text-primary-glow">Gasinstallationen</Link></li>
            <li><Link to="/notdienst" className="hover:text-primary-glow">Notdienst 24h</Link></li>
            <li><Link to="/service" className="hover:text-primary-glow">Service & Wartung</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Unternehmen</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/ueber-uns" className="hover:text-primary-glow">Über uns</Link></li>
            <li><Link to="/aktuelles" className="hover:text-primary-glow">Aktuelles</Link></li>
            <li><Link to="/anfahrt" className="hover:text-primary-glow">Anfahrt</Link></li>
            <li><Link to="/kontakt" className="hover:text-primary-glow">Kontakt</Link></li>
            <li><Link to="/impressum" className="hover:text-primary-glow">Impressum</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" />
              <div>
                <a href="tel:+4975519450480" className="hover:text-primary-glow">+49 7551 / 945048</a><br />
                <a href="tel:+4901718297911" className="hover:text-primary-glow">0171 – 82 97 911</a>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" />
              <a href="mailto:info@haustechnik-hun.de" className="hover:text-primary-glow">info@haustechnik-hun.de</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" />
              <span>Heiligenbreite 22<br />88662 Überlingen</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center text-xs opacity-70 gap-2">
          <span>© {new Date().getFullYear()} Haustechnik Hun · Laszlo Hun · Alle Rechte vorbehalten</span>
          <div className="flex gap-5">
            <Link to="/impressum" className="hover:text-primary-glow">Impressum</Link>
            <Link to="/anfahrt" className="hover:text-primary-glow">Anfahrt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
