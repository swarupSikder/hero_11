import React, { use, useEffect, useState } from 'react';
import Bottle from '../bottle/Bottle';
import './Bottles.css'
import { addCart, getCart, removeFrom, removeFromCart } from '../../utilities/lcs';

const Bottles = ({ bottlesPromise }) => {
    const [cart, setCart] = useState([]);
    const bottles = use(bottlesPromise);

    // useEffect
    useEffect(()=>{
        const storedCartIDs = getCart();
        const storedCart = [];

        for(const id of storedCartIDs){
            const cartBottle = bottles.find(bottle => bottle.id===id);
            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }

        setCart(storedCart);
    }, [bottles]);

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addCart(bottle.id);
    }

    const handleRemoveFromCart = id => {
        const remainingCart = cart.filter(bottle => bottle.id!==id);
        setCart(remainingCart);
        removeFromCart(id);
    }

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Added To cart: {cart.length}</p>
            <div className='bottle-container'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        handleAddToCart={handleAddToCart}
                        bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;