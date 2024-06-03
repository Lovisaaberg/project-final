import { BrowserRouter } from "react-router-dom";
import { HomeRoutes } from "./routes/HomeRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      <HomeRoutes />
    </BrowserRouter>
  );
};

{
  /* 
  <PlanetsCarouselProvider/>
  //import { PlanetsCarouselProvider } from "../src/contexts/PlanetsCarouselContext";
*/
}
