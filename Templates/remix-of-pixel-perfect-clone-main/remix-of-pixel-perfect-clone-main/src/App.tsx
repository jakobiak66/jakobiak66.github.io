import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Heizung from "./pages/leistungen/Heizung.tsx";
import Sanitaer from "./pages/leistungen/Sanitaer.tsx";
import Gas from "./pages/leistungen/Gas.tsx";
import Service from "./pages/leistungen/Service.tsx";
import Leistungen from "./pages/Leistungen.tsx";
import Kontakt from "./pages/Kontakt.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/leistungen/heizung" element={<Heizung />} />
          <Route path="/leistungen/sanitaer" element={<Sanitaer />} />
          <Route path="/leistungen/gas" element={<Gas />} />
          <Route path="/leistungen/service" element={<Service />} />
          <Route path="/kontakt" element={<Kontakt />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
