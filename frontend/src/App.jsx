import { Fonts } from "./components/Fonts";
import { BrowserRouter } from "react-router-dom";
import { HomeRoutes } from "./routes/HomeRoutes";
import { Header } from "./components/Navigation/Header";

export const App = () => {
  return (
    <>
      <Fonts />
      <BrowserRouter>
        <Header />
        <HomeRoutes />
      </BrowserRouter>
    </>
  );
};
