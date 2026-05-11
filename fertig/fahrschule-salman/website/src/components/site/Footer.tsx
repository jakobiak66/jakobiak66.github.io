export const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container grid md:grid-cols-3 gap-8 text-sm">
      <div>
        <div className="font-bold text-base mb-3">Fahrschule Salman</div>
        <p className="opacity-80">Professionelle Fahrausbildung in Bremen-Huckelriede. Führerschein Klassen B, BF17 und BE – fair, zügig und erfolgreich.</p>
        <div className="mt-4 opacity-80">
          <div>Buntentorsteinweg 541</div>
          <div>28201 Bremen</div>
          <div className="mt-1">Tel: 0421-84 999 053</div>
          <div>Mobil: 0177-33 78 307</div>
        </div>
      </div>
      <div>
        <div className="font-bold text-base mb-3">Öffnungszeiten</div>
        <ul className="space-y-1 opacity-80 text-xs">
          <li>Montag: 15:30–19:00 Uhr</li>
          <li>Mittwoch: 16:00–19:00 Uhr</li>
          <li className="mt-2 font-semibold text-sm">Theorieunterricht:</li>
          <li>Mo 19:00–20:30 | Mi 19:00–20:30</li>
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
      © {new Date().getFullYear()} Fahrschule Salman. Alle Rechte vorbehalten.
    </div>
  </footer>
);
