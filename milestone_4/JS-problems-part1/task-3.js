/*
Task-3:
Write a function to count the number of vowels in a string.

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
let sentence = 'I am a developer';
let count = 0;

for(let i=0; i<sentence.length ;i++){
    if( sentence[i]=='a' ||
        sentence[i]=='e' ||
        sentence[i]=='i' ||
        sentence[i]=='o' ||
        sentence[i]=='u' ||
        sentence[i]=='A' ||
        sentence[i]=='E' ||
        sentence[i]=='I' ||
        sentence[i]=='O' ||
        sentence[i]=='U'
    ){
        count++;
    }
}

console.log(`${count}`);
