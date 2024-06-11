import "./App.css";
import FindCreators from "./pages/FindCreators";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import FindGames from "./pages/FindGames";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/lol" element={<FindCreators />} />
          <Route path="/my-games" element={<FindGames />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
