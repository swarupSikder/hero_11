//-----------------------//
//   default parameter   //
//-----------------------//
function sum(num1 = 0, num2 = 0) {
    return num1 + num2;
}
// console.log(sum(122));

function mul(num1 = 1, num2 = 1) {
    return num1 * num2;
}
// console.log(mul(122));







//--------------------//
//   arrow function   //
//--------------------//
const doSum = (a, b) => {
    return a + b;
}
//console.log(doSum(12, 34));

const printHello = () => {
    console.log("Hello K.O.B.O.T");
}
//printHello();

const getSquare = a => a*a;
//console.log(getSquare(12));

document.getElementById('click-me').addEventListener('click', (event)=>{
    event.preventDefault();
    alert('This is a success alert!!!');
});








//---------------------//
//   spread operator   //
//---------------------//
const users = ["A", "B", "C"];
const users2 = ["D"];
//users2.push(...users);
users2.unshift(...users);
//console.log(...users2);






//-------------------//
//   max-min value   //
//-------------------//
const numbers = [10, 20, 35, 6, 7, 43];
const maxVal = Math.max(...numbers);
const minVal = Math.min(...numbers);
//console.log(maxVal, minVal);







//--------------------------//
//   object destructuring   //
//--------------------------//
const person = {
    name: 'koba',
    age: 28,
    friends: ['kamrul', 'rayhan', 'imran'],
    isMarried: true
}

const {name, age, friends, isMarried} = person;
//console.log(name, age, friends, isMarried);








//-------------------------//
//   array destructuring   //
//-------------------------//
const data = ["Koba", {name: "sikder", age: 28}, "Swarup"];
const [me, details, friend] = data;
//console.log(me, friend);








//---------------------------//
//   keys, values, entries   //
//---------------------------//
//console.log(...Object.keys(person));
//console.log(...Object.values(person));
//console.log(Object.entries(person));







//-----------------------------------------------//
//   object seal (new property can't be added)   //
//-----------------------------------------------//
//Object.seal(person);
//person.status = "found";
//console.log(person);






//---------------------------------------------------------//
//   object freeze (existing property can't be modified)   //
//---------------------------------------------------------//
//Object.freeze(person);
//person.isMarried = false;
//console.log(person);







//------------------------------//
//   loop throw for an object   //
//------------------------------//
// for(let key in person){
//     console.log(key);
// }

// for(let key in person){
//     console.log(`${key}: ${person[key]}`);
// }

// for(let key of Object.entries(person)){
//     console.log(key);
// }

for(let [key, value] of Object.entries(person)){
    console.log(key, value);
}