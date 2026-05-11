import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import zealLogo from "@/assets/zeal-logo-badge.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [branchenOpen, setBranchenOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-all duration-300" role="banner">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4" role="navigation" aria-label="Hauptnavigation">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 transition-all duration-300 hover:opacity-80 hover:scale-105">
          <img src={zealLogo} alt="ZEAL Security Logo" className="h-12 w-auto animate-scale-in" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex" aria-label="Hauptmenü">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${isActive("/") ? "text-primary" : ""}`}>
                  Startseite
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm transition-all duration-300 hover:text-primary">Leistungen</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li>
                    <Link to="/leistungen/objektschutz" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:scale-[1.02] hover:shadow-sm">
                      <div className="text-sm font-medium">Objektschutz</div>
                      <p className="text-sm text-muted-foreground">Schutz für Gebäude & Flächen</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/leistungen/veranstaltungsschutz" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:scale-[1.02] hover:shadow-sm">
                      <div className="text-sm font-medium">Veranstaltungsschutz</div>
                      <p className="text-sm text-muted-foreground">Von Gala bis Konferenz</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/leistungen/retailschutz" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:scale-[1.02] hover:shadow-sm">
                      <div className="text-sm font-medium">Retailschutz</div>
                      <p className="text-sm text-muted-foreground">Sicherheit für den Einzelhandel</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/leistungen/brandschutz" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:scale-[1.02] hover:shadow-sm">
                      <div className="text-sm font-medium">Brandschutz</div>
                      <p className="text-sm text-muted-foreground">Sicherheit durch Vorsorge</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/leistungen/personenschutz" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:scale-[1.02] hover:shadow-sm">
                      <div className="text-sm font-medium">Personenschutz</div>
                      <p className="text-sm text-muted-foreground">Diskret, erfahren, professionell</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/leistungen/wertschutz" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:scale-[1.02] hover:shadow-sm">
                      <div className="text-sm font-medium">Schutz von Kunst & Werten</div>
                      <p className="text-sm text-muted-foreground">Kunst, Schmuck & sensible Assets</p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm transition-all duration-300 hover:text-primary">Branchen</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li>
                    <Link to="/branchen/hotellerie-luxus" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:scale-[1.02] hover:shadow-sm">
                      <div className="text-sm font-medium">Hotellerie & Luxus-Immobilien</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/branchen/kultur-museen" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:scale-[1.02] hover:shadow-sm">
                      <div className="text-sm font-medium">Kultur, Museen & Galerien</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/branchen/unternehmen-industrie" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:scale-[1.02] hover:shadow-sm">
                      <div className="text-sm font-medium">Unternehmen & Industrie</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/branchen/oeffentlich-events" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-smooth hover:bg-accent">
                      <div className="text-sm font-medium">Öffentliche Einrichtungen & Events</div>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/referenzen" className={`px-4 py-2 text-sm font-medium transition-smooth hover:text-primary ${isActive("/referenzen") ? "text-primary" : ""}`}>
                  Referenzen
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/ueber-uns" className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${isActive("/ueber-uns") ? "text-primary" : ""}`}>
                  Über uns
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/karriere" className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${isActive("/karriere") ? "text-primary" : ""}`}>
                  Karriere
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/kontakt" className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${isActive("/kontakt") ? "text-primary" : ""}`}>
                  Kontakt
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild className="gradient-primary shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 animate-glow">
            <a href="tel:+4916346299993">
              <Phone className="mr-2 h-4 w-4" />
              24/7 Notruf
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              aria-label="Hauptmenü öffnen"
              aria-expanded={isOpen}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Menü</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col gap-6 pt-8">
              <Link 
                to="/" 
                className="text-base font-medium py-2 animate-fade-in" 
                style={{ animationDelay: '0.05s', animationFillMode: 'both' }}
                onClick={() => setIsOpen(false)}
              >
                Startseite
              </Link>
              
              {/* Leistungen Dropdown */}
              <Collapsible open={leistungenOpen} onOpenChange={setLeistungenOpen}>
                <CollapsibleTrigger 
                  className="flex w-full items-center justify-between text-base font-medium py-2 animate-fade-in"
                  style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
                >
                  Leistungen
                  <ChevronDown className={`h-5 w-5 transition-transform ${leistungenOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 pt-3 flex flex-col gap-4">
                  <Link to="/leistungen/objektschutz" className="text-sm py-1.5" onClick={() => setIsOpen(false)}>
                    Objektschutz
                  </Link>
                  <Link to="/leistungen/veranstaltungsschutz" className="text-sm py-1.5" onClick={() => setIsOpen(false)}>
                    Veranstaltungsschutz
                  </Link>
                  <Link to="/leistungen/retailschutz" className="text-sm py-1.5" onClick={() => setIsOpen(false)}>
                    Retailschutz
                  </Link>
                  <Link to="/leistungen/brandschutz" className="text-sm py-1.5" onClick={() => setIsOpen(false)}>
                    Brandschutz
                  </Link>
                  <Link to="/leistungen/personenschutz" className="text-sm py-1.5" onClick={() => setIsOpen(false)}>
                    Personenschutz
                  </Link>
                  <Link to="/leistungen/wertschutz" className="text-sm py-1.5" onClick={() => setIsOpen(false)}>
                    Schutz von Kunst & Werten
                  </Link>
                </CollapsibleContent>
              </Collapsible>

              {/* Branchen Dropdown */}
              <Collapsible open={branchenOpen} onOpenChange={setBranchenOpen}>
                <CollapsibleTrigger 
                  className="flex w-full items-center justify-between text-base font-medium py-2 animate-fade-in"
                  style={{ animationDelay: '0.15s', animationFillMode: 'both' }}
                >
                  Branchen
                  <ChevronDown className={`h-5 w-5 transition-transform ${branchenOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 pt-3 flex flex-col gap-4">
                  <Link to="/branchen/hotellerie-luxus" className="text-sm py-1.5" onClick={() => setIsOpen(false)}>
                    Hotellerie & Luxus-Immobilien
                  </Link>
                  <Link to="/branchen/kultur-museen" className="text-sm py-1.5" onClick={() => setIsOpen(false)}>
                    Kultur, Museen & Galerien
                  </Link>
                  <Link to="/branchen/unternehmen-industrie" className="text-sm py-1.5" onClick={() => setIsOpen(false)}>
                    Unternehmen & Industrie
                  </Link>
                  <Link to="/branchen/oeffentlich-events" className="text-sm py-1.5" onClick={() => setIsOpen(false)}>
                    Öffentliche Einrichtungen & Events
                  </Link>
                </CollapsibleContent>
              </Collapsible>

              <Link 
                to="/referenzen" 
                className="text-base font-medium py-2 animate-fade-in"
                style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
                onClick={() => setIsOpen(false)}
              >
                Referenzen
              </Link>
              <Link 
                to="/ueber-uns" 
                className="text-base font-medium py-2 animate-fade-in"
                style={{ animationDelay: '0.25s', animationFillMode: 'both' }}
                onClick={() => setIsOpen(false)}
              >
                Über uns
              </Link>
              <Link 
                to="/karriere" 
                className="text-base font-medium py-2 animate-fade-in"
                style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
                onClick={() => setIsOpen(false)}
              >
                Karriere
              </Link>
              <Link 
                to="/kontakt" 
                className="text-base font-medium py-2 animate-fade-in"
                style={{ animationDelay: '0.35s', animationFillMode: 'both' }}
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </Link>
              <Button 
                asChild 
                className="gradient-primary mt-4 animate-fade-in"
                style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
              >
                <a href="tel:+4916346299993">
                  <Phone className="mr-2 h-4 w-4" />
                  24/7 Notruf
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navigation;
