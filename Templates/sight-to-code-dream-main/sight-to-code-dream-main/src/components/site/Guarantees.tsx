import { ShieldCheck, Wallet, Clock, BadgeCheck } from "lucide-react";

export const Guarantees = () => (
  <section className="py-12 bg-background border-b border-border">
    <div className="container">
      <div className="rounded-2xl bg-gradient-cta text-primary-foreground p-5 flex items-center gap-4 mb-6">
        <ShieldCheck className="h-10 w-10 shrink-0" />
        <div>
          <div className="font-bold text-lg">Unsere Garantien – Ihre Sicherheit</div>
          <div className="text-sm opacity-90">Mit Sanitär Lindner gehen Sie auf Nummer sicher.</div>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        {[
          { icon: Wallet, t: "Festpreis-Garantie", d: "Kein Stundenlohn, keine versteckten Kosten." },
          { icon: Clock, t: "Termintreue-Garantie", d: "Wir kommen pünktlich – verlässlich und planbar." },
          { icon: BadgeCheck, t: "Qualitäts-Garantie", d: "Bis zu 5 Jahre Garantie auf unsere Arbeit." },
        ].map((g) => (
          <div key={g.t} className="rounded-xl bg-card border border-border p-5 text-center shadow-card">
            <g.icon className="mx-auto h-8 w-8 text-primary mb-3" />
            <div className="font-bold text-foreground">{g.t}</div>
            <div className="mt-1 text-sm text-muted-foreground">{g.d}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);