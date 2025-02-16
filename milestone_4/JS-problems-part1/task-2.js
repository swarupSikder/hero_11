/*
Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input (1): 
numbers = [5,6,11,12,98, 5]

find: 5
output: 2


sample-input (2):
numbers = [5,6,11,12,98, 5]

find: 25
output: 0

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
let numbers = [5, 6, 11, 12, 98, 5, 5];
let target = 5;
let count = 0;

for (const num of numbers) {
    if (num == target) {
        count++;
    }
}

console.log(`${count}`);