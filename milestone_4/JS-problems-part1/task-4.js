/*
Task-4:
Write a function to find the longest word in a given string.

sample-input: 
I am learning Programming to become a programmer

sample-output: 
Programming

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
let sentence = 'I am learning Programming to become a programmer';
let words = sentence.split(' ');
let mx = 0;
let maxWord = '';

for(const word of words){
    // console.log(word.length);
    if(word.length > mx){
        mx = word.length;
        maxWord = word;
    }
}

console.log(`${maxWord}`);
