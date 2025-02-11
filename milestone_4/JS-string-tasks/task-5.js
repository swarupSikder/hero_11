/*
Task-4:
    If a given string has either x, replace x by y. if the given string has X, replace it by Y.
*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
let str = lines.shift();
let newStr = str.toLowerCase();
let words = newStr.split(' ');
let result = '';

for(const word of words){
    let newChar = word.charAt(0).toUpperCase()
    //console.log(newChar + word.slice(1, word.length) + ' ');
    result += newChar + word.slice(1, word.length) + ' ';
}

//print
console.log(result);