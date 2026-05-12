import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate min-h-[500px] flex items-center pt-20 pb-24 md:pt-16 md:pb-20 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-[#f0f0f0] border-b-2 border-dashed border-[#ccc] flex items-center justify-center">
        <p className="text-[#999] text-center text-sm">
          📷 Platzhalter<br />
          <small>Hero-Banner – bitte Firmenfoto einsenden</small>
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/30" />

      <div className="container-page relative text-white">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-white">
            Ihr TGA-Fachbetrieb für
            <br />
            Heizung, Sanitär & Lüftung
          </h1>

          <p className="mt-10 md:mt-8 text-base md:text-lg text-white leading-relaxed max-w-2xl">
            Die <strong className="font-bold">SWA Service Wartung Anlagenbau Berlin GmbH</strong> ist
            Ihr kompetenter Partner für TGA-Dienstleistungen in Berlin und Brandenburg.
            Wir kombinieren traditionelles Handwerk mit modernster Technik – für Neubau, Modernisierung und Wartung.
          </p>

          <div className="mt-10 md:mt-8 flex items-center gap-4 justify-center md:justify-start">
            <div className="text-sm text-white bg-white/20 px-4 py-2 rounded-lg">
              <div className="font-semibold">Seit April 2020</div>
              <div className="text-white/85">Ihr Haustechnik-Partner in Berlin</div>
            </div>
          </div>

          <a
            href="/kontakt"
            className="mt-10 md:mt-8 inline-flex items-center gap-3 bg-brand hover:bg-brand-dark text-brand-foreground font-semibold text-base px-7 py-4 rounded-md transition-colors shadow-lg"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
