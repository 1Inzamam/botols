import React from 'react';
import './Bottle.css'
const bottle = ({bottle}) => {
    const {img, name, price, stock, seller} = bottle;
    console.log(bottle);

    return (
        <div className='card bottle'>
            <img src={img} alt=""></img>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Available: {stock}</p>
            <p>Seller: {seller}</p>
            <button>Buy Now</button>
        </div>
    );
};

export default bottle;