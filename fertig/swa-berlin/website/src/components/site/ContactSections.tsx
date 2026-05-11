import { ArrowRight, Clock, MapPin } from "lucide-react";

function SectionBadge({ label, icon: Icon }: { label: string; icon: typeof Clock }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-brand text-brand-foreground text-xs font-semibold px-3 py-1 rounded-full">
      {label}
      <Icon size={12} />
    </span>
  );
}

export function ContactChannels() {
  return (
    <section className="bg-background pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="container-page max-w-4xl">
        <SectionBadge label="Kontakt" icon={Clock} />
        <h2 className="mt-4 text-ink">So erreichen Sie uns</h2>
        <div className="mt-8 bg-background border border-border rounded-lg shadow-card p-6 md:p-8">
          <dl className="grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="font-extrabold text-ink">Adresse</dt>
              <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Volmerstraße 10<br />12489 Berlin
              </dd>
            </div>
            <div>
              <dt className="font-extrabold text-ink">Telefonnummer</dt>
              <dd className="mt-2 text-sm text-muted-foreground">
                <a href="tel:+4930235938580" className="hover:text-brand transition-colors">+49 (0)30 23 593 85 - 80</a>
              </dd>
            </div>
            <div>
              <dt className="font-extrabold text-ink">E-Mail</dt>
              <dd className="mt-2 text-sm text-muted-foreground">
                <a href="mailto:info@swa.berlin" className="hover:text-brand transition-colors">info@swa.berlin</a>
              </dd>
            </div>
            <div>
              <dt className="font-extrabold text-ink">Öffnungszeiten</dt>
              <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Montag – Freitag<br />07:00 – 17:00 Uhr
              </dd>
            </div>
            <div>
              <dt className="font-extrabold text-ink">Einsatzgebiet</dt>
              <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Berlin und Brandenburg
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section id="standort" className="bg-background">
      <div className="container-page max-w-6xl text-center">
        <div className="flex justify-center">
          <SectionBadge label="Vor Ort" icon={MapPin} />
        </div>
        <h2 className="mt-4 text-ink">Unser Standort</h2>
        <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Besuchen Sie uns an unserem Standort in Berlin-Adlershof. Wir sind Montag bis Freitag
          persönlich für Sie erreichbar.
        </p>
      </div>

      <div className="mt-8 w-full">
        <div className="relative aspect-[21/9] md:aspect-[24/7] bg-muted overflow-hidden shadow-card-lg">
          <iframe
            title="Standort SWA Berlin GmbH – Volmerstraße 10, 12489 Berlin"
            src="https://www.google.com/maps?q=Volmerstra%C3%9Fe+10,+12489+Berlin&output=embed"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
