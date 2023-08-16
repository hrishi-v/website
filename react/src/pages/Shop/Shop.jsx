import UniversalNavBar from "../../components/UniversalNavBar";
import React from "react";
import CatalogueListing from "../../components/CatalogueListing";
import { PRODUCTS } from "../../products";

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
            <CatalogueListing data={product} />
          ))}
        </div>
      </div>
    </>
  );
};
