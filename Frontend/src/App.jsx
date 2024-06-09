import "./App.css";
import FindCreators from "./pages/FindCreators";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/lol" element={<FindCreators />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
