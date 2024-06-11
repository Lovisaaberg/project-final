import { Routes, Route } from "react-router-dom"
import { MassConverter } from "../components/MassConverter"
import { AllPlanets } from "../components/Planets/AllPlanets"
import { Planet } from "../components/Planets/Planet"
import { CelestialBodies } from "../components/Celestials/CelestialBodies"
import { LandingPage } from "../components/LandingPage"
import { NotFoundPage } from "../components/NotFoundPage"

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/planets" element={<AllPlanets />} />
      <Route path="/planets/:planet" element={<Planet />} />
      <Route path="/massconverter" element={<MassConverter />} />
      <Route path="/celestial/:name" element={<CelestialBodies />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/planets/*" element={<NotFoundPage />} />
      <Route path="/*" element={<NotFoundPage />} />
      
    </Routes>
  )
}
