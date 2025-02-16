/*
Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
function totalPrice(products) {
    let total = 0;
    for (const product of products) {
        total += product.price;
    }
    return total;
}

const products = [
    { item: 'laptop', price: 35000 },
    { item: 'tablet', price: 15000 },
    { item: 'mobile', price: 20000 },
]

console.log(`${totalPrice(products)}`);
