/*
Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
const heights2 = [167, 190, 120, 165, 137];
let mn = Number.MAX_VALUE;
for(const n of heights2){
    if(n < mn){
        mn = n;
    }
}

console.log(`${mn}`);
