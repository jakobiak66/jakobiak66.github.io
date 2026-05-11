import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import zealLogo from "@/assets/zeal-logo-badge.png";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30" role="contentinfo" aria-label="Fußbereich">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={zealLogo} alt="ZEAL Security" className="h-16 w-auto animate-fade-in hover:scale-105 transition-transform duration-300" />
            <p className="text-sm text-muted-foreground">
              Sicherheitsdienst in Berlin – maßgeschneiderte Sicherheitslösungen mit höchstem Qualitätsanspruch.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+4916346299993" className="flex items-center gap-2 text-muted-foreground transition-smooth hover:text-primary">
                <Phone className="h-4 w-4" />
                24/7: +49 163 4629993
              </a>
              <a href="mailto:office@zealsecurity.de" className="flex items-center gap-2 text-muted-foreground transition-smooth hover:text-primary">
                <Mail className="h-4 w-4" />
                office@zealsecurity.de
              </a>
            </div>
          </div>

          {/* Leistungen */}
          <nav aria-label="Leistungen">
            <h3 className="mb-4 text-sm font-semibold">Leistungen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/leistungen/objektschutz" className="text-muted-foreground transition-smooth hover:text-primary">
                  Objektschutz
                </Link>
              </li>
              <li>
                <Link to="/leistungen/veranstaltungsschutz" className="text-muted-foreground transition-smooth hover:text-primary">
                  Veranstaltungsschutz
                </Link>
              </li>
              <li>
                <Link to="/leistungen/retailschutz" className="text-muted-foreground transition-smooth hover:text-primary">
                  Retailschutz
                </Link>
              </li>
              <li>
                <Link to="/leistungen/brandschutz" className="text-muted-foreground transition-smooth hover:text-primary">
                  Brandschutz
                </Link>
              </li>
              <li>
                <Link to="/leistungen/personenschutz" className="text-muted-foreground transition-smooth hover:text-primary">
                  Personenschutz
                </Link>
              </li>
              <li>
                <Link to="/leistungen/wertschutz" className="text-muted-foreground transition-smooth hover:text-primary">
                  Wertschutz
                </Link>
              </li>
            </ul>
          </nav>

          {/* Unternehmen */}
          <nav aria-label="Unternehmen">
            <h3 className="mb-4 text-sm font-semibold">Unternehmen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/ueber-uns" className="text-muted-foreground transition-smooth hover:text-primary">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/referenzen" className="text-muted-foreground transition-smooth hover:text-primary">
                  Referenzen
                </Link>
              </li>
              <li>
                <Link to="/karriere" className="text-muted-foreground transition-smooth hover:text-primary">
                  Karriere
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-muted-foreground transition-smooth hover:text-primary">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns/zertifikate" className="text-muted-foreground transition-smooth hover:text-primary">
                  Zertifikate
                </Link>
              </li>
            </ul>
          </nav>

          {/* Rechtliches */}
          <nav aria-label="Rechtliches">
            <h3 className="mb-4 text-sm font-semibold">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/impressum" className="text-muted-foreground transition-smooth hover:text-primary">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-muted-foreground transition-smooth hover:text-primary">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/agb" className="text-muted-foreground transition-smooth hover:text-primary">
                  AGB
                </Link>
              </li>
              <li>
                <Link to="/barrierefreiheit" className="text-muted-foreground transition-smooth hover:text-primary">
                  Barrierefreiheit
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} Zeal Security & Service GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium">IHK-Sachkunde §34a</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
