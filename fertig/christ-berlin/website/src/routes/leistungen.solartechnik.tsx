import { LeistungLayout } from "@/components/site/LeistungLayout";

export default function SolartechnikPage() {
  return (
    <LeistungLayout
      title="Solar- & Photovoltaikanlagen"
      subtitle="Emissionsschonend & wirtschaftlich."
      ctaHeadline="Sonnenenergie für Ihr Zuhause?"
      ctaSubline="Kostenlose Beratung zu Solar- und Photovoltaikanlagen – persönlich vor Ort in Berlin."
      paragraphs={[
        "Sie möchten emissionsschonend heizen und langfristig Ihre Energiekosten senken? Mit der richtigen Solartechnik lassen sich diese Ziele ideal vereinbaren.",
        "Als erfahrener Fachbetrieb unterstützen wir Sie dabei, die Kraft der Sonne gezielt für Ihr Zuhause zu nutzen. Von der ersten Idee bis zur fertigen Anlage sind wir Ihr verlässlicher Partner.",
      ]}
      heroImage="/christ-berlin/images/solaranlagen.png"
      heroImageAlt="Solaranlagen – Dipl.-Ing. Alexander Christ GmbH"
      leistungenIntro="Von der Beratung bis zur Inbetriebnahme – wir bringen Sonnenenergie zuverlässig in Ihr Haus."
      leistungen={[
        "Thermische Solaranlagen",
        "Photovoltaikanlagen",
        "Solar-Heizungsunterstützung",
        "Warmwasserbereitung per Solar",
        "Fördermittelberatung",
        "Wartung und Service",
      ]}
      leistungenText={undefined}
      gallery={[
        { src: "", alt: "Solaranlage auf Hausdach – Foto folgt" },
        { src: "", alt: "Photovoltaikanlage – Foto folgt" },
        { src: "", alt: "Solar-Warmwasserbereitung – Foto folgt" },
        { src: "", alt: "Solaranlage Installation – Foto folgt" },
      ]}
    />
  );
}
