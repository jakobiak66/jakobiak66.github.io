import { CheckCircle2 } from "lucide-react";
import betriebImg from "@/assets/betrieb.jpg";

const features = [
  "Direkte Erreichbarkeit per Telefon",
  "Terminvereinbarung unkompliziert",
  "Kommunikation auf Augenhöhe",
  "Transparente Festpreise",
];

const ImgPlaceholder = ({ label, height = 380 }: { label: string; height?: number }) => (
  <div style={{
    background: '#f0f0f0',
    border: '2px dashed #ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: `${height}px`,
    borderRadius: '16px',
  }}>
    <div style={{ color: '#999', textAlign: 'center' as const, padding: '20px' }}>
      <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📷</div>
      <div style={{ fontWeight: 'bold' as const, marginBottom: '4px' }}>Platzhalter</div>
      <small>{label}</small>
    </div>
  </div>
);

export const Digital = () => {
  return (
    <section className="container py-20 space-y-20">
      {/* Block 1: Betrieb Vorstellung */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Unser Betrieb</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-5 leading-tight">
            Ihr traditionsreicher Handwerksbetrieb in Überlingen
          </h2>
          <p className="text-muted-foreground mb-7 leading-relaxed">
            Haustechnik Hun steht für saubere Arbeit, persönliche Beratung und langjährige Erfahrung.
            Als Meisterbetrieb erfüllen wir höchste Qualitätsansprüche — bei Neuinstallationen,
            Wartungen und im 24h-Notdienst.
          </p>
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-card">
          {/* 📷 PLATZHALTER: Foto eines Handwerkers/Monteurs bei der Arbeit */}
          <ImgPlaceholder label="Foto: Monteur/Handwerker bei der Arbeit" height={380} />
        </div>
      </div>

      {/* Block 2: Über Laszlo Hun – mit echtem Firmengebäude-Foto */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-card order-2 lg:order-1">
          {/* Echtes Foto: Firmengebäude Haustechnik Hun – Original haustechnik-hun.de
              Originalkontext: "Über uns – Haustechnik Hun in Überlingen" */}
          <img
            src={betriebImg}
            alt="Haustechnik Hun – Firmenstandort in Überlingen"
            loading="lazy"
            className="w-full h-[380px] object-cover"
            width={800}
            height={600}
          />
        </div>
        <div className="order-1 lg:order-2">
          <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Über uns</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-5 leading-tight">
            Ihr Partner für Heizung, Sanitär und Solar
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Laszlo Hun ist Installateur- und Heizungsbaumeister mit langjähriger Erfahrung in Überlingen.
            Als traditioneller Handwerksbetrieb stehen persönliche Beratung und saubere Arbeit an erster Stelle.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In unserer Live-Ausstellung können Sie Holz- und Pelletsheizungen sowie Regenwasseranlagen
            in Betrieb erleben. Lernen Sie uns kennen — wir freuen uns auf Sie.
          </p>
        </div>
      </div>
    </section>
  );
};
