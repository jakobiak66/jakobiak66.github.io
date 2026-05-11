export const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container grid md:grid-cols-3 gap-8 text-sm">
      <div>
        <div className="font-bold text-base mb-3">Fahrschule Frank Dopf</div>
        <p className="opacity-80">Eine der größten Fahrschulen in der Region Karlsruhe mit 9 Standorten. PKW, Motorrad, LKW und mehr.</p>
        <div className="mt-4 opacity-80">
          <div>Karlsruhe & Region</div>
          <div className="mt-1">9 Standorte in der Region</div>
        </div>
      </div>
      <div>
        <div className="font-bold text-base mb-3">Standorte</div>
        <ul className="space-y-1 opacity-80 text-xs">
          <li>KA-Südstadt · KA-Südweststadt</li>
          <li>KA-Oberreut · KA-Mühlburg</li>
          <li>KA-Oststadt · KA-Durlach</li>
          <li>KA-Neureut · Weingarten (Baden)</li>
          <li>Stutensee-Blankenloch</li>
        </ul>
      </div>
      <div>
        <div className="font-bold text-base mb-3">Rechtliches</div>
        <ul className="space-y-1.5 opacity-80">
          <li><a href="/impressum" className="hover:opacity-100">Impressum</a></li>
          <li><a href="/datenschutz" className="hover:opacity-100">Datenschutz</a></li>
          <li><a href="/faq" className="hover:opacity-100">FAQ + AGB</a></li>
        </ul>
      </div>
    </div>
    <div className="container mt-8 pt-6 border-t border-background/10 text-xs opacity-70 text-center">
      © {new Date().getFullYear()} Fahrschule Frank Dopf. Alle Rechte vorbehalten.
    </div>
  </footer>
);
