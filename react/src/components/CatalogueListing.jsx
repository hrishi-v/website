// what should it contain?

/*  catalogue image, that could change on hover
delete button
move to bag button
product name    
price listing 

HTML DONE

add a function to take parameters, and change price, title, and catalogue images
*/
import { Button } from "react-bootstrap";
import { ShopContext } from "../shop-context";
import React, { useContext } from "react";

export const CatalogueListing = () => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <>
      <div className="product">
        <img className="responsive" src={productImage}></img>
        <div className="options">
          <Button bsPrefix="del-btn">
            <img
              className="del-img"
              src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
            />
            <div className="description">
              <p>
                <b>{productName}</b>
              </p>
              <p>${price}</p>
            </div>
          </Button>
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            <img
              className="addimg"
              src="https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png"
            />{" "}
            {cartItemCount > 0 && <>({cartItemCount})</>}
          </button>
        </div>
      </div>
    </>
  );
};
