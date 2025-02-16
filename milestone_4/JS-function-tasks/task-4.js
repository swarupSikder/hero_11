/*
Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
function count_zero(str) {
    let cnt = 0;
    for(let i=0; i<str.length ;i++){
        if(str[i] == '0'){
            cnt++;
        }
    }

    return cnt;
}

let binaryString = "0000011111100010101";
console.log(`${count_zero(binaryString)}`);