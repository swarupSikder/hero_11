/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//input
let num1 = parseInt(lines.shift());
let num2 = parseInt(lines.shift());

(num1 > num2) ? console.log(`${2 * num1}`) : console.log(`${num1 + num2}`);