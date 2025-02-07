/*
Checking if it's an Array
    -Create different variables, each containing either an array or a non-array value.
    -Now use isArray to check if each variable is an array.
    -Print a message to the console indicating whether each variable is an array or not.
*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//var
let bookList = ['darkhold', 'Macbeth', 'Hamlet'];
let age = 32;
let letter = 'A';
let sentence = "Hello, I am Swarup!";

//check
console.log(`bookList is an Array : ${Array.isArray(bookList)}`);
console.log(`age is an Array : ${Array.isArray(age)}`);
console.log(`letter is an Array : ${Array.isArray(letter)}`);
console.log(`sentence is an Array : ${Array.isArray(sentence)}`);