import { LeistungLayout } from "@/components/site/LeistungLayout";

export default function Page() {
  return (
    <LeistungLayout
      title="Kamine & Kaminöfen"
      subtitle="Wärme und Atmosphäre für Ihr Zuhause."
      ctaHeadline="Kamin einbauen lassen?"
      ctaSubline="Kostenlose Beratung zu Kaminöfen und Kaminsystemen – persönlich vor Ort in Berlin."
      paragraphs={[
        "Ein Kamin oder Kaminofen schafft nicht nur angenehme Wärme, sondern auch eine besondere Atmosphäre in Ihrem Zuhause. Die Dipl.-Ing. Alexander Christ GmbH berät Sie bei der Auswahl und übernimmt die fachgerechte Installation.",
        "Wir arbeiten mit hochwertigen Systemen und sorgen dafür, dass Ihr Kamin alle technischen und behördlichen Anforderungen erfüllt – von der Planung bis zur Abnahme durch den Schornsteinfeger.",
      ]}
      leistungenIntro="Alles aus einer Hand – Beratung, Installation und Abnahme."
      leistungen={[
        "Kaminöfen und Kamineinsätze",
        "Pelletöfen",
        "Wasserführende Kaminöfen",
        "Kaminverkleidungen",
        "Schornsteinsanierung für Kamin",
        "Abnahme und Inbetriebnahme",
      ]}
      gallery={[
        { src: "", alt: "Kaminofen – Foto folgt" },
        { src: "", alt: "Kamineinsatz – Foto folgt" },
        { src: "", alt: "Kamin Wohnzimmer – Foto folgt" },
        { src: "", alt: "Pelletofen – Foto folgt" },
      ]}
    />
  );
}
