export const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container grid md:grid-cols-3 gap-8 text-sm">
      <div>
        <div className="font-bold text-base mb-3">Fat Daddys Backyard</div>
        <p className="opacity-80">Professionelles Tattoo-Studio in Bremen-Gröpelingen. Dom & Daddy – mit Leidenschaft und Können für dein perfektes Tattoo.</p>
        <div className="mt-4 opacity-80">
          <div>Scharmbecker Str. 6</div>
          <div>28309 Bremen (Im Hinterhof)</div>
          <div className="mt-1">Tel: 0421-57705146</div>
          <div>fat-daddys-tattoo@gmx.de</div>
        </div>
      </div>
      <div>
        <div className="font-bold text-base mb-3">Quick Links</div>
        <ul className="space-y-1.5 opacity-80">
          <li><a href="#leistungen" className="hover:opacity-100">Leistungen</a></li>
          <li><a href="#bewertungen" className="hover:opacity-100">Unsere Künstler</a></li>
          <li><a href="#kontakt" className="hover:opacity-100">Termin buchen</a></li>
        </ul>
      </div>
      <div>
        <div className="font-bold text-base mb-3">Rechtliches</div>
        <ul className="space-y-1.5 opacity-80">
          <li><a href="/impressum" className="hover:opacity-100">Impressum</a></li>
        </ul>
      </div>
    </div>
    <div className="container mt-8 pt-6 border-t border-background/10 text-xs opacity-70 text-center">
      © {new Date().getFullYear()} Fat Daddys Backyard – Holger Krell. Alle Rechte vorbehalten.
    </div>
  </footer>
);
