import { Phone } from "lucide-react";

export const CallCta = () => (
  <section className="py-16 bg-gradient-hero text-primary-foreground text-center">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold">Sanitär-Problem? Jetzt anrufen – wir sind sofort da.</h2>
      <p className="mt-3 opacity-90 max-w-2xl mx-auto">Beratung kostenlos – Anfahrt im Festpreis enthalten – Notdienst 24/7.</p>
      <a
        href="tel:015792631852"
        className="mt-7 inline-flex items-center gap-3 rounded-full bg-primary-foreground text-primary px-8 py-4 text-2xl md:text-3xl font-extrabold shadow-cta hover:scale-105 transition-transform"
      >
        <Phone className="h-7 w-7" /> 01579 2631852
      </a>
      <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm">
        <span className="rounded-full bg-primary-foreground/15 border border-primary-foreground/20 px-3 py-1">24/7 Notdienst</span>
        <span className="rounded-full bg-primary-foreground/15 border border-primary-foreground/20 px-3 py-1">Festpreis</span>
        <span className="rounded-full bg-primary-foreground/15 border border-primary-foreground/20 px-3 py-1">30 Minuten Anfahrt</span>
      </div>
    </div>
  </section>
);