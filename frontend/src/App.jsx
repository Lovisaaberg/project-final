import GlobalStyles from "./components/GlobalStyles"
import { BrowserRouter } from "react-router-dom"
import { HomeRoutes } from "./routes/HomeRoutes"
import { Header } from "./components/Navigation/Header"
import { NotFoundPage } from "./components/NotFoundPage"

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <HomeRoutes />
        <NotFoundPage />
      </BrowserRouter>
    </>
  )
}
