import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { useNavigate } from "react-router-dom";
import { CartItem } from "./Cart-Item";
import { ShopContext } from "../../context/shop-context";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  console.log(cartItems);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            // this is the line that needs modifying, if I increment in the cart, the cartitem is displayed
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>

      <div className="checkout">
        <p> Subtotal: ${totalAmount} </p>
        <button onClick={() => navigate("/")}> Continue Shopping </button>
        <button
          onClick={() => {
            checkout();
            navigate("/Checkout");
          }}
        >
          {" "}
          Checkout{" "}
        </button>
      </div>
    </div>
  );
};
