/*
Task-4:
    If a given string has either x, replace x by y. if the given string has X, replace it by Y.
*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
let str = lines.shift();
let arr = str.split('');

for(let i=0; i<arr.length ;i++){
    if(arr[i] == 'x'){
        arr[i] = 'y';
    }

    if(arr[i] == 'X'){
        arr[i] = 'Y';
    }
}

//let newStr = str.replace(/o/g, 'a');

//print
str = arr.join('');
console.log(str);