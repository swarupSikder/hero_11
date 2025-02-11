/*
Task-5:
Generate a random number between 10 to 20.

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
const lowerLimit = 10;
const upperLimit = 20;

const random = Math.floor(Math.random()* (upperLimit - lowerLimit + 1)) + 10;

console.log(`${random}`);
