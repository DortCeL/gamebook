import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <img src="" alt="" />
      <p>Ismail AliF</p>
      <p>Saved</p>
      <p>Friends</p>
      <p>Videos</p>
      <p>Screenshots</p>
      <Button variant="dark " onClick={() => navigate("lol")}>
        Find Creators
      </Button>
    </>
  );
};

export default Sidebar;
