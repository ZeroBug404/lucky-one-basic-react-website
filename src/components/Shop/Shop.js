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
        <div className="answers">
            <h2>
                Q: How React works?
                <p>Ans: React use a virtual dom to identify the changes part. They match with the DOM and find that specific part and add it specifically to the real DOM.
                React works through oneway data binding. Data flow is unidirectional.</p>
            </h2>
            <h2>
                Q: Props vs State
                <p>Ans: Props can be changed. State changes asynchronously. Props is read-only.
                States are mutable but props are immutable.
                We made a change in state and props are used to send that data.</p>
            </h2>
        </div>
    </div>
  );
};

export default Shop;
