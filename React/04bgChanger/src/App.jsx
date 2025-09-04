import { useState } from "react";

function App() {
  // useState hook → creates a state variable 'color' with default value "olive"
  // setColor → function used to update 'color'
  const [color, setColor] = useState("olive");

  return (
    <>
      {/* Main container that takes the full screen */}
      {/* The background color changes dynamically based on the 'color' state */}
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        {/* Bottom fixed white bar that holds all buttons */}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-full">

            {/* Red Button */}
            {/* onClick = event listener, triggers when the button is clicked */}
            {/* Here, it calls setColor("red"), so 'color' becomes "red" */}
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            {/* Blue Button */}
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            {/* Green Button */}
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


// 📝 Notes for you:

// useState("olive") → creates a state variable color with initial value "olive".

// setColor(newValue) → updates the state, causing React to re-render with the new value.

// onClick → an event handler in React that runs a function when the element is clicked.

// Example: onClick={() => setColor("red")} → when button is clicked, React calls setColor("red"), updating the background.

// The style prop sets inline styles. Here, it applies the chosen background color.