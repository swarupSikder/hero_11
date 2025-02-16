/*
Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
function checkEvenOdd (num) {
    return num%2==0;
}

let num, result;
num = 10;
(checkEvenOdd(num))? result = num/2 : result = num*2;
console.log(`${result}`);