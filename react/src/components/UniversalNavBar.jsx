import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Form,
} from "react-bootstrap";

export default function UniversalNavBar() {
  return (
    <>
      <Navbar
        bsPrefix="navbar"
        className="bg-body-tertiary justify-content-between"
        data-bs-theme="dark"
        bg="dark"
        expand="lg"
      >
        <Container>
          <Navbar.Brand bsPrefix="web-title" href="/">
            Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/Tshirts">T-Shirts</Nav.Link>
              <Nav.Link href="/Hoodies">Hoodies and Outerwear</Nav.Link>
              <Form inline>
                <textarea
                  type="search"
                  className="search"
                  placeholder="Search..."
                ></textarea>
              </Form>
              <NavDropdown className="me-2 justify-content-end" title="Account">
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
