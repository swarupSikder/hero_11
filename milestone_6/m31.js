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
    //console.log(`${index}: ${value}`);
    return value * 2;
});
//console.log(...newNumbers);







const products = [
    { id: 1, brand: 'iPhone', color: 'black', price: 87000 },
    { id: 2, brand: 'iPhone', color: 'golden', price: 82000 },
    { id: 3, brand: 'redMe', color: 'white', price: 27500 },
    { id: 4, brand: 'samsung', color: 'golden', price: 75000 },
    { id: 5, brand: 'samsung', color: 'black', price: 65000 },
    { id: 6, brand: 'redMe', color: 'black', price: 48000 },
    { id: 7, brand: 'infinity', color: 'black', price: 17000 },
    { id: 8, brand: 'vivo', color: 'white', price: 27000 },
]

//--------------//
//   For Each   //
//--------------//
products.forEach(product => {
    //console.log(product);
    if (product.color === 'golden') {
        //console.log(product);
    }
})


//------------//
//   Filter   //
//------------//
//filter returns an ARRAY
const newProducts = products.filter(product => product.price > 50000);
//console.log(...newProducts);


//----------//
//   Find   //
//----------//  
//find returns an Object
const findProduct = products.find(p => p.id === 4);
//console.log(findProduct);












//-----------------//
//   constructor   //
//-----------------//
class User {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    printDetails() {
        console.log(`id-> ${this.id}, name-> ${this.name}, salary-> ${this.salary}`);
    }
}
const item1 = new User(1, "Koba", 12000);
const item2 = new User(2, "Sikder", 24000);
const item3 = new User(3, "Swarup", 27000);
//console.log(item3);
//item3.printDetails();












//-----------------//
//   inheritance   //
//-----------------//
class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    move() {
        console.log(`${this.name} can move`);
    }
}

class Bus extends Vehicle {
    constructor(name, price, seat) {
        super(name, price);
        this.seat = seat;
    }

    route() {
        console.log(`${this.name} can route`);
    }
}

class Truck extends Vehicle {
    constructor(name, price, load) {
        super(name, price);
        this.load = load;
    }

    loadFun() {
        console.log(`${this.name} can load`);
    }
}

const hanif = new Bus("Hanif", 1200, 40);
// hanif.move();
// hanif.route();
// console.log(hanif);









//-------------------//
//   Encapsulation   //
//-------------------//
class User2 {
    //make private the property -> salary
    //it is no longer available outside of this class 
    #salary
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.#salary = salary;
    }

    printDetails() {
        console.log(`id-> ${this.id}, name-> ${this.name}, salary-> ${this.salary}`);
    }

    printPrivate() {
        console.log(`id-> ${this.id}, name-> ${this.name}, salary-> ${this.#salary}`);
    }
}
const user1 = new User2(1, "Koba", 12000);
//console.log(item3);
// user1.printDetails();         //salary is undefined
// console.log(user1.salary);    //salary is undefined
//user1.printPrivate();          //salary is showing