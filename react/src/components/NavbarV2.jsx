import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import "./NavbarV2.css";

export const NavbarV2 = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link id="title" to="/">
            Shop
          </Link>
        </li>
      </ul>
      <div className="small-links">
        <ul>
          <li>
            <Link to="/T-Shirts">T-Shirts</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link id="cart" to="/cart">
              <ShoppingCart size={32} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
