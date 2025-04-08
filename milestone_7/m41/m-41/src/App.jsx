import { Suspense } from 'react'
import './App.css'
import Bottles from './components/bottles/Bottles'

const bottlesPromise = fetch('./bottleData.json').then(res => res.json());

function App() {

  return (
    <>
      <h1>m41</h1>
      <Suspense fallback={<h3>loading...</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
