import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const leistungenItems = [
  { label: "Heizungsinstallation", to: "/leistungen/heizungstechnik" },
  { label: "Sanitärinstallation", to: "/leistungen/bad-und-sanitaerinstallation" },
  { label: "Lüftungsanlagen", to: "/leistungen/wohnraumlueftung" },
  { label: "Kälte- & Klimaanlagen", to: "/leistungen/solartechnik" },
  { label: "Service & Wartung", to: "/leistungen/wasseraufbereitung" },
];

type NavItem = { label: string; href?: string; to?: string };

const otherNavItems: NavItem[] = [
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Referenzen", to: "/referenzen" },
  { label: "Jobs", to: "/jobs" },
  { label: "Kontakt", to: "/kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);

  return (
    <header className="relative z-50 bg-background border-b border-border">
      <div className="container-page flex items-center justify-between py-5">
        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className="text-sm font-medium text-foreground hover:text-brand transition-colors"
          >
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setLeistungenOpen(true)}
            onMouseLeave={() => setLeistungenOpen(false)}
          >
            <button
              type="button"
              onClick={() => setLeistungenOpen((v) => !v)}
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-brand transition-colors cursor-pointer"
            >
              Leistungen
              <ChevronDown size={14} />
            </button>
            {leistungenOpen && (
              <div className="absolute left-0 top-full pt-3">
                <div className="min-w-[220px] bg-background border border-border rounded-md shadow-card-lg py-2">
                  {leistungenItems.map((it) => (
                    <Link
                      key={it.label}
                      to={it.to}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-surface hover:text-brand transition-colors"
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {otherNavItems.map((n) =>
            n.to ? (
              <Link
                key={n.label}
                to={n.to}
                className="text-sm font-medium text-foreground hover:text-brand transition-colors"
              >
                {n.label}
              </Link>
            ) : (
              <a
                key={n.label}
                href={n.href}
                className="text-sm font-medium text-foreground hover:text-brand transition-colors"
              >
                {n.label}
              </a>
            ),
          )}
        </nav>
        <Link to="/" className="mr-auto md:mr-0 md:ml-0 flex items-center select-none order-first md:order-none gap-2">
          <img
            src="/swa-berlin/images/logo.png"
            alt="SWA Berlin GmbH Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>
        <button
          aria-label="Menü"
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container-page py-4 flex flex-col gap-3">
            <Link to="/" className="text-sm font-medium text-foreground">
              Home
            </Link>
            <span className="text-sm font-medium text-foreground">
              Leistungen
            </span>
            {leistungenItems.map((it) => (
              <Link
                key={it.label}
                to={it.to}
                className="pl-4 text-sm text-muted-foreground hover:text-brand"
              >
                — {it.label}
              </Link>
            ))}
            {otherNavItems.map((n) =>
              n.to ? (
                <Link key={n.label} to={n.to} className="text-sm font-medium text-foreground">
                  {n.label}
                </Link>
              ) : (
                <a key={n.label} href={n.href} className="text-sm font-medium text-foreground">
                  {n.label}
                </a>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}
