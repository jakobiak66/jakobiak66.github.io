import { Phone, ChevronRight } from "lucide-react";

export function Emergency() {
  return (
    <section id="kontakt" className="pt-20 md:pt-28 pb-8 md:pb-10">
      <div className="container-page grid md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted shadow-card-lg">
          <iframe
            title="Standort Dipl.-Ing. Alexander Christ GmbH – Tegeler Straße 42-43, 13353 Berlin"
            src="https://www.google.com/maps?q=Tegeler+Stra%C3%9Fe+42-43,+13353+Berlin&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div>
          <h2>
            Persönlich erreichbar –
            <br />
            schnell und zuverlässig
            <br />
            für Sie da.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Ob Beratung, Planung oder Reparatur in der Gebäudetechnik – das Team
            der Dipl.-Ing. Alexander Christ GmbH unterstützt Sie kompetent und
            zuverlässig. 24h Notdienst für Notfälle.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="tel:+4930453016260"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-brand-foreground font-semibold text-sm px-5 py-3 rounded-md"
            >
              <Phone size={16} /> 030 - 453 01 626 <ChevronRight size={14} />
            </a>
            <a
              href="tel:+4930453101360"
              className="inline-flex items-center gap-2 bg-destructive hover:opacity-90 text-white font-semibold text-sm px-5 py-3 rounded-md"
            >
              <Phone size={16} /> Notdienst: 030 - 453 10 136 <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
