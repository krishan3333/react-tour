import { use, useState } from 'react'  

import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  const addValue = () => {

    setCounter(counter + 1)
    console.log('clicked',counter);

  }
  const resetValue = () => {

    setCounter(0)
    console.log('reset',counter);

  }
  const removeValue = () => {
    if (counter <= 0) {
      console.log('Counter is already at zero');
      return
    }
    setCounter(counter - 1)
    console.log('removed',counter);

  }
  return (
    <>
      <h1>Click Counter</h1>
      <h2>{counter}</h2>
      
      <button
      onClick={addValue}
      >Add Value</button>
      
      <button
      onClick={removeValue}
      >Remove Value</button>
      <br />
      <button
      onClick={resetValue}
      >reset</button>

    </>
  )
}

export default App
