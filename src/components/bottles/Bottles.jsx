import React, { use } from 'react';
import Bottle from '../bottle/Bottle'
import './Bottles.css'
const Bottles = ({bottlesPromise}) => {
   const bottles = use(bottlesPromise);
    console.log(bottles)
    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
           <div className='bottles-container'>
            {
            bottles.map(bottle => 
            <Bottle 
                key={bottle.id} 
                bottle={bottle}>

                </Bottle>)
           }
           </div>
        </div>
    );
};

export default Bottles;