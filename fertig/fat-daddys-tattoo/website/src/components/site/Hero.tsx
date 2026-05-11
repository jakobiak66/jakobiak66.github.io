import { Phone, Check, MapPin, Scissors, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => (
  <section className="relative overflow-hidden border-b border-border bg-background">
    <div className="container py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-5">
          <MapPin className="h-3.5 w-3.5" /> Bremen-Gröpelingen · Im Hinterhof
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
          <span className="text-primary">Dein Tattoo.</span><br />Unsere Leidenschaft.
        </h1>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/20 text-foreground px-3 py-1.5 text-sm font-medium">
          <Star className="h-4 w-4 text-accent" /> Dom & Daddy · Erfahrene Tätowierer
        </div>
        <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
          Fat Daddys Backyard – professionelles Tattoo-Studio in Bremen-Gröpelingen. Wir begleiten dich von der ersten Idee bis zum fertigen Tattoo. Termine telefonisch oder per E-Mail.
        </p>
        <ul className="mt-6 space-y-2.5">
          {["Alle Tattoo-Stile – individuell & professionell","Persönliche Motiv-Beratung und Entwurf","Cover-Up Tattoos","Terminbuchung telefonisch oder per E-Mail"].map((t) => (
            <li key={t} className="flex items-start gap-2 text-foreground">
              <Check className="h-5 w-5 text-success shrink-0 mt-0.5" /><span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="gap-2 shadow-cta">
            <a href="tel:042157705146"><Phone className="h-5 w-5" /> 0421-57705146</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="mailto:fat-daddys-tattoo@gmx.de">E-Mail schreiben</a>
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Scissors className="h-4 w-4 text-primary" /> Dom & Daddy</span>
          <span>•</span><span>Scharmbecker Str. 6, Bremen</span><span>•</span><span>Im Hinterhof</span>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-2xl" />
        <div className="relative rounded-2xl shadow-cta bg-gradient-hero flex items-center justify-center h-80 md:h-[420px]">
          <div className="text-center text-white p-8">
            <div className="text-4xl font-extrabold">FAT DADDYS</div>
            <div className="text-2xl font-bold mt-1 opacity-80">BACKYARD</div>
            <div className="mt-4 text-base opacity-90">Tattoo Studio</div>
            <div className="mt-2 text-sm opacity-75">Bremen-Gröpelingen</div>
            <div className="mt-4 text-xs opacity-60">Scharmbecker Str. 6 · Im Hinterhof</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
