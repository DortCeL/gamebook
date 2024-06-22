import "./App.css";
import FindCreators from "./pages/FindCreators";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/LandingPage";
import FindGames from "./pages/FindGames";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/lol" element={<FindCreators />} />
          <Route path="/my-games" element={<FindGames />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
