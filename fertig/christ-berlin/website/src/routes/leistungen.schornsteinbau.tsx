import { LeistungLayout } from "@/components/site/LeistungLayout";

export default function Page() {
  return (
    <LeistungLayout
      title="Schornsteinbau"
      subtitle="Sicherer Betrieb Ihrer Feuerstätte."
      ctaHeadline="Schornstein planen oder sanieren?"
      ctaSubline="Kostenlose Beratung zum Schornsteinbau – persönlich vor Ort in Berlin."
      paragraphs={[
        "Ein fachgerecht errichteter oder sanierter Schornstein ist die Grundvoraussetzung für den sicheren und effizienten Betrieb jeder Feuerstätte. Die Dipl.-Ing. Alexander Christ GmbH plant und errichtet Schornsteine nach den neuesten technischen Normen.",
        "Ob Neubau oder Sanierung eines bestehenden Schornsteins – wir sorgen für dauerhaften Zug, Sicherheit und die Einhaltung aller behördlichen Anforderungen.",
      ]}
      leistungenIntro="Von der Planung bis zur Abnahme – wir realisieren Ihren Schornstein fachgerecht."
      leistungen={[
        "Neubau von Schornsteinen",
        "Sanierung und Auskleidung",
        "Schornsteinfegerabnahme vorbereiten",
        "Edelstahlrohrsysteme",
        "Schornsteinverkleidung",
      ]}
      gallery={[
        { src: "", alt: "Schornsteinbau – Foto folgt" },
        { src: "", alt: "Schornstein Sanierung – Foto folgt" },
        { src: "", alt: "Schornstein Neubau – Foto folgt" },
        { src: "", alt: "Schornsteinkopf – Foto folgt" },
      ]}
    />
  );
}
