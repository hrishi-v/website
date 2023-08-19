import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

import "./cart.css";
export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img className="image" src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
          <button className="delete" onClick={() => removeAll(id)}>            
            <img
              className="del-img"
              src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
