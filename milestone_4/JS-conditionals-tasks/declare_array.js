/*
Declare an array
    -Declare an array with 5 elements containing fruits
    -console log the 3rd index element
    -change the value of the 2nd index element to jambura
    -console log the final array
*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//array
let fruits = ['apple', 'banana', 'jackfruit', 'strawberry', 'mango'];
console.log(`3rd Index = ${fruits[2]}`);
fruits[1] = 'jambura';
console.log(fruits);