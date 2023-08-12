import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import "./styles.css";

export default function Landing_NB() {
  return (
    <>
      <Navbar data-bs-theme="dark" bg="dark" width="lg" className="nav">
        <Container>
          <Navbar.Brand href="/">Our Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="container-fluid">
              <Nav.Link href="/Tshirts">T-Shirts</Nav.Link>
              <Nav.Link href="/Hoodies">Hoodies and Outerwear</Nav.Link>
              <NavDropdown className="ms-auto" title="Account">
                <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Profile">
                  Your Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="/Liked">Liked Items</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
