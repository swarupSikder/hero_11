import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'

const countries = async() => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  return res.json();
}

function App() {
  const promise = countries();

  return (
    <>
      <h1>m40</h1>

      <Suspense fallback={<p>loading...</p>}>
        <Countries promise={promise}></Countries>
      </Suspense>
    </>
  )
}

export default App
