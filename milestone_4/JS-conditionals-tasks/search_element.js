/*
Checking Array Membership with ‘includes’
    -Create an array of books containing different book.
    -Use the includes method to check if the array contains a javascript book.
    -Print a message to the console indicating whether the element is present in the array or not.
*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//array
let bookList = ['darkhold', 'Macbeth', 'Hamlet'];
let searchItem = 'javascript';
console.log(`${searchItem} exists : ${bookList.includes(searchItem)}`);
bookList.push(searchItem);
console.log(`${searchItem} exists : ${bookList.includes(searchItem)}`);