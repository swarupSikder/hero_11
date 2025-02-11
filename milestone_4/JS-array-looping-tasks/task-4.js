/*
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: 
const statement = 'I am a hard working person'

Output:
'person working hard a am I'

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
const statement = 'I am a hard working person'
let arr = statement.split(' ');

let str = '';
for(const word of arr){
    str = word + ' ' + str;
}

console.log(str);

