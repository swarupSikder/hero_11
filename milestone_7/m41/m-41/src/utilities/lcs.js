const getCartFromLS = () => {
    const storedCartString = localStorage.getItem('cart');

    if(storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const saveCartToLS = cart => {
    const cartToStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartToStringified);
}

const addItemToCartLS = id => {
    const cart = getCartFromLS();
    const newCart = [...cart, id];

    //save new cart to the local storage
    saveCartToLS(newCart);
}

const removeItemFromCartLS = id => {
    const cart = getCartFromLS();
    const newCart = cart.filter(newId => newId!==id);
    saveCartToLS(newCart);
}

export {
    getCartFromLS as getCart,
    addItemToCartLS as addCart,
    removeItemFromCartLS as removeFromCart
}