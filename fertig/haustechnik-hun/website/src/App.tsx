import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Sanitaer from "./pages/Sanitaer.tsx";
import Heizung from "./pages/Heizung.tsx";
import Gasinstallationen from "./pages/Gasinstallationen.tsx";
import Notdienst from "./pages/Notdienst.tsx";
import Service from "./pages/Service.tsx";
import Aktuelles from "./pages/Aktuelles.tsx";
import Kontakt from "./pages/Kontakt.tsx";
import Anfahrt from "./pages/Anfahrt.tsx";
import Impressum from "./pages/Impressum.tsx";
import NotFound from "./pages/NotFound.tsx";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/haustechnik-hun">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ueber-uns" element={<About />} />
          <Route path="/leistungen/installation-sanitaer" element={<Sanitaer />} />
          <Route path="/leistungen/installation-heizgeraet" element={<Heizung />} />
          <Route path="/leistungen/gasinstallationen" element={<Gasinstallationen />} />
          <Route path="/notdienst" element={<Notdienst />} />
          <Route path="/service" element={<Service />} />
          <Route path="/aktuelles" element={<Aktuelles />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/anfahrt" element={<Anfahrt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
