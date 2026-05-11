import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-surface-dark text-primary-foreground">
      <div className="container py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-1 text-2xl font-extrabold mb-4">
            Rathmann<span className="text-primary-glow text-3xl leading-none">.</span>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Ihr SHK-Meisterbetrieb in Berlin. Schnell – Kompetent – Preiswert.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Leistungen</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Sanitärinstallation</li>
            <li>Heizungstausch</li>
            <li>Badsanierung</li>
            <li>Wartung & Service</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Unternehmen</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#ueber" className="hover:text-primary-glow">Über uns</a></li>
            <li><a href="#ablauf" className="hover:text-primary-glow">Ablauf</a></li>
            <li><a href="#kontakt" className="hover:text-primary-glow">Kontakt</a></li>
            <li>Karriere</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary-glow" /> 030 49791187</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary-glow" /> 0177 491 63 08 (Notruf)</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary-glow" /> info@olaf-rathmann.de</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary-glow" /> Gottschedstr. 21, 13357 Berlin</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center text-xs opacity-70 gap-2">
          <span>© {new Date().getFullYear()} Olaf Rathmann – SHK Meisterbetrieb · Alle Rechte vorbehalten</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary-glow">Impressum</a>
            <a href="#" className="hover:text-primary-glow">Datenschutz</a>
            <a href="#" className="hover:text-primary-glow">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
