import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

  return (
    <div className="shop-container">
        <div className="shop">
                <div className="products">
                    {
                        products.map(product => <Products product={product}></Products>)
                    }
                </div>

                <div className="cart">
                <h2>Cart Section</h2>
                </div>
        </div>
    </div>
  );
};

export default Shop;
