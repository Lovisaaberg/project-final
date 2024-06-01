import { Routes, Route } from "react-router-dom";
import { AllPlanets } from "../components/AllPlanets";
import { Planet } from "../components/Planet";

export const PlanetRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AllPlanets />} />
      <Route path="/:planet" element={<Planet />} />
    </Routes>
  );
};
