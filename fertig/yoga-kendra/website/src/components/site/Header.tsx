import { Phone, MapPin, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#unternehmen", label: "Für Unternehmen" },
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#warum-yoga", label: "Warum Yoga?" },
  { href: "#bewertungen", label: "Referenzen" },
  { href: "#kontakt", label: "Kontakt" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary-dark">
      {/* Topbar */}
      <div className="bg-primary-dark text-primary-foreground text-xs">
        <div className="container flex h-9 items-center justify-between gap-4 text-primary-foreground">
          <div className="hidden sm:flex items-center gap-5 opacity-90">
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Bremen</span>
            <span className="flex items-center gap-1.5"><Leaf className="h-3.5 w-3.5" /> Therapeutisches Yoga seit 1985</span>
          </div>
          <div className="sm:hidden flex items-center gap-1.5 font-medium"><Leaf className="h-3.5 w-3.5" /> Yoga Kendra · Bremen</div>
          <a href="tel:+491765538153" className="font-semibold hover:opacity-80 transition-opacity inline-flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" /> +49 176 553 81 553
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <div className="container flex h-20 items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-cta text-primary-foreground shadow-cta group-hover:scale-105 transition-transform">
                <Leaf className="h-6 w-6" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-lg text-foreground tracking-tight">Yoga Kendra</div>
              <div className="text-xs text-muted-foreground">Üben · Verstehen · Offenheit</div>
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
              <a href="#kontakt">Termin anfragen</a>
            </Button>
            <Button asChild size="lg" className="gap-2 shadow-cta rounded-full">
              <a href="tel:+491765538153">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Anrufen</span>
                <span className="sm:hidden">Anrufen</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};