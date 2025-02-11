/*
Task-3:
    Check whether a string contains all the vowels a, e, i, o, u
*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
let str = lines.shift();
let vowels = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < str.length; i++) {
    for (const vowel of vowels) {
        if (str[i].toLowerCase() == vowel) {
            const index = vowels.indexOf(vowel);
            vowels.splice(index, 1);
        }
    }
}

//print
(vowels.length == 0)? console.log(`YES`) : console.log(`NO`);;