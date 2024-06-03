import { Routes, Route } from "react-router-dom";
import { SpaceFeed } from "../components/SpaceFeed";
import { Calculator } from "../components/Calculator";
import { FallBackPage } from "../components/FallBackPage";
import { AllPlanets } from "../components/AllPlanets";
import { Planet } from "../components/Planet";

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <SpaceFeed />
            <Calculator />
          </>
        }
      />
      <Route path="/" element={<AllPlanets />} />
      <Route path="/planets/:planet" element={<Planet />} />
      <Route path="*" element={<FallBackPage />} />
    </Routes>
  );
};
