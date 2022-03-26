import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);
    const {handleChooseOne} = props;
    const {random} = props;
    // console.log(random);

    return (
        <div className='cart-info'>
            <h2>Selected Items:</h2>
            {
                cart.map(product => <h4>{product.name}</h4>)
            }

            <button onClick={handleChooseOne} className='choose-btn'>Choose 1 For Me</button>
            <h5>This one for you: {random}</h5>
        </div>
    );
};

export default Cart;