const person = {
    name: 'koba',
    age: 28,
    friends: ['kamrul', 'rayhan', 'imran'],
    isMarried: true
}


//-----------------------//
//   optional chaining   //
//-----------------------//
let myBossName = person['name'];
//console.log(myBossName);

let mySecondFriend = person.friends[1];
//console.log(mySecondFriend);

let myBestFriendAge = person?.bestFriends?.age;
//console.log(myBestFriendAge);







//---------------//
//   array map   //
//---------------//
const numbers = [12, 34, 56, 65, 67, 78, 98];
// const newNumbers = numbers.map(value => value * 2);

//or

// const newNumbers = numbers.map(value => {
//     return value * 2;
// });

//or

const newNumbers = numbers.map((value, index) => {
    console.log(`${index}: ${value}`);
    return value * 2;
});
console.log(...newNumbers);