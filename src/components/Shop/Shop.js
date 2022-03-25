import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        // console.log(newCart);
        setCart(newCart)
    }

  return (
    <div className="shop-container">
        <div className="shop">
                <div className="products">
                    {
                        products.map(product => <Products 
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                            ></Products>)
                    }
                </div>

                <div className="cart">
                    <h2>Cart Section</h2>
                    <Cart cart={cart}></Cart>
                </div>
        </div>
    </div>
  );
};

export default Shop;
