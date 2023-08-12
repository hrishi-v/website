import { NavDropdown, Button } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function SimpleAccount() {
  return (
    <div className="account">
      <NavDropdown className="account" title="Account">
        <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
        <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Profile">Your Profile</NavDropdown.Item>
        <NavDropdown.Item href="/Login">Saved Items</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}
