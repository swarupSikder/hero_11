/*
Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: 
const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:
['orange', 'yellow', 'green', 'blue', 'red']

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const revColors = [];

for(const color of colors){
    revColors.unshift(color)
}

console.log(revColors);