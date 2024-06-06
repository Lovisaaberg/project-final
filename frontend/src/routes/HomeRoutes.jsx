import { Routes, Route } from "react-router-dom";
import { SpaceFeed } from "../components/SpaceFeed";
import { MassConverter } from "../components/MassConverter";
import { AllPlanets } from "../components/Planets/AllPlanets";
import { PlanetsCarousel } from "../components/PlanetsCarousel";
import { Planet } from "../components/Planets/Planet";
import { CelestialBodies } from "../components/Celestials/CelestialBodies";
import { NotFoundPage } from "../components/NotFoundPage";

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <PlanetsCarousel />
            <SpaceFeed />
          </>
        }
      />
      <Route path="/planets" element={<AllPlanets />} />
      <Route path="/planets/:planet" element={<Planet />} />
      <Route path="/massconverter" element={<MassConverter />} />
      <Route path="/:name" element={<CelestialBodies />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
