/*
Task-5 (Hard)
Loop through an object and print the key-value pairs with their types

Input:
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

Output:
key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//main
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

// let keys = [];
// let keyTypes = [];

for(let key in myObject){
    // keys.push(key);
    // keyTypes.push(typeof(myObject[key]));
    console.log(`key: ${key} | type: ${typeof(myObject[key])}`);
}

