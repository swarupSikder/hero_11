import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Users from './Users'
import { Suspense } from 'react';
import Friends from './Friends';
import Posts from './Posts';
import Players from './Players';



// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// const fetchFriends = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

// const fetchPosts = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }


function App() {
  // const friendsPromise = fetchFriends();

  // const click1 = () => {
  //   alert('Clicked 1');
  // }

  // const click3 = (num = 0) => {
  //   num = num + 5;
  //   alert(`Your lucky number is ${num}`);
  // }

  //const postsPromise = fetchPosts();

  return (
    <>
      <h1>Fetch Data from API</h1>

      <Players></Players>

      {/* <Suspense fallback={<p>Posts are loading...</p>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h3>loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>friends coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      {/* <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={click1}>click 1</button>
      <button onClick={() => alert('clicked 2')}>click 2</button>
      <button onClick={() => click3(10)}>click 3</button> */}
    </>
  )
}

export default App
