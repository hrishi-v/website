import React from "react";
import { Product } from "./product";
import { PRODUCTS } from "../../products";
import UniversalNavBar from "../../components/UniversalNavBar";

import "./Shop.css";
export const Shop = () => {
  return (
    <>
      <UniversalNavBar />
      <div className="shop">
        <div className="shopTitle">
          <h1>Shop</h1>
        </div>

        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};
