import SimpleAccountDropdown from "./SimpleAccount";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Landing_NB() {
  return (
    <Navbar data-bs-theme="dark" bg="dark" className="nav">
      <Container>
        <Navbar.Brand href="/">Our Store</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/Tshirts">T-Shirts</Nav.Link>
          <Nav.Link href="/Hoodies">Hoodies and Outerwear</Nav.Link>
          <SimpleAccountDropdown />
        </Nav>
      </Container>
    </Navbar>
  );
}
