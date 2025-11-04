import React from 'react';
import './Cart.css'
const cart = ({cart}) => {
    return (
        <div className='cart-container'>
          {
            cart.map(bottle =><div key={bottle.id}>
                <img src ={bottle.img} alt=""/>
            </div>)
        }
        </div>
    );
};

export default cart;