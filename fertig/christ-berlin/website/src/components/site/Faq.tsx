const faqs = [
  {
    q: "1. In welchem Gebiet sind Sie tätig?",
    a: "Unser Standort ist in Berlin-Wedding (Tegeler Straße 42-43). Wir sind für Kunden in ganz Berlin tätig – sprechen Sie uns einfach an.",
  },
  {
    q: "2. Welche Leistungen bieten Sie an?",
    a: "Von Heizungsinstallation und Sanitär über Schornsteinbau und Energieberatung bis hin zu Solar- und Photovoltaikanlagen – wir sind Ihr Ansprechpartner für Gebäudetechnik aus einer Hand.",
  },
  {
    q: "3. Bieten Sie auch Wartung und Inspektion an?",
    a: "Ja, eine gut gewartete Anlage ist eine zuverlässige Anlage. Wir kümmern uns um Wartung und Reparatur – damit Sie sich keine Gedanken machen müssen.",
  },
  {
    q: "4. Wie läuft ein Auftrag bei Ihnen ab?",
    a: "Am Anfang steht immer ein persönliches Gespräch und die Besichtigung vor Ort. Gemeinsam erarbeiten wir ein maßgeschneidertes Konzept, das zu Ihren Anforderungen passt.",
  },
  {
    q: "5. Gibt es einen 24h-Notdienst?",
    a: "Ja – wir bieten einen 24-Stunden-Notdienst an. Für Notfälle erreichen Sie uns unter 030 - 453 10 136.",
  },
  {
    q: "6. Wie kann ich einen Termin vereinbaren?",
    a: "Rufen Sie uns an unter 030 - 453 01 626 oder schreiben Sie uns an info@christ-berlin.de. Wir melden uns schnell zurück.",
  },
];

export function Faq() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <span className="badge-pill mb-5">FAQ</span>
        <h2>Häufige Fragen</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Sie haben Fragen zu unseren Leistungen rund um Heizung, Sanitär,
          Schornsteinbau oder Solar? Hier finden Sie die häufigsten
          Fragen unserer Kundinnen und Kunden – und natürlich die passenden
          Antworten dazu.
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
