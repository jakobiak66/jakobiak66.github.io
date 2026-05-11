import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Personenschutz from "./pages/Personenschutz";
import Objektschutz from "./pages/Objektschutz";
import Veranstaltungsschutz from "./pages/Veranstaltungsschutz";
import Wertschutz from "./pages/Wertschutz";
import Brandschutz from "./pages/Brandschutz";
import Retailschutz from "./pages/Retailschutz";
import HotellerieUndLuxus from "./pages/HotellerieUndLuxus";
import KulturUndMuseen from "./pages/KulturUndMuseen";
import UnternehmenUndIndustrie from "./pages/UnternehmenUndIndustrie";
import OeffentlichUndEvents from "./pages/OeffentlichUndEvents";
import Kontakt from "./pages/Kontakt";
import UeberUns from "./pages/UeberUns";
import Referenzen from "./pages/Referenzen";
import Karriere from "./pages/Karriere";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import Barrierefreiheit from "./pages/Barrierefreiheit";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { WhatsAppButton } from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <WhatsAppButton />
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Leistungen */}
            <Route path="/leistungen/personenschutz" element={<Personenschutz />} />
            <Route path="/leistungen/objektschutz" element={<Objektschutz />} />
            <Route path="/leistungen/veranstaltungsschutz" element={<Veranstaltungsschutz />} />
            <Route path="/leistungen/wertschutz" element={<Wertschutz />} />
            <Route path="/leistungen/brandschutz" element={<Brandschutz />} />
            <Route path="/leistungen/retailschutz" element={<Retailschutz />} />
            
            {/* Branchen */}
            <Route path="/branchen/hotellerie-luxus" element={<HotellerieUndLuxus />} />
            <Route path="/branchen/kultur-museen" element={<KulturUndMuseen />} />
            <Route path="/branchen/unternehmen-industrie" element={<UnternehmenUndIndustrie />} />
            <Route path="/branchen/oeffentlich-events" element={<OeffentlichUndEvents />} />
            
            {/* Weitere Seiten */}
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/referenzen" element={<Referenzen />} />
            <Route path="/karriere" element={<Karriere />} />
            
            {/* Rechtliches */}
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<AGB />} />
            <Route path="/barrierefreiheit" element={<Barrierefreiheit />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
