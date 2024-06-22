import { Container, Button, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar/Topbar";

const DetailsPage = () => {
  const location = useLocation();
  const { game } = location.state;
  const navigate = useNavigate();

  return (
    <>
      <Topbar />
      <Container className="py-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{game.title}</Card.Title>
            <Card.Text>
              <strong>Year:</strong> {game.releaseDate}
              <br />
              <strong>Publisher:</strong> {game.publisher}
            </Card.Text>
            <Button variant="primary" onClick={() => navigate("/my-games")}>
              Go back
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default DetailsPage;
