import { Container } from "react-bootstrap";

import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";

function LandingPage() {
  return (
    <>
      <Topbar />
      <Container fluid className="d-flex p-0" style={{ height: "100vh" }}>
        <div style={{ flex: 0.5, backgroundColor: "#f8f911" }}>
          <Sidebar />
        </div>
        <div style={{ flex: 2, backgroundColor: "#f8f9fa" }}>
          <Feed />
        </div>
        <div style={{ flex: 0.75, backgroundColor: "#e9ec11" }}>
          <Rightbar />
        </div>
      </Container>
    </>
  );
}

export default LandingPage;
