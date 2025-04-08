import React from 'react';
import './Bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {

    const { image, name, price } = bottle;

    

    return (
        <div className='bottle-item'>
            <img src={image} className='bottle-image' alt="" />

            <div>
                <h3>Name: {name}</h3>
                <p>Price: ${price}</p>
                <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
            </div>
        </div>
    );
};

export default Bottle;