import React from 'react';
import './Cart.css'
const Cart = (props) => {
   const cart = props.cart;
    return (
        <div>
             <div className="cart-container">
        
       <h5> Request has been sent to <p className="cart-name">{cart.name}</p>Username: {cart.username}</h5>
        </div>
        </div>
       
    );
};

export default Cart;