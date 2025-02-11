/*
Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: 
var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:
'TomTimTinTik'

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let str = '';
for(const num of numbers){
    str += num;
}

console.log(str);

