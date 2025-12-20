import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

function ColorSchemesExample() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar fixed="top" bg="dark" data-bs-theme="dark" dir="ltr">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            GPA Calculator
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/semester")}>Semester GPA</Nav.Link>
            <Nav.Link onClick={() => navigate("/cumulative")}>Cumulative GPA</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;