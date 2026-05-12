export function LeistungenHero() {
  return (
    <section className="relative h-[280px] md:h-[320px] overflow-hidden">
      <div className="absolute inset-0 bg-[#f0f0f0] border-b-2 border-dashed border-[#ccc] flex items-center justify-center">
        <p className="text-[#999] text-sm">📷 Platzhalter – Leistungen-Hintergrundbild</p>
      </div>
      <div className="absolute inset-0 bg-ink/10" />
      <div className="relative container-page h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 w-full items-center">
          <h1 className="text-brand-foreground">Unsere Leistungen</h1>
          <p className="text-brand-foreground/90 text-sm md:text-base leading-relaxed max-w-md">
            Türöffnung, Schlüsselservice und Sicherheitssysteme
            <br />
            alles aus einer Hand.
          </p>
        </div>
      </div>
    </section>
  );
}
