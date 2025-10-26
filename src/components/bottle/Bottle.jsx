import React from 'react';

const bottle = ({bottle}) => {
    console.log(bottle);

    return (
        <div>
            <img src={bottle.img} alt=""></img>
        </div>
    );
};

export default bottle;