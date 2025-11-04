import React, { use, useEffect, useState } from 'react';
import Bottle from '../bottle/Bottle'
import './Bottles.css'
import { addToStoredCart, getStoreCart } from '../../utils/localstorage/localstorage';
import Cart from '../Cart/Cart';

const Bottles = ({ bottlesPromise }) => {
    const [cart, setCart] = useState([])

    const bottles = use(bottlesPromise);

    useEffect(() => {
        const storedCartIds = getStoreCart();
        console.log(storedCartIds, bottles);
const storedCart = [];
        for(const id of storedCartIds){
            console.log(id);
            
            

            const cartBottle = bottles.find(bottle => bottle.id === id);
            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }

        console.log('stored cart', storedCart);
        setCart(storedCart);
    }, [bottles])

    const handleAddToCart = (bottle) =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToStoredCart(bottle.id);
    }

        // console.log(bottles)
    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Added to cart: {cart.length}</p>
            <Cart cart={cart}></Cart>
            <div className='bottles-container'>
                {
                    bottles.map(bottle =>
                        <Bottle
                            key={bottle.id}
                            bottle={bottle}
                            handleAddToCart={handleAddToCart}>

                        </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;