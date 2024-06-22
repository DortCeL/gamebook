import { useNavigate } from "react-router-dom";
import "./topbar.css";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import SignoutButton from "../SignoutButton";

export default function Topbar() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-primary navbar-dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>Gamebook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown
              title={
                <img
                  src="https://picsum.photos/200"
                  alt="Avatar"
                  className="avatar"
                />
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>My profile</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/my-games")}>
                My games
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item>
                <SignoutButton />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
