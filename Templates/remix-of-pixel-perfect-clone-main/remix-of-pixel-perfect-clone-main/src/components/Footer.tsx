import logo from "@/assets/schwalm-logo.png";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-section-muted pt-16 pb-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
      <Link to="/">
        <img src={logo} alt="Schwalm Heizung & Sanitär GmbH" className="h-20 w-auto" />
      </Link>

      <div className="mt-8 flex justify-center gap-6 text-sm text-brand-dark/60">
        <a href="#" className="hover:text-brand transition-colors">Impressum</a>
        <a href="#" className="hover:text-brand transition-colors">Datenschutz</a>
        <a href="#" className="hover:text-brand transition-colors">Cookie-Einstellungen</a>
      </div>
      <p className="mt-4 text-xs text-brand-dark/40">© {new Date().getFullYear()} Schwalm Heizung & Sanitär GmbH</p>
    </div>
  </footer>
);

export default Footer;
