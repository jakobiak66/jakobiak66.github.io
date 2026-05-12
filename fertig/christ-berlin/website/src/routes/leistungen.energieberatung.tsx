import { LeistungLayout } from "@/components/site/LeistungLayout";

export default function Page() {
  return (
    <LeistungLayout
      title="Energieberatung"
      subtitle="Individuell, unabhängig, zukunftsorientiert."
      ctaHeadline="Energie sparen und Kosten senken?"
      ctaSubline="Kostenlose Erstberatung zur Energieoptimierung – persönlich vor Ort in Berlin."
      paragraphs={[
        "Als Dipl.-Ing. Betrieb beraten wir Sie unabhängig und umfassend zu allen Fragen rund um Energieeffizienz, Fördermittel und die Modernisierung Ihrer Heizungsanlage.",
        "Wir analysieren Ihren Energiebedarf, zeigen Ihnen mögliche Einsparungen auf und entwickeln ein maßgeschneidertes Konzept – ob für Neubau oder Bestandsgebäude.",
      ]}
      leistungenIntro="Von der Analyse bis zur Umsetzung – wir beraten Sie ganzheitlich."
      leistungen={[
        "Heizlastberechnung",
        "Beratung zu Wärmepumpen und Brennwerttechnik",
        "Fördermittelberatung (BEG, BAFA, KfW)",
        "Energieausweis",
        "Hydraulischer Abgleich",
        "Vor-Ort-Begehung und Bedarfsanalyse",
      ]}
      heroImage="/christ-berlin/images/energieberatung.png"
      heroImageAlt="Energieberatung Icon – Dipl.-Ing. Alexander Christ GmbH"
      gallery={[
        { src: "", alt: "Energieberatungsgespräch – Foto folgt" },
        { src: "", alt: "Energieausweis – Foto folgt" },
        { src: "", alt: "Heizungsanlage – Foto folgt" },
        { src: "", alt: "Fördermittelberatung – Foto folgt" },
      ]}
    />
  );
}
