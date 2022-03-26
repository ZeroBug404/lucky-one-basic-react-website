/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [random, setRandom] = useState([])
    const [rmvCart, setRmvCart] = useState([])

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) => {
        let newCart = [...cart, product];
        // console.log(newCart);
        setCart(newCart)
    }

    const handleChooseOne = () => {
        
        const ranDomOne = cart[Math.floor(Math.random() * cart.length)];
        const choosenOne = ranDomOne.name;
        setRandom(choosenOne);
    }

    const removeAll = () => {
        // console.log(cart); 
        cart.splice(0, cart.length);
        setRmvCart(cart)
    };

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
                    <Cart 
                    cart={cart}
                    random={random}
                    removeAll={removeAll}
                    handleChooseOne={handleChooseOne}
                    ></Cart>
                </div>
        </div>
    </div>
  );
};

export default Shop;
