/*
Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
function odd_even(num) {
    if (num % 2 == 0) {
        return "even";
    }
    else{
        return "odd";
    }
}

let number = 24;
console.log(`${odd_even(number)}`);