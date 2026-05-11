export const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container grid md:grid-cols-3 gap-8 text-sm">
      <div>
        <div className="font-bold text-base mb-3">Susanne Heitmann</div>
        <p className="opacity-80">Bildende Künstlerin aus Osnabrück und Berlin. Malerei, Siebdruck, Collagen und Workshops in der Kunstvermittlung.</p>
        <div className="mt-4 opacity-80">
          <div>Jägerstraße 21</div>
          <div>49084 Osnabrück</div>
        </div>
      </div>
      <div>
        <div className="font-bold text-base mb-3">Navigation</div>
        <ul className="space-y-1.5 opacity-80">
          <li><a href="#arbeiten" className="hover:opacity-100">Arbeiten</a></li>
          <li><a href="#vita" className="hover:opacity-100">Vita</a></li>
          <li><a href="#workshops" className="hover:opacity-100">Workshops</a></li>
          <li><a href="#kontakt" className="hover:opacity-100">Kontakt</a></li>
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
      © {new Date().getFullYear()} Susanne Heitmann. Alle Rechte vorbehalten.
    </div>
  </footer>
);