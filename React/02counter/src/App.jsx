import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addVALUE = () => {
    if (counter < 20) {
      setCounter(counter + 1) // directly pass the new value
    } else {
      alert("Value cannot go above 20")
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      alert("Value cannot go below 0")
    }
  }

  return (
    <>
      <h1>Hello world</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addVALUE}>
        Add value {counter}
      </button>
      
      <br />
      
      <button onClick={removeValue}>
        Remove value</button>
    </>
  )
}

export default App
