import { Phone, Clock, MapPin, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "So geht's" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary-dark">
      {/* Topbar */}
      <div className="bg-primary-dark text-primary-foreground text-xs">
        <div className="container flex h-9 items-center justify-between gap-4 text-primary-foreground">
          <div className="hidden sm:flex items-center gap-5 opacity-90">
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 24/7 Notdienst</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> München & Umgebung</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Meisterbetrieb</span>
          </div>
          <div className="sm:hidden flex items-center gap-1.5 font-medium"><Clock className="h-3.5 w-3.5" /> 24/7 Notdienst · Festpreis</div>
          <a href="tel:015792631852" className="font-semibold hover:opacity-80 transition-opacity inline-flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" /> 01579 2631852
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <div className="container flex h-20 items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-cta text-primary-foreground shadow-cta group-hover:scale-105 transition-transform">
                <Wrench className="h-6 w-6" />
              </div>
              <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-success border-2 border-background" />
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-lg text-foreground tracking-tight">Sanitär Lindner</div>
              <div className="text-xs text-muted-foreground">Meisterbetrieb · Notdienst</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
              <a href="#kontakt">Rückruf</a>
            </Button>
            <Button asChild size="lg" className="gap-2 shadow-cta rounded-full">
              <a href="tel:015792631852">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">01579 2631852</span>
                <span className="sm:hidden">Anrufen</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};