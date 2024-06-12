import {
  Container,
  Form,
  InputGroup,
  Table,
  Button,
  Spinner,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar/Topbar";
import { getData } from "../api/games";

const FindGames = () => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
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
                  <tr key={row.id} onClick={() => handleRowClick(row)}>
                    <td>{row.title}</td>
                    <td>{row.releaseDate}</td>
                    <td>{row.publisher}</td>
                    <td>
                      <Button variant="primary" className="mr-2">
                        Edit
                      </Button>
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Container>
      </div>
    </>
  );
};

export default FindGames;
