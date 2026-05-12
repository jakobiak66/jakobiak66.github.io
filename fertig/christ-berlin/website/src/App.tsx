import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/index";
import UeberUns from "./routes/ueber-uns";
import Kontakt from "./routes/kontakt";
import Impressum from "./routes/impressum";
import Datenschutz from "./routes/datenschutz";
import Heizungstechnik from "./routes/leistungen.heizungstechnik";
import BadSanitaer from "./routes/leistungen.bad-und-sanitaerinstallation";
import Solartechnik from "./routes/leistungen.solartechnik";
import Schornsteinbau from "./routes/leistungen.schornsteinbau";
import Kamine from "./routes/leistungen.kamine";
import Energieberatung from "./routes/leistungen.energieberatung";
import Regenwassernutzung from "./routes/leistungen.regenwassernutzung";

export default function App() {
  return (
    <BrowserRouter basename="/christ-berlin">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/leistungen/heizungstechnik" element={<Heizungstechnik />} />
        <Route path="/leistungen/bad-und-sanitaerinstallation" element={<BadSanitaer />} />
        <Route path="/leistungen/solartechnik" element={<Solartechnik />} />
        <Route path="/leistungen/schornsteinbau" element={<Schornsteinbau />} />
        <Route path="/leistungen/kamine" element={<Kamine />} />
        <Route path="/leistungen/energieberatung" element={<Energieberatung />} />
        <Route path="/leistungen/regenwassernutzung" element={<Regenwassernutzung />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
