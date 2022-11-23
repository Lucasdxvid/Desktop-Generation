import {NavDropdown, Navbar, Nav, Form, Container, Button} from "react-bootstrap";
import CartWidget from "./CartWidget";
import { FaSearch } from "react-icons/fa";

function NavCustom() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="navLogo"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#" className="navText">
              Inicio
            </Nav.Link>
            <NavDropdown
              title="Productos"
              id="navbarScrollingDropdown"
              className="navText"
            >
              <NavDropdown.Item href="#" className="navText">
                Componentes
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="navText">
                Periféricos y accesorios
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="navText">
                Equipos y Notebooks
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" className="navText">
                Otros
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Nav.Link href="#" className="navCartDiv">
              <CartWidget />
            </Nav.Link>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              id="navSearch"
              aria-label="Search"
            />
            <Button variant="outline-none" className="searchBtn">
              <FaSearch className="searchIcon" />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavCustom;
