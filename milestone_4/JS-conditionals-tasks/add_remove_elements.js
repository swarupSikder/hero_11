/*
Add or remove elements
    -Declare an array of 3 tourist destinations
    -Add a new tourist destination to your tourist array
    -Add two more to your array
    -Remove the last tourist destination you have added
    -display the final array as output
*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//array
let touristDST = ['jaflong', 'kuakata', 'sajek'];
console.log(touristDST);
touristDST.push('lalakhal');
console.log(touristDST);
touristDST.push('suvolong');
touristDST.push('inani');
console.log(touristDST);
touristDST.pop();
console.log(touristDST);