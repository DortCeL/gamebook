import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar/Topbar";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <Topbar />
      <h1>Welcome to my fucking website</h1>
      <button onClick={() => navigate("lol")}>Find Creators</button>
    </>
  );
}

export default LandingPage;
