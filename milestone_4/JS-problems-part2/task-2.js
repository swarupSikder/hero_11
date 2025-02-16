/*
Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let mn = Number.MAX_VALUE;
let targetFriend = '';

for(const name of heights2){
    let nameLen = name.length;
    if(nameLen < mn){
        mn = nameLen;
        targetFriend = name;
    }
}

console.log(`${targetFriend}`);
