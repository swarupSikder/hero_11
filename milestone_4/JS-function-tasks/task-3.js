/*
Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
function make_avg(numbers, n) {
    let sum = 0;
    for(const number of numbers){
        sum += number;
    }

    return sum/n;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`${make_avg(numbers, numbers.length)}`);