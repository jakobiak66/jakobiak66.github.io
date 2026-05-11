const faqs = [
  {
    q: "1. In welchem Gebiet sind Sie tätig?",
    a: "Unser Standort ist in Berlin-Adlershof (Volmerstraße 10). Wir sind für Kunden in ganz Berlin und Brandenburg tätig – bei Großprojekten auch darüber hinaus.",
  },
  {
    q: "2. Welche Leistungen bieten Sie an?",
    a: "Heizungsinstallation, Sanitärinstallation, Lüftungsanlagen, Kälte- und Klimaanlagen sowie Service und Wartung. Wir decken alle TGA-Gewerke aus einer Hand ab.",
  },
  {
    q: "3. Bieten Sie auch Wartung und Inspektion an?",
    a: "Ja, regelmäßige Wartung ist der Schlüssel zu zuverlässigen Anlagen. Wir bieten Service und Wartungsverträge für alle TGA-Anlagen an.",
  },
  {
    q: "4. Wie läuft ein Auftrag bei Ihnen ab?",
    a: "Am Anfang steht immer ein persönliches Gespräch und die Bedarfsanalyse. Wir erarbeiten ein individuelles Angebot und begleiten Sie von der Planung bis zur Inbetriebnahme.",
  },
  {
    q: "5. Arbeiten Sie auch bei Großprojekten?",
    a: "Ja – Referenzen wie Tropical Islands (Kälte & Heizung) oder E1 Energiemanagement zeigen unsere Kompetenz auch bei anspruchsvollen Großprojekten in Industrie und Gewerbe.",
  },
  {
    q: "6. Wie kann ich einen Termin vereinbaren?",
    a: "Rufen Sie uns an unter +49 (0)30 23 593 85 - 80 oder schreiben Sie uns an info@swa.berlin. Wir melden uns zeitnah zurück.",
  },
];

export function Faq() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <span className="badge-pill mb-5">FAQ</span>
        <h2>Häufige Fragen</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Sie haben Fragen zu unseren TGA-Leistungen? Hier finden Sie die häufigsten
          Fragen rund um Heizung, Sanitär, Lüftung und Kälte-Klima –
          und natürlich die passenden Antworten.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-10">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-extrabold text-lg">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
