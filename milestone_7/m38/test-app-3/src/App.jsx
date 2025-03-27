import { Suspense } from 'react'
import './App.css'
import Count from './Count'
import Display from './Display'
import Users from './Users'

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {
  const fetchPromise = fetchUsers();

  return (
    <>
      <h1>Task 1</h1>

      <Count></Count>
      <Display></Display>

      <Suspense fallback={<p>loading...</p>}>
        <Users fetchPromise={fetchPromise}></Users>
      </Suspense>
    </>
  )
}

export default App
