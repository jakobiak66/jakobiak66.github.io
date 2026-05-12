import { LeistungLayout } from "@/components/site/LeistungLayout";

export default function Page() {
  return (
    <LeistungLayout
      title="Regenwassernutzung"
      subtitle="Ressourcen schonen – Kosten senken."
      ctaHeadline="Regenwasser sinnvoll nutzen?"
      ctaSubline="Kostenlose Beratung zur Regenwassernutzung – persönlich vor Ort in Berlin."
      paragraphs={[
        "Regenwasser ist eine wertvolle Ressource, die sich für viele Zwecke im Haushalt und Garten nutzen lässt. Die Dipl.-Ing. Alexander Christ GmbH plant und installiert Regenwassernutzungsanlagen für Ein- und Mehrfamilienhäuser.",
        "Mit einer professionellen Regenwassernutzungsanlage reduzieren Sie Ihren Trinkwasserverbrauch deutlich – und senken damit langfristig Ihre Betriebskosten.",
      ]}
      leistungenIntro="Von der Planung bis zur Wartung – wir realisieren Ihre Regenwasseranlage."
      leistungen={[
        "Erdtanks und Zisternen",
        "Filtersysteme und Pumpen",
        "Nutzung für WC, Waschmaschine, Garten",
        "Wartung und Pflege",
        "Kombination mit Trinkwasser",
      ]}
      gallery={[
        { src: "", alt: "Regenwasserzisterne – Foto folgt" },
        { src: "", alt: "Regenwasserfilter – Foto folgt" },
        { src: "", alt: "Gartenbewässerung – Foto folgt" },
        { src: "", alt: "Regenwasserpumpe – Foto folgt" },
      ]}
    />
  );
}
