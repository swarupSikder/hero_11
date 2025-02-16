/*
Task-1
Take four parameters. Multiply the four numbers and then return the result

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
function multiply (a,b,c,d) {
    return a*b*c*d;
}

let num1, num2, num3, num4;
num1 = 10;
num2 = 6;
num3 = 7;
num4 = 4;

console.log(`${multiply(num1, num2, num3, num4)}`);