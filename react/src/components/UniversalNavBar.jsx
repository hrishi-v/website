import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Form,
} from "react-bootstrap";
import "./UniversalNavBar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export default function UniversalNavBar() {
  return (
    <>
      <Navbar
        className="bg-body-tertiary justify-content-between"
        data-bs-theme="dark"
        bg="myBlue"
        expand="lg"
      >
        <Container>
          <Navbar.Brand bsPrefix="web-title" href="/">
            Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Link className="links" to="/Tshirts">
                T-Shirts
              </Link>
              <Link className="links" to="/Hoodies">
                Hoodies and Outerwear
              </Link>
              <Form name="searchbar">
                <textarea
                  type="search"
                  className="search"
                  id="searchbar"
                  placeholder="Search..."
                ></textarea>
              </Form>
              <Link id="cart" to="/Cart">
                <ShoppingCart size={30}></ShoppingCart>
              </Link>
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
