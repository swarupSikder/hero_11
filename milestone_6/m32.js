//------------------------//
//   truthy-falsy value   //
//------------------------//
const name = "Koba";
// console.log(name);   //actual value
// console.log(!name);  //truthy-falsy value
// console.log(!!name); //truthy-falsy value

//empty objects/functions are always truthy
//type conversion (w3school.com) 








//-----------//
//   scope   //
//-----------//
function sum(num1, num2) {
    //hoisting
    //if you declare any variable using "var"
    //the variable automatically declare itself
    //directly at the top of the scope
    //it is here actually like this->
    //var result2;

    const result = num1 + num2;

    if (true) {
        var result2 = num1 + num2;
    }

    //console.log(result2);
}

sum(10, 20);









//-------------//
//   closure   //
//-------------//
function closure() {
    let count = 0;

    return () => {
        count++;
        console.log(count);
    }
}

// const result3 = closure();
// result3();
// result3();
// result3();
// const result4 = closure();
// result4();
// result4();
// result4();

// //call again
// result3();
// //call again
// result4();













//---------------//
//   call-back   //
//---------------//
function callBack(patri, name) {
    //console.log(`can I back the call -> ${patri}`);
    patri(name);
}

const patri = function (name) {
    console.log(`ok, got it -> ${name}`);
}

//callBack(patri, "Alom");









//---------------//
//   arguments   //
//---------------//
function argumentsFun(a, b, c) {
    console.log(...arguments);
    //arguments = (Array like Objects)  //read-only
    //const newArg = [...arguments];    //convert to array
}

//argumentsFun(10, 20, 30, 40, 50, 60);

//length check of a function
//check the number of parameters
//console.log(argumentsFun.length);