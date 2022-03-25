import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);

    return (
        <div>
            <h4>Selected Items: {cart.length}</h4>
            {
                cart.map(product => <h4>{product.name}</h4>)
            }
        </div>
    );
};

export default Cart;