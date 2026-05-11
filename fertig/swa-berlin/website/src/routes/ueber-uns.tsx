import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import teamPhoto from "@/assets/team-hlr.png";
import heroBg from "@/assets/hero-heizung-sanitaer.png";



export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Über uns"
          backgroundImage={heroBg}
          backgroundAlt="SWA Berlin GmbH – TGA-Fachbetrieb"
          overlayOpacity={55}
        />

        <section className="pt-16 md:pt-24 pb-8 md:pb-10 bg-background">
          <div className="container-page">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
              <div className="rounded-md overflow-hidden shadow-card-lg md:sticky md:top-24">
                <img
                  src={teamPhoto}
                  alt="Das Team der SWA Service Wartung Anlagenbau Berlin GmbH"
                  width={1600}
                  height={1024}
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
                  Unser Betrieb
                </p>
                <h2 className="mt-3 text-ink">
                  SWA Service Wartung<br />Anlagenbau Berlin GmbH
                </h2>
                <div className="mt-6 space-y-5 text-sm md:text-base leading-relaxed text-muted-foreground">
                  <p>
                    Seit April 2020 bietet die SWA Berlin GmbH professionelle
                    TGA-Dienstleistungen in den Bereichen Heizung, Sanitär,
                    Lüftung und Kälte/Klima in Berlin und Brandenburg an.
                  </p>
                  <p>
                    Wir verbinden traditionelles Handwerk mit modernsten Technologien
                    und setzen auf nachhaltige, energieeffiziente Lösungen für
                    Industrie, Gewerbe und Wohnungsbau.
                  </p>
                  <p>
                    Unsere Geschäftsführer Ulf Weihmann und Michael Uwe Trapp
                    leiten ein erfahrenes Team von TGA-Fachleuten, die für
                    Neubau, Modernisierung und laufende Wartung gleichermaßen
                    kompetent sind.
                  </p>
                  <p>
                    Referenzprojekte wie Tropical Islands (Kälte & Heizung)
                    und E1 Energiemanagement zeigen unsere Kompetenz auch bei
                    anspruchsvollen Großprojekten.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 grid sm:grid-cols-3 gap-8 md:gap-10">
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-brand">
                  2020
                </p>
                <h3 className="mt-2 font-extrabold text-base text-ink">
                  Gegründet
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Seit April 2020 Ihr verlässlicher TGA-Partner in Berlin.
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-brand">
                  4
                </p>
                <h3 className="mt-2 font-extrabold text-base text-ink">
                  TGA-Gewerke
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Heizung, Sanitär, Lüftung und Kälte-Klima aus einer Hand.
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-brand">
                  B+B
                </p>
                <h3 className="mt-2 font-extrabold text-base text-ink">
                  Einsatzgebiet
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Berlin und Brandenburg – von Kleinprojekten bis zu Großbaustellen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
