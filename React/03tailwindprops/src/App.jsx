
import './App.css'                // Importing CSS for styling
import Card from './components/Card' // Importing custom Card component

function App() {
  

  // Example object to pass as props into the Card component
  let myObj = {
    username: "arnav",
    age: 21
  }

  return (
    <>
      {/* Heading styled with Tailwind CSS classes */}
      <h1 className="bg-green-400 text-black p-4 rounded-xl text-center text-2xl font-bold">
        Tailwind Test
      </h1>

      {/* Flexbox container to place Card components side by side with some gap */}
      <div className="flex justify-center gap-4 mt-8">
        {/* First Card: Passing username and object as props */}
        <Card username="Arnav" someObj={myObj} />
        
        {/* Second Card: Only passing username, no object */}
        <Card username="Guest" />
      </div>
    </>
  )
}

export default App  // Exporting the App component so it can be used in main.jsx
