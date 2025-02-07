/*
Combining Arrays
    -Create two arrays of your choice.
    -Use the concat method to combine the two arrays into a new array.
    -Print both the original arrays and the combined array using console.log().
*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//array
let list1 = [1,2,3,4,5];
let list2 = [6];

//concat
let list3 = list1.concat(list2);

//print
console.log(list1);
console.log(list2);
console.log(list3);