export const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container grid md:grid-cols-3 gap-8 text-sm">
      <div>
        <div className="font-bold text-base mb-3">Sanitär Lindner</div>
        <p className="opacity-80">Ihr Meisterbetrieb für Sanitär, Heizung und Notdienst – schnell, fair und mit Festpreis-Garantie.</p>
        <div className="mt-4 opacity-80">
          <div>Musterstraße 12</div>
          <div>80331 München</div>
          <div className="mt-1">Tel: 01579 2631852</div>
        </div>
      </div>
      <div>
        <div className="font-bold text-base mb-3">Quick Links</div>
        <ul className="space-y-1.5 opacity-80">
          <li><a href="#leistungen" className="hover:opacity-100">Leistungen</a></li>
          <li><a href="#kontakt" className="hover:opacity-100">Kontakt</a></li>
          <li><a href="tel:015792631852" className="hover:opacity-100">Notdienst</a></li>
        </ul>
      </div>
      <div>
        <div className="font-bold text-base mb-3">Rechtliches</div>
        <ul className="space-y-1.5 opacity-80">
          <li><a href="#" className="hover:opacity-100">Impressum</a></li>
          <li><a href="#" className="hover:opacity-100">Datenschutz</a></li>
          <li><a href="#" className="hover:opacity-100">AGB</a></li>
        </ul>
      </div>
    </div>
    <div className="container mt-8 pt-6 border-t border-background/10 text-xs opacity-70 text-center">
      © {new Date().getFullYear()} Sanitär Lindner. Alle Rechte vorbehalten.
    </div>
  </footer>
);