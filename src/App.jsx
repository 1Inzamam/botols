import { Suspense } from 'react'
import './App.css'
import {add, sub} from './utils/math/math'
import Bottles from './components/bottles/Bottles'

// const bottlesPromise = fetch('./bottles.json').then(res => res.json());
// const bottlesPromise2 = fetch('https://raw.githubusercontent.com/1Inzamam/data-bottles/refs/heads/main/data.json').then(res => res.json());

const bottlesPromise = fetch('bottles.json').then(res => res.json())

function App() {
 
  const sum = add(2, 4);
  const subs = sub(4, 2);
  console.log(sum, subs);

  return (
    <>
      <h1>Bottles</h1>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Bottles bottlesPromise = {bottlesPromise}>

          </Bottles>
        </Suspense>
    </>
  )
}

export default App
