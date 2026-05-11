import { Quote } from "lucide-react";
import teamLaszlo from "@/assets/team-laszlo.jpg";

export const Promise = () => {
  return (
    <section id="ueber" className="container py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">Unser Versprechen</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-6 leading-tight">
            Handwerk, auf das Sie sich verlassen können.
          </h2>
          <Quote className="h-10 w-10 text-primary/40 mb-3" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Wir sind kein anonymer Großbetrieb — wir sind Ihr Betrieb vor Ort in Überlingen.
            Mit einem klaren Anspruch: faire Preise, ehrliche Beratung und Qualität, die hält.
            Wer bei uns anruft, bekommt einen direkten Ansprechpartner, transparente Kommunikation
            und einen Termin, der passt — auch außerhalb der üblichen Öffnungszeiten.
          </p>
          <p className="mt-4 text-muted-foreground font-medium">
            — Laszlo Hun, Installateur- und Heizungsbaumeister
          </p>
        </div>
        <div className="relative">
          {/* Echtes Foto: Laszlo Hun, Inhaber – heruntergeladen von haustechnik-hun.de */}
          <img
            src={teamLaszlo}
            alt="Laszlo Hun – Inhaber Haustechnik Hun, Überlingen"
            loading="lazy"
            className="w-full h-[360px] sm:h-[420px] object-cover rounded-2xl shadow-card"
            width={800}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};
