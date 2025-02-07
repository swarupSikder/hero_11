/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//input
let age = parseInt(lines.shift());
let fare = 800;

if(age < 10){
    console.log(`free`);
}
else if(10<=age && age<=24){
    console.log(`${fare/2}`);
}
else if(25<=age && age<=59){
    console.log(`${fare}`);
}
else{
    console.log(`${fare-fare*15/100}`);
}