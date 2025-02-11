/*
Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: 
const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:
[12, 98, 76, 46]

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);