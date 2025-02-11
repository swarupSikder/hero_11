/*
Task-1:
    Count how many times a string has the letter a
*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
let str = lines.shift();
let count = 0;

for(let i=0; i<str.length ;i++){
    if(str[i] == 'a'){
        count++;
    }
}

//print
console.log(`${count}`);