import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl text-center text-2xl font-bold">
        Tailwind Test
      </h1>

      <div className="flex justify-center gap-4 mt-8">
        <Card username="Arnav" />
        <Card username="Guest" />
      </div>
    </>
  )
}

export default App
