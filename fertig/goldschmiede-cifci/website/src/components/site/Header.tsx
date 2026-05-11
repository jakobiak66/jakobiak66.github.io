import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

type NavItem = {
  label: string;
  to?: string;
};

const nav: NavItem[] = [
  { label: "Leistungen", to: "/leistungen" },
  { label: "Trauringe", to: "/trauringe" },
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Kontakt", to: "/kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container-x flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-background font-extrabold text-lg font-serif">
            C
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold text-foreground tracking-tight">Goldschmiede Cifci</span>
            <span className="text-xs text-muted-foreground">Karlsruhe · Seit 1992</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to!}
              className="opacity-80 hover:opacity-100 hover:text-gold transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+497212032810"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-sm hover:bg-gold hover:text-background transition"
          >
            <Phone className="size-4" />
            0721 / 2032810
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2"
            aria-label="Menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container-x flex flex-col py-6 gap-4">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.to!}
                onClick={() => setOpen(false)}
                className="text-base opacity-80 hover:opacity-100 hover:text-gold"
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+497212032810" className="text-base font-semibold text-gold">
              0721 / 2032810
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
