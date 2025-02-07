/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//input
let myScore = parseInt(lines.shift());
let friendScore = parseInt(lines.shift());

if (myScore >= 80) {
    if (friendScore >= 80) {
        console.log(`go for a lunch`);
    }
    else if (60 <= friendScore && friendScore <= 79) {
        console.log(`good luck next time`);
    }
    else if (40 <= friendScore && friendScore <= 59) {
        console.log(`keep your friend's message unseen`);
    }
    else{
        console.log(`block your friend`);
    }
}
else {
    console.log(`go to home and sleep and act sad`);
}