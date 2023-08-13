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
import { useState } from "react";

export default function CatalogueListing() {
  return (
    <>
      <div className="product-img-div">
        <img
          className="responsive"
          src="https://images.asos-media.com/products/nike-all-over-logo-bandana-in-white/204134625-1-white?$n_640w$&wid=513&fit=constrain"
        ></img>
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
        </div>
      </div>
      <div className="product-info">
        <h5 className="product-name">Nike all over logo bandana</h5>
        <h6 className="price">$25.00</h6>
      </div>
    </>
  );
}
