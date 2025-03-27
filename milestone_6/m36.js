const saveToLocalStorage = () => {
    const itemName = document.getElementById('item-name').value;
    const quantity = document.getElementById('quantity').value;

    if (!itemName || !quantity) {
        alert("Please enter both item name and quantity.");
        return;
    }

    // Get data from LS
    const cart = getItemFromLS();
    cart[itemName] = parseInt(quantity, 10); // Ensure quantity is stored as a number
    localStorage.setItem("cart", JSON.stringify(cart));

    // Reset inputs
    document.getElementById('item-name').value = "";
    document.getElementById('quantity').value = "";

    // Refresh display
    displayCart();
};

const displayCart = () => {
    const cart = getItemFromLS();
    
    const parent = document.getElementById('cart-container');
    parent.innerHTML = ""; // Clear existing list before rendering

    for (const item in cart) {
        createNewElement(item, cart[item]);
    }
};

const createNewElement = (itemName, quantity) => {
    // Parent
    const parent = document.getElementById('cart-container');

    // Create child
    const li = document.createElement('li');
    li.innerText = `${itemName}: ${quantity}`;

    // Append
    parent.appendChild(li);
};

const getItemFromLS = () => {
    let cart = {};
    const getCart = localStorage.getItem("cart");

    if (getCart) {
        cart = JSON.parse(getCart);
    }
    return cart;
};

// Display the cart when the page loads
displayCart();
