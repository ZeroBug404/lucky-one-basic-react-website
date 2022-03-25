/* eslint-disable no-unused-vars */
import React from "react";
import "./Products.css";

const Products = (props) => {
  const { id, name, picture, price } = props.product;
  return (
    <div className="product">
      <img src={picture} alt="" />
      <div className="product-info">
        <h3>Name: {name}</h3>
        <h4>Price: ${price}</h4>
      </div>
      <button className="btn-cart">
        <p>Add To Cart</p>
      </button>
    </div>
  );
};

export default Products;
