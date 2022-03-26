import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart, handleChooseOne, random, removeAll} = props;
    // console.log(cart);

    
    

    return (
        <div className='cart-info'>
            <h2>Selected Items:</h2>
            {
                cart.map(product => <h4>{product.name}</h4>)
            }

            <button onClick={handleChooseOne} className='choose-btn'>Choose 1 For Me</button>
            <h5>This one for you: {random}</h5>

            <button onClick={removeAll} className='choose-agian-btn'>Choose again</button>
        </div>
    );
};

export default Cart;