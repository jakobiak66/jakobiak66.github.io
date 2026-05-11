export const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container grid md:grid-cols-3 gap-8 text-sm">
      <div>
        <div className="font-bold text-base mb-3">Yoga Kendra</div>
        <p className="opacity-80">Therapeutisches Yoga nach indischer Tradition – BDY/EYU zertifiziert. Einzel-, Gruppen- und Firmenangebote in Bremen.</p>
        <div className="mt-4 opacity-80">
          <div>Achimer Straße 27</div>
          <div>28205 Bremen</div>
          <div className="mt-1">Tel: +49 176 553 81 553</div>
          <div>Tel: +49 421 434 9 464</div>
          <div>E-Mail: suci@yoga-kendra.net</div>
        </div>
      </div>
      <div>
        <div className="font-bold text-base mb-3">Angebote</div>
        <ul className="space-y-1.5 opacity-80">
          <li><a href="#leistungen" className="hover:opacity-100">Yoga-Angebote</a></li>
          <li><a href="#unternehmen" className="hover:opacity-100">Für Unternehmen</a></li>
          <li><a href="#ueber-mich" className="hover:opacity-100">Über mich</a></li>
          <li><a href="#warum-yoga" className="hover:opacity-100">Warum Yoga?</a></li>
          <li><a href="#kontakt" className="hover:opacity-100">Kontakt</a></li>
        </ul>
      </div>
      <div>
        <div className="font-bold text-base mb-3">Rechtliches</div>
        <ul className="space-y-1.5 opacity-80">
          <li><a href="#impressum" className="hover:opacity-100">Impressum</a></li>
          <li><a href="#datenschutz" className="hover:opacity-100">Datenschutz</a></li>
        </ul>
        <div className="mt-4 opacity-80">
          <div className="font-semibold">Śucī Susanne Bruhn</div>
          <div>Yogalehrerin BDY/EYU</div>
          <div>Heilpraktikerin für Psychotherapie</div>
        </div>
      </div>
    </div>
    <div className="container mt-8 pt-6 border-t border-background/10 text-xs opacity-70 text-center">
      © {new Date().getFullYear()} Yoga Kendra – Śucī Susanne Bruhn. Alle Rechte vorbehalten.
    </div>
  </footer>
);