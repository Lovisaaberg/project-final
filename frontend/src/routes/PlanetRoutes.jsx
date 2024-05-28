import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PlanetCards } from "../components/PlanetCards";
import { ShowPlanet } from "../components/ShowPlanet";

export const PlanetRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mercury" element={<PlanetCards />} />
        <Route path="/venus" element={<PlanetCards />} />
        <Route path="/tellus" element={<PlanetCards />} />
        <Route path="/mars" element={<PlanetCards />} />
        <Route path="/jupiter" element={<PlanetCards />} />
        <Route path="/saturn" element={<PlanetCards />} />
        <Route path="/neptune" element={<PlanetCards />} />
        <Route path="/uranus" element={<PlanetCards />} />
        <Route path="/planets/:name" element={<ShowPlanet />} />
      </Routes>
    </BrowserRouter>
  );
};
