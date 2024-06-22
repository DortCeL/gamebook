import {
  Container,
  Form,
  InputGroup,
  Table,
  Button,
  Spinner,
  Modal,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar/Topbar";
import { getData, updateGame, deleteGame } from "../api/games";

const FindGames = () => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editGame, setEditGame] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getData()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log("caught error", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    getData(formData)
      .then((response) => {
        setData(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRowClick = (row) => {
    navigate(`/details`, { state: { game: row } });
  };

  const handleEditClick = (game) => {
    setEditGame(game);
    setShowEditModal(true);
  };

  const handleDeleteClick = (id) => {
    setIsLoading(true);
    deleteGame(id)
      .then(() => {
        return getData();
      })
      .then((response) => {
        setData(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleEditChange = (e) => {
    setEditGame({
      ...editGame,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    updateGame(editGame)
      .then(() => {
        setShowEditModal(false);
        return getData();
      })
      .then((response) => {
        setData(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Topbar />
      <div>
        <Container>
          <h1 className="text-center mt-4">Games you own</h1>
          <Form className="my-5" onSubmit={onSubmit}>
            <InputGroup className="my-3">
              <Form.Control
                name="title"
                onChange={onChange}
                placeholder="Search by title"
              />
              <Form.Control
                name="releaseDate"
                onChange={onChange}
                placeholder="Search by year"
              />
              <Form.Control
                name="publisher"
                onChange={onChange}
                placeholder="Search by publisher"
              />
            </InputGroup>
            <Button type="submit">Search</Button>
          </Form>

          {isLoading ? (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Publisher</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    <td onClick={() => handleRowClick(row)}>{row.title}</td>
                    <td onClick={() => handleRowClick(row)}>
                      {row.releaseDate}
                    </td>
                    <td onClick={() => handleRowClick(row)}>{row.publisher}</td>
                    <td>
                      <Button
                        variant="primary"
                        className="mr-2"
                        onClick={() => handleEditClick(row)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteClick(row.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}

          <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleEditSubmit}>
                <Form.Group controlId="editTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={editGame.title}
                    onChange={handleEditChange}
                  />
                </Form.Group>
                <Form.Group controlId="editReleaseDate">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    type="number"
                    name="releaseDate"
                    value={editGame.releaseDate}
                    onChange={handleEditChange}
                  />
                </Form.Group>
                <Form.Group controlId="editPublisher">
                  <Form.Label>Publisher</Form.Label>
                  <Form.Control
                    type="text"
                    name="publisher"
                    value={editGame.publisher}
                    onChange={handleEditChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Container>
      </div>
    </>
  );
};

export default FindGames;
