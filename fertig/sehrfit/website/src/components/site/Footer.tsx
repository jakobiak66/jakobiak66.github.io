export const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container grid md:grid-cols-3 gap-8 text-sm">
      <div>
        <div className="font-bold text-base mb-3">SEHRFIT</div>
        <p className="opacity-80">Personal Fitness Training in Eggenstein-Leopoldshafen – individuell, wissenschaftlich fundiert und nachhaltig wirksam.</p>
        <div className="mt-4 opacity-80">
          <div>Eisenbahnstraße 48</div>
          <div>76344 Eggenstein-Leopoldshafen</div>
          <div className="mt-1">Tel: 0179-5478091</div>
          <div>E-Mail: info@sehrfit.de</div>
        </div>
      </div>
      <div>
        <div className="font-bold text-base mb-3">Quick Links</div>
        <ul className="space-y-1.5 opacity-80">
          <li><a href="#leistungen" className="hover:opacity-100">Leistungen</a></li>
          <li><a href="#bewertungen" className="hover:opacity-100">Ihr Trainer</a></li>
          <li><a href="#kontakt" className="hover:opacity-100">Kontakt</a></li>
          <li><a href="tel:017954780910" className="hover:opacity-100">Jetzt anrufen</a></li>
        </ul>
      </div>
      <div>
        <div className="font-bold text-base mb-3">Rechtliches</div>
        <ul className="space-y-1.5 opacity-80">
          <li><a href="/impressum" className="hover:opacity-100">Impressum</a></li>
          <li><a href="/datenschutz" className="hover:opacity-100">Datenschutz</a></li>
        </ul>
      </div>
    </div>
    <div className="container mt-8 pt-6 border-t border-background/10 text-xs opacity-70 text-center">
      © {new Date().getFullYear()} SEHRFIT – Reinhard Pfeiffer. Alle Rechte vorbehalten.
    </div>
  </footer>
);
