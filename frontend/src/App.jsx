import { BrowserRouter } from "react-router-dom";
import { PlanetRoutes } from "./routes/PlanetRoutes";
// import { Calculator } from "./components/Calculator";

//import { AllPlanets } from "./components/AllPlanets";
//import { SpaceFeed } from "./components/SpaceFeed"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <PlanetRoutes />
      </BrowserRouter>
    </>
  );
};

{
  /* <Calculator/>
<SpaceFeed /> */
}
