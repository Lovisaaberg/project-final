import { BrowserRouter } from "react-router-dom";
import { PlanetRoutes } from "./routes/PlanetRoutes";
import { PlanetsCarouselProvider } from "./contexts/PlanetsCarouselContext";
// import { Calculator } from "./components/Calculator";

//import { AllPlanets } from "./components/AllPlanets";
//import { SpaceFeed } from "./components/SpaceFeed"

export const App = () => {
  return (
    <>
    <PlanetsCarouselProvider>
      <BrowserRouter>
        <PlanetRoutes />
      </BrowserRouter>
      </PlanetsCarouselProvider>
    </>
  );
};

{
  /* <Calculator/>
<SpaceFeed /> */
}
