import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/index";
import UeberUns from "./routes/ueber-uns";
import Kontakt from "./routes/kontakt";
import Impressum from "./routes/impressum";
import Datenschutz from "./routes/datenschutz";
import Referenzen from "./routes/referenzen";
import Jobs from "./routes/jobs";
import Heizungstechnik from "./routes/leistungen.heizungstechnik";
import BadSanitaer from "./routes/leistungen.bad-und-sanitaerinstallation";
import Solartechnik from "./routes/leistungen.solartechnik";
import Wohnraumlueftung from "./routes/leistungen.wohnraumlueftung";
import Wasseraufbereitung from "./routes/leistungen.wasseraufbereitung";

export default function App() {
  return (
    <BrowserRouter basename="/swa-berlin">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/referenzen" element={<Referenzen />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/leistungen/heizungstechnik" element={<Heizungstechnik />} />
        <Route path="/leistungen/bad-und-sanitaerinstallation" element={<BadSanitaer />} />
        <Route path="/leistungen/solartechnik" element={<Solartechnik />} />
        <Route path="/leistungen/wohnraumlueftung" element={<Wohnraumlueftung />} />
        <Route path="/leistungen/wasseraufbereitung" element={<Wasseraufbereitung />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
