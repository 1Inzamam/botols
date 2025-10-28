import React from 'react';
import './Bottle.css'
const bottle = ({bottle, handleAddToCart}) => {
    const {img, name, price, stock, seller} = bottle;
   

    return (
        <div className='card bottle'>
            <img src={img} alt=""></img>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Available: {stock}</p>
            <p>Seller: {seller}</p>
            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default bottle;