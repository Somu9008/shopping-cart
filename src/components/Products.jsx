import React from "react";
import { ProductData } from "../data/ProductData";
import Product from "./Product";
import "./Products.css";

export default function Products() {
  return (
    <div className="products">
      {ProductData.map((item) => {
        return <Product key={item.id} {...item} />;
      })}
    </div>
  );
}
