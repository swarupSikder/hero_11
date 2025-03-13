//----------------//
//   fetch data   //
//----------------//
// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         const status = true;
//         if (status) {
//             const mockData = {
//                 json: () => Promise.resolve({name: 'hero alom'})
//             }
//             resolve(mockData)
//         }
//         else {
//             reject('server error');
//         }
//     });
// }

// fetchData()
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));












//-----------------//
//   promise all   //
//-----------------//
// const urls = [
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/comments',
//     'https://jsonplaceholder.typicode.com/albums',
//     'https://jsonplaceholder.typicode.com/photos',
//     'https://jsonplaceholder.typicode.com/todos',
//     'https://jsonplaceholder.typicode.com/users',
// ];

// Promise.all(urls.map(url => {
//     return fetch(url).then(res => res.json()).then(data => data)
// }))
// .then(res => console.log(res))
// .catch(err => console.log(err));











//----------------//
//   async sync   //
//----------------//
// const loadData = () => {
//     console.log('I am first');

//     setTimeout(() => {
//         console.log('I am second');
//     }, 2000);

//     console.log('I am third');
// }

// loadData();













//----------------------//
//   async sync await   //
//----------------------//
// const loadData = async () => {
//     try {
//         console.log('I am first');

//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);

//         console.log('I am third');
//     }
//     catch {
//         console.log('error');
//     }
// }

// loadData();













//-------------------//
//   set intervals   //
//-------------------//

//part (1)
// console.log(1);
// console.log(2);
// console.log(3);

// // setTimeout(() => {
// //     console.log(1000);
// // }, 2000);

// setInterval(() => {
//     console.log(1000);
// }, 2000);

// console.log(4);
// console.log(5);
// console.log(6);




//part (2)
// let count = 0;
// const clockID = setInterval(() => {
//     count++;
//     console.log(count);
//     if (count >= 5) {
//         clearInterval(clockID);
//     }
// }, 1000);

// console.log(clockID);

















//----------------//
//   event loop   //
//----------------//
function a () {
    b();
    console.log('a');
}
function b () {
    c();
    console.log('b');
}
function c () {
    d();
    console.log('c');
}
function d () {
    e();
    console.log('d');
}
function e () {
    console.log('e');
}



console.log('hello');

setTimeout(() => {
    console.log('I am timeout 1');
},1000);

setTimeout(() => {
    console.log('I am timeout 2');
},1000);


a();
