import { ArrowRight, Gem } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-gold/5" />

      <div className="container-x relative text-center max-w-4xl">
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2 text-xs font-medium tracking-widest uppercase text-gold">
            <Gem className="size-3.5" />
            Goldschmiedekunst seit 1992
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-semibold text-foreground leading-tight tracking-tight">
          Einzigartiger Schmuck
          <br />
          <span className="text-gold">nach Ihrem Maß</span>
        </h1>

        <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Seit über 30 Jahren fertigt die Goldschmiede Cifci in Karlsruhe
          individuelle Schmuckstücke, Trauringe und Verlobungsringe –
          handgefertigt mit Leidenschaft und höchster Präzision.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-gold text-background rounded-full px-8 py-4 text-sm font-semibold hover:opacity-90 transition"
          >
            Beratungstermin vereinbaren
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/leistungen"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium hover:border-gold hover:text-gold transition"
          >
            Unsere Leistungen
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          <div className="text-center">
            <p className="text-3xl font-serif font-semibold text-gold">30+</p>
            <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wide">Jahre Erfahrung</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-semibold text-gold">∞</p>
            <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wide">Einzigartige Stücke</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-semibold text-gold">100%</p>
            <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wide">Handarbeit</p>
          </div>
        </div>
      </div>
    </section>
  );
}
