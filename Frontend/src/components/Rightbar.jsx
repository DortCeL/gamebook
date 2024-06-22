import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Rightbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button variant="success" onClick={() => navigate("my-games")}>
        My Games List
      </Button>
    </>
  );
};

export default Rightbar;
