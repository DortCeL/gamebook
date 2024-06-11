import { Container, Form, InputGroup, Table } from "react-bootstrap";
import { users } from "../api/data";
import { useState } from "react";
import Topbar from "../components/Topbar/Topbar";

const FindCreators = () => {
  const [search_gamertag, setSearch_gamertag] = useState("");
  const [search_name, setSearch_name] = useState("");
  const [search_nationality, setSearch_nationality] = useState("");
  const [search_gender, setSearch_gender] = useState("");

  return (
    <>
      <Topbar />
      <div>
        <Container>
          <h1 className="text-center mt-4">Find Gamers</h1>
          <Form className="my-5">
            <InputGroup className="my-3">
              <Form.Control
                onChange={(e) => setSearch_gamertag(e.target.value)}
                placeholder="Gamertag"
              ></Form.Control>

              <Form.Control
                onChange={(e) => setSearch_name(e.target.value)}
                placeholder="Name"
              ></Form.Control>

              <Form.Control
                onChange={(e) => setSearch_gender(e.target.value)}
                placeholder="Gender"
              ></Form.Control>

              <Form.Control
                onChange={(e) => setSearch_nationality(e.target.value)}
                placeholder="Nationality"
              ></Form.Control>
            </InputGroup>
          </Form>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Gamertag</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Nationality</th>
                <th>Age</th>
              </tr>
            </thead>

            <tbody>
              {users
                .filter((item) => {
                  const query_gamertag = search_gamertag.trim().toLowerCase();
                  const query_name = search_name.trim().toLowerCase();
                  const query_nationality = search_nationality
                    .trim()
                    .toLowerCase();
                  const query_gender = search_gender.trim().toLowerCase();

                  if (
                    query_gamertag === "" &&
                    query_name === "" &&
                    query_gender === "" &&
                    query_nationality === ""
                  ) {
                    return item;
                  } else
                    return (
                      item.gamertag.toLowerCase().includes(query_gamertag) &&
                      item.name.toLowerCase().includes(query_name) &&
                      item.gender.toLowerCase().includes(query_gender) &&
                      item.nationality.toLowerCase().includes(query_nationality)
                    );
                })
                .map((item) => (
                  <tr key={item.id}>
                    <td>{item.gamertag}</td>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.nationality}</td>
                    <td>{item.age}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
};

export default FindCreators;
