/*
Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
let celsius = 36;
let fahrenheit = (celsius*9/5) + 32;
console.log(fahrenheit);