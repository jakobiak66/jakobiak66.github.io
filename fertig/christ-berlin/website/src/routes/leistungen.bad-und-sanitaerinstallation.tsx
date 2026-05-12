import { LeistungLayout } from "@/components/site/LeistungLayout";

export default function Page() {
  return (
    <LeistungLayout
      title="Bad- und Sanitärinstallation"
      subtitle="Ihr Bad – ein Ort der Entspannung."
      ctaHeadline="Bereit für Ihr neues Traumbad?"
      ctaSubline="Kostenlose Vor-Ort-Beratung in Berlin – persönlich, unverbindlich und vom Fachbetrieb."
      paragraphs={[
        "Das Bad ist heute für viele Menschen mehr als nur ein funktionaler Raum. Es ist ein Ort der Entspannung und Erholung im eigenen Zuhause. Diesem Anspruch tragen wir mit einem umfangreichen Angebot an Produkten und Leistungen im Bereich Bad und Sanitär Rechnung.",
        "Wer in die Jahre gekommene Fliesen, tropfende Armaturen oder beengte Verhältnisse vorfindet, verschenkt täglich ein Stück Lebensqualität. Dabei muss das nicht so bleiben – denn ein neues Bad verändert mehr als nur die Optik.",
      ]}
      heroImage="/christ-berlin/images/sanitaer.png"
      heroImageAlt="Sanitärinstallation – Dipl.-Ing. Alexander Christ GmbH"
      leistungenIntro="Von der Planung bis zur Umsetzung – wir realisieren Ihr Traumbad zuverlässig aus einer Hand."
      leistungenText={[
        "Wir realisieren Komplettbäder, sanieren bestehende Nassräume und installieren Duschen, Badewannen sowie Whirlpools. Toiletten und Sanitäranlagen bauen wir fachgerecht ein und erneuern Rohrleitungen.",
      ]}
      leistungen={[]}
      gallery={[
        { src: "", alt: "Badezimmer Sanierung – Foto folgt" },
        { src: "", alt: "Ebenerdige Dusche – Foto folgt" },
        { src: "", alt: "Badewanne – Foto folgt" },
        { src: "", alt: "Sanitärinstallation – Foto folgt" },
      ]}
    />
  );
}
