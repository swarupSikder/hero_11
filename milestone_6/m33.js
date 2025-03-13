//-------------------------//
//   object to stringify   //
//-------------------------//
// const user = {
//     name: 'Koba',
//     age: 28,
//     salary: 35000,
//     isMarried: false,
// }

// const userJson = JSON.stringify(user);
// console.log(userJson);



//-------------------------//
//   stringify to object   //
//-------------------------//
//using parse
// const userJson2 = JSON.parse(userJson);
// console.log(userJson2);









//--------------------//
//   fetch-api-json   //
//--------------------//
const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
}









//--------------------//
//   load-main-data   //
//--------------------//
// const loadMainData = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => {
//             //console.log(data);
//             displayUsers(data);
//         })
// }

// const displayUsers = (data) => {
//     const userContainer = document.getElementById('user-container');

//     for(const user of data){
//         const li = document.createElement('li');
//         li.innerText = user.username;
//         userContainer.appendChild(li);
//     }
// }













//--------------------//
//   load-post-data   //
//--------------------//
// const loadPostsData = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => {
//             //console.log(data);
//             displayPosts(data);
//         })
// }

// const displayPosts = (data) => {
//     const postContainer = document.getElementById('post-container');

//     for (const post of data) {
//         const div = document.createElement('div');
//         div.innerHTML = `
//             <h1>${post.title}</h1>
//             <p>${post.body}</p>
//         `;

//         postContainer.appendChild(div);
//     }
// }
















//---------------------//
//   load-async-data   //
//---------------------//
const loadPostsData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        //console.log(data);
        displayPosts(data);
    }
    catch (error) {
        console.log(error);
    }
}

const displayPosts = (data) => {
    const postContainer = document.getElementById('post-container');

    for (const post of data) {
        const div = document.createElement('div');
        div.innerHTML = `
            <h1>${post.title}</h1>
            <p>${post.body}</p>
        `;

        postContainer.appendChild(div);
    }
}