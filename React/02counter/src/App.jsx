import { useState } from 'react'
import './App.css'

function App() {
  // useState hook → creates a state variable "counter" with initial value 15
  // setCounter → function used to update the counter
  let [counter, setCounter] = useState(15)

  // Function to increase value
  const addVALUE = () => {
    if (counter < 20) {
      // ✅ Correct way: directly update counter by +1
      setCounter(counter + 1)
    } else {
      alert("Value cannot go above 20")
    }
  }

  // Function to decrease value
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
        Remove value
      </button>
    </>
  )
}

export default App


// -------------------
// EXPLANATION OF MULTIPLE UPDATES
// -------------------

// ✅ This increments FOUR TIMES correctly
// Why? Because we are using the "functional update form" → setCounter(prev => prev + 1)
// React gives us the *latest state* (prev), so each update adds +1 on top of the last one.
// const incrementFourTimes = () => {
//   setCounter(prev => prev + 1)
//   setCounter(prev => prev + 1)
//   setCounter(prev => prev + 1)
//   setCounter(prev => prev + 1)
// }
// Final result = counter + 4


// ❌ This only increments ONCE
// Why? Because React batches state updates for performance (React Fiber).
// All four calls read the *same old value* of counter, then overwrite each other.
// So instead of +4, you only get +1.
// setCounter(counter + 1)
// setCounter(counter + 1)
// setCounter(counter + 1)
// setCounter(counter + 1)


 /**
   * useState(15) creates a state "cell" inside React.
   * - `counter` is the current value for this render (starts at 15).
   * - `setCounter` is a function that asks React to update `counter`
   *   and re-render the component with the new value.
   *
   * Important:
   * - `setCounter` does NOT change `counter` immediately.
   *   It *schedules* an update. The component will re-render,
   *   and on the *next render* `counter` will have the new value.
   */