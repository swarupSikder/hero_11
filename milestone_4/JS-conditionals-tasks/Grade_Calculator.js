/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//input
let score = parseInt(lines.shift());

//condition
if(score >= 90){
    console.log(`A`);
}
else if(80<=score && score<= 89){
    console.log(`B`);
}
else if(70<=score && score<= 79){
    console.log(`C`);
}
else if(60<=score && score<= 69){
    console.log(`D`);
}
else {
    console.log(`F`);
}