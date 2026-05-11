import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/index";
import Leistungen from "./routes/leistungen";
import Trauringe from "./routes/trauringe";
import UeberUns from "./routes/ueber-uns";
import Kontakt from "./routes/kontakt";
import Impressum from "./routes/impressum";
import Datenschutz from "./routes/datenschutz";

export default function App() {
  return (
    <BrowserRouter basename="/goldschmiede-cifci">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leistungen" element={<Leistungen />} />
        <Route path="/trauringe" element={<Trauringe />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
