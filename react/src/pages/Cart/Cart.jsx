import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { useNavigate } from "react-router-dom";
import { CartItem } from "./Cart-Item";
import UniversalNavBar from "../../components/UniversalNavBar";
import { ShopContext } from "../../shop-context";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <>
      <UniversalNavBar />
      <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cart">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
      </div>
    </>
  );
};
