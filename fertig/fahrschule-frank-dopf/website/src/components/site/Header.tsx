import { Phone, MapPin, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#leistungen", label: "Führerscheinklassen" },
  { href: "#ablauf", label: "Standorte" },
  { href: "#bewertungen", label: "Über uns" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export const Header = () => (
  <header className="sticky top-0 z-50 w-full">
    <div className="bg-primary-dark text-primary-foreground text-xs">
      <div className="container flex h-9 items-center justify-between gap-4 text-primary-foreground">
        <div className="hidden sm:flex items-center gap-5 opacity-90">
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> 9 Standorte in Karlsruhe & Region</span>
          <span className="flex items-center gap-1.5"><Car className="h-3.5 w-3.5" /> PKW · Motorrad · LKW · Simulator</span>
        </div>
        <div className="sm:hidden font-medium">Fahrschule Frank Dopf · Karlsruhe</div>
        <a href="#kontakt" className="font-semibold hover:opacity-80 transition-opacity ml-auto">Kontakt</a>
      </div>
    </div>
    <div className="border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-3 group">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-cta text-primary-foreground shadow-cta group-hover:scale-105 transition-schritte">
            <Car className="h-6 w-6" />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-lg text-foreground tracking-tight">Frank Dopf</div>
            <div className="text-xs text-muted-foreground">Fahrschule Karlsruhe</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors">{l.label}</a>
          ))}
        </nav>
        <Button asChild size="lg" className="gap-2 shadow-cta rounded-full">
          <a href="#kontakt">Jetzt anfragen</a>
        </Button>
      </div>
    </div>
  </header>
);
