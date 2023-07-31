import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
            <img src={"./logo.png"}
            width="183.7"
            height="71"
            className="d-inline-block align-top"
            alt="Target Arc Logo"/>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/uploadpage">Upload</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/parkingpage">Parking</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/reviewpage">Review</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/finalpage">Final</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="pk study"
              className="me-2"
              aria-label="Search"
              data-bs-theme="light"
            />
            <Button variant="light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}