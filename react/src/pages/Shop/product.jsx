// what should it contain?

/*  catalogue image, that could change on hover
delete button
move to bag button
product name    
price listing 

HTML DONE

add a function to take parameters, and change price, title, and catalogue images

        <div className="options">
          <Button bsPrefix="del-btn">
            <img
              className="del-img"
              src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
            />
          </Button>
          <Button bsPrefix="add-btn">
            <img
              className="addimg"
              src="https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png"
            />
          </Button>

*/
import { Button } from "react-bootstrap";
import { useState } from "react";
import React, { useContext } from "react";
import { ShopContext } from "../../components/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage}></img>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}{" "}
      </button>
    </div>
  );
};
